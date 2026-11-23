/** Archive, content pipeline, calendar and statistics on a real project. */
import { afterEach, beforeEach, expect, test } from "bun:test";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { AppError } from "../src/app/errors.ts";
import { ExitCode } from "../src/app/exit-codes.ts";
import { addArchive, listArchive, processArchive, setArchiveStatus, showArchive } from "../src/core/archive.ts";
import { addToCalendar, listCalendar } from "../src/core/calendar.ts";
import { createContent, listContent } from "../src/core/content.ts";
import { getContentDigest, updateContentStatus } from "../src/core/pipeline.ts";
import { collectStats, lastMonths } from "../src/core/stats.ts";
import { install, removeProject, selectChannel, tempProject } from "./project-fixture.ts";

let dir: string;
beforeEach(async () => {
  dir = tempProject();
  await install(dir);
});
afterEach(() => removeProject(dir));

async function failure(p: Promise<unknown>): Promise<AppError> {
  try {
    await p;
  } catch (e) {
    if (e instanceof AppError) return e;
    throw e;
  }
  throw new Error("expected a failure");
}

test("archive keeps the raw material, creates pending stages and audits, and processes", async () => {
  const item = await addArchive(dir, { title: "Transcrição do webinar", raw: "﻿linha 1  \r\nlinha 2\r\n", source: "https://x.test", createdAt: "2026-11-01T10:00:00.000Z" });
  expect(item.id).toBe("0001");
  expect(item.directory).toBe("acervo/0001-2026-11-01-transcricao-do-webinar");
  expect(readFileSync(join(dir, item.directory, "bruto.md"), "utf8")).toBe("﻿linha 1  \r\nlinha 2\r\n");
  let detail = await showArchive(dir, "1");
  expect(detail.progress).toEqual({ done: 0, total: 12 });
  await processArchive(dir, "0001");
  expect(readFileSync(join(dir, item.directory, "processado.md"), "utf8")).toContain("linha 1\nlinha 2");
  detail = await showArchive(dir, "1");
  expect(detail.record.status).toBe("processado");
  expect(detail.stages.find((s) => s.file === "processado.md")?.done).toBe(true);
  await setArchiveStatus(dir, "1", "arquivado");
  expect((await listArchive(dir, { status: "arquivado" })).map((i) => i.id)).toEqual(["0001"]);
  expect((await failure(showArchive(dir, "99"))).code).toBe(ExitCode.NOT_FOUND);
  expect((await failure(addArchive(dir, { title: "x", raw: "  " }))).code).toBe(ExitCode.USAGE);
});

test("content requires a checked channel, personas and existing archive items", async () => {
  await addArchive(dir, { title: "Base", raw: "texto" });
  expect((await failure(createContent(dir, { channel: "blog", title: "Post", personas: ["p1"], archive: [] }))).code).toBe(ExitCode.CONFLICT);
  selectChannel(dir, "Blog");
  expect((await failure(createContent(dir, { channel: "tiktok", title: "Post", personas: ["p1"], archive: [] }))).code).toBe(ExitCode.USAGE);
  expect((await failure(createContent(dir, { channel: "blog", title: "Post", personas: [], archive: [] }))).code).toBe(ExitCode.USAGE);
  expect((await failure(createContent(dir, { channel: "blog", title: "Post", personas: ["p1"], archive: ["9"] }))).code).toBe(ExitCode.NOT_FOUND);
  const piece = await createContent(dir, { channel: "blog", title: "Post", personas: ["p1"], archive: ["1"] });
  expect(piece.baseEditorial[0]).toMatch(/acervo\/0001-.*\/base-editorial\.md/);
  expect((await listArchive(dir))[0]?.channels).toEqual(["blog"]);
  expect((await listContent(dir, { channel: "blog" })).length).toBe(1);
});

test("pipeline binds approval to the reviewed version and validates publication", async () => {
  selectChannel(dir, "LinkedIn");
  const piece = await createContent(dir, { channel: "linkedin", title: "Nota de produto", personas: ["persona-01"], archive: [] });
  expect((await failure(updateContentStatus(dir, piece.id, { status: "aprovado" }))).code).toBe(ExitCode.CONFLICT);
  await updateContentStatus(dir, piece.id, { status: "revisao" });
  expect((await failure(updateContentStatus(dir, piece.id, { status: "aprovado" }))).message).toContain("--audit-report");

  const digest = await getContentDigest(dir, piece.id);
  const reportPath = "auditoria/0001.md";
  mkdirSync(join(dir, "auditoria"), { recursive: true });
  const report = (sha: string, verdict = "aprovado", id = piece.id, asset = digest.asset) =>
    `# Validação\n\n- **ID da peça:** \`${id}\`\n- **Asset:** \`${asset}\`\n- **SHA-256 da peça:** \`${sha}\`\n- **Veredito:** ${verdict}\n`;
  for (const [bad, reason] of [
    [report("0".repeat(64)), "does not match"],
    [report(digest.sha256, "aprovado", "9999"), "identify piece"],
    [report(digest.sha256, "aprovado", piece.id, "canais/blog/x/README.md"), "point to"],
    [report("z".repeat(64)), "full SHA-256"],
    [report(digest.sha256, "reprovado"), "Veredito"],
  ] as const) {
    writeFileSync(join(dir, reportPath), bad);
    const e = await failure(updateContentStatus(dir, piece.id, { status: "aprovado", auditReport: reportPath }));
    expect(e.message).toContain(reason);
    expect(e.code).toBe(ExitCode.CONFLICT);
  }
  writeFileSync(join(dir, reportPath), report(digest.sha256));
  const approved = await updateContentStatus(dir, piece.id, { status: "aprovado", auditReport: reportPath });
  expect(approved.approvedAssetSha256).toBe(digest.sha256);
  expect(readFileSync(join(dir, piece.directory, "README.md"), "utf8")).toContain(`relatorio_validacao: "${reportPath}"`);

  await addToCalendar(dir, "2026-09-20", piece.id);
  await updateContentStatus(dir, piece.id, { status: "agendado" });
  const asset = join(dir, piece.directory, "README.md");
  writeFileSync(asset, readFileSync(asset, "utf8").replace("PREENCHER. A skill", "Texto alterado. A skill"));
  expect((await failure(updateContentStatus(dir, piece.id, { status: "publicado", url: "https://x.test/n", publishedAt: "2026-09-20" }))).message).toContain("changed after validation");

  await updateContentStatus(dir, piece.id, { status: "revisao" });
  writeFileSync(join(dir, reportPath), report((await getContentDigest(dir, piece.id)).sha256));
  await updateContentStatus(dir, piece.id, { status: "aprovado", auditReport: reportPath });
  for (const [opts, reason] of [
    [{}, "--url"],
    [{ url: "sem protocolo", publishedAt: "2026-09-20" }, "valid HTTP or HTTPS"],
    [{ url: "ftp://x.test/n", publishedAt: "2026-09-20" }, "must use HTTP"],
    [{ url: "https://x.test/n", publishedAt: "2026-09-31" }, "not a valid calendar date"],
  ] as const) {
    expect((await failure(updateContentStatus(dir, piece.id, { status: "publicado", ...opts }))).message).toContain(reason);
  }
  const published = await updateContentStatus(dir, piece.id, { status: "publicado", url: "https://x.test/n", publishedAt: "2026-09-20" });
  expect(published.status).toBe("publicado");
  expect(readFileSync(asset, "utf8")).toContain("estado: publicado");
  expect(readFileSync(join(dir, "calendario", "2026-09.md"), "utf8")).toContain("estado: publicado");
});

test("calendar is idempotent, groups by date and validates input", async () => {
  selectChannel(dir, "Blog");
  const a = await createContent(dir, { channel: "blog", title: "A", personas: ["p"], archive: [] });
  const b = await createContent(dir, { channel: "blog", title: "B", personas: ["p"], archive: [] });
  const c = await createContent(dir, { channel: "blog", title: "C", personas: ["p"], archive: [] });
  await addToCalendar(dir, "2026-12-01", a.id);
  await addToCalendar(dir, "2026-12-05", b.id);
  await addToCalendar(dir, "2026-12-01", c.id);
  await addToCalendar(dir, "2026-12-01", a.id);
  expect((await listCalendar(dir, "2026-12")).map((e) => e.contentId)).toEqual(["0001", "0003", "0002"]);
  const md = readFileSync(join(dir, "calendario", "2026-12.md"), "utf8");
  expect(md.indexOf("**0003**")).toBeLessThan(md.indexOf("## 2026-12-05"));
  expect((await failure(addToCalendar(dir, "2026-13-01", a.id))).code).toBe(ExitCode.USAGE);
  expect((await failure(listCalendar(dir, "dezembro"))).code).toBe(ExitCode.USAGE);
});

test("stats counts statuses, channels, series, progress and the calendar", async () => {
  selectChannel(dir, "Blog");
  await addArchive(dir, { title: "Um", raw: "x", createdAt: "2026-10-03T00:00:00.000Z" });
  await addArchive(dir, { title: "Dois", raw: "y", createdAt: "2026-11-03T00:00:00.000Z" });
  await addArchive(dir, { title: "Três", raw: "z", createdAt: "2026-11-04T00:00:00.000Z" });
  await processArchive(dir, "1");
  const p1 = await createContent(dir, { channel: "blog", title: "P1", personas: ["p"], archive: ["1", "2"], createdAt: "2026-11-05T00:00:00.000Z" });
  await createContent(dir, { channel: "blog", title: "P2", personas: ["p"], archive: ["1"], createdAt: "2026-11-06T00:00:00.000Z" });
  await addToCalendar(dir, "2026-11-10", p1.id);
  await addToCalendar(dir, "2026-11-30", p1.id);
  const s = await collectStats(dir, { today: "2026-11-23", months: 3 });
  expect(s.project.installed).toBe(true);
  expect(s.project.selectedChannels).toEqual(["blog"]);
  expect(s.archive.total).toBe(3);
  expect(s.archive.byStatus).toEqual({ recebido: 2, processando: 0, processado: 1, arquivado: 0 });
  expect(s.archive.unused).toBe(1);
  expect(s.archive.averagePiecesPerItem).toBe(1);
  expect(s.archive.intakeByMonth).toEqual([
    { month: "2026-09", count: 0 },
    { month: "2026-10", count: 1 },
    { month: "2026-11", count: 2 },
  ]);
  expect(s.archive.stageProgress).toEqual({ done: 1, total: 15, percent: 7 });
  expect(s.content.byStatus.rascunho).toBe(2);
  expect(s.content.channels.find((c) => c.channel === "blog")).toMatchObject({ total: 2, inProgress: 2, archiveItemsUsed: 2, selected: true });
  expect(s.calendar.overdue.map((e) => e.date)).toEqual(["2026-11-10"]);
  expect(s.calendar.upcoming.map((e) => e.title)).toEqual(["P1"]);
  expect(s.calendar.thisMonth).toBe(2);
});

test("stats works on a project without installation", async () => {
  const empty = tempProject();
  try {
    const s = await collectStats(empty, { today: "2026-11-23" });
    expect(s.project.installed).toBe(false);
    expect(s.archive.total).toBe(0);
    expect(s.content.channels).toHaveLength(6);
  } finally {
    removeProject(empty);
  }
});

test("lastMonths crosses the year boundary", () => {
  expect(lastMonths("2026-02-10", 4)).toEqual(["2025-11", "2025-12", "2026-01", "2026-02"]);
});
