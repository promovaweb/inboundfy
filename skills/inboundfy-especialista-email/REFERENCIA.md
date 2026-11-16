# Manual de e-mail

## Diagnóstico da peça

1. Qual ação única o destinatário deve realizar?
2. Quem entra, quem sai e quem deve ficar fora deste envio segundo o brief?
3. Remetente, Reply-To, personalização e destino do CTA foram confirmados?

Se o brief já responder, use a resposta registrada. Se faltar fato obrigatório, devolva a pergunta ao planejamento ou à manutenção de contexto indicada por `CONTEXTO.md`. Não crie uma estratégia nova para completar a peça.

| Situação no brief | Tratamento | Evitar |
| --- | --- | --- |
| Nutrição que explica um problema | PAS com consequência observável e conteúdo útil | Ameaça ou dor inflada |
| Convite com oferta simples | AIDA compacto e ação única | Acrescentar pedido de resposta e compra |
| Venda com oferta detalhada | PASTOR conforme brief e fontes | Inventar depoimento para completar fórmula |

## Formato e parâmetros editoriais

Markdown com `assunto`, `pre-header`, `estrutura` (`aida`, `pas`, `pastor`, `nenhuma`) e `brief` em pacote. Acrescente remetente, Reply-To, segmento e CTA em metadata interna; não exponha instruções de automação ao destinatário.

Use assunto de até 50 caracteres e pré-header de 40 a 100 como alvos editoriais, conferidos na prévia do cliente disponível. O brief pode justificar outra faixa. Planeje 120 a 250 palavras para nutrição, 80 a 180 para convite e até 500 para oferta desenvolvida; a faixa não substitui a explicação necessária. Não afirme que isso é limite da plataforma.

Preserve `97-ativos-finais/email/<slug>/README.md` em pacote ou o caminho de `context/canais.md`. Um CTA significa uma ação principal. Link de descadastro, privacidade e suporte obrigatório não são pedidos comerciais concorrentes. Use os destinos registrados no projeto. Para integração, consulte `context/integracoes.md`; não grave credenciais na peça.

## Método de produção

1. Confirme objetivo, segmento, condição de entrada e saída definidos pelo planejamento. Não crie sequência ou calendário nesta skill.
2. Leia a estrutura declarada. AIDA atende convite ou oferta simples; PAS organiza nutrição; PASTOR atende venda desenvolvida. Se faltar estrutura comercial, devolva ao planejamento.
3. Redija assunto que entregue uma promessa concreta e pré-header que acrescente informação. Evite simular resposta com “Re:” sem conversa anterior.
4. Faça a primeira linha explicar a pertinência do envio. Desenvolva o fato, a consequência e a ação com a densidade necessária. FAB cabe na menção de produto autorizada.
5. Confira preço em R$, vigência, condição e prazo na oferta. Testemunho só entra com fonte e autorização. Se faltar testemunho no PASTOR, omita o bloco e registre a ausência fora do corpo.
6. Monte corpo e assinatura, confirme CTA e rodapé obrigatório do projeto. Teste personalização com nome presente e ausente, versão em texto e destino do link. Passe por `inboundfy-copy-editor`, A5 e validadora; esta skill não dispara envios.

## Template da peça

Combine os campos específicos abaixo com o envelope de `../_shared/02-contrato-de-artefato.md`: ID, skill, tipo, estado, datas, entrada, contexto, fontes e próxima ação. Não substitua o template do consumidor por outro formato. Os campos abaixo complementam o contrato; `brief` é obrigatório em pacote e aponta para a origem efetiva.

```markdown
---
id: "{id}"
skill: inboundfy-especialista-email
tipo: email
canal: email
estado: rascunho
persona: "{persona selecionada}"
assunto: "{promessa específica}"
pre-header: "{informação complementar}"
estrutura: "{aida|pas|pastor|nenhuma}"
remetente: "{nome autorizado}"
reply_to: "{endereço confirmado}"
segmento: "{segmento do brief}"
cta: "{ação e destino confirmados}"
brief: "{caminho do brief aprovado}"
fontes:
  - "{fonte da afirmação ou dado}"
---

{Saudação com alternativa segura quando o nome faltar.}

{Primeira linha que situa o motivo do envio.}

{Desenvolvimento conforme estrutura declarada, com fato e consequência.}

{Condição ou limite que o leitor precisa saber antes da ação.}

[{Verbo + objeto}]({destino})

{Assinatura canônica.}

{Motivo do recebimento e rodapé de preferências confirmado pelo projeto.}
```

## Modelos por situação

### Modelo de convite AIDA

```markdown
Assunto: {objeto do convite e informação concreta}
Pré-header: {data, escopo ou condição que complementa}

Olá!

{Convite direto, com data e fuso confirmados quando houver horário.}

{O que a pessoa fará ou receberá. Relacione com a tarefa da persona.}

{Condição de participação, preço em R$ e o que ocorre depois do clique, somente com fonte.}

[{Inscrever-se ou outra ação única}]({destino confirmado})

{Assinatura e rodapé do projeto.}
```

### Modelo de oferta PASTOR

```markdown
{Problema situado da persona.}

{Consequência verificável, sem ameaça criada pelo texto.}

{História ou solução registrada no acervo.}

{Resultado e testemunho autorizado, se existir. Sem fonte, omitir o bloco e avisar fora do corpo.}

{Oferta: entrega, preço em R$, condição de pagamento, prazo verdadeiro e limite.}

[{Ação principal}]({destino confirmado})

{Assinatura e rodapé.}
```

Antes da entrega, teste nome preenchido, nome ausente, acentos, destino final e links de serviço. Não suponha que variável de uma ferramenta funciona em outra. A sintaxe vem de `context/integracoes.md` e do template instalado. Não transforme pedido de copy em disparo de mensagem.

## Exemplo completo e leitura no fluxo

Na etapa de montagem da peça, leia [o exemplo completo da Fornada Clara](references/exemplo-completo.md). Ele inclui entrada aprovada e saída integral, com todos os blocos do canal. Na conferência final, compare com [o relatório preenchido da validadora](../inboundfy-validador-email/REFERENCIA.md#exemplo-de-relatório-preenchido).

## Checklist numerado do par

Os números são os mesmos na produtora e na validadora. A classificação indica o tipo de leitura necessário; uma regra pode exigir mais de um passe. Marque não aplicável somente com justificativa verificável.

1. [ ] **literal**: Assunto, pré-header, estrutura válida, assinatura e `brief` de pacote estão presentes; faixas editoriais foram conferidas.
2. [ ] **semântica**: Assunto e pré-header se complementam, cumprem a promessa e correspondem ao segmento e objetivo.
3. [ ] **estrutural**: Blocos correspondem à estrutura declarada; existe uma ação principal sem CTA concorrente.
4. [ ] **semântica**: Preço, prazo, benefício, FAB e testemunho têm fonte; urgência e personalização não simulam fatos.
5. [ ] **literal**: Remetente, Reply-To, destino, variáveis e alternativa para nome ausente foram conferidos; rodapé usa links do projeto.
6. [ ] **visual**: Prévia móvel e versão em texto mantêm leitura, CTA e rodapé; informação essencial não depende de imagem.
7. [ ] **literal**: ID, estado real, persona, origem e fontes estão ligados à peça; o exemplo fictício não virou contexto do consumidor.
8. [ ] **semântica**: Voz e afirmações conferem com todos os contextos e fontes aplicáveis; lacuna factual permanece fora da copy.
9. [ ] **estrutural**: Proibições foram revistas em passes literal e semântico/estrutural no arquivo inteiro, inclusive metadata, links e CTA.
10. [ ] **visual**: `brand/` foi procurada; ativos existentes e texto visual foram inspecionados ou a ausência foi justificada.
11. [ ] **estrutural**: Revisão de `inboundfy-copy-editor`, marco A5 e retorno da validadora foram registrados; mudança exige nova leitura integral.

## Erros comuns de email

- Assunto promete arquivo e CTA abre compra. Alinhe o destino à promessa.
- Campo de nome aparece cru ou com saudação incompleta. Use uma alternativa neutra testada.
- Criar urgência ou depoimento para preencher PASTOR. Omita o que não tem fonte e relate a lacuna.

## Acompanhamento da peça

Registre cliques únicos/entregues, conclusões da ação/entregues e descadastros/entregues com janela e segmento. Aberturas são sinal auxiliar sujeito à privacidade do cliente de e-mail. Compare o histórico da lista; não transforme faixa de mercado em meta garantida.

Medição pertence ao planejamento e às integrações aprovadas. Esta especialista entrega copy e relação com as fontes. Não configura envio, publicação ou coleta por conta própria.

## Guia específico do grupo

O registro do grupo `especialista` identifica canal `email`, persona, objetivo do brief, formato e `inboundfy-validador-email` como destino de revisão. Entregue arquivo, fontes lidas, pendências e ação solicitada. Se houver reprovação, corrija apenas o alcance solicitado, releia a peça inteira e retorne à mesma validadora. A aprovação precede o retorno a `inboundfy-planejamento`; variantes de imagem mantêm seus fluxos próprios.

## Arquitetura aplicada

- Antes da redação ou auditoria: [preflight e fontes](../_shared/01-preflight-e-fontes.md).
- Ao registrar a peça: [artefato e relações](../_shared/02-contrato-de-artefato.md).
- Nas escolhas e entrega: [checkpoints e handoff](../_shared/03-interacao-e-handoff.md).
- A cada rodada: [validação e retomada](../_shared/04-validacao-e-retomada.md).
- Antes de qualquer texto público: [contexto editorial](../_shared/05-contexto-editorial.md).

Leia também `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, `CONTEXTO.md` e `METODOLOGIA.md`. Os caminhos `context/` resolvem para `.inboundfy/context/` no consumidor; preserve a resolução e os diretórios já configurados.

## Estruturas na redação

No passo de redação, consulte [a aplicação por formato](references/estruturas-persuasivas.md) para executar a estrutura já aprovada no brief.
