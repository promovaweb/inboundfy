# Etapa 04: validação

Fecha o brainstorm e autoriza seu uso pelo pipeline. Não produz a peça final.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `ESCRITA.md` e `context/marca-voz.md`.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`.
- Todos os arquivos de `context/` citados como origem no documento.

## Entrada esperada

`brainstorm.md` com status `em-validacao`.

## Fluxo

1. Leia o arquivo inteiro e a rubrica abaixo.
2. Confira todas as seções obrigatórias de `templates/brainstorm.md`.
3. Abra cada fonte e confirme que ela apoia a afirmação associada.
4. Compare fatos internos com os arquivos de origem. Reprove divergência.
5. Acione `inboundfy-copy-editor` na prosa. Registre os achados por trecho,
   corrija e repita a leitura integral.
6. Confira linha a linha `context/proibicoes.md` e
   `context/estruturas-proibidas.md`.
7. Devolva para a entrevista quando faltar foco, para a pesquisa quando
   faltar prova ou para a síntese quando faltar clareza. Reexecute a
   validação depois da correção.
8. Quando aprovado, marque `status: "aprovado"` e registre a execução no
   histórico.

## Saída

O mesmo `brainstorm.md`, aprovado ou com retorno explícito para uma etapa.

## Validação

- Nenhum fato externo ficou sem fonte.
- Hipóteses e suposições estão identificadas.
- A leitura integral foi repetida depois de tratar os achados.
- Nenhuma violação dos dois arquivos de proibições permanece.
- Todas as oportunidades apontam ativos existentes.

## Idempotência

Cada nova auditoria atualiza o status e acrescenta linha ao histórico, sem
apagar resultados anteriores.

## Rubrica

| Dimensão | Aprova quando | Retorno |
| --- | --- | --- |
| Foco | Tese, audiência e limite estão claros | Entrevista |
| Prova | Fatos externos têm fonte adequada | Pesquisa |
| Síntese | Argumentos explicam mecanismo e consequência | Síntese |
| Escrita | Trechos localizados, regra editorial e ação corretiva registrados | Síntese |
| Proibições | Nenhuma ocorrência real permanece | Síntese |
| Distribuição | Cada oportunidade usa ativos e ângulo próprios | Síntese |

## Exemplo de histórico

```markdown
| 2026-07-30 | reprovado | pesquisa |
| 2026-07-30 | aprovado | nenhum |
```

## Checklist

- [ ] O arquivo inteiro foi lido.
- [ ] Links foram abertos.
- [ ] Os arquivos de proibições foram comparados linha a linha.
- [ ] O status corresponde ao resultado real.

## Erros comuns

- Aprovar porque o checklist está marcado, sem ler a prosa.
- Corrigir falta de prova com linguagem mais vaga.
- Apagar uma reprovação anterior do histórico.
