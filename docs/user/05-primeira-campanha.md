# Primeira campanha

Use a sequência estratégica quando ainda for necessário decidir objetivo,
público, KPI, canais, fases e calendário.

## Passo a passo

1. `thothfy-estrategia-00-briefing-cliente` registra objetivo de negócio,
   público, oferta, orçamento, prazo, restrições e indicadores.
2. `thothfy-estrategia-01-pesquisa-mercado` reúne evidências de mercado,
   categoria, concorrência e comportamento.
3. `thothfy-estrategia-02-campanha` transforma briefing e pesquisa em tese,
   fases, mensagens, mix de canais e volume de peças.
4. `thothfy-estrategia-03-calendario` distribui campanha e cadência orgânica
   no tempo, com dependências e responsáveis.
5. Cada item aprovado do calendário entra no planejamento editorial ou numa
   especialista, conforme sua complexidade.

As fases estratégicas não escrevem copy final. Elas produzem decisões e briefs
que orientam a execução. Quando a campanha já tiver todos esses elementos
confirmados, retome a fase correspondente em vez de reiniciar o kickoff.

Veja os campos e condições de passagem em
[ESTRATEGIA.md](../../ESTRATEGIA.md).

## O que informar no kickoff

Prepare o objetivo de negócio, o público, a oferta, o período, o orçamento, as
restrições e a forma de medir resultado. Quando um item ainda for desconhecido,
registre a pendência em vez de usar um valor plausível.

## Artefatos esperados

| Fase | Arquivo |
| --- | --- |
| `00` | `<campanha>/00-briefing/brief-cliente.md` |
| `01` | `<campanha>/00-briefing/pesquisa-mercado.md` |
| `02` | `<campanha>/01-plano/plano-de-campanha.md` |
| `03` | `calendario/<periodo>.md` |

O plano descreve as fases, as mensagens, os canais e o volume aproximado. O
calendário transforma essas decisões em itens que podem entrar no pipeline.

## Como conferir

Verifique se cada item do calendário aponta para uma campanha, um objetivo e
um próximo fluxo. Um item sem material suficiente segue para planejamento.
Uma peça simples, com brief completo, pode seguir diretamente para a
especialista do canal.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | planejamento de campanha e calendário |
| Autoridade | `ESTRATEGIA.md` e skills `thothfy-estrategia-*` |
