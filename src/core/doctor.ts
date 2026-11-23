/**
 * Read-only diagnosis of an Inboundfy project.
 *
 * Checks the install state, the manifest hashes, the instruction block, the
 * data directories, the expected project files and the context templates.
 * Never creates a directory, lock or cache.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hasInstructionBlock } from "./agent.ts";
import { validateMinimumContext } from "./context.ts";
import { exists, isRegularFile, readJson, resolvePortable } from "./io.ts";
import { collectContextTemplates, frameworkVersion, sha256 } from "./payload.ts";
import { installationManifestSchema, installationStateSchema } from "./schemas.ts";
import type { InstallationManifest, InstallationState, ProjectCheck, ProjectReport } from "./types.ts";

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

const ok = (id: string, message: string): ProjectCheck => ({ id, level: "ok", message, repairable: false });
const warning = (id: string, message: string, path?: string): ProjectCheck => ({ id, level: "warning", message, ...(path ? { path } : {}), repairable: id !== "setup-status" });
const fail = (id: string, message: string, path?: string): ProjectCheck => ({ id, level: "error", message, ...(path ? { path } : {}), repairable: true });

/** Runs every project check and summarizes the result. */
export async function runProjectDoctor(projectRoot: string): Promise<ProjectReport> {
  const cliVersion = frameworkVersion();
  const checks: ProjectCheck[] = [];
  const state = await loadState(projectRoot, checks);
  const manifest = await loadManifest(projectRoot, checks);

  if (state) {
    const readiness = await validateMinimumContext(projectRoot);
    checks.push(
      state.frameworkVersion === cliVersion
        ? ok("version", `Binary and framework both use ${cliVersion}.`)
        : warning("version", `The project uses ${state.frameworkVersion}; this binary ships ${cliVersion}. Run update to change versions.`, ".inboundfy/install.json"),
    );
    checks.push(
      state.setupStatus === "ready" && readiness.ready
        ? ok("setup-status", "Initial setup is marked as done.")
        : state.setupStatus === "ready"
          ? fail("setup-status", `Setup is marked as done but is missing: ${readiness.missing.join("; ")}.`, ".inboundfy")
          : warning("setup-status", "Files are installed, but the inboundfy-setup skill still has to fill the initial context.", ".inboundfy/install.json"),
    );
    for (const directory of [state.paths.acervo, state.paths.canais, state.paths.calendario]) {
      checks.push(
        (await exists(resolvePortable(projectRoot, directory))) ? ok(`directory:${directory}`, `Directory present: ${directory}`) : fail(`directory:${directory}`, `Directory missing: ${directory}`, directory),
      );
    }
    if (state.instructionFile) {
      checks.push(
        (await hasInstructionBlock(join(projectRoot, state.instructionFile)))
          ? ok("instruction-block", `Inboundfy block intact in ${state.instructionFile}.`)
          : fail("instruction-block", `The Inboundfy block is missing or outdated in ${state.instructionFile}.`, state.instructionFile),
      );
    }
  }

  if (manifest) {
    checks.push(
      state && manifest.frameworkVersion !== state.frameworkVersion
        ? fail("manifest-version", "The manifest version differs from the install state.", ".inboundfy/manifest.json")
        : ok("manifest-version", "The manifest uses the installed version."),
    );
    for (const managed of manifest.managedFiles) {
      const path = resolvePortable(projectRoot, managed.path);
      if (!(await isRegularFile(path))) {
        checks.push(fail(`managed:${managed.path}`, `Managed file missing or invalid: ${managed.path}`, managed.path));
        continue;
      }
      checks.push(
        sha256(await readFile(path)) === managed.sha256 ? ok(`managed:${managed.path}`, `File intact: ${managed.path}`) : fail(`managed:${managed.path}`, `Managed file was changed: ${managed.path}`, managed.path),
      );
    }
  }

  for (const path of EXPECTED_PROJECT_FILES) {
    checks.push((await isRegularFile(resolvePortable(projectRoot, path))) ? ok(`project:${path}`, `Project file present: ${path}`) : fail(`project:${path}`, `Project file missing: ${path}`, path));
  }
  for (const template of await collectContextTemplates()) {
    const path = template.targetRelative;
    checks.push((await isRegularFile(resolvePortable(projectRoot, path))) ? ok(`context:${path}`, `Context present: ${path}`) : fail(`context:${path}`, `Context missing: ${path}`, path));
  }

  const summary = {
    errors: checks.filter((c) => c.level === "error").length,
    warnings: checks.filter((c) => c.level === "warning").length,
    ok: checks.filter((c) => c.level === "ok").length,
  };
  return { schemaVersion: 2, healthy: summary.errors === 0, installedVersion: state?.frameworkVersion ?? null, cliVersion, projectRoot, checks, summary };
}

async function loadState(projectRoot: string, checks: ProjectCheck[]): Promise<InstallationState | null> {
  const path = join(projectRoot, ".inboundfy", "install.json");
  if (!(await isRegularFile(path))) {
    checks.push(fail("install-state", "The project has no .inboundfy/install.json.", ".inboundfy/install.json"));
    return null;
  }
  const parsed = installationStateSchema.safeParse(await readJson<unknown>(path).catch(() => null));
  if (!parsed.success) {
    checks.push(fail("install-state", ".inboundfy/install.json is invalid.", ".inboundfy/install.json"));
    return null;
  }
  checks.push(ok("install-state", "The install state is valid."));
  return parsed.data as InstallationState;
}

async function loadManifest(projectRoot: string, checks: ProjectCheck[]): Promise<InstallationManifest | null> {
  const path = join(projectRoot, ".inboundfy", "manifest.json");
  if (!(await isRegularFile(path))) {
    checks.push(fail("manifest", "The project has no .inboundfy/manifest.json.", ".inboundfy/manifest.json"));
    return null;
  }
  const parsed = installationManifestSchema.safeParse(await readJson<unknown>(path).catch(() => null));
  if (!parsed.success) {
    checks.push(fail("manifest", ".inboundfy/manifest.json is invalid.", ".inboundfy/manifest.json"));
    return null;
  }
  checks.push(ok("manifest", "The install manifest is valid."));
  return parsed.data as InstallationManifest;
}
