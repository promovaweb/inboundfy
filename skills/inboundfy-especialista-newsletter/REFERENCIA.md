# Manual de edição de newsletter

## Diagnóstico da peça

1. Qual tese conecta toda a edição?
2. O formato é análise, curadoria ou lançamento autorizado?
3. A edição será enviada por e-mail, publicada na web ou distribuída nos dois formatos?

Se o brief já responder, use a resposta registrada. Se faltar fato obrigatório, devolva a pergunta ao planejamento ou à manutenção de contexto indicada por `CONTEXTO.md`. Não crie uma estratégia nova para completar a peça.

| Situação no brief | Tratamento | Evitar |
| --- | --- | --- |
| Há argumento central e caso | Análise: observação, explicação, contraponto e consequência | Opinião sem fonte apresentada como fato |
| Há várias fontes ligadas ao mesmo tema | Curadoria comentada com síntese própria | Boletim de links desconexos |
| Brief pede lançamento | PASTOR com oferta confirmada e voz editorial | Anúncio inserido em análise não comercial |

## Formato e parâmetros editoriais

Preserve `assunto` para envio por e-mail, `titulo`, `description` com 145 a 155 caracteres e `brief` em pacote. Inclua `pre-header` quando houver envio. Registre edição, data, distribuição e tese em metadata interna. A publicação web tem um H1; no envio, mantenha o título conforme o template já instalado.

Alvo editorial: assunto até 50 caracteres, pré-header de 40 a 100, análise de 600 a 1.200 palavras; curadoria de 400 a 900 com 3 a 5 fontes realmente comentadas. Um brief de edição breve pode reduzir a extensão, como no exemplo completo abaixo. Não trate a faixa como limite técnico de provedor.

Arquivo Markdown no canal newsletter de `context/canais.md`. Preserve rodapé e assinatura do projeto. Links de fonte e descadastro cumprem funções de referência e serviço; a edição continua tendo uma ação principal. Não force um botão em cada seção.

## Método de produção

No passo de redação, consulte [estrutura editorial e menções comerciais](references/estrutura-editorial.md).

1. Reduza o ângulo do brief a uma frase: o que esta edição ajuda a entender agora? Separe assuntos que pertencem à edição seguinte.
2. Escolha o tratamento já permitido pelo brief: análise desenvolve argumento e contraponto; curadoria conecta fontes comentadas; lançamento segue a estrutura comercial indicada.
3. Abra com situação específica do período ou do material-fonte. Desenvolva a relação causal antes de mostrar o exemplo. Não atribua experiência pessoal ao autor sem comprovação.
4. Interprete o exemplo e acrescente seu limite. Na curadoria, cada fonte recebe resumo fiel, comentário próprio e relação com a tese; não entregue uma sequência de links sem explicação.
5. Insira produto somente quando solicitado. Complete FAB e retome o argumento editorial. Termine com CTA único coerente com a edição.
6. Prepare metadata de e-mail e web conforme distribuição. Leia a edição inteira em voz alta, aplique `inboundfy-copy-editor`, A5 e validadora. Não altere a cadência nem envie a lista.

## Template da peça

Combine os campos específicos abaixo com o envelope de `../_shared/02-contrato-de-artefato.md`: ID, skill, tipo, estado, datas, entrada, contexto, fontes e próxima ação. Não substitua o template do consumidor por outro formato. Os campos abaixo complementam o contrato; `brief` é obrigatório em pacote e aponta para a origem efetiva.

```markdown
---
id: "{id}"
skill: inboundfy-especialista-newsletter
tipo: newsletter
canal: newsletter
estado: rascunho
persona: "{persona selecionada}"
assunto: "{somente quando enviada}"
pre-header: "{complemento para envio}"
titulo: "{título da edição}"
description: "{resumo com 145 a 155 caracteres}"
edicao: "{número}"
distribuicao: "{email|web|ambos}"
tese: "{uma afirmação que o corpo desenvolve}"
brief: "{caminho do brief aprovado}"
fontes:
  - "{fonte da afirmação ou dado}"
---

# {Título da edição}

{Abertura situada que introduz a tese.}

{Explicação desenvolvida com fonte e ligação causal.}

{Caso interpretado ou curadoria comentada por um fio comum.}

{Contraponto e limite.}

{Fechamento que aplica o argumento à rotina do leitor.}

[{Ação principal}]({destino})

{Assinatura e rodapé conforme distribuição.}
```

## Modelos por situação

### Modelo de curadoria comentada

```markdown
# {Título que conecta as fontes}

{Abertura que explica o fio comum e sua utilidade para a persona.}

## {Primeira leitura}

[{Fonte e título}]({URL confirmada}). {Resumo fiel do argumento}. {Comentário próprio: consequência concreta e limite da fonte}.

## {Segunda leitura}

[{Fonte e título}]({URL confirmada}). {O que acrescenta ou contrapõe à primeira}. {O que o leitor pode conferir na própria rotina}.

## {Terceira leitura}

[{Fonte e título}]({URL confirmada}). {Nova informação sem repetir as anteriores}. {Limitação ou condição de aplicação}.

{Síntese que conecta as leituras, sem transformar opinião em consenso.}

[{Ação principal aprovada}]({destino})

{Assinatura e rodapé conforme distribuição.}
```

### Modelo de preparação do envio

```yaml
edicao: "{número}"
distribuicao: "{email|web|ambos}"
segmento: "{grupo definido no brief}"
assunto: "{promessa da edição}"
pre-header: "{complemento}"
remetente: "{identidade autorizada}"
reply_to: "{endereço confirmado}"
previa_movel: "{artefato conferido ou pendente}"
versao_texto: "{artefato conferido ou pendente}"
rodape: "{template vigente}"
```

Metadados operacionais não entram no corpo público. Na versão web, retire instruções internas do envio. Na versão de e-mail, preserve fontes e serviço sem acrescentar ofertas concorrentes.

## Exemplo completo e leitura no fluxo

Na etapa de montagem da peça, leia [o exemplo completo da Fornada Clara](references/exemplo-completo.md). Ele inclui entrada aprovada e saída integral, com todos os blocos do canal. Na conferência final, compare com [o relatório preenchido da validadora](../inboundfy-validador-newsletter/REFERENCIA.md#exemplo-de-relatório-preenchido).

## Checklist numerado do par

Os números são os mesmos na produtora e na validadora. A classificação indica o tipo de leitura necessário; uma regra pode exigir mais de um passe. Marque não aplicável somente com justificativa verificável.

1. [ ] **literal**: Título, description de 145 a 155 caracteres e `brief` de pacote presentes; envio inclui assunto e pré-header.
2. [ ] **semântica**: A edição sustenta uma tese ligada ao brief, sem atribuir experiência pessoal não documentada.
3. [ ] **estrutural**: Abertura, desenvolvimento, exemplo interpretado, contraponto e fechamento progridem sem repetição.
4. [ ] **semântica**: Fontes da curadoria têm comentário próprio; menções comerciais autorizadas aplicam FAB e têm fonte.
5. [ ] **estrutural**: Fechamento tem ação principal única; links de referência e serviço não viram ofertas concorrentes.
6. [ ] **visual**: Versões web e e-mail mantêm leitura contínua, assinatura, links e rodapé; marca foi conferida quando presente.
7. [ ] **literal**: ID, estado real, persona, origem e fontes estão ligados à peça; o exemplo fictício não virou contexto do consumidor.
8. [ ] **semântica**: Voz e afirmações conferem com todos os contextos e fontes aplicáveis; lacuna factual permanece fora da copy.
9. [ ] **estrutural**: Proibições foram revistas em passes literal e semântico/estrutural no arquivo inteiro, inclusive metadata, links e CTA.
10. [ ] **visual**: `brand/` foi procurada; ativos existentes e texto visual foram inspecionados ou a ausência foi justificada.
11. [ ] **estrutural**: Revisão de `inboundfy-copy-editor`, marco A5 e retorno da validadora foram registrados; mudança exige nova leitura integral.

## Erros comuns de newsletter

- Colar cinco links e chamar de curadoria. Explique por que cada fonte muda a leitura do tema.
- Escrever em primeira pessoa um caso que veio de terceiro. Atribua a origem sem simular vivência.
- Inserir anúncio sem ligação com a edição. Retire ou integre somente se o brief permitir.

## Acompanhamento da peça

Compare cliques úteis, respostas pertinentes e descadastros por edição e segmento. Na curadoria, diferencie clique em fonte e ação principal. Não avalie valor editorial apenas por abertura.

Medição pertence ao planejamento e às integrações aprovadas. Esta especialista entrega copy e relação com as fontes. Não configura envio, publicação ou coleta por conta própria.

## Guia específico do grupo

O registro do grupo `especialista` identifica canal `newsletter`, persona, objetivo do brief, formato e `inboundfy-validador-newsletter` como destino de revisão. Entregue arquivo, fontes lidas, pendências e ação solicitada. Se houver reprovação, corrija apenas o alcance solicitado, releia a peça inteira e retorne à mesma validadora. A aprovação precede o retorno a `inboundfy-planejamento`; variantes de imagem mantêm seus fluxos próprios.

## Arquitetura aplicada

- Antes da redação ou auditoria: [preflight e fontes](../_shared/01-preflight-e-fontes.md).
- Ao registrar a peça: [artefato e relações](../_shared/02-contrato-de-artefato.md).
- Nas escolhas e entrega: [checkpoints e handoff](../_shared/03-interacao-e-handoff.md).
- A cada rodada: [validação e retomada](../_shared/04-validacao-e-retomada.md).
- Antes de qualquer texto público: [contexto editorial](../_shared/05-contexto-editorial.md).

Leia também `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, `CONTEXTO.md` e `METODOLOGIA.md`. Os caminhos `context/` resolvem para `.inboundfy/context/` no consumidor; preserve a resolução e os diretórios já configurados.
