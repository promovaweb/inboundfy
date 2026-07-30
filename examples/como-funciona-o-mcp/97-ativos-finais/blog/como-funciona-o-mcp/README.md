---
title: "Como funciona o MCP (e por que ele virou o padrão de integração de IA)"
description: "Entenda o MCP (Model Context Protocol) na prática: o que ele resolve, como cliente e servidor se conectam e o que muda para quem constrói agentes de IA."
slug: como-funciona-o-mcp
brief: 04-briefs/blog-como-funciona-o-mcp.md
---

<!-- markdownlint-disable MD025 -->
<!-- EXEMPLO ILUSTRATIVO — ver README.md do pacote e do repositório de exemplos. -->

# Como funciona o MCP (e por que ele virou o padrão de integração de IA)

Toda vez que a gente conectou o Nimbus Copilot, nosso assistente interno de
desenvolvimento, a uma ferramenta nova, o trabalho se repetia: um adaptador
próprio para o Jira, outro para o banco de dados, outro para o sistema de
arquivos, outro ainda para cada API interna. Cada modelo de IA que testamos
tinha, além disso, seu próprio jeito de descrever e chamar uma função — o
que significava reescrever a mesma integração de novo cada vez que trocávamos
de fornecedor. É esse problema, chamado de N×M — N ferramentas vezes M
modelos, cada combinação com seu próprio código — que o MCP existe para
resolver.

MCP significa Model Context Protocol, um protocolo aberto criado para
padronizar a comunicação entre um cliente de IA e as ferramentas, dados e
prompts que ele precisa usar. Em vez de cada par cliente-ferramenta inventar
seu próprio contrato, os dois lados falam a mesma língua: o cliente MCP (no
nosso caso, o Nimbus Copilot) conversa com um servidor MCP usando JSON-RPC,
independente de qual modelo de IA está por trás do cliente e de qual sistema
está por trás do servidor.

## O que o servidor expõe

Um servidor MCP pode rodar localmente, via stdio, ou remotamente, via
HTTP/SSE — a escolha depende de onde a ferramenta que ele representa vive.
O que ele expõe ao cliente se divide em três tipos:

- **Tools**: uma função que o modelo pode chamar, como `buscar_ticket_jira`.
  É o equivalente ao que hoje é feito com "tool calling" proprietário de
  cada modelo, só que descrito de um jeito que qualquer cliente MCP
  entende.
- **Resources**: um dado que o modelo pode ler, como um arquivo de log ou
  um documento interno, sem precisar que o cliente implemente um parser
  específico para aquele formato.
- **Prompts**: um template de prompt reutilizável que o próprio servidor
  sugere — útil quando quem mantém a ferramenta sabe melhor do que quem
  constrói o cliente qual é o jeito certo de pedir aquela informação.

No caso do Nimbus Copilot, isso significa que o servidor MCP do Jira expõe a
tool de busca de ticket, o servidor MCP de arquivos expõe os logs como
resource, e o cliente decide, a partir do que o usuário pediu, qual dessas
peças chamar — sem que o time precise manter um adaptador que traduza cada
uma dessas chamadas para o formato específico do modelo em uso.

## Quem decide o que acontece

O cliente MCP é quem decide quando chamar cada tool, resource ou prompt, e
essa decisão nem sempre é automática. Uma ação sensível — rodar uma query
que altera dados no banco, por exemplo — normalmente passa por confirmação
do usuário antes de ser executada; uma leitura de log, não. Essa fronteira
entre o que é automático e o que exige aprovação é decidida pelo cliente e
pela configuração de quem o implementa, não pelo protocolo em si. O modelo
exato de permissão e escopo de acesso de cada servidor é definido na
especificação pública do MCP — vale a leitura direta da documentação oficial
do protocolo antes de definir a política de aprovação de um agente que lida
com dado sensível, em vez de assumir um comportamento padrão.

## Por que não é algo específico de um fornecedor

Uma dúvida comum, que também apareceu na primeira vez que apresentamos o MCP
para o resto do time de engenharia, é se isso é algo fechado em torno de um
único fornecedor de modelo. Não é: é uma especificação aberta, e qualquer
equipe pode implementar um cliente ou um servidor MCP. Isso já rendeu
servidores prontos para ferramentas comuns — GitHub, Slack e Postgres estão
entre os exemplos mais citados no ecossistema — o que reduz o trabalho de
quem só precisa consumir uma integração já existente, em vez de escrevê-la
do zero.

A comparação que usamos internamente para explicar isso ao time de produto
foi com o USB-C: antes, cada ferramenta exigia seu próprio cabo — sua
própria integração customizada. Com um conector comum, qualquer dispositivo
que fale esse padrão conecta em qualquer outro que também fale, sem que
alguém precise fabricar um cabo novo a cada combinação.

## O limite desta explicação

O que este texto não cobre é o detalhe fino do modelo de segurança e escopo
de permissão do MCP — quem pode expor o quê, como um servidor declara o
nível de acesso de cada tool, e como isso se comporta em ambientes com
múltiplos usuários. Esse é o próximo ponto que vale aprofundar antes de
colocar um servidor MCP em produção lidando com dado sensível, e a fonte
certa para isso é a especificação oficial do protocolo, não uma suposição
de como "provavelmente" funciona.
