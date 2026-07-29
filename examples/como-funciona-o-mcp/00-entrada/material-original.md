<!--
EXEMPLO ILUSTRATIVO. Empresa, produto e pessoas fictícios, criados apenas
para demonstrar o pipeline de METODOLOGIA.md de ponta a ponta. Preservado
sem edição, como toda entrada em 00-entrada/.
-->

nota de reuniao terça - anotado as pressas por mim (junior, dev backend)

pauta: o pessoal do produto perguntou pq a gente ta gastando tempo
integrando cada IA com um jeito diferente de chamar ferramenta. eu expliquei
meio corrido sobre MCP (Model Context Protocol) que é o protocolo que a
Anthropic lançou pra padronizar isso

tipo assim: hoje cada agente de IA que a gente cria (o "Nimbus Copilot", que
é nosso assistente interno pra dev) tem que ter um adaptador especifico pra
cada ferramenta - jira, banco de dados, sistema de arquivo, api interna. cada
integração é um codigo diferente, cada modelo tem um jeito de "tool calling"
diferente

MCP resolve isso definindo um protocolo comum - cliente MCP (o app com IA,
tipo o Nimbus Copilot) fala com servidor MCP (que expoe ferramentas, dados,
prompts) usando JSON-RPC. dá pra rodar o servidor local (stdio) ou remoto
(http/sse). tem 3 primitivas principais que o servidor expõe:

- tools: funcao que o modelo pode chamar (ex: "buscar_ticket_jira")
- resources: dado que o modelo pode ler (ex: arquivo de log, doc)
- prompts: template de prompt reutilizavel que o servidor sugere

e o cliente (nosso Nimbus Copilot) decide quando chamar isso, com aprovação
do usuario dependendo da acao (ex: rodar query destrutiva no banco pede
confirmacao)

analogia que usei na reuniao e todo mundo entendeu: "MCP é tipo um USB-C pra
IA" - antes cada ferramenta tinha um cabo diferente (integração custom), com
MCP qualquer cliente MCP conecta em qualquer servidor MCP sem reescrever
código

o time perguntou "isso é só pra Claude?" e eu falei que não, é um protocolo
aberto, especificação publica, qualquer empresa pode implementar servidor ou
cliente. hoje já tem servidor MCP pronto pra github, slack, postgres, etc

perguntaram tb sobre seguranca - eu falei que cliente decide o que expor e
que tem escopo de permissao, mas falei meio por cima, preciso confirmar
direito isso depois com o time de infra

ideia: dava pra fazer um post no blog explicando MCP pro time de dev e
tambem pra quem acompanha o blog da empresa (bastante gente de plataforma /
devtools lendo a gente), focando em "por que isso importa pra quem constrói
IA hoje" e usando o caso do Nimbus Copilot como exemplo pratico

rascunho de titulo que falei na hora: "Como funciona o MCP (e por que ele
virou o padrão de integração de IA)"
