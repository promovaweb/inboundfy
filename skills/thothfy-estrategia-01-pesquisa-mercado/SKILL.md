---
name: thothfy-estrategia-01-pesquisa-mercado
description: >
  Segunda skill do grupo estratégico. Pesquisa ativamente mercado, tendências
  e conteúdo de concorrentes para embasar uma campanha, a partir do brief de
  thothfy-estrategia-00-briefing-cliente. Não mantém cadastro de concorrentes
  (isso é thothfy-contexto-concorrentes) — produz análise para decisão.
---

# Thothfy Estratégia — Pesquisa de Mercado

Investiga o que já existe no mercado antes de `thothfy-estrategia-02-campanha`
decidir ângulo e canal. Diferente de `thothfy-contexto-concorrentes`, que
apenas guarda o cadastro estático de um concorrente, esta skill analisa o
que o mercado está publicando agora, onde há espaço aberto e onde o
usuário chegaria atrasado.

## Escopo

Produz uma análise de mercado para uma campanha específica — não mantém
dado permanente de `context/` sozinha (aciona `thothfy-contexto-concorrentes`
quando encontra concorrente novo ou informação desatualizada) e não decide
canal nem tema final (isso é `thothfy-estrategia-02-campanha`).

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/concorrentes.md`, como ponto de partida do que já se sabe.
- `context/publico.md`, para pesquisar sob a ótica da persona prioritária,
  não de forma genérica.
- `context/ferramentas.md`, quando a pesquisa envolver comparação de stack.

## Entrada esperada

`00-briefing/brief-cliente.md` da campanha em andamento, ou um tema/mercado
indicado diretamente pelo usuário para pesquisa avulsa.

## Fluxo

1. Leia o brief da campanha e `context/concorrentes.md`.
2. Pesquise o que concorrentes diretos e indiretos estão publicando
   atualmente sobre o tema da campanha — ângulo, canal, frequência,
   engajamento aparente. Use a ficha de pesquisa de `REFERENCIA.md`.
3. Identifique lacunas: pergunta da persona que ninguém está respondendo
   bem, formato subutilizado, momento de mercado (sazonalidade, mudança de
   regra, lançamento de categoria).
4. Separe explicitamente fato observável (o que o concorrente publicou, com
   link ou referência) de interpretação (por que isso parece funcionar) —
   nunca apresente hipótese como dado confirmado.
5. Quando encontrar concorrente novo ou dado desatualizado em
   `context/concorrentes.md`, pare e acione `thothfy-contexto-concorrentes`
   antes de fechar a análise.
6. Salve a análise em `<pacote-de-campanha>/00-briefing/pesquisa-mercado.md`.

## Saída

`<pacote-de-campanha>/00-briefing/pesquisa-mercado.md`.

## Validação

- Toda observação de concorrente cita a fonte (link, data de acesso).
- Fato e interpretação estão em seções separadas, não misturados.
- Análise aponta pelo menos uma lacuna de mercado acionável, não apenas um
  resumo do que já existe.

## Idempotência

Rodar novamente sobre a mesma campanha atualiza a análise incorporando
pesquisa nova, sem descartar lacunas já identificadas e ainda válidas.
