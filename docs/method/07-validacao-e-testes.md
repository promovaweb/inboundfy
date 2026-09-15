# Validação e testes

## Camadas

1. Cada skill valida sua entrada e saída.
2. `inboundfy-copy-editor` verifica escrita e proibições em texto.
3. `inboundfy-base-validador` define o relatório e os hard gates.
4. A validadora do asset aplica regras de canal, contexto e marca.
5. A auditoria final verifica o pacote.
6. O validador do repositório confere a integridade do framework.

Além dessas camadas, `inboundfy-anti-slop` roda nos marcos A0 a A6. Os
registros ficam ligados ao pacote e uma alteração invalida os marcos
posteriores ao ponto alterado.

## Comandos

Execute na raiz do repositório:

```bash
npm run skills:check
npm run typecheck
npm test
npm run build
npm run ebook:verify
npm run release:check
npm run validar
```

Para aplicar blocos de arquitetura ausentes antes da conferência:

```bash
npm run skills:enriquecer
```

O validador verifica:

- 114 skills, seus contratos individuais e a arquitetura compartilhada;
- cinco referências comuns, 114 interfaces de agente e o catálogo estruturado;
- referências internas e continuidade das três sequências;
- ausência de diretórios públicos para etapas agrupadas;
- 20 pares produtora–validadora;
- preflight obrigatório e responsabilidade do setup;
- catálogo de contexto, descoberta de Markdown e `brand/`;
- documentação de usuário e método;
- exemplos executáveis e links Markdown locais.
- instalação, atualização, reparo, descoberta, contexto mínimo e segurança de
  caminhos do CLI;
- versão única entre `package.json`, lockfile, Release Please, ebook e tag;
- instalação do tarball npm em um projeto temporário isolado.

Para conferir exatamente o arquivo que será publicado:

```bash
mkdir -p artifacts
npm pack --pack-destination artifacts
npm run npm:validate-package -- artifacts/promovaweb-inboundfy-1.1.0.tgz
```

## Regra para mudança

Uma alteração de skill exige atualizar contrato, referência, catálogo e testes
afetados. Mudança de sequência exige atualizar a especificação normativa, os
wrappers, esta documentação e a correspondência exata do validador. Mudança no setup
exige atualizar a árvore instalada e seus checklists.

As evidências reproduzíveis ficam em
[examples/validacao-assets](../../examples/validacao-assets/README.md).
