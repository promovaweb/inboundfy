# Etapa 01: entrevista

Completa o entendimento editorial da ideia. Não pesquisa fontes externas.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/empresa.md`, `context/produtos.md` e `context/servicos.md`.
- `context/publico.md`, `context/marca-voz.md` e `context/ofertas.md`.
- `context/glossario.md`, quando a ideia contém termo técnico ou marca.
- `context/aprendizado.md`, para respostas já confirmadas em execuções
  anteriores.

Consulte apenas os arquivos ligados ao assunto. Acione manutenção de
contexto somente quando a lacuna precisar virar informação permanente.

## Entrada esperada

`brainstorm.md` com status `em-entrevista`.

## Fluxo

1. Leia a ideia, os arquivos aplicáveis e o roteiro abaixo.
2. Identifique o que já pode ser respondido pelas fontes internas.
3. Separe lacunas essenciais de preferências opcionais com a tabela abaixo.
4. Se houver lacuna essencial, faça um único bloco com até cinco perguntas
   específicas. Não pergunte o que pode ser inferido com segurança.
5. Registre respostas, origem e suposições nas tabelas do `brainstorm.md`.
6. Formule uma tese provisória e as perguntas de pesquisa, sem redigir a
   peça.
7. Marque o status como `em-pesquisa` e siga para a etapa 02.

## Saída

O mesmo `brainstorm.md`, com perguntas, respostas, suposições, tese
provisória e perguntas de pesquisa.

## Validação

- Cada pergunta muda tese, audiência, veracidade ou escopo factual.
- Houve no máximo um bloco e cinco perguntas.
- Resposta inferida indica o arquivo de origem.
- Informação ausente não aparece como fato.

## Idempotência

Nova execução aproveita respostas registradas e pergunta somente sobre
lacuna essencial ainda aberta.

## Lacuna essencial contra opcional

| Lacuna | Tipo | Conduta |
| --- | --- | --- |
| Qual situação concreta motivou a ideia | Essencial se ausente | Perguntar |
| Quem precisa reconhecer a situação | Essencial se não houver persona correspondente | Perguntar |
| Experiência, caso ou prova própria | Essencial se a tese depender dela | Perguntar |
| Afirmação que não pode ser feita | Essencial em tema regulado | Perguntar |
| Tom, tamanho, título, rede social | Opcional | Inferir pela voz e pelos canais |
| Estrutura de copy | Opcional | Decidida no briefing do pipeline |

## Roteiro de investigação

Escolha somente perguntas que o material ainda não responde:

1. Que situação concreta levou a esta ideia?
2. Qual pessoa precisa reconhecer essa situação?
3. O que essa pessoa deve entender ou fazer depois?
4. Que experiência, caso ou prova própria apoia a tese?
5. Que afirmação não pode ser feita?

## Exemplo

Para `Quero explicar por que onboarding de SaaS falha`, não pergunte cor,
título ou rede social. Pergunte qual falha foi observada e o tipo de produto,
se esses pontos não existirem nos arquivos.

Bloco único enviado:

```text
Para desenvolver a ideia sem inventar nada, preciso de três respostas:
1. Que falha de onboarding você observou: cadastro sem uso, uso sem pagamento ou outra?
2. O produto é self-service ou tem implantação com a equipe?
3. Existe algum número interno que possamos citar, como taxa de ativação?
```

## Checklist

- [ ] A pergunta não repete informação existente.
- [ ] Perguntas opcionais viraram suposições.
- [ ] Respostas e origens foram registradas.
- [ ] Tese provisória e perguntas de pesquisa foram escritas.

## Erros comuns

- Transformar a entrevista em formulário de briefing.
- Fazer uma pergunta por mensagem.
- Pedir à pessoa que escolha uma estrutura de copy.
