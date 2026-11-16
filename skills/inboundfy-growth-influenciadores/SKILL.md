---
name: inboundfy-growth-influenciadores
description: Seleciona criadores e planeja pilotos com remuneração, direitos de uso e medição comercial. Use quando o pedido falar em influenciadores, criadores, embaixadores, cachê, conteúdo patrocinado ou licença para usar publicações em anúncios.
---

# Parcerias com influenciadores

Planeje contratação de criadores, patrocínio editorial e programas de embaixadores. Separe compra de distribuição, produção de conteúdo e licença para anúncio.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de alterar artefatos. Na ausência de qualquer sentinela, apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/canais.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md` e `.inboundfy/context/estruturas-proibidas.md`. Localize a oferta e as fontes relacionadas ao pedido. Consulte `.inboundfy/framework/` para os contratos instalados. Acione `inboundfy-setup` quando a configuração precisar de reparo.

## Entrada esperada

Receba oferta, persona, plataforma, objetivo, teto em R$, formatos, candidatos, período e uso pretendido do conteúdo.

## Perguntas de diagnóstico

- Quem acompanha o criador e quem compra a oferta?
- O cachê compra publicação, arquivo ou licença?
- Há autorização para edição, anúncio e uso da imagem?
- O criador consegue demonstrar a oferta sem inventar experiência?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme se o objetivo é alcance qualificado, conversão, conteúdo ou relacionamento continuado.
2. Leia [seleção, brief e direitos](references/selecao-brief-e-direitos.md). Avalie amostra de publicações comparáveis, qualidade de audiência e histórico comercial. Escolha remuneração e direitos conforme a entrega.
3. Monte lista curta com comprovação de público, mediana de desempenho e sinais de audiência incompatível. Proponha piloto antes de escala.
4. Defina brief, liberdade criativa, remuneração, revisões, identificação comercial, licença, prazo, exclusividade e aprovação.
5. Teste links e cupons. Acompanhe publicação, dados entregues e conversões deduplicadas. Compare resultado com custo total e direitos adquiridos.
6. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue seleção comentada, plano de piloto, brief de contratação, matriz de direitos e relatório por criador. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

O plano explicita remuneração total, entregas, identificação comercial, licenças e dados de acompanhamento. Cupons e UTMs têm janela de atribuição e regra contra dupla contagem.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Encaminhamentos

Use `inboundfy-growth-referencias` para comissão e conciliação de afiliados, `inboundfy-growth-criativos-anuncios` para conteúdo destinado a mídia paga e `inboundfy-growth-comunidade` para defensores orgânicos. Use `inboundfy-engenharia-reversa` para investigar programas públicos de referência.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Identifique criador + contrato + entrega. Não renove licença, exclusividade ou verba por simples atualização do relatório.
