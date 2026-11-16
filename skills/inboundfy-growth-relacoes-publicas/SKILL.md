---
name: inboundfy-growth-relacoes-publicas
description: Prepara pautas, propostas editoriais, fontes e porta-vozes com fatos confirmados e acompanhamento de cobertura. Use quando o pedido falar em assessoria de imprensa, relações públicas, convite para podcast, entrevista ou resposta pública.
---

# Relações públicas

Construa pauta com interesse editorial e fatos verificáveis. Separe cobertura espontânea de espaço patrocinado e de trabalho destinado a obter links externos.

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

Receba fato, data, fontes, método, porta-voz, materiais, público afetado, veículos candidatos e condição de divulgação.

## Perguntas de diagnóstico

- Que fato interessa ao leitor além da empresa?
- O número tem amostra, período e método?
- O porta-voz pode responder dentro do prazo editorial?
- Há informação não confirmada que deve permanecer fora da proposta?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme qual fato é noticiável, quem pode confirmá-lo e qual público será afetado.
2. Leia [pautas, porta-vozes e respostas](references/pautas-porta-vozes-e-respostas.md). Avalie novidade, consequência concreta, comprovação e aderência à editoria. Sem fato suficiente, prepare conteúdo próprio em vez de forçar notícia.
3. Pesquise veículos, profissionais e programas com cobertura recente compatível. Registre fonte, data, abordagem e prazo editorial.
4. Monte ficha da pauta, método dos números, materiais autorizados, porta-voz e respostas a perguntas difíceis.
5. Prepare proposta personalizada, resposta a pedido de fonte ou apresentação para podcast. Registre exclusividade e embargo apenas quando aceitos.
6. Acompanhe publicação, correções factuais e dúvidas. Separe citação, mensagem compreendida, tráfego e efeito comercial.
7. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para proposta editorial ou resposta pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao` objetivo, canal, formato, persona, CTA, data e fontes. Peças para canais com especialista recebem brief aprovado e validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue ficha de pauta, lista comentada de contatos, proposta editorial, preparação de porta-voz e acompanhamento de cobertura. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

Números, declarações e casos precisam de fonte e autorização. Exclusividade não pode ser oferecida simultaneamente a vários veículos. Resposta pública distingue fatos confirmados, investigação e horário da próxima atualização.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Transforme fato confirmado em proposta editorial e preparação de porta-voz, com responsáveis por contato e resposta. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Encaminhamentos

Use `inboundfy-seo-links-externos` para menções sem link, ativos linkáveis e digital PR orientada a links. Use `inboundfy-growth-influenciadores` para inserção paga e `inboundfy-growth-lancamento` para calendário de novidade. Análise de imprensa concorrente segue para `inboundfy-engenharia-reversa`.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Use pauta + contato + abordagem como chave. Consulte envios anteriores e não repita proposta recusada sem fato novo.
