---
name: thothfy-iniciar
description: >
  Wrapper principal do Thothfy. Recebe uma ideia, uma peça-base ou um pedido
  de conteúdo, aciona brainstorm quando necessário e executa
  thothfy-planejamento-00 a 06 com os especialistas adequados até entregar
  uma ou várias peças auditadas, sem confirmações intermediárias evitáveis.
---

# Thothfy Iniciar

Ponto de entrada para usar o fluxo sem orquestrar fase por fase. Esta
skill aciona `thothfy-brainstorm`, `thothfy-planejamento-<NN>-*` e
`thothfy-especialista-*` na ordem certa, resolve escolhas reversíveis com os
arquivos disponíveis e devolve o pacote de ativos prontos.

## Escopo

Cobre o fluxo completo, do material bruto ao pacote auditado em `content/`.
Não é uma skill nova de redação ou de pipeline — é a orquestradora das que
já existem. Para controlar ou retomar uma fase isolada (ex.: só reescrever
um brief, só auditar de novo), use a skill de fase específica em vez desta.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `.thothfy/context/canais.md` (ou `context/canais.md`, conforme a fase de
  instalação): precisa ter ao menos um canal ativo e o diretório de
  trabalho definido. Se `thothfy-setup` ainda não rodou o mínimo obrigatório
  (ver `INSTALACAO.md`), pare e acione `thothfy-setup` antes de continuar.
- Todo `context/` que as fases e skills especialistas acionadas declararem
  como exigido — esta skill não lê contexto diretamente, apenas garante que
  cada fase leia o que precisa.

## Entrada esperada

Uma ideia curta, uma peça-base já publicada ou em rascunho, material bruto
de qualquer natureza, ou um pedido direto de peça avulsa. Restrições como
“só texto” ou “use blog e LinkedIn” prevalecem sobre escolhas automáticas.

## Fluxo

1. Confirme que a estrutura canônica e o mínimo obrigatório de `context/`
   existem (ver `INSTALACAO.md` e `CONTEXTO.md`). Se faltar arquivo de apoio,
   diretório ou skill, acione `thothfy-setup`. Se faltar conteúdo de negócio,
   acione a skill `thothfy-contexto-*` específica. Nunca repare a instalação
   dentro desta wrapper.
2. Classifique a entrada pela matriz de `REFERENCIA.md`:
   - ideia curta sem tese ou evidência: acione `thothfy-brainstorm` e use o
     `brainstorm.md` aprovado como material de origem;
   - peça-base, transcrição ou pesquisa substancial: siga direto para a
     triagem;
   - pedido de peça única com canal definido: use o caminho de peça avulsa.
3. Acione `thothfy-planejamento-00-triagem` com o material classificado.
4. Para pacote completo, acione em sequência, sem pular etapa e sem pedir
   confirmação a cada uma quando o usuário já autorizou o fluxo automático:
   `thothfy-planejamento-01-saneamento` →
   `thothfy-planejamento-02-pesquisa` →
   `thothfy-planejamento-03-oportunidades`.
5. Se o usuário não escolheu canais, selecione automaticamente até cinco
   oportunidades de prioridade alta ou média, apoiadas pelos ativos e
   compatíveis com `context/canais.md`. Não peça aprovação intermediária;
   registre no plano por que cada item entrou ou ficou de fora.
6. Para cada oportunidade selecionada, acione `thothfy-planejamento-04-briefing`
   e, na sequência, `thothfy-planejamento-05-producao` — que roteia para a
   skill `thothfy-especialista-<canal>` (e `thothfy-especialista-<canal>-imagem`
   quando o canal exigir imagem) correta.
7. Confirme que `thothfy-planejamento-05-producao` acionou a
   `thothfy-validador-*` pareada de cada asset. Peça reprovada volta à
   produtora com o relatório e refaz esse ciclo até ser aprovada.
8. Acione `thothfy-planejamento-06-auditoria` para consolidar as aprovações.
   Divergência estratégica volta ao briefing sem reiniciar o pacote inteiro.
9. Ao final, liste para o usuário todos os ativos finais gerados, o caminho
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
- Todo asset possui aprovação individual da `thothfy-validador-*` pareada.
- Toda oportunidade produzida foi pedida pelo usuário ou selecionada pela
  política automática documentada.
- Nenhum artefato foi entregue com `context/` incompleto ou com violação de
  `context/proibicoes.md` sem correção.

## Idempotência

Rodar `thothfy-iniciar` de novo sobre o mesmo material bruto cria um novo
pacote (ver idempotência de `thothfy-planejamento-00-triagem`), não reabre
nem duplica um pacote já concluído. Para retomar um pacote existente,
informe o pacote ao acionar esta skill em vez de fornecer o material bruto
de novo.
