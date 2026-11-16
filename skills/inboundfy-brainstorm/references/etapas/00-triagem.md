# Etapa 00: triagem

Abre o registro de uma ideia. Não pesquisa, não entrevista e não desenvolve
a tese.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/empresa.md`, para associar a ideia ao negócio correto.
- `context/publico.md`, para reconhecer audiência já registrada.
- `context/canais.md`, para localizar o diretório de brainstorm.

Campo opcional vazio não impede a abertura do arquivo.

## Entrada esperada

Uma ideia em qualquer nível de detalhe.

## Fluxo

1. Confirme que o diretório de brainstorm registrado existe. Se estiver
   ausente, acione `inboundfy-setup`. Leia `BRAINSTORM.md`,
   `templates/brainstorm.md` e o exemplo abaixo.
2. Preserve a ideia exatamente como foi recebida, inclusive erros de
   digitação.
3. Gere slug curto em minúsculas, sem acentos, separado por hífens, com até
   cinco palavras e sem promessa.
4. Crie `brainstorms/<AAAA-MM-DD>-<slug>/`. Se o caminho já existir,
   acrescente `-02`, `-03`.
5. Copie o modelo para `brainstorm.md` e preencha frontmatter, ideia
   original e leitura inicial com o que estiver confirmado em `context/`.
6. Classifique a intenção predominante (educar, posicionar, gerar demanda,
   converter ou reter) pela tabela de [REFERENCIA.md](../../REFERENCIA.md).
7. Marque o status como `em-entrevista` e siga para a etapa 01.

## Saída

Um `brainstorm.md` iniciado no diretório datado.

## Validação

- O input original está intacto.
- Data e slug correspondem à execução.
- A intenção predominante foi registrada.
- Nenhuma afirmação nova foi apresentada como fato.

## Idempotência

Não sobrescreva diretório existente. Retome somente quando a pessoa informar
o caminho.

## Regra de slug

| Ideia | Slug ruim | Slug bom |
| --- | --- | --- |
| Quero explicar por que onboarding de SaaS falha | por-que-o-onboarding-do-seu-saas-esta-falhando-e-como-resolver | onboarding-de-saas |
| Fisioterapia respiratória não é só para idoso | fisioterapia-milagrosa-para-criancas | fisioterapia-respiratoria-criancas |

## Exemplo

Input: `Quero explicar por que onboarding de SaaS falha.`

```text
brainstorms/2026-07-30-onboarding-de-saas/
└── brainstorm.md
```

O arquivo preserva o input e registra intenção `educar`. Não inventa
produto, segmento ou causa da falha.

## Checklist

- [ ] A ideia foi preservada literalmente.
- [ ] O slug descreve o assunto sem promessa.
- [ ] O modelo canônico foi usado.
- [ ] O status aponta a próxima etapa.

## Erros comuns

- Reescrever a ideia original para deixá-la mais comercial.
- Usar título longo como slug.
- Preencher público ou produto sem apoio em `context/`.
