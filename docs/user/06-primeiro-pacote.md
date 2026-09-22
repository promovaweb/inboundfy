# Primeiro pacote editorial

Envie material bruto, peça-base, brainstorm aprovado ou item de calendário a
`$inboundfy`. A orquestradora aciona `inboundfy-acervo` e conduz o ciclo
completo. `inboundfy-iniciar` é um alias compatível para a mesma entrada.

## Passo a passo

1. A instalação e os arquivos de contexto são conferidos.
2. A entrada é preservada em `bruto.md` com um ID único.
3. O material é processado com voz, personas, dicionário e proibições. O
   anti-slop faz a primeira leitura da entrada e uma segunda leitura do
   processado.
4. As perguntas frequentes, a pesquisa e as fontes são registradas.
5. A base editorial passa por nova auditoria para conferir resumos, relações,
   fontes e lacunas.
6. As possibilidades de canais, formatos, recortes e reaproveitamentos são
   mapeadas e auditadas antes do brief.
7. Você escolhe canais, uma ou mais personas e a direção editorial quando
   esses dados ainda não estiverem definidos.
8. A especialista de cada canal produz a peça com seus metadados e vínculos.
9. O outline e a abertura passam pelo anti-slop antes da expansão. A peça
   completa passa por outro ciclo antes da validadora.
10. O pacote aprovado passa por uma última comparação anti-slop antes de o
   pipeline, o calendário e os índices receberem os caminhos e estados
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
├── estrategia.md
└── auditorias/anti-slop/
    ├── 00-entrada.md
    ├── 01-processado.md
    ├── 02-base-editorial.md
    ├── 03-estrategia-brief.md
    ├── 04-rascunho.md
    ├── 05-peca.md
    └── 06-pacote.md

canais/<canal>/<id>-<data>-<slug>/README.md
calendario/AAAA-MM.md
```

Não existe uma pasta obrigatória `05-producao/`. O número identifica a etapa
interna de `inboundfy-planejamento/references/etapas/` que encaminha o brief
para a especialista. As versões candidatas e os
relatórios permanecem ligados ao item auditado.

## O que conferir em cada fase

- `bruto.md`: o original foi preservado sem edição;
- `processado.md`: ruído, dicionário, proibições, voz e o ciclo A1 do
  anti-slop foram tratados;
- `faq.md`: perguntas e lacunas foram extraídas por parágrafo;
- `base-editorial.md`: núcleo, atores, frases, fontes e usos estão descritos;
- `pesquisa.md`: fontes externas e data de consulta estão registradas;
- `estrategia.md`: canais, formatos, ângulos e reaproveitamentos estão listados;
- `auditorias/anti-slop/`: os ciclos aplicáveis estão registrados por código;
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
| Autoridade | `METODOLOGIA.md`, `inboundfy-planejamento` e `references/etapas/` |
