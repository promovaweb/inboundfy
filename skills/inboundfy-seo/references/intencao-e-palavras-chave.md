# Intenção e palavras-chave

Leia nos passos 3 e 4 do fluxo de `inboundfy-seo`.

## Fontes de termos, da mais confiável para a menos

1. **Search Console do projeto.** Consultas que já trazem impressões. Filtre
   por página e por consulta com posição entre 4 e 20.
2. **Conversa com cliente.** Perguntas do WhatsApp, do suporte, de
   reuniões de venda e de formulários. Registre a frase literal.
3. **Acervo e FAQ extraída.** `inboundfy-extrair-faq` já separa perguntas
   reais do material do projeto.
4. **SERP.** Autocompletar, "As pessoas também perguntam" e buscas
   relacionadas no rodapé.
5. **Ferramenta de palavras-chave.** Volume, dificuldade e variações.
   Registre a ferramenta e a data, porque os números mudam entre ferramentas.
6. **Concorrentes.** Páginas que trazem tráfego para quem disputa a mesma
   persona, cruzadas com `.inboundfy/context/concorrentes.md`.

Volume de ferramenta é estimativa. Para termos de nicho no Brasil, é comum a
ferramenta mostrar "0 a 10" e o Search Console mostrar centenas de
impressões. Quando as duas fontes divergem, vale a do projeto.

## Classificação de intenção

| Intenção | Sinal na busca | Formato que a SERP costuma premiar | Estágio |
| --- | --- | --- | --- |
| Informativa | como, o que é, por que, quando, passo a passo | Guia, tutorial, definição, vídeo | Descoberta |
| Investigativa | quanto custa, vale a pena, prós e contras, melhor | Guia com faixa de preço, análise, lista curada | Consideração |
| Comparativa | X ou Y, X vs Y, alternativa a X | Comparativo com tabela | Consideração |
| Transacional | contratar, preço, plano, comprar, orçamento | Página de serviço, produto, preços | Escolha |
| Local | perto de mim, nome de cidade ou bairro | Mapa com perfil da empresa, página local | Escolha |
| Navegacional | nome da marca, login, telefone | Home, página de acesso | Pós-escolha |

Quando a SERP mistura formatos (artigos e páginas de serviço), a intenção é
mista. Nesse caso, planeje uma página principal com a intenção dominante e
um bloco que atenda a segunda, ou duas páginas ligadas.

## Planilha de levantamento

```markdown
| Termo | Origem | Intenção | Estágio | Volume | Dificuldade | Posição atual | Página atual | Página planejada | Prioridade |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{termo literal}} | {{GSC, cliente, SERP, ferramenta}} | {{}} | {{}} | {{n ou sem dado}} | {{}} | {{n ou fora}} | {{URL ou nenhuma}} | {{URL}} | {{alta/média/baixa}} |
```

## Priorização

Some os pontos e ordene. A conta orienta; a escolha final é da pessoa.

| Fator | 3 pontos | 2 pontos | 1 ponto |
| --- | --- | --- | --- |
| Proximidade da oferta | A página vende o que a empresa oferece | Ligação indireta com a oferta | Só gera audiência |
| Chance de ranquear | Posição atual entre 4 e 15, ou SERP com sites pequenos | SERP com portais médios | SERP dominada por governo, marketplaces ou grandes portais |
| Esforço | Ajuste numa página existente | Página nova com material no acervo | Página nova sem material nem prova |
| Volume relativo | Alto para o nicho | Médio | Baixo, mas com intenção forte |

Termo com intenção transacional e baixo volume pode valer mais que termo
informativo de alto volume. Uma página de serviço que recebe 40 visitas por
mês e fecha dois contratos de R$ 1.800 paga mais que um artigo com 4 mil
visitas sem conversão.

## Leitura da SERP em dez minutos

Abra a busca em janela anônima, com localização no Brasil e registre:

1. **Formato dos cinco primeiros resultados.** Artigo, página de serviço,
   vídeo, ferramenta, marketplace.
2. **Recursos da página.** Anúncios, trecho em destaque, "As pessoas também
   perguntam", mapa com perfis locais, vídeos, resposta gerada por IA.
3. **Tipo de site.** Governo, portal, concorrente direto, blog pequeno.
4. **Profundidade.** Quantas seções e que perguntas cada resultado responde.
5. **Data.** Resultados antigos no topo indicam espaço para conteúdo
   atualizado.
6. **Lacuna.** O que nenhum dos cinco entrega: exemplo brasileiro, valor em
   reais, passo a passo com tela, dado próprio, opinião de quem executa.

Resposta gerada por IA no topo reduz cliques em buscas informativas simples.
Para essas, combine o trabalho com `inboundfy-geo`.

## Modificadores úteis no Brasil

- **Locais:** cidade, bairro, "perto de mim", sigla do estado.
- **Fiscais e legais:** MEI, Simples Nacional, CNPJ, nota fiscal, LGPD.
- **Pagamento:** Pix, boleto, parcelado, sem cartão.
- **Contato:** WhatsApp, telefone, atendimento online.
- **Preço:** quanto custa, preço, valor, grátis, barato.
- **Ano:** "2026" em buscas que mudam a cada ano (tabelas, limites, prazos).

## Erros desta etapa

- Traduzir termo do inglês sem conferir como o brasileiro busca.
- Juntar no mesmo grupo um termo de "como fazer sozinho" e um de "contratar
  quem faça".
- Ignorar o nome que a persona dá ao problema e usar só o termo técnico da
  empresa. Confira o jargão em `.inboundfy/context/publico.md`.
- Tratar volume de ferramenta como fato. Registre como estimativa.
