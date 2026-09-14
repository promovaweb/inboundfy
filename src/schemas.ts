/**
 * Validação estrutural dos arquivos de estado lidos pelo CLI.
 */

import { z } from "zod";

const portablePath = z
  .string()
  .min(1)
  .refine(
    (value) =>
      !value.startsWith("/") &&
      !value.includes("\\") &&
      !value.split("/").includes(".."),
    "o caminho precisa ser relativo e não pode conter .. ou barra invertida",
  );
const agent = z.enum(["codex", "claude", "agents"]);
const managedFile = z.object({
  path: portablePath,
  source: z.string().min(1),
  sha256: z.string().regex(/^[a-f0-9]{64}$/),
  category: z.enum([
    "framework",
    "documentation",
    "ebook",
    "template",
    "skill",
  ]),
});

export const installationManifestSchema = z.object({
  schemaVersion: z.literal(2),
  packageName: z.literal("@promovaweb/inboundfy"),
  frameworkVersion: z.string().min(1),
  generatedAt: z.string().datetime(),
  managedFiles: z.array(managedFile),
});

export const installationStateSchema = z.object({
  schemaVersion: z.literal(2),
  packageName: z.literal("@promovaweb/inboundfy"),
  frameworkVersion: z.string().min(1),
  installedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  projectRoot: z.literal("."),
  agent,
  skillsDirectory: portablePath,
  instructionFile: z.enum(["AGENTS.md", "CLAUDE.md"]).nullable(),
  setupStatus: z.enum(["pending-context", "ready"]),
  paths: z.object({
    acervo: portablePath,
    canais: portablePath,
    calendario: portablePath,
  }),
});
