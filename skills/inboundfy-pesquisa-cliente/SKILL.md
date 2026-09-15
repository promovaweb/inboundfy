---
name: inboundfy-pesquisa-cliente
description: Pesquisa dores, linguagem, desejos, objeções e contexto de compra para enriquecer personas, acervo, estratégia e copy de inbound marketing.
---

# Pesquisa de cliente

Use para investigar clientes, leitores, usuários, comunidades e linguagem de
mercado antes de atualizar uma persona ou escrever uma peça.

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

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/glossario.md`, o acervo e as bases editoriais relacionadas.
Consulte `.inboundfy/framework/` para as regras de pesquisa e escrita.

## Entrada esperada

Receba segmento, persona, pergunta de negócio, URLs, entrevistas,
transcrições, comentários, tickets, reviews ou dados internos. Identifique o
que é fala literal, observação, interpretação e hipótese.

## Fluxo

1. Defina a pergunta que a pesquisa precisa responder.
2. Busque fontes públicas, comunidades, páginas de produto, reviews e dados
   fornecidos pelo usuário, registrando URL, título, data e trecho relevante.
3. Agrupe linguagem recorrente, tarefas, dores, desejos, objeções, gatilhos e
   sinais de prontidão.
4. Compare o achado com a persona sem substituir a descrição confirmada por
   inferência.
5. Extraia frases literais curtas e marque sua origem. Não fabrique citação.
6. Atualize `faq.md`, `base-editorial.md`, `pesquisa.md` ou
   `personas.md` conforme o alcance aprovado.
7. Passe os termos novos pelo dicionário, pelas proibições e pela voz.

## Saída

Entregue relatório de pesquisa, mapa de linguagem, atualização de persona,
FAQ ou recomendações de mensagem com fontes e lacunas.

## Validação

Confirme separação entre fala, dado e interpretação; fontes acessíveis; data
de consulta; ausência de amostra tratada como universal e aderência à voz e
às proibições do projeto.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Não duplique achados já registrados. Atualize um item somente quando a nova
fonte acrescentar contexto, contradizer o anterior ou alterar sua validade.
