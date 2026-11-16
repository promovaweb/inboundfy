# Referência dos índices

Índices ficam em `.inboundfy/indices/`. Use JSON com `schemaVersion: 1`,
`generatedAt` e `items`; guarde caminhos relativos, nunca caminhos absolutos.
O catálogo deriva os registros dos arquivos, corrige dados descritivos e
encaminha qualquer divergência de estado para `inboundfy-pipeline`.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-catalogo**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Material de apoio por passo

| Passo do fluxo | Arquivo | Uso |
| --- | --- | --- |
| 2 e 3 | [references/esquema-dos-indices.md](references/esquema-dos-indices.md) | Campos de cada índice, origem de cada valor, IDs e receitas de consulta. |
| 5 a 7 | [references/reconciliacao.md](references/reconciliacao.md) | Tabela de divergências, quem corrige cada uma e ordem de reconstrução total. |

## Modos de operação

| Modo | Grava? | Quando escolher | Resultado |
| --- | --- | --- | --- |
| Conferência | não | Fim de ciclo do acervo, antes de criar peça nova, auditoria mensal | Relatório de divergências |
| Consulta | não | Pergunta de localização ou busca de link interno | Lista filtrada com caminhos |
| Reconciliação | sim, registros pontuais | Edição manual em poucas pastas | Índice corrigido e relatório |
| Reconstrução | sim, índice inteiro | JSON inválido, índice apagado, migração de pastas | Índice recomposto, backup e relatório |

Prefira o modo mais leve. Reconstrução total só quando a reconciliação não
resolve, porque ela exige backup e conferência do usuário.

## Indicadores de saúde do catálogo

| Indicador | Como medir | Meta sugerida |
| --- | --- | --- |
| Cobertura | registros no índice ÷ pastas válidas | 100% |
| Registros órfãos | registros sem pasta | zero |
| IDs duplicados | IDs repetidos por índice | zero |
| Divergências de estado | peças com estado diferente entre frontmatter, índice e calendário | zero; cada uma encaminhada ao pipeline |
| Acervo processado sem uso | acervos `processado` com `channels` vazio há mais de 60 dias | listar para `inboundfy-planejamento` |

As metas são sugestões de operação. Ajuste ao volume do projeto e registre a
escolha em `.inboundfy/pipeline.md` se o usuário quiser outra regra.

## Template do relatório do catálogo

```markdown
# Catálogo; {{modo}} em {{AAAA-MM-DD}}

- **Modo:** {{conferência | consulta | reconciliação | reconstrução}}
- **Pedido por:** {{usuário | inboundfy-acervo | inboundfy-pipeline}}
- **Gravação autorizada:** {{sim | não}}
- **Backups criados:** {{caminhos ou "nenhum"}}

## Contagens

| Índice | Pastas ou linhas válidas | Registros antes | Registros depois |
| --- | --- | --- | --- |
| acervo.json | {{n}} | {{n}} | {{n}} |
| conteudos.json | {{n}} | {{n}} | {{n}} |
| calendario.json | {{n}} | {{n}} | {{n}} |

## Corrigido pelo catálogo

| Índice | ID | Campo | Antes | Depois | Fonte |
| --- | --- | --- | --- | --- | --- |
| {{índice}} | {{id}} | {{campo}} | {{valor}} | {{valor}} | `{{caminho do arquivo}}` |

## Encaminhado

| ID | Divergência | Destino | Próxima ação |
| --- | --- | --- | --- |
| {{id}} | {{descrição}} | {{skill ou usuário}} | {{verbo + objeto}} |

## Consulta atendida

{{filtro aplicado e lista de IDs com caminho, ou "não se aplica"}}

## Próxima ação

{{verbo + objeto + caminho}}
```

## Exemplo

Exemplo fictício. A Fiscalize Contabilidade Digital, escritório de Campinas
que atende MEIs e pequenas empresas, mantém o Inboundfy com blog, LinkedIn e
e-mail marcados em `.inboundfy/estrategia.md`. Em novembro de 2026 a
analista renomeou à mão a pasta de um post e editou o frontmatter de outro.

### Situação encontrada

```text
acervo/
├── 0003-2026-10-02-webinar-pix-para-mei/
└── 0004-2026-10-20-duvidas-lgpd-escritorio/
canais/
├── blog/0006-2026-10-25-pix-para-mei-como-receber/          (renomeada; índice ainda aponta para ...-pix-mei)
├── blog/0007-2026-11-10-como-emitir-nota-fiscal-de-mei/
└── linkedin/0008-2026-11-12-lgpd-no-whatsapp-do-escritorio/  (sem registro no índice)
calendario/2026-11.md
```

O frontmatter da peça `0007` diz `estado: aprovado`, mas `conteudos.json`
registra `revisao` e não tem `sha256_aprovado`.

### Perguntas feitas

1. "Há algum comando do Inboundfy rodando?" Resposta: não.
2. "Posso gravar as correções descritivas?" Resposta: sim.

### Relatório entregue

```markdown
# Catálogo; reconciliação em 2026-11-15

- **Modo:** reconciliação
- **Pedido por:** usuário
- **Gravação autorizada:** sim
- **Backups criados:** nenhum (reconciliação pontual)

## Contagens

| Índice | Pastas ou linhas válidas | Registros antes | Registros depois |
| --- | --- | --- | --- |
| acervo.json | 2 | 2 | 2 |
| conteudos.json | 3 | 2 | 3 |
| calendario.json | 1 | 1 | 1 |

## Corrigido pelo catálogo

| Índice | ID | Campo | Antes | Depois | Fonte |
| --- | --- | --- | --- | --- | --- |
| conteudos.json | 0006 | directory | canais/blog/0006-2026-10-25-pix-mei | canais/blog/0006-2026-10-25-pix-para-mei-como-receber | `canais/blog/0006-2026-10-25-pix-para-mei-como-receber/README.md` |
| conteudos.json | 0006 | slug | pix-mei | pix-para-mei-como-receber | nome da pasta |
| conteudos.json | 0008 | registro | ausente | criado (linkedin, persona-02, acervo 0004) | `canais/linkedin/0008-2026-11-12-lgpd-no-whatsapp-do-escritorio/README.md` |
| acervo.json | 0004 | channels | [] | [linkedin] | peça 0008 |

## Encaminhado

| ID | Divergência | Destino | Próxima ação |
| --- | --- | --- | --- |
| 0007 | frontmatter `aprovado`, índice `revisao`, sem relatório nem hash | inboundfy-pipeline | Rodar a validadora do blog, gerar o relatório e aprovar com `--audit-report` |
| 0006 | o post 0002 do LinkedIn linka o caminho antigo da pasta | usuário | Confirmar se o link deve apontar para o novo caminho |

## Consulta atendida

Não se aplica.

## Próxima ação

Acionar `inboundfy-pipeline` para a peça 0007 com o relatório da
`inboundfy-validador-blog`.
```

O catálogo não copiou `aprovado` para o índice. A peça 0007 continua
`revisao` até o pipeline conferir relatório e SHA-256.

### Consulta no mesmo projeto

Pedido: "quais posts publicados posso linkar no artigo sobre Pix?". Filtro:
`conteudos.items` com `status: publicado`, `url` preenchida e `acervo`
contendo `0003`. Resposta: peça `0006`, com URL e caminho. A lista segue para
`inboundfy-producao` como sugestão de link interno.

## Checklist

- [ ] O preflight passou e `.inboundfy/indices/` existe.
- [ ] Os três índices têm `schemaVersion: 1` e `items` como lista.
- [ ] Cada registro aponta para pasta ou linha existente.
- [ ] Nenhum ID se repete no mesmo índice.
- [ ] Nenhum caminho é absoluto.
- [ ] Nenhum corpo de texto ou dado pessoal entrou nos índices.
- [ ] `items` está ordenado por ID ou por data e ID.
- [ ] Divergências de estado e aprovação foram encaminhadas, não corrigidas.
- [ ] `channels` do acervo foi recalculado pelas peças.
- [ ] O índice só foi regravado quando a lista mudou.
- [ ] O relatório lista o que foi corrigido, o que foi encaminhado e a
  próxima ação.

## Erros comuns

- **Copiar o estado do frontmatter para o índice.** Uma edição manual vira
  aprovação falsa. Encaminhe ao pipeline.
- **Reconstruir `conteudos.json` incompleto e criar peça logo depois.** O CLI
  calcula o próximo ID pelo maior ID do índice e pode repetir um número já
  usado em disco. Termine a reconstrução antes.
- **Trocar `schemaVersion` para 2.** O CLI só aceita `1` nos índices; o `2`
  pertence ao `install.json` e ao `manifest.json`.
- **Renomear pastas para "padronizar".** O catálogo relata nomes fora do
  padrão; quem renomeia é o usuário, porque links publicados podem depender
  do caminho.
- **Guardar resumo da peça no índice para facilitar a busca.** O índice cresce,
  diverge do texto e vira segunda fonte. Busque pelos campos existentes.
- **Ler o calendário só pelo JSON.** A linha do Markdown mensal é a que o time
  marca como feita; leia as duas.
- **Apagar registro de pasta ausente sem perguntar.** A pasta pode ter sido
  movida para outro canal. Confirme antes.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
No catálogo, o objetivo é o modo escolhido, a entrada são os diretórios
varridos, o contexto são `estrategia.md`, `pipeline.md` e `publico.md`, o
resultado são os índices e o relatório. A próxima ação aponta para a skill
dona de cada divergência encaminhada.
