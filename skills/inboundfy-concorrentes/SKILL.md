---
name: inboundfy-concorrentes
description: Pesquisa concorrentes e alternativas para orientar posicionamento, páginas comparativas, diferenciação, conteúdo SEO e argumentos de venda.
---

# Concorrência e alternativas

Use para analisar sites, ofertas, mensagens, provas, lacunas e páginas de
concorrentes. O resultado serve para estratégia e conteúdo útil, não para
copiar linguagem alheia.

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

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, os arquivos canônicos de
`.inboundfy/`, `contexto/concorrentes.md` quando existir, o catálogo, o acervo
e as fontes do site. Consulte `.inboundfy/framework/` para SEO, GEO, voz,
Markdown e regras de pesquisa.

## Entrada esperada

Receba URLs, nomes, categoria, oferta, persona e pergunta competitiva. Se a
lista de concorrentes não existir, proponha como encontrá-la pela linguagem
da persona e pela intenção de busca.

## Fluxo

1. Registre página, data de consulta e tipo de oferta.
2. Extraia público declarado, promessa, mecanismo, prova, preço ou modelo,
   CTA, objeções tratadas, temas e formatos.
3. Separe fato observado da interpretação do analista.
4. Compare com a oferta do projeto: semelhanças, diferenças comprováveis,
   espaços de conteúdo e perguntas que o mercado deixa abertas.
5. Gere briefing para página comparativa ou conteúdo de categoria somente se
   ele puder ajudar a pessoa a escolher com honestidade.
6. Salve o relatório no contexto ou no acervo definido pelo usuário.

## Saída

Entregue perfil, mapa comparativo, lacunas, oportunidades de conteúdo ou
briefing de página alternativa com fontes e data.

## Validação

Confirme que nenhuma vantagem foi inventada, que fatos antigos estão
identificados, que o texto não difama e que a comparação usa o mesmo recorte
para todas as ofertas.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o perfil existente por data. Preserve observações antigas com seu
período, em vez de apagar mudanças do mercado.
