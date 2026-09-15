# Evolução do framework

Uma mudança só está completa quando implementação, metodologia, instalação,
documentação, exemplos e validação descrevem o mesmo comportamento.

## Biblioteca de capacidades

O núcleo do Inboundfy combina o pipeline editorial com capacidades nativas de
produto, estratégia, pesquisa, SEO, GEO, copy, conversão, medição e revisão
anti-slop. Cada capacidade é uma skill independente, possui referência própria
e recebe o mesmo contexto vivo do projeto.

| Camada | Arquivos | Responsabilidade |
| --- | --- | --- |
| Framework | `skills/` e `skills/_shared/` | Método e catálogo. |
| Configuração | `.inboundfy/*.md` | Empresa, voz, personas e regras. |
| Fonte de trabalho | `acervo/` | Bruto, derivados, FAQ e pesquisa. |
| Saída | `canais/<canal>/<id>-<data>-<slug>/` | Peça com README e vínculos. |
| Agenda | `calendario/AAAA-MM.md` | Checklist mensal por ID. |

Toda skill que produz conteúdo lê a configuração antes do acervo. Toda peça
passa por voz, persona, proibições, dicionário, anti-slop e validador de canal.
Toda pesquisa que altera uma afirmação salva fonte e data no item do acervo.

## Versão única

`package.json` é a fonte canônica da versão. O mesmo SemVer identifica:

- pacote npm e binário `inboundfy`;
- framework e skills presentes no pacote;
- runtime instalado em `.inboundfy/`;
- tag Git `vX.Y.Z` e GitHub Release;
- PDF e EPUB do guia do usuário.

O Release Please altera a versão em uma Release PR. O comando
`npm run release:sync` sincroniza o ebook e seus links. A validação recusa a
release se algum número divergir. Não crie versão separada para o CLI.

## Alterar uma skill

1. Classifique a responsabilidade no grupo correto.
2. Preserve o nome se o comportamento continuar compatível.
3. Atualize `SKILL.md` e `REFERENCIA.md`.
4. Atualize `agents/openai.yaml` e o perfil correspondente no catálogo.
5. Atualize a especificação metodológica relacionada.
6. Atualize `SKILLS.md` e esta documentação.
7. Acrescente ou ajuste um caso em `tests/` e, quando o comportamento for
   observável, um pacote fictício em `examples/`.
8. Execute `npm run skills:check` e toda a validação.

Para uma ampliação mecânica da biblioteca, use:

```bash
npm run skills:enriquecer
npm run skills:check
```

O script adiciona apenas blocos ausentes, preserva material específico e
recompõe `skills/catalogo.json`. Uma ampliação automática ainda exige leitura
manual da skill, da referência e dos exemplos.

## Adicionar um tipo de asset

1. Crie a especialista com sufixo estável.
2. Crie a validadora com exatamente o mesmo sufixo.
3. Faça a produtora chamar a validadora.
4. Faça a validadora aplicar `inboundfy-base-validador` e devolver à produtora.
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
