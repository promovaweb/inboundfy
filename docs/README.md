# Documentação do Inboundfy

`{{bin}}` {{version}} é o binário do Inboundfy, framework de inbound marketing
com skills de IA. Ele instala o framework num projeto, mantém o acervo, as
peças por canal e o calendário editorial nos índices de `.inboundfy/indices/`
e mostra os números desse trabalho. São três modos no mesmo executável:

| Modo | Como abrir | Para quê |
| --- | --- | --- |
| TUI | `{{bin}}` sem argumentos, em terminal interativo | painel com acervo, canais, funil do pipeline, calendário e contexto |
| CLI | `{{bin}} <command>` | instalar, conferir e operar o projeto; `--json` para scripts e agentes |
| MCP | `{{bin}} mcp` | servidor stdio com tools para ler e gravar acervo, peças e calendário |

## Para agentes

1. Rode os commands na raiz do projeto ou passe `--project <dir>`
   (`{{BIN}}_PROJECT` também vale). No MCP, as tools aceitam `project`.
2. Prefira as tools MCP (`project_stats`, `archive_*`, `content_*`,
   `calendar_*`); no CLI, use sempre `--json` e trate o exit code antes da
   mensagem: `0` sucesso, `2` uso, `6` não encontrado, `10` não instalado,
   `11` integridade, `12` conflito.
3. Os valores gravados no projeto ficam em português: estados do acervo
   (`recebido`, `processando`, `processado`, `arquivado`), estados das peças
   (`rascunho`, `revisao`, `aprovado`, `agendado`, `publicado`, `arquivado`)
   e as pastas `acervo/`, `canais/` e `calendario/`.
4. Aprovar uma peça que está em `revisao` exige o relatório da validadora com
   o SHA-256 de `content digest`. Publicar exige URL e data.
5. O trabalho editorial (escrever, revisar, validar) é das skills
   `inboundfy-*` instaladas no projeto; a entrada é `$inboundfy`.

## Seções desta documentação

- [CLI](cli.md): commands, options, envelopes e pipeline.
- [TUI](tui.md): telas, teclas e estados.
- [MCP](mcp.md): tools, resources e prompts.
- [Configuração](configuration.md): settings, cofre e variáveis.
- [Exit codes](exit-codes.md): a tabela completa.
- [Arquitetura](architecture.md): camadas do binário.

## Documentação do framework

- [Guia do usuário](user/README.md): instalação, primeiros passos, escolha de
  fluxo, contexto, validação, painel e solução de problemas.
- [Documentação do método](method/README.md): arquitetura, sequências,
  contratos, artefatos, fontes, referência do CLI e manutenção do framework.
- [Processo de release](../RELEASING.md): SemVer único, binários, ebook e npm.

Os arquivos Markdown na raiz do repositório continuam sendo as especificações
canônicas executadas pelas skills. Esta pasta explica como usar e manter essas
especificações sem duplicar seus contratos.
