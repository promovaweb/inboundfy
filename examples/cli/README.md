# Exemplo executável do CLI

Este cenário corresponde aos testes de integração em `tests/cli.test.ts`. Ele
usa um diretório temporário e dados fictícios para conferir o contrato público
sem alterar um projeto real.

## Fluxo exercitado

```bash
npx @promovaweb/inboundfy@latest install --dry-run
npx @promovaweb/inboundfy@latest install \
  --agent codex \
  --instruction-file AGENTS.md \
  --yes
npx @promovaweb/inboundfy@latest doctor
npx @promovaweb/inboundfy@latest context scan
npx @promovaweb/inboundfy@latest repair --yes
```

Os testes confirmam:

- a simulação não escreve arquivos;
- a instalação cria manifestos, método, documentação, ebook e 114 skills;
- Markdown em maiúsculas e Markdown sob `brand/` entram na descoberta;
- o contexto do usuário não é sobrescrito;
- um arquivo gerenciado alterado é preservado antes do reparo;
- `doctor` não altera o projeto;
- `context ready` só aceita o conjunto mínimo realmente preenchido;
- symlinks e caminhos com travessia não permitem escrita fora da raiz.

## Executar

Na raiz do repositório:

```bash
npx vitest run tests/cli.test.ts
```

O teste cria e remove os próprios diretórios temporários.
