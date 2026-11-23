# MCP

`{{bin}} mcp` transforma o processo em um servidor Model Context Protocol
sobre stdio. Nada mais é escrito em stdout; diagnósticos vão para stderr.

## Configuração no cliente

```json
{
  "mcpServers": {
    "{{bin}}": { "command": "{{bin}}", "args": ["mcp"] }
  }
}
```

Para o Claude Code: `claude mcp add {{bin}} -- {{bin}} mcp`.
Para desenvolvimento, sem compilar: `"command": "bun", "args": ["run", "src/main.ts", "mcp"]`.

## Tools

| Tool | Entrada | Saída |
| --- | --- | --- |
| `doctor` | nenhuma | `{ checks, ok }`; `isError: true` se houver `fail` |
| `about` | nenhuma | identity, runtime, platform, data directory e credits |
| `exit_codes` | nenhuma | tabela de exit codes |
| `skill` | `topic?` (`cli`, `tui`, `mcp`, `config`, `exit-codes`, `reference`) | documentação em Markdown |
| `config_list` | nenhuma | keys de settings.json em vigor e o schema |
| `config_get` | `key` | valor da key; `isError` quando não existe |
| `credentials_status` | nenhuma | file, master key source, count e names |

Nenhuma dessas tools devolve o valor de uma credencial nem grava.

### Tools de projeto

Todas aceitam `project?` (pasta do projeto; padrão `{{BIN}}_PROJECT` ou o
diretório do servidor). Falhas esperadas voltam com `isError: true` e
`{ error: { code, name, message } }`.

| Tool | Entrada | Efeito |
| --- | --- | --- |
| `project_stats` | `months?`, `fast?` | números do acervo, dos canais e do calendário (leitura) |
| `project_doctor` | nenhuma | diagnóstico do projeto (leitura) |
| `context_check` | nenhuma | prontidão do contexto mínimo (leitura) |
| `context_scan` | nenhuma | regrava `fontes-candidatas.json` |
| `archive_list` | `status?`, `channel?` | `{ items }` do acervo (leitura) |
| `archive_show` | `id` | item com etapas e auditorias A0 a A6 (leitura) |
| `archive_add` | `title`, `text`, `source?` | registra um item com o bruto intocado |
| `archive_process` | `id` | grava `processado.md` |
| `archive_set_status` | `id`, `status` | muda o estado do item |
| `content_list` | `channel?`, `status?` | `{ items }` das peças (leitura) |
| `content_show` | `id` | uma peça (leitura) |
| `content_create` | `channel`, `title`, `personas[]`, `archive[]?` | cria a peça em `rascunho` |
| `content_set_status` | `id`, `status`, `auditReport?`, `url?`, `publishedAt?` | move a peça no pipeline |
| `content_digest` | `id` | SHA-256 da peça (leitura) |
| `calendar_list` | `month?` | `{ items }` do calendário (leitura) |
| `calendar_add` | `date`, `contentId` | agenda a peça |

As tools de escrita usam as mesmas funções do CLI: canal marcado na
estratégia, transições do pipeline e aprovação vinculada ao SHA-256.

## Resources

| URI | Conteúdo |
| --- | --- |
| `{{bin}}://about` | identity em JSON |
| `{{bin}}://exit-codes` | exit codes em JSON |
| `{{bin}}://skill` | documentação completa em Markdown |
| `{{bin}}://skill/{topic}` | uma seção; o template lista os topics |
| `{{bin}}://stats` | números do projeto em JSON |
| `{{bin}}://archive` | todos os itens do acervo |
| `{{bin}}://archive/{id}` | um item com etapas e auditorias |
| `{{bin}}://channels` | todas as peças |
| `{{bin}}://channels/{channel}` | peças de um canal |
| `{{bin}}://calendar` | todas as entradas do calendário |

## Prompts

| Prompt | Arguments | Função |
| --- | --- | --- |
| `operate` | `task` | instrui o agente a ler `skill cli` ou `skill mcp` e executar a task pelas tools ou pelo CLI com `--json` |
| `ingest_material` | `title`, `source?` | registra material com `archive_add` e percorre as etapas do acervo com as skills |
| `produce_piece` | `channel`, `archive`, `persona` | cria a peça com `content_create`, escreve com a especialista do canal e leva a `revisao` |
| `editorial_review` | `months?` | lê `project_stats` e propõe as próximas ações |

## Listar sem iniciar

```bash
{{bin}} mcp --list
{{bin}} mcp --list --json
```

## Testar

```bash
npx @modelcontextprotocol/inspector {{bin}} mcp
```

O Inspector abre uma página local para chamar tools, ler resources e
inspecionar as mensagens JSON-RPC.

## Como adicionar uma tool

1. Copie `template/tool/example.ts` para `src/mcp/tools/<name>.ts`.
2. Declare `inputSchema` com Zod e descreva cada campo com `.describe()`. A
   description da tool diz quando usar e o que ela devolve.
3. Devolva `content` em texto e, quando a saída for estruturada,
   `structuredContent` com o mesmo objeto.
4. Acrescente a tool ao `catalog.tools` para que `mcp --list` a enxergue.
5. Registre a função em `registerAll` em `src/mcp/server.ts`.
6. Teste com o Inspector e com `bun test`.

Nomes de tools usam `snake_case`. Tools que gravam ou chamam APIs externas
precisam dizer isso na description e nunca devem ecoar segredos na resposta.

A tool `doctor` usa a mesma coleta do command CLI: confere runtime, terminal,
permissões da pasta, settings, origem da chave e leitura do cofre. Não grava
arquivos e não retorna valores de credenciais. Cada check traz `name`,
`status` (`ok`, `warn` ou `fail`) e `detail`.
