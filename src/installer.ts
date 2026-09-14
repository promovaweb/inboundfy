/**
 * Planeja e aplica instalação, atualização, reparo e skills do Inboundfy.
 */

import { readFile, mkdir, rename } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import {
  collectContextTemplates,
  collectFrameworkPayload,
  collectProjectTemplates,
  collectSkillsPayload,
  readPackageVersion,
  sha256,
  type PayloadFile,
} from "./payload.js";
import {
  acquireLock,
  assertNoSymlink,
  exists,
  isRegularFile,
  readJson,
  relativePortable,
  resolvePortable,
  writeAtomic,
} from "./io.js";
import {
  instructionBlock,
  mergeInstructionBlock,
  resolveAgent,
  resolveInstructionFile,
} from "./agent.js";
import { scanContextSources } from "./context-scan.js";
import { CliError } from "./errors.js";
import { validateMinimumContext } from "./context-readiness.js";
import {
  ensureChannelDirectories,
  ensureProjectStructure,
} from "./project-structure.js";
import {
  installationManifestSchema,
  installationStateSchema,
} from "./schemas.js";
import type {
  AgentKind,
  InstallationManifest,
  InstallationState,
  ManagedFile,
  OperationMode,
  OperationResult,
  PlannedAction,
} from "./types.js";

export interface InstallOptions {
  projectRoot: string;
  mode: OperationMode;
  dryRun?: boolean;
  force?: boolean;
  yes?: boolean;
  agent?: AgentKind;
  skillsDirectory?: string;
  instructionFile?: "AGENTS.md" | "CLAUDE.md" | "none";
}

/**
 * Executa a operação solicitada com backup de customizações e manifesto novo.
 */
export async function executeInstallation(
  options: InstallOptions,
): Promise<OperationResult> {
  const version = await readPackageVersion();
  const statePath = join(options.projectRoot, ".inboundfy", "install.json");
  const manifestPath = join(options.projectRoot, ".inboundfy", "manifest.json");
  const previousState = await loadStateIfPresent(statePath);
  const previousManifest = await loadManifestIfPresent(manifestPath);
  validateMode(options, previousState, version);

  const selectedAgent =
    previousState && options.mode !== "install"
      ? {
          agent: previousState.agent,
          skillsDirectory: previousState.skillsDirectory,
        }
      : await resolveAgent({
          projectRoot: options.projectRoot,
          ...(options.agent ? { agent: options.agent } : {}),
          ...(options.skillsDirectory
            ? { skillsDirectory: options.skillsDirectory }
            : {}),
          ...(options.yes !== undefined ? { yes: options.yes } : {}),
        });
  const instructionFile =
    previousState && options.mode !== "install"
      ? previousState.instructionFile
      : await resolveInstructionFile({
          projectRoot: options.projectRoot,
          ...(options.instructionFile
            ? { requested: options.instructionFile }
            : {}),
          ...(options.yes !== undefined ? { yes: options.yes } : {}),
        });

  const now = new Date().toISOString();
  const state: InstallationState = {
    schemaVersion: 2,
    packageName: "@promovaweb/inboundfy",
    frameworkVersion: version,
    installedAt: previousState?.installedAt ?? now,
    updatedAt: now,
    projectRoot: ".",
    agent: selectedAgent.agent,
    skillsDirectory: selectedAgent.skillsDirectory,
    instructionFile,
    setupStatus: previousState?.setupStatus ?? "pending-context",
    paths: previousState?.paths ?? {
      acervo: "acervo",
      canais: "canais",
      calendario: "calendario",
    },
  };

  const payload =
    options.mode === "agent-install"
      ? await collectSkillsPayload(state.skillsDirectory)
      : [
          ...(await collectFrameworkPayload()),
          ...(await collectSkillsPayload(state.skillsDirectory)),
          virtualVersionFile(version),
        ];
  const actions: PlannedAction[] = [];
  const releaseLock = options.dryRun
    ? async () => undefined
    : await acquireLock(options.projectRoot);
  try {
    const managedFiles = await applyPayload({
      ...options,
      payload,
      previousManifest,
      actions,
    });
    if (options.mode !== "agent-install") {
      await ensureUserSpace(options, state, actions);
      await reconcileInstructions(options, state, actions);
      await reconcileLegacyFiles(
        options,
        payload,
        previousManifest,
        actions,
      );
    }
    const manifest: InstallationManifest = {
      schemaVersion: 2,
      packageName: "@promovaweb/inboundfy",
      frameworkVersion: version,
      generatedAt: now,
      managedFiles:
        options.mode === "agent-install" && previousManifest
          ? mergeManagedFiles(previousManifest.managedFiles, managedFiles)
          : managedFiles,
    };
    if (!options.dryRun) {
      await writeAtomic(
        options.projectRoot,
        statePath,
        `${JSON.stringify(state, null, 2)}\n`,
      );
      await writeAtomic(
        options.projectRoot,
        manifestPath,
        `${JSON.stringify(manifest, null, 2)}\n`,
      );
    }
    actions.push({
      action: options.dryRun ? "preserve" : previousState ? "update" : "create",
      path: ".inboundfy/install.json",
      detail: options.dryRun ? "seria atualizado" : "estado da instalação",
    });
    actions.push({
      action: options.dryRun
        ? "preserve"
        : previousManifest
          ? "update"
          : "create",
      path: ".inboundfy/manifest.json",
      detail: options.dryRun ? "seria atualizado" : "hashes gerenciados",
    });
    return {
      mode: options.mode,
      version,
      dryRun: Boolean(options.dryRun),
      actions,
      state,
    };
  } finally {
    await releaseLock();
  }
}

async function applyPayload(input: InstallOptions & {
  payload: PayloadFile[];
  previousManifest: InstallationManifest | null;
  actions: PlannedAction[];
}): Promise<ManagedFile[]> {
  const previous = new Map(
    input.previousManifest?.managedFiles.map((file) => [file.path, file]) ?? [],
  );
  const installed: ManagedFile[] = [];
  for (const file of input.payload) {
    const target = resolvePortable(input.projectRoot, file.targetRelative);
    const existing = await readRegularFileIfPresent(target);
    const old = previous.get(file.targetRelative);
    if (existing && sha256(existing) === file.sha256) {
      input.actions.push({ action: "unchanged", path: file.targetRelative });
    } else if (!existing) {
      input.actions.push({ action: "create", path: file.targetRelative });
      if (!input.dryRun) {
        await writeAtomic(input.projectRoot, target, file.content);
      }
    } else {
      const canReplace =
        Boolean(input.force) ||
        (old !== undefined && sha256(existing) === old.sha256);
      if (!canReplace && input.mode === "install") {
        throw new CliError(
          `O arquivo ${file.targetRelative} já existe e não pertence a uma instalação conhecida. Use --force para preservá-lo em migrações e continuar.`,
        );
      }
      if (!canReplace || sha256(existing) !== old?.sha256) {
        await backupFile(input, file.targetRelative, existing);
      }
      input.actions.push({ action: "update", path: file.targetRelative });
      if (!input.dryRun) {
        await writeAtomic(input.projectRoot, target, file.content);
      }
    }
    installed.push({
      path: file.targetRelative,
      source: file.sourceRelative,
      sha256: file.sha256,
      category: file.category,
    });
  }
  return installed.sort((left, right) => left.path.localeCompare(right.path));
}

async function ensureUserSpace(
  options: InstallOptions,
  state: InstallationState,
  actions: PlannedAction[],
): Promise<void> {
  await ensureProjectStructure(
    options.projectRoot,
    options.dryRun === undefined ? {} : { dryRun: options.dryRun },
  );
  for (const directory of [
    state.paths.acervo,
    state.paths.canais,
    state.paths.calendario,
  ]) {
    const target = resolvePortable(options.projectRoot, directory);
    if (await exists(target)) {
      actions.push({ action: "unchanged", path: directory });
    } else {
      actions.push({ action: "mkdir", path: directory });
      if (!options.dryRun) {
        await assertNoSymlink(options.projectRoot, target);
        await mkdir(target, { recursive: true });
      }
    }
  }
  for (const template of await collectProjectTemplates()) {
    const target = resolvePortable(options.projectRoot, template.targetRelative);
    if (await exists(target)) {
      actions.push({
        action: "preserve",
        path: template.targetRelative,
        detail: "arquivo do projeto preservado",
      });
    } else {
      actions.push({ action: "create", path: template.targetRelative });
      if (!options.dryRun) {
        await writeAtomic(options.projectRoot, target, template.content);
      }
    }
  }
  await ensureChannelDirectories(options.projectRoot, []);
  for (const template of await collectContextTemplates()) {
    const target = resolvePortable(options.projectRoot, template.targetRelative);
    if (await exists(target)) {
      actions.push({
        action: "preserve",
        path: template.targetRelative,
        detail: "informação do usuário",
      });
    } else {
      actions.push({ action: "create", path: template.targetRelative });
      if (!options.dryRun) {
        await writeAtomic(options.projectRoot, target, template.content);
      }
    }
  }

  const candidates = await scanContextSources(options.projectRoot, [
    state.paths.acervo,
    state.paths.canais,
    state.paths.calendario,
    state.skillsDirectory,
  ]);
  const candidatesPath = resolvePortable(
    options.projectRoot,
    ".inboundfy/fontes-candidatas.json",
  );
  actions.push({
    action: (await exists(candidatesPath)) ? "update" : "create",
    path: ".inboundfy/fontes-candidatas.json",
    detail: `${candidates.length} fonte(s) encontrada(s)`,
  });
  if (!options.dryRun) {
    await writeAtomic(
      options.projectRoot,
      candidatesPath,
      `${JSON.stringify(
        {
          schemaVersion: 1,
          generatedAt: new Date().toISOString(),
          sources: candidates,
        },
        null,
        2,
      )}\n`,
    );
  }

  const sourcesPath = resolvePortable(
    options.projectRoot,
    ".inboundfy/fontes-projeto.md",
  );
  if (await exists(sourcesPath)) {
    actions.push({
      action: "preserve",
      path: ".inboundfy/fontes-projeto.md",
      detail: "classificação mantida",
    });
  } else {
    actions.push({ action: "create", path: ".inboundfy/fontes-projeto.md" });
    if (!options.dryRun) {
      await writeAtomic(
        options.projectRoot,
        sourcesPath,
        renderProjectSources(candidates),
      );
    }
  }
}

async function reconcileInstructions(
  options: InstallOptions,
  state: InstallationState,
  actions: PlannedAction[],
): Promise<void> {
  if (!state.instructionFile) return;
  const path = resolvePortable(options.projectRoot, state.instructionFile);
  const current = (await exists(path)) ? await readFile(path, "utf8") : "";
  const desired = mergeInstructionBlock(current);
  if (current === desired) {
    actions.push({ action: "unchanged", path: state.instructionFile });
    return;
  }
  actions.push({
    action: current ? "update" : "create",
    path: state.instructionFile,
    detail: "somente o bloco delimitado do Inboundfy",
  });
  if (!options.dryRun) {
    await writeAtomic(options.projectRoot, path, desired);
  }
}

async function reconcileLegacyFiles(
  options: InstallOptions,
  payload: PayloadFile[],
  previousManifest: InstallationManifest | null,
  actions: PlannedAction[],
): Promise<void> {
  if (!previousManifest || options.mode !== "update") return;
  const desired = new Set(payload.map((file) => file.targetRelative));
  for (const old of previousManifest.managedFiles) {
    if (desired.has(old.path)) continue;
    const target = resolvePortable(options.projectRoot, old.path);
    const content = await readRegularFileIfPresent(target);
    if (!content) continue;
    const backup = backupRelative("arquivos-legados", old.path);
    actions.push({
      action: "remove-legacy",
      path: old.path,
      detail: `preservado em ${backup}`,
    });
    if (!options.dryRun) {
      const backupPath = resolvePortable(options.projectRoot, backup);
      await assertNoSymlink(options.projectRoot, target);
      await assertNoSymlink(options.projectRoot, backupPath);
      await mkdir(dirname(backupPath), { recursive: true });
      await rename(target, backupPath);
    }
  }
}

async function backupFile(
  options: InstallOptions & { actions: PlannedAction[] },
  relativePath: string,
  content: Buffer,
): Promise<void> {
  const backup = backupRelative("arquivos-customizados", relativePath);
  options.actions.push({
    action: "backup",
    path: relativePath,
    detail: backup,
  });
  if (!options.dryRun) {
    await writeAtomic(
      options.projectRoot,
      resolvePortable(options.projectRoot, backup),
      content,
    );
  }
}

function backupRelative(group: string, path: string): string {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `.inboundfy/migracoes/${group}/${stamp}/${path}`;
}

function virtualVersionFile(version: string): PayloadFile {
  const content = Buffer.from(`# Versão do Inboundfy instalada

- Versão: ${version}
- Pacote: @promovaweb/inboundfy@${version}
- Gerenciado pelo CLI: sim
`);
  return {
    sourcePath: "generated",
    sourceRelative: "generated:VERSAO.md",
  targetRelative: ".inboundfy/framework/VERSAO.md",
    content,
    sha256: sha256(content),
    category: "framework",
  };
}

function renderProjectSources(
  candidates: Awaited<ReturnType<typeof scanContextSources>>,
): string {
  const rows =
    candidates.length === 0
      ? "| — | Nenhuma fonte encontrada | pendente |"
      : candidates
          .map(
            (source) =>
              `| \`${source.path}\` | ${escapeTable(source.title)} | pendente |`,
          )
          .join("\n");
  return `# Fontes do projeto

O CLI encontrou os arquivos abaixo sem alterar as fontes. A skill
\`inboundfy-setup\` deve classificar finalidade, autoridade, assuntos e
divergências antes que outra skill use uma fonte na produção.

| Caminho | Título | Classificação |
| --- | --- | --- |
${rows}

O inventário técnico completo, com headings e SHA-256, está em
\`.inboundfy/fontes-candidatas.json\`.
`;
}

function escapeTable(value: string): string {
  return value.replaceAll("|", "\\|").replaceAll("\n", " ");
}

async function loadStateIfPresent(
  path: string,
): Promise<InstallationState | null> {
  if (!(await exists(path))) return null;
  return installationStateSchema.parse(
    await readJson<InstallationState>(path),
  ) as InstallationState;
}

async function loadManifestIfPresent(
  path: string,
): Promise<InstallationManifest | null> {
  if (!(await exists(path))) return null;
  return installationManifestSchema.parse(
    await readJson<InstallationManifest>(path),
  ) as InstallationManifest;
}

function validateMode(
  options: InstallOptions,
  state: InstallationState | null,
  version: string,
): void {
  if (options.mode === "install" && state && !options.force) {
    throw new CliError(
      "O Inboundfy já está instalado. Use update, repair ou install --force.",
    );
  }
  if (options.mode !== "install" && !state) {
    throw new CliError(
      "A instalação não foi encontrada. Execute inboundfy install primeiro.",
    );
  }
  if (
    options.mode === "repair" &&
    state &&
    state.frameworkVersion !== version
  ) {
    throw new CliError(
      `A instalação usa ${state.frameworkVersion} e este CLI usa ${version}. Execute update para mudar de versão.`,
    );
  }
}

async function readRegularFileIfPresent(path: string): Promise<Buffer | null> {
  return (await isRegularFile(path)) ? readFile(path) : null;
}

function mergeManagedFiles(
  previous: ManagedFile[],
  current: ManagedFile[],
): ManagedFile[] {
  const merged = new Map(previous.map((file) => [file.path, file]));
  for (const file of current) merged.set(file.path, file);
  return [...merged.values()].sort((left, right) =>
    left.path.localeCompare(right.path),
  );
}

/** Marca o preenchimento semântico concluído depois da entrevista da skill. */
export async function markContextReady(projectRoot: string): Promise<void> {
  const path = join(projectRoot, ".inboundfy", "install.json");
  const state = installationStateSchema.parse(
    await readJson<InstallationState>(path),
  ) as InstallationState;
  const readiness = await validateMinimumContext(projectRoot);
  if (!readiness.ready) {
    throw new CliError(
      `O preenchimento mínimo ainda está incompleto:\n- ${readiness.missing.join("\n- ")}`,
    );
  }
  state.setupStatus = "ready";
  state.updatedAt = new Date().toISOString();
  await writeAtomic(projectRoot, path, `${JSON.stringify(state, null, 2)}\n`);
}

/** Atualiza somente o inventário técnico de fontes locais. */
export async function refreshContextSources(
  projectRoot: string,
): Promise<number> {
  const path = join(projectRoot, ".inboundfy", "install.json");
  const state = installationStateSchema.parse(
    await readJson<InstallationState>(path),
  ) as InstallationState;
  const candidates = await scanContextSources(projectRoot, [
    state.paths.acervo,
    state.paths.canais,
    state.paths.calendario,
    state.skillsDirectory,
  ]);
  await writeAtomic(
    projectRoot,
    join(projectRoot, ".inboundfy", "fontes-candidatas.json"),
    `${JSON.stringify(
      {
        schemaVersion: 1,
        generatedAt: new Date().toISOString(),
        sources: candidates,
      },
      null,
      2,
    )}\n`,
  );
  return candidates.length;
}
