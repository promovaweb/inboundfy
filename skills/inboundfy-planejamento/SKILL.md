---
name: inboundfy-planejamento
description: Leva o material pelas etapas 00 a 06 do pipeline editorial (triagem, saneamento, pesquisa, oportunidades, brief, produção e auditoria) e registra brief, prioridade, data e estado em calendario/AAAA-MM.md, sem escrever copy final. Use quando a pessoa pedir pauta, brief, calendário editorial, prioridades do mês ou o que publicar e quando.
---

# Planejamento editorial

Transforma material aprovado em peças planejadas: decide quais peças valem a
pena, a ordem, o brief e a data de cada uma, roteia cada brief para a
especialista certa e audita o pacote no fim. Não escreve copy final. A
especialista do canal escreve. A validadora pareada aprova.

## Modos de execução

| Modo | Quando | Etapas | Saída principal |
| --- | --- | --- | --- |
| Pacote | Material bruto chegou direto ao pipeline (transcrição, peça-base, release, brief informal, item alocado por `inboundfy-estrategia`) | 00 a 06 de `references/etapas/` | Diretório do pacote com `04-briefs/`, `97-ativos-finais/` e `06-auditoria/` |
| Acervo | `inboundfy-acervo` chegou à fase 7 com `estrategia.md` do item pronto | 03, 04 e calendário | Brief da peça, pasta final aberta e linha em `calendario/AAAA-MM.md` |
| Peça avulsa | Pedido já nomeia canal, tema e objetivo | 04, 05 e 06 | Brief mínimo, peça validada e auditoria |

## Etapas internas

| Etapa | Arquivo | Faz | Marco anti-slop |
| --- | --- | --- | --- |
| 00 | [00-triagem](references/etapas/00-triagem.md) | Recebe o material, escolhe pacote ou peça avulsa e preserva a origem | A0 |
| 01 | [01-saneamento](references/etapas/01-saneamento.md) | Limpa e organiza o material sem voz editorial | A1 |
| 02 | [02-pesquisa](references/etapas/02-pesquisa.md) | Extrai teses, dados, dores, objeções, FAQ e entidades | A2 |
| 03 | [03-oportunidades](references/etapas/03-oportunidades.md) | Cruza ativos com canais e prioriza peças | A3 |
| 04 | [04-briefing](references/etapas/04-briefing.md) | Escreve o brief de cada peça com estrutura persuasiva | A3 |
| 05 | [05-producao](references/etapas/05-producao.md) | Roteia para a especialista e a validadora pareada | A4 e A5 |
| 06 | [06-auditoria](references/etapas/06-auditoria.md) | Consolida aprovações e audita o pacote contra o brief | A6 |

Informe o nome da etapa para retomar só uma parte. Sem etapa indicada, o modo
pacote executa as sete em sequência.

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar qualquer artefato.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se
um deles faltar, apresente o alerta canônico e acione `inboundfy-setup`. A
metodologia e os templates ativos ficam em `.inboundfy/framework/`.

- `.inboundfy/context/empresa.md` e `.inboundfy/estrategia.md`: canais ativos,
  objetivo e regras de distribuição.
- `.inboundfy/context/publico.md`: personas para cada brief.
- `context/canais.md`: diretórios de trabalho, cadência e skill de cada
  canal.
- `context/marca-voz.md`, `glossario.md`, `proibicoes.md`,
  `estruturas-proibidas.md` e `aprendizado.md`: restrições registradas no
  brief.
- `context/produtos.md`, `servicos.md`, `ofertas.md` e `ferramentas.md`:
  conferência de entidades e oferta.
- `context/campanhas.md`: origem do pacote quando houver campanha.
- `.inboundfy/pipeline.md`, o acervo e o índice de peças, no modo acervo.
- `LIMPEZA-MATERIAL-BRUTO.md`, `TRADUCAO.md` e `ESTRUTURAS-PERSUASIVAS.md`,
  nas etapas que os citam.

Se metodologia, template, diretório registrado ou arquivo de contexto estiver
ausente ou fora do caminho canônico, interrompa e acione `inboundfy-setup`.

## Entrada esperada

- Modo pacote: material bruto de qualquer natureza ou item alocado no
  calendário por `inboundfy-estrategia`. Ideia curta sem tese chega por
  `inboundfy-brainstorm` como `brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md`
  aprovado, quando a peça tem um só canal.
- Modo acervo: ID do item com `estrategia.md` e base editorial, uso
  escolhido, canal, persona, data desejada e prioridade.
- Peça avulsa: pedido com canal, tema, objetivo e restrições.
- Retorno da produção: candidata aprovada pela validadora pareada, com o
  relatório de validação e o digest de `inboundfy content digest <id>`. Esse
  pacote entra direto na etapa 06 (auditoria) do pacote ou da peça avulsa.

## Fluxo

1. Faça o preflight, leia os contextos e identifique o modo pela tabela.
2. Leia [REFERENCIA.md](REFERENCIA.md) e o arquivo da etapa atual.
3. Modo pacote: execute as etapas 00 a 06 na ordem, com o marco anti-slop de
   cada etapa. Uma etapa só começa depois que o marco anterior foi
   registrado.
4. Modo acervo:
   1. pergunte se o item será produzido agora, guardado para uma data futura
      ou mantido como base;
   2. aplique a priorização de
      [references/priorizacao-e-capacidade.md](references/priorizacao-e-capacidade.md)
      e confira a capacidade do canal no mês;
   3. escreva o brief da peça pela etapa 04;
   4. abra a pasta final em `canais/<canal>/<id>-<data>-<slug>/` e registre a
      linha no mês correspondente pelo formato de
      [references/calendario-mensal.md](references/calendario-mensal.md);
   5. execute `inboundfy-anti-slop` no marco A3 e registre
      `auditorias/anti-slop/03-estrategia-brief.md` antes de encaminhar o
      brief para `inboundfy-producao`;
   6. atualize o índice do calendário sem alterar o conteúdo do acervo.
5. Peça avulsa: execute a etapa 04 com brief mínimo, depois 05 e 06.
6. Defina a métrica de cada peça no brief com
   [references/medicao-por-peca.md](references/medicao-por-peca.md).
7. Em escolhas com caminhos materialmente diferentes (ângulo, persona, CTA),
   apresente três opções com a recomendada primeiro e aguarde. Quando a
   pessoa tiver pedido o fluxo completo sem perguntas, escolha a recomendada
   e registre a seleção.
8. Encerre cada item, validação incluída, antes de iniciar o próximo item do
   lote.

## Saída

- Modo pacote: diretório do pacote com a estrutura de `METODOLOGIA.md`
  (`00-entrada/`, `01-saneamento/`, `02-pesquisa-e-ativos/`,
  `03-planejamento/`, `04-briefs/`, `06-auditoria/`, `97-ativos-finais/`).
- Modo acervo: brief da peça, pasta final em `canais/` e checklist em
  `calendario/AAAA-MM.md`, legível no GitHub e alinhado ao frontmatter da
  peça.
- Todo artefato final em Markdown carrega no frontmatter o campo `brief`
  apontando para o brief que o originou.

## Validação

- O material original em `00-entrada/` ou `bruto.md` permanece intacto.
- Cada marco anti-slop da etapa executada está registrado antes da etapa
  seguinte.
- Toda oportunidade aponta ativos de apoio e prioridade justificada.
- Todo brief tem canal, persona, objetivo, ângulo, ativos, restrições,
  estrutura persuasiva (ou motivo da ausência), métrica e regra de pronto.
- Nenhum brief segue para produção sem o ciclo A3 registrado.
- Todo asset tem relatório aprovado da validadora pareada antes da
  auditoria.
- Toda linha do calendário aponta para uma peça ou marca a ação pendente.
  Data, canal, persona e estado coincidem com o frontmatter.

## Idempotência

Reexecutar reconcilia pelo ID e não duplica tarefas. Material novo para um
pacote existente abre pacote novo. Rodar uma etapa de novo atualiza o mesmo
arquivo e preserva oportunidades aprovadas, briefs aprovados e peças
produzidas. Refazer uma peça já produzida exige confirmação da pessoa.

## Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria.
Não substitua a especialista que escreve ou monta o asset. Divergência de
estratégia de campanha volta para `inboundfy-estrategia`.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** material bruto, item do acervo ou pedido de peça avulsa;
- **transformação:** etapas do modo escolhido, com marcos anti-slop;
- **saída:** pacote, brief, pasta final e linha de calendário;
- **handoff:** `inboundfy-especialista-<canal>` com a validadora pareada,
  `inboundfy-producao` no modo acervo, ou `inboundfy-pipeline` depois da
  auditoria.
