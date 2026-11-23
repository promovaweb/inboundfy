/**
 * Packs the framework payload into `generated/payload.gz`.
 *
 * The file is a gzip of `{ version, files: [{ path, sha256, base64 }] }`
 * and enters the compiled binary through `src/core/payload-embed.ts`.
 * With `--check`, rebuilds in memory and exits with 1 when the committed
 * bundle is missing or stale (used by `validate`).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { gunzipSync, gzipSync } from "node:zlib";
import { listPayloadSources } from "../src/core/payload-sources.ts";
import pkg from "../package.json" with { type: "json" };

const root = process.cwd();
const out = "generated/payload.gz";

const files = listPayloadSources(root).map((path) => {
  const content = readFileSync(path);
  return { path, sha256: createHash("sha256").update(content).digest("hex"), base64: content.toString("base64") };
});
const json = JSON.stringify({ version: pkg.version, files });

if (process.argv.includes("--check")) {
  if (!existsSync(out)) {
    console.error(`✗ ${out} is missing. Run: bun run payload`);
    process.exit(1);
  }
  const current = gunzipSync(readFileSync(out)).toString("utf8");
  if (current !== json) {
    console.error(`✗ ${out} is stale. Run: bun run payload`);
    process.exit(1);
  }
  console.log(`✓ ${out} matches ${files.length} files`);
} else {
  mkdirSync("generated", { recursive: true });
  const gz = gzipSync(json, { level: 9 });
  writeFileSync(out, gz);
  console.log(`✓ ${out}: ${files.length} files, ${(gz.length / 1024 / 1024).toFixed(2)} MB`);
}
