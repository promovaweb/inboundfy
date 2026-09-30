# Changelog

As mudanças relevantes do Inboundfy são registradas neste arquivo. A versão do
framework, do CLI, do pacote npm, da tag Git e da GitHub Release é sempre a
mesma.

## [0.4.0](https://github.com/promovaweb/inboundfy/compare/v0.3.0...v0.4.0) (2026-09-28)


### Orientações editoriais

- Amplia as referências de escrita, gramática, simplificação e revisão das
  skills, com orientações para artigos autorais, parágrafos e perguntas.
- Corrige três ocorrências proibidas nas referências das skills.

### Funcionalidades

* adiciona skills de gramática e simplificação ([a025208](https://github.com/promovaweb/inboundfy/commit/a0252088f8077840577a45e7b2aec6c6725a7736))

### Correções

* Gera o HTML do guia antes dos testes que conferem o ebook.
* Instala no CI os compiladores do ebook usados pela release e fixa Pandoc
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
