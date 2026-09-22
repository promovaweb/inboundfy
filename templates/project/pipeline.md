# Pipeline de conteúdo

Os estados abaixo organizam cada item final. A troca de estado deve atualizar
o frontmatter da peça e o índice de conteúdos.

| Estado | Uso |
| --- | --- |
| `rascunho` | Estrutura iniciada, ainda sem revisão completa. |
| `revisao` | Texto pronto para leitura e ajustes do responsável. |
| `aprovado` | Revisão concluída e peça liberada para agendamento. |
| `agendado` | Data definida no calendário mensal. |
| `publicado` | Publicação confirmada com URL e data. |
| `arquivado` | Peça preservada para consulta, sem uso ativo. |

## Regras

- **Estado inicial:** rascunho
- **Quem pode aprovar:** PREENCHER
- **Relatório obrigatório para aprovar:** sim
- **URL obrigatória ao publicar:** sim
- **Data de publicação obrigatória:** sim
- **Permitir voltar de publicado para revisão:** não; arquive e crie nova versão

## Passagens permitidas

```text
rascunho  → revisao, arquivado
revisao   → rascunho, aprovado, arquivado
aprovado  → revisao, agendado, publicado, arquivado
agendado  → revisao, aprovado, publicado, arquivado
publicado → arquivado
arquivado → nenhum
```

Para aprovar uma peça revisada, use `inboundfy content digest <id>` e inclua
ID, caminho relativo, SHA-256 atual e `Veredito: aprovado` no relatório da
validadora. A aprovação fica inválida se o conteúdo mudar ou se a peça voltar
para `revisao` ou `rascunho`. O CLI confere o relatório e o hash antes de
agendar ou publicar.
