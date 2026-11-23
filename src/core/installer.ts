/**
 * Plans and applies install, update, repair and skills-only installs.
 *
 * Managed files are tracked in `.inboundfy/manifest.json` by SHA-256. A
 * managed file changed by the user is backed up to `.inboundfy/migracoes/`
 * before being replaced; user data (context, strategy, indices, archive,
 * channels, calendar) is created once and then always preserved. Every run
 * holds the project lock and writes atomically.
 */
import { mkdir, readFile, rename } from "node:fs/promises";
import { dirname, join } from "node:path";
import { error } from "../app/errors.ts";
import { mergeInstructionBlock, resolveAgent, resolveInstructionFile } from "./agent.ts";
import { scanContextSources, validateMinimumContext } from "./context.ts";
import { acquireLock, assertNoSymlink, exists, isRegularFile, readJson, resolvePortable, writeAtomic } from "./io.ts";
import { collectContextTemplates, collectFrameworkPayload, collectProjectTemplates, collectSkillsPayload, frameworkVersion, sha256, type PayloadFile } from "./payload.ts";
import { ensureChannelDirectories, ensureProjectStructure } from "./project.ts";
import { installationManifestSchema, installationStateSchema, PACKAGE_NAME } from "./schemas.ts";
import type { AgentKind, InstallationManifest, InstallationState, ManagedFile, OperationMode, OperationResult, PlannedAction } from "./types.ts";

/** Options shared by the installation operations. */
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

const STATE_PATH = ".inboundfy/install.json";
const MANIFEST_PATH = ".inboundfy/manifest.json";

/** Runs the requested operation, backing up customizations, and writes a new manifest. */
export async function executeInstallation(options: InstallOptions): Promise<OperationResult> {
  const version = frameworkVersion();
  const statePath = join(options.projectRoot, STATE_PATH);
  const manifestPath = join(options.projectRoot, MANIFEST_PATH);
  const previousState = await loadInstallState(options.projectRoot);
  const previousManifest = await loadManifestIfPresent(manifestPath);
  validateMode(options, previousState, version);

  const reuse = previousState && options.mode !== "install";
  const selectedAgent = reuse
    ? { agent: previousState.agent, skillsDirectory: previousState.skillsDirectory }
    : await resolveAgent({
        projectRoot: options.projectRoot,
        ...(options.agent ? { agent: options.agent } : {}),
        ...(options.skillsDirectory ? { skillsDirectory: options.skillsDirectory } : {}),
        ...(options.yes !== undefined ? { yes: options.yes } : {}),
      });
  const instructionFile = reuse
    ? previousState.instructionFile
    : await resolveInstructionFile({
        projectRoot: options.projectRoot,
        ...(options.instructionFile ? { requested: options.instructionFile } : {}),
        ...(options.yes !== undefined ? { yes: options.yes } : {}),
      });

  const now = new Date().toISOString();
  const state: InstallationState = {
    schemaVersion: 2,
    packageName: PACKAGE_NAME,
    frameworkVersion: version,
    installedAt: previousState?.installedAt ?? now,
    updatedAt: now,
    projectRoot: ".",
    agent: selectedAgent.agent,
    skillsDirectory: selectedAgent.skillsDirectory,
    instructionFile,
    setupStatus: previousState?.setupStatus ?? "pending-context",
    paths: previousState?.paths ?? { acervo: "acervo", canais: "canais", calendario: "calendario" },
  };

  const payload =
    options.mode === "agent-install"
      ? await collectSkillsPayload(state.skillsDirectory)
      : [...(await collectFrameworkPayload()), ...(await collectSkillsPayload(state.skillsDirectory)), versionFile(version)];
  const actions: PlannedAction[] = [];
  const releaseLock = options.dryRun ? async () => undefined : await acquireLock(options.projectRoot);
  try {
    const managedFiles = await applyPayload({ ...options, payload, previousManifest, actions });
    if (options.mode !== "agent-install") {
      await ensureUserSpace(options, state, actions);
      await reconcileInstructions(options, state, actions);
      await reconcileLegacyFiles(options, payload, previousManifest, actions);
    }
    const nextManifest: InstallationManifest = {
      schemaVersion: 2,
      packageName: PACKAGE_NAME,
      frameworkVersion: version,
      generatedAt: now,
      managedFiles: options.mode === "agent-install" && previousManifest ? mergeManagedFiles(previousManifest.managedFiles, managedFiles) : managedFiles,
    };
    if (!options.dryRun) {
      await writeAtomic(options.projectRoot, statePath, `${JSON.stringify(state, null, 2)}\n`);
      await writeAtomic(options.projectRoot, manifestPath, `${JSON.stringify(nextManifest, null, 2)}\n`);
    }
    actions.push({ action: options.dryRun ? "preserve" : previousState ? "update" : "create", path: STATE_PATH, detail: options.dryRun ? "would be updated" : "installation state" });
    actions.push({ action: options.dryRun ? "preserve" : previousManifest ? "update" : "create", path: MANIFEST_PATH, detail: options.dryRun ? "would be updated" : "managed hashes" });
    return { mode: options.mode, version, dryRun: Boolean(options.dryRun), actions, state };
  } finally {
    await releaseLock();
  }
}

async function applyPayload(input: InstallOptions & { payload: PayloadFile[]; previousManifest: InstallationManifest | null; actions: PlannedAction[] }): Promise<ManagedFile[]> {
  const previous = new Map(input.previousManifest?.managedFiles.map((f) => [f.path, f]) ?? []);
  const installed: ManagedFile[] = [];
  for (const file of input.payload) {
    const target = resolvePortable(input.projectRoot, file.targetRelative);
    const existing = await readRegularFileIfPresent(target);
    const old = previous.get(file.targetRelative);
    if (existing && sha256(existing) === file.sha256) {
      input.actions.push({ action: "unchanged", path: file.targetRelative });
    } else if (!existing) {
      input.actions.push({ action: "create", path: file.targetRelative });
      if (!input.dryRun) await writeAtomic(input.projectRoot, target, file.content);
    } else {
      const owned = old !== undefined && sha256(existing) === old.sha256;
      if (!owned && !input.force && input.mode === "install") {
        throw error.conflict(`${file.targetRelative} already exists and does not belong to a known installation. Use --force to back it up and continue.`, { path: file.targetRelative });
      }
      if (!owned) await backupFile(input, file.targetRelative, existing);
      input.actions.push({ action: "update", path: file.targetRelative });
      if (!input.dryRun) await writeAtomic(input.projectRoot, target, file.content);
    }
    installed.push({ path: file.targetRelative, source: file.sourceRelative, sha256: file.sha256, category: file.category });
  }
  return installed.sort((a, b) => a.path.localeCompare(b.path));
}

async function createOnce(options: InstallOptions, actions: PlannedAction[], template: PayloadFile, preserveDetail: string): Promise<void> {
  const target = resolvePortable(options.projectRoot, template.targetRelative);
  if (await exists(target)) {
    actions.push({ action: "preserve", path: template.targetRelative, detail: preserveDetail });
    return;
  }
  actions.push({ action: "create", path: template.targetRelative });
  if (!options.dryRun) await writeAtomic(options.projectRoot, target, template.content);
}

async function ensureUserSpace(options: InstallOptions, state: InstallationState, actions: PlannedAction[]): Promise<void> {
  await ensureProjectStructure(options.projectRoot, options.dryRun === undefined ? {} : { dryRun: options.dryRun });
  for (const directory of [state.paths.acervo, state.paths.canais, state.paths.calendario]) {
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
  for (const template of await collectProjectTemplates()) await createOnce(options, actions, template, "project file preserved");
  await ensureChannelDirectories(options.projectRoot, []);
  for (const template of await collectContextTemplates()) await createOnce(options, actions, template, "user information preserved");

  const candidates = await scanContextSources(options.projectRoot, [state.paths.acervo, state.paths.canais, state.paths.calendario, state.skillsDirectory]);
  const candidatesPath = resolvePortable(options.projectRoot, ".inboundfy/fontes-candidatas.json");
  actions.push({ action: (await exists(candidatesPath)) ? "update" : "create", path: ".inboundfy/fontes-candidatas.json", detail: `${candidates.length} source(s) found` });
  if (!options.dryRun) await writeCandidates(options.projectRoot, candidates);

  const sourcesPath = resolvePortable(options.projectRoot, ".inboundfy/fontes-projeto.md");
  if (await exists(sourcesPath)) {
    actions.push({ action: "preserve", path: ".inboundfy/fontes-projeto.md", detail: "classification kept" });
  } else {
    actions.push({ action: "create", path: ".inboundfy/fontes-projeto.md" });
    if (!options.dryRun) await writeAtomic(options.projectRoot, sourcesPath, renderProjectSources(candidates));
  }
}

async function writeCandidates(projectRoot: string, candidates: Awaited<ReturnType<typeof scanContextSources>>): Promise<void> {
  await writeAtomic(
    projectRoot,
    join(projectRoot, ".inboundfy", "fontes-candidatas.json"),
    `${JSON.stringify({ schemaVersion: 1, generatedAt: new Date().toISOString(), sources: candidates }, null, 2)}\n`,
  );
}

async function reconcileInstructions(options: InstallOptions, state: InstallationState, actions: PlannedAction[]): Promise<void> {
  if (!state.instructionFile) return;
  const path = resolvePortable(options.projectRoot, state.instructionFile);
  const current = (await exists(path)) ? await readFile(path, "utf8") : "";
  const desired = mergeInstructionBlock(current);
  if (current === desired) {
    actions.push({ action: "unchanged", path: state.instructionFile });
    return;
  }
  actions.push({ action: current ? "update" : "create", path: state.instructionFile, detail: "only the delimited Inboundfy block" });
  if (!options.dryRun) await writeAtomic(options.projectRoot, path, desired);
}

async function reconcileLegacyFiles(options: InstallOptions, payload: PayloadFile[], previousManifest: InstallationManifest | null, actions: PlannedAction[]): Promise<void> {
  if (!previousManifest || options.mode !== "update") return;
  const desired = new Set(payload.map((f) => f.targetRelative));
  for (const old of previousManifest.managedFiles) {
    if (desired.has(old.path)) continue;
    const target = resolvePortable(options.projectRoot, old.path);
    if (!(await readRegularFileIfPresent(target))) continue;
    const backup = backupRelative("arquivos-legados", old.path);
    actions.push({ action: "remove-legacy", path: old.path, detail: `kept at ${backup}` });
    if (!options.dryRun) {
      const backupPath = resolvePortable(options.projectRoot, backup);
      await assertNoSymlink(options.projectRoot, target);
      await assertNoSymlink(options.projectRoot, backupPath);
      await mkdir(dirname(backupPath), { recursive: true });
      await rename(target, backupPath);
    }
  }
}

async function backupFile(options: InstallOptions & { actions: PlannedAction[] }, relativePath: string, content: Buffer): Promise<void> {
  const backup = backupRelative("arquivos-customizados", relativePath);
  options.actions.push({ action: "backup", path: relativePath, detail: backup });
  if (!options.dryRun) await writeAtomic(options.projectRoot, resolvePortable(options.projectRoot, backup), content);
}

function backupRelative(group: string, path: string): string {
  return `.inboundfy/migracoes/${group}/${new Date().toISOString().replace(/[:.]/g, "-")}/${path}`;
}

function versionFile(version: string): PayloadFile {
  const content = Buffer.from(`# Versão do Inboundfy instalada\n\n- Versão: ${version}\n- Binário: inboundfy ${version}\n- Gerenciado pelo binário: sim\n`);
  return { sourceRelative: "generated:VERSAO.md", targetRelative: ".inboundfy/framework/VERSAO.md", content, sha256: sha256(content), category: "framework" };
}

function renderProjectSources(candidates: Awaited<ReturnType<typeof scanContextSources>>): string {
  const rows = candidates.length === 0 ? "| — | Nenhuma fonte encontrada | pendente |" : candidates.map((s) => `| \`${s.path}\` | ${s.title.replaceAll("|", "\\|").replaceAll("\n", " ")} | pendente |`).join("\n");
  return `# Fontes do projeto

O binário encontrou os arquivos abaixo sem alterar as fontes. A skill
\`inboundfy-setup\` deve classificar finalidade, autoridade, assuntos e
divergências antes que outra skill use uma fonte na produção.

| Caminho | Título | Classificação |
| --- | --- | --- |
${rows}

O inventário técnico completo, com headings e SHA-256, está em
\`.inboundfy/fontes-candidatas.json\`.
`;
}

/** Reads and validates `.inboundfy/install.json`; `null` when absent. */
export async function loadInstallState(projectRoot: string): Promise<InstallationState | null> {
  const path = join(projectRoot, STATE_PATH);
  if (!(await exists(path))) return null;
  const parsed = installationStateSchema.safeParse(await readJson<unknown>(path));
  if (!parsed.success) throw error.notInstalled(`${STATE_PATH} is invalid. Run "inboundfy doctor" for details.`, { path: STATE_PATH });
  return parsed.data as InstallationState;
}

/** Same as `loadInstallState`, but NOT_INSTALLED when absent. */
export async function requireInstallState(projectRoot: string): Promise<InstallationState> {
  const state = await loadInstallState(projectRoot);
  if (!state) throw error.notInstalled(`Inboundfy is not installed in ${projectRoot}. Run "inboundfy install" first.`, { projectRoot });
  return state;
}

async function loadManifestIfPresent(path: string): Promise<InstallationManifest | null> {
  if (!(await exists(path))) return null;
  const parsed = installationManifestSchema.safeParse(await readJson<unknown>(path));
  if (!parsed.success) throw error.notInstalled(`${MANIFEST_PATH} is invalid. Run "inboundfy doctor" for details.`, { path: MANIFEST_PATH });
  return parsed.data as InstallationManifest;
}

function validateMode(options: InstallOptions, state: InstallationState | null, version: string): void {
  if (options.mode === "install" && state && !options.force) throw error.conflict("Inboundfy is already installed. Use update, repair or install --force.");
  if (options.mode !== "install" && !state) throw error.notInstalled('Installation not found. Run "inboundfy install" first.');
  if (options.mode === "repair" && state && state.frameworkVersion !== version) {
    throw error.conflict(`The project uses ${state.frameworkVersion} and this binary ships ${version}. Run update to change versions.`, { installed: state.frameworkVersion, binary: version });
  }
}

async function readRegularFileIfPresent(path: string): Promise<Buffer | null> {
  return (await isRegularFile(path)) ? readFile(path) : null;
}

function mergeManagedFiles(previous: ManagedFile[], current: ManagedFile[]): ManagedFile[] {
  const merged = new Map(previous.map((f) => [f.path, f]));
  for (const f of current) merged.set(f.path, f);
  return [...merged.values()].sort((a, b) => a.path.localeCompare(b.path));
}

/** Marks the semantic setup as done after the setup skill interview. */
export async function markContextReady(projectRoot: string): Promise<InstallationState> {
  const state = await requireInstallState(projectRoot);
  const readiness = await validateMinimumContext(projectRoot);
  if (!readiness.ready) throw error.conflict(`The minimum context is still incomplete:\n- ${readiness.missing.join("\n- ")}`, { missing: readiness.missing });
  state.setupStatus = "ready";
  state.updatedAt = new Date().toISOString();
  await writeAtomic(projectRoot, join(projectRoot, STATE_PATH), `${JSON.stringify(state, null, 2)}\n`);
  return state;
}

/** Refreshes only the technical list of local context sources. */
export async function refreshContextSources(projectRoot: string): Promise<number> {
  const state = await requireInstallState(projectRoot);
  const candidates = await scanContextSources(projectRoot, [state.paths.acervo, state.paths.canais, state.paths.calendario, state.skillsDirectory]);
  await writeCandidates(projectRoot, candidates);
  return candidates.length;
}
