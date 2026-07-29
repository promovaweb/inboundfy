---
name: thothfy-estrategia-campanha
description: >
  Terceira skill do grupo estratégico. Transforma brief de cliente e pesquisa
  de mercado em um plano de campanha multicanal — fases, temas, mix de canal
  e cadência de KPI. Não escreve peça nem calendário de execução recorrente
  (isso é thothfy-estrategia-calendario); decide o quê e quando em nível de
  campanha, não o brief por peça (thothfy-planejamento-04-briefing).
---

# Thothfy Estratégia — Plano de Campanha

Terceira etapa do grupo estratégico. Cruza objetivo, KPI, público e lacunas
de mercado em um plano de campanha: fases, temas por fase, mix de canal e
volume aproximado de peças — a ponte entre "por que a campanha existe" e
"que pacotes de conteúdo o pipeline vai produzir".

## Escopo

Decide fase, tema e mix de canal da campanha. Não decide o calendário
recorrente entre campanhas (`thothfy-estrategia-calendario`) nem o brief
individual de cada peça (`thothfy-planejamento-04-briefing`, que roda dentro
do pipeline depois que o material da peça existir).

## Contexto exigido

- `context/canais.md`, para verificar quais canais estão ativos e sua
  cadência técnica.
- `context/publico.md`, para alinhar tema por fase à jornada da persona
  prioritária.
- `context/ofertas.md`, quando a campanha girar em torno de um produto ou
  plano específico.

## Entrada esperada

`00-briefing/brief-cliente.md` e `00-briefing/pesquisa-mercado.md` da mesma
campanha.

## Fluxo

1. Leia o brief e a pesquisa de mercado da campanha.
2. Divida a campanha em fases (ex.: atração, consideração, conversão, ou
   fases próprias de um lançamento) — nunca proponha canal solto sem fase.
3. Para cada fase, defina: tema central, canais envolvidos, volume
   aproximado de peças e a lacuna de mercado que a fase explora (referência
   à pesquisa).
4. Distribua o KPI da campanha em indicadores intermediários por fase
   quando fizer sentido (ex.: tráfego na fase de atração, leads na fase de
   consideração), sem inventar métrica que o cliente não acompanha.
5. Liste os pacotes de conteúdo que a campanha exige, cada um com fase,
   canal e tema — cada pacote listado aqui é o gatilho para abrir um
   diretório de pipeline em `thothfy-planejamento-00-triagem` quando houver
   material bruto, ou para acionar `thothfy-especialista-<canal>`
   diretamente quando for peça avulsa e rápida dentro da campanha.
6. Salve o plano em `<pacote-de-campanha>/01-plano/plano-de-campanha.md`,
   seguindo o template de `REFERENCIA.md`.
7. Apresente o plano para aprovação do usuário. Só depois de aprovado,
   acione `thothfy-contexto-campanhas` para atualizar
   `context/campanhas.md` com status "em execução" e o caminho do plano.

## Saída

`<pacote-de-campanha>/01-plano/plano-de-campanha.md`.

## Validação

- Toda fase tem tema, canal, volume aproximado e lacuna de mercado citada.
- KPI de campanha está refletido em indicador de pelo menos uma fase.
- Todo pacote de conteúdo listado aponta canal ativo em `context/canais.md`.
- Plano foi aprovado antes de campanha mudar status para "em execução".

## Idempotência

Rodar novamente sobre a mesma campanha atualiza o plano incorporando fases
novas ou ajuste de KPI, preservando pacotes já em produção sem reordenar o
que já foi aprovado.
