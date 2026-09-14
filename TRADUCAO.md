# TRADUCAO.md — Regras de Tradução e Termos Não Traduzíveis

Este arquivo define como decidir se um termo deve ser traduzido, adaptado ou
mantido no idioma original ao produzir conteúdo. Ele é metodologia do
framework — agnóstica de negócio. O registro operativo de termos
específicos de um usuário vive em `context/glossario.md`; este arquivo
explica o raciocínio e serve de exemplo para preencher aquele arquivo
corretamente.

## Regra central

Nem todo termo em inglês (ou em outro idioma) deve ser traduzido para o
idioma de produção definido em `context/marca-voz.md`. Termo técnico
consolidado, nome próprio, nome de produto e sigla oficial mantêm a forma
original quando a tradução soa artificial, confunde o leitor técnico ou
diverge do uso real do mercado. A decisão não é "traduzir tudo" nem "manter
tudo em inglês" — é reconhecer a categoria certa para cada termo.

## Categorias que normalmente não se traduzem

1. **Nome de marca, produto ou empresa** — nunca traduza, nunca adapte a
   grafia. Registre a forma oficial em `context/glossario.md` e em
   `context/empresa.md`/`context/produtos.md`.
2. **Termo técnico consolidado no mercado em português** — quando a
   comunidade técnica já usa o termo em inglês no dia a dia (ex.: termos de
   infraestrutura, arquitetura de software, ferramentas), traduzir cria
   estranhamento em vez de clareza.
3. **Sigla oficial** — mantenha a sigla; escreva o termo completo por
   extenso na primeira ocorrência quando o público não for 100% técnico.
4. **Nome de metodologia, framework ou programa proprietário** — mantenha
   o nome oficial mesmo quando ele usar palavra em outro idioma.
5. **Comando, nome de arquivo, rota, variável ou trecho de código** — nunca
   traduza; é literal e funcional, não editorial.

## Categorias que normalmente se traduzem

- Termo genérico que tem tradução natural e amplamente usada no idioma de
  produção, sem perda de precisão técnica.
- Adjetivo, verbo ou conceito comum que não é jargão técnico específico.
- Frase de efeito, clichê ou expressão idiomática — mas cuidado: não troque
  um clichê em inglês por um clichê equivalente em português; prefira
  reescrever sem clichê nenhum (ver `context/estruturas-proibidas.md`).

## Exemplo ilustrativo (termos da Promovaweb, empresa de origem do método)

Estes termos não pertencem ao usuário do Inboundfy — servem apenas para
mostrar como um dicionário de termos fica preenchido na prática. Substitua
por termos reais do seu próprio negócio em `context/glossario.md`.

| Termo em inglês/estrangeiro | Como aparece no texto | Categoria |
| --- | --- | --- |
| `container` | Mantido em inglês, nunca "contêiner" | Termo técnico consolidado |
| `n8n` | Mantido em minúsculas, nome próprio de ferramenta | Nome de produto de terceiro |
| `IA Makers` | Mantido como nome oficial da formação | Nome de programa proprietário |
| `Vibe Coding` | Mantido como nome da prática/metodologia | Nome de metodologia |
| `copy` | Mantido em inglês (não traduzir para "cópia") | Termo técnico consolidado no mercado de marketing |
| `Guardrails` / `guardrails` | Maiúscula só em nome de componente oficial; minúscula no corpo do texto | Termo técnico com uso híbrido |
| `Promovaweb` | Grafia fixa: P maiúsculo, restante minúsculo, sem espaço | Nome de marca |

## Correções canônicas de transcrição

Ferramentas de transcrição frequentemente erram nome próprio, sigla e termo
técnico por semelhança sonora. Ao limpar material bruto (ver
`LIMPEZA-MATERIAL-BRUTO.md`), use esta lógica para corrigir:

```markdown
| Termo ouvido/transcrito | Grafia correta | Regra de uso |
| --- | --- | --- |
| <variação sonora 1>, <variação sonora 2> | <termo real> | <quando usar essa correção> |
```

Só aplique a correção quando o contexto da frase deixar claro qual é o
termo real. Quando houver dúvida genuína sobre o termo pretendido, não
corrija por conta própria — registre como pendência (ver seção seguinte).

## Termos pendentes de confirmação

Quando o material bruto trouxer termo técnico, nome de ferramenta, sigla ou
palavra provavelmente mal transcrita que ainda não existe em
`context/glossario.md`, registre a dúvida em vez de adivinhar:

```markdown
| Termo observado | Trecho | Origem | Pergunta ao usuário |
| --- | --- | --- | --- |
| <como apareceu> | <trecho da frase> | <arquivo de origem> | <pergunta objetiva de confirmação> |
```

Um artefato final não deve carregar termo pendente sem confirmação — resolva
a pendência com o usuário antes da fase de produção (ver `METODOLOGIA.md`).

## Como isso se conecta ao restante do framework

- `context/glossario.md` é o registro vivo e específico do usuário — este
  arquivo é o guia de raciocínio para populá-lo corretamente.
- `inboundfy-contexto-empresa` mantém `context/glossario.md`.
- `inboundfy-planejamento-01-saneamento` aplica as correções canônicas de
  transcrição durante a limpeza do material bruto.
- `context/estruturas-proibidas.md` cobre o problema oposto: não o termo
  certo mal grafado, mas o clichê ou fórmula vazia que não deveria existir
  de forma alguma.
