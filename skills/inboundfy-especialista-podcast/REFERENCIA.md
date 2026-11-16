# Manual de pauta e shownotes de podcast

## Diagnóstico da peça

1. O episódio está em preparação ou já existe gravação final?
2. Quem participa e quais nomes e cargos estão confirmados?
3. Há áudio final, duração e transcrição com marcações para conferir os shownotes?

Se o brief já responder, use a resposta registrada. Se faltar fato obrigatório, devolva a pergunta ao planejamento ou à manutenção de contexto indicada por `CONTEXTO.md`. Não crie uma estratégia nova para completar a peça.

| Situação no brief | Tratamento | Evitar |
| --- | --- | --- |
| Ainda não há gravação | Pauta com tempos previstos e perguntas abertas | Shownotes narrados no passado |
| Há edição final com áudio | Shownotes e capítulos conferidos nessa edição | Usar tempos do áudio bruto |
| Há somente transcrição sem tempos | Resumo sustentado e tempos pendentes | Inventar marcação aproximada sem aviso |

## Formato e parâmetros editoriais

Preserve frontmatter com `apresentadores`, `convidado` quando houver, `data` e `brief` em pacote. Acrescente fase, episódio, duração e fonte da gravação. Identifique os tempos da pauta como previstos; os tempos dos shownotes são observados.

Pauta pode ocupar 1 a 3 páginas de guia interno para conversa de 20 a 40 minutos, sem relação fixa entre páginas e duração. Shownotes usam título até 80 caracteres como alvo editorial, resumo de 80 a 180 palavras, tópicos e links citados confirmados. O brief pode pedir episódio breve, como o exemplo de 12 minutos. Não afirme limite técnico de distribuidor.

Salve pauta e shownotes juntos ou separados conforme `context/canais.md`. Se separados, relacione os caminhos e a mesma versão de áudio. Capítulos usam `MM:SS` ou `HH:MM:SS`, em ordem crescente dentro da duração. Se não houver mídia, marque conferência visual como não aplicável; se houver capa ou player, confira marca e acessibilidade sem gerar arte aqui.

## Método de produção

1. Identifique a fase. Antes da gravação, produza pauta; depois, produza shownotes a partir da edição final. Pauta não comprova o que foi dito.
2. Confirme participantes em `context/pessoas.md`. Defina objetivo, duração prevista e blocos com soma de tempos compatível.
3. Para cada bloco, escreva objetivo, pergunta principal, pergunta de aprofundamento e transição. Dê espaço para resposta espontânea; não escreva falas fictícias para o convidado.
4. Após receber áudio ou transcrição final, confronte título, resumo, tópicos e links com o conteúdo efetivo. Corte tópicos removidos na edição.
5. Marque capítulos com tempos realmente conferidos no áudio final. Se houver apenas transcrição sem tempo, omita marcações e registre a pendência; não estime segundos como se fossem exatos.
6. Aplique `inboundfy-copy-editor` à prosa pública dos shownotes, confira nomes, links, A5 e validadora. A pauta interna recebe conferência funcional; não precisa imitar prosa publicada.

## Template da peça

Combine os campos específicos abaixo com o envelope de `../_shared/02-contrato-de-artefato.md`: ID, skill, tipo, estado, datas, entrada, contexto, fontes e próxima ação. Não substitua o template do consumidor por outro formato. Os campos abaixo complementam o contrato; `brief` é obrigatório em pacote e aponta para a origem efetiva.

```markdown
---
id: "{id}"
skill: inboundfy-especialista-podcast
tipo: podcast
canal: podcast
estado: rascunho
persona: "{persona selecionada}"
apresentadores: ["{nome confirmado}"]
convidado: "{nome confirmado ou omitir}"
data: "{AAAA-MM-DD}"
fase: "{preparacao|pos-gravacao}"
episodio: "{número}"
duracao: "{prevista ou observada}"
fonte_gravacao: "{arquivo final ou pendente}"
brief: "{caminho do brief aprovado}"
fontes:
  - "{fonte da afirmação ou dado}"
---

# Pauta: {tema}

Objetivo: {resultado da conversa}. Duração prevista: {minutos}.

## {Tempo previsto}: {bloco}

Objetivo: {entrega deste bloco}.
Pergunta principal: {pergunta aberta}.
Aprofundamento: {pedido de caso, mecanismo ou limite}.
Transição: {ligação com o bloco seguinte}.

# Shownotes: {título do episódio}

{Resumo sustentado pela edição final. Não preencher antes da gravação.}

## Neste episódio

- {ponto realmente abordado}

## Capítulos

- {tempo conferido}: {assunto audível nesse trecho}

## Links citados

- [{recurso}]({destino confirmado})

{CTA único do brief.}
```

## Modelos por situação

### Modelo de conferência após edição

```markdown
Áudio final: {caminho e versão}.
Duração observada: {HH:MM:SS}.
Transcrição: {caminho e relação com o áudio final}.

| Trecho do shownote | Tempo conferido | Conteúdo ouvido | Resultado |
| --- | --- | --- | --- |
| {afirmação do resumo} | {tempo no áudio final} | {paráfrase fiel} | {manter ou corrigir} |
| {capítulo} | {tempo inicial real} | {assunto audível} | {manter ou corrigir} |
| {link citado} | {momento da menção} | {nome pronunciado} | {destino e grafia confirmados} |
```

### Modelo de pauta sem convidado

```markdown
# {Tema do episódio solo}

Objetivo: {pergunta a resolver}.
Duração prevista: {minutos}.

## {Tempo previsto}: abertura

Situação de partida: {objeto concreto}.
Pergunta que o episódio responde: {dúvida da persona}.

## {Tempo previsto}: demonstração

Caso a desenvolver: {fonte e dados disponíveis}.
Pontos a conferir: {mecanismo e consequência}.
Limite a explicar: {onde o caso não se aplica}.

## {Tempo previsto}: fechamento

Retomada: {resultado explicado sem repetir a abertura}.
Ação única: {CTA do brief}.
```

A tabela de conferência é apoio interno. Não publique transcrição de fala ou citação literal sem conferir a gravação e a autorização pertinente. Se um corte mover o tempo, atualize todos os derivados afetados.

## Exemplo completo e leitura no fluxo

Na etapa de montagem da peça, leia [o exemplo completo da Fornada Clara](references/exemplo-completo.md). Ele inclui entrada aprovada e saída integral, com todos os blocos do canal. Na conferência final, compare com [o relatório preenchido da validadora](../inboundfy-validador-podcast/REFERENCIA.md#exemplo-de-relatório-preenchido).

## Checklist numerado do par

Os números são os mesmos na produtora e na validadora. A classificação indica o tipo de leitura necessário; uma regra pode exigir mais de um passe. Marque não aplicável somente com justificativa verificável.

1. [ ] **literal**: Participantes, data, fase, episódio, duração, fonte final e `brief` de pacote foram registrados; nomes conferem com contexto.
2. [ ] **estrutural**: Pauta tem blocos, objetivos, perguntas abertas, transições e tempos previstos cuja soma cabe na duração.
3. [ ] **semântica**: Shownotes descrevem apenas a edição final; pauta não foi usada como prova de fala ou assunto gravado.
4. [ ] **literal**: Tempos crescem dentro da duração final e foram conferidos; sem áudio, não há tempos inventados.
5. [ ] **semântica**: Resumo específico, atribuições e links têm fonte; prosa pública passou por revisão e CTA é único.
6. [ ] **visual**: Shownotes permitem leitura e navegação por capítulos; capa ou player existente respeita marca e acessibilidade.
7. [ ] **literal**: ID, estado real, persona, origem e fontes estão ligados à peça; o exemplo fictício não virou contexto do consumidor.
8. [ ] **semântica**: Voz e afirmações conferem com todos os contextos e fontes aplicáveis; lacuna factual permanece fora da copy.
9. [ ] **estrutural**: Proibições foram revistas em passes literal e semântico/estrutural no arquivo inteiro, inclusive metadata, links e CTA.
10. [ ] **visual**: `brand/` foi procurada; ativos existentes e texto visual foram inspecionados ou a ausência foi justificada.
11. [ ] **estrutural**: Revisão de `inboundfy-copy-editor`, marco A5 e retorno da validadora foram registrados; mudança exige nova leitura integral.

## Erros comuns de podcast

- Publicar assunto cortado na edição porque estava na pauta. Reouça a versão final.
- Transformar perguntas em falas atribuídas ao convidado. Preserve as perguntas como guia.
- Copiar tempos do áudio bruto para o final. Reconfira depois de qualquer corte.

## Acompanhamento da peça

Compare início de reprodução, retenção por bloco e conclusão na mesma plataforma e janela. Cliques dos shownotes medem uso dos recursos, não escuta completa. Não compare downloads de provedores com definições diferentes sem anotar a diferença.

Medição pertence ao planejamento e às integrações aprovadas. Esta especialista entrega copy e relação com as fontes. Não configura envio, publicação ou coleta por conta própria.

## Guia específico do grupo

O registro do grupo `especialista` identifica canal `podcast`, persona, objetivo do brief, formato e `inboundfy-validador-podcast` como destino de revisão. Entregue arquivo, fontes lidas, pendências e ação solicitada. Se houver reprovação, corrija apenas o alcance solicitado, releia a peça inteira e retorne à mesma validadora. A aprovação precede o retorno a `inboundfy-planejamento`; variantes de imagem mantêm seus fluxos próprios.

## Arquitetura aplicada

- Antes da redação ou auditoria: [preflight e fontes](../_shared/01-preflight-e-fontes.md).
- Ao registrar a peça: [artefato e relações](../_shared/02-contrato-de-artefato.md).
- Nas escolhas e entrega: [checkpoints e handoff](../_shared/03-interacao-e-handoff.md).
- A cada rodada: [validação e retomada](../_shared/04-validacao-e-retomada.md).
- Antes de qualquer texto público: [contexto editorial](../_shared/05-contexto-editorial.md).

Leia também `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, `CONTEXTO.md` e `METODOLOGIA.md`. Os caminhos `context/` resolvem para `.inboundfy/context/` no consumidor; preserve a resolução e os diretórios já configurados.
