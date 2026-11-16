---
name: inboundfy-contexto-oferta
description: Registra produtos, serviços e ofertas em .inboundfy/context/ com funcionamento, limites, escopo, preço, pagamento, condições e data de confirmação. Use quando a pessoa disser que lançou um recurso, mudou o escopo de um serviço, alterou preço ou plano, criou desconto ou condição temporária, ou corrigiu o que está incluso.
---

# Inboundfy Contexto: Oferta

Esta skill guarda o que a empresa vende em três arquivos: produto (o que o
cliente opera sozinho), serviço (o que pessoas da empresa entregam) e oferta
(a condição comercial: preço, periodicidade, pagamento, inclusões, garantia).
Ela não escreve copy de venda nem define preço. Quem desenha a oferta é
`inboundfy-copy-oferta` e quem discute estratégia de preço é
`inboundfy-growth-pricing`. Esta skill registra o resultado confirmado.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Na ausência de qualquer um, informe: "O setup do Inboundfy ainda não
foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup`
para preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos.
Quando um arquivo de `.inboundfy/context/` desta skill estiver ausente,
acione `inboundfy-setup` para restaurar o template; esta skill não cria o
arquivo por conta própria.

## Arquitetura de execução

A skill confirma as sentinelas e escolhe um único domínio por execução,
salvo pedido explícito para relacionar produto, serviço e oferta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): confirme o alcance antes de gravar.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise o arquivo alterado e preserve histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique glossário, voz, personas e proibições quando houver copy.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 2 do fluxo e, depois, a
referência do domínio em `references/`. O grupo desta skill é **contexto**.

## Quando usar e quando não usar

| Entrada | Domínio | Observação |
| --- | --- | --- |
| "O app agora tem alerta por WhatsApp" | produtos | funcionalidade nova, com estágio |
| "A implantação assistida passou a ter duas sessões" | servicos | escopo e duração |
| "O plano anual sai por R$ 790 no Pix" | ofertas | preço, meio de pagamento, data |
| "Vamos dar 20% na Black Friday" | ofertas | condição temporária com período |
| "Qual preço devemos cobrar?" | não | `inboundfy-growth-pricing` |
| "Escreva a página do plano" | não | `inboundfy-copy-oferta` e especialista do canal |
| "Mudou o nome do plano" | ofertas e glossário | glossário via `inboundfy-contexto-institucional` |

Regra de classificação: se o cliente opera sozinho, é produto, mesmo com
onboarding incluso. Se uma pessoa da empresa executa o trabalho, é serviço.
Se fala de dinheiro, prazo comercial ou o que está incluso num plano, é
oferta.

## Contexto exigido

- `.inboundfy/context/empresa.md`, para ligar a oferta à empresa e às
  restrições institucionais;
- o arquivo canônico do domínio escolhido;
- os outros dois arquivos de oferta, para manter relações (todo plano aponta
  para um produto ou serviço cadastrado);
- `.inboundfy/context/glossario.md`, para nomes oficiais;
- `.inboundfy/context/proibicoes.md`, quando a entrada trouxer texto de venda
  ou promessa de resultado;
- `.inboundfy/context/publico.md`, quando o plano tiver persona-alvo.

## Entrada esperada

Uma descrição de produto, serviço, plano, condição comercial, diferencial,
limitação ou correção, vinda do usuário, de tabela de preços, contrato,
proposta comercial ou página de preços enviada por ele. Também aceita a
ficha de oferta aprovada em `inboundfy-copy-oferta` ou a escolha de preço de
`inboundfy-growth-pricing`, depois de confirmadas pelo responsável comercial.

## Perguntas de diagnóstico

1. É produto, serviço ou oferta?
2. O dado está confirmado por quem responde pelo comercial? Qual a data?
3. É permanente ou temporário? Condição temporária precisa de início e fim.
4. O que não está incluso? Sem essa resposta, o registro fica incompleto.
5. O preço é público ou sob consulta?
6. O novo valor contradiz algo já publicado?

## Fluxo

1. Classifique a entrada com a tabela de `Quando usar e quando não usar`.
2. Leia os três arquivos atuais, o [REFERENCIA.md](REFERENCIA.md) e a
   referência do domínio: [produtos](references/produtos.md),
   [serviços](references/servicos.md) ou [ofertas](references/ofertas.md).
3. Separe quatro tipos de informação: fato operacional (como funciona),
   condição comercial (preço, prazo, pagamento), limite (o que não faz ou
   não inclui) e promessa (resultado que a empresa autoriza afirmar). Promessa
   sem fonte vira pergunta aberta.
4. Use o roteiro de entrevista da referência para cobrir lacunas.
5. Grave somente o arquivo do domínio. Campo sem resposta fica "não
   informado". Preço nunca é estimado.
6. Em ofertas, registre a data da última confirmação em cada plano e
   atualize o comparativo quando houver dois planos ou mais.
7. Proponha ao glossário nomes novos de produto, plano ou recurso.
8. Liste peças publicadas que citam o valor antigo e informe o caminho
   atualizado, as pendências e a skill que deve usar o dado.

## Saída

Um arquivo atualizado em `.inboundfy/context/` com fatos, limites, data de
confirmação e relações, mais o relato no formato do template de
`REFERENCIA.md`.

## Validação

- O domínio corresponde ao pedido.
- Todo plano tem preço (ou "sob consulta"), periodicidade, inclusões,
  exclusões e data de confirmação.
- Todo produto e serviço tem limite registrado.
- Condição temporária tem período.
- Nenhum preço, prazo ou resultado foi inferido.
- Nomes conferidos no glossário.
- Divergências com peças publicadas foram listadas.

## Idempotência

O mesmo pedido mantém uma única entrada para cada produto, serviço ou plano.
Preço substituído fica registrado com a data numa nota do bloco. Plano
descontinuado recebe situação "encerrado" e não é apagado sem pedido.

## Responsabilidade do grupo

Registre somente fatos da oferta no arquivo canônico selecionado. Mantenha
produto, serviço e condição comercial relacionados sem misturá-los.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** descrição ou correção ligada a produto, serviço ou oferta;
- **transformação:** atualização do domínio selecionado;
- **saída:** arquivo de oferta com origem, limites e relações;
- **handoff:** `inboundfy-copy-oferta`, `inboundfy-copy-posicionamento`,
  `inboundfy-enablement-vendas`, estratégia, planejamento ou orquestrador.
