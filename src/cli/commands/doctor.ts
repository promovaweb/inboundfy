/**
 * `doctor` and `status`.
 *
 * `doctor` combines the project report (core/doctor.ts) with the runtime
 * checks inherited from the starter kit; `--env` keeps only the latter.
 * `status` prints only the version and the summary.
 */
import { statSync, readFileSync } from "node:fs";
import { manifest } from "../../app/manifest.ts";
import { ExitCode } from "../../app/exit-codes.ts";
import { paths } from "../../config/paths.ts";
import { getMasterKey, masterKeySource } from "../../config/crypto.ts";
import { readVault } from "../../config/credentials.ts";
import type { Command } from "../registry.ts";
import { runProjectDoctor } from "../../core/doctor.ts";
import type { ProjectReport } from "../../core/types.ts";
import { projectRoot } from "../project.ts";

export interface DoctorCheck {
  name: string;
  status: "ok" | "warn" | "fail";
  detail: string;
}

/** Collects independent checks without writing files or exposing secrets. */
export function collectDoctorChecks(runtime = { version: Bun.version, stdin: Boolean(process.stdin.isTTY), stdout: Boolean(process.stdout.isTTY) }) {
  const checks: DoctorCheck[] = [];
  const add = (name: string, status: DoctorCheck["status"], detail: string) => checks.push({ name, status, detail });
  add("bun", Bun.semver.satisfies(runtime.version, ">=1.4.4") ? "ok" : "fail", `${runtime.version}; minimum 1.4.4`);
  for (const stream of ["stdin", "stdout"] as const) add(stream, runtime[stream] ? "ok" : "warn", runtime[stream] ? "TTY available" : "Not a TTY");
  const inspect = (name: string, path: string, check: () => void, detail: string) => {
    try {
      statSync(path);
    } catch (e) {
      add(name, (e as NodeJS.ErrnoException).code === "ENOENT" ? "warn" : "fail", (e as NodeJS.ErrnoException).code === "ENOENT" ? "Not created" : "Cannot access file");
      return;
    }
    try { check(); add(name, "ok", detail); }
    catch { add(name, "fail", "Unreadable, invalid or incorrectly configured"); }
  };
  inspect("directory", paths.base(), () => {
    const stat = statSync(paths.base());
    if (!stat.isDirectory() || (stat.mode & 0o777) !== 0o700) throw new Error("Invalid directory mode");
  }, "Directory exists; mode 0700");
  inspect("settings", paths.settings(), () => {
    const data: unknown = JSON.parse(readFileSync(paths.settings(), "utf8"));
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Expected object");
  }, "Readable JSON object");
  const source = masterKeySource();
  try {
    if (source !== "none") getMasterKey(false);
    add("master-key", source === "none" ? "warn" : "ok", source);
  } catch { add("master-key", "fail", `${source}; unavailable or invalid`); }
  inspect("credentials", paths.credentials(), () => { readVault(); }, "Vault decrypted successfully");
  add("binary", "ok", `${manifest.bin} ${manifest.version}`);
  add("platform", "ok", `${process.platform}-${process.arch}`);
  return { checks, ok: checks.every((check) => check.status !== "fail") };
}

/** Text rendering of the project report, shared with the TUI. */
export function renderProjectReport(report: ProjectReport, summaryOnly = false): string {
  const lines = [
    `Inboundfy ${report.installedVersion ?? "not installed"}; binary ${report.cliVersion}.`,
    `${report.summary.errors} error(s), ${report.summary.warnings} warning(s), ${report.summary.ok} check(s) passed.`,
  ];
  if (!summaryOnly) for (const check of report.checks.filter((c) => c.level !== "ok")) lines.push(`${check.level === "error" ? "✗" : "!"} ${check.message}`);
  return lines.join("\n");
}

export const doctorCommand: Command = {
  name: "doctor",
  description: "Diagnose the project installation (state, manifest hashes, instruction block, data folders, context) and the runtime, without changing files.",
  options: [
    { name: "--strict", description: "Treat warnings as failures." },
    { name: "--env", description: "Check only the runtime, terminal, settings and vault." },
  ],
  exitCodes: [ExitCode.CONFIG, ExitCode.NOT_INSTALLED, ExitCode.INTEGRITY],
  examples: [`${manifest.bin} doctor`, `${manifest.bin} doctor --strict --json`, `${manifest.bin} doctor --env`],
  run: async (ctx) => {
    const environment = collectDoctorChecks();
    const marks = { ok: "✓", warn: "!", fail: "✗" };
    const envText = environment.checks.filter((c) => c.status !== "ok").map((c) => `${marks[c.status]} ${c.name}: ${c.detail}`);
    if (ctx.options?.env === true) {
      return { data: environment, text: environment.checks.map((c) => `${marks[c.status]} ${c.name}: ${c.detail}`).join("\n"), code: environment.ok ? ExitCode.SUCCESS : ExitCode.CONFIG };
    }
    const project = await runProjectDoctor(await projectRoot(ctx));
    const strictFail = ctx.options?.strict === true && project.summary.warnings > 0;
    const code = project.installedVersion === null ? ExitCode.NOT_INSTALLED : !project.healthy || strictFail ? ExitCode.INTEGRITY : environment.ok ? ExitCode.SUCCESS : ExitCode.CONFIG;
    return {
      data: { healthy: project.healthy && environment.ok && !strictFail, project, environment },
      text: () => [renderProjectReport(project), ...(envText.length ? ["", "Environment:", ...envText] : [])].join("\n"),
      code,
    };
  },
};

export const statusCommand: Command = {
  name: "status",
  description: "Show the installed version and the health summary of the project.",
  exitCodes: [ExitCode.NOT_INSTALLED],
  examples: [`${manifest.bin} status`, `${manifest.bin} status --json`],
  run: async (ctx) => {
    const report = await runProjectDoctor(await projectRoot(ctx));
    const { checks: _checks, ...summary } = report;
    return { data: summary, text: () => renderProjectReport(report, true), code: report.installedVersion === null ? ExitCode.NOT_INSTALLED : ExitCode.SUCCESS };
  },
};
