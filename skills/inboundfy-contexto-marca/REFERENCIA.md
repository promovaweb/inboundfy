# REFERENCIA.md; inboundfy-contexto-marca

Roteiro de entrevista, exemplo preenchido e checklist para
`context/marca-voz.md`, `context/proibicoes.md` e
`context/estruturas-proibidas.md`. As seções genéricas de proibições e de
estruturas proibidas já vêm pré-preenchidas no template; este roteiro foca
no que ainda está vazio: tom específico da marca e vetos próprios do
usuário.

## Sobre `context/estruturas-proibidas.md`

Esse arquivo raramente precisa de entrevista; ele já chega com o catálogo
genérico de padrões de texto com cara de IA (aberturas, fechamentos,
vocabulário, estrutura de parágrafo, heading, pontuação). Só acione ajuste
nele quando:

- o usuário observar um padrão específico recorrente na própria produção
  que ainda não está catalogado; adicione como item novo, na seção mais
  próxima do padrão observado;
- a voz da marca aceitar deliberadamente um item da lista genérica (ex.:
  marca que usa emoji em rede social de propósito); remova ou anote a
  exceção, sem apagar o restante da seção;
- o usuário pedir para afrouxar ou endurecer o rigor de alguma categoria
  inteira (ex.: tolerar tríade de adjetivos em conteúdo publicitário curto).

Nunca remova a seção inteira só para "simplificar"; ela é o que garante
que `inboundfy-base-editor` pegue padrão de IA mesmo quando `marca-voz.md`
ainda está incompleto.

## Roteiro de entrevista

### Marca e voz

1. "Em três adjetivos, como você descreveria o tom da marca?"
2. "Qual é o idioma padrão de produção, e a pessoa gramatical preferida
   (primeira pessoa, terceira pessoa, varia por canal)?"
3. "O vocabulário deve ser técnico, intermediário ou para iniciante total no
   assunto?"
4. "Humor é permitido? Em quais canais sim, em quais não?"
5. "Existe palavra ou expressão que a marca sempre usa de propósito, no
   lugar de uma alternativa mais comum?"
6. "Existe palavra ou expressão que a marca evita por estilo (não por veto
   duro)?"
7. "Cole um trecho real de texto que representa bem essa voz." → exemplo de
   bom texto.
8. "Cole um trecho (real ou hipotético) que representa o oposto dessa voz."
   → exemplo a evitar.
9. "Como a marca se despede em e-mail? Existe CTA padrão?"

### Proibições específicas

1. "Existe algum termo ou promessa que a marca nunca pode usar, além das
    proibições genéricas já pré-preenchidas?"
2. "Existe comparação que nunca deve ser feita (concorrente específico,
    categoria de produto)?"
3. "Existe tipo de afirmação (dado médico, jurídico, financeiro,
    estatística de terceiro) que sempre precisa de confirmação humana antes
    de publicar? Quem confirma?"
4. "Algum canal ou público tem regra própria (ex.: sem humor em canal
    institucional)?"

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Tom

- **Em três adjetivos:** direto, prático, sem enrolação
- **Idioma padrão de produção:** português do Brasil
- **Pessoa gramatical preferida:** primeira pessoa do plural no institucional, segunda pessoa em tutorial
- **Nível técnico do vocabulário:** iniciante; o público nunca usou sistema de gestão
- **Humor é permitido?** sim, leve, em redes sociais; não no e-mail transacional

## Vocabulário preferido

- `estoque parado`; usar em vez de `giro de catalogo` (termo técnico demais para o público)

## Vocabulário evitado

- `solução` como substantivo genérico; motivo: soa vago; nomeie o que o produto faz

## Exemplos de bom texto

> Você cadastra o produto tirando uma foto. O sistema já sugere a categoria.
> Se estiver errado, você corrige uma vez e ele aprende para a próxima.

## Exemplos de texto a evitar

> Nossa plataforma revoluciona a gestão do seu negócio com tecnologia de
> ponta.; motivo: jargão vazio, não diz o que o produto faz.

## Assinatura e fechamento padrão

- **Como a marca se despede em e-mail:** "Qualquer dúvida, responda este e-mail; alguém do time lê."
```

```markdown
## Termos e promessas proibidas

- `sistema completo de gestão`; motivo: a Estoquely só faz estoque, não
  gestão financeira ou fiscal; a frase infla escopo.

## Comparações proibidas

- Comparação direta de preço com concorrentes por nome em anúncio pago;   motivo: política comercial da empresa.

## Afirmações que exigem confirmação antes de publicar

- Dado de redução de perda de venda ou economia financeira; quem confirma:
  Marina Alves (produto).
```

## Checklist de completude

- [ ] Tom definido com adjetivos concretos, não genéricos ("bom",
      "profissional").
- [ ] Ao menos um exemplo real de bom texto presente; sem isso, skills de
      redação não têm calibração de voz.
- [ ] Distinção clara entre vocabulário evitado (preferência) e proibição
      (veto duro); nunca duplicar o mesmo item nos dois arquivos.
- [ ] Toda proibição específica do usuário tem motivo registrado.

## Erros comuns

- Registrar um veto de estilo (ex.: "prefiro não usar emoji") em
  `proibicoes.md`; isso é preferência, vai em "Vocabulário evitado" de
  `marca-voz.md`. Proibição é para o que reprova a peça de verdade.
- Aceitar exemplo de bom texto fabricado sem marcar como ilustrativo;   prefira sempre um trecho real do usuário.
- Remover ou editar a seção de proibições genéricas pré-preenchida sem o
  usuário pedir; ela é ponto de partida útil, não lixo a limpar por
  padrão.
- Registrar proibição vaga ("nada que pareça amador") sem termo ou situação
  concreta; isso não é verificável por `inboundfy-base-editor`.
