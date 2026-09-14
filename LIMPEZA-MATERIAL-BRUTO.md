# LIMPEZA-MATERIAL-BRUTO.md — Regras de Saneamento

Este arquivo define como limpar material bruto — texto colado, transcrição
de áudio/vídeo, nota solta, print transcrito manualmente — na fase 1 do
pipeline (`inboundfy-planejamento-01-saneamento`, ver `METODOLOGIA.md`).
Limpar não é reescrever: o objetivo aqui é remover ruído e corrigir erro
mecânico, preservando exatamente o que foi dito e a ordem em que foi dito.
Voz editorial, estrutura de peça final e persuasão vêm depois, nas fases de
briefing e produção — nunca durante o saneamento.

## Regra central

`00-entrada/material-original.md` nunca é editado. `01-saneamento/
base-limpa.md` é a primeira e única versão alterada, e toda alteração
precisa ser explicável em `01-saneamento/relatorio-saneamento.md`. Se uma
mudança não pode ser justificada como remoção de ruído ou correção de erro
mecânico, ela pertence à fase de produção, não ao saneamento.

## O que é permitido corrigir

- **Erro de transcrição por semelhança sonora** — nome próprio, sigla ou
  termo técnico transcrito errado por reconhecimento de fala, quando o
  contexto deixa claro qual era o termo real (ver `TRADUCAO.md` para a
  lógica de correção canônica).
- **Pontuação ausente ou errada** — transcrição bruta costuma vir sem
  vírgula, ponto ou parágrafo; restaurar pontuação que reflete a pausa e a
  intenção real da fala é saneamento, não reescrita.
- **Ruído de gravação transcrito literalmente** — "é", "tipo", "né", "ahn"
  em excesso quando não carregam função na frase. Remova com critério: se a
  hesitação for parte de uma citação que será usada como evidência de fala
  espontânea, preserve-a e sinalize essa decisão no relatório.
- **Quebra de linha e formatação de colagem** — texto colado de PDF, e-mail
  ou chat frequentemente traz quebra de linha no meio de frase, espaço
  duplicado ou caractere de encoding quebrado. Corrija sem alterar palavra.
- **Identificação de falante** — em transcrição com múltiplos falantes,
  normalize a marcação (`Falante 1:`, `Falante 2:`, ou nome quando
  identificável) de forma consistente do início ao fim.
- **Numeração e ordem** — se o material bruto veio fragmentado ou fora de
  ordem (ex.: páginas de PDF embaralhadas), reorganize na ordem lógica
  original, registrando o que foi reordenado.

## O que nunca é permitido fazer no saneamento

- Resumir, condensar ou remover trecho por julgar irrelevante — julgamento
  editorial de relevância é da fase de pesquisa/planejamento
  (`inboundfy-planejamento-02-pesquisa`), não do saneamento.
- Reescrever frase com vocabulário diferente do que foi dito, mesmo que a
  reescrita pareça "mais clara" — isso já é redação, não limpeza.
- Aplicar `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` ou a voz de
  `context/marca-voz.md` — esses critérios valem para peça final, não para
  a base limpa, que ainda é documento de evidência.
- Remover contradição, hesitação ou opinião do falante original só porque
  parece "menos profissional" — isso distorce a fonte.
- Inventar pontuação, nome ou palavra quando o áudio/texto original for
  genuinamente incompreensível — nesse caso, marque `[inaudível]` ou
  `[trecho impreciso]` e registre como pendência.

## Fluxo por tipo de material

### Transcrição de áudio/vídeo

1. Preserve a sequência exata de falas e a identificação de falante.
2. Corrija erro de reconhecimento de fala usando `TRADUCAO.md` como guia de
   termos técnicos e nomes próprios conhecidos.
3. Restaure pontuação a partir da pausa e entonação implícitas no texto.
4. Marque trechos inaudíveis ou incertos explicitamente, sem adivinhar.
5. Preserve timestamp quando o material bruto já os tiver.

### Texto colado (e-mail, chat, documento, print transcrito)

1. Corrija apenas artefato de formatação (quebra de linha quebrada, espaço
   duplicado, caractere de encoding corrompido).
2. Preserve emoji, gíria ou informalidade do material original — isso é
   dado sobre o tom real da fonte, útil para a fase de pesquisa.
3. Se o material vier fragmentado ou fora de ordem, reorganize e registre a
   reordenação no relatório.

### Nota solta ou rascunho de ideia

1. Preserve a ideia central exatamente como anotada, mesmo incompleta.
2. Não complete lacuna de raciocínio do autor original — sinalize a lacuna
   para a fase de pesquisa decidir se vale desenvolver.

## Template de `relatorio-saneamento.md`

```markdown
# Relatório de Saneamento — <pacote>

## Correções aplicadas

- <trecho original> → <trecho corrigido> — motivo: <erro de transcrição |
  pontuação | formatação | reordenação>

## Trechos marcados como pendentes

- <trecho> — motivo: <inaudível | termo não identificado | contradição
  preservada intencionalmente>

## O que foi preservado apesar de parecer "não profissional"

- <trecho> — motivo: <evidência de fala espontânea, opinião original,
  contradição real do falante>
```

## Erros comuns

- Confundir remoção de hesitação de fala com remoção de opinião ou
  nuance — a primeira é limpeza, a segunda é distorção.
- Aplicar voz de marca ou estrutura persuasiva "só um pouco" durante o
  saneamento porque "já que estou editando mesmo" — não; isso pertence à
  fase de produção.
- Corrigir termo técnico sem confirmar no contexto, criando erro novo (ver
  seção de termos pendentes em `TRADUCAO.md`).
- Não registrar uma correção no relatório, tornando a mudança
  inauditável — toda correção precisa ficar rastreável.
