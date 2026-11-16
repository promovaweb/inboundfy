# Diagnóstico das recusas do CLI

Leia no passo 7 do fluxo. Cada linha traz a mensagem do `inboundfy`, a causa
provável e a ação. Nunca contorne a recusa editando o frontmatter à mão: o
índice e o calendário continuariam com o estado antigo e a aprovação
perderia a ligação com o relatório.

| Mensagem do CLI | Causa | Ação |
| --- | --- | --- |
| `Estado não suportado: <x>` | Estado digitado fora dos seis (por exemplo `pronto`, `em revisão`) | Usar `rascunho`, `revisao`, `aprovado`, `agendado`, `publicado` ou `arquivado`, sem acento em `revisao`. |
| `Transição inválida: <a> → <b>` | Passagem fora da tabela | Fazer a passagem intermediária. Exemplo: `rascunho` → `revisao` → `aprovado`. |
| `--audit-report só pode ser usado ao aprovar uma peça.` | Opção usada em outro estado | Repetir sem a opção. |
| `A aprovação exige --audit-report ...` | Aprovação vinda de `revisao` sem relatório | Acionar a validadora do canal. |
| `O relatório precisa identificar a peça <id>.` | Linha `ID da peça` ausente, com outro rótulo ou outro ID | Corrigir o relatório pela validadora. |
| `O relatório precisa apontar para <caminho>.` | Linha `Asset` com caminho diferente (pasta renomeada, caminho absoluto) | Confirmar o caminho no índice; se a pasta mudou, acionar `inboundfy-catalogo` antes. |
| `O relatório precisa registrar o SHA-256 completo da peça.` | Hash abreviado ou ausente | Copiar o hash completo de `inboundfy content digest <id>`. |
| `O SHA-256 do relatório não corresponde ao arquivo atual da peça.` | Texto mudou depois do relatório | Rodar a validadora sobre a versão atual. |
| `O relatório precisa declarar **Veredito:** aprovado.` | Relatório reprovado ou impedido | Devolver a peça à especialista com os achados. |
| `A peça não tem uma validação vinculada ...` | Tentativa de agendar ou publicar peça nunca aprovada pelo CLI | Voltar para `revisao` e aprovar com relatório. |
| `O arquivo mudou depois da validação ...` | Edição depois da aprovação | Voltar para `revisao`, validar e aprovar de novo. |
| `Uma peça publicada precisa de URL HTTP(S) e data válida ...` | Falta `--url` ou `--published-at` | Pedir ao usuário a URL pública e a data real. |
| `A data de publicação precisa usar o formato AAAA-MM-DD.` | Data como `24/11/2026` | Converter para `2026-11-24`. |
| `A URL informada precisa usar HTTP ou HTTPS.` | Link sem protocolo ou de outro tipo | Usar o endereço completo com `https://`. |
| `Peça não encontrada: <id>` | ID errado ou índice desatualizado | Conferir com `inboundfy-catalogo`. |
| `Índice inválido: .inboundfy/indices/conteudos.json` | JSON corrompido ou `schemaVersion` diferente de 1 | Acionar `inboundfy-catalogo` no modo reconstrução. |

## Saúde do pipeline

Use estes sinais numa revisão semanal ou mensal. Os prazos são pontos de
partida; ajuste ao ritmo do projeto.

| Sinal | Leitura | Encaminhamento |
| --- | --- | --- |
| Peça em `rascunho` há mais de 14 dias | Brief fraco ou prioridade trocada | Perguntar se arquiva ou retoma com `inboundfy-planejamento`. |
| Peça em `revisao` há mais de 7 dias | Validação parada ou pendência factual | Ver o último relatório e cobrar a pendência. |
| Mais de duas rodadas de reprovação | Brief ou fonte incompleta | Devolver ao briefing, não à redação. |
| `agendado` com data já vencida | Publicação não registrada | Pedir URL e data, ou voltar para `aprovado`. |
| `aprovado` sem data há mais de 30 dias | Peça pode ter perdido atualidade | Conferir fatos antes de agendar. |

Tempo médio entre `rascunho` e `publicado`, por canal, é a métrica mais útil
para planejar calendário. Calcule com `createdAt` e `publishedAt` de
`conteudos.json`.
