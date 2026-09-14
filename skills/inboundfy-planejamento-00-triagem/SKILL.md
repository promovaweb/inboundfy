---
name: inboundfy-planejamento-00-triagem
description: >
  Porta de entrada da fase 0 do pipeline (METODOLOGIA.md). Recebe material
  bruto; transcrição, peça-base, briefing informal, dado de pesquisa; e
  decide entre pacote completo ou peça avulsa, criando a estrutura de
  diretório e preservando a origem sem edição.
---

# Inboundfy Triagem

Primeira skill do pipeline editorial. Não escreve copy nem produz artefato
final; decide o caminho e prepara o terreno para `inboundfy-planejamento-01-saneamento`,
`inboundfy-planejamento-02-pesquisa`, `inboundfy-planejamento-03-oportunidades` e `inboundfy-planejamento-04-briefing`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/canais.md`: define o diretório de trabalho onde o pacote será
  criado. Se ainda não estiver preenchido, pare e acione
  `inboundfy-contexto-canais` antes de continuar.

## Entrada esperada

Material bruto de qualquer natureza: transcrição de reunião ou aula, peça-base,
print ou nota de pesquisa, release de produto, briefing informal do usuário.
Uma ideia curta sem tese ou prova deve chegar por `inboundfy-brainstorm`.

## Fluxo

1. Confirme que `context/canais.md` tem o diretório de trabalho definido e
   que o caminho existe. Se o diretório ou arquivo de apoio estiver ausente,
   acione `inboundfy-setup`; não recrie a estrutura nesta skill.
2. Avalie o material recebido e encaminhe ideia curta para
   `inboundfy-brainstorm` antes de abrir o pacote. Para as demais entradas,
   decida:
   - **Pacote completo**: quando o material é substancial o suficiente para
     gerar múltiplas peças em múltiplos canais (ex.: transcrição de aula,
     pesquisa extensa, lançamento de produto).
   - **Peça avulsa**: quando o pedido já é um brief específico de uma única
     peça em um único canal (ex.: "escreva um post de LinkedIn sobre X").
     Nesse caso, encaminhe direto para `inboundfy-planejamento-04-briefing` (para formalizar o
     brief) e depois `inboundfy-planejamento-05-producao`, pulando as fases 1-3.
3. Para pacote completo, crie a estrutura de diretório definida em
   `METODOLOGIA.md`, dentro do caminho de `context/canais.md`:

   ```text
   <diretório-de-trabalho>/<slug-do-pacote>/
   ├── README.md
   └── 00-entrada/
       └── material-original.md
   ```

4. Salve o material bruto, sem edição, em `00-entrada/material-original.md`.
   Este arquivo nunca é reescrito depois.
5. Escreva um `README.md` do pacote com: data, origem do material, escolha de
   pacote completo, e status inicial `00-entrada`, seguindo o template e o
   parâmetro objetivo de escolha de `REFERENCIA.md`.
6. Informe ao usuário o próximo passo: `inboundfy-planejamento-01-saneamento` para pacote
   completo, ou `inboundfy-planejamento-04-briefing` para peça avulsa.

## Saída

- Pacote completo: diretório novo com `README.md` e `00-entrada/`.
- Peça avulsa: nenhum arquivo novo aqui; a skill apenas encaminha para
  `inboundfy-planejamento-04-briefing`.

## Validação

- O material original está preservado, sem edição, em `00-entrada/`.
- A escolha entre pacote completo e peça avulsa está registrada no
  `README.md` do pacote (quando aplicável) e foi comunicada ao usuário.
- Nenhuma fase posterior foi executada por esta skill.

## Idempotência

Se o usuário fornecer novo material para um pacote já existente, crie um novo
pacote; não anexe ao `00-entrada/` de um pacote anterior. Um pacote
corresponde a uma origem de material.
