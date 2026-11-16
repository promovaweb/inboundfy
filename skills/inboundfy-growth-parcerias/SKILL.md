---
name: inboundfy-growth-parcerias
description: Seleciona parceiros complementares e entrega proposta de co-marketing com contrapartidas, custos, uso de marca e acompanhamento. Use quando o pedido falar em parceria entre empresas, campanha conjunta, divulgação cruzada ou acordo de distribuição.
---

# Parcerias de distribuição

Planeje ações conjuntas com valor para os dois públicos. Distinga co-marketing de revenda, integração técnica, comissão e cadastro em marketplace.

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

Receba objetivo, ofertas, personas, parceiros candidatos, ativos disponíveis, canais, verba, prazo e restrições de dados e marca. Aceite propostas de acordos entre empresas de `inboundfy-growth-referencias`; se houver comissão, preserve a regra para o programa de indicação.

## Perguntas de diagnóstico

- O parceiro atende a mesma pessoa com uma tarefa complementar?
- O que cada lado entrega além de um logotipo?
- A assimetria de audiência pode ser compensada por conteúdo ou acesso?
- O cadastro permite entender quem poderá entrar em contato?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme a complementaridade das ofertas, a audiência compartilhada e a capacidade de entrega dos dois lados.
2. Leia [acordos e contrapartidas](references/acordos-e-contrapartidas.md). Compare parceiros por público, complementaridade, reciprocidade e facilidade operacional. Comece por um piloto de escopo pequeno.
3. Mapeie ativos de cada lado e proponha entregas proporcionais ao valor oferecido. Audiência menor pode compensar com especialização ou produção.
4. Formalize responsáveis, datas, custos, uso de marca, aprovação, tratamento de contatos e condição de encerramento.
5. Prepare brief conjunto e links por origem. Execute a divulgação acordada e confronte entregas reais com o combinado.
6. Reúna resultados dos dois lados, qualidade dos contatos e esforço. Registre renovação, ajuste ou encerramento.
7. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue seleção de parceiros, proposta de piloto, acordo operacional, brief conjunto e balanço de contrapartidas. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

Cada entrega tem responsável, prazo e comprovação. O acordo define uso de marca, tratamento de contatos, custo e encerramento. Nenhum participante entra em base de parceiro por suposição.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Transforme candidatos e ativos disponíveis em acordo de co-marketing com contrapartidas verificáveis e responsáveis dos dois lados. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Encaminhamentos

Use `inboundfy-growth-eventos` para produzir encontro conjunto, `inboundfy-growth-referencias` para comissão e `inboundfy-growth-diretorios` para marketplace. Oportunidades de links editoriais seguem para `inboundfy-seo-links-externos`. Estudos de programas concorrentes seguem para `inboundfy-engenharia-reversa`.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Use parceiro + campanha + entrega como chave. Não repita convite recusado nem renove uso de marca automaticamente.
