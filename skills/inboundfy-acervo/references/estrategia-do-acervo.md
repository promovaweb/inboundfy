# Matriz de reaproveitamento do acervo

Leia esta referência no passo 6 de `inboundfy-acervo`, depois de processado, FAQ, pesquisa e base editorial. Ela organiza possibilidades; a escolha de produção passa pelo usuário e por `inboundfy-planejamento`.

## Entradas e perguntas

Receba ID, afirmações utilizáveis da base, personas completas e canais ativos de `.inboundfy/estrategia.md`. Consulte `context/canais.md`, `context/publico.md`, `context/ofertas.md` e o índice de peças.

Para cada oportunidade, pergunte qual dúvida ela resolve, qual fato a sustenta, como difere de outra peça e qual ação o leitor poderá realizar depois. Um canal sem tese própria não precisa receber uma peça só para preencher a matriz.

## Método de composição

1. Separe dúvidas de compreensão, comparação, aplicação e compra, conforme o conteúdo disponível.
2. Relacione cada dúvida a uma persona existente. Se a base não permite responder, registre a dependência antes de sugerir data.
3. Escolha formatos compatíveis com os canais ativos. Não proponha rede desativada.
4. Descreva ângulos materialmente distintos. Artigo pode explicar a operação; post pode discutir um erro; vídeo pode demonstrar a conferência.
5. Registre estágio comercial, objetivo, oferta e CTA somente quando fizerem sentido para a peça.
6. Ordene por utilidade para a persona, prontidão das fontes e esforço disponível. Não produza pontuação sem explicar os fatores.
7. Execute A3 sobre títulos, ângulos e CTAs. Apresente a matriz para escolher produção imediata, calendário ou guarda.

## Template de estrategia.md

```markdown
# Possibilidades do acervo <id>

| Uso | Canal ativo | Formato | Ângulo e tese | Persona | Estágio | Objetivo | CTA | Fonte | Dependência | Prioridade | Data sugerida |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| U01 | <canal> | <formato> | <dúvida e resposta> | <id> | <estágio> | <ação observável> | <próximo passo> | <F01 da base> | <necessidade> | <ordem justificada> | <data ou não definida> |

## Relações entre peças
<Qual peça complementa outra e qual assunto não deve ser repetido.>

## Escolha registrada
<Saída escolhida, alcance e próxima skill.>
```

## Exemplo: Pinhão Bicicletas, empresa fictícia

Entrada: seis avisos, quatro respostas, visitas pendentes. Canais ativos: blog e LinkedIn. Persona: responsável por oficina pequena.

| Uso | Canal ativo | Formato | Ângulo e tese | Persona | Estágio | Objetivo | CTA | Fonte | Dependência | Prioridade | Data sugerida |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| U01 | blog | guia | Separar envio, resposta e visita no registro | persona-01 | compreensão | Organizar conferência | Consultar a própria agenda | F01 e F02 | Exemplo de campos sem dado pessoal | 1: fonte suficiente para explicar o método | não definida |
| U02 | LinkedIn | post | Quatro respostas ainda não são quatro visitas | persona-01 | compreensão | Rever a leitura do retorno | Conferir a coluna de comparecimento | F02 e ressalva | Confirmar data do caso | 2: aguarda data para situar o relato | não definida |

A primeira proposta explica uma rotina. A segunda discute uma interpretação errada. A matriz não promete vendas e não inclui canal desativado. Se o usuário escolher guardar o material, nenhuma das linhas vira peça automaticamente.

## Conferência e retomada

Confirme fonte por tese, persona existente, canal ativo e diferença real entre as propostas. Uma oportunidade que depende de visitas confirmadas permanece pendente. Atualize a mesma matriz quando a resposta chegar e preserve a escolha anterior no histórico.

## Arquitetura aplicada

Aplique [fontes](../../_shared/01-preflight-e-fontes.md), [artefato](../../_shared/02-contrato-de-artefato.md) e [contexto editorial](../../_shared/05-contexto-editorial.md) ao montar a matriz. A escolha segue [handoff](../../_shared/03-interacao-e-handoff.md); a atualização segue [retomada](../../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

A referência pertence a `inboundfy-acervo`. Ela não é uma skill pública adicional. A produção segue para `inboundfy-planejamento`, depois para a especialista e a validadora pareadas. O marco A3 fica em `auditorias/anti-slop/03-estrategia-brief.md`.
