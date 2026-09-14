---
name: inboundfy-planejamento-04-briefing
description: >
  Fase 4 do pipeline (METODOLOGIA.md). Transforma cada oportunidade aprovada
  em um brief formal por peça, com canal, formato, público, objetivo, ângulo,
  ativos de apoio e restrições de marca. Não escreve copy final.
---

# Inboundfy Briefing

Quinta skill do pipeline. Também é o ponto de entrada para peça avulsa
encaminhada diretamente por `inboundfy-planejamento-00-triagem`, quando o usuário já pede uma
peça específica sem pacote completo.

## Escopo

Formaliza o brief. Não produz o artefato final; isso é
`inboundfy-planejamento-05-producao` + skill de canal.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/publico.md`: para definir o público-alvo do brief.
- `context/marca-voz.md`, `context/proibicoes.md` e `context/estruturas-proibidas.md`: para registrar restrições
  de voz e vetos que a peça deve respeitar.
- `context/canais.md`: para confirmar formato e limites técnicos do canal.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework, não um
  arquivo de dados do usuário): para decidir se a peça exige estrutura
  persuasiva e qual delas.

## Estrutura persuasiva

Sempre que o objetivo do brief for comercial explícito; anúncio, e-mail de
venda, página de oferta, script de vídeo de conversão, post com CTA de
compra, convite de webinar; leia `ESTRUTURAS-PERSUASIVAS.md` e decida:

1. **Qual estrutura cabe:** AIDA para peça curta com uma única oferta clara;
   PAS quando a persona de `context/publico.md` ainda não sente urgência e
   precisa ver o custo do problema antes da solução; PASTOR para peça longa
   de conversão que pode usar prova social e oferta detalhada
   (`context/ofertas.md`).
2. **Se FAB se aplica:** toda vez que o brief envolver apresentar produto ou
   serviço (`context/produtos.md` / `context/servicos.md`), registre que a
   skill de canal deve traduzir característica em vantagem e benefício, não
   apenas listar funcionalidade.
3. **Registre a escolha no brief**, com uma frase por bloco da estrutura
   (o que entra em cada bloco, com base nos ativos de apoio e no
   `context/`), para que a skill de canal não precise decidir estratégia
   sozinha; ela só aplica `ESCRITA.md` dentro de cada bloco já definido.

Peça informativa sem objetivo comercial (artigo explicativo, changelog,
shownotes) não exige estrutura persuasiva; nesse caso, registre no brief que
a peça segue `ESCRITA.md` diretamente, sem bloco de AIDA/PAS/PASTOR.

## Entrada esperada

Uma oportunidade aprovada em `03-planejamento/plano-de-oportunidades.md`, ou
um pedido direto de peça avulsa vindo de `inboundfy-planejamento-00-triagem`.

## Fluxo

1. Se vier de oportunidade aprovada, leia o item correspondente no plano e os
   ativos de apoio associados em `02-pesquisa-e-ativos/ativos.md`.
2. Se vier de peça avulsa, extraia do pedido do usuário: canal, tema,
   objetivo e qualquer restrição já informada.
3. Defina o público-alvo do brief a partir de `context/publico.md`; se
   nenhuma persona cadastrada corresponder, sinalize ao usuário antes de
   prosseguir.
4. Defina ângulo, formato e condição de aprovação da peça, alinhados ao formato
   e limite técnico do canal em `context/canais.md`.
5. Registre restrições de voz (`context/marca-voz.md`) e vetos aplicáveis
   (`context/proibicoes.md` e `context/estruturas-proibidas.md`) diretamente no brief, para que a skill de canal
   não precise recuperá-los de memória.
6. Decida a estrutura persuasiva do brief, conforme a seção acima, e registre
   a escolha (ou a ausência dela) explicitamente no brief.
7. Salve o brief em `04-briefs/<canal>-<slug>.md`, seguindo o template
   completo de `REFERENCIA.md`.
8. Encaminhe para `inboundfy-planejamento-05-producao`.

## Saída

Um arquivo por peça em `04-briefs/<canal>-<slug>.md`, dentro do diretório do
pacote; ou, em peça avulsa fora de pacote, o brief é passado diretamente
para `inboundfy-planejamento-05-producao` sem persistência em disco, se o usuário não tiver
pacote de trabalho aberto.

## Validação

- Todo brief tem canal, público, objetivo, ângulo e condição de aprovação
  preenchidos.
- Restrições de marca e vetos aplicáveis estão explícitos no brief.
- Todo brief comercial declara a estrutura persuasiva escolhida (ou justifica
  a ausência); nenhuma peça comercial sai sem essa escolha registrada.
- Nenhum brief foi criado para oportunidade sem aprovação manual ou seleção
  automática registrada por `inboundfy-iniciar`.

## Idempotência

Editar um brief já existente altera apenas os campos indicados pelo pedido
atual, preservando o restante.
