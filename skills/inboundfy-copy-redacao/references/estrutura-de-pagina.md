# Estrutura de página

Leia no passo 4 do fluxo, quando a peça for uma página (landing page, home,
produto, preços, sobre). Define o que vai no topo, quais seções usar e a
ordem, conforme o nível de consciência da persona.

## O topo da página

O topo é o que aparece sem rolar. Ele precisa responder a três perguntas em
poucos segundos: o que é isto, para quem serve e o que faço agora.

| Elemento | Função | Regra |
| --- | --- | --- |
| Título | Nomear o resultado ou o problema | Até cerca de 10 palavras; repete a promessa da origem do tráfego. |
| Subtítulo | Explicar o mecanismo ou para quem é | Uma ou duas frases; responde "como?". |
| CTA principal | Ação única | Verbo + objeto; um botão em destaque. |
| Microcopy do CTA | Reduzir receio | Condição real: sem cartão, cancelamento, prazo de resposta. |
| Prova rápida | Confiança imediata | Número com data, logos com autorização, nota de avaliação com fonte. |
| Imagem | Mostrar o produto ou o resultado | Tela real, foto do serviço; evite banco de imagem genérico. |

## Seções disponíveis

Escolha as que respondem às perguntas da persona. Nenhuma página precisa de
todas.

| Seção | Pergunta do leitor | Quando usar |
| --- | --- | --- |
| Problema | "Vocês entendem minha situação?" | Persona sabe do problema e ainda não compara soluções. |
| Como funciona | "Como isso resolve?" | Mecanismo pouco óbvio ou produto novo na categoria. |
| Benefícios por uso | "O que muda na minha rotina?" | Sempre que houver mais de uma funcionalidade relevante. |
| Prova social | "Quem já usou?" | Quando houver depoimento com consentimento ou número registrado. |
| Comparação | "Por que não a alternativa?" | Persona conhece soluções; a alternativa pode ser planilha, concorrente ou fazer sozinho. |
| Oferta e preço | "Quanto custa e o que vem junto?" | Persona pronta para comprar; preço vindo de `ofertas.md`. |
| Garantia | "E se não der certo?" | Quando a garantia existe e está registrada. |
| Perguntas frequentes | "E aquela dúvida específica?" | Para objeções secundárias; use o `faq.md` do acervo. |
| CTA final | "Ok, como começo?" | Sempre; repete a ação do topo com microcopy. |

## Ordem por nível de consciência

| Nível | O leitor... | Ordem sugerida |
| --- | --- | --- |
| Não sabe do problema | não reconhece a dor | História ou dado que revela o problema, problema, consequência, como funciona, prova, CTA. |
| Sabe do problema | sente a dor, não conhece saída | Problema, consequência, como funciona, benefícios, prova, CTA. |
| Conhece soluções | compara alternativas | Resultado, diferença frente às alternativas, como funciona, prova, oferta, CTA. |
| Conhece o produto | avalia se confia | Prova, oferta, garantia, perguntas frequentes, CTA. |
| Pronto para comprar | quer a condição | Oferta, preço, forma de pagamento, CTA, perguntas frequentes. |

Quanto mais consciente o leitor, mais curta a página e mais cedo aparece a
oferta. Página longa para leitor pronto atrasa a compra. Página curta para
leitor que não conhece o problema não convence.

## Orientação por tipo de página

### Home

Atende perfis diferentes. Use o topo para a proposta central e logo abaixo
rotas por perfil ("Para MEI", "Para contador"). Evite colocar a lista
completa de funcionalidades: a home distribui, as páginas internas detalham.

### Landing page de campanha

Uma oferta, uma ação, sem menu de navegação completo. A página nasce ligada a
um anúncio, email ou post; o título repete essa promessa.

### Página de produto ou funcionalidade

Siga FAB por seção. Mostre a tela ou o resultado do uso, explique o caso real
e termine com o próximo passo (teste, demonstração, orçamento).

### Página de preços

Planos lado a lado com o recomendado destacado. Liste o que muda entre planos
em linguagem de uso, não de limite técnico. Mostre formas de pagamento aceitas
(Pix, cartão parcelado, boleto) e a política de cancelamento. Perguntas
frequentes tratam cobrança, troca de plano e nota fiscal.

### Página sobre

Responde "por que confiar?". Fatos da empresa vêm de `.inboundfy/context/empresa.md`
e pessoas de `.inboundfy/context/pessoas.md`. Nada de missão genérica sem
fato concreto.

## Falhas prováveis

- Topo com dois CTAs de mesmo peso ("Comprar" e "Agendar demonstração").
  Escolha um e rebaixe o outro para link.
- Seção de prova antes de o leitor entender o que é o produto.
- FAQ usada para esconder condição que deveria estar na oferta.
- Página de campanha com menu completo, que oferece saídas antes da ação.
