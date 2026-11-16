---
name: inboundfy-growth-cro
description: Audita páginas e formulários comerciais e entrega diagnóstico, copy proposta e hipóteses de conversão. Use quando o pedido falar em CRO, landing page, formulário de orçamento, poucos leads ou abandono antes do envio.
---

# CRO de páginas e formulários

Use para avaliar a passagem da visita à ação comercial em páginas e formulários de contato, orçamento ou demonstração. Entregue diagnóstico e copy proposta ligados à origem do tráfego. Cadastro de conta segue para `inboundfy-growth-signup`.

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

Receba URL ou HTML, captura mobile, ID do acervo ou brief, ação principal, persona,
origem do tráfego, oferta e destino após envio. Solicite contagens por etapa e
período, reclamações e tentativas anteriores. Sem acesso à página, limite a
análise ao material recebido e marque o restante como não inspecionado.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md). Fixe conversão, população elegível, período e passagem posterior: clicar, enviar e virar oportunidade são etapas diferentes.
2. Compare a promessa da origem com título, benefício, preço e CTA da página. Registre trecho observado, fonte, consequência e ajuste proposto.
3. Audite hierarquia, prova atribuída, objeções, leitura mobile e formulário. Consulte [diagnóstico e aferição](references/diagnostico-e-afericao.md) antes de remover campos.
4. Separe erro funcional reproduzido de hipótese de mensagem. Ordene pelo alcance observado, proximidade da conversão e esforço de execução, sem prometer aumento.
5. Especifique a versão proposta e encaminhe cada hipótese a `inboundfy-experimentacao` com observação, URL ou peça, persona, canal, métrica, taxa atual, volume semanal, janela e restrições técnicas. Encaminhe eventos, UTMs, consentimento e testes de disparo para `inboundfy-rastreamento-conversao`, levando `.inboundfy/context/integracoes.md`.
6. Revise a copy com `inboundfy-copy-editor`, `inboundfy-copy-edicao` e `inboundfy-anti-slop`. Entregue o pacote à orquestradora ou à skill do canal.

## Saída

Salve diagnóstico Markdown no diretório de trabalho já definido pelo projeto,
com ID, entrada, fontes, persona, canal, oferta, estado e próxima ação. Inclua
tabela de achados, formulário proposto, variantes de título/CTA, hipótese,
métrica principal, limites de acompanhamento e responsáveis. Mantenha o campo
`brief` nas peças finais de pacote.

## Validação

- A análise distingue clique, envio confirmado e oportunidade aceita.
- Cada achado aponta local inspecionado e fonte; itens não vistos permanecem pendentes.
- Cada campo possui finalidade, responsável pelo uso e momento de coleta.
- Erro e sucesso foram descritos, incluindo envio repetido e falha de integração.
- A copy mantém a oferta da origem e usa apenas comprovação autorizada.
- O teste mede qualidade posterior e devolve dados insuficientes à medição.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Idempotência

Atualize o diagnóstico do mesmo ID com data, versão da página e nova janela de dados. Preserve hipóteses descartadas e copy aprovada. Uma comparação anterior/posterior fica descritiva até existir desenho que sustente atribuição.
