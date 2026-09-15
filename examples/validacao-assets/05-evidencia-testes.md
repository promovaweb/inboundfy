# Evidência de testes — validação de assets

- **Executado em:** 2026-07-30.
- **Diretório:** raiz do Hub.
- **Resultado:** aprovado.

## Suíte automatizada

```bash
npm --prefix inboundfy test
```

Resultado observado:

```text
Test Files  2 passed (2)
Tests       32 passed (32)
Ran 32 tests

OK
Framework Inboundfy válido: 114 skills e 3 sequências válidas.
```

## Verificação do ebook

```bash
npm --prefix inboundfy run ebook:verify
```

Resultado observado:

```text
OK: edição v1.1.0 sincronizada com docs/user/.
```

## Conferências complementares

Também passaram `npm run validar`, a instalação isolada do tarball,
`npm run release:check`, `markdownlint`, o validador editorial e
`git diff --check` no escopo alterado. A suíte comprovou instalação, reparo,
diagnóstico read-only, preservação do contexto, bloqueio de symlink e o
inventário de Markdown minúsculo em `brand/`,
as violações da primeira rodada, o retorno à produtora e o hard gate zerado
na segunda rodada. Os casos adicionais cobrem preço e CTA de email, estrutura
semântica de blog e dimensão, gradiente e paleta de imagem para Instagram.
Também conferiu as 16 referências internas das três sequências, os 20 capítulos
numerados de documentação, a instalação de `docs/` e `ebook/` por
`inboundfy-setup`, a ordem dos 12 capítulos do guia, o manifesto, os formatos
publicados e a remoção dos metadados internos da experiência do leitor.
