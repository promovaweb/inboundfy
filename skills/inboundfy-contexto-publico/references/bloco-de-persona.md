# Bloco de persona

Formato canônico de uma persona em `.inboundfy/context/publico.md`. Lido no
passo 2 do fluxo sempre que a skill grava ou altera uma persona.

## Bloco completo

```markdown
## Persona {NN}: {nome de referência}

- **ID:** persona-{NN}
- **Quem é:** {função, tipo e porte do negócio, maturidade no assunto}
- **Contexto de compra:** {o que acontece antes de procurar uma saída}
- **Problema que tenta resolver:** {nas palavras da persona}
- **Resultado que procura:** {o que muda quando o problema some}
- **O que já sabe sobre o problema:** {nível de consciência}
- **Dor principal:** {cena concreta: lugar, momento, consequência}
- **O que já tentou e não resolveu:** {tentativas e por que falharam}
- **Objeção mais comum:** {fala da persona}
- **O que faria essa pessoa agir:** {gatilho concreto}
- **Onde essa pessoa consome conteúdo:** {canais e fontes de confiança}
- **Jargão que essa pessoa usa (para espelhar na busca/título):** {termos}
- **Oferta relacionada:** {produto, serviço ou plano de context/}
- **Fonte e confiança:** {origem, data e nível: pesquisa, observação, hipótese}
```

Os campos do template de origem estão todos presentes. Os campos `ID`,
`Contexto de compra`, `Problema que tenta resolver`, `Resultado que procura`,
`Oferta relacionada` e `Fonte e confiança` são acrescentados. Os quatro
primeiros campos depois do ID são os que o `inboundfy doctor` confere. Os
campos de perfil, contexto, problema, resultado, canais e oferta alimentam o
menu de seleção de personas definido em `skills/_shared/03-interacao-e-handoff.md`.

## Numeração

- Use dois dígitos: `Persona 01`, `persona-01`.
- A próxima persona recebe o maior número existente mais um.
- Número de persona inativa não é reaproveitado.
- Ao migrar um bloco antigo no formato `## {Nome}`, atribua o próximo número
  e informe o usuário.

## Problema, dor e resultado

Os três campos parecem iguais e não são.

| Campo | Pergunta | Exemplo fictício |
| --- | --- | --- |
| Problema que tenta resolver | o que ela diria se perguntassem | "não sei o que tenho na loja sem contar" |
| Dor principal | a cena que dói | devolver o Pix de uma cliente fiel porque a peça tinha acabado |
| Resultado que procura | como ela descreve o depois | responder no WhatsApp na hora, com certeza |

## Nível de consciência

Use a escala clássica de consciência do comprador para preencher
`O que já sabe sobre o problema`. Ela orienta o ângulo das peças.

| Nível | A persona | Conteúdo que serve |
| --- | --- | --- |
| Inconsciente | não percebe o problema | história, diagnóstico, custo escondido |
| Consciente do problema | sente a dor, não conhece saídas | explicação do problema, causas |
| Consciente da solução | sabe que existem saídas | comparação de abordagens |
| Consciente do produto | conhece a empresa | prova, demonstração, objeções |
| Mais consciente | quase pronta | oferta, condição, prazo |

## Forças da troca

Para `O que já tentou` e `Objeção mais comum`, use as quatro forças do
método de trabalhos a fazer (JTBD): empurrão da situação atual, atração da
alternativa nova, ansiedade com a mudança e hábito do jeito atual. A objeção
costuma ser ansiedade ("vou complicar minha vida") ou hábito ("o caderno
sempre funcionou").

## Persona e segmento

Segmento é um grupo de empresas ou pessoas (lojas de roupas de bairro).
Persona é uma pessoa dentro do segmento com contexto de compra próprio. Um
segmento com duas pessoas que compram por motivos diferentes vira duas
personas. Duas personas com os mesmos campos viram uma.

## Erros comuns

- Preencher idade, gênero e hobby no lugar do contexto de compra. Dado
  demográfico só entra quando muda a mensagem.
- Copiar a dor para o campo de problema com as mesmas palavras.
- Oferta relacionada que não existe em `ofertas.md`, `produtos.md` ou
  `servicos.md`.
