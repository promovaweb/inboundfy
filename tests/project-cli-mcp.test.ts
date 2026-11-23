/** CLI envelopes and exit codes of the project commands, and the MCP project tools. */
import { afterAll, beforeAll, expect, test } from "bun:test";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { ExitCode } from "../src/app/exit-codes.ts";
import { registerProjectTools } from "../src/mcp/tools/project.ts";
import { registerProjectResources } from "../src/mcp/resources/project.ts";
import { cli, removeProject, selectChannel, tempProject } from "./project-fixture.ts";

let dir: string;
beforeAll(() => {
  dir = tempProject();
});
afterAll(() => removeProject(dir));

test("CLI: install, archive, content, calendar, stats and errors with fixed exit codes", () => {
  expect(cli(dir, ["status"]).code).toBe(ExitCode.NOT_INSTALLED);
  const installed = cli(dir, ["install", "--yes", "--agent", "codex"]);
  expect(installed.code).toBe(ExitCode.SUCCESS);
  expect(installed.json?.data.mode).toBe("install");
  expect(cli(dir, ["install", "--yes"]).code).toBe(ExitCode.CONFLICT);
  selectChannel(dir, "Blog");

  const added = cli(dir, ["archive", "add", "Ideia"], "material pelo stdin");
  expect(added.json?.data.id).toBe("0001");
  expect(cli(dir, ["archive", "add", "Vazio"]).code).toBe(ExitCode.USAGE);
  expect(cli(dir, ["archive", "show", "42"]).code).toBe(ExitCode.NOT_FOUND);

  const piece = cli(dir, ["content", "create", "blog", "Post", "--persona", "a", "--persona", "b", "--archive", "1"]);
  expect(piece.json?.data.personas).toEqual(["a", "b"]);
  expect(cli(dir, ["content", "create", "email", "X", "--persona", "a"]).code).toBe(ExitCode.CONFLICT);
  expect(cli(dir, ["content", "status", "1", "publicado"]).code).toBe(ExitCode.CONFLICT);
  expect(cli(dir, ["content", "status", "1", "revisao"]).json?.data.status).toBe("revisao");
  expect(cli(dir, ["content", "digest", "1"]).json?.data.sha256).toMatch(/^[a-f0-9]{64}$/);
  expect(cli(dir, ["calendar", "add", "2026-12-01", "1"]).json?.data.path).toBe("calendario/2026-12.md");

  const stats = cli(dir, ["stats", "--months", "3"]);
  expect(stats.code).toBe(ExitCode.SUCCESS);
  expect(stats.json?.data.archive.total).toBe(1);
  expect(stats.json?.data.content.byStatus.revisao).toBe(1);
  expect(stats.json?.data.archive.intakeByMonth).toHaveLength(3);

  const doctor = cli(dir, ["doctor"]);
  expect(doctor.code).toBe(ExitCode.SUCCESS);
  expect(doctor.json?.data.project.summary.errors).toBe(0);
  expect(cli(dir, ["doctor", "--strict"]).code).toBe(ExitCode.INTEGRITY);
  expect(cli(dir, ["context", "check"]).code).toBe(ExitCode.INTEGRITY);
  expect(cli(dir, ["context", "ready"]).code).toBe(ExitCode.USAGE);
});

test("MCP: project tools read and write through the core and report errors", async () => {
  const server = new McpServer({ name: "test", version: "1" });
  const catalog = { name: "test", version: "1", tools: [], resources: [], prompts: [] };
  registerProjectTools({ server, catalog });
  registerProjectResources({ server, catalog });
  const client = new Client({ name: "test", version: "1" });
  const [left, right] = InMemoryTransport.createLinkedPair();
  await server.connect(left);
  await client.connect(right);
  try {
    const names = (await client.listTools()).tools.map((t) => t.name);
    for (const name of ["project_stats", "archive_add", "archive_list", "content_create", "content_set_status", "calendar_add", "calendar_list"]) expect(names).toContain(name);

    const added = await client.callTool({ name: "archive_add", arguments: { project: dir, title: "Pelo MCP", text: "bruto" } });
    expect(added.isError).toBeFalsy();
    expect((added.structuredContent as { id: string }).id).toBe("0002");

    const list = await client.callTool({ name: "archive_list", arguments: { project: dir } });
    expect((list.structuredContent as { items: unknown[] }).items).toHaveLength(2);

    const created = await client.callTool({ name: "content_create", arguments: { project: dir, channel: "blog", title: "MCP", personas: ["p"], archive: ["2"] } });
    expect((created.structuredContent as { channel: string }).channel).toBe("blog");

    const missing = await client.callTool({ name: "content_show", arguments: { project: dir, id: "77" } });
    expect(missing.isError).toBe(true);
    expect((missing.structuredContent as { error: { name: string } }).error.name).toBe("NOT_FOUND");

    const stats = await client.callTool({ name: "project_stats", arguments: { project: dir, months: 2 } });
    const data = stats.structuredContent as { archive: { total: number }; content: { total: number } };
    expect(data.archive.total).toBe(2);
    expect(data.content.total).toBe(2);

    process.env.INBOUNDFY_PROJECT = dir;
    const resource = await client.readResource({ uri: "inboundfy://channels/blog" });
    expect(JSON.parse(String((resource.contents[0] as { text: string }).text)).items).toHaveLength(2);
  } finally {
    delete process.env.INBOUNDFY_PROJECT;
    await client.close();
    await server.close();
  }
});
