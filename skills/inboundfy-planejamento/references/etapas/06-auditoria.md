# Etapa 06: auditoria

Fase 6 de `METODOLOGIA.md`. Fecha o pacote ou a peça avulsa. Consolida as
aprovações individuais, confere coerência entre assets e audita o pacote
contra o brief. Não substitui `inboundfy-validador-*` e não corrige copy.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/proibicoes.md` e `context/estruturas-proibidas.md`: vetos com o
  mesmo peso.
- `context/marca-voz.md`: aderência de tom.
- `context/canais.md`: formato e limites do canal.

## Entrada esperada

Assets aprovados pela validadora e os briefs que os originaram.

## Fluxo

1. Leia cada brief em `04-briefs/` e o asset correspondente em
   `97-ativos-finais/<canal>/<item>/`.
2. Confira se o asset responde a objetivo, ângulo e persona do brief. Se não
   responder, devolva para a etapa 04 com a divergência registrada.
3. Se o brief declarar estrutura persuasiva, confira se todos os blocos estão
   presentes e na ordem. Bloco de prova social sem fonte em `context/`
   reprova e volta para a especialista.
4. Localize o relatório da validadora pareada em `06-auditoria/assets/` e
   confirme aprovação. Ausente ou reprovado, devolva para a etapa 05.
5. Confira se o relatório cita todos os `context/`, fontes locais,
   proibições e validação própria do canal.
6. Leia o pacote inteiro para achar contradição entre assets.
7. Acione `inboundfy-anti-slop` no marco A6 para comparar abertura, tese,
   exemplos, CTAs e estruturas entre as peças. Registre em
   `06-auditoria/anti-slop-06-pacote.md` ou em
   `auditorias/anti-slop/06-pacote.md`, conforme o layout.
8. Registre o resultado em `06-auditoria/auditoria-final.md`: aprovado,
   reprovado com correções, ou devolvido para replanejamento.
9. Se aprovado, confirme o campo `brief` no frontmatter do asset e siga para
   `inboundfy-pipeline`.

## Saída

`06-auditoria/auditoria-final.md` com veredito e pendências.

## Validação

- A prosa passou por `inboundfy-copy-editor` e os achados foram tratados ou
  aparecem como pendência.
- Nenhuma violação das duas listas de proibições passou sem registro.
- O A6 foi registrado antes do veredito.
- O campo `brief` está no asset aprovado.
- Todo asset tem relatório individual aprovado.

## Idempotência

Reauditar atualiza `auditoria-final.md` com a nova avaliação e preserva o
histórico da anterior.

## Veredito certo para cada problema

| Problema | Veredito |
| --- | --- |
| Asset fora do objetivo, ângulo ou persona do brief | Devolvido para replanejamento |
| Bloco de estrutura persuasiva ausente | Reprovado |
| Prova social sem fonte | Reprovado |
| Relatório da validadora ausente | Devolvido para produção |
| Duas peças com a mesma abertura ou CTA conflitante | Reprovado, com a peça a ajustar |
| Tudo conferido | Aprovado |

## Modelo

```markdown
# Auditoria final: {{canal}}/{{item}}

- **Brief de origem:** 04-briefs/{{canal}}-{{slug}}.md
- **Veredito:** {{aprovado | reprovado | devolvido para replanejamento}}
- **Relatório individual:** 06-auditoria/assets/{{canal}}-{{item}}.md
- **Validadora pareada:** {{inboundfy-validador-*}}
- **Veredito individual:** {{aprovado | ausente | reprovado}}
- **Auditoria de copy:** {{sem achados | achados tratados | pendências}}
- **Achados e ações:** {{local, regra, diagnóstico e correção, ou "nenhum"}}
- **Proibições:** {{sem violação | violação em ...}}
- **Estrutura persuasiva:** {{blocos presentes e em ordem | bloco ausente | não aplicável}}
- **Validação do canal:** {{resultado}}
- **Coerência com o pacote:** {{sem conflito | conflito com ...}}
- **Pendências:** {{lista ou "nenhuma"}}
```

## Exemplo de reprovação

Caso fictício.

```markdown
# Auditoria final: linkedin/opiniao-atendimento-reativo

- **Brief de origem:** 04-briefs/linkedin-opiniao-atendimento-reativo.md
- **Veredito:** reprovado
- **Veredito individual:** aprovado
- **Auditoria de copy:** pendências
- **Achados e ações:** parágrafo 2 abre com frase genérica sobre empresas;
  trocar por situação observável. Parágrafo 4 fecha com frase decorativa;
  remover e manter a consequência concreta.
- **Proibições:** sem violação
- **Estrutura persuasiva:** PAS; agitação ausente, o texto pula do problema
  para a solução
- **Validação do canal:** corpo copiável sem Markdown; ok
- **Coerência com o pacote:** abertura igual à do artigo de blog; trocar
- **Pendências:**
  1. Reescrever o parágrafo 2.
  2. Remover o fechamento do parágrafo 4.
  3. Incluir o bloco de agitação.
  4. Trocar a abertura repetida.
```

## Checklist

- [ ] Todo campo do modelo está preenchido.
- [ ] Cada asset tem relatório individual aprovado.
- [ ] Reprovação lista pendências acionáveis.
- [ ] Divergência de brief volta para a etapa 04.
- [ ] Peça aprovada tem o campo `brief`.

## Erros comuns

- Aprovar com achado de copy não tratado.
- Reprovar por escrita quando o problema é o brief.
- Aprovar com bloco de estrutura ausente porque a prosa está boa.
