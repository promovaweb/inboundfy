# Primeiro pacote editorial

Use `inboundfy-acervo` com material bruto, uma peça-base, um brainstorm aprovado
ou um item de calendário que possa originar várias peças. Essa é a skill mestre
do ciclo completo. `inboundfy-iniciar` oferece o mesmo percurso como atalho.

## Passo a passo

1. A instalação e os arquivos de contexto são conferidos.
2. A entrada é preservada em `bruto.md` com um ID único.
3. O material é processado com voz, personas, dicionário, proibições e
   revisão anti-slop.
4. As perguntas frequentes, a pesquisa e as fontes são registradas.
5. A base editorial relaciona núcleo, fatos, atores, frases, lacunas e usos.
6. As possibilidades de canais, formatos, recortes e reaproveitamentos são
   mapeadas.
7. Você escolhe canais, uma ou mais personas e a direção editorial quando
   esses dados ainda não estiverem definidos.
8. A especialista de cada canal produz a peça com seus metadados e vínculos.
9. A peça passa por voz, dicionário, proibições, anti-slop e validadora do
   canal.
10. O pipeline, o calendário e os índices recebem os caminhos e estados
    finais.

## Como acompanhar

Cada diretório do pacote representa um estado. Não edite o original para
simular avanço; preserve a entrada e gere a próxima versão. Um asset só é
pronto quando houver relatório individual aprovado e a auditoria do pacote
estiver consistente.

O detalhamento de diretórios está em
[METODOLOGIA.md](../../METODOLOGIA.md).

## Estrutura completa

```text
acervo/<id>-<data>-<slug>/
├── bruto.md
├── processado.md
├── faq.md
├── base-editorial.md
├── pesquisa.md
└── estrategia.md

canais/<canal>/<id>-<data>-<slug>/README.md
calendario/AAAA-MM.md
```

Não existe uma pasta obrigatória `05-producao/`. O número identifica a fase
que encaminha o brief para a especialista. As versões candidatas e os
relatórios permanecem ligados ao item auditado.

## O que conferir em cada fase

- `bruto.md`: o original foi preservado sem edição;
- `processado.md`: ruído, dicionário, proibições, voz e revisão anti-slop foram
  tratados;
- `faq.md`: perguntas e lacunas foram extraídas por parágrafo;
- `base-editorial.md`: núcleo, atores, frases, fontes e usos estão descritos;
- `pesquisa.md`: fontes externas e data de consulta estão registradas;
- `estrategia.md`: canais, formatos, ângulos e reaproveitamentos estão listados;
- `canais/`: cada peça tem persona, acervo, voz, estado e validação;
- `calendario/`: cada data aponta para o caminho da peça.

## Retomar um pacote

Informe o caminho do pacote existente. O agente lê o último estado válido e
continua dali. Enviar novamente o material bruto sem indicar o pacote cria uma
nova execução e não deve ser usado como forma de retomar.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | pipeline editorial completo e seus artefatos |
| Autoridade | `METODOLOGIA.md` e skills `inboundfy-planejamento-*` |
