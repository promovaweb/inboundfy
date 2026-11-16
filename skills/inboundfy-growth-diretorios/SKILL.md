---
name: inboundfy-growth-diretorios
description: Prepara kits de cadastro e rodadas de envio a diretórios, marketplaces e catálogos setoriais. Use quando o pedido falar em cadastrar produto, listar ferramenta, publicar em catálogo ou acompanhar contatos de listagens.
---

# Cadastros em diretórios

Use para preparar um kit de cadastro, selecionar superfícies pertinentes e manter o registro de envios. A publicação segue o alcance autorizado no pedido. O plano de lançamento completo pertence a `inboundfy-growth-lancamento`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se faltar uma sentinela, apresente o alerta e encerre a escrita:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/context/ofertas.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/canais.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e `.inboundfy/estrategia.md`. Consulte os documentos pertinentes de `.inboundfy/framework/` e as fontes locais listadas no preflight. Cadastro incompleto de oferta segue para `inboundfy-contexto-oferta`.

## Entrada esperada

Receba produto ou serviço, país e idioma do público, categoria, URL de destino, teto de gasto, ativos disponíveis, responsável pelo cadastro e autorização de envio. Aproveite o registro anterior para localizar contas e listagens já existentes.

## Perguntas de diagnóstico

- O comprador procura fornecedores nesse catálogo ou só outros divulgadores o visitam?
- O formulário aceita a categoria e o estágio atual da oferta?
- A empresa pode manter preço, contato e disponibilidade atualizados?
- A taxa compra exposição, avaliação editorial ou acesso a contatos? Como cada entrega será conferida?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confira duplicatas por domínio, empresa e produto. Defina o arquivo de saída no diretório de campanha já registrado pelo setup.
2. Verifique destino, oferta, suporte, política de privacidade e ativos exigidos por cada catálogo. Corrija ausências no kit antes de iniciar o envio correspondente.
3. Pesquise as regras atuais nos sites oficiais dos candidatos. Registre data, categoria, idioma, público, taxa, tratamento de dados e URL de cadastro. Use a matriz da referência para escolher a primeira rodada.
4. Monte descrições por público, limites de campo, imagens e URLs. Leia `ESCRITA.md`, aplique `inboundfy-copy-editor` e confira a contagem de caracteres antes do formulário.
5. Leia [preparação e acompanhamento](references/preparacao-e-acompanhamento.md) para enviar dentro da autorização existente. Anote cada tentativa, inclusive rejeição, custo e protocolo. Não repita envio durante espera editorial.
6. Abra a listagem publicada. Confira descrição, preço, destino, redirecionamento e atributos do link. Registre o que foi observado sem prometer indexação ou posição orgânica.
7. Acompanhe sessões identificáveis, contatos qualificados e receita por rodada. Entregue a próxima revisão com responsável e data; leve a instrumentação para `inboundfy-rastreamento-conversao` e relações editoriais para `inboundfy-seo-links-externos`.

## Saída

Entregue `diretorios-<id>.md` no diretório de campanha registrado, com kit de cadastro, matriz priorizada, tabela de tentativas e leitura por canal. Preserve ID, grupo growth, persona, fontes com data, estado, custo realizado, próxima ação e pendências.

## Validação

- Cada candidato tem público pertinente e regra atual consultada.
- URLs de destino abrem e correspondem à oferta descrita.
- O kit usa somente preço, disponibilidade e afirmações confirmados.
- Cada envio possui autorização aplicável, estado e comprovante localizável.
- Nenhuma listagem foi marcada como publicada só pelo recibo de envio.
- A leitura separa sessões, contatos e vendas. Ausência de rastreamento aparece como dado indisponível.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Idempotência

Use a chave domínio do catálogo + produto + país. Atualize o cadastro existente e preserve protocolo, data e conta responsável. Novo envio só após resposta editorial, expiração confirmada ou mudança solicitada. Não crie nova conta para contornar uma rejeição.
