/**
 * Shared contracts of the Inboundfy domain.
 *
 * Field names are English, but the persisted values (statuses such as
 * `rascunho` or `publicado`, the `acervo/`, `canais/` and `calendario/`
 * directories) keep the vocabulary of the method, because the skills and the
 * existing consumer projects read and write those exact values.
 */

/** Agent conventions that receive the skills. */
export type AgentKind = "codex" | "claude" | "agents";

/** Installation operations handled by the installer. */
export type OperationMode = "install" | "update" | "repair" | "agent-install";

/** Publishing channels supported by the framework. */
export type ChannelId = "blog" | "email" | "linkedin" | "instagram" | "substack" | "youtube";

/** File tracked by the installation manifest. */
export interface ManagedFile {
  path: string;
  source: string;
  sha256: string;
  category: "framework" | "documentation" | "ebook" | "template" | "skill";
}

/** `.inboundfy/manifest.json`: hashes of every managed file. */
export interface InstallationManifest {
  schemaVersion: 2;
  packageName: string;
  frameworkVersion: string;
  generatedAt: string;
  managedFiles: ManagedFile[];
}

/** `.inboundfy/install.json`: installation state of a consumer project. */
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

/** Lifecycle of an archive (acervo) item. */
export type ArchiveStatus = "recebido" | "processando" | "processado" | "arquivado";

/** Entry of `.inboundfy/indices/acervo.json`. */
export interface ArchiveRecord {
  id: string;
  slug: string;
  title: string;
  directory: string;
  createdAt: string;
  status: ArchiveStatus;
  source?: string;
  channels: ChannelId[];
}

/** Pipeline state of a channel piece. */
export type ContentStatus = "rascunho" | "revisao" | "aprovado" | "agendado" | "publicado" | "arquivado";

/** Entry of `.inboundfy/indices/conteudos.json`. */
export interface ContentRecord {
  id: string;
  channel: ChannelId;
  title: string;
  slug: string;
  directory: string;
  createdAt: string;
  status: ContentStatus;
  personas: string[];
  acervo: string[];
  baseEditorial: string[];
  auditReport?: string;
  approvedAssetSha256?: string;
  publishedAt?: string;
  url?: string;
}

/** Entry of `.inboundfy/indices/calendario.json`. */
export interface CalendarRecord {
  id: string;
  date: string;
  contentId: string;
  channel: ChannelId;
  path: string;
  status: ContentStatus;
}

/** Envelope shared by the three project indices. */
export interface ProjectIndex<T> {
  schemaVersion: 1;
  generatedAt: string;
  items: T[];
}

/** One step planned or applied by the installer. */
export interface PlannedAction {
  action: "backup" | "create" | "mkdir" | "preserve" | "remove-legacy" | "unchanged" | "update";
  path: string;
  detail?: string;
}

/** Result of install, update, repair and agent install. */
export interface OperationResult {
  mode: OperationMode;
  version: string;
  dryRun: boolean;
  actions: PlannedAction[];
  state: InstallationState;
}

/** One project diagnostic. */
export interface ProjectCheck {
  id: string;
  level: "error" | "warning" | "ok";
  message: string;
  path?: string;
  repairable: boolean;
}

/** Output of the project doctor. */
export interface ProjectReport {
  schemaVersion: 2;
  healthy: boolean;
  installedVersion: string | null;
  cliVersion: string;
  projectRoot: string;
  checks: ProjectCheck[];
  summary: { errors: number; warnings: number; ok: number };
}

/** Local Markdown file that may feed the project context. */
export interface ContextSourceCandidate {
  path: string;
  title: string;
  headings: string[];
  sha256: string;
  origin: "uppercase-markdown" | "brand";
}
