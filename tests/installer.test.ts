/** Install, update, repair, backups, path safety and the project doctor. */
import { afterEach, beforeEach, expect, test } from "bun:test";
import { existsSync, mkdirSync, readdirSync, readFileSync, symlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { AppError } from "../src/app/errors.ts";
import { ExitCode } from "../src/app/exit-codes.ts";
import { runProjectDoctor } from "../src/core/doctor.ts";
import { executeInstallation, markContextReady, refreshContextSources } from "../src/core/installer.ts";
import { fillContext, install, removeProject, tempProject } from "./project-fixture.ts";

let dir: string;
beforeEach(() => {
  dir = tempProject();
});
afterEach(() => removeProject(dir));

const code = async (p: Promise<unknown>) => {
  try {
    await p;
    return 0;
  } catch (e) {
    return e instanceof AppError ? e.code : -1;
  }
};

test("dry run plans without creating .inboundfy", async () => {
  const result = await executeInstallation({ projectRoot: dir, mode: "install", dryRun: true, yes: true });
  expect(result.dryRun).toBe(true);
  expect(result.actions.some((a) => a.action === "create")).toBe(true);
  expect(existsSync(join(dir, ".inboundfy"))).toBe(false);
});

test("install writes framework, skills, user space and the instruction block; doctor only warns about setup", async () => {
  await install(dir);
  for (const path of [".inboundfy/install.json", ".inboundfy/manifest.json", ".inboundfy/framework/METODOLOGIA.md", ".inboundfy/context/empresa.md", ".inboundfy/indices/acervo.json", "acervo", "canais", "calendario", ".claude/skills/inboundfy/SKILL.md"]) {
    expect(existsSync(join(dir, path))).toBe(true);
  }
  expect(readFileSync(join(dir, "AGENTS.md"), "utf8")).toContain("<!-- inboundfy:inicio -->");
  const report = await runProjectDoctor(dir);
  expect(report.healthy).toBe(true);
  expect(report.summary.warnings).toBe(1);
  expect(report.checks.find((c) => c.level === "warning")?.id).toBe("setup-status");
});

test("install twice conflicts; update and repair need an installation", async () => {
  expect(await code(executeInstallation({ projectRoot: dir, mode: "update", yes: true }))).toBe(ExitCode.NOT_INSTALLED);
  await install(dir);
  expect(await code(install(dir))).toBe(ExitCode.CONFLICT);
  const update = await executeInstallation({ projectRoot: dir, mode: "update", yes: true });
  expect(update.actions.filter((a) => a.action === "update" && !a.path.startsWith(".inboundfy/install") && !a.path.startsWith(".inboundfy/manifest") && !a.path.startsWith(".inboundfy/fontes-candidatas"))).toHaveLength(0);
});

test("install refuses foreign files without --force and backs them up with it", async () => {
  mkdirSync(join(dir, ".inboundfy", "framework"), { recursive: true });
  writeFileSync(join(dir, ".inboundfy", "framework", "METODOLOGIA.md"), "minha versão");
  expect(await code(install(dir))).toBe(ExitCode.CONFLICT);
  await executeInstallation({ projectRoot: dir, mode: "install", yes: true, force: true });
  const backups = join(dir, ".inboundfy", "migracoes", "arquivos-customizados");
  const stamp = readdirSync(backups)[0]!;
  expect(readFileSync(join(backups, stamp, ".inboundfy", "framework", "METODOLOGIA.md"), "utf8")).toBe("minha versão");
});

test("repair restores managed files, backs up edits and preserves user data", async () => {
  await install(dir);
  const managed = join(dir, ".inboundfy", "framework", "ESCRITA.md");
  const original = readFileSync(managed, "utf8");
  writeFileSync(managed, "editado");
  writeFileSync(join(dir, ".inboundfy", "context", "empresa.md"), "dados do usuário");
  expect((await runProjectDoctor(dir)).healthy).toBe(false);
  await executeInstallation({ projectRoot: dir, mode: "repair", yes: true });
  expect(readFileSync(managed, "utf8")).toBe(original);
  expect(readFileSync(join(dir, ".inboundfy", "context", "empresa.md"), "utf8")).toBe("dados do usuário");
  expect(existsSync(join(dir, ".inboundfy", "migracoes", "arquivos-customizados"))).toBe(true);
});

test("doctor writes nothing", async () => {
  await install(dir);
  const before = JSON.stringify(readdirSync(dir, { recursive: true }).sort());
  await runProjectDoctor(dir);
  expect(JSON.stringify(readdirSync(dir, { recursive: true }).sort())).toBe(before);
});

test("context ready requires company, voice, persona and channel", async () => {
  await install(dir);
  expect(await code(markContextReady(dir))).toBe(ExitCode.CONFLICT);
  fillContext(dir);
  const state = await markContextReady(dir);
  expect(state.setupStatus).toBe("ready");
  const report = await runProjectDoctor(dir);
  expect(report.summary.warnings).toBe(0);
  expect(report.healthy).toBe(true);
});

test("refuses .inboundfy symlinked outside and traversal in the skills directory", async () => {
  const outside = tempProject("outside-");
  try {
    symlinkSync(outside, join(dir, ".inboundfy"));
    expect(await code(install(dir))).toBe(ExitCode.PERMISSION);
  } finally {
    removeProject(outside);
  }
  const other = tempProject();
  try {
    expect(await code(executeInstallation({ projectRoot: other, mode: "install", yes: true, skillsDirectory: "../fora" }))).toBe(ExitCode.USAGE);
  } finally {
    removeProject(other);
  }
});

test("context scan refreshes candidates without touching fontes-projeto.md", async () => {
  await install(dir);
  const sources = join(dir, ".inboundfy", "fontes-projeto.md");
  writeFileSync(sources, "classificação manual");
  writeFileSync(join(dir, "PRODUTO.md"), "# Produto\n\n## Planos\n");
  expect(await refreshContextSources(dir)).toBeGreaterThan(0);
  expect(readFileSync(sources, "utf8")).toBe("classificação manual");
  expect(readFileSync(join(dir, ".inboundfy", "fontes-candidatas.json"), "utf8")).toContain("PRODUTO.md");
});
