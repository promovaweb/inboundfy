# Reconciliação entre arquivos e índices

Leia no passo 5 do fluxo. A regra geral: o arquivo em disco é a fonte dos
dados descritivos. O pipeline é o dono do estado. O catálogo corrige o
primeiro grupo e encaminha o segundo.

## Tabela de divergências

| Divergência | Quem corrige | Ação |
| --- | --- | --- |
| Pasta existe, registro ausente no índice | catálogo | Criar o registro a partir do frontmatter. |
| Registro existe, pasta ausente | catálogo, com confirmação | Perguntar se a pasta foi movida ou removida. Se foi removida, retirar o registro e citar no relatório. |
| Pasta renomeada (slug mudou, ID igual) | catálogo | Atualizar `slug` e `directory`; procurar o caminho antigo no calendário e nas peças que linkam para ela. |
| Título diferente entre frontmatter e índice | catálogo | Usar o frontmatter. |
| Persona, acervo ou base editorial diferente | catálogo | Usar o frontmatter e conferir se o destino existe. |
| `channels` do acervo desatualizado | catálogo | Recalcular pela união dos canais das peças. |
| Estado diferente entre frontmatter e índice | `inboundfy-pipeline` | Não escolher um lado. Registrar e encaminhar. |
| `sha256_aprovado` ou `relatorio_validacao` divergente | `inboundfy-pipeline` | Encaminhar. O portão de aprovação depende desses campos. |
| Linha do calendário com estado antigo | `inboundfy-pipeline` | Encaminhar; o pipeline sincroniza ao reaplicar o estado atual. |
| Linha do calendário sem registro em `calendario.json` | catálogo | Criar o registro com data, canal e estado da linha. |
| Mesmo ID em duas pastas | usuário | Parar a gravação daquele índice e perguntar qual pasta mantém o ID. |
| Pasta fora do padrão `<id>-<data>-<slug>` | usuário | Relatar. Não renomear. |
| Persona citada que não existe em `publico.md` | `inboundfy-contexto-publico` | Relatar e encaminhar. |
| Canal não marcado em `estrategia.md` | usuário | Relatar. A peça continua indexada. |

## Por que o catálogo não decide estado

O estado `aprovado` vale porque o CLI conferiu um relatório e um SHA-256. Se o
catálogo copiasse `estado: aprovado` de um frontmatter editado à mão, uma peça
sem validação passaria a parecer liberada. Por isso qualquer diferença de
estado volta para `inboundfy-pipeline`, que reaplica a passagem com as
conferências.

## Ordem segura de reconstrução total

1. Copie os três índices para `.bak-AAAAMMDD`.
2. Reconstrua `acervo.json` primeiro, porque as peças apontam para ele.
3. Reconstrua `conteudos.json`, mantendo `auditReport` e
   `approvedAssetSha256` do registro antigo quando o frontmatter tiver os
   mesmos valores.
4. Reconstrua `calendario.json` lendo os Markdown mensais.
5. Recalcule `channels` do acervo.
6. Compare com os backups e liste cada registro criado, alterado ou retirado.
7. Apague os backups só depois de o usuário conferir o relatório.

## Sinais de alerta

- Mais de 10% dos registros mudaram numa reconciliação simples: pare e
  confirme se houve movimentação de pastas.
- `generatedAt` mais novo que a última modificação das pastas, mas com itens
  faltando: outro processo gravou por cima. Refaça a varredura.
- Peça `publicado` sem `url`: o registro veio de edição manual. Encaminhe ao
  pipeline.
