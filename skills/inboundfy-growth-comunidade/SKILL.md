---
name: inboundfy-growth-comunidade
description: Planeja participação em comunidades e grupos próprios com acolhimento, rituais, moderação e medição. Use quando o pedido falar em comunidade, grupo de clientes, participação entre membros, moderadores ou encontros recorrentes.
---

# Marketing de comunidade

Organize contribuições úteis e relações entre participantes. Escolha participação em grupos existentes ou operação de grupo próprio conforme demanda e capacidade de moderação.

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

Receba comunidades candidatas, estágio, objetivo, persona, regras de participação, disponibilidade dos moderadores e histórico de atividade.

## Perguntas de diagnóstico

- Qual problema leva os membros a voltar sem uma promoção?
- Quem responde quando uma pergunta fica sem retorno?
- Há demanda para outro grupo ou uma comunidade existente já atende?
- O participante pode ler e sair sem receber abordagem comercial?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme o propósito compartilhado, o estágio do grupo e a capacidade semanal de atendimento.
2. Leia [rituais e moderação](references/rituais-e-moderacao.md). Separe comunidade de suporte, aprendizagem, construção de produto e troca profissional. Priorize uma necessidade recorrente dos membros.
3. Mapeie regras, responsáveis e conversas recorrentes. Observe antes de propor oferta. Documente a permissão de divulgação de cada grupo.
4. Planeje acolhimento, primeira contribuição, ritual recorrente e resposta a dúvidas. Defina escala de moderação e encaminhamento privado.
5. Execute um piloto delimitado. Registre participação por coorte de entrada, ajuda entre membros e demandas que viram acervo.
6. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue plano comunitário, roteiro de acolhimento, calendário de rituais e registro de moderação. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

Cada ritual precisa ter utilidade, anfitrião, duração e alternativa quando ninguém participa. Toda divulgação respeita as regras locais. A medição distingue novos membros de participantes recorrentes.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Encaminhamentos

Use `inboundfy-growth-social` para perfis públicos, `inboundfy-growth-eventos` para encontros e `inboundfy-growth-referencias` para incentivos de indicação. Peça a `inboundfy-engenharia-reversa` a análise de comunidades públicas de referência, sem coletar conversas privadas.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Use comunidade + tópico + data como chave de contribuição. Não repita convites nem reabra advertências já tratadas.
