# Contrato de skill

Cada diretório contém `SKILL.md`, `REFERENCIA.md` e `agents/openai.yaml`.
Scripts são opcionais e servem apenas a operações mecânicas.

## `SKILL.md`

O frontmatter declara `name` igual ao diretório e uma `description` que
explica ativação e resultado. O corpo contém:

1. escopo;
2. verificação do setup;
3. contexto exigido;
4. entrada esperada;
5. fluxo;
6. saída;
7. validação;
8. idempotência.

Somente `inboundfy-setup` não faz o preflight das sentinelas, pois é responsável
por criá-las. Toda outra skill interrompe a execução quando o setup estiver
ausente ou incompleto.

## `REFERENCIA.md`

Registra templates, exemplo preenchido, checklist binário, erros comuns e
convenções específicas. Precisa ser citado pelo fluxo do `SKILL.md`.

Também registra os cinco blocos compartilhados, os campos mínimos do grupo,
perguntas de conferência e referências de leitura adequadas à função.

## Camada de interface e catálogo

`agents/openai.yaml` contém `display_name`, `short_description` e
`default_prompt`. O prompt deve chamar o ID com `$`, mantendo a ativação
alinhada ao frontmatter.

`skills/catalogo.json` liga o ID aos três arquivos e ao perfil de entrada,
saída, validação e handoff. A entrada só é válida quando os caminhos existem e
o grupo coincide com a arquitetura registrada.

## Limites de responsabilidade

- Fases de planejamento não escrevem a copy final.
- Especialistas não decidem estratégia.
- Validadoras não corrigem o asset.
- Skills de contexto mantêm conteúdo, mas não restauram estrutura.
- Somente o setup instala, move, atualiza ou repara arquivos de apoio.

O contrato normativo e o checklist de autoria estão em
[SKILL-AUTORIA.md](../../SKILL-AUTORIA.md).
