# Objeções e battlecards

Leia no passo 4 do fluxo quando o pedido for biblioteca de objeções, resposta
para uma objeção de um negócio específico ou battlecard contra concorrente.

## Categorias de objeção

| Categoria | Frases típicas | O que costuma estar por trás |
| --- | --- | --- |
| Preço | "Está caro", "não tenho verba", "o concorrente cobra menos" | Valor ainda não ficou claro ou o comprador não é quem decide o orçamento. |
| Momento | "Agora não", "volta no próximo trimestre" | Falta urgência ou há outra prioridade maior. |
| Concorrência | "Já usamos X", "qual a diferença?" | Custo de troca percebido alto. |
| Autoridade | "Preciso falar com meu sócio", "quem decide é a diretoria" | A pessoa não tem poder de compra ou quer apoio para defender a compra. |
| Situação atual | "Do jeito que está funciona" | A dor não foi quantificada. |
| Técnica | "Integra com nosso sistema?", "e a segurança dos dados?" | Medo de implantação difícil ou de problema com a LGPD. |
| Confiança | "Nunca ouvi falar de vocês", "e se vocês fecharem?" | Falta prova social e garantia. |

## Método de resposta em quatro tempos

1. **Reconheça.** Mostre que a preocupação faz sentido, sem concordar com a
   conclusão. "Faz sentido olhar o custo com cuidado."
2. **Pergunte.** Descubra o que está por trás. "Caro comparado com o quê?"
3. **Reposicione.** Responda à preocupação real com dado do cliente ou prova.
4. **Confirme.** Verifique se respondeu e proponha o próximo passo. "Isso
   resolve a dúvida sobre preço? Podemos montar a conta com os seus
   números?"

Nunca pule o segundo tempo. Responder antes de entender transforma a conversa
em debate.

## Respostas de referência

Adapte ao contexto do projeto. Toda resposta usa dado de `context/` ou do
cliente. Nenhuma promete o que a oferta não comprova.

### "Está caro"

- **Pergunta:** comparado com o quê? Com outra ferramenta, com o orçamento
  que você tinha em mente ou com não fazer nada?
- **Se for contra outra ferramenta:** compare o pacote completo (implantação,
  suporte, limites), não só a mensalidade.
- **Se for contra o orçamento:** mostre o custo atual do problema com os
  números que ele deu na descoberta.
- **Se for contra não fazer nada:** retome o custo mensal da situação atual.
- **Não faça:** desconto imediato. Ensina o comprador a pedir mais.

### "Agora não é o momento"

- **Pergunta:** o que precisa acontecer para virar prioridade? O que está na
  frente hoje?
- **Reposicione:** quanto custa esperar três meses, em reais ou horas.
- **Próximo passo:** marque data concreta de retorno com um gatilho
  combinado (fechamento do trimestre, contratação nova).

### "Já usamos X"

- **Pergunta:** o que funciona bem com X? O que você mudaria se pudesse?
- **Reposicione:** foque no ponto que ele quer mudar, com prova.
- **Próximo passo:** teste em paralelo numa equipe ou unidade, sem troca
  total.

### "Preciso falar com meu sócio"

- **Pergunta:** o que seu sócio vai querer saber? Faz sentido ele entrar na
  próxima conversa?
- **Reposicione:** entregue o material para o campeão vender por dentro
  (resumo de uma página, calculadora, respostas para as dúvidas previstas).
- **Próximo passo:** reunião com os dois, com data.

### "Do jeito que está funciona"

- **Pergunta:** quanto tempo a equipe gasta com isso por semana? O que
  acontece quando dá errado?
- **Reposicione:** quantifique o custo invisível com os números dele.

### "E a segurança dos dados?"

- **Pergunta:** quais exigências a sua empresa tem? Existe alguém de TI ou
  jurídico que precisa avaliar?
- **Reposicione:** onde os dados ficam, quem acessa, como é a exclusão, base
  legal de tratamento conforme a LGPD, com fonte em `context/produtos.md` ou
  documento oficial da empresa.
- **Não faça:** prometer certificação que a empresa não tem.

## Formato da biblioteca

Duas versões do mesmo conteúdo:

1. **Tabela de consulta rápida** para usar com o cliente na linha:

   ```markdown
   | Objeção | Pergunta de volta | Resposta curta | Prova |
   | --- | --- | --- | --- |
   | {{frase do cliente}} | {{pergunta}} | {{resposta em uma frase}} | {{fonte}} |
   ```

2. **Fichas detalhadas** por objeção, com os quatro tempos, variações e o
   que não fazer.

## Objeção de um negócio específico

Quando a pessoa vendedora traz uma objeção de uma negociação em curso:

1. Peça a frase exata do cliente, o papel dele e a etapa.
2. Leia o que já foi conversado (resumo pós-reunião, anotações do CRM).
3. Escreva a resposta nos quatro tempos com dado daquele cliente.
4. Entregue também a mensagem pronta para WhatsApp ou e-mail.
5. Se a objeção for nova, acrescente à biblioteca com a data.

## Battlecard

Uma página por concorrente. Responde à pergunta "o que eu falo quando o
cliente cita X?".

```markdown
# Battlecard: {{nossa oferta}} contra {{concorrente}}

## Em 30 segundos
{{Diferença principal em três frases, do ponto de vista do cliente.}}

## Perfil do concorrente
- **Oferta:** {{o que vende}}
- **Preço público:** {{valor e data de consulta, ou "não publicado"}}
- **Ponto forte real:** {{o que fazem bem}}
- **Cliente típico:** {{porte e segmento}}

## Onde ganhamos
| Situação | Por quê | Prova |

## Onde perdemos
| Situação | Por quê | Como responder |

## Perguntas que mudam a conversa
1. {{pergunta que expõe a situação na qual ganhamos}}

## Objeções esperadas
- **{{frase}}:** {{resposta}}

## Armadilhas a evitar
- {{o que não dizer}}

## Atualização
- **Fontes:** {{site, página de preços, avaliações públicas, perdas no CRM}}
- **Revisar em:** {{AAAA-MM-DD}}
```

### Regras do battlecard

- Ponto forte real do concorrente aparece. Esconder faz a pessoa vendedora
  ser pega de surpresa.
- Diferença verificável, nunca adjetivo ("melhor", "mais moderno").
- Nome do concorrente só quando `context/concorrentes.md` permite citação
  nominal.
- Revisão a cada trimestre ou quando o concorrente mudar preço ou produto.
  Perdas recentes no CRM são a fonte mais rápida de atualização.
- Concorrente novo ou dado desatualizado vai para
  `inboundfy-contexto-concorrentes`. Análise de página e funil do
  concorrente vai para `inboundfy-engenharia-reversa`.
