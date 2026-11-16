---
name: inboundfy-growth-criativos-anuncios
description: Cria conceitos, textos, roteiros e especificações visuais para anúncios com fontes e plano de teste. Use quando o pedido falar em criativos pagos, variações de anúncios, roteiro de campanha, abertura de vídeo ou renovação de peças.
---

# Criativos para anúncios

Crie conceitos, textos, roteiros e especificações visuais de anúncios a partir da oferta e da linguagem do público. O plano de verba pertence a `inboundfy-growth-anuncios`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se faltar uma sentinela, encerre a escrita e apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`, `.inboundfy/pipeline.md`, o acervo relacionado e `.inboundfy/framework/`.

Leia também `.inboundfy/fontes-projeto.md`, as bases editoriais relacionadas e os documentos públicos citados. Antes de entregar copy, consulte `inboundfy-anti-slop` e `inboundfy-copy-edicao`.

## Entrada esperada

Receba brief de campanha, persona, oferta com fonte, etapa de consciência, destino, canal, formatos, ativos da marca, direitos de uso e capacidade de produção. Para iteração, receba IDs dos criativos com gasto, impressões, cliques de link, conversões válidas, janela e observações comerciais. Sem desempenho anterior, trabalhe com hipóteses identificadas.

## Fluxo

1. Localize o brief da campanha e confirme canal, formatos, destino e capacidade de produção antes de escolher conceitos.
2. Leia [REFERENCIA.md](REFERENCIA.md) e [conceitos e producao](references/conceitos-e-producao.md) para relacionar problema, benefício, comprovação e formato. Leia o histórico para não reapresentar hipótese já descartada como novidade.
3. Monte conceitos distintos por necessidade do público. Registre fonte, hipótese, controle, métrica e capacidade de execução antes de criar variações.
4. Escreva copy, roteiro, composição e instruções de produção. Consulte `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, voz, proibições, glossário e ativos da marca. Diferencie arte especificada de arte efetivamente produzida.
5. Leia [testes e renovacao](references/testes-e-renovacao.md) para definir IDs, comparação, janela, teto e leitura. Encaminhe eventos, UTMs e ligação entre criativo e conversão para `inboundfy-rastreamento-conversao`.
6. Valide formato na documentação oficial atual do canal e em prévia de celular. Registre data da consulta; não trate recomendação de tamanho como limite técnico universal.
7. Acione `inboundfy-copy-editor`, `inboundfy-copy-edicao` e `inboundfy-anti-slop`. Entregue o pacote revisável a `inboundfy-growth-anuncios` com ID da campanha, arquivos e IDs das peças, formatos, destino, fontes, direitos, plano de teste e pendências. Leve junto o teto, período e capacidade comercial do plano de origem; campos ausentes permanecem pendentes.

## Saída

Pacote criativo ligado ao brief da campanha, no caminho já definido pelo projeto consumidor: matriz de conceitos, textos finais candidatos, roteiros, instruções visuais, arquivos produzidos quando solicitados, fontes e plano de teste. Cada peça preserva ID próprio, ID do conceito, persona, canal, oferta, destino, estado e próxima ação. Arte final em pacote usa o campo `brief` e relatório de auditoria correspondente.

## Validação

- Cada conceito tem problema, promessa comprovável e fonte específica.
- Variação de abertura não recebe rótulo de novo conceito.
- Textos, roteiro, formato e CTA conduzem à mesma oferta do destino.
- Direitos de imagem, depoimento, música e marca estão registrados.
- A prévia permite ler a mensagem em celular sem áudio.
- O teste contém hipótese, comparação, janela e métrica comercial.
- Requisitos atuais do canal foram conferidos; medição pendente impede conclusão de desempenho.
- Copy reprovada retorna à redação antes de encaminhar o pacote.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Idempotência

Atualize o mesmo arquivo ou brief quando o ID já existir. Preserve texto aprovado, histórico, fontes e escolhas anteriores; abra uma nova versão apenas após pedido explícito.
