/**
 * Erros esperados do CLI com código de saída controlado.
 */

export class CliError extends Error {
  public readonly exitCode: number;

  public constructor(message: string, exitCode = 1, options?: ErrorOptions) {
    super(message, options);
    this.name = "CliError";
    this.exitCode = exitCode;
  }
}
