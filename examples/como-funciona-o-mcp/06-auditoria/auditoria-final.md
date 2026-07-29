<!-- EXEMPLO ILUSTRATIVO — ver README.md do pacote. -->

# Auditoria final — Como funciona o MCP (blog)

Artefato auditado: `97-ativos-finais/blog/como-funciona-o-mcp/README.md`.
Brief de origem: `04-briefs/blog-como-funciona-o-mcp.md`.

## Contra o brief

- Explica as três primitivas (tools, resources, prompts), cada uma com
  exemplo — atende ao critério de pronto.
- Usa o caso Nimbus Copilot como fio condutor do texto, não como menção
  solta — atende ao ângulo definido.
- Responde 4 dos 5 itens do FAQ candidato (o que é MCP, diferença de tool
  calling tradicional, o que são as três primitivas, se é exclusivo de um
  fornecedor); o item sobre aprovação de ações sensíveis é respondido de
  forma geral, com remissão à documentação oficial, conforme a restrição de
  não afirmar segurança sem fonte confirmada.
- Nenhuma afirmação de segurança sem ressalva — a seção "Quem decide o que
  acontece" e o fechamento "O limite desta explicação" tratam o tema
  explicitamente como não coberto em profundidade e remetem à especificação
  oficial, em vez de inventar garantia.

## Contra ESCRITA.md

- Parágrafos em prosa contínua, sem fragmentação artificial; a única lista
  (as três primitivas) corresponde a uma enumeração técnica real, não a um
  recurso decorativo.
- Abertura mostra o problema concreto (retrabalho de integração no Nimbus
  Copilot) antes de nomear o protocolo — não começa por definição abstrata.
- Fechamento aponta limite explícito do que o texto não cobre, sem frase de
  encerramento decorativa.
- Nenhum padrão de `context/estruturas-proibidas.md` identificado (arquivo
  fictício neste exemplo — em projeto real, checar contra o arquivo real do
  usuário).

## Nota por parágrafo (thothfy-base-editor)

Todos os parágrafos avaliados acima de 90%, sem violação de
`context/proibicoes.md` nem de `context/estruturas-proibidas.md` — nenhum
parágrafo precisou de reescrita nesta rodada.

## Resultado

**Aprovado.** O artigo está pronto para publicação neste exemplo. Em um
projeto real, a Oportunidade 2 (post de LinkedIn divulgando este artigo,
registrada em `03-planejamento/plano-de-oportunidades.md`) pode ser aberta
como um novo brief depois desta aprovação.
