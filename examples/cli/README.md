# Exemplo executável do binário

Este cenário corresponde aos testes de integração em `tests/installer.test.ts`,
`tests/workflow.test.ts` e `tests/project-cli-mcp.test.ts`. Eles usam
diretórios temporários e dados fictícios para conferir o contrato público sem
alterar um projeto real.

## Fluxo exercitado

```bash
inboundfy install --dry-run
inboundfy install --agent codex --instruction-file AGENTS.md --yes
inboundfy doctor
inboundfy context scan
inboundfy archive add "Ideia" --text "material bruto"
inboundfy content create blog "Post" --persona persona-01 --archive 1
inboundfy content status 1 revisao
inboundfy calendar add 2026-12-01 1
inboundfy stats --json
inboundfy repair --yes
```

Os testes confirmam:

- a simulação não escreve arquivos;
- a instalação cria manifestos, método, documentação, ebook e as skills;
- Markdown em maiúsculas e Markdown sob `brand/` entram na descoberta;
- o contexto do usuário não é sobrescrito;
- um arquivo gerenciado alterado é preservado antes do reparo;
- `doctor` não altera o projeto;
- `context ready` só aceita o conjunto mínimo realmente preenchido;
- symlinks e caminhos com travessia não permitem escrita fora da raiz;
- a aprovação exige relatório com ID, caminho e SHA-256 da versão revisada;
- `stats` e a tool `project_stats` devolvem os mesmos números;
- cada falha sai com o código fixo esperado.

## Executar

Na raiz do repositório:

```bash
bun test tests/installer.test.ts tests/workflow.test.ts tests/project-cli-mcp.test.ts
```

Os testes criam e removem os próprios diretórios temporários.
