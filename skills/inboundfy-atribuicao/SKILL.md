---
name: inboundfy-atribuicao
description: Entrega um relatório comparado de fontes, modelos e janelas de atribuição, com distorções e próximo teste. Use quando os números de GA4, mídia e CRM divergem ou quando o pedido for ligar conteúdo, canais e receita.
---

# Atribuição de marketing

Use quando os números de canais divergem entre ferramentas, quando alguém
pergunta qual ação gera venda ou quando o projeto precisa ligar uma peça de
conteúdo a oportunidade e receita. A skill lê dados que já existem, compara
modelos e diz o que cada número consegue sustentar. Ela não instala tag,
pixel nem formulário: falhas de captura vão para
`inboundfy-rastreamento-conversao`. Ela também não desenha o plano de
métricas do zero: isso é trabalho de `inboundfy-metricas`.

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

## Quando usar e quando não usar

| Situação | Skill certa |
| --- | --- |
| GA4, Meta Ads e CRM mostram contagens diferentes para a mesma venda | `inboundfy-atribuicao` |
| A diretoria quer saber se o blog ajuda a vender | `inboundfy-atribuicao` |
| O orçamento vai mudar entre canais e alguém pede base para isso | `inboundfy-atribuicao`, com teste de incrementalidade |
| Ainda não existe lista de eventos, metas e painel | `inboundfy-metricas` |
| O formulário não grava UTM, o pixel duplica compra ou o clique no WhatsApp some | `inboundfy-rastreamento-conversao` |
| A pergunta é qual versão de página converte mais | `inboundfy-experimentacao` |

## Perguntas de diagnóstico

Faça estas perguntas antes de abrir qualquer relatório. As respostas mudam o
modelo e o teste recomendados.

1. Qual conversão conta como resultado: lead, oportunidade, venda paga,
   primeira mensalidade, recompra?
2. Qual sistema é a fonte da verdade para essa conversão (CRM, ERP,
   plataforma de pagamento, planilha comercial)?
3. Quanto tempo passa, em média, entre o primeiro contato e o pagamento?
4. Quantos pontos de contato uma compra típica tem e quais deles acontecem
   fora do site (WhatsApp, ligação, indicação, evento)?
5. Existe campo de autorrelato, como "como nos conheceu", no formulário ou no
   atendimento?
6. Qual escolha vai depender do relatório: cortar canal, mudar orçamento,
   priorizar tema de conteúdo, justificar time?

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/context/ofertas.md`, `.inboundfy/estrategia.md`,
`.inboundfy/pipeline.md`, o catálogo de peças, o calendário, o padrão de UTMs
e o plano de métricas produzido por `inboundfy-metricas` quando existir.
Consulte `.inboundfy/framework/` para regras de registro e fontes. Sem plano
de métricas, registre a ausência como pendência e siga só com os dados que a
pessoa entregar.

## Entrada esperada

Receba a conversão analisada, o período, os canais, as ferramentas, as
exportações de contatos, oportunidades e receita, o padrão de UTMs e o
modelo que cada relatório usa por padrão. Quando a pessoa trouxer apenas a
pergunta, peça a exportação mínima descrita no template do `REFERENCIA.md`.

## Fluxo

1. Registre a pergunta de negócio e a escolha que depende dela. Sem escolha
   associada, o relatório vira curiosidade e a skill pergunta de novo.
2. Declare a fonte da verdade da conversão e por que ela vence as outras.
   Leia [atribuicao-primeira-parte.md](references/atribuicao-primeira-parte.md)
   quando a fonte não guarda origem, UTM ou autorrelato.
3. Monte o quadro de leitura do [REFERENCIA.md](REFERENCIA.md): uma linha por
   ferramenta, com modelo, janela, contagem e receita. Nunca some colunas de
   ferramentas diferentes.
4. Compare primeiro contato, último contato não direto, linear, decaimento no
   tempo e autorrelato. Use
   [modelos-de-atribuicao.md](references/modelos-de-atribuicao.md) para
   calcular e interpretar as diferenças.
5. Identifique as distorções: tráfego direto inflado, perda de identidade
   entre dispositivos, compra fechada no WhatsApp sem origem, duplicidade
   entre plataformas, janelas incompatíveis e consentimento recusado.
6. Ligue cada conversão ao ID da peça, do acervo, da campanha e da oferta
   quando a UTM ou o CRM permitir.
7. Separe a leitura descritiva (o que os dados mostram) da recomendação de
   alocação (o que fazer com o dinheiro ou com a pauta).
8. Escolha o próximo passo de medição com
   [paradigmas-de-medicao.md](references/paradigmas-de-medicao.md): correção
   de captura, teste de holdout, teste geográfico ou acompanhamento por
   coorte.
9. Envie falhas de instrumentação para `inboundfy-rastreamento-conversao` e
   lacunas de definição para `inboundfy-metricas`.

## Saída

Salve em `.inboundfy/relatorios/atribuicao/AAAA-MM-<recorte>.md` ou no
caminho definido em `.inboundfy/estrategia.md`. O relatório traz pergunta,
fonte da verdade, quadro por ferramenta, comparação de modelos, distorções
encontradas, grau de confiança operacional (alto, médio ou baixo, com motivo),
recomendação e próximo teste. Cada número aponta para o arquivo ou a tela de
origem e a data de extração.

## Validação

Reprove o relatório quando:

- soma conversões de ferramentas com modelos ou janelas diferentes;
- não declara a janela de atribuição de cada fonte;
- trata correlação de origem como causa sem teste de incrementalidade;
- apresenta percentual sem número absoluto e denominador;
- recomenda corte de canal com menos de um ciclo médio de venda observado;
- usa dado pessoal identificável fora da base legal registrada na LGPD.

Na reprovação, corrija o quadro e repita a leitura inteira. Se faltar dado
de origem, devolva o pedido de captura para `inboundfy-rastreamento-conversao`.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** pergunta, conversão, período e exportações ligadas ao pedido;
- **transformação:** comparação de modelos e fontes com leitura de distorções;
- **saída:** relatório de atribuição com fonte por número e próximo teste;
- **handoff:** `inboundfy-rastreamento-conversao` para captura,
  `inboundfy-metricas` para definição, `inboundfy-experimentacao` para teste
  de página e `inboundfy-estrategia` para realocação de pauta.

## Idempotência

Atualize o relatório apenas para o período solicitado e preserve leituras
anteriores com sua data. Não reclassifique conteúdo antigo sem registrar a
regra usada. Mudança de modelo padrão ou de janela entra como nova seção
datada, nunca como substituição silenciosa dos números antigos.
