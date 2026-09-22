# Solução de problemas

## A skill pede setup

Execute `npx @promovaweb/inboundfy@latest doctor`. A presença das skills no
agente não substitui uma instalação válida. Depois, peça ao agente para usar
`inboundfy-setup`.

## Um arquivo de contexto sumiu

Execute `inboundfy repair --yes` por meio de `inboundfy-setup` para restaurar o
template. Depois, use a skill
`inboundfy-contexto-*` correspondente para preencher o dado. O setup não
inventa nem sobrescreve informação do negócio.

## Duas fontes discordam

Consulte a seção de conflitos em `.inboundfy/fontes-projeto.md`. A execução
deve impedir a afirmação afetada ou pedir uma decisão; nunca escolher uma
versão silenciosamente.

## Uma peça continua reprovada

Leia o relatório da validadora pareada e corrija na produtora indicada.
Proibições exigem novo passe literal e semântico sobre o asset inteiro.

## A marca não aparece no inventário

Rode `inboundfy context scan` e peça ao setup para reconciliar a classificação.
Todo Markdown sob `brand/` deve aparecer,
mesmo com nome em minúsculas. Ativos binários não entram no inventário, mas
permanecem disponíveis no caminho original.

## Uma fase parece ter sido pulada

Confira o estado do pacote e a [sequência documentada](00-visao-geral.md).
Só peça avulsa com brief claro ou retomada explícita pode evitar etapas do
pipeline completo.

## Consulta rápida

| Sintoma | Próxima ação |
| --- | --- |
| Aviso de setup | Rode `inboundfy doctor` e execute `inboundfy-setup` |
| Contexto ausente | Repare o template e preencha com a skill de contexto |
| Fonte conflitante | Resolva o conflito no inventário |
| Asset reprovado | Volte à especialista indicada |
| Marca divergente | Confira `brand/` e refaça a validação |
| Fase fora de ordem | Retome o último estado válido |
| Saída em caminho inesperado | Confira `context/canais.md` |

## O agente não encontra uma skill

Execute `inboundfy repair --yes` por meio do setup e confira o diretório de
skills ativo. Se o
projeto usa mais de uma convenção, indique explicitamente qual agente está em
uso. Não copie uma skill isolada para um segundo diretório, pois isso pode
criar versões divergentes.

## O conteúdo foi salvo, mas não está aprovado

Procure o relatório individual em `06-auditoria/assets/`. Confira se ele tem
o ID, o caminho, o SHA-256 atual da peça e `Veredito: aprovado`. Use
`inboundfy content digest <id>` para comparar o hash e passe o caminho do
relatório em `inboundfy content status <id> aprovado --audit-report <arquivo>`.
Se o arquivo mudou depois da auditoria, retorne para `revisao` e repita a
validação completa antes de agendar ou publicar.

## Ainda não resolveu

Gere um diagnóstico estruturado:

```bash
npx @promovaweb/inboundfy@latest --json doctor
```

Reúna esse resultado, o caminho do pacote e a fase atual. Com esses elementos,
o agente consegue retomar o estado real sem repetir o trabalho desde o começo.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | referência |
| Escopo | diagnóstico de setup, contexto, fontes e fases |
| Autoridade | mensagens e condições de interrupção das skills |
