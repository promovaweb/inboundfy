# Base editorial com afirmações rastreáveis

A base guarda o que o material permite dizer, para quem isso serve e quais perguntas continuam abertas. Ela fornece matéria-prima para vários usos sem escrever uma peça pública.

## Diagnóstico e escolha do recorte

Antes de resumir, pergunte: qual mecanismo o material demonstra? Que afirmação depende de data? Qual consequência aparece de fato? O relato representa um caso ou uma população?

| Situação na origem | Tratamento na base | Encaminhamento |
| --- | --- | --- |
| Relato de um atendimento | Descrever o caso com suas condições | Não extrapolar para todos os clientes |
| Número sem período | Registrar número e lacuna | Perguntar período e denominador |
| Fonte externa descreve recurso | Atribuir à organização consultada | Não atribuir uso ao cliente |
| Opinião do autor | Preservar como interpretação | Solicitar comprovação antes de transformar em promessa |

## Método de montagem

1. Leia bruto, processado, FAQ e pesquisa. Identifique os trechos por seção ou marca temporal.
2. Numere as afirmações F01, F02. Registre origem, condição e limite de uso.
3. Escreva um resumo de 80 a 150 palavras como faixa de trabalho, sem completar lacunas para atingir tamanho.
4. Extraia o mecanismo em causa, operação e consequência. Separe consequência observada de benefício possível.
5. Relacione cada objeção a uma pergunta da FAQ. Uma resposta parcial mantém essa condição.
6. Compare IDs relacionados: qual dúvida este item resolve que os demais deixam aberta?
7. Registre hipóteses de uso sem eleger canal ou campanha. Aplique A2 e devolva à chamadora.

## Template de base-editorial.md

```markdown
---
id: "<quatro algarismos>"
estado: rascunho
entrada: [bruto.md, processado.md, faq.md, pesquisa.md]
personas: [<id existente>]
---
# <Núcleo do assunto>

## Resumo factual
<Objeto, operação, condição e consequência localizada.>

## Afirmações disponíveis
| ID | Afirmação | Origem | Condição | Limite de uso |
| --- | --- | --- | --- | --- |
| F01 | <fato> | <arquivo e seção> | <condição> | <alcance> |

## Mecanismo e exemplos
<Causa, operação observada e consequência.>

## Perguntas e objeções
<Pergunta da FAQ, resposta disponível e lacuna.>

## Hipóteses de uso
<Recorte, público compatível e fatos necessários.>

## Relações
<ID relacionado e diferença entre as abordagens.>

## Pendências e próxima ação
<Pergunta, responsável e arquivo a atualizar.>
```

## Exemplo trabalhado: oficina fictícia Pinhão Bicicletas

**Entrada:** processado relata: “Na terça-feira, seis clientes receberam pelo WhatsApp um aviso de revisão. Quatro responderam. Ainda não conferimos quais respostas viraram visitas.” A FAQ pergunta sobre visitas e marca a resposta como pendente. A pesquisa não fornece dados da oficina.

**Antes:** “O WhatsApp aumenta o movimento da oficina.” O enunciado mistura resposta com visita e transforma uma observação em promessa.

**Base entregue:**

```markdown
---
id: "0042"
estado: revisao
entrada: [bruto.md, processado.md, faq.md, pesquisa.md]
personas: [persona-01]
---
# Resposta ao aviso de revisão da bicicleta

## Resumo factual
A Pinhão Bicicletas enviou seis avisos de revisão pelo WhatsApp numa terça-feira. Quatro destinatários responderam. O relato permite explicar o envio e o retorno da conversa, mas não permite afirmar que houve visitas ou vendas. A ligação entre resposta e comparecimento precisa ser conferida na agenda antes de produzir uma alegação comercial.

## Afirmações disponíveis
| ID | Afirmação | Origem | Condição | Limite de uso |
| --- | --- | --- | --- | --- |
| F01 | Seis avisos enviados | processado.md, parágrafo 1 | Uma terça-feira | Não representa volume semanal |
| F02 | Quatro respostas | processado.md, parágrafo 1 | Mesmo envio | Não representa visitas |

## Mecanismo e exemplos
O aviso retoma a conversa sobre a revisão. A resposta abre espaço para consultar disponibilidade na agenda. O relato ainda não registra essa etapa posterior.

## Perguntas e objeções
Q03: quantos clientes compareceram? PENDENTE. Conferir a agenda com a responsável da oficina.

## Hipóteses de uso
Explicar como registrar envio, resposta e visita em campos separados. Usar F01 e F02 como caso único, sem promessa de conversão.

## Relações
Nenhum ID relacionado foi encontrado no índice consultado.

## Pendências e próxima ação
Confirmar datas e visitas. Encaminhar a base para inboundfy-acervo após A2.
```

## Checklist de entrega

1. Cada afirmação possui origem e alcance.
2. Número conserva período, unidade e denominador quando disponíveis.
3. Citação literal permanece distinta de paráfrase.
4. Persona citada existe no contexto.
5. Hipótese não aparece no resumo como fato.
6. Links para os quatro insumos funcionam.
7. A2 registra a leitura integral e as pendências.

## Erros comuns

- Tratar quatro respostas como quatro compras. Nomeie a etapa efetivamente observada.
- Importar preço de outra base editorial. Consulte a oferta vigente.
- Escrever a peça durante a extração. Guarde os argumentos e devolva o recorte ao planejamento.
- Remover ressalva para obter frase forte. Preserve a condição junto da frase.

## Arquitetura aplicada

No preflight, leia [fontes](../_shared/01-preflight-e-fontes.md). Ao montar a base, aplique [artefato](../_shared/02-contrato-de-artefato.md) e [contexto editorial](../_shared/05-contexto-editorial.md). No retorno, use [handoff](../_shared/03-interacao-e-handoff.md) e [retomada](../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

A base devolve resumo, afirmações numeradas, relações e lacunas para a chamadora. Não assume canal. Use `ESCRITA.md`, `CONTEXTO.md` e o marco A2 de `inboundfy-anti-slop` para conferir atribuição e escrita.
