---
name: thothfy-iniciar
description: >
  Skill mestra do Thothfy. Recebe material bruto ou um pedido de conteúdo e
  roda automaticamente toda a sequência de thothfy-planejamento-00 a
  thothfy-planejamento-06, acionando as skills especialistas de canal
  necessárias, até entregar todos os ativos finais em content/ (ou no
  caminho definido em context/canais.md). Ative quando o usuário quiser um
  fluxo de ponta a ponta sem chamar cada skill manualmente.
---

# Thothfy Iniciar

Ponto de entrada único para quem não quer orquestrar fase por fase. Esta
skill não substitui as skills de `thothfy-planejamento-<NN>-*` nem as
`thothfy-especialista-*` — ela as aciona na ordem certa, com as
confirmações mínimas necessárias, e devolve o pacote de ativos prontos.

## Escopo

Cobre o fluxo completo, do material bruto ao pacote auditado em `content/`.
Não é uma skill nova de redação ou de pipeline — é a orquestradora das que
já existem. Para controlar ou retomar uma fase isolada (ex.: só reescrever
um brief, só auditar de novo), use a skill de fase específica em vez desta.

## Contexto exigido

- `.thothfy/context/canais.md` (ou `context/canais.md`, conforme a fase de
  instalação): precisa ter ao menos um canal ativo e o diretório de
  trabalho definido. Se `thothfy-setup` ainda não rodou o mínimo obrigatório
  (ver `INSTALACAO.md`), pare e acione `thothfy-setup` antes de continuar.
- Todo `context/` que as fases e skills especialistas acionadas declararem
  como exigido — esta skill não lê contexto diretamente, apenas garante que
  cada fase leia o que precisa.

## Entrada esperada

Material bruto de qualquer natureza (transcrição, ideia solta, release de
produto, pesquisa) **ou** um pedido direto de peça avulsa em um canal
específico, com ou sem restrição de escopo (ex.: "só gere o texto, sem
imagem" ou "gere só para LinkedIn e blog").

## Fluxo

1. Confirme que o mínimo obrigatório de `context/` existe (ver
   `INSTALACAO.md` e `CONTEXTO.md`). Se faltar, pare e acione `thothfy-setup`
   ou a skill de manutenção específica antes de prosseguir — nunca produza
   peça com contexto incompleto.
2. Acione `thothfy-planejamento-00-triagem` com o material recebido. Se o
   usuário já pediu uma peça avulsa específica, siga o caminho mínimo que
   essa skill define (direto para briefing).
3. Para pacote completo, acione em sequência, sem pular etapa e sem pedir
   confirmação a cada uma quando o usuário já autorizou o fluxo automático:
   `thothfy-planejamento-01-saneamento` →
   `thothfy-planejamento-02-pesquisa` →
   `thothfy-planejamento-03-oportunidades`.
4. Apresente ao usuário a lista de oportunidades planejadas antes de gerar
   briefs — esta é a única pausa de confirmação obrigatória do fluxo
   automático, porque é o momento em que o usuário decide quais peças
   valem o esforço de produção. Pular esta confirmação só é aceitável
   quando o usuário já disse explicitamente "gere tudo que fizer sentido".
   Use a matriz de decisão de `REFERENCIA.md` para os demais pontos de
   pausa ao longo do fluxo.
5. Para cada oportunidade aprovada, acione `thothfy-planejamento-04-briefing`
   e, na sequência, `thothfy-planejamento-05-producao` — que roteia para a
   skill `thothfy-especialista-<canal>` (e `thothfy-especialista-<canal>-imagem`
   quando o canal exigir imagem) correta.
6. Acione `thothfy-planejamento-06-auditoria` em cada artefato produzido
   antes de considerá-lo entregue. Peça reprovada volta para a fase indicada
   pela auditoria (produção ou replanejamento) e refaz o ciclo a partir
   dali, sem reiniciar o pacote inteiro.
7. Ao final, liste para o usuário todos os ativos finais gerados, o caminho
   de cada um dentro de `content/<pacote>/97-ativos-finais/`, e qualquer
   oportunidade que ficou pendente (reprovada sem correção automática
   possível, ou que o usuário optou por não produzir agora), seguindo o
   formato de resumo de `REFERENCIA.md`.

## Saída

O mesmo conjunto de artefatos que o pipeline manual produziria: pacote
completo em `content/<pacote>/` (ou peça avulsa fora de pacote), com todos
os artefatos finais auditados em `97-ativos-finais/<canal>/<item>/`. Esta
skill também entrega um resumo final ao usuário — lista de peças, canal,
status de auditoria e pendências.

## Validação

- Nenhuma fase da sequência foi pulada sem justificativa (peça avulsa
  explícita ou decisão do usuário).
- Toda peça final passou por `thothfy-planejamento-06-auditoria` antes de
  entrar no resumo como "pronta".
- O usuário confirmou a lista de oportunidades antes da produção, salvo
  autorização explícita para gerar tudo automaticamente.
- Nenhum artefato foi entregue com `context/` incompleto ou com violação de
  `context/proibicoes.md` sem correção.

## Idempotência

Rodar `thothfy-iniciar` de novo sobre o mesmo material bruto cria um novo
pacote (ver idempotência de `thothfy-planejamento-00-triagem`), não reabre
nem duplica um pacote já concluído. Para retomar um pacote existente,
informe o pacote ao acionar esta skill em vez de fornecer o material bruto
de novo.
