/**
 * Contratos compartilhados pelos comandos e pelo núcleo de instalação.
 */

export type AgentKind = "codex" | "claude" | "agents";
export type OperationMode = "init" | "update" | "repair" | "agent-install";

export interface ManagedFile {
  path: string;
  source: string;
  sha256: string;
  category: "framework" | "documentation" | "ebook" | "template" | "skill";
}

export interface InstallationManifest {
  schemaVersion: 1;
  packageName: string;
  frameworkVersion: string;
  generatedAt: string;
  managedFiles: ManagedFile[];
}

export interface InstallationState {
  schemaVersion: 1;
  packageName: string;
  frameworkVersion: string;
  installedAt: string;
  updatedAt: string;
  projectRoot: ".";
  agent: AgentKind;
  skillsDirectory: string;
  instructionFile: "AGENTS.md" | "CLAUDE.md" | null;
  setupStatus: "pending-context" | "ready";
  paths: {
    brainstorms: string;
    content: string;
  };
}

export interface PlannedAction {
  action:
    | "backup"
    | "create"
    | "mkdir"
    | "preserve"
    | "remove-legacy"
    | "unchanged"
    | "update";
  path: string;
  detail?: string;
}

export interface OperationResult {
  mode: OperationMode;
  version: string;
  dryRun: boolean;
  actions: PlannedAction[];
  state: InstallationState;
}

export interface DoctorCheck {
  id: string;
  level: "error" | "warning" | "ok";
  message: string;
  path?: string;
  repairable: boolean;
}

export interface DoctorReport {
  schemaVersion: 1;
  healthy: boolean;
  installedVersion: string | null;
  cliVersion: string;
  projectRoot: string;
  checks: DoctorCheck[];
  summary: {
    errors: number;
    warnings: number;
    ok: number;
  };
}

export interface ContextSourceCandidate {
  path: string;
  title: string;
  headings: string[];
  sha256: string;
  origin: "uppercase-markdown" | "brand";
}
