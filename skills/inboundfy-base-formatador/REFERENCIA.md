# Formatação sem alteração editorial

A formatação recebe texto concluído e um contrato de campos da chamadora. Ela modifica sintaxe, preserva conteúdo copiável e informa qualquer problema que exija reescrita.

## Triagem do documento

Pergunte qual trecho será publicado, qual parte é nota de produção e qual parser consome o frontmatter. Sem essa separação, um título interno pode acabar no texto publicado.

| Achado | Ação mecânica | Quando devolver |
| --- | --- | --- |
| H3 depois de H1 | Ajustar para H2 se a hierarquia for inequívoca | Se a mudança alterar a relação entre assuntos |
| Lista sem linha vazia anterior | Inserir linha vazia | Nunca alterar a redação dos itens |
| URL relativa | Resolver a partir da pasta do documento | Se o destino estiver ausente |
| YAML com valor contendo dois-pontos | Colocar aspas no valor | Se faltar valor factual |
| Tabela com coluna a menos | Reparar delimitador quando inequívoco | Se faltar informação na célula |
| Código cercado | Preservar bytes internos | Se a própria amostra estiver inválida |

## Procedimento de conferência

1. Leia o arquivo inteiro e os campos obrigatórios passados pela chamadora. Confirme o limite do conteúdo copiável.
2. Conte H1 fora de cercas de código. Exija um por documento editorial; não transforme exemplos cercados em títulos reais.
3. Confira aninhamento de H2 e H3, linhas vazias, indentação e fechamento de cercas.
4. Analise YAML com o parser disponível. Preserve strings como `"0042"` para não perder zeros. Não renomeie campos do canal.
5. Resolva links relativos sem mudar o destino. URLs externas não verificadas recebem nota de conferência pendente.
6. Compare o diff. Cada linha alterada deve corresponder a uma correção de sintaxe autorizada.
7. Reabra o arquivo renderizado quando houver visualizador. Rode a mesma conferência de novo: a segunda execução deve produzir diff vazio.

## Template de registro da formatação

```markdown
# Formatação de <arquivo>

- Entrada: <caminho>
- Contrato de campos: <referência recebida>
- Corpo copiável: <seção inicial e final>
- Alterações: <local, sintaxe anterior e sintaxe corrigida>
- Links não conferidos: <lista ou nenhum>
- Resultado da segunda execução: <sem alteração ou falha localizada>
- Retorno: <skill chamadora>
```

## Exemplo completo: manual fictício da Pinhão Bicicletas

Entrada recebida em `canais/manual/0042/README.md`:

````markdown
---
id: "0042"
titulo: Revisão: conferência do freio
---
# Conferir o freio
### Antes de sair
- Aperte o manete.
- Confira a resposta do freio.
[Manual](manual.pdf)
````

Saída no mesmo arquivo:

````markdown
---
id: "0042"
titulo: "Revisão: conferência do freio"
---

# Conferir o freio

## Antes de sair

- Aperte o manete.
- Confira a resposta do freio.

[Manual](manual.pdf)
````

Registro preenchido: título YAML recebeu aspas; H3 virou H2; linhas vazias separam blocos. O destino `manual.pdf` foi encontrado na mesma pasta. O conteúdo dos dois itens permaneceu igual. A segunda execução não alterou o arquivo. Se o PDF estivesse ausente, a saída continuaria com pendência de destino, sem trocar o link por uma URL inventada.

## Checklist numerado

1. Frontmatter abre e fecha com delimitadores próprios.
2. Campos exigidos pela chamadora continuam presentes e com o tipo correto.
3. Existe um H1 fora das amostras cercadas.
4. Níveis de heading expressam a estrutura real.
5. Listas e tabelas renderizam com linhas vazias adequadas.
6. Cercas fecham com o mesmo marcador de abertura.
7. Links locais resolvem a partir da pasta correta.
8. Corpo copiável conserva texto e ordem.
9. Diff contém somente ajustes mecânicos.
10. Segunda execução produz conteúdo idêntico.

## Erros comuns

- Trocar hífen interno de comando ao padronizar pontuação. Exclua código da normalização.
- Completar `brief` com caminho suposto. Devolva à chamadora.
- Inserir Markdown num corpo definido como texto simples. Formate somente o invólucro do arquivo.
- Renumerar IDs como números YAML. Preserve identificadores como strings.

## Arquitetura aplicada

Leia [preflight](../_shared/01-preflight-e-fontes.md) antes de abrir os arquivos; [artefato](../_shared/02-contrato-de-artefato.md) e [contexto](../_shared/05-contexto-editorial.md) orientam a preservação. Registre retorno com [handoff](../_shared/03-interacao-e-handoff.md) e segunda execução com [retomada](../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

Receba caminho, contrato de campos e tipo de renderização. Devolva o mesmo caminho com resumo do diff. Use `inboundfy-copy-editor` para problemas de redação. O formatador não cria fatos nem escolhe um canal.
