<!-- EXEMPLO ILUSTRATIVO — ver README.md do pacote. -->

# Base limpa — nota de reunião sobre MCP

Contexto: reunião de terça-feira. Pauta levantada pelo time de produto —
por que a equipe gasta tempo integrando cada IA com um jeito diferente de
chamar ferramenta. Um dev backend (júnior) explicou o MCP (Model Context
Protocol).

## O problema atual

Hoje, cada agente de IA construído internamente (o "Nimbus Copilot",
assistente interno de desenvolvimento) precisa de um adaptador específico
para cada ferramenta — Jira, banco de dados, sistema de arquivos, API
interna. Cada integração é um código diferente; cada modelo tem um jeito
próprio de fazer "tool calling".

## O que o MCP resolve

O MCP define um protocolo comum: um cliente MCP (o aplicativo com IA, como o
Nimbus Copilot) conversa com um servidor MCP (que expõe ferramentas, dados e
prompts) usando JSON-RPC. O servidor pode rodar local (stdio) ou remoto
(HTTP/SSE).

O servidor expõe três primitivas principais:

- **Tools**: função que o modelo pode chamar (ex.: "buscar_ticket_jira").
- **Resources**: dado que o modelo pode ler (ex.: arquivo de log, documento).
- **Prompts**: template de prompt reutilizável que o servidor sugere.

O cliente (o Nimbus Copilot, no exemplo interno) decide quando chamar cada
recurso, com aprovação do usuário dependendo da ação — por exemplo, rodar
uma query destrutiva no banco pede confirmação.

## Analogia usada na reunião

"MCP é tipo um USB-C para IA": antes, cada ferramenta tinha um cabo
diferente (integração custom); com MCP, qualquer cliente MCP conecta em
qualquer servidor MCP sem reescrever código.

## Perguntas do time

- **"Isso é só para Claude?"** Não — é um protocolo aberto, com
  especificação pública; qualquer empresa pode implementar servidor ou
  cliente. Já existem servidores MCP prontos para GitHub, Slack, Postgres,
  entre outros.
- **Sobre segurança**: o dev respondeu de forma superficial — disse que o
  cliente decide o que expor e que existe escopo de permissão, mas marcou
  como pendência confirmar isso com o time de infraestrutura antes de
  publicar qualquer afirmação técnica sobre segurança.

## Ideia de conteúdo levantada na reunião

Fazer um post de blog explicando o MCP para o time de dev e para quem
acompanha o blog da empresa (público de plataforma/devtools), focando em
"por que isso importa para quem constrói IA hoje" e usando o caso do Nimbus
Copilot como exemplo prático.

Rascunho de título mencionado na reunião: "Como funciona o MCP (e por que
ele virou o padrão de integração de IA)".
