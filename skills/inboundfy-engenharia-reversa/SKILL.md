---
name: inboundfy-engenharia-reversa
description: Produz um estudo de canais, ofertas, funil e cadência de uma referência, com fontes datadas e hipóteses de teste próprias. Use quando o pedido for entender o marketing de um concorrente, reconstruir seu funil ou estudar suas campanhas.
---

# Engenharia reversa de marketing

Use para reconstruir o funcionamento observável do marketing de uma referência e propor testes próprios. O resultado é um estudo com limites e hipóteses, sem reprodução de copy, telas ou identidade da outra empresa. Um retrato de posicionamento sem reconstrução temporal pode seguir para `inboundfy-concorrentes`.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Quando faltar uma sentinela, encerre a escrita e apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/ofertas.md`, `.inboundfy/context/concorrentes.md`, `.inboundfy/context/canais.md`, `.inboundfy/context/proibicoes.md` e `.inboundfy/estrategia.md`. Consulte `.inboundfy/framework/`, fontes locais e pesquisas existentes. O estudo não altera o posicionamento canônico sem encaminhamento a `inboundfy-copy-posicionamento`.

## Entrada esperada

Receba domínio ou marca-alvo, pergunta central, período, mercado, nível de profundidade, recursos do projeto e orçamento de pesquisa. Declare quais contas, ferramentas e dados estão acessíveis. Cadastro, compra e contato com vendas só ocorrem se o pedido já autorizar essas ações, com conta real e gasto delimitado.

Aceite perfis datados de `inboundfy-concorrentes` com URLs, persona e lacunas do funil como ponto de partida. Complete período, recorte e teto de pesquisa antes da coleta.

## Perguntas de diagnóstico

- Qual comportamento da referência o projeto precisa compreender?
- Que diferença de público, capital, preço ou maturidade limita a comparação?
- Quais canais podem ser acompanhados com dados públicos e quais exigem acesso autorizado?
- Qual teste cabe nos recursos do projeto nas próximas semanas?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md). Defina recorte: panorama, conteúdo, funil ou acompanhamento. Fixe período, fontes, custo máximo e perguntas; pare de coletar quando o conjunto já responder ao recorte ou atingir o teto.
2. Reúna páginas de oferta, preços, casos, anúncios públicos, publicações e documentos oficiais. Salve URL, data de publicação quando disponível, data da consulta e classificação: observado, declarado ou hipótese. Conteúdo sem acesso fica como não observado.
3. Reconstrua aquisição, captura, primeiro resultado, cobrança, recorrência e indicação. Para cada passagem, indique oferta, mensagem, CTA, destino e condição de acesso. Use [coleta e hipóteses](references/coleta-e-hipoteses.md) para inspeção temporal e leitura de conteúdo.
4. Registre mudanças datadas: páginas, preço, lançamento, anúncios, frequência editorial e contratação. Compare com a série de tráfego disponível usando uma única fonte por série. Sem série comparável, entregue cronologia sem atribuição de crescimento.
5. Compare a referência com o projeto na mesma unidade e período. Uma estimativa externa só é comparável com estimativa da mesma origem; os dados próprios aprofundam a análise em outra tabela.
6. Transforme mecanismos observáveis em testes próprios: público, proposta, custo, responsável, prazo, medida principal e condição para continuar. Relacione cada teste à fonte e à limitação mais relevante.
7. Entregue o estudo com lacunas e próximo teste. Envie anúncios a `inboundfy-growth-anuncios`, conteúdo a `inboundfy-growth-social`, captura a `inboundfy-growth-cro`, rotinas a `inboundfy-growth-loops` e medição a `inboundfy-rastreamento-conversao`.

## Saída

Salve `engenharia-reversa-<alvo>-<id>.md` no diretório de pesquisa existente do projeto, com mapa do funil, registro temporal, quadro comparativo, hipóteses priorizadas e fontes com datas. Inclua ID, grupo capacidade, persona, estado, coleta não realizada, gasto, arquivos, pendências e próxima ação.

## Validação

- Cada observação aponta para fonte acessada e data de consulta.
- Declarações da empresa não aparecem como resultado auditado.
- A presença de pixel não vira prova de gasto em anúncios.
- Comparações respeitam fonte, período, país e unidade.
- Nenhuma relação temporal foi descrita como causalidade comprovada.
- Cada teste tem mecanismo, medida, prazo, custo e skill executora.
- O estudo distingue peças efetivamente vistas de descrições textuais das peças.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** alvo, recorte, período, acessos e teto de pesquisa;
- **transformação:** reconstrução observável do funil e formulação de testes próprios;
- **saída:** estudo datado com cronologia, hipóteses e limites;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Use alvo + recorte + período como chave. Preserve coleta anterior e acrescente mudanças datadas no acompanhamento. Uma página que deixou de abrir não apaga a observação histórica. Não duplique cadastro, compra ou solicitação de demonstração durante nova leitura.
