# Referência do CLI de conteúdo

O CLI registra estados de peças já criadas pelo framework. Execute os
comandos na raiz do projeto consumidor. `--project <pasta>` recebe um caminho
relativo à pasta de execução ou absoluto e usa a pasta atual quando omitido.
`--json` é uma flag
booleana, desativada por padrão, que imprime a resposta estruturada em vez do
resumo legível. Os dois comandos desta referência não exigem permissões além
de leitura para `digest` e escrita nos arquivos do projeto para `status`.

## `content digest <id>`

Calcula o SHA-256 do `README.md` da peça indicada no índice
`.inboundfy/indices/conteudos.json`. O cálculo desconsidera apenas os campos
mutáveis do pipeline: `estado`, `relatorio_validacao`, `sha256_aprovado`,
`url` e `publicado_em`. Assim, a mudança de estado não altera o hash. Texto,
persona, links, metadados editoriais e demais campos continuam protegidos pelo
hash. O argumento `<id>` é obrigatório e corresponde ao identificador
registrado no índice. Para IDs numéricos menores que quatro posições, o CLI
preenche zeros à esquerda, como `1` para `0001`. A operação é somente leitura:
não altera o asset, o índice nem
o calendário. A resposta legível traz ID, caminho relativo do asset e SHA-256;
com `--json`, retorna `id` (string), `asset` (caminho relativo em string) e
`sha256` (64 caracteres hexadecimais minúsculos). IDs inexistentes, índice
inconsistente, caminho inseguro ou link simbólico no asset são recusados.

```bash
inboundfy content digest 0001
inboundfy content digest 1
inboundfy --project ../site content digest 0001
inboundfy --json content digest 0001
inboundfy --project ../site --json content digest 0012
```

## `content status <id> <estado>`

O argumento `<id>` é obrigatório e identifica uma peça já registrada.
`<estado>` é obrigatório e aceita `rascunho`, `revisao`, `aprovado`,
`agendado`, `publicado` ou `arquivado`, respeitando as transições permitidas
em [Artefatos e estados](05-artefatos-e-estados.md). O comando atualiza o
frontmatter do README, o índice de conteúdos e o calendário mensal, quando
houver item relacionado. `--audit-report <arquivo>` recebe um caminho relativo
e seguro dentro do projeto, sem valor padrão. `--url <url>` recebe endereço
absoluto HTTP ou HTTPS. `--published-at <data>` recebe uma data civil existente
no formato `AAAA-MM-DD`. Ambos são opcionais fora da publicação e obrigatórios
ao mudar para `publicado`. O endereço é normalizado antes de ser salvo.
`--json` mantém o padrão global de saída estruturada.

```bash
inboundfy content status 0001 revisao
inboundfy content status 0001 aprovado --audit-report 06-auditoria/assets/blog-0001.md
inboundfy content status 0001 agendado
inboundfy content status 0001 publicado --url https://exemplo.test/artigo --published-at 2026-09-20
inboundfy --json content status 0001 aprovado --audit-report 06-auditoria/assets/blog-0001.md
```

`--audit-report <arquivo>` usa caminho relativo à raiz do projeto. O relatório
precisa conter estas linhas, com valores exatos:

```markdown
- **ID da peça:** `0001`
- **Asset:** `canais/blog/0001-2026-09-20-titulo/README.md`
- **SHA-256 da peça:** `<64 caracteres hexadecimais>`
- **Veredito:** aprovado
```

As linhas são parte do relatório integral da validadora; não crie um relatório
de aprovação separado do trabalho de auditoria. Consulte o hash atual com
`inboundfy content digest <id>` depois da última alteração no asset.

O comando recusa ID inexistente, estado desconhecido, passagem não permitida,
relatório ausente ao aprovar após revisão, caminho externo ou simbólico, ID ou
caminho divergente, hash inválido ou diferente do atual, veredito diferente de
`aprovado`, URL que não seja HTTP(S) absoluto e data inexistente ou fora do
formato. A resposta legível informa o novo estado e a resposta JSON contém o
registro atualizado, com `id`, `channel`, `title`, `slug`, `directory`,
`createdAt`, `status`, `personas`, `acervo` e `baseEditorial`. Quando existirem,
`auditReport` é um caminho relativo, `approvedAssetSha256` contém 64 caracteres
hexadecimais, `publishedAt` usa `AAAA-MM-DD` e `url` é HTTP(S). Falhas encerram
o comando com código diferente de zero. O CLI também recusa agendamento ou
publicação quando o asset mudou depois da aprovação. Volte para `revisao`,
aplique as correções, rode a validação completa, atualize o relatório e aprove
com o hash novo.

Ao mover a peça para `revisao` ou `rascunho`, o comando remove do README e do
índice a referência à aprovação anterior. A peça precisa de novo relatório
antes de voltar a `agendado` ou `publicado`.
