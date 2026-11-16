---
name: inboundfy-growth-ferramentas-gratuitas
description: Planeja calculadoras, geradores e diagnósticos gratuitos com especificação, captura e medição de aquisição. Use quando o pedido falar em ferramenta gratuita, calculadora online, gerador, teste interativo ou recurso útil para atrair compradores.
---

# Ferramentas gratuitas de aquisição

Transforme uma tarefa anterior à compra em ferramenta útil: cálculo, geração, teste ou diagnóstico. Esta skill entrega o brief e a operação de aquisição. A implementação fica com a equipe executora; recursos para download seguem para `inboundfy-growth-lead-magnet`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`.
Se faltar uma sentinela, apresente: “O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio.” Encerre sem criar artefatos até o reparo.

Leia `AGENTS.md`, `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/ofertas.md`,
`.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` quando aplicável,
`.inboundfy/context/canais.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/estruturas-proibidas.md` e aprendizados confirmados.
Consulte o acervo relacionado, as fontes relevantes registradas no projeto,
`.inboundfy/pipeline.md` e os documentos do método em `.inboundfy/framework/`.
Se faltar dado comercial, encaminhe para `inboundfy-contexto-oferta` sem preenchê-lo
por suposição. Leia `ESCRITA.md` antes de redigir texto público.

## Entrada esperada

Receba problema recorrente, público comprador, produto pago relacionado, fontes
das regras, dados de demanda, prazo, orçamento de construção e manutenção.
Informe destino do resultado, necessidade de API, dados recebidos e capacidade
de suporte. Sem demanda conhecida, entregue plano de piloto antes de estimar receita.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md). Registre tarefa, alternativa manual, situação de uso e motivo para continuar no produto pago.
2. Compare tipos de ferramenta e formas de construção. Selecione uma tarefa e descreva o que ficará fora da primeira entrega.
3. Consulte [especificação e operação](references/especificacao-e-operacao.md) para definir entrada, unidade, fórmula, saída, erros, privacidade e casos de aceite.
4. Projete utilidade antes da captura. Informe o que será aberto, o que exige contato e como exportar sem expor dados.
5. Calcule cenários de custo e aquisição com premissas explícitas. Planeje página, conteúdo de apoio e distribuição nos canais ativos.
6. Encaminhe a `inboundfy-growth-cro` URL ou HTML, captura mobile, ação, persona e origem do tráfego; se a página ainda não existe, registre a auditoria como futura. Leve tema ou URL, região e objetivo a `inboundfy-seo`. Prepare brief de relacionamento para `inboundfy-especialista-email` com objetivo, etapa, público, ângulo, fontes e CTA. Eventos e testes de disparo seguem para `inboundfy-rastreamento-conversao`, com `.inboundfy/context/integracoes.md`.
7. Revise promessa e exemplos com `inboundfy-copy-editor` e `inboundfy-anti-slop`. Entregue brief implementável, proprietário e rotina de manutenção.

## Saída

Salve brief Markdown no diretório do acervo ou de trabalho definido pelo projeto,
com ID, grupo growth, estado, objetivo, persona, canal, oferta, fontes, próximos
responsáveis e pendências. Inclua contrato da ferramenta, casos de teste,
cenários econômicos, plano de distribuição e instrução de leitura do resultado.
A skill não declara ferramenta publicada sem implementação e conferência reais.

## Validação

- A tarefa funciona sem compra e entrega resultado compreensível.
- Toda regra tem fonte, versão, unidade e limite de aplicação.
- O brief cobre zero, valor negativo, decimal brasileiro, indisponibilidade e repetição.
- A captura informa finalidade e não esconde o resultado prometido.
- Custos incluem manutenção, distribuição, APIs e suporte.
- O plano distingue uso, lead qualificado e cliente, sem atribuir receita a todo visitante.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Idempotência

Mantenha ID e versão do contrato de cálculo. Se fórmula, fonte ou unidade mudar, registre os resultados afetados e repita os casos de aceite. Preserve brief aprovado e histórico de hipóteses; não recrie ferramenta já validada sem pedido.
