# On-page e metadados

Leia no passo 7 do fluxo de `inboundfy-seo`, ao montar o briefing ou revisar
uma página existente.

## Title

- Até cerca de 60 caracteres. O limite real é a largura em pixels, então
  letras largas (M, W) ocupam mais.
- Termo principal perto do início.
- Um diferencial concreto: ano, preço, prazo, cidade, formato.
- Marca no fim só quando couber (" | Conta Leve").
- Um title por página. Dois titles iguais no site indicam canibalização.

Fórmulas que funcionam em português:

| Intenção | Fórmula | Exemplo fictício |
| --- | --- | --- |
| Informativa | {{Termo}}: {{o que a pessoa leva}} | Nota fiscal de MEI: como emitir em 5 passos |
| Investigativa | Quanto custa {{termo}} em {{ano}} | Quanto custa abrir uma ME em 2026 |
| Comparativa | {{A}} ou {{B}}: {{eixo da comparação}} | MEI ou ME: impostos, limites e custos |
| Transacional | {{Serviço}} em {{cidade}} {{diferencial}} | Contabilidade para MEI em BH a partir de R$ 149 |

## Meta description

- Entre 140 e 160 caracteres.
- Benefício, prova ou detalhe concreto e ação.
- Não repita o title.
- O Google reescreve a description em boa parte das buscas, usando trechos
  da página. Uma abertura clara aumenta a chance de o trecho escolhido ser bom.

## URL

- Curta, minúsculas, palavras separadas por hífen, sem acento.
- Sem data em conteúdo que será atualizado (`/blog/limite-mei/`, não
  `/2023/05/limite-mei-2023/`).
- Não troque URL que já ranqueia. Se precisar trocar, registre o 301 no
  pipeline.

## Headings

- Um H1 por página, com o assunto principal.
- H2 para cada pergunta ou etapa principal. H3 para subdivisões.
- Heading descritivo, que funcione sozinho num sumário: "Quanto custa manter
  uma ME", não "Custos".
- Perguntas reais da persona viram H2 ou H3 quando a página responde a elas.

## Abertura

As três primeiras frases definem o trecho em destaque, a citação em resposta
de IA e a permanência do leitor.

1. Responda à pergunta principal.
2. Dê a condição ou exceção mais importante.
3. Diga o que a página detalha a seguir.

## Corpo

- **Profundidade pela SERP.** Cubra as perguntas que os primeiros colocados
  cobrem e acrescente a lacuna registrada.
- **Prova própria.** Caso, número, foto de processo, tela real, opinião de
  quem executa. É o que separa a página de um resumo genérico.
- **Formato que a busca pede.** Tabela para comparação, lista numerada para
  passo a passo, faixa de preço para "quanto custa".
- **Autoria.** Nome, função e experiência de quem assina, quando o tema
  envolve dinheiro, saúde ou obrigação legal.
- **Data de atualização visível** em conteúdo com valores que mudam.

## Imagens

- Nome de arquivo descritivo (`emissao-nota-fiscal-mei-tela.webp`).
- Texto alternativo que descreve o conteúdo da imagem para quem não a vê.
- Formato WebP ou AVIF, com largura e altura declaradas.
- Imagem acima da dobra sem carregamento tardio; as demais com `loading="lazy"`.

## Revisão on-page de página existente

Use esta tabela no modo de revisão. Uma linha por achado.

```markdown
| # | Elemento | Achado | Impacto | Ação | Prioridade |
| --- | --- | --- | --- | --- | --- |
| 1 | Title | 78 caracteres, termo principal no fim | CTR baixo na posição 6 | Reescrever com termo no início | Alta |
| 2 | Abertura | Três parágrafos de contexto antes da resposta | Perde trecho em destaque | Mover a resposta para a primeira frase | Alta |
| 3 | Links | Página órfã, sem link de entrada | Rastreamento lento | Linkar a partir do pilar e de dois artigos | Média |
```

Prioridade alta: afeta CTR, indexação ou a intenção principal. Média: afeta
profundidade ou links. Baixa: acabamento.

## Sinais que pedem outra skill

| Sinal na revisão | Encaminhe para |
| --- | --- |
| Página fora do índice, erro de rastreamento, lentidão | `inboundfy-auditoria-seo` |
| Marcação ausente ou com erro | `inboundfy-dados-estruturados` |
| Página não aparece em respostas de IA | `inboundfy-geo` |
| Página boa que não sobe por falta de autoridade | `inboundfy-seo-links-externos` |
| Página ranqueia e não converte | `inboundfy-growth-cro` |
