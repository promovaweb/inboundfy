# Esquema dos índices

Leia no passo 2 do fluxo. Este arquivo descreve os campos que o CLI grava em
cada índice e de onde o catálogo deriva cada valor quando reconstrói.

## Envelope comum

```json
{
  "schemaVersion": 1,
  "generatedAt": "2026-11-15T13:40:00.000Z",
  "items": []
}
```

- `schemaVersion` é sempre `1`. O CLI recusa outro valor com a mensagem
  `Índice inválido`.
- `generatedAt` usa ISO 8601 em UTC. Só muda quando `items` muda.
- `items` é uma lista. Nunca use objeto indexado por ID.

## IDs

- IDs têm quatro dígitos com zeros à esquerda: `0001`, `0042`, `0137`.
- O acervo e as peças têm sequências separadas. O acervo `0003` e a peça
  `0003` podem existir ao mesmo tempo sem conflito.
- O próximo ID de peça é o maior ID de `conteudos.json` mais um. Um índice
  incompleto faz o CLI repetir IDs. Por isso a reconstrução precisa terminar
  antes de qualquer `inboundfy content create`.
- O ID aparece em três lugares: nome da pasta, frontmatter e índice. Os três
  precisam bater.

## `acervo.json`

| Campo | Tipo | Origem na reconstrução |
| --- | --- | --- |
| `id` | texto, 4 dígitos | prefixo da pasta `acervo/<id>-...` |
| `slug` | texto | trecho final do nome da pasta |
| `title` | texto | título do `README.md` do acervo |
| `directory` | caminho relativo | `acervo/<id>-<data>-<slug>` |
| `createdAt` | ISO 8601 | data da pasta, ou registro existente |
| `status` | `recebido`, `processando`, `processado`, `arquivado` | `README.md` do acervo; `processado` quando `processado.md` tem `estado: processado` |
| `source` | texto, opcional | linha de origem do `README.md` |
| `channels` | lista de canais | união dos canais das peças que citam o acervo |

A base editorial não tem índice próprio. Ela é localizada por
`<directory>/base-editorial.md` do acervo e pelo campo `baseEditorial` das
peças.

## `conteudos.json`

| Campo | Frontmatter da peça | Observação |
| --- | --- | --- |
| `id` | `id` | igual ao prefixo da pasta |
| `channel` | `canal` | `blog`, `email`, `linkedin`, `instagram`, `substack` ou `youtube` |
| `title` | `titulo` | sem aspas externas |
| `slug` | nome da pasta | parte depois da data |
| `directory` | caminho da pasta | `canais/<canal>/<id>-<data>-<slug>` |
| `createdAt` | `criado_em` | ISO 8601 |
| `status` | `estado` | um dos seis estados do pipeline |
| `personas` | `personas` | lista de IDs de `publico.md` |
| `acervo` | `acervo` | lista de IDs com 4 dígitos |
| `baseEditorial` | `bases_editoriais` | caminhos relativos |
| `auditReport` | `relatorio_validacao` | só em `aprovado`, `agendado` ou `publicado` |
| `approvedAssetSha256` | `sha256_aprovado` | 64 caracteres hexadecimais |
| `url` | `url` | só depois da publicação |
| `publishedAt` | `publicado_em` | `AAAA-MM-DD` |

Valores `PREENCHER` ou `não informado` no frontmatter viram lista vazia no
índice e entram no relatório como pendência.

## `calendario.json`

| Campo | Origem |
| --- | --- |
| `id` | `<AAAA-MM>-<contentId>`, como `2026-11-0007` |
| `date` | heading `## AAAA-MM-DD` acima da linha |
| `contentId` | número entre `**` na linha |
| `channel` | canal escrito na linha |
| `path` | `calendario/AAAA-MM.md` |
| `status` | trecho `estado: ...` no fim da linha |

Formato da linha gravada pelo `inboundfy calendar add`:

```markdown
## 2026-11-24

- [ ] **0007** Como emitir nota fiscal de MEI · blog · personas: persona-01 · [peça](../canais/blog/0007-2026-11-10-como-emitir-nota-fiscal-de-mei/README.md) · estado: agendado
```

## O que nunca entra no índice

- corpo da peça, resumo longo ou trecho de copy;
- caminho absoluto (`/home/...`, `C:\...`);
- dado pessoal de leitor ou cliente, como e-mail, telefone, CPF ou print de
  conversa de WhatsApp (a LGPD trata esses dados como pessoais; o índice é
  versionado em Git);
- campos inventados para facilitar a busca. Uma busca nova se resolve com
  filtro sobre os campos existentes.

## Receitas de consulta

| Pergunta | Filtro |
| --- | --- |
| Peças de um acervo | `conteudos.items` com `acervo` contendo o ID |
| Peças para uma persona | `conteudos.items` com `personas` contendo o ID |
| O que já saiu em um canal | `channel` igual ao canal e `status` igual a `publicado` |
| Agenda do mês | `inboundfy calendar list AAAA-MM` ou `calendario.items` com `date` iniciando no mês |
| Candidatas a link interno | peças `publicado` com acervo ou persona em comum e `url` preenchida |
| Acervo sem uso | `acervo.items` com `channels` vazio e `status` `processado` |

O CLI também oferece `inboundfy archive list` e a opção global `--json` para
leitura estruturada.
