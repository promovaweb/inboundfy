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
que `inboundfy-copy-editor` pegue padrão de IA mesmo quando `marca-voz.md`
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
  concreta; isso não é verificável por `inboundfy-copy-editor`.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-marca**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de contexto marca dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-contexto-marca
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de contexto marca

## Resultado

{Conteúdo específico da etapa.}

## Pendências

- {pergunta ou "nenhuma"}

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Exemplo operacional completo

### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-contexto-marca
grupo: contexto
entrada: acervo/0042-2026-09-14-contexto-marca/processado.md
pedido: aplicar a etapa de contexto marca e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

### Saída ilustrativa

```markdown
---
id: 0042
skill: inboundfy-contexto-marca
estado: aprovado
entrada: acervo/0042-2026-09-14-contexto-marca/processado.md
fontes:
  - .inboundfy/context/marca.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de contexto marca

## Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy-contexto-marca** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-contexto-marca** para executar esta função: Preenche e mantém context/marca-voz.md, context/proibicoes.md e context/estruturas-proibidas.md. Ative quando o usuário definir ou ajustar tom, vocabulário, exemplos de voz, registrar um veto editorial, ou editar o catálogo de padrões de texto com cara de IA.

O grupo **contexto** trabalha com estes campos mínimos:

- **arquivo canônico:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **preferências:** preencher com dado ligado ao pedido.
- **fonte:** preencher com dado ligado ao pedido.
- **alteração:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-contexto-marca
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/marca-voz.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-marca
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/marca-voz.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **contexto** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `CONTEXTO.md`
- `docs/method/02-contexto-fontes-e-precedencia.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
