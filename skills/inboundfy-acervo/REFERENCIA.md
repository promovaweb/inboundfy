# Condução de um item do acervo até a saída

O ID liga a origem, os derivados, a pesquisa e as peças. A orquestração confere os arquivos antes de avançar; um arquivo criado como template não prova que a etapa foi executada.

## Diagnóstico de entrada e retomada

Pergunte se o material é novo, se existe ID relacionado e qual saída foi pedida. Consulte o índice antes de criar pasta. Se o título estiver ausente, siga a seleção de título prevista na skill.

| Entrada recebida | Primeira ação | Ponto de retomada |
| --- | --- | --- |
| Transcrição nova | Registrar origem sem edição | A0 e processamento |
| `brainstorm.md` aprovado de `inboundfy-brainstorm` | Registrar o arquivo como bruto, com a origem no caminho do brainstorm | A0, processamento e pesquisa que reaproveita as fontes já registradas |
| ID com processado pronto | Comparar derivados e auditoria A1 | FAQ ou pesquisa pendente |
| Pesquisa atualizada | Marcar derivados posteriores como superados | Base editorial e A2 |
| Pedido de peça sobre ID existente | Conferir base e seleção de persona | Matriz, brief e A3 |
| Pedido só de organização | Completar pacote de acervo | Entregar sem produzir peça |

## Roteiro verificável das onze etapas

1. Preparação: confira sentinelas, empresa, persona completa, canais ativos e estado do pipeline.
2. Registro: crie ou retome ID; preserve bruto e registre A0 em modo somente leitura.
3. Processamento: chame `inboundfy-processar-acervo`; confira A1 e FAQ de `inboundfy-extrair-faq`. Nos passos 3 a 7 e 9, leia [conteúdo das fases](references/conteudo-das-fases.md) para conferir cada derivado.
4. Pesquisa: chame `inboundfy-pesquisa-acervo`; confira consulta web, fontes abertas e divergências.
5. Base: chame `inboundfy-base-editorial`; confira afirmações com origem e A2.
6. Possibilidades: leia [estratégia do acervo](references/estrategia-do-acervo.md) neste passo. Preencha a matriz apenas para canais ativos.
7. Saída escolhida: use `inboundfy-planejamento` para registrar peça, calendário ou guarda para uso posterior. Confirme persona e recorte antes da etapa dependente.
8. Produção: chame `inboundfy-producao` e especialista pareada ao canal; peça longa passa por A4 antes da expansão.
9. Revisão: confira A5, relatório da validadora, A6 e formatação. Correção volta à produtora.
10. Estado e catálogo: use `inboundfy-pipeline` e `inboundfy-catalogo`; URL e data reais sustentam o registro de publicação.
11. Entrega: informe ID, caminhos, estado de cada arquivo, lacunas e próxima ação.

## Template de controle no README do acervo

```markdown
---
id: "<id>"
titulo: <título escolhido>
origem: <arquivo, relato ou URL>
recebido_em: <AAAA-MM-DD>
estado: rascunho
---
# <Título>

## Arquivos e fases
| Fase | Arquivo | Estado | Conferência |
| --- | --- | --- | --- |
| Origem | [bruto](bruto.md) | preservado | A0 somente leitura |
| Processamento | [processado](processado.md) | <estado> | A1 |
| Perguntas | [FAQ](faq.md) | <estado> | Respostas localizadas |
| Pesquisa | [pesquisa](pesquisa.md) | <estado> | Web e fontes abertas |
| Base | [base editorial](base-editorial.md) | <estado> | A2 |
| Possibilidades | [estratégia](estrategia.md) | <estado> | A3 |

## Saída escolhida
<Peça agora, calendário ou guarda; persona e canal quando aplicáveis.>

## Peças relacionadas
<ID, caminho, brief e relatório de validação de cada peça.>

## Pendências
<Pergunta, responsável, etapa afetada e próxima ação.>
```

## Exemplo completo: Pinhão Bicicletas, empresa fictícia

**Antes:** uma transcrição solta, intitulada “avisos”, contém seis envios e quatro respostas, mas nenhuma data completa ou conferência de visitas. Não existe registro da origem nem seleção de saída.

**Execução:** o usuário escolhe o título “Avisos de revisão pelo WhatsApp”. O índice recebe `0042`. O bruto permanece igual. O processado remove repetições; a FAQ distingue respostas de visitas. A pesquisa registra que dados internos de comparecimento exigem agenda, sem atribuir à oficina resultados de fontes públicas. A base conserva seis envios e quatro respostas como observação isolada. O usuário escolhe guardar o pacote para uso posterior.

**README entregue:**

```markdown
---
id: "0042"
titulo: Avisos de revisão pelo WhatsApp
origem: transcrição enviada pelo usuário
recebido_em: 2026-10-20
estado: revisao
---
# Avisos de revisão pelo WhatsApp

## Arquivos e fases
| Fase | Arquivo | Estado | Conferência |
| --- | --- | --- | --- |
| Origem | [bruto](bruto.md) | preservado | A0 registrado |
| Processamento | [processado](processado.md) | conferido | A1 registrado |
| Perguntas | [FAQ](faq.md) | parcial | Visitas sem resposta |
| Pesquisa | [pesquisa](pesquisa.md) | parcial | Pergunta interna enviada ao responsável |
| Base | [base editorial](base-editorial.md) | parcial | A2 registra limite de uso |
| Possibilidades | [estratégia](estrategia.md) | rascunho | Sem promessa de conversão |

## Saída escolhida
Guardar o pacote para uso posterior. Nenhuma peça foi produzida ou agendada.

## Peças relacionadas
Nenhuma.

## Pendências
Confirmar data e visitas com a responsável pela agenda. Retomar pesquisa e base antes de alegar resultado comercial.
```

O pacote pode ser entregue como registro parcial, sem receber aprovação para publicação. No pedido futuro de produção, a orquestradora retoma o mesmo ID e confere novamente as fontes alteradas.

## Checklist numerado do item

1. Índice foi consultado antes de criar ID.
2. Bruto está preservado.
3. Processado conserva sentido e tem A1.
4. FAQ separa respostas, lacunas e conflitos.
5. Pesquisa inclui web para material novo ou registra impossibilidade de concluir essa etapa.
6. Base possui afirmações localizadas e A2.
7. Matriz usa somente canais ativos.
8. Escolha de saída e persona foram registradas antes da produção.
9. Toda peça produzida possui brief, A5 e validadora pareada.
10. A6 compara o conjunto quando existem várias peças.
11. Pipeline, calendário e índices representam o estado real.
12. Entrega informa arquivos e próxima ação, sem depender da conversa.

## Erros comuns

- Criar outro ID depois de interrupção. Retome o item já registrado.
- Tratar template vazio como fase pronta. Abra o conteúdo e a conferência correspondente.
- Marcar publicado porque o texto foi aprovado. Exija URL e data reais.
- Produzir peças quando o pedido foi guardar o material. Registre a saída escolhida.
- Pular a pesquisa porque a transcrição parece completa. A verificação web continua obrigatória para item novo.

## Arquitetura aplicada

A preparação segue [fontes](../_shared/01-preflight-e-fontes.md). Os derivados seguem [artefato](../_shared/02-contrato-de-artefato.md) e [contexto](../_shared/05-contexto-editorial.md). A saída escolhida segue [handoff](../_shared/03-interacao-e-handoff.md); interrupções seguem [retomada](../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

Leia `METODOLOGIA.md` para fases, `CONTEXTO.md` para fontes e `inboundfy-anti-slop/ETAPAS.md` para A0 a A6. O acervo conserva a cadeia inteira. Cada especialista responde pelo seu artefato; a orquestradora verifica o retorno antes de avançar.
