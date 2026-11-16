# Proibições de negócio

Referência de `.inboundfy/context/proibicoes.md`. Lida no passo 2 do fluxo
quando o pedido for um veto de termo, promessa, comparação, afirmação
sensível ou regra por canal.

## O que é veto

Veto é o que reprova a peça independentemente da qualidade do texto. A
`inboundfy-copy-editor` e as validadoras tratam cada linha deste arquivo
como motivo para impedir a publicação. Por isso todo veto precisa ser verificável:
termo literal, padrão descrito com exemplo ou categoria de afirmação com
responsável pela checagem.

## Seções do arquivo

| Seção | O que entra | Formato |
| --- | --- | --- |
| Proibições genéricas sugeridas | ponto de partida do framework | editar só a pedido |
| Termos e promessas proibidas | palavras e promessas vetadas pela empresa | `termo; motivo: ... Origem: ...` |
| Comparações proibidas | concorrente, categoria ou forma de comparar | `comparação; motivo: ...` |
| Afirmações que exigem confirmação | categorias sensíveis | `categoria; quem confirma: papel` |
| Canais ou públicos com regra própria | regra limitada a um canal ou público | `canal ou público; regra: ...` |

O template de origem separa termo e motivo com um traço longo. Ao gravar,
use ponto e vírgula, como na tabela.

## Origens comuns de veto no Brasil

Registre a origem no motivo. Ela orienta quem pode afrouxar a regra depois.

| Origem | Exemplos de veto | Quem confirma |
| --- | --- | --- |
| Código de Defesa do Consumidor (publicidade enganosa ou abusiva) | prometer resultado que o produto não entrega, omitir custo relevante | jurídico |
| Autorregulamentação publicitária (CONAR) | comparação sem base objetiva, testemunho sem identificação | marketing e jurídico |
| Conselhos profissionais (medicina, odontologia, advocacia, psicologia, contabilidade) | antes e depois, promessa de cura, captação de clientela, preço de consulta | profissional responsável |
| Órgãos setoriais (saúde, mercado financeiro, seguros) | promessa de rentabilidade, alegação terapêutica | compliance |
| LGPD | expor dado de cliente, citar caso sem autorização | encarregado de dados |
| Política comercial | citar preço de concorrente, prometer desconto não aprovado | comercial |
| Contrato com parceiro | usar marca de parceiro sem aprovação | comercial |

Quando o usuário citar uma norma, registre o nome da norma como ele
informou. A skill não interpreta lei nem afirma que um texto está em
conformidade.

## Roteiro de entrevista

1. "Existe termo ou promessa que a marca nunca pode usar, além da lista
   genérica?"
2. "Existe comparação que nunca deve ser feita: concorrente, categoria,
   preço?"
3. "Vocês estão num setor com conselho profissional ou órgão regulador?
   Quais regras ele impõe à publicidade?"
4. "Que tipo de afirmação precisa de checagem humana antes de publicar?
   Quem checa?"
5. "Algum canal ou público tem regra própria?"
6. "Algum item da lista genérica não vale para a marca?"

## Exemplo preenchido (fictício; clínica odontológica "Sorriso Pampulha")

```markdown
## Termos e promessas proibidas

- "sem dor", "resultado garantido", "o melhor dentista de BH"; motivo: promessa de resultado e autopromoção vetadas pelo conselho profissional. Origem: orientação da responsável técnica, 2026-10-02.
- fotos de antes e depois; motivo: regra do conselho profissional para publicidade. Origem: responsável técnica.

## Comparações proibidas

- comparar preço com outras clínicas; motivo: política comercial e regra do conselho.

## Afirmações que exigem confirmação antes de publicar

- qualquer informação sobre tratamento, prazo de recuperação ou indicação clínica; quem confirma: responsável técnica (dentista).

## Canais ou públicos com regra própria

- Instagram; regra: preço de procedimento nunca aparece em post ou story.
- WhatsApp; regra: nenhum diagnóstico por mensagem.
```

## Checklist

- [ ] O veto é termo literal, padrão com exemplo ou categoria com
      responsável.
- [ ] Motivo e origem registrados.
- [ ] Não duplica item da lista genérica nem do vocabulário evitado.
- [ ] Regra por canal está na seção de canais, não na lista geral.
- [ ] Alteração na lista genérica foi pedida pelo usuário.

## Erros comuns

- Veto subjetivo ("nada brega"). Não há como verificar.
- Registrar a mesma palavra em `marca-voz.md` e aqui.
- Copiar trechos de lei para o arquivo. Registre a regra prática e a
  origem; a leitura jurídica é do responsável.
- Esquecer de quem confirma afirmação sensível. A validadora não sabe a
  quem perguntar.
