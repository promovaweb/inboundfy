# Binário, painel e MCP

O binário `inboundfy` instala o framework e mantém os índices do projeto. As
skills chamam o binário pelo CLI ou pelas tools MCP; as duas formas usam as
mesmas funções, as mesmas travas e os mesmos códigos de saída.

## Conferir o binário

1. Rode `inboundfy --version`. A versão precisa ser a mesma de
   `.inboundfy/framework/VERSAO.md` depois da instalação.
2. Sem o binário, oriente a pessoa a instalar por uma destas formas e
   aguarde a confirmação:

   | Forma | Comando |
   | --- | --- |
   | npm | `npm install -g @promovaweb/inboundfy` |
   | uso pontual | `npx @promovaweb/inboundfy@latest <command>` |
   | executável | baixar `inboundfy-<plataforma>` na GitHub Release e conferir o `SHA256SUMS` |

3. Versão do projeto mais antiga que a do binário: rode
   `inboundfy update --dry-run`, mostre o plano e aplique com
   `inboundfy update --yes`.

## Ligar o MCP ao agente

Ofereça a configuração no fim do setup. Com o MCP ativo, as skills leem e
gravam acervo, peças e calendário sem montar linhas de comando.

| Agente | Configuração |
| --- | --- |
| Claude Code | `claude mcp add inboundfy -- inboundfy mcp` |
| Codex | `[mcp_servers.inboundfy]` com `command = "inboundfy"` e `args = ["mcp"]` em `~/.codex/config.toml` |
| OpenCode | servidor local com `command: ["inboundfy", "mcp"]` em `opencode.json` |

O servidor usa a pasta onde o agente roda. Para outro projeto, defina
`INBOUNDFY_PROJECT` no ambiente do servidor ou passe `project` na tool.
Registre em `context/integracoes.md` que o MCP do Inboundfy está ativo e em
qual agente. Confirme com a tool `project_doctor` ou com
`inboundfy mcp --list`.

## Equivalência entre CLI e tools

| Operação | CLI | Tool MCP |
| --- | --- | --- |
| números do projeto | `inboundfy stats --json` | `project_stats` |
| diagnóstico | `inboundfy doctor --json` | `project_doctor` |
| contexto mínimo | `inboundfy context check --json` | `context_check` |
| fontes locais | `inboundfy context scan` | `context_scan` |
| registrar material | `inboundfy archive add "<título>" --file <arquivo>` | `archive_add` |
| processar material | `inboundfy archive process <id>` | `archive_process` |
| andamento do item | `inboundfy archive show <id> --json` | `archive_show` |
| criar peça | `inboundfy content create <canal> "<título>" --persona <id> --archive <id>` | `content_create` |
| mover peça | `inboundfy content status <id> <estado>` | `content_set_status` |
| hash da peça | `inboundfy content digest <id>` | `content_digest` |
| agendar | `inboundfy calendar add <data> <id>` | `calendar_add` |
| agenda | `inboundfy calendar list <AAAA-MM> --json` | `calendar_list` |

## Códigos de saída

| Código | Nome | Resposta da skill |
| --- | --- | --- |
| 2 | `USAGE` | corrigir argumento ou option e repetir |
| 6 | `NOT_FOUND` | conferir o ID com `archive list` ou `content list` |
| 10 | `NOT_INSTALLED` | voltar ao setup |
| 11 | `INTEGRITY` | ler os itens com ✗ do `doctor` ou do `context check` |
| 12 | `CONFLICT` | ler a mensagem: trava, transição, canal fora da estratégia ou aprovação divergente |

A pessoa acompanha o projeto pelo painel da TUI (`inboundfy`, sem
argumentos). O painel só lê; ele reflete na hora o que as skills gravam.
