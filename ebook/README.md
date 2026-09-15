# Ebook do guia do usuário

<!-- markdownlint-disable MD033 -->
<p align="center">
  <picture>
    <source srcset="../brand/logo/icon.svg" type="image/svg+xml">
    <img src="../brand/logo/icon.png" alt="Logo do Inboundfy" width="128">
  </picture>
</p>
<!-- markdownlint-enable MD033 -->

Esta pasta publica o conteúdo completo de `docs/user/` em PDF e EPUB. Os
arquivos Markdown são a única fonte editorial; não edite os artefatos gerados.

## Edição vigente

A versão está em [`VERSION`](VERSION), segue SemVer e é sempre a mesma do CLI,
do framework, do pacote npm, da tag Git e da GitHub Release:

- `PATCH` registra correção de texto, link, exemplo ou apresentação;
- `MINOR` registra um capítulo novo ou ampliação material;
- `MAJOR` registra uma reorganização incompatível do percurso.

Baixe a edição `v0.2.0`:

- [PDF do guia do usuário](Inboundfy-Guia-do-Usuario-v0.2.0.pdf);
- [EPUB do guia do usuário](Inboundfy-Guia-do-Usuario-v0.2.0.epub).

Para links permanentes, use os aliases da edição mais recente:

- [PDF vigente](ebook-inboundfy.pdf): `ebook-inboundfy.pdf`;
- [EPUB vigente](ebook-inboundfy.epub): `ebook-inboundfy.epub`.

Cada build mantém somente as cinco edições SemVer mais recentes.
[`build.json`](build.json) registra a versão, o digest das fontes, os
metadados documentais e os hashes dos dois formatos.

## Gerar

Na raiz do Inboundfy:

```bash
npm run ebook
```

O build é orquestrado por Node.js e exige Pandoc, WeasyPrint, `xmllint`,
`pdftotext`, `pdftohtml`, ImageMagick, Fontconfig e `unzip`.
`docs/user/reading-order.txt` precisa listar cada página Markdown exatamente
uma vez.

## Verificar

```bash
npm run ebook:verify
```

A verificação compara as fontes com o manifesto, recalcula hashes, valida o
EPUB, confere a navegação interna e confirma que o PDF possui páginas
legíveis.

Toda mudança publicada em `docs/user/` exige uma nova versão do Inboundfy, novo
build, verificação automatizada e inspeção visual do PDF. O número nunca é
alterado apenas no ebook.
