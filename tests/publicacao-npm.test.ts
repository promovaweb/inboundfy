/** Confere publicação e falhas do registry sem enviar pacotes ao npm. */
import { describe, expect, test, vi } from "vitest";
import { publishPackage } from "../scripts/publish-npm-package.mjs";

const pacote = { name: "@promovaweb/inboundfy", version: "0.5.0" };
const ausente = () => {
  throw Object.assign(new Error("404"), {
    stdout: JSON.stringify({ error: { code: "E404" } }),
  });
};

describe("publicação npm", () => {
  test("publica uma versão ausente e confere sua disponibilidade", () => {
    const run = vi.fn()
      .mockImplementationOnce(ausente)
      .mockReturnValueOnce("")
      .mockReturnValueOnce('"0.5.0"');
    expect(publishPackage(pacote, "/tmp/pacote.tgz", "/tmp", run)).toBe(true);
    expect(run.mock.calls.map((call) => call[1][0])).toEqual(["view", "publish", "view"]);
    expect(run.mock.calls[1][1]).toContain("--registry=https://registry.npmjs.org");
  });

  test("não publica novamente uma versão disponível", () => {
    const run = vi.fn().mockReturnValue('"0.5.0"');
    expect(publishPackage(pacote, "/tmp/pacote.tgz", "/tmp", run)).toBe(false);
    expect(run).toHaveBeenCalledTimes(1);
  });

  test.each(["E401", "E403", "E500", "ETIMEDOUT"])("interrompe diante de %s", (code) => {
    const run = vi.fn(() => {
      throw Object.assign(new Error(code), {
        stdout: JSON.stringify({ error: { code } }),
      });
    });
    expect(() => publishPackage(pacote, "/tmp/pacote.tgz", "/tmp", run))
      .toThrow("Não foi possível consultar");
    expect(run).toHaveBeenCalledTimes(1);
  });

  test.each(['"0.4.0"', "resposta inválida"])("recusa resposta inesperada: %s", (response) => {
    const run = vi.fn().mockReturnValue(response);
    expect(() => publishPackage(pacote, "/tmp/pacote.tgz", "/tmp", run)).toThrow();
    expect(run).toHaveBeenCalledTimes(1);
  });

  test("não declara sucesso quando a versão continua ausente após publicar", () => {
    const run = vi.fn()
      .mockImplementationOnce(ausente)
      .mockReturnValueOnce("")
      .mockImplementationOnce(ausente);
    expect(() => publishPackage(pacote, "/tmp/pacote.tgz", "/tmp", run))
      .toThrow("ainda não está disponível");
    expect(run).toHaveBeenCalledTimes(3);
  });
});
