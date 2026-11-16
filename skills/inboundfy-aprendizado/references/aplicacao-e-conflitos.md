# Aplicação, leitura futura e conflitos

Leia nos passos 6 a 10 do fluxo.

## Ciclo de estados do registro

| Estado | Significa | Pode ser aplicado em trabalho novo? |
| --- | --- | --- |
| `proposta` | Registrado, alcance ainda não confirmado | não |
| `confirmada` | Alcance confirmado pelo usuário | sim |
| `aplicada` | Confirmada e já levada à peça ou ao arquivo canônico | sim |
| `arquivada` | Substituída ou retirada pelo usuário | não |

Uma `proposta` sem resposta por mais de duas sessões entra no relatório final
como pendência. Não aplique por omissão do usuário.

## Leitura antes de cada produção

Toda skill que produz ou valida texto filtra `aprendizado.md` assim:

1. somente registros `confirmada` ou `aplicada`;
2. alcance `projeto`, mais `canal` igual ao canal da peça, mais `persona`
   presente nas personas da peça, mais `peça` cujo arquivo relacionado é o
   arquivo atual;
3. em caso de conflito, o alcance mais específico vence dentro do seu
   território (`peça` > `persona` > `canal` > `projeto`);
4. entre dois registros do mesmo alcance, o mais novo vence, desde que o
   antigo tenha sido arquivado. Se os dois continuam ativos, pare e pergunte.

A produção lista os IDs aplicados na seção `## Escolhas` da peça.

## Substituição de regra

Quando o usuário muda de ideia:

1. Crie novo registro com novo ID e a mensagem nova.
2. Na **Interpretação** do novo, escreva `Substitui AP-0000.`
3. Mude o antigo para `arquivada` e acrescente na **Validação seguinte**:
   `Substituído por AP-0000 em AAAA-MM-DD.`
4. Se o antigo tinha alterado um arquivo canônico, ajuste o arquivo canônico
   para a regra nova e cite os dois IDs.
5. Nunca apague o registro antigo. Ele explica por que peças anteriores usam
   a forma antiga.

## Efeito em peças existentes

| Estado da peça afetada | O que fazer |
| --- | --- |
| `rascunho` | Aplicar direto. |
| `revisao` | Aplicar e avisar a validadora; a rodada atual recomeça. |
| `aprovado` ou `agendado` | Perguntar se a regra vale para ela. Se sim, voltar para `revisao` pelo `inboundfy-pipeline`, porque o hash muda. |
| `publicado` | Não alterar sem pedido. Listar as peças afetadas para o usuário escolher. |

Regra de alcance `projeto` não reescreve o passado sozinha. Ela vale para
trabalho novo; o retroativo depende de pedido.

## Conflito com regra canônica

Se a orientação contraria `marca-voz.md`, `glossario.md` ou `proibicoes.md`:

1. aplique na peça atual se o usuário pediu para a peça;
2. registre o conflito na **Interpretação**;
3. pergunte se o arquivo canônico deve mudar;
4. sem resposta, o arquivo canônico vence nas próximas peças, conforme a
   precedência de `CONTEXTO.md`.
