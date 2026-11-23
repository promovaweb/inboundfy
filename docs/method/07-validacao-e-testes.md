# Validação e testes

## Camadas

1. Cada skill valida sua entrada e saída.
2. `inboundfy-copy-editor` verifica escrita e proibições em texto.
3. `inboundfy-base-validador` define o relatório e os hard gates.
4. A validadora do asset aplica regras de canal, contexto e marca.
5. A auditoria final verifica o pacote.
6. O CLI confere transições, vincula a aprovação ao relatório e ao hash do
   arquivo, e recusa agendamento ou publicação após alteração.
7. O validador do repositório confere a integridade do framework.

Além dessas camadas, `inboundfy-anti-slop` roda nos marcos A0 a A6. Os
registros ficam ligados ao pacote e uma alteração invalida os marcos
posteriores ao ponto alterado.

## Comandos

Execute na raiz do repositório:

```bash
bun run framework:check
bun run typecheck
bun test
bun run docs:check
bun run build
bun run ebook:verify
bun run release:check
bun run validate
```

Para aplicar blocos de arquitetura ausentes antes da conferência:

```bash
bun run framework:enrich
```

O validador verifica:

- 128 skills, seus contratos individuais e a arquitetura compartilhada;
- cinco referências comuns, 128 interfaces de agente e o catálogo estruturado;
- referências internas e continuidade das três sequências;
- ausência de diretórios públicos para etapas agrupadas;
- 20 pares produtora–validadora;
- preflight obrigatório e responsabilidade do setup;
- catálogo de contexto, descoberta de Markdown e `brand/`;
- documentação de usuário e método;
- exemplos executáveis e links Markdown locais.
- instalação, atualização, reparo, descoberta, contexto mínimo e segurança de
  caminhos do binário;
- fluxo instalado de acervo, peça, relatório de auditoria, calendário e
  publicação em projeto temporário isolado;
- commands, tools MCP e telas da TUI com envelopes JSON e códigos de saída
  fixos, conferidos por `bun test` e cobertos pela documentação embutida
  (`docs:check`);
- versão única entre `package.json`, `npm/package.json`, ebook, changelog e
  tag, e workflow de release sem publicação no npm (`release:check`).

Para conferir o binário compilado, com o payload embutido:

```bash
bun run build
./dist/inboundfy -C "$(mktemp -d)" install --yes
```

## Regra para mudança

Uma alteração de skill exige atualizar contrato, referência, catálogo e testes
afetados. Mudança de sequência exige atualizar a especificação normativa, os
wrappers, esta documentação e a correspondência exata do validador. Mudança no setup
exige atualizar a árvore instalada e seus checklists.

As evidências reproduzíveis ficam em
[examples/validacao-assets](../../examples/validacao-assets/README.md).
