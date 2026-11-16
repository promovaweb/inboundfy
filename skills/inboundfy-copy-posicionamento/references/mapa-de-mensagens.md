# Mapa de mensagens

Leia no passo 6 do fluxo. O mapa traduz o posicionamento escolhido em
mensagens que todas as skills de copy usam, com variação por persona e por
canal. Ele evita que o blog, o anúncio e o vendedor contem três histórias
diferentes sobre o mesmo produto.

## Estrutura

| Camada | O que é | Quantidade |
| --- | --- | --- |
| Mensagem central | Uma frase com cliente, valor e diferença | 1 |
| Pilares | Temas de valor que sustentam a mensagem central | 2 a 4 |
| Provas | Fatos que comprovam cada pilar | 1 a 3 por pilar |
| Objeções | Dúvidas que cada persona levanta e a resposta | 2 a 4 por persona |
| Variação por persona | Como a ênfase muda para cada persona | 1 por persona ativa |

## Template

```markdown
## Mapa de mensagens

### Mensagem central

{{frase pública derivada da declaração de posicionamento}}

### Pilares

| Pilar | Mensagem | Provas | Fonte |
| --- | --- | --- | --- |
| {{tema}} | {{frase}} | {{fatos}} | {{caminho}} |

### Por persona

| Persona | Pilar de entrada | Ênfase | Objeção principal | Resposta |
| --- | --- | --- | --- | --- |
| {{persona-01}} | {{pilar}} | {{o que destacar}} | {{...}} | {{...}} |

### Por canal e nível de consciência

| Canal | Nível típico | Mensagem usada |
| --- | --- | --- |
| Anúncio de busca | Conhece soluções | {{pilar ou diferença}} |
| Blog | Sabe do problema | {{problema e pilar educativo}} |
| Página de produto | Conhece o produto | {{pilares com provas}} |
| Email de nutrição | Varia | {{um pilar por email}} |
| Conversa de vendas | Conhece o produto | {{objeções e provas}} |

### Frases proibidas para este produto

- {{promessa que o produto não sustenta}}
```

## Exemplo ilustrativo

Continuação do Gestor Obra, empresa fictícia de `REFERENCIA.md`.

### Mensagem central

Controle de obra pelo WhatsApp que avisa quando uma etapa vai estourar o
orçamento.

### Pilares

| Pilar | Mensagem | Provas |
| --- | --- | --- |
| Registro na obra | A compra entra no sistema assim que acontece, pelo WhatsApp. | Recurso em produção; média de 4 lançamentos por obra por dia (CRM). |
| Aviso antes do estouro | O dono recebe alerta quando a etapa passa de 90% do orçado. | Recurso em produção; depoimento de construtora de Anápolis em `depoimentos.json`. |
| Troca sem parar a obra | Implantação em cerca de uma semana com importação da planilha. | Média de 6 dias nos últimos 30 clientes. |

### Por persona

| Persona | Pilar de entrada | Ênfase | Objeção principal | Resposta |
| --- | --- | --- | --- | --- |
| Dono da construtora | Aviso antes do estouro | Margem preservada | "Mais um sistema para pagar" | Comparar R$ 290 com uma compra duplicada de cimento |
| Engenheiro | Registro na obra | Menos digitação no fim do dia | "A equipe não vai usar" | O mestre só manda foto no WhatsApp |
| Mestre de obras | Registro na obra | Não precisa aprender sistema | "Não tenho tempo" | Uma foto da nota por compra |

## Regras de uso

- A mensagem central não é slogan. Ela orienta; a copy de cada canal escreve
  a versão final com `inboundfy-copy-redacao`.
- Cada peça usa um pilar principal. Peça que usa todos os pilares ao mesmo
  tempo dilui a mensagem.
- Prova citada no mapa precisa existir no contexto ou no acervo. Prova
  desejada, mas inexistente, vai para hipóteses abertas.
- Quando um pilar perde prova (recurso descontinuado, dado desatualizado),
  o mapa ganha nova versão antes de qualquer peça nova usar o pilar.

## Falhas prováveis

- Pilares que são características ("integração", "relatórios") em vez de
  temas de valor.
- Mesma ênfase para dono e para mestre de obras.
- Mapa aprovado e nunca lido pelas especialistas de canal: registre o caminho
  do documento no brief de cada peça.
