/**
 * Project resources: passive JSON reads of the archive, the channels, the
 * calendar and the statistics of the project the server runs in
 * (`INBOUNDFY_PROJECT` or the working directory).
 */
import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { manifest } from "../../app/manifest.ts";
import { listArchive, showArchive } from "../../core/archive.ts";
import { listCalendar } from "../../core/calendar.ts";
import { listContent } from "../../core/content.ts";
import { CHANNELS } from "../../core/project.ts";
import { collectStats } from "../../core/stats.ts";
import { toolProject } from "../tools/project.ts";
import type { Registrar } from "../server.ts";

const json = (uri: URL, data: unknown) => ({ contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(data, null, 2) }] });

export function registerProjectResources({ server, catalog }: Registrar): void {
  const scheme = manifest.bin;
  const fixed = (name: string, path: string, description: string, read: () => Promise<unknown>) => {
    const uri = `${scheme}://${path}`;
    catalog.resources.push({ uri, name, description });
    server.registerResource(name, uri, { title: description, description, mimeType: "application/json" }, async (u) => json(u, await read()));
  };

  fixed("stats", "stats", "Project statistics: archive, channels and calendar.", async () => collectStats(await toolProject()));
  fixed("archive", "archive", "Every archive item of the project.", async () => ({ items: await listArchive(await toolProject()) }));
  fixed("channels", "channels", "Every channel piece of the project.", async () => ({ items: await listContent(await toolProject()) }));
  fixed("calendar", "calendar", "Every calendar entry of the project.", async () => ({ items: await listCalendar(await toolProject()) }));

  catalog.resources.push({ uri: `${scheme}://archive/{id}`, name: "archive-item", description: "One archive item with stage and audit progress." });
  server.registerResource(
    "archive-item",
    new ResourceTemplate(`${scheme}://archive/{id}`, {
      list: async () => ({
        resources: (await listArchive(await toolProject()).catch(() => [])).map((i) => ({ uri: `${scheme}://archive/${i.id}`, name: `archive-${i.id}`, title: i.title, mimeType: "application/json" })),
      }),
    }),
    { title: "Archive item", description: "One archive item with stage and audit progress.", mimeType: "application/json" },
    async (uri, { id }) => json(uri, await showArchive(await toolProject(), String(id))),
  );

  catalog.resources.push({ uri: `${scheme}://channels/{channel}`, name: "channel", description: `Pieces of one channel. Channels: ${CHANNELS.join(", ")}.` });
  server.registerResource(
    "channel",
    new ResourceTemplate(`${scheme}://channels/{channel}`, {
      list: async () => ({ resources: CHANNELS.map((c) => ({ uri: `${scheme}://channels/${c}`, name: `channel-${c}`, title: `Channel ${c}`, mimeType: "application/json" })) }),
    }),
    { title: "Channel pieces", description: "Pieces of one channel.", mimeType: "application/json" },
    async (uri, { channel }) => json(uri, { channel, items: await listContent(await toolProject(), { channel: String(channel) }) }),
  );
}
