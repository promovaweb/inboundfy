---
name: inboundfy-growth-lancamento
description: Planeja lançamentos com prontidão, mensagens por público, calendário e acompanhamento da adoção. Use quando o pedido falar em lançar produto, anunciar recurso, abrir acesso antecipado, lista de espera ou campanha de novidade.
---

# Lançamento

Organize a comunicação de uma novidade disponível ou de um acesso antecipado claramente delimitado. A promessa deve corresponder ao que a pessoa consegue usar na data anunciada.

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

Receba novidade, data e fuso, público, oferta, disponibilidade, prova, restrições, porta-voz, capacidade de suporte e histórico de anúncios.

## Perguntas de diagnóstico

- Qual tarefa já pode ser concluída de ponta a ponta?
- Quais pessoas precisam desta mudança agora?
- A equipe consegue atender toda a demanda anunciada?
- Qual diferença existe entre entrar na lista e começar a usar?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme o que mudou, para quem a mudança importa e qual ação estará disponível.
2. Leia [prontidão e calendário](references/prontidao-e-calendario.md). Classifique o alcance da novidade e confira prontidão de produto, atendimento e conversão antes de ampliar divulgação.
3. Construa mensagem por persona com mudança concreta, demonstração, fonte e CTA. Separe anúncio a clientes de aquisição de novos usuários.
4. Planeje preparação, acesso controlado, abertura e acompanhamento com dependências, responsáveis, canais próprios e parceiros.
5. Teste página, inscrição, pagamento, ativação, suporte e medição. Registre condições para reduzir divulgação ou adiar abertura.
6. Acompanhe dúvidas, ativação e adoção por coorte. Atualize páginas afetadas e entregue próximos experimentos.
7. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue plano de lançamento, mapa de mensagens, cronograma, briefs por canal, lista de prontidão e leitura de adoção. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

Data, preço, acesso, limites, prova e CTA precisam coincidir em todas as peças. Abertura depende de teste completo da tarefa prometida e responsável de suporte disponível.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Encaminhamentos

Use `inboundfy-growth-diretorios` para listas e marketplaces, `inboundfy-growth-distribuicao` para circulação editorial e `inboundfy-growth-relacoes-publicas` para pauta noticiável. Use `inboundfy-engenharia-reversa` para estudar anúncios de referência. Encaminhe ativação a `inboundfy-growth-onboarding` e medição a `inboundfy-rastreamento-conversao`.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Identifique novidade + coorte + canal. Não reenvie anúncio já publicado ao ajustar datas internas.
