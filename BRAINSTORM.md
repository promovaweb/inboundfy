# BRAINSTORM.md — Da Ideia ao Material Editorial

O brainstorm do Thothfy transforma uma ideia curta em uma base pesquisada,
registrada e pronta para alimentar `METODOLOGIA.md`. Ele atende pedidos como
“quero falar sobre retenção em SaaS” sem exigir que a pessoa saiba escolher
canal, ângulo ou estrutura de copy.

## Resultado esperado

Cada execução cria `brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md`. O arquivo
preserva a ideia recebida, registra respostas e suposições, reúne fontes
externas, separa fatos de hipóteses e propõe peças compatíveis com os canais
ativos. A validação final cruza a escrita com `ESCRITA.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`.

O brainstorm aprovado pode seguir por dois caminhos:

- `thothfy-iniciar`, quando deve gerar várias peças a partir da mesma base;
- `thothfy-planejamento-04-briefing`, quando a ideia já aponta uma única
  peça e um único canal.

## Sequência

```text
00 Triagem → 01 Entrevista → 02 Pesquisa → 03 Síntese → 04 Validação
```

Cada fase pertence a uma skill `thothfy-brainstorm-<NN>-*`. A wrapper
`thothfy-brainstorm` executa as cinco na ordem e entrega o arquivo aprovado.

### 00. Triagem

Preserva o input original, cria o slug e identifica o que já está confirmado
nos arquivos de `context/`. Também classifica a intenção predominante:
educar, posicionar, gerar demanda, converter ou reter.

### 01. Entrevista

Investiga apenas lacunas que mudariam a tese, a audiência ou a veracidade da
peça. A skill consulta primeiro os arquivos existentes. Quando uma resposta
não puder ser inferida, faz um único bloco com até cinco perguntas
específicas. Campos opcionais viram suposições explícitas e não interrompem o
fluxo.

### 02. Pesquisa

Busca fontes atuais para confirmar conceitos, encontrar contrapontos e
enriquecer exemplos. Cada registro guarda título, endereço, responsável,
data de publicação quando disponível, data de acesso e uso pretendido.
Fontes primárias têm preferência. Pesquisa externa não altera `context/` e
não transforma hipótese em fato.

### 03. Síntese

Preenche o modelo canônico em `templates/brainstorm.md`. A síntese define a
tese, o recorte, as perguntas que a peça precisa responder, os argumentos,
as objeções, as evidências, os limites e as oportunidades por canal.

### 04. Validação

Confere cobertura do modelo, proveniência das afirmações externas, aderência
à voz e ausência de violações editoriais. Uma falha factual volta à pesquisa;
uma falha de foco volta à entrevista; uma falha de redação volta à síntese.

## Política de autonomia

A wrapper segue sem solicitar aprovação intermediária. Ela pergunta ao
usuário apenas quando a lacuna pode gerar afirmação comercial, jurídica,
médica, financeira, de preço, de produto ou de autoria sem apoio. Nesses
casos, reúne as perguntas numa única mensagem.

Nos demais casos, a wrapper:

1. usa fatos confirmados em `context/`;
2. prefere a interpretação mais conservadora;
3. registra a suposição no `brainstorm.md`;
4. escolhe até cinco oportunidades apoiadas pela base;
5. encaminha automaticamente o arquivo aprovado para o fluxo pedido.

## Nome e idempotência

O diretório usa a data local e um slug derivado da ideia:
`brainstorms/2026-07-30-retencao-em-saas/`. Se o caminho já existir, a
wrapper acrescenta `-02`, `-03` e assim por diante. O input original nunca é
alterado. Uma retomada com caminho explícito atualiza o mesmo
`brainstorm.md` e preserva o histórico de validação.
