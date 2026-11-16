# Revisão de código com comportamento preservado

A revisão remove complexidade sem função e melhora os limites de dados. Uma função menor não é automaticamente melhor: a mudança precisa facilitar leitura ou manutenção sem alterar o contrato público por acidente.

## Diagnóstico da mudança

Identifique comando de entrada, formatos aceitos, mensagens de erro, arquivos gravados e consumidores da API. Pergunte qual comportamento será observado antes e depois. Leia os testes existentes antes de introduzir outra camada.

| Achado | Tratamento | Conferência necessária |
| --- | --- | --- |
| Comentário repete a linha seguinte | Remover comentário | Diff sem alteração funcional |
| Helper usado uma vez sem simplificar leitura | Integrar ao chamador | Mesma entrada, saída e erros |
| Duplicação de regra de caminho | Centralizar na função existente | Caminho válido e tentativa de saída da raiz |
| `any` na fronteira de JSON | Validar estrutura e estreitar tipo | Payload válido, incompleto e malformado |
| `unknown` na entrada externa | Manter até validação | Não converter por cast sem checagem |
| Cópia repetida de acumulador | Avaliar atualização local controlada | Mesma ordem e resultado |
| Mensagem genérica de erro | Nomear operação e campo | Não expor segredo nem conteúdo privado |

## Procedimento de revisão

1. Leia `AGENTS.md`, `package.json`, tipos públicos, chamadores e testes ligados ao arquivo.
2. Descreva comportamento atual em entrada, transformação, saída, erro e persistência. Diferencie simplificação de mudança funcional.
3. Localize código morto, cast injustificado, abstração sem uso e comentário sem informação adicional.
4. Faça uma mudança por motivo. Preserve ID, caminho, serialização, ordem e mensagem pública quando fazem parte do contrato.
5. Se a mudança toca escrita, confira temporário, renomeação, proteção contra saída da raiz e segunda execução.
6. Rode typecheck e testes pertinentes já existentes. Acrescente teste somente quando protege um comportamento real alterado ou antes descoberto sem cobertura.
7. Leia o diff completo. Confirme que nenhum log novo expõe token, variável secreta ou conteúdo de cliente.
8. Entregue alteração, motivo, verificação executada e limite restante. Não anuncie teste que não rodou.

## Template de relatório técnico

```markdown
# Revisão de <arquivo ou mudança>

## Contrato observado
- Entrada: <tipo e exemplo>
- Saída: <tipo e exemplo>
- Erros: <condições públicas>
- Persistência: <arquivos ou nenhuma>

## Achados e alterações
| Local | Problema | Mudança | Comportamento preservado |
| --- | --- | --- | --- |
| <linha/função> | <problema concreto> | <ação> | <contrato> |

## Verificação
- <comando, resultado e alcance>
- Segunda execução: <resultado ou não aplicável com motivo>

## Pendências
<Problema fora do alcance ou nenhuma.>
```

## Exemplo completo: exportador fictício da Pinhão Bicicletas

O exportador soma os valores em centavos de ordens já validadas. O tipo `Ordem` contém `valorCentavos: number`. A revisão encontra um comentário que narra a linha e um array intermediário desnecessário para a soma.

**Antes:**

```ts
type Ordem = { valorCentavos: number };
function somar(ordens: Ordem[]): number {
  // Mapeia as ordens para obter os valores.
  const valores = ordens.map((ordem) => ordem.valorCentavos);
  return valores.reduce((total, valor) => total + valor, 0);
}
```

**Depois:**

```ts
type Ordem = { valorCentavos: number };
function somar(ordens: Ordem[]): number {
  return ordens.reduce((total, ordem) => total + ordem.valorCentavos, 0);
}
```

Relatório preenchido:

```markdown
# Revisão de somar

## Contrato observado
- Entrada: lista de ordens validadas; valores em centavos.
- Saída: soma numérica; lista vazia retorna 0.
- Erros: validação externa permanece no chamador.
- Persistência: nenhuma.

## Achados e alterações
| Local | Problema | Mudança | Comportamento preservado |
| --- | --- | --- | --- |
| somar, linhas 3 a 5 | Array intermediário e comentário narrativo | Somar diretamente por reduce | Ordem da soma, valor inicial e retorno |

## Verificação
- Caso vazio: 0 antes e depois.
- Valores 12000 e 3500: 15500 antes e depois.
- Typecheck: executar no projeto consumidor antes de integrar.
- Segunda execução: não aplicável; a função não grava arquivos.

## Pendências
Executar as verificações do projeto real. O exemplo mostra raciocínio local, sem alegar execução de suíte.
```

O ganho aqui é uma passagem de leitura a menos na função, sem promessa de desempenho medida. Uma fronteira que recebe JSON ainda precisaria validar a estrutura antes de chamar `somar`. Converter o payload com `as Ordem[]` não faria essa validação.

## Checklist numerado

1. Contrato público foi identificado antes do diff.
2. Simplificação possui motivo concreto.
3. Fronteiras externas validam dados antes de estreitar tipos.
4. `unknown` legítimo não foi removido apenas para satisfazer estilo.
5. Erros e serialização continuam compatíveis.
6. Caminhos e escrita atômica foram conferidos quando aplicáveis.
7. Testes executados correspondem ao comportamento afetado.
8. Nenhum segredo aparece em log ou relatório.
9. Documentação reflete a implementação final.
10. Segunda execução não altera resultado persistente sem nova entrada.

## Erros comuns

- Trocar `any` por cast e declarar o problema resolvido. Valide os dados.
- Criar helper para cada linha. Preserve unidade de leitura.
- Refatorar mensagens públicas junto de uma limpeza local. Separe mudança funcional.
- Escrever teste que apenas repete a implementação. Teste entrada e comportamento observável.
- Confundir ausência de teste com aprovação. Registre o que foi e o que não foi executado.

## Arquitetura aplicada

Use [fontes](../_shared/01-preflight-e-fontes.md) para localizar contratos. Registre a revisão por [artefato](../_shared/02-contrato-de-artefato.md) e preserve linguagem de documentação por [contexto](../_shared/05-contexto-editorial.md). Entregue com [handoff](../_shared/03-interacao-e-handoff.md) e compare execuções por [retomada](../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

Esta skill trata qualidade do framework, scripts e integrações. Use `inboundfy-anti-slop` para prosa pública. Leia scripts do `package.json` antes de escolher comandos; no Inboundfy, `npm run typecheck`, testes pertinentes e `node scripts/validar-framework.mjs` cobrem contratos diferentes.
