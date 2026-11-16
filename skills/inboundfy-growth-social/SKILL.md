---
name: inboundfy-growth-social
description: Entrega plano de presença social com papéis por canal, pilares, formatos, escuta, briefs e cadência de produção e resposta. Use quando o pedido falar em redes sociais, calendário de posts, séries de conteúdo, rotina dos perfis ou métricas sociais.
---

# Presença social

Organize a rotina dos perfis e as conversas públicas da marca. A circulação editorial além dos perfis fica com `inboundfy-growth-distribuicao`; grupos e moderação ficam com `inboundfy-growth-comunidade`.

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

Receba perfis ativos, persona, objetivos, acervos, histórico por formato, capacidade de produção, atendimento e oferta.

## Perguntas de diagnóstico

- Qual tarefa a pessoa procura resolver nesse canal?
- O perfil tem material próprio para sustentar a cadência?
- Quem responde perguntas após a publicação?
- A medida escolhida descreve alcance, consumo ou resultado comercial?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme o papel de cada perfil, as perguntas da persona e as horas reais de produção e resposta.
2. Leia [pautas, formatos e escuta](references/pautas-formatos-e-escuta.md). Escolha poucos canais por tarefa do público. Transforme o acervo em pilares e séries, com função, formato, CTA e medida próprios.
3. Faça escuta de perguntas e publicações relevantes. Registre fontes, contexto e oportunidades de contribuição sem coletar dados privados.
4. Monte briefs de posts, carrosséis e vídeos com abertura concreta, entrega autossuficiente, acessibilidade e CTA compatível.
5. Defina cadência sustentável, revisão, publicação autorizada e atendimento de respostas. Prepare reaproveitamentos com recortes diferentes.
6. Compare desempenho por série e formato. Investigue retenção, qualidade das conversas e conversão antes de aumentar volume.
7. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue plano social com papéis por canal, pilares, calendário, briefs de formato, rotina de escuta e leitura de resultados. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

Cada peça precisa funcionar sozinha, ter fonte, persona, formato, CTA e acessibilidade. O calendário inclui tempo de resposta. Comparações usam o mesmo denominador e janela.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Transforme acervo e capacidade da equipe em plano social com briefs por formato e rotina de resposta. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Encaminhamentos

Use `inboundfy-especialista-instagram` e `inboundfy-especialista-linkedin` para peças com brief aprovado, seguidas das respectivas validadoras. Use `inboundfy-growth-distribuicao` para rotas editoriais, `inboundfy-growth-comunidade` para grupos e `inboundfy-engenharia-reversa` para estudar perfis de referência.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Use acervo + canal + formato + recorte como chave. Não republique peça idêntica por falha de sincronização do calendário.
