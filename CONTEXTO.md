# CONTEXTO.md — Arquivos de Dados do Usuário

O Inboundfy separa framework (skills e metodologia, sem dado nenhum de
negócio) de contexto (dados reais de uma empresa, produto ou pessoa). Todo
dado de negócio vive em `context/` e é a única parte do repositório que muda
de um usuário para outro.

Nenhuma skill deve hardcodar nome de empresa, produto, pessoa, endereço,
preço ou promessa comercial. Quando uma informação desse tipo for necessária,
a skill lê o arquivo de `context/` correspondente. Se o arquivo não existir
ou estiver incompleto, a skill para e aciona a skill de manutenção de
contexto certa antes de continuar.

Neste repositório, `context/` é o template de origem. Depois que
`inboundfy-setup` instala o Inboundfy num projeto (`INSTALACAO.md`), o dado ao
vivo passa a morar em `.inboundfy/context/` dentro desse projeto — toda menção
a `context/<arquivo>.md` no corpo de uma skill resolve para
`.inboundfy/context/<arquivo>.md` em tempo de execução (ver
`SKILL-AUTORIA.md`).

O setup também pesquisa os Markdown em maiúsculas já existentes no projeto e
registra os candidatos em `.inboundfy/fontes-projeto.md`. Esse inventário aponta
para as fontes originais, sem duplicá-las. As skills consultam os arquivos
relevantes para a tarefa, mas não tratam um documento descoberto como
substituto automático do `context/`.

Quando `brand/` existir na raiz, o setup inventaria todos os Markdown dessa
pasta, inclusive nomes em minúsculas. As skills consultam ali manual, voz,
tokens, logos, tipografia e aplicações relevantes sem copiar nem modificar os
ativos. Divergência entre `brand/` e `.inboundfy/context/` bloqueia a aprovação
até a fonte responsável ser confirmada; nenhuma skill escolhe silenciosamente.

## Arquivos e o que cada um resolve

| Arquivo | Resolve | Skill de manutenção |
| --- | --- | --- |
| `context/empresa.md` | Nome, missão, história, modelo de negócio, diferenciais. | `inboundfy-contexto-empresa` |
| `context/pessoas.md` | Fundadores, time, autores, porta-vozes e seus papéis. | `inboundfy-contexto-pessoas` |
| `context/produtos.md` | Produtos e funcionalidades — o que fazem, qual público atendem, como se usam. | `inboundfy-contexto-produtos` |
| `context/servicos.md` | Serviços prestados, formato de entrega, escopo. | `inboundfy-contexto-produtos` |
| `context/ofertas.md` | Planos, preços, condições comerciais, comparativos. | `inboundfy-contexto-ofertas` |
| `context/marca-voz.md` | Tom, voz, vocabulário preferido, exemplos de bom e mau texto. | `inboundfy-contexto-marca` |
| `context/publico.md` | Personas, dores, objeções, nível de maturidade, jornada. | `inboundfy-contexto-publico` |
| `context/concorrentes.md` | Concorrentes diretos, posicionamento relativo, diferenciação. | `inboundfy-contexto-concorrentes` |
| `context/enderecos.md` | Endereços físicos, CNPJ/registro, contatos oficiais, redes sociais. | `inboundfy-contexto-enderecos` |
| `context/canais.md` | Canais ativos, formato por canal, cadência, diretório de trabalho. | `inboundfy-contexto-canais` |
| `context/ferramentas.md` | Stack, ferramentas mencionáveis, links oficiais. | `inboundfy-contexto-ferramentas` |
| `context/campanhas.md` | Registro de campanhas — objetivo, KPI, público, canais, período, status. | `inboundfy-contexto-campanhas` |
| `context/glossario.md` | Grafia oficial de marcas, termos técnicos e siglas. | `inboundfy-contexto-empresa` |
| `context/proibicoes.md` | Vetos editoriais específicos do usuário — termos, promessas, comparações proibidas. | `inboundfy-contexto-marca` |
| `context/estruturas-proibidas.md` | Catálogo genérico de palavras, frases e estruturas de parágrafo que denunciam texto gerado por IA — usado junto com `proibicoes.md`, mas não específico de negócio. | `inboundfy-contexto-marca` |

## Precedência

Quando duas fontes conflitarem, resolva nesta ordem:

1. **Instrução do projeto** — `AGENTS.md` ou `CLAUDE.md` governa o
   comportamento do agente no escopo correspondente.
2. **Fato confirmado no `context/`** — preço, nome oficial, endereço, dado de
   produto. Sempre vence.
3. **Regra editorial explícita** — `ESCRITA.md`, `context/proibicoes.md`,
   validação do canal.
4. **Fonte de marca responsável** — arquivos de `brand/` para identidade,
   logos, cores, tipografia, voz e aplicações que documentarem.
5. **Voz e preferência registradas** — `context/marca-voz.md`.
6. **Fonte descoberta responsável pelo domínio** — Markdown classificado
   como factual ou editorial em `.inboundfy/fontes-projeto.md`; complementa o
   contexto e sinaliza divergência.
7. **Hipótese de pesquisa da fase 2 do pipeline** (`inboundfy-planejamento-02-pesquisa`) — só
   vale para o pacote em andamento, nunca sobrescreve fato confirmado.
8. **Suposição da skill na ausência de dado** — só é aceitável em rascunho
   explicitamente marcado como pendente de confirmação; nunca em artefato
   final auditado como pronto.

Ao encontrar divergência entre `context/` e um artefato já publicado:

1. corrija o artefato publicado, não o `context/`, salvo se o próprio dado em
   `context/` estiver desatualizado;
2. se o dado em `context/` estiver desatualizado, acione a skill de
   manutenção de contexto correspondente antes de alterar outro artefato;
3. registre a mudança no próprio arquivo de contexto, não em um artefato
   avulso.

## Formato dos arquivos

Cada arquivo de `context/` é Markdown com seções fixas e comentários
`<!-- -->` indicando o que preencher. As skills de manutenção de contexto leem
a estrutura, perguntam o que falta, preenchem e nunca removem uma seção
inteira — apenas atualizam o conteúdo dela. Um arquivo pode ficar
parcialmente preenchido; a skill que o consome deve tratar campo vazio como
"não informado", nunca inventar valor.

`inboundfy-setup` mantém a presença e a localização dos arquivos. As skills
`inboundfy-contexto-*` mantêm o conteúdo preenchido. Quando um arquivo estiver
ausente, a skill consumidora aciona `inboundfy-setup`, que restaura o template
sem preencher informação de negócio; depois, a skill de contexto responsável
conduz o preenchimento necessário.

`inboundfy-setup` também mantém `.inboundfy/fontes-projeto.md`. As demais skills
leem o inventário e os documentos aplicáveis, mas nunca atualizam a lista nem
alteram as fontes durante uma tarefa de produção.

## Primeira adoção

Um projeto novo do Inboundfy começa com os arquivos de `context/` no estado de
template, com placeholders. `inboundfy-setup` orienta o preenchimento inicial
mínimo (empresa, marca-voz, um produto, um canal) antes de liberar qualquer
skill de produção.
