# Catálogo e pareamento

O catálogo estruturado em `skills/catalogo.json` possui 114 skills. O índice
humano em `SKILLS.md` mantém a mesma lista em formato navegável.

| Grupo | Quantidade | Ordenação |
| --- | ---: | --- |
| Orquestrador | 1 | Fluxo completo e próxima ação |
| Entrada | 2 | Setup e encaminhamento inicial |
| Acervo | 4 | Material, derivados, FAQ, pesquisa e base |
| Base | 5 | Capacidades reutilizáveis |
| Contexto | 7 | Domínios de configuração agrupados |
| Brainstorm | 1 | Uma skill com referências `00–04` |
| Copy | 6 | Redação, edição e posicionamento |
| Estratégia | 1 | Uma skill com referências `00–03` |
| Growth | 25 | Crescimento e distribuição |
| Planejamento | 1 | Uma skill com referências `00–06` |
| Especialistas | 20 | Por sufixo de asset |
| Validadoras | 20 | Mesmo sufixo da especialista |
| Qualidade | 2 | Anti-slop de conteúdo e código |
| Capacidades | 19 | Produto, pesquisa, SEO, GEO e operação |

## Pares de asset

Cada sufixo abaixo gera exatamente um par
`inboundfy-especialista-<sufixo>` ⇄ `inboundfy-validador-<sufixo>`:

- `blog` e `blog-imagem`;
- `changelog`;
- `ebook` e `ebook-imagem`;
- `email`;
- `infografico` e `infografico-imagem`;
- `instagram` e `instagram-imagem`;
- `linkedin` e `linkedin-imagem`;
- `newsletter`;
- `podcast`;
- `video` e `video-imagem`;
- `webinar` e `webinar-imagem`.

Uma produtora precisa citar sua validadora. Uma validadora precisa citar a
produtora, `inboundfy-base-validador`, contexto completo e os estados aprovado e
reprovado. Divergências no conjunto ou no pareamento reprovam o framework.

O usuário inicia o fluxo normal por `$inboundfy`; o catálogo mantém as skills
especializadas acessíveis para operação direta solicitada ou retomada.

O catálogo navegável está em [SKILLS.md](../../SKILLS.md).

## Perfil de pareamento

Cada item de `skills/catalogo.json` também informa `perfil.entrada`,
`perfil.saida`, `perfil.validacao` e `perfil.handoff`. Esses campos dão ao
orquestrador uma ficha curta para localizar a skill adequada sem remover as
instruções completas do `SKILL.md`.

Toda skill possui ainda `REFERENCIA.md` e `agents/openai.yaml`. A referência
explica a operação com template, exemplo, checklist, erros comuns e fontes
internas. O YAML fornece a interface de ativação do agente.
