---
name: inboundfy-pesquisa-cliente
description: Pesquisa dores, linguagem, desejos, objeções e contexto de compra para enriquecer personas, acervo, estratégia e copy de inbound marketing.
---

# Pesquisa de cliente

Use para investigar clientes, leitores, usuários, comunidades e linguagem de
mercado antes de atualizar uma persona ou escrever uma peça.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/inbound.md`,
`.inboundfy/voz.md`, `.inboundfy/personas.md`, `.inboundfy/proibicoes.md`,
`.inboundfy/dicionario.md`, o acervo e as bases editoriais relacionadas.
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

## Idempotência

Não duplique achados já registrados. Atualize um item somente quando a nova
fonte acrescentar contexto, contradizer o anterior ou alterar sua validade.
