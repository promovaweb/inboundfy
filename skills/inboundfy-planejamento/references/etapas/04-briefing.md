# Etapa 04: briefing

Fase 4 de `METODOLOGIA.md`. Transforma cada oportunidade aprovada num brief
formal por peça. Também é a entrada de peça avulsa e do modo acervo. Não
produz o artefato final.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/publico.md`: persona do brief.
- `context/marca-voz.md`, `context/proibicoes.md`,
  `context/estruturas-proibidas.md` e `context/aprendizado.md`: restrições e
  vetos registrados no brief.
- `context/canais.md`: formato e limites técnicos do canal.
- `context/ofertas.md`, `produtos.md` e `servicos.md`: oferta e CTA.
- `ESTRUTURAS-PERSUASIVAS.md`: escolha da estrutura persuasiva.

## Entrada esperada

Oportunidade aprovada em `03-planejamento/plano-de-oportunidades.md`, item
de acervo com uso escolhido, ou pedido de peça avulsa.

## Fluxo

1. Oportunidade aprovada: leia o item no plano e os ativos associados.
   Peça avulsa: extraia canal, tema, objetivo e restrições do pedido.
2. Defina a persona a partir de `context/publico.md`. Se nenhuma persona
   corresponder, avise a pessoa antes de seguir.
3. Defina objetivo, ângulo, formato e regra de pronto, dentro dos limites do
   canal.
4. Registre restrições de voz e vetos aplicáveis no próprio brief.
5. Escolha a estrutura persuasiva pela tabela abaixo e preencha uma frase
   por bloco.
6. Defina a métrica principal com `../medicao-por-peca.md`.
7. Salve `04-briefs/<canal>-<slug>.md` no modelo abaixo. No modo acervo,
   salve o brief na pasta do item e registre o caminho no `README.md` da
   peça.
8. Execute `inboundfy-anti-slop` no marco A3 sobre o brief e registre o
   ciclo em `06-auditoria/anti-slop-03-estrategia-brief.md` (pacote) ou
   `auditorias/anti-slop/03-estrategia-brief.md` (acervo).
9. Siga para a etapa 05.

## Saída

Um brief por peça em `04-briefs/<canal>-<slug>.md`. Em peça avulsa sem
pacote aberto, o brief segue direto para a etapa 05.

## Validação

- Canal, persona, objetivo, ângulo, métrica e regra de pronto preenchidos.
- Restrições e vetos aplicáveis estão explícitos.
- Brief comercial declara a estrutura persuasiva bloco a bloco. Brief
  informativo registra o motivo da ausência.
- Nenhum brief foi criado sem aprovação manual ou seleção automática
  registrada.
- O A3 foi registrado e o brief não tem ângulo genérico, persona nominal ou
  CTA sem próxima ação.

## Idempotência

Editar um brief altera só os campos pedidos e preserva o restante.

## Escolha da estrutura persuasiva

| Situação | Estrutura |
| --- | --- |
| Peça curta, uma oferta clara | AIDA |
| Persona ainda não sente urgência | PAS |
| Peça longa de conversão com prova social e oferta detalhada | PASTOR |
| Apresentação de produto ou serviço | FAB, aplicado dentro da estrutura escolhida |
| Peça para ser compartilhada | STEPPS como conferência |
| Peça informativa (artigo explicativo, changelog, shownotes) | Nenhuma; segue `ESCRITA.md` |

Bloco de testemunho do PASTOR só entra com depoimento em
`context/depoimentos.json` com consentimento.

## Modelo

```markdown
# Brief: {{canal}}: {{slug}}

- **Formato:** {{post, artigo, email, roteiro}}
- **Persona:** {{persona-id}}
- **Objetivo:** {{o que a peça precisa alcançar}}
- **Ângulo:** {{recorte específico}}
- **Ativos de apoio:** {{itens de ativos.md ou da base editorial}}
- **Restrições de voz:** {{de context/marca-voz.md}}
- **Vetos aplicáveis:** {{de context/proibicoes.md e estruturas-proibidas.md}}
- **Estrutura persuasiva:** {{AIDA | PAS | PASTOR | nenhuma}}; {{uma frase por bloco ou motivo da ausência}}
- **CTA:** {{próxima ação concreta}}
- **Métrica principal:** {{métrica, meta e janela}}
- **Regra de pronto:** {{o que precisa estar presente}}
```

## Exemplo

Caso fictício.

```markdown
# Brief: email: nutricao-migracao-estoque

- **Formato:** email de nutrição, etapa 2 da sequência de boas-vindas
- **Persona:** persona-01, dona de loja no primeiro mês de uso
- **Objetivo:** reduzir cancelamento por medo de migração
- **Ângulo:** a importação de planilha é guiada, não manual
- **Ativos de apoio:** tese da migração, dado de 6 em cada 10 tickets,
  objeção do estoque bagunçado
- **Restrições de voz:** tom direto, sem jargão de banco de dados
- **Vetos aplicáveis:** não prometer importação sem erro
- **Estrutura persuasiva:** PAS. Problema: medo de perder histórico ao
  migrar. Agitação: quem adia a migração erra pedido de compra com estoque
  desatualizado. Solução: passo a passo guiado, com suporte pelo WhatsApp na
  primeira tentativa.
- **CTA:** botão "Importar minha planilha"
- **Métrica principal:** cliques no CTA, meta de 4% em 7 dias
- **Regra de pronto:** assunto, pré-header, corpo em PAS, CTA único e
  achados de `inboundfy-copy-editor` tratados após leitura integral.
```

## Checklist

- [ ] Todos os campos preenchidos ou marcados "não aplicável" com motivo.
- [ ] O ângulo é mais específico que o tema do pacote.
- [ ] A estrutura persuasiva tem uma frase por bloco.
- [ ] A métrica tem meta e janela.
- [ ] A regra de pronto é verificável.

## Erros comuns

- Copiar o ângulo do plano sem detalhar o suficiente.
- Escolher PASTOR sem preencher os seis blocos.
- Esquecer veto aplicável em tema sensível.
