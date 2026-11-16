---
name: inboundfy-extrair-faq
description: "Extrai faq.md de um item do acervo, com perguntas numeradas por tema, respostas localizadas no bruto e no processado, estado de cada resposta e lacunas para pesquisa. Use quando a pessoa pedir FAQ, perguntas e respostas, dúvidas do material ou o mapa do que a transcrição responde e do que falta confirmar."
---

# Extrair FAQ do acervo

Esta skill transforma o bruto e o processado em uma base de perguntas para
pesquisa, planejamento, produção e atendimento. Ela não redige a peça final
nem substitui a base editorial.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de criar ou alterar artefatos. Se faltar um deles, informe: "O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio." Encerre sem escrever. Após a confirmação, leia as fontes locais relevantes e `.inboundfy/context/empresa.md`.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Leia
[REFERENCIA.md](REFERENCIA.md), `bruto.md`, `processado.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e as regras de
`.inboundfy/framework/`.

## Entrada esperada

O ID de um item do acervo com `bruto.md` e `processado.md` na mesma pasta,
entregue por `inboundfy-processar-acervo` depois do registro A1 em
`auditorias/anti-slop/01-processado.md`. Aceite retomada de um `faq.md` já
existente, mantendo perguntas confirmadas e ampliando somente os trechos ainda
não cobertos.

## Fluxo

Antes de percorrer as unidades de sentido, leia a tabela de estados e a extração por unidade de [REFERENCIA.md](REFERENCIA.md).

1. Leia cada parágrafo do bruto e do processado sem usar memória externa como
   resposta.
2. Extraia perguntas sobre fato, pessoa, empresa, produto, serviço, lugar,
   definição, causa, mecanismo, condição, consequência, exemplo, comparação,
   intenção, público, objeção, oferta, CTA, data, número, fonte e lacuna.
3. Numere as perguntas (Q01, Q02) e registre resposta, origem por parágrafo ou
   marca temporal, estado (`respondida`, `parcial`, `conflitante` ou
   `pendente`) e observação.
4. Preserve perguntas repetidas quando elas cobrem ângulos diferentes; una
   apenas duplicações exatas.
5. Consulte `.inboundfy/context/glossario.md` para nomes e grafias. Não transforme
   uma pergunta em fato sem origem no material ou na pesquisa registrada.
6. Escreva `faq.md` no template de [REFERENCIA.md](REFERENCIA.md), com uma
   seção por tema e a tabela final de lacunas.
7. Na tabela de lacunas, aponte as verificáveis fora do projeto para
   `inboundfy-pesquisa-acervo` e as internas para o responsável pelo material.

Antes da entrega, acione `inboundfy-copy-editor` sobre a prosa produzida, trate os achados e releia o derivado inteiro. O original recebido permanece intacto.

## Saída

`faq.md` na pasta do item, no template de [REFERENCIA.md](REFERENCIA.md):
perguntas numeradas por tema, cada uma com resposta, origem, estado e
observação, e a tabela `Lacunas para a próxima etapa`. O README do acervo
continua apontando para `faq.md`. O arquivo segue para
`inboundfy-pesquisa-acervo` e, depois, para `inboundfy-base-editorial`.

## Validação

Confira a checklist numerada de [REFERENCIA.md](REFERENCIA.md) e as grafias
contra o glossário. Número, fonte, depoimento ou intenção ausente do material
fica como pergunta pendente.

## Responsabilidade do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

## Idempotência

Recalcule a FAQ a partir do bruto e do processado. Preserve perguntas
confirmadas quando uma nova rodada apenas ampliar a cobertura. Ao mudar uma
resposta, mantenha a origem e registre a alteração no próprio arquivo.
