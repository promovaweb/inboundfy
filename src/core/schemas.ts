/**
 * Structural validation of the install state and manifest.
 *
 * `packageName` stays `@promovaweb/inboundfy` so projects installed by the
 * Node CLI (0.x) keep working with the binary.
 */
import { z } from "zod";

export const PACKAGE_NAME = "@promovaweb/inboundfy";

const portablePath = z
  .string()
  .min(1)
  .refine((value) => !value.startsWith("/") && !value.includes("\\") && !value.split("/").includes(".."), "path must be relative without .. or backslash");

const managedFile = z.object({
  path: portablePath,
  source: z.string().min(1),
  sha256: z.string().regex(/^[a-f0-9]{64}$/),
  category: z.enum(["framework", "documentation", "ebook", "template", "skill"]),
});

export const installationManifestSchema = z.object({
  schemaVersion: z.literal(2),
  packageName: z.literal(PACKAGE_NAME),
  frameworkVersion: z.string().min(1),
  generatedAt: z.string().datetime(),
  managedFiles: z.array(managedFile),
});

export const installationStateSchema = z.object({
  schemaVersion: z.literal(2),
  packageName: z.literal(PACKAGE_NAME),
  frameworkVersion: z.string().min(1),
  installedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  projectRoot: z.literal("."),
  agent: z.enum(["codex", "claude", "agents"]),
  skillsDirectory: portablePath,
  instructionFile: z.enum(["AGENTS.md", "CLAUDE.md"]).nullable(),
  setupStatus: z.enum(["pending-context", "ready"]),
  paths: z.object({ acervo: portablePath, canais: portablePath, calendario: portablePath }),
});
