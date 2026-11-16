---
name: inboundfy-growth-distribuicao
description: Organiza a distribuição de conteúdo do acervo com destinos, adaptações, permissões e medição por origem. Use quando o pedido falar em divulgar conteúdo, circular artigo, republicar guia, propor contribuição editorial ou reaproveitar gravação.
---

# Distribuição de conteúdo

Leve conteúdo já sustentado pelo acervo a leitores compatíveis. Cadastros em listas e marketplaces seguem para `inboundfy-growth-diretorios`. Conquista de backlinks segue para `inboundfy-seo-links-externos`.

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

Receba ID do acervo, peça canônica, persona, destinos candidatos, capacidade de adaptação, orçamento e objetivo de conversão. Aceite planos de material rico, ferramenta, evento ou lançamento como origem do pedido; identifique o asset e seu estado. Se houver apenas brief ou gravação bruta, prepare a produção pelo `inboundfy-planejamento` antes da distribuição.

## Perguntas de diagnóstico

- O conteúdo já responde à pergunta do leitor sem depender de uma venda?
- O destino aceita contribuição da marca e link externo?
- Há novo contexto para justificar outra distribuição?
- Qual evento diferencia visita de consumo útil?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme qual conteúdo está pronto, quem deve recebê-lo e qual ação define uma visita útil.
2. Leia [rotas e adaptações](references/rotas-e-adaptacoes.md). Monte uma matriz de destinos por adequação de público, intenção, permissão e esforço. Priorize uma rodada pequena com resposta mensurável.
3. Converta a peça principal em versões autossuficientes para cada destino. Registre trecho, contribuição original, CTA e página canônica.
4. Defina agenda de envios, responsável, janela de retorno e chave para evitar duplicatas. Valide URL, UTM e experiência móvel.
5. Compare visitas úteis e conversões por destino. Atualize a próxima rodada com o aprendizado, sem repetir envios recusados.
6. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue matriz priorizada de destinos, briefs de adaptação, agenda de envios e leitura de conversão por origem. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

Cada destino precisa ter público compatível, regra consultada, URL, adaptação, responsável e data. Um envio recusado não entra automaticamente em nova tentativa. Cliques e conversões precisam usar a mesma janela declarada.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Encaminhamentos

Encaminhe cadastros a `inboundfy-growth-diretorios`, relacionamento para backlinks a `inboundfy-seo-links-externos` e análise de distribuição de concorrente a `inboundfy-engenharia-reversa`. Use `inboundfy-growth-parcerias` para acordos editoriais e `inboundfy-growth-social` para a rotina dos perfis.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Identifique cada envio por acervo + destino + versão. Reaproveitar o acervo não autoriza reenviar a mesma proposta.
