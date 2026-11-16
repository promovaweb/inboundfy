# Etapa 02: plano de campanha

Cruza objetivo, KPI, persona e lacunas de mercado num plano: pilares, fases,
temas por fase, mix de canais, volume de peças e pacotes de conteúdo. É a
ponte entre "por que a campanha existe" e "que pacotes o pipeline vai
produzir". O calendário entre campanhas fica com a etapa 03. O brief de cada
peça fica com `inboundfy-planejamento`.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/canais.md` e `.inboundfy/estrategia.md`: canais ativos e cadência
  técnica.
- `context/publico.md`: etapas de compra da persona prioritária.
- `context/ofertas.md`: oferta que a campanha sustenta.
- Catálogo do acervo, quando a campanha reaproveitar material.

## Entrada esperada

`00-briefing/brief-cliente.md` aprovado e, quando existir,
`00-briefing/pesquisa-mercado.md` da mesma campanha.

## Fluxo

1. Leia o brief e a pesquisa.
2. Defina ou confirme de três a cinco pilares com
   `../pilares-e-mapa-de-temas.md`. Se o projeto já tiver pilares aprovados,
   reutilize.
3. Divida a campanha em fases (atração, consideração, conversão, ou fases
   próprias de um lançamento). Nunca proponha canal solto sem fase.
4. Para cada fase, defina tema central, etapa de compra, canais, volume,
   lacuna de mercado explorada e indicador intermediário.
5. Escolha canais pela função (tabela abaixo) e pela cadência real. Some o
   volume de todas as fases e compare com a capacidade semanal do brief.
6. Distribua o KPI em indicadores por fase quando fizer sentido (visitas na
   atração, leads na consideração, testes na conversão), sem inventar
   métrica que o cliente não acompanha.
7. Liste os pacotes de conteúdo: fase, canal, tema, tipo (busca ou
   compartilhamento), origem (material bruto, acervo ou peça avulsa) e rota.
   Use `../reaproveitamento-e-distribuicao.md` para pacotes vindos do
   acervo.
8. Apresente três opções de mix quando houver caminhos materialmente
   diferentes, com a recomendada primeiro.
9. Salve em `<pacote-de-campanha>/01-plano/plano-de-campanha.md`.
10. Depois da aprovação, acione `inboundfy-contexto-operacao` para mudar a
    campanha para "em execução" em `context/campanhas.md` com o caminho do
    plano.

## Mix de canais por função

| Necessidade da fase | Canais com melhor encaixe | Observação |
| --- | --- | --- |
| Ser encontrado por quem já procura | Blog, YouTube | Retorno em 3 a 6 meses |
| Alcance rápido em público profissional | LinkedIn | Depende de perfil pessoal ativo |
| Alcance e demonstração visual | Instagram, YouTube shorts | Exige ritmo alto |
| Nutrição e próxima ação | Email | Depende de base com consentimento |
| Relacionamento recorrente e opinião | Substack, newsletter | Exige constância |
| Conversa direta | WhatsApp com consentimento | Volume baixo, conversão alta |

## Capacidade de produção

Horas médias por peça para estimar volume. Ajuste ao histórico da equipe.

| Peça | Horas por peça |
| --- | --- |
| Artigo de blog de 1.500 palavras | 6 a 8 |
| Post de LinkedIn | 1 a 2 |
| Carrossel de Instagram | 3 a 4 |
| Email de nutrição | 1,5 a 2 |
| Vídeo de 8 minutos | 10 a 14 |

Se o volume planejado passar de 85% das horas disponíveis, corte peças de
menor prioridade antes de apresentar o plano.

## Modelo

```markdown
# Plano de campanha: {{nome}}

## Resumo
- **Objetivo e KPI:** {{do brief}}
- **Persona:** {{persona-id}}
- **Pilares:** {{lista}}
- **Proporção busca e compartilhamento:** {{percentuais}}
- **Capacidade:** {{horas por semana}} / volume planejado {{horas}}

## Fase {{n}}: {{nome}}
- **Período:** {{datas}}
- **Etapa de compra:** {{descoberta | consideração | escolha | retenção}}
- **Tema central:** {{tema}}
- **Canais:** {{lista}}
- **Volume:** {{número por canal}}
- **Lacuna explorada:** {{referência a pesquisa-mercado.md}}
- **Indicador intermediário:** {{métrica e meta}}
- **Pacotes:**
  - {{canal}}; {{tema}}; {{busca ou compartilhamento}}; origem: {{material bruto | acervo/<id> | peça avulsa}}; rota: {{inboundfy-planejamento | inboundfy-especialista-<canal>}}

## Pendências
- {{pergunta ou "nenhuma"}}
```

## Exemplo

Caso fictício. Não use como contexto real.

```markdown
# Plano de campanha: lançamento Estoquely Pro

## Resumo
- **Objetivo e KPI:** 200 testes qualificados até 2026-09-30.
- **Persona:** persona-01.
- **Pilares:** Controle sem planilha; Rotina da loja; Compra certa.
- **Proporção busca e compartilhamento:** 70% e 30%.
- **Capacidade:** 28 h por semana / volume planejado 21 h por semana.

## Fase 1: atração
- **Período:** 2026-08-01 a 2026-08-31.
- **Etapa de compra:** descoberta.
- **Tema central:** tempo perdido com cadastro manual de estoque.
- **Canais:** blog, LinkedIn.
- **Volume:** 3 artigos, 4 posts.
- **Lacuna explorada:** ninguém mede o tempo de cadastro.
- **Indicador intermediário:** 5.000 visitas nos artigos da fase.
- **Pacotes:**
  - blog; quanto tempo um lojista perde digitando estoque; busca; origem:
    peça avulsa; rota: inboundfy-especialista-blog.
  - LinkedIn; série de 4 posts sobre erros de controle manual;
    compartilhamento; origem: acervo/0018; rota:
    inboundfy-especialista-linkedin.

## Fase 2: consideração
- **Período:** 2026-09-01 a 2026-09-20.
- **Etapa de compra:** consideração.
- **Tema central:** cadastro por foto com tempo medido.
- **Canais:** email, blog.
- **Volume:** 3 emails, 1 comparativo.
- **Lacuna explorada:** nenhum concorrente demonstra tempo real.
- **Indicador intermediário:** 300 leads na sequência de email.
- **Pacotes:**
  - email; sequência sobre cadastro por foto; busca não se aplica; origem:
    peça avulsa; rota: inboundfy-especialista-email.
  - blog; comparativo de tempo de cadastro; busca; origem: material bruto
    (teste interno gravado); rota: inboundfy-planejamento.
```

## Checklist

- [ ] Toda fase tem período, etapa de compra, tema, canais, volume, lacuna e
      indicador.
- [ ] O KPI aparece em pelo menos um indicador de fase.
- [ ] O volume total cabe em até 85% da capacidade registrada.
- [ ] Todo pacote tem tipo, origem e rota.
- [ ] Todos os canais estão ativos em `context/canais.md`.
- [ ] O plano foi aprovado antes de a campanha mudar para "em execução".

## Erros comuns

- Listar canal sem fase, tema ou volume. Isso é lista de desejos.
- Prometer mais peças do que a cadência e a equipe suportam.
- Fase de conversão sem nenhuma peça de escolha (caso, preço, teste).
- Registrar a campanha como "em execução" antes da aprovação.
