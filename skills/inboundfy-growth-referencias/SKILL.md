---
name: inboundfy-growth-referencias
description: Estrutura programas de indicação e afiliados com elegibilidade, benefícios, atribuição e conciliação de recompensas. Use quando o pedido falar em indicação de clientes, comissão, cupom de afiliado, recompensa ou programa de recomendação.
---

# Programa de indicação

Planeje recomendação por clientes e operação de comissão. Diferencie indicação, afiliado profissional e pedido de avaliação pública.

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

Receba oferta, margem, CAC atual quando disponível, base elegível, evento de valor, benefícios possíveis, ferramentas, canais e orçamento. Aceite o piloto de comissão de `inboundfy-growth-parcerias`, com empresas, contrapartidas e responsáveis; complete os dados econômicos antes de calcular incentivos.

## Perguntas de diagnóstico

- A pessoa já recebeu valor suficiente para recomendar?
- O benefício recompensa cadastro ou compra confirmada?
- Quem recebe a indicação entende origem e condição?
- Como resolver duas indicações para a mesma compra?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme quem indica, quando percebe valor e qual conversão torna a indicação elegível.
2. Leia [regras, atribuição e conciliação](references/regras-atribuicao-e-conciliacao.md). Calcule benefício e comissão a partir da margem disponível. Defina regras para os dois lados, janela de atribuição e conciliação.
3. Escolha momento de convite após valor percebido. Desenhe o caminho de quem indica e de quem recebe, com texto transparente.
4. Especifique link, cupom, evento de conversão, elegibilidade, cancelamento, limites e tratamento de uso indevido.
5. Teste convite, cadastro, compra, confirmação, crédito e estorno. Registre cada indicação com chave única.
6. Execute piloto por coorte. Concilie pagamentos e compare aquisição líquida, qualidade e margem após incentivos.
7. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue regulamento operacional, mapa das duas experiências, mensagens, plano de atribuição e planilha de conciliação. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

Regra de elegibilidade, janela, cancelamento e pagamento precisam ser testáveis. Benefícios não dependem de avaliação positiva. Pagamentos não podem duplicar uma mesma conversão.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Transforme base elegível e margem disponível em programa de indicação com conciliação por conversão e responsável pelos créditos. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Encaminhamentos

Use `inboundfy-growth-influenciadores` para selecionar criadores, `inboundfy-growth-parcerias` para acordos entre empresas e `inboundfy-growth-loops` para medir retorno do mecanismo. Cadastros em plataformas seguem para `inboundfy-growth-diretorios`. Configure eventos com `inboundfy-rastreamento-conversao` quando necessário.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Use ID da conversão + programa como chave de recompensa. Reprocessar relatório não libera outro crédito ou Pix.
