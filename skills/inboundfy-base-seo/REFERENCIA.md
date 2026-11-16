# Busca, metadata e estrutura de resposta

Esta base recebe uma pergunta do público e devolve intenção, metadata, outline e relações internas. Tamanhos de texto são faixas editoriais do projeto, não garantias de exibição nem posições nos resultados.

## Diagnóstico da busca

Pergunte qual tarefa a pessoa tenta concluir, quais palavras usa, qual região interessa e qual página existente já responde à mesma pergunta. Não apresente volume de busca sem ferramenta, período e origem registrados.

| Expressão de exemplo | Intenção predominante | Estrutura útil |
| --- | --- | --- |
| como conferir pastilha de freio | Informativa | Procedimento, sinais observáveis e limite da inspeção |
| freio mecânico ou hidráulico | Comparativa | Condições de uso, manutenção e custo com fontes |
| oficina de bicicleta no bairro | Transacional | Serviço local, endereço e contato confirmados |
| revisão de bicicleta preço | Investigativa | Escopo, variáveis de preço e orçamento |

## Procedimento de preparação

1. Leia público, tema, objetivo e páginas existentes. Nomeie a pergunta principal numa frase.
2. Se houver consulta de resultados, registre termos, localidade, data e URLs abertas. Separe observação real de hipótese de intenção.
3. Escolha uma intenção predominante. Use intenções secundárias apenas quando ajudarem a concluir a mesma tarefa.
4. Escreva title com faixa editorial de 50 a 60 caracteres e description de 145 a 155, contando espaços e pontuação. Se o contrato da chamadora tiver outra faixa, registre o motivo e siga o contrato explícito.
5. Crie slug legível, estável e sem acentos. Não retire palavra necessária para entender o assunto apenas por ser curta.
6. Monte um H1 e H2 que respondam às dúvidas concretas. H3 detalha a seção superior. Não repita a expressão de busca em todos os títulos.
7. Mapeie destinos internos existentes. Para cada link, registre âncora, URL ou caminho confirmado e função para o leitor.
8. Compare páginas relacionadas. Se duas disputarem a mesma pergunta com a mesma resposta, recomende atualizar a existente antes de abrir outra.
9. Entregue o pacote à chamadora. `inboundfy-copy-editor` confere clareza da metadata; o corpo permanece com a produtora.

## Template de pacote SEO

```yaml
pergunta_principal: <dúvida do público>
intencao: <informativa|comparativa|transacional|investigativa>
justificativa: <tarefa que a busca representa>
consulta_observada: <termos, data e localidade ou não realizada>
title: <texto>
title_caracteres: <contagem com espaços>
description: <texto>
description_caracteres: <contagem com espaços>
slug: <caminho estável>
h1: <título do conteúdo>
h2: [<perguntas ou assuntos concretos>]
links_internos:
  - ancora: <texto descritivo>
    destino: <URL existente>
    motivo: <tarefa complementar>
relacao_com_paginas: <nova lacuna ou atualização sugerida>
pendencias: [<fonte necessária ou nenhuma>]
```

## Exemplo trabalhado: Pinhão Bicicletas, empresa fictícia

**Antes:** title “Bicicleta: tudo o que você precisa saber”; description “Descubra nossas soluções completas”. Os textos não dizem qual tarefa a página resolve.

**Depois:** pacote para a dúvida “o que conferir antes de levar a bicicleta para revisão?”. A persona é quem usa a bicicleta no deslocamento diário. A fonte interna descreve uma inspeção visual, sem autorizar instruções de reparo.

```yaml
pergunta_principal: O que conferir antes de levar a bicicleta para revisão?
intencao: informativa
justificativa: O leitor precisa descrever o estado da bicicleta ao pedir revisão.
consulta_observada: não realizada; hipótese a conferir pela chamadora
title: "Revisão de bicicleta: confira freios e pneus antes de sair"
title_caracteres: 58
description: "Veja o que observar nos freios e pneus antes de levar a bicicleta para revisão. Anote os sinais de desgaste e peça uma avaliação na Pinhão Bicicletas."
description_caracteres: 150
slug: revisao-bicicleta-freios-pneus
h1: O que observar na bicicleta antes da revisão
h2:
  - Sinais visíveis nos freios
  - Estado dos pneus antes do deslocamento
  - Informações para levar à oficina
links_internos:
  - ancora: serviço de revisão
    destino: /servicos/revisao/
    motivo: consultar o escopo confirmado do serviço
relacao_com_paginas: ampliar a página de serviço com uma orientação de preparação
pendencias: [confirmar o destino interno no site consumidor]
```

O pacote ilustra metadata, sem afirmar pesquisa ou desempenho. A URL só poderá entrar na peça após a conferência no projeto consumidor. Cliques, impressões e CTR podem orientar uma revisão posterior, comparando o mesmo período e tipo de consulta. CTR é cliques divididos por impressões; não use uma taxa isolada como prova de qualidade editorial.

## Checklist numerado

1. Pergunta principal descreve uma tarefa real do público.
2. Intenção e justificativa concordam.
3. Pesquisa observada está separada de hipótese.
4. Contagens de title e description foram calculadas sobre o texto final.
5. Metadata não promete algo ausente do outline.
6. Slug conserva o assunto e não muda URL publicada sem encaminhamento.
7. H2 cobre a dúvida sem repetição artificial.
8. Links possuem destinos existentes e âncoras descritivas.
9. Relação com páginas semelhantes foi registrada.

## Erros comuns

- Tratar faixa de caracteres como limite técnico universal. Registre como convenção editorial.
- Dizer que um termo tem alta procura sem medir. Informe que é hipótese.
- Publicar duas páginas quase iguais. Compare a tarefa respondida.
- Prometer preço no title sem fonte de oferta. Retire a promessa ou obtenha a fonte.

## Arquitetura aplicada

Leia [fontes](../_shared/01-preflight-e-fontes.md) e [contexto](../_shared/05-contexto-editorial.md) ao identificar a pergunta. Use [artefato](../_shared/02-contrato-de-artefato.md), [handoff](../_shared/03-interacao-e-handoff.md) e [retomada](../_shared/04-validacao-e-retomada.md) no pacote devolvido.

## Guia específico do grupo

Não redija o corpo nem escolha canal. Receba a pergunta e devolva metadata e outline à chamadora. Consulte `CONTEXTO.md`, `ESCRITA.md` e os arquivos de produtos, serviços e ferramentas para confirmar nomes e destinos.
