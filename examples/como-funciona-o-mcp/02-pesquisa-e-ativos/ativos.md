<!-- EXEMPLO ILUSTRATIVO — ver README.md do pacote. -->

# Ativos extraídos — Como funciona o MCP

Fonte: `01-saneamento/base-limpa.md`.

## Teses

1. O MCP resolve o problema de integração N×M entre agentes de IA e
   ferramentas, substituindo adaptador custom por protocolo comum.
2. MCP não é exclusivo de um fornecedor de modelo — é especificação aberta,
   qualquer time pode implementar cliente ou servidor.
3. Adotar MCP hoje evita reescrever integração toda vez que a empresa troca
   ou adiciona um modelo de IA no produto.

## Exemplos e caso interno

- Caso prático: Nimbus Copilot (assistente interno de desenvolvimento)
  precisando de adaptador próprio para Jira, banco de dados, sistema de
  arquivos e API interna antes do MCP.
- Primitivas do protocolo, com exemplo de cada uma: tool (`buscar_ticket_jira`),
  resource (arquivo de log), prompt (template reutilizável sugerido pelo
  servidor).
- Transporte: servidor MCP local via stdio ou remoto via HTTP/SSE.

## Dores da persona

- Time gasta tempo de engenharia reescrevendo integração toda vez que muda
  de modelo ou adiciona uma ferramenta nova ao agente interno.
- Falta de padrão dificulta reaproveitar a mesma integração entre agentes
  diferentes da mesma empresa.

## Objeções previstas

- "Isso é específico da Anthropic/Claude, não vale a pena investir." —
  Resposta: especificação aberta, já implementada por múltiplos
  fornecedores e com servidores prontos para ferramentas comuns (GitHub,
  Slack, Postgres, citados como exemplo de ecossistema, não como
  recomendação comercial).
- "Trocar toda a integração agora não é arriscado?" — Resposta ainda não
  fechada nesta fase; depende da resposta técnica de infraestrutura sobre
  escopo de permissão (ver pendência abaixo).

## FAQ candidato

- O que é MCP, em uma frase?
- Qual a diferença entre MCP e "tool calling" tradicional de um modelo?
- O que são tools, resources e prompts no MCP?
- MCP funciona só com Claude?
- Como funciona a aprovação do usuário para ações sensíveis?

## Pendência de pesquisa (herdada do saneamento)

- Escopo de permissão e modelo de segurança do MCP: a nota original trouxe
  resposta informal e não verificada. Antes de qualquer afirmação sobre
  segurança entrar no artefato final, confirmar com fonte técnica — neste
  exemplo, a especificação pública do protocolo — e citar a fonte
  explicitamente no brief e no artigo final.

## Entidades mencionadas

- **Produto interno:** Nimbus Copilot (fictício, ver `context/produtos.md`
  do projeto real ao aplicar este exemplo).
- **Protocolo:** MCP (Model Context Protocol) — entidade central do
  conteúdo, não um produto do usuário.
- **Ferramentas citadas como exemplo de ecossistema, não como recomendação
  comercial:** GitHub, Slack, Postgres.
