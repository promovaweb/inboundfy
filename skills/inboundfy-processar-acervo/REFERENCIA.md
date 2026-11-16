# Processamento fiel do material recebido

O processado remove problemas de transcrição e cópia. Ele conserva números, ressalvas, sequência de ideias e autoria. Uma frase feia, mas informativa, precisa de cuidado maior que uma repetição acidental.

## Diagnóstico e tratamento

Pergunte se existe gravação, se o texto foi copiado de uma página e quais grafias o projeto já confirmou. Marque referências por parágrafo ou tempo para permitir comparação posterior.

| Tipo de trecho | Tratamento permitido | Conferência |
| --- | --- | --- |
| Palavra repetida por reconhecimento de fala | Remover repetição acidental | Compare com áudio quando disponível |
| Retificação do autor | Preservar a informação corrigida e registrar a troca | Não somar valor antigo e novo |
| Nome técnico mal transcrito | Aplicar grafia confirmada no glossário | Sem confirmação, manter pergunta |
| Hesitação que expressa incerteza | Preservar a incerteza | Não converter “talvez” em certeza |
| Propaganda sem dado concreto | Sinalizar para A1 | Não fabricar detalhe para preencher |
| Número sem unidade | Preservar e marcar unidade pendente | Não presumir R$, minutos ou percentual |

## Procedimento linha a linha

1. Leia bruto e documentos de limpeza do framework. Registre o arquivo e seu estado inicial sem editá-lo.
2. Divida o material em unidades de sentido. Mantenha marcas temporais úteis e referências aos parágrafos.
3. Faça uma primeira passagem só para caracteres quebrados, marcas de cópia e repetições mecânicas.
4. Faça a passagem de grafia. Use `context/glossario.md`; não crie um arquivo de dicionário paralelo.
5. Compare nomes, datas, valores e negações. Se o original disser “não”, a versão limpa também precisa preservar a restrição.
6. Escreva o processado sem reorganizar a tese nem dar voz comercial a um relato de origem.
7. Registre mudanças e lacunas no mesmo derivado ou no relatório já previsto pelo pacote. Execute A1. Encaminhe para FAQ somente após registrar o resultado.

## Template de processado.md

```markdown
---
id: "<id do acervo>"
entrada: bruto.md
estado: revisao
---
# <Título descritivo>

## Texto processado
<Texto limpo na ordem da origem.>

## Alterações registradas
| Origem | Forma recebida | Forma aplicada | Motivo e fonte |
| --- | --- | --- | --- |
| <parágrafo ou tempo> | <trecho> | <trecho> | <regra de limpeza> |

## Lacunas
- <Trecho e pergunta factual ou nenhuma.>

## Encaminhamento
<A1 e caminho da FAQ a preencher.>
```

## Exemplo completo: oficina fictícia Pinhão Bicicletas

Bruto, parágrafo 1, recebido sem qualquer alteração:

> É, a gente mandou mandou seis avisos no whats ap na terça. Quatro responderam. Não sei ainda se vieram. A revisão é cento e vinte, não, cento e trinta foi a peça, a revisão continua cento e vinte.

Processado entregue:

```markdown
---
id: "0042"
entrada: bruto.md
estado: revisao
---
# Avisos de revisão na terça-feira

## Texto processado
A equipe enviou seis avisos pelo WhatsApp na terça-feira. Quatro destinatários responderam. O relato ainda não confirma se compareceram à oficina. A revisão custa R$ 120. O valor de R$ 130 citado durante a fala se refere a uma peça.

## Alterações registradas
| Origem | Forma recebida | Forma aplicada | Motivo e fonte |
| --- | --- | --- | --- |
| parágrafo 1 | mandou mandou | enviou | Repetição mecânica |
| parágrafo 1 | whats ap | WhatsApp | Grafia de context/glossario.md |
| parágrafo 1 | cento e trinta foi a peça | R$ 130 se refere a uma peça | Autocorreção preservada |

## Lacunas
- Qual terça-feira? Solicitar data.
- Quais destinatários compareceram? Conferir agenda.

## Encaminhamento
Executar A1 em auditorias/anti-slop/01-processado.md. Entregar a bruto.md e esta versão para inboundfy-extrair-faq.
```

O preço permanece como relato histórico, sujeito à conferência de oferta antes de publicação. A limpeza não transforma esse valor em condição comercial vigente.

## Checklist numerado

1. Bruto permanece intacto.
2. Nenhum número, nome ou ressalva desapareceu sem registro.
3. Ordem de ideias permanece reconhecível.
4. Correções técnicas possuem fonte de grafia.
5. Incerteza continua explícita.
6. Alterações semânticas não foram disfarçadas como formatação.
7. A1 compara bruto e processado.
8. FAQ recebe os dois arquivos com o mesmo ID.

## Erros comuns

- Usar o preço atual para corrigir uma fala antiga. Preserve a fala e marque a atualização necessária.
- Remover “não sei” e afirmar comparecimento. Registre a lacuna.
- Unir repetições que expressam ênfase autoral. Remova apenas a duplicação mecânica.
- Corrigir o bruto junto do derivado. O original não recebe edição.

## Arquitetura aplicada

Leia [fontes](../_shared/01-preflight-e-fontes.md) antes da comparação. Aplique [artefato](../_shared/02-contrato-de-artefato.md) e [contexto](../_shared/05-contexto-editorial.md) na versão limpa. Use [handoff](../_shared/03-interacao-e-handoff.md) para FAQ e [retomada](../_shared/04-validacao-e-retomada.md) para novo ciclo.

## Guia específico do grupo

Esta capacidade transforma uma origem imutável num derivado rastreável. Consulte `LIMPEZA-MATERIAL-BRUTO.md`, `TRADUCAO.md` e A1 de `inboundfy-anti-slop/ETAPAS.md` antes de processar. A FAQ pertence a `inboundfy-extrair-faq`.
