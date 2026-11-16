# Etapa 01: saneamento

Fase 1 de `METODOLOGIA.md`. Produz uma versão limpa do material, sem voz
editorial: remove ruído, corrige grafia e organiza a estrutura. Não extrai
ativos (etapa 02) e não reescreve com a voz da marca (especialista na
produção).

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/glossario.md`, para grafia de marcas e termos técnicos.
- `LIMPEZA-MATERIAL-BRUTO.md`: regras completas do que pode e não pode ser
  alterado, por tipo de material. Leitura obrigatória.
- `TRADUCAO.md`: correção canônica de termo e nome próprio mal transcrito.
  Leitura obrigatória.

## Entrada esperada

O pacote aberto na etapa 00, com `00-entrada/material-original.md`.

## Fluxo

1. Leia `00-entrada/material-original.md` sem alterá-lo.
2. Identifique o tipo de material (transcrição, texto colado, nota solta) e
   aplique a seção correspondente de `LIMPEZA-MATERIAL-BRUTO.md`.
3. Corrija grafia de marcas e termos técnicos contra `context/glossario.md` e
   `TRADUCAO.md`. Termo incerto vira pendência registrada, nunca suposição
   silenciosa.
4. Organize em blocos lógicos, preservando sequência e sentido. Não resuma e
   não corte conteúdo.
5. Em transcrição com falantes identificáveis, preserve sequência e
   atribuição de fala.
6. Salve `01-saneamento/base-limpa.md` no modelo abaixo.
7. Escreva `01-saneamento/relatorio-saneamento.md` com cada alteração
   relevante e o motivo.
8. Execute `inboundfy-anti-slop` no marco A1 e registre
   `06-auditoria/anti-slop-01-processado.md`.

## Saída

`01-saneamento/base-limpa.md` e `01-saneamento/relatorio-saneamento.md`.

## Validação

- `00-entrada/material-original.md` permanece idêntico.
- Nada foi resumido, cortado ou reescrito com voz editorial.
- O relatório documenta toda alteração relevante.
- O ciclo A1 confirma que a base não ganhou fórmula genérica nem perdeu
  sentido, fato ou ressalva.

## Idempotência

Rodar de novo atualiza `base-limpa.md` e o relatório existente, sem versão
paralela.

## Modelo de `base-limpa.md`

```markdown
# Base limpa: {{slug-do-pacote}}

## Bloco 1: {{tema ou trecho}}

{{texto organizado}}

## Bloco 2: {{tema ou trecho}}

{{texto organizado}}
```

## Modelo de `relatorio-saneamento.md`

```markdown
# Relatório de saneamento: {{slug-do-pacote}}

| Bloco | O que foi alterado | Por quê |
| --- | --- | --- |
| {{n}} | {{alteração}} | {{motivo}} |

## Falantes identificados

- {{Falante A}}: {{papel}}

## Pendências de termo

- {{termo incerto e trecho}}
```

## Exemplo

Caso fictício.

```markdown
# Relatório de saneamento: cancelamento-primeiro-mes-estoque

| Bloco | O que foi alterado | Por quê |
| --- | --- | --- |
| 1 | Removidas marcações de tempo e falas cruzadas | Ruído de transcrição |
| 2 | Unificadas três interrupções do mesmo raciocínio | A ideia ficava fragmentada |
| 3 | "Estoqueli" corrigido para "Estoquely" | Conferido em context/glossario.md |

## Falantes identificados

- Falante A: gestora de sucesso do cliente, relata os casos.
- Falante B: gestor de produto, questiona causas e propõe hipóteses.

## Pendências de termo

- "importador XL" no bloco 3: não consta no glossário. Confirmar nome.
```

## Checklist

- [ ] O original continua idêntico.
- [ ] Nenhum trecho foi resumido ou cortado.
- [ ] Toda correção de grafia foi conferida no glossário.
- [ ] Alterações que mudam sentido ou removem trecho estão no relatório.
- [ ] A atribuição de falantes é consistente do início ao fim.

## Erros comuns

- Aplicar a voz da marca durante a limpeza.
- Remover trecho "irrelevante" sem registro.
- Corrigir grafia por palpite em vez de conferir o glossário.
