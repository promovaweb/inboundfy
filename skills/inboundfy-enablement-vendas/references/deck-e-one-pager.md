# Deck, one-pager e resumo pós-reunião

Leia no passo 4 do fluxo quando o pedido for apresentação, material para
enviar depois da reunião ou resumo da conversa.

## Deck de vendas

### Arco narrativo

O deck conta a história do comprador, não a da empresa. A sequência vai do
mundo atual do cliente ao custo de ficar parado, passa pela mudança que torna
o problema urgente e só então mostra a abordagem e o produto.

| Slide | Função | Pergunta que o slide responde | Conteúdo mínimo |
| --- | --- | --- | --- |
| 1 | Mundo atual | Você reconhece essa situação? | Cena da rotina da persona com o problema. Nada de logo grande. |
| 2 | Custo do problema | Quanto isso custa hoje? | Horas, reais ou clientes perdidos, com a conta à vista. |
| 3 | A mudança | Por que resolver agora? | Regra nova, mudança de mercado, crescimento da operação. |
| 4 | Abordagem | Qual é o jeito diferente de resolver? | Princípio da solução antes do produto. |
| 5 | Produto em ação | Como funciona na prática? | Dois ou três fluxos ligados às dores da descoberta. |
| 6 | Provas | Quem já resolveu assim? | Números com fonte, logos autorizados, depoimento com consentimento. |
| 7 | Caso | Como foi para alguém parecido comigo? | Antes, durante e depois de um cliente do mesmo porte. |
| 8 | Implantação | Quanto trabalho dá para começar? | Etapas, prazo e quem faz o quê. |
| 9 | Retorno | Vale o investimento? | Resultado da calculadora de ROI com os números do cliente. |
| 10 | Investimento | Quanto custa? | Planos, condições, forma de pagamento (Pix, boleto, cartão). |
| 11 | Próximo passo | O que fazemos agora? | Uma ação, uma data, um responsável de cada lado. |

Para reunião curta (15 minutos), use os slides 1, 2, 5, 6 e 11.

### Regras de construção

- Um slide, uma ideia. O título do slide é a conclusão ("Cada unidade gasta
  12 horas por mês corrigindo ponto"), não o tema ("Problema").
- No máximo três itens por slide e nenhum parágrafo.
- Tela de produto real, recortada no ponto que importa. Nada de captura da
  tela inteira com menus.
- Demonstração ao vivo só depois que a dor foi confirmada no slide 2.
- Slides de apoio (segurança, integrações, perguntas técnicas) ficam no
  anexo e entram quando alguém pergunta.

### Versões por papel na compra

| Papel | Ênfase | Corte | Acrescente |
| --- | --- | --- | --- |
| Decisor financeiro | Custo do problema, retorno, prazo de pagamento do investimento | Detalhe de tela | Calculadora com números do cliente e comparação com o custo atual. |
| Técnico | Arquitetura, segurança, integração, migração | História de mercado | Anexo de segurança, LGPD (onde os dados ficam, quem acessa), integrações de `context/integracoes.md`. |
| Usuário | Rotina antes e depois, facilidade | Retorno financeiro detalhado | Fluxo de uso do dia a dia e tempo de aprendizado. |
| Campeão interno | Argumentos para vender por dentro | Nada | Slide resumo de uma página que ele pode encaminhar para a diretoria. |

## One-pager

Documento de uma página que o comprador lê sozinho, sem a pessoa vendedora
explicando. Serve para três situações: material enviado depois da reunião,
peça que o campeão interno encaminha para quem não participou e apoio em
evento ou feira.

### Estrutura

```markdown
# {{Resultado principal em uma frase}}

{{Uma frase de contexto: para quem é e qual problema resolve.}}

## O problema
- {{dor 1 com consequência}}
- {{dor 2 com consequência}}

## Como resolvemos
- {{capacidade 1}}: {{consequência para o cliente}}
- {{capacidade 2}}: {{consequência para o cliente}}
- {{capacidade 3}}: {{consequência para o cliente}}

## Prova
{{Número com fonte ou depoimento com consentimento, com nome, cargo e empresa.}}

## Como começar
{{Prazo de implantação, condição comercial e contato: WhatsApp, e-mail, link de agenda.}}
```

Regras: no máximo 250 palavras, uma prova forte em vez de cinco fracas,
contato com nome de pessoa (não "fale com nossa equipe").

## Resumo pós-reunião

Enviado no mesmo dia da reunião, por e-mail ou WhatsApp. É a peça mais lida
pelo comprador, porque registra o que ele mesmo disse.

```markdown
Oi, {{nome}}. Obrigado pela conversa de hoje.

O que entendi:
- {{situação atual com as palavras do cliente}}
- {{custo ou consequência que ele citou}}
- {{prioridade e prazo que ele deu}}

O que combinamos:
- {{próximo passo do cliente}} até {{data}}
- {{próximo passo nosso}} até {{data}}

Corrija se entendi algo errado.
```

No WhatsApp, quebre em mensagens curtas e envie o one-pager em PDF logo
depois do resumo. Não envie áudio longo como substituto do resumo escrito.

## Erros comuns

- Começar o deck pela história da empresa e pela foto da equipe.
- Usar o mesmo deck para o técnico e para o diretor financeiro.
- Colocar preço antes de mostrar custo do problema e retorno.
- One-pager com texto do site colado, sem prova e sem contato.
- Resumo pós-reunião genérico, sem nenhuma frase que o cliente disse.
