# Changelog

As mudanças relevantes do Inboundfy são registradas neste arquivo. A versão do
framework, do CLI, do pacote npm, da tag Git e da GitHub Release é sempre a
mesma.

## [0.7.1](https://github.com/promovaweb/inboundfy/compare/v0.7.0...v0.7.1) (2026-11-13)

### Correções

* Corrige os PNGs do logotipo, que mostravam o nome antigo.

## [0.7.0](https://github.com/promovaweb/inboundfy/compare/v0.6.1...v0.7.0) (2026-11-13)

### Funcionalidades

* passa a distribuir o Inboundfy sob a GNU AGPL 3.0 (SPDX `AGPL-3.0-only`), com o texto oficial no `LICENSE`, o campo `license` do pacote, o badge e a seção Licença do README e a seção Licença do CONTRIBUTING. A partir desta versão, o projeto é distribuído sob a GNU AGPL 3.0; versões anteriores continuam sob a licença com que foram publicadas.

### Integração contínua

* a publicação no npm passa a ser feita só pela máquina local; o workflow de release não publica mais no npm. O workflow agora é disparado pela tag `vX.Y.Z`, cria a GitHub Release com as notas do changelog e anexa PDF, EPUB, tarball e `SHA256SUMS`.
* remove o Release Please, que não conseguia abrir a Release PR neste repositório. Versão, changelog e tag são preparados na máquina local, como descreve o `RELEASING.md`.
* `npm run release:check` passa a exigir a licença `AGPL-3.0-only` e a recusar um workflow de release que publique no npm.
* `npm run publish:npm` espera a versão aparecer no registry por até cinco minutos antes de confirmar a publicação.

## [0.6.1](https://github.com/promovaweb/inboundfy/compare/v0.6.0...v0.6.1) (2026-11-13)


### Documentação

* reorganiza o README para quem usa (cabeçalho da Promovaweb, Discord, documentação, planos, repositórios usados e licença proprietária) e cria o CONTRIBUTING para quem contribui ([12290c0](https://github.com/promovaweb/inboundfy/commit/12290c0b64681f89ef0163539d5f497355906878))

## [0.6.0](https://github.com/promovaweb/inboundfy/compare/v0.5.3...v0.6.0) (2026-10-29)


### Funcionalidades

* acrescenta STEPPS às estruturas persuasivas das skills de copy ([1076bc3](https://github.com/promovaweb/inboundfy/commit/1076bc306b42034904a41f18f63df742010d34fb))

## [0.5.3](https://github.com/promovaweb/inboundfy/compare/v0.5.2...v0.5.3) (2026-10-20)

### Correções

- aceita lista de versões retornada pelo npm ([#7](https://github.com/promovaweb/inboundfy/issues/7)) ([e874ac3](https://github.com/promovaweb/inboundfy/commit/e874ac356ad7884d0d734c10e43c4133aaad435e))

## [0.5.2](https://github.com/promovaweb/inboundfy/compare/v0.5.1...v0.5.2) (2026-10-20)

### Correções

- valida publicação em checkout limpo e preserva anexos ([#5](https://github.com/promovaweb/inboundfy/issues/5)) ([152f184](https://github.com/promovaweb/inboundfy/commit/152f1849e1c2859cdad20ff8aec7dad7208b2525))

## [0.5.1](https://github.com/promovaweb/inboundfy/compare/v0.5.0...v0.5.1) (2026-10-20)

### Correções

- Recupera a publicação npm de releases existentes ([#3](https://github.com/promovaweb/inboundfy/pull/3)).
- Corrige os caminhos do logo e das fontes no PDF recompilado para esta versão.

## [0.5.0](https://github.com/promovaweb/inboundfy/compare/v0.4.0...v0.5.0) (2026-10-13)

### Funcionalidades

- adiciona `inboundfy-contexto-depoimentos` para registrar prova social (nome,
  cargo, empresa, citação literal, foto e consentimento de uso por canal) em
  `context/depoimentos.json`, o primeiro arquivo de contexto em JSON em vez de
  Markdown ([20093b1](https://github.com/promovaweb/inboundfy/commit/20093b12f5a5650f1dc5476c4d78a1c704687e4))

## [0.4.0](https://github.com/promovaweb/inboundfy/compare/v0.3.0...v0.4.0) (2026-09-28)

### Orientações editoriais

- Amplia as referências de escrita, gramática, simplificação e revisão das
  skills, com orientações para artigos autorais, parágrafos e perguntas.
- Corrige três ocorrências proibidas nas referências das skills.

### Funcionalidades

- adiciona skills de gramática e simplificação ([a025208](https://github.com/promovaweb/inboundfy/commit/a0252088f8077840577a45e7b2aec6c6725a7736))

### Correções

- Gera o HTML do guia antes dos testes que conferem o ebook.
- Instala no CI os compiladores do ebook usados pela release e fixa Pandoc
  `3.10.2` para validar a navegação do EPUB com a mesma versão nos dois fluxos.

## 0.3.0 (2026-09-22)

### Pipeline

- Vincula a aprovação de uma peça ao relatório de auditoria e ao SHA-256 do
  arquivo validado.
- Adiciona `content digest` e valida as transições entre rascunho, revisão,
  aprovação, agendamento, publicação e arquivamento.
- Exige URL HTTP(S) e data válida para registrar uma publicação e recusa o
  avanço quando o conteúdo muda depois da auditoria.

### Skills e documentação

- Define `$inboundfy` como entrada principal e mantém `inboundfy-iniciar` como
  alias compatível.
- Revisa os contratos editoriais, o manual, a referência do CLI e os exemplos
  de validação e retomada.
- Amplia a validação do pacote npm com um fluxo isolado completo, da entrada no
  acervo até a publicação.

## 0.2.0 (2026-09-15)

### Organização

- Consolida brainstorm, estratégia e planejamento em três skills públicas com
  etapas preservadas em `references/etapas/`.
- Agrupa os domínios institucionais, de oferta e de operação sem juntar os
  arquivos editáveis do projeto consumidor.
- Renomeia capacidades para os namespaces `inboundfy-copy-*` e
  `inboundfy-growth-*`, mantendo 20 especialistas e 20 validadoras de canal.
- Atualiza catálogo, roteamento, testes, documentação, exemplos e fluxos para
  114 skills públicas.

## Não lançado

Nenhuma mudança registrada.
