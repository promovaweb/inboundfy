# Evolução do framework

Uma mudança só está completa quando implementação, metodologia, instalação,
documentação, exemplos e validação descrevem o mesmo comportamento.

## Versão única

`package.json` é a fonte canônica da versão. O mesmo SemVer identifica:

- pacote npm e binário `thothfy`;
- framework e skills presentes no pacote;
- runtime instalado em `.thothfy/`;
- tag Git `vX.Y.Z` e GitHub Release;
- PDF e EPUB do guia do usuário.

O Release Please altera a versão em uma Release PR. O comando
`npm run release:sync` sincroniza o ebook e seus links. A validação recusa a
release se algum número divergir. Não crie versão separada para o CLI.

## Alterar uma skill

1. Classifique a responsabilidade no grupo correto.
2. Preserve o nome se o comportamento continuar compatível.
3. Atualize `SKILL.md` e `REFERENCIA.md`.
4. Atualize a especificação metodológica relacionada.
5. Atualize `SKILLS.md` e esta documentação.
6. Acrescente ou ajuste um caso em `tests/` e, quando o comportamento for
   observável, um pacote fictício em `examples/`.
7. Execute toda a validação.

## Adicionar um tipo de asset

1. Crie a especialista com sufixo estável.
2. Crie a validadora com exatamente o mesmo sufixo.
3. Faça a produtora chamar a validadora.
4. Faça a validadora aplicar `thothfy-base-validador` e devolver à produtora.
5. Registre o par no catálogo e no conjunto esperado pelo validador.
6. Documente formato, caminho, brief, fonte visual quando aplicável e
   condições verificáveis.

## Alterar uma sequência

Mudança de fase é quebra de contrato. Atualize, na mesma alteração:

- nomes dos diretórios e frontmatter;
- wrappers e roteamentos;
- especificação raiz;
- correspondência de nomes exatos no validador;
- documentos `docs/user/` e `docs/method/`;
- migração de nomes anteriores;
- testes de sequência e instalação.

Não numere skills apenas para agrupá-las. A numeração só é válida quando há
estado anterior obrigatório e avanço cronológico verificável.

## Checklist de entrega

- [ ] Metodologia e implementação concordam.
- [ ] Setup instala e repara todos os novos arquivos.
- [ ] Contexto do usuário continua preservado.
- [ ] Documentação começa no pré-requisito e termina na operação.
- [ ] Exemplos usam dados fictícios e representam o comportamento real.
- [ ] Unit tests, validador estrutural e Markdown lint foram aprovados.
- [ ] `npm run release:check` confirmou a versão única.
- [ ] O tarball npm foi instalado e exercitado em isolamento.
- [ ] Estado do Git foi revisado sem incorporar mudanças alheias.
