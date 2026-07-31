/**
 * Formata resultados humanos e JSON sem misturar logs com stdout estruturado.
 */

import type {
  DoctorReport,
  OperationResult,
  PlannedAction,
} from "./types.js";

/** Mostra o plano ou a execução agrupada por tipo de ação. */
export function printOperation(result: OperationResult, json: boolean): void {
  if (json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }
  const label = result.dryRun ? "Simulação" : "Concluído";
  process.stdout.write(
    `${label}: ${result.mode} do Thothfy ${result.version}.\n`,
  );
  const relevant = result.actions.filter((action) => action.action !== "unchanged");
  if (relevant.length === 0) {
    process.stdout.write("Nenhuma alteração necessária.\n");
    return;
  }
  for (const action of relevant) {
    process.stdout.write(formatAction(action));
  }
}

/** Mostra o diagnóstico completo ou apenas o resumo solicitado por status. */
export function printDoctor(
  report: DoctorReport,
  options: { json: boolean; summaryOnly?: boolean },
): void {
  if (options.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    return;
  }
  process.stdout.write(
    `Thothfy ${report.installedVersion ?? "não instalado"}; CLI ${report.cliVersion}.\n`,
  );
  process.stdout.write(
    `${report.summary.errors} erro(s), ${report.summary.warnings} aviso(s), ${report.summary.ok} verificação(ões) aprovada(s).\n`,
  );
  if (options.summaryOnly) return;
  for (const check of report.checks) {
    if (check.level === "ok") continue;
    const prefix = check.level === "error" ? "ERRO" : "AVISO";
    process.stdout.write(`${prefix}: ${check.message}\n`);
  }
}

function formatAction(action: PlannedAction): string {
  const detail = action.detail ? ` — ${action.detail}` : "";
  return `${action.action.padEnd(13)} ${action.path}${detail}\n`;
}
