/**
 * Diagnóstico read-only da instalação e resumo de estado do framework.
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hasInstructionBlock } from "./agent.js";
import { exists, isRegularFile, readJson, resolvePortable } from "./io.js";
import { collectContextTemplates, readPackageVersion, sha256 } from "./payload.js";
import {
  installationManifestSchema,
  installationStateSchema,
} from "./schemas.js";
import type {
  DoctorCheck,
  DoctorReport,
  InstallationManifest,
  InstallationState,
} from "./types.js";
import { validateMinimumContext } from "./context-readiness.js";

const EXPECTED_PROJECT_FILES = [
  ".inboundfy/README.md",
  ".inboundfy/estrategia.md",
  ".inboundfy/pipeline.md",
  ".inboundfy/fontes-projeto.md",
  ".inboundfy/fontes-candidatas.json",
  ".inboundfy/indices/acervo.json",
  ".inboundfy/indices/conteudos.json",
  ".inboundfy/indices/calendario.json",
] as const;

/** Confere todos os arquivos sem criar diretório, trava ou cache. */
export async function runDoctor(projectRoot: string): Promise<DoctorReport> {
  const cliVersion = await readPackageVersion();
  const checks: DoctorCheck[] = [];
  const state = await loadState(projectRoot, checks);
  const manifest = await loadManifest(projectRoot, checks);

  if (state) {
    const readiness = await validateMinimumContext(projectRoot);
    checks.push(
      state.frameworkVersion === cliVersion
        ? ok("version", `CLI e framework usam ${cliVersion}.`)
        : warning(
            "version",
            `O projeto usa ${state.frameworkVersion}; o CLI atual usa ${cliVersion}. Execute update com a versão desejada.`,
            ".inboundfy/install.json",
          ),
    );
    checks.push(
      state.setupStatus === "ready" && readiness.ready
        ? ok("setup-status", "O preenchimento inicial foi marcado como concluído.")
        : state.setupStatus === "ready"
          ? error(
              "setup-status",
              `O setup está marcado como concluído, mas faltam: ${readiness.missing.join("; ")}.`,
              ".inboundfy",
            )
        : warning(
            "setup-status",
            "Os arquivos foram instalados, mas a skill inboundfy-setup ainda precisa concluir o preenchimento inicial.",
            ".inboundfy/install.json",
          ),
    );
    for (const directory of [
      state.paths.acervo,
      state.paths.canais,
      state.paths.calendario,
    ]) {
      checks.push(
        (await exists(resolvePortable(projectRoot, directory)))
          ? ok(`directory:${directory}`, `Diretório presente: ${directory}`)
          : error(
              `directory:${directory}`,
              `Diretório ausente: ${directory}`,
              directory,
            ),
      );
    }
    if (state.instructionFile) {
      checks.push(
        (await hasInstructionBlock(join(projectRoot, state.instructionFile)))
          ? ok(
              "instruction-block",
              `Bloco do Inboundfy íntegro em ${state.instructionFile}.`,
            )
          : error(
              "instruction-block",
              `O bloco delimitado do Inboundfy está ausente ou divergente em ${state.instructionFile}.`,
              state.instructionFile,
            ),
      );
    }
  }

  if (manifest) {
    if (state && manifest.frameworkVersion !== state.frameworkVersion) {
      checks.push(
        error(
          "manifest-version",
          "A versão do manifesto diverge do estado da instalação.",
          ".inboundfy/manifest.json",
        ),
      );
    } else {
      checks.push(ok("manifest-version", "O manifesto usa a versão instalada."));
    }
    for (const managed of manifest.managedFiles) {
      const path = resolvePortable(projectRoot, managed.path);
      if (!(await isRegularFile(path))) {
        checks.push(
          error(
            `managed:${managed.path}`,
            `Arquivo gerenciado ausente ou inválido: ${managed.path}`,
            managed.path,
          ),
        );
        continue;
      }
      const current = sha256(await readFile(path));
      checks.push(
        current === managed.sha256
          ? ok(`managed:${managed.path}`, `Arquivo íntegro: ${managed.path}`)
          : error(
              `managed:${managed.path}`,
              `Arquivo gerenciado foi alterado: ${managed.path}`,
              managed.path,
            ),
      );
    }
  }

  for (const path of EXPECTED_PROJECT_FILES) {
    checks.push(
      (await isRegularFile(resolvePortable(projectRoot, path)))
        ? ok(`project:${path}`, `Arquivo do projeto presente: ${path}`)
        : error(
            `project:${path}`,
            `Arquivo do projeto ausente: ${path}`,
            path,
          ),
    );
  }

  for (const template of await collectContextTemplates()) {
    checks.push(
      (await isRegularFile(resolvePortable(projectRoot, template.targetRelative)))
        ? ok(
            `context:${template.targetRelative}`,
            `Contexto presente: ${template.targetRelative}`,
          )
        : error(
            `context:${template.targetRelative}`,
            `Contexto ausente: ${template.targetRelative}`,
            template.targetRelative,
          ),
    );
  }

  const summary = {
    errors: checks.filter((check) => check.level === "error").length,
    warnings: checks.filter((check) => check.level === "warning").length,
    ok: checks.filter((check) => check.level === "ok").length,
  };
  return {
    schemaVersion: 2,
    healthy: summary.errors === 0,
    installedVersion: state?.frameworkVersion ?? null,
    cliVersion,
    projectRoot,
    checks,
    summary,
  };
}

async function loadState(
  projectRoot: string,
  checks: DoctorCheck[],
): Promise<InstallationState | null> {
  const path = join(projectRoot, ".inboundfy", "install.json");
  if (!(await isRegularFile(path))) {
    checks.push(
      error(
        "install-state",
        "A instalação não possui .inboundfy/install.json.",
        ".inboundfy/install.json",
      ),
    );
    return null;
  }
  try {
    const state = installationStateSchema.parse(
      await readJson<InstallationState>(path),
    ) as InstallationState;
    checks.push(ok("install-state", "O estado da instalação é válido."));
    return state;
  } catch {
    checks.push(
      error(
        "install-state",
        "O arquivo .inboundfy/install.json é inválido.",
        ".inboundfy/install.json",
      ),
    );
    return null;
  }
}

async function loadManifest(
  projectRoot: string,
  checks: DoctorCheck[],
): Promise<InstallationManifest | null> {
  const path = join(projectRoot, ".inboundfy", "manifest.json");
  if (!(await isRegularFile(path))) {
    checks.push(
      error(
        "manifest",
        "A instalação não possui .inboundfy/manifest.json.",
        ".inboundfy/manifest.json",
      ),
    );
    return null;
  }
  try {
    const manifest = installationManifestSchema.parse(
      await readJson<InstallationManifest>(path),
    ) as InstallationManifest;
    checks.push(ok("manifest", "O manifesto da instalação é válido."));
    return manifest;
  } catch {
    checks.push(
      error(
        "manifest",
        "O arquivo .inboundfy/manifest.json é inválido.",
        ".inboundfy/manifest.json",
      ),
    );
    return null;
  }
}

function ok(id: string, message: string): DoctorCheck {
  return { id, level: "ok", message, repairable: false };
}

function warning(id: string, message: string, path?: string): DoctorCheck {
  return {
    id,
    level: "warning",
    message,
    ...(path ? { path } : {}),
    repairable: id !== "setup-status",
  };
}

function error(id: string, message: string, path?: string): DoctorCheck {
  return {
    id,
    level: "error",
    message,
    ...(path ? { path } : {}),
    repairable: true,
  };
}
