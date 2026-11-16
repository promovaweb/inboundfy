# Etapa 03: síntese

Transforma o material reunido em base editorial utilizável. Não produz post,
artigo, email ou roteiro.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/marca-voz.md`, `context/publico.md` e `context/canais.md`.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`.
- Arquivos de produto, serviço, oferta ou pessoa citados no brainstorm.
- `ESCRITA.md`, para redigir parágrafos naturais e verificáveis.

## Entrada esperada

`brainstorm.md` com entrevista e pesquisa concluídas.

## Fluxo

1. Leia o arquivo inteiro, `ESCRITA.md` e o exemplo abaixo.
2. Gere pelo menos três ângulos com `../geracao-de-angulos.md` e escolha a
   tese que passa no teste de cinco perguntas.
3. Registre tese, recorte, ângulo e limite apoiados pelo material.
4. Desenvolva argumentos com mecanismo, prova, exemplo e consequência.
5. Responda objeções reais sem inventar prova social ou resultado.
6. Extraia ativos editoriais reutilizáveis: exemplos, perguntas, termos e
   chamadas possíveis.
7. Proponha até cinco oportunidades para canais ativos, pontuadas por ICE.
   Cada uma tem ângulo próprio e aponta os ativos usados. Ideias de ação
   fora de conteúdo seguem `../banco-de-ideias-por-objetivo.md`.
8. Registre voz e proibições efetivamente aplicáveis.
9. Marque o status como `em-validacao` e siga para a etapa 04.

## Saída

O `brainstorm.md` completamente preenchido pelo modelo canônico.

## Validação

- Tese, recorte, limite e audiência são específicos.
- Argumentos têm apoio no próprio arquivo.
- Oportunidades não repetem a mesma abertura em canais diferentes.
- Nenhum canal sem ativo suficiente recebeu oportunidade.

## Idempotência

Nova síntese preserva ideia, respostas e fontes. Atualiza apenas as seções
derivadas e registra a execução no histórico.

## Estrutura de um argumento

```markdown
### {{argumento específico}}

- **Mecanismo:** {{por que acontece}}
- **Prova:** {{fato com fonte ou dado de context/}}
- **Exemplo:** {{situação concreta da persona}}
- **Consequência:** {{o que muda para a persona}}
```

No arquivo final, o argumento aparece em prosa, mas os quatro elementos
precisam estar presentes.

## Exemplo

Ideia vaga: `Quero falar de onboarding de SaaS.`

Tese útil: um onboarding falha quando apresenta telas sem ajudar a pessoa a
concluir a primeira tarefa que comprova o valor do produto.

Recorte: software B2B com ativação dentro do produto. Limite: serviços com
implantação consultiva exigem outra análise.

Oportunidades distintas:

- Artigo: diagnosticar onde a primeira tarefa se perde.
- Email: mostrar um sinal observável de cadastro sem ativação.
- LinkedIn: relatar uma escolha de onboarding e a forma de conferir.

Cada peça usa a mesma base, mas começa por uma dúvida diferente.

## Checklist

- [ ] Três ou mais ângulos foram testados.
- [ ] A tese pode ser contestada e defendida.
- [ ] O limite impede generalização indevida.
- [ ] Cada argumento aponta prova.
- [ ] Cada canal ganhou recorte próprio e prioridade ICE.

## Erros comuns

- Repetir a ideia como tese.
- Transformar a síntese em peça final.
- Criar cinco versões resumidas do mesmo texto.
