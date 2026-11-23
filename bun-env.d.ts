/**
 * Module declarations for the text imports used by Bun.
 * Markdown files enter the binary with `with { type: "text" }` and reach the
 * code as strings. TypeScript needs this declaration to accept the import.
 */
declare module "*.md" {
  const content: string;
  export default content;
}

/**
 * Binary assets embedded with `with { type: "file" }`: the import yields the
 * path inside the compiled executable (or on disk under `bun run`).
 */
declare module "*.gz" {
  const path: string;
  export default path;
}
