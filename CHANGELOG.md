# Changelog

As mudanças relevantes do Inboundfy são registradas neste arquivo. A versão do
framework, do CLI, do pacote npm, da tag Git e da GitHub Release é sempre a
mesma.

## [0.5.0](https://github.com/promovaweb/inboundfy/compare/v0.4.0...v0.5.0) (2026-09-30)


### Funcionalidades

* adiciona CLI e documentação v1.0.0 ([5718230](https://github.com/promovaweb/inboundfy/commit/57182303410aa10cce95986ee7883ac10dda4022))
* adiciona grupo de estratégia de agência e reorganiza metodologia em 5 grupos ([0c7ff24](https://github.com/promovaweb/inboundfy/commit/0c7ff24c24596b127b17ef75a226a6ba7de91507))
* adiciona skills de gramática e simplificação ([a025208](https://github.com/promovaweb/inboundfy/commit/a0252088f8077840577a45e7b2aec6c6725a7736))
* amplia framework com brainstorming e validação ([cfb58ce](https://github.com/promovaweb/inboundfy/commit/cfb58ceecd9d40869afe9de6bbad0ff8a74e1477))
* organiza namespaces e fluxos das skills ([56f5e3b](https://github.com/promovaweb/inboundfy/commit/56f5e3bac36ddca84dc030e0b26f99c5853730cf))
* publica framework inboundfy v1.1.0 ([d084f6a](https://github.com/promovaweb/inboundfy/commit/d084f6a3b07bc3b9fe0200035d7dca2328aae8b1))
* vincula publicação à auditoria da peça ([4f8bdfd](https://github.com/promovaweb/inboundfy/commit/4f8bdfde9ff6351ce1e30a7817d6a689ca49d9eb))


### Correções

* define primeira versao como 0.2.0 ([732e08e](https://github.com/promovaweb/inboundfy/commit/732e08e23d59099adbbdbf8716261389ab5cc3e3))
* fixa versão do Pandoc nos workflows ([b41b28a](https://github.com/promovaweb/inboundfy/commit/b41b28a13674ea8b0203fe6643a843e1f501c3c8))
* gera ebook antes da suíte de validação ([1e39f60](https://github.com/promovaweb/inboundfy/commit/1e39f60db07e0767f7dc5cc93755c95a4b2d2a15))
* instala compiladores do ebook no CI ([8d59b0e](https://github.com/promovaweb/inboundfy/commit/8d59b0ea641b84444e4dfd70979143a785ca5635))
* instala pandoc no CI do Inboundfy ([aafef0d](https://github.com/promovaweb/inboundfy/commit/aafef0d9d684e7100116143ecfb796c4d946b5df))


### Documentação

* adiciona pacote de exemplo end-to-end do pipeline (Como funciona o MCP) ([2aec3a1](https://github.com/promovaweb/inboundfy/commit/2aec3a16bbc8cf566a2e9b0958324fe808f1dc84))
* amplia orientações de escrita e revisão editorial ([4dea377](https://github.com/promovaweb/inboundfy/commit/4dea377c0e25a50c63e73b96def92b4a02a445be))
* atualiza instalação e guia do usuário ([752d508](https://github.com/promovaweb/inboundfy/commit/752d50869a2c3e51a20e6b19d2b534e209b73dab))
* inicia projeto Thothfy ([6b093a4](https://github.com/promovaweb/inboundfy/commit/6b093a430d159190d733238d953bc9e8fb8689e4))
* publica aliases estaveis do ebook ([39525ad](https://github.com/promovaweb/inboundfy/commit/39525ad7ad1b6476a2a4881aee2b94faf2709300))
* **release:** registra GitHub Release v1.0.0 ([e822f27](https://github.com/promovaweb/inboundfy/commit/e822f274fa138382c8ae96ec9d811199efa29c01))

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
