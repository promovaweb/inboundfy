import { afterAll, beforeAll, expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { TestRendererSetup } from "@opentui/core/testing";
import { getContentDigest } from "../src/core/pipeline.ts";
import { framePoint, withTui } from "./tui-fixture.ts";

let root: string;
let empty: string;
const original = process.env.INBOUNDFY_PROJECT;
const frames: string[] = [];

function cli(...args: string[]) {
  const run = Bun.spawnSync([process.execPath, "run", "src/main.ts", "-C", root, ...args]);
  if (run.exitCode !== 0) throw Error(run.stderr.toString() || run.stdout.toString());
}
function relativeDate(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return [d.getFullYear(), String(d.getMonth()+1).padStart(2,"0"), String(d.getDate()).padStart(2,"0")].join("-");
}
beforeAll(async () => {
  root = await mkdtemp(join(tmpdir(), "inboundfy-project-"));
  empty = await mkdtemp(join(tmpdir(), "inboundfy-empty-"));
  cli("install", "--yes");
  const strategy = join(root, ".inboundfy/estrategia.md");
  await writeFile(strategy, (await readFile(strategy, "utf8")).replace(/^- \[ \] (Blog|LinkedIn)/gm, "- [x] $1"));
  cli("archive", "add", "Founder interview", "--text", "A field interview");
  cli("archive", "add", "Workshop notes", "--text", "Audience questions");
  cli("archive", "process", "2");
  cli("content", "create", "blog", "First field report", "--persona", "founder", "--archive", "1");
  cli("content", "create", "linkedin", "Workshop takeaways", "--persona", "founder", "--archive", "2");
  cli("content", "status", "1", "revisao");
  cli("content", "create", "blog", "Reader questions", "--persona", "founder", "--archive", "2");
  cli("content", "status", "3", "revisao");
  const { id, asset, sha256 } = await getContentDigest(root, "3");
  await writeFile(join(root, "validation.md"), [
    "- **ID da peça:** " + id, "- **Asset:** " + asset,
    "- **SHA-256 da peça:** " + sha256, "- **Veredito:** aprovado",
  ].join("\n"));
  cli("content", "status", "3", "aprovado", "--audit-report", "validation.md");
  cli("content", "status", "3", "agendado");
  cli("content", "status", "3", "publicado", "--url", "https://example.org/questions", "--published-at", relativeDate(-1));
  cli("calendar", "add", relativeDate(-2), "1");
  cli("calendar", "add", relativeDate(0), "2");
  process.env.INBOUNDFY_PROJECT = root;
});
afterAll(async () => {
  if (original === undefined) delete process.env.INBOUNDFY_PROJECT;
  else process.env.INBOUNDFY_PROJECT = original;
  await Promise.all([rm(root, { recursive: true, force: true }), rm(empty, { recursive: true, force: true })]);
  if (process.env.INBOUNDFY_CAPTURE_FRAMES === "1") await writeFile("specs/0002-tui-frames.txt", frames.join("\n"));
});

async function frameWith(setup: TestRendererSetup, marker: string) {
  let frame = "";
  for (let i = 0; i < 100; i++) {
    await setup.renderOnce();
    frame = setup.captureCharFrame();
    if (frame.includes(marker)) return frame;
    await Bun.sleep(10);
  }
  throw Error("Missing " + marker + "\n" + frame);
}
const markers = { dashboard: "PUBLISHED", archive: "Founder interview", channels: "instagram", calendar: "This month" };
for (const [width, height] of [[120,32], [80,24], [60,16]] as const) {
  for (const [tab, marker] of Object.entries(markers)) {
    test(tab + " renders at " + width + "×" + height, async () => {
      await withTui(async setup => {
        const frame = await frameWith(setup, width >= 120 && tab === "archive" ? "Anti-slop audits" : marker);
        expect(frame).toContain(tab[0]!.toUpperCase() + tab.slice(1));
        expect(frame).toContain("quit");
        frames.push(tab + "  " + width + "×" + height + "\n" + frame.trimEnd() + "\n");
      }, tab, { width, height });
    });
  }
}
for (const tab of Object.keys(markers)) {
  test(tab + " explains how to install the project", async () => {
    process.env.INBOUNDFY_PROJECT = empty;
    try {
      await withTui(async setup => expect(await frameWith(setup, "inboundfy install")).toContain("reload"), tab);
    } finally { process.env.INBOUNDFY_PROJECT = root; }
  });
}
test("archive selection, detail and status filter use real input", async () => {
  await withTui(async setup => {
    await frameWith(setup, "Founder interview");
    setup.mockInput.pressArrow("down");
    setup.mockInput.pressEnter();
    expect(await frameWith(setup, "Anti-slop audits")).toContain("Workshop notes");
    setup.mockInput.pressEscape(); await Bun.sleep(50);
    await frameWith(setup, "Founder interview");
    await setup.mockMouse.click(...framePoint(setup, "Founder interview"));
    expect(await frameWith(setup, "Anti-slop audits")).toContain("A6");
    setup.mockInput.pressKey("f");
    await frameWith(setup, "Archive status");
    setup.mockInput.pressArrow("down"); setup.mockInput.pressEnter();
    expect(await frameWith(setup, "ARCHIVE · RECEBIDO")).not.toContain("Workshop notes");
  }, "archive");
});
test("channels opens pieces by mouse and keyboard, then returns to the selection", async () => {
  await withTui(async setup => {
    await frameWith(setup, "instagram");
    await setup.mockMouse.click(...framePoint(setup, "linkedin"));
    await frameWith(setup, "Workshop takeaways");
    setup.mockInput.pressEnter();
    expect(await frameWith(setup, "Personas")).toContain("founder");
    setup.mockInput.pressEscape(); await Bun.sleep(50);
    await frameWith(setup, "LINKEDIN · PIECES");
    setup.mockInput.pressEscape(); await Bun.sleep(50);
    expect(await frameWith(setup, "instagram")).toContain("> linkedin");
  }, "channels");
});
test("calendar month changes across both directions", async () => {
  await withTui(async setup => {
    const month = relativeDate(0).slice(0, 7);
    const next = new Date(month + "-01T12:00:00Z");
    next.setUTCMonth(next.getUTCMonth()+1);
    await frameWith(setup, "EDITORIAL CALENDAR · " + month);
    setup.mockInput.pressKey("]");
    await frameWith(setup, "EDITORIAL CALENDAR · " + next.toISOString().slice(0,7));
    setup.mockInput.pressKey("[");
    expect(await frameWith(setup, "EDITORIAL CALENDAR · " + month)).toContain("Workshop takeaways");
  }, "calendar");
});

test("archive watches CLI writes and recovers from an unreadable index", async () => {
  await withTui(async setup => {
    await frameWith(setup, "Founder interview");
    cli("archive", "add", "Reader mail", "--text", "An interview question");
    await frameWith(setup, "Reader mail");
    const index = join(root, ".inboundfy/indices/acervo.json");
    const saved = await readFile(index);
    try {
      await writeFile(index, "{");
      expect(await frameWith(setup, "Could not load archive")).toContain("retry");
    } finally {
      await writeFile(index, saved);
    }
    setup.mockInput.pressKey("r");
    await frameWith(setup, "Reader mail");
  }, "archive");
});

test("wide archive previews the highlighted record and its progress without Enter", async () => {
  await withTui(async setup => {
    await frameWith(setup, "ARCHIVE · 0001");
    setup.mockInput.pressArrow("down");
    const frame = await frameWith(setup, "ARCHIVE · 0002");
    expect(frame).toContain("ARCHIVE · ALL");
    expect(frame).toMatch(/1\/5\s+20%/);
    expect(frame).toContain("A0 · A1 · A2 · A3 · A4 · A5 · A6 ·");
    setup.mockInput.pressArrow("up");
    expect(await frameWith(setup, "ARCHIVE · 0001")).toMatch(/0\/5\s+0%/);
  }, "archive", { width: 120, height: 32 });
});

test("wide channels follows the highlight and opens a piece from the side list", async () => {
  await withTui(async setup => {
    const first = await frameWith(setup, "BLOG · PIECES");
    expect(first).toContain("Reader questions");
    setup.mockInput.pressArrow("down");
    expect(await frameWith(setup, "EMAIL · PIECES")).toContain("No pieces in email");
    setup.mockInput.pressArrow("down");
    const frame = await frameWith(setup, "LINKEDIN · PIECES");
    expect(frame).toContain("CHANNELS · PIPELINE");
    expect(frame).toContain(relativeDate(0));
    await setup.mockMouse.click(...framePoint(setup, "Workshop takeaw"));
    expect(await frameWith(setup, "Personas")).toContain("Workshop takeaways");
  }, "channels", { width: 120, height: 32 });
});

test("month grid aligns dates under Monday through Sunday and marks scheduled days", async () => {
  const today = relativeDate(0);
  const day = Number(today.slice(-2));
  const weekday = (new Date(today + "T12:00:00Z").getUTCDay() + 6) % 7;
  for (const width of [80, 120]) {
    await withTui(async setup => {
      const frame = await frameWith(setup, "Mon");
      const lines = frame.split("\n");
      const header = lines.find(line => line.includes("Mon"))!;
      const columns = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => header.indexOf(d));
      const offset = columns[weekday]!;
      expect(lines.some(line => line.slice(offset, offset + 3) === String(day).padStart(2) + "●")).toBe(true);
      setup.mockInput.pressKey("]");
      const date = new Date(today.slice(0, 7) + "-01T12:00:00Z");
      date.setUTCMonth(date.getUTCMonth() + 1);
      const next = await frameWith(setup, "EDITORIAL CALENDAR · " + date.toISOString().slice(0, 7));
      expect(next).not.toContain("●");
    }, "calendar", { width, height: 32 });
  }
  await withTui(async setup => {
    expect(await frameWith(setup, "This month")).not.toContain("Mon");
  }, "calendar", { width: 60, height: 16 });
});

test("archive column alignment survives long titles and different channel lengths", async () => {
  cli("archive", "add", "A long title with more words than fit in a terminal row", "--text", "Raw material");
  await withTui(async setup => {
    const frame = await frameWith(setup, "A long title");
    const lines = frame.split("\n");
    const titleColumn = lines.find(line => line.includes("Founder interview"))!.indexOf("Founder interview");
    expect(lines.find(line => line.includes("Workshop notes"))!.indexOf("Workshop notes")).toBe(titleColumn);
    const clipped = lines.find(line => line.includes("A long title"))!;
    expect(clipped.indexOf("A long title")).toBe(titleColumn);
    expect(clipped).toContain("…");
  }, "archive", { width: 80, height: 24 });
});

test("keyboard focus can open a piece directly from the wide side list", async () => {
  await withTui(async setup => {
    await frameWith(setup, "BLOG · PIECES");
    setup.mockInput.pressTab({ shift: true });
    setup.mockInput.pressArrow("down");
    setup.mockInput.pressEnter();
    expect(await frameWith(setup, "Personas")).toContain("Reader questions");
  }, "channels", { width: 120, height: 32 });
});
