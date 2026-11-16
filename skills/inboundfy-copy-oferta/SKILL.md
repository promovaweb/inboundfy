---
name: inboundfy-copy-oferta
description: Monta e revisa ofertas com resultado, mecanismo, escopo, bônus, garantia, preço, condição, urgência real e nome, entregando uma ficha versionada por persona. Use quando a pessoa falar em oferta, pacote, garantia, bônus, condição de pagamento ou disser que a página está boa e ninguém compra.
---

# Oferta

Use para criar ou revisar a oferta de um produto, serviço, material rico,
newsletter, diagnóstico, evento ou campanha. A oferta é o que a pessoa
recebe, em quais condições e por quanto. A skill trabalha o pacote; a página
que vende o pacote fica com `inboundfy-copy-redacao`.

## Quando usar e quando não usar

| Situação | Skill |
| --- | --- |
| A página está bem escrita e mesmo assim ninguém compra | `inboundfy-copy-oferta` |
| Produto novo precisa de pacote, nome, garantia e condição | `inboundfy-copy-oferta` |
| Material rico ou diagnóstico gratuito para captar leads | `inboundfy-copy-oferta` com `inboundfy-growth-lead-magnet` |
| Escolha de valor, planos e métrica de cobrança | `inboundfy-growth-pricing` (preço); esta skill embala o resultado |
| Registrar a oferta aprovada como fato do projeto | `inboundfy-contexto-oferta` |
| Escrever a página ou o email da oferta | `inboundfy-copy-redacao` |
| Campanha de lançamento com datas | `inboundfy-growth-lancamento` usando a ficha desta skill |

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar artefatos. Siga o contrato
compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 4 do fluxo e ao montar a
saída. O grupo desta skill é **copy**.

## Contexto exigido

Sem `.inboundfy/framework/VERSAO.md` ou `.inboundfy/fontes-projeto.md`,
acione `inboundfy-setup` e pare.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/glossario.md`, `.inboundfy/context/ofertas.md`,
`.inboundfy/context/produtos.md` ou `.inboundfy/context/servicos.md`,
`.inboundfy/context/concorrentes.md`, `.inboundfy/context/depoimentos.json` e
os acervos relacionados.

`.inboundfy/context/ofertas.md` é a fonte única de preço e condição. A skill
pode propor mudanças, mas só a versão aprovada pelo usuário e registrada por
`inboundfy-contexto-oferta` vale para as peças.

## Entrada esperada

Receba produto ou serviço, persona, problema, resultado, mecanismo, preço,
condições, prova, garantia, prazo, restrições e CTA. Quando a capacidade de
entrega (vagas, horas da equipe, estoque) não vier informada, pergunte: ela
define bônus, garantia e escassez possíveis. Quando houver documento de
posicionamento de `inboundfy-copy-posicionamento`, use a mensagem central,
o cliente ideal e as alternativas dele como ponto de partida.

## Perguntas de diagnóstico

1. Qual resultado a pessoa compra e em quanto tempo percebe o primeiro sinal
   dele?
2. Quanto custa o problema hoje para a persona (dinheiro, horas, clientes
   perdidos)?
3. Qual é a alternativa que a pessoa usaria sem esta oferta e quanto ela
   custa?
4. O que faz a pessoa duvidar de que vai funcionar para ela?
5. Quanto esforço a pessoa precisa colocar para chegar ao resultado?
6. O que a empresa consegue garantir sem prejuízo se o cliente não tiver o
   resultado?
7. Existe limite real de vagas, estoque, prazo ou reajuste?

## Fluxo

1. Responda às perguntas de diagnóstico e meça a oferta atual pelos quatro
   fatores de valor de
   [references/anatomia-da-oferta.md](references/anatomia-da-oferta.md):
   resultado, confiança, tempo e esforço.
2. Descreva o resultado sem prometer o que a empresa não controla.
3. Explique o mecanismo de forma simples: o que a pessoa recebe, faz e
   consegue observar.
4. Organize entregável central, escopo (incluso e não incluso), condições,
   limites, investimento, formas de pagamento e próximos passos com o
   template de [REFERENCIA.md](REFERENCIA.md).
5. Liste objeções por persona e responda cada uma com informação, prova,
   bônus que remove o obstáculo ou transparência.
6. Escolha garantia, bônus e urgência com
   [references/garantias-bonus-e-urgencia.md](references/garantias-bonus-e-urgencia.md).
   Só entra o que a operação consegue cumprir.
7. Proponha três nomes para a oferta, com o recomendado primeiro, e aguarde a
   escolha.
8. Escolha a mensagem principal e as variações por canal.
9. Valide termos, voz, proibições, fontes, CDC e consistência com
   `.inboundfy/context/ofertas.md`. Encaminhe a versão aprovada a
   `inboundfy-contexto-oferta` para registro.

## Saída

Ficha de oferta no formato de [REFERENCIA.md](REFERENCIA.md), salva no item do
acervo (`acervo/<id>-<AAAA-MM-DD>-<slug>/oferta.md`) ou anexada ao brief da
campanha. A ficha traz versão, mensagem principal, variações por canal,
objeções respondidas e pendências. Quando o pedido incluir página ou
sequência de mensagens, a ficha segue para `inboundfy-copy-redacao`.

## Validação

A ficha é reprovada quando:

- o resultado prometido depende de fatores fora do controle da empresa e o
  texto não diz isso;
- falta o que não está incluso;
- preço, parcelamento ou desconto divergem de `.inboundfy/context/ofertas.md`
  sem nova aprovação;
- a garantia tem condição escondida ou que a operação não cumpre;
- bônus não resolve objeção nenhuma ou tem valor de referência inventado;
- urgência ou escassez não têm data, quantidade ou motivo verificável;
- a oferta usa promessa absoluta ("garantido", "100%") sem base.

## Idempotência

Preserve a oferta vigente e registre nova versão quando preço, promessa,
entrega ou público mudar. Versões anteriores ficam no histórico da ficha com
data e motivo da troca.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** produto ou serviço, persona, preço, condição e prova;
- **transformação:** montagem e revisão da oferta pelos fatores de valor;
- **saída:** ficha de oferta versionada com mensagem principal e variações;
- **handoff:** `inboundfy-contexto-oferta`, `inboundfy-copy-redacao` ou `inboundfy-growth-lancamento`.
