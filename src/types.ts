/**
 * Contratos compartilhados pelos comandos e pelo núcleo de instalação.
 */

export type AgentKind = "codex" | "claude" | "agents";
export type OperationMode = "install" | "update" | "repair" | "agent-install";

export interface ManagedFile {
  path: string;
  source: string;
  sha256: string;
  category: "framework" | "documentation" | "ebook" | "template" | "skill";
}

export interface InstallationManifest {
  schemaVersion: 2;
  packageName: string;
  frameworkVersion: string;
  generatedAt: string;
  managedFiles: ManagedFile[];
}

export interface InstallationState {
  schemaVersion: 2;
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
    acervo: string;
    canais: string;
    calendario: string;
  };
}

export type ChannelId =
  | "blog"
  | "email"
  | "linkedin"
  | "instagram"
  | "substack"
  | "youtube";

export interface AcervoRecord {
  id: string;
  slug: string;
  title: string;
  directory: string;
  createdAt: string;
  status: "recebido" | "processando" | "processado" | "arquivado";
  source?: string;
  channels: ChannelId[];
}

export interface ContentRecord {
  id: string;
  channel: ChannelId;
  title: string;
  slug: string;
  directory: string;
  createdAt: string;
  status: "rascunho" | "revisao" | "aprovado" | "agendado" | "publicado" | "arquivado";
  personas: string[];
  acervo: string[];
  baseEditorial: string[];
  publishedAt?: string;
  url?: string;
}

export interface CalendarRecord {
  id: string;
  date: string;
  contentId: string;
  channel: ChannelId;
  path: string;
  status: ContentRecord["status"];
}

export interface ProjectIndex<T> {
  schemaVersion: 1;
  generatedAt: string;
  items: T[];
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
  schemaVersion: 2;
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
