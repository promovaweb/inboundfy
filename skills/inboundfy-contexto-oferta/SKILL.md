---
name: inboundfy-contexto-oferta
description: >
  Mantém produtos, serviços e ofertas comerciais nos arquivos canônicos do
  projeto. Use para registrar fatos confirmados sobre a solução, seus planos,
  condições, diferenciais e limites antes da criação de copy.
---

# Inboundfy Contexto de Oferta

Skill agrupadora dos domínios que explicam o que a empresa vende. Produto,
serviço e oferta têm arquivos próprios, mas seguem o mesmo fluxo de registro.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos.

## Arquitetura de execução

Esta skill confirma as sentinelas e escolhe um único domínio de oferta por
execução, salvo pedido explícito para relacionar produto, serviço e oferta.

- [Preflight e fontes](../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../_shared/03-interacao-e-handoff.md): confirme o alcance antes de gravar.
- [Validação e retomada](../../_shared/04-validacao-e-retomada.md): revise o arquivo alterado e preserve histórico.
- [Contexto editorial](../../_shared/05-contexto-editorial.md): aplique glossário, voz, personas e proibições quando houver copy.

Consulte [REFERENCIA.md](REFERENCIA.md) e depois `references/produtos.md`,
`servicos.md` ou `ofertas.md`. O grupo desta skill é **contexto**.

## Contexto exigido

- `.inboundfy/context/empresa.md`, para ligar a oferta à empresa;
- o arquivo canônico do domínio escolhido;
- `.inboundfy/context/glossario.md`, para nomes oficiais;
- `.inboundfy/context/proibicoes.md`, quando a entrada trouxer texto de venda.

## Entrada esperada

Uma descrição de produto, serviço, plano, condição comercial, diferencial,
limitação ou correção fornecida pelo usuário.

## Fluxo

1. Classifique a entrada como produto, serviço ou oferta.
2. Leia o arquivo atual e a referência interna do domínio.
3. Separe fato operacional, promessa autorizada, condição comercial e lacuna.
4. Atualize somente o arquivo indicado, mantendo relações com outros domínios.
5. Registre no glossário nomes oficiais de produto, plano ou recurso.
6. Informe o caminho atualizado e como copy, estratégia ou produção pode usar o
   novo dado.

## Saída

Um arquivo atualizado em `.inboundfy/context/` com fatos, origem, relações e
perguntas abertas.

## Validação

- O domínio corresponde ao pedido.
- Benefícios foram separados de condições e limitações.
- Nomes e valores foram confrontados com o glossário.
- Nenhuma promessa sem fonte foi criada.
- Relações com empresa, personas ou canais foram indicadas quando existirem.

## Idempotência

Executar o mesmo pedido novamente mantém uma única entrada para cada fato e
preserva a data e a origem já registradas.

## Responsabilidade do grupo

Registre somente fatos da oferta no arquivo canônico selecionado. Mantenha
produto, serviço e condição comercial relacionados sem misturá-los.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** descrição ou correção ligada a produto, serviço ou oferta;
- **transformação:** atualização do domínio selecionado;
- **saída:** arquivo de oferta com origem e relações;
- **handoff:** copy, estratégia, planejamento ou orquestrador.
