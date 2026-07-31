#!/usr/bin/env node

/**
 * Carrega o build JavaScript distribuído pelo pacote npm.
 */

const { existsSync } = require("node:fs");
const { join, resolve } = require("node:path");
const { pathToFileURL } = require("node:url");

const entrada = join(resolve(__dirname, ".."), "dist", "cli.js");

if (!existsSync(entrada)) {
  process.stderr.write(
    "Erro: o build do Thothfy não foi encontrado. Reinstale o pacote.\n",
  );
  process.exit(1);
}

import(pathToFileURL(entrada).href).catch((erro) => {
  const mensagem = erro instanceof Error ? erro.message : String(erro);
  process.stderr.write(`Erro: não foi possível iniciar o Thothfy: ${mensagem}\n`);
  process.exit(1);
});
