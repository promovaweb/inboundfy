# CONTEXTO.md — Arquivos de Dados do Usuário

O Thothfy separa framework (skills e metodologia, sem dado nenhum de
negócio) de contexto (dados reais de uma empresa, produto ou pessoa). Todo
dado de negócio vive em `context/` e é a única parte do repositório que muda
de um usuário para outro.

Nenhuma skill deve hardcodar nome de empresa, produto, pessoa, endereço,
preço ou promessa comercial. Quando uma informação desse tipo for necessária,
a skill lê o arquivo de `context/` correspondente. Se o arquivo não existir
ou estiver incompleto, a skill para e aciona a skill de manutenção de
contexto certa antes de continuar.

Neste repositório, `context/` é o template de origem. Depois que
`thothfy-setup` instala o Thothfy num projeto (`INSTALACAO.md`), o dado ao
vivo passa a morar em `.thothfy/context/` dentro desse projeto — toda menção
a `context/<arquivo>.md` no corpo de uma skill resolve para
`.thothfy/context/<arquivo>.md` em tempo de execução (ver
`SKILL-AUTORIA.md`).

## Arquivos e o que cada um resolve

| Arquivo | Resolve | Skill de manutenção |
| --- | --- | --- |
| `context/empresa.md` | Nome, missão, história, modelo de negócio, diferenciais. | `thothfy-contexto-empresa` |
| `context/pessoas.md` | Fundadores, time, autores, porta-vozes e seus papéis. | `thothfy-contexto-pessoas` |
| `context/produtos.md` | Produtos e funcionalidades — o que fazem, para quem, como se usam. | `thothfy-contexto-produtos` |
| `context/servicos.md` | Serviços prestados, formato de entrega, escopo. | `thothfy-contexto-produtos` |
| `context/ofertas.md` | Planos, preços, condições comerciais, comparativos. | `thothfy-contexto-ofertas` |
| `context/marca-voz.md` | Tom, voz, vocabulário preferido, exemplos de bom e mau texto. | `thothfy-contexto-marca` |
| `context/publico.md` | Personas, dores, objeções, nível de maturidade, jornada. | `thothfy-contexto-publico` |
| `context/concorrentes.md` | Concorrentes diretos, posicionamento relativo, diferenciação. | `thothfy-contexto-concorrentes` |
| `context/enderecos.md` | Endereços físicos, CNPJ/registro, contatos oficiais, redes sociais. | `thothfy-contexto-enderecos` |
| `context/canais.md` | Canais ativos, formato por canal, cadência, diretório de trabalho. | `thothfy-contexto-canais` |
| `context/ferramentas.md` | Stack, ferramentas mencionáveis, links oficiais. | `thothfy-contexto-ferramentas` |
| `context/campanhas.md` | Registro de campanhas — objetivo, KPI, público, canais, período, status. | `thothfy-contexto-campanhas` |
| `context/glossario.md` | Grafia oficial de marcas, termos técnicos e siglas. | `thothfy-contexto-empresa` |
| `context/proibicoes.md` | Vetos editoriais específicos do usuário — termos, promessas, comparações proibidas. | `thothfy-contexto-marca` |
| `context/estruturas-proibidas.md` | Catálogo genérico de palavras, frases e estruturas de parágrafo que denunciam texto gerado por IA — usado junto com `proibicoes.md`, mas não específico de negócio. | `thothfy-contexto-marca` |

## Precedência

Quando duas fontes conflitarem, resolva nesta ordem:

1. **Fato confirmado no `context/`** — preço, nome oficial, endereço, dado de
   produto. Sempre vence.
2. **Regra editorial explícita** — `ESCRITA.md`, `context/proibicoes.md`,
   validação do canal.
3. **Voz e preferência registradas** — `context/marca-voz.md`.
4. **Hipótese de pesquisa da fase 2 do pipeline** (`thothfy-planejamento-02-pesquisa`) — só
   vale para o pacote em andamento, nunca sobrescreve fato confirmado.
5. **Suposição da skill na ausência de dado** — só é aceitável em rascunho
   explicitamente marcado como pendente de confirmação; nunca em artefato
   final auditado como pronto.

Ao encontrar divergência entre `context/` e um artefato já publicado:

1. corrija o artefato publicado, não o `context/`, salvo se o próprio dado em
   `context/` estiver desatualizado;
2. se o dado em `context/` estiver desatualizado, acione a skill de
   manutenção de contexto correspondente antes de tocar em qualquer outro
   artefato;
3. registre a mudança no próprio arquivo de contexto, não em um artefato
   avulso.

## Formato dos arquivos

Cada arquivo de `context/` é Markdown com seções fixas e comentários
`<!-- -->` indicando o que preencher. As skills de manutenção de contexto leem
a estrutura, perguntam o que falta, preenchem e nunca removem uma seção
inteira — apenas atualizam o conteúdo dela. Um arquivo pode ficar
parcialmente preenchido; a skill que o consome deve tratar campo vazio como
"não informado", nunca inventar valor.

## Primeira adoção

Um projeto novo do Thothfy começa com os arquivos de `context/` no estado de
template, com placeholders. `thothfy-setup` orienta o preenchimento inicial
mínimo (empresa, marca-voz, um produto, um canal) antes de liberar qualquer
skill de produção.
