# Indexação, piloto e monitoramento

Leia nos passos 8 e 9 do fluxo de `inboundfy-seo-programatico`.

## Indexação

- **Canônica autorreferente** em cada página publicada.
- **Páginas parecidas que precisam existir** (variações de filtro, ordem,
  paginação) apontam a canônica para a principal ou recebem `noindex`.
- **`noindex` com link mantido** para páginas úteis ao visitante e fracas
  para busca, como cidades sem dado completo que o hub ainda mostra.
- **Parâmetros de URL** (filtro, ordenação, UTM) não geram páginas
  indexáveis.
- **Robots.txt** não serve para tirar página do índice. Ele impede o
  rastreamento e a página pode seguir indexada sem conteúdo.

## Sitemap

- Um sitemap por conjunto (`sitemap-nfse.xml`), listado no índice de
  sitemaps.
- Só URLs com resposta 200, canônicas e indexáveis.
- `lastmod` real, alterado quando o dado da linha muda.
- Até 50 mil URLs por arquivo.
- Envie o sitemap no Search Console e acompanhe o relatório do conjunto
  separado do resto do site.

## Links internos do conjunto

| Link | Regra |
| --- | --- |
| Hub para páginas | Todas as páginas publicadas, com busca ou filtro quando passar de cem |
| Hub intermediário | Por estado, categoria ou letra, quando o conjunto passar de duzentas páginas |
| Página para irmãs | Três a seis irmãs próximas (geografia, categoria, uso) |
| Página para oferta | Link para a página comercial e para o CTA de `links.md` |
| Conteúdo editorial para o conjunto | Artigos do blog linkam para o hub e para páginas de maior demanda |

A posição do hub no menu e nas URLs é definida com
`inboundfy-arquitetura-site`.

## Lote piloto

1. **Escolha das páginas.** Misture variações de demanda alta, média e
   baixa. Só piloto com as maiores esconde o comportamento da cauda.
2. **Tamanho.** Entre 20 e 100 páginas.
3. **Revisão humana.** No piloto, revise pelo menos 10% do lote (mínimo dez
   páginas) com esta lista:
   - o dado da página está certo e tem fonte?
   - o texto fixo encaixa sem erro de concordância?
   - os blocos condicionais vazios sumiram?
   - a página responde à busca melhor que o primeiro colocado?
4. **Publicação.** Sitemap enviado, links do hub ativos, data registrada no
   plano.
5. **Leitura.** Seis a oito semanas depois, compare com as métricas de
   liberação.

## Métricas de liberação do próximo lote

```markdown
| Métrica | Meta | Resultado | Situação |
| --- | --- | --- | --- |
| Indexadas / publicadas | > 60% | {{}} | {{ok ou abaixo}} |
| Com impressão / indexadas | > 50% | {{}} | {{}} |
| "Rastreada, mas não indexada" | < 20% | {{}} | {{}} |
| Conversão do conjunto vs. blog | Igual ou maior | {{}} | {{}} |
| Erros de dado achados na amostra | Zero graves | {{}} | {{}} |
```

Todas as metas atendidas: libere o próximo lote, de preferência com o dobro
do tamanho. Alguma abaixo: corrija o modelo ou a base, republique o piloto e
leia de novo antes de crescer.

## Sinais de conteúdo raso

- Muitas páginas em "Rastreada, mas não indexada" ou "Descoberta, mas não
  indexada".
- O Google escolhe outra página do conjunto como canônica.
- Páginas indexadas sem impressão depois de dois meses.
- Tempo na página muito abaixo das páginas editoriais do site.
- Queda do tráfego do site inteiro depois da publicação em massa.

Diante desses sinais, pare os lotes, acione `inboundfy-auditoria-seo` e
volte ao teste das duas páginas de
[padrões e validação de demanda](padroes-e-validacao-de-demanda.md).

## Manutenção

- Revise a base na frequência registrada em cada campo.
- Páginas sem impressão depois de seis meses: fundir em página regional ou
  de categoria com 301, ou remover com 410 quando não houver equivalente.
- Registre cada lote, data e resultado no plano, sem apagar o histórico.
