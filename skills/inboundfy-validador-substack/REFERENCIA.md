# Auditoria de artigo ou newsletter Substack

## Preparação da rodada

Leia integralmente a candidata, o brief, acervo e a [produtora pareada](../inboundfy-especialista-substack/SKILL.md), incluindo [seu manual](../inboundfy-especialista-substack/REFERENCIA.md) e o exemplo completo. Aplique `inboundfy-base-validador` antes da conferência do canal. A validadora relata; ela não altera a candidata.

O manifesto inclui todos os Markdown de `.inboundfy/context/`, `.inboundfy/fontes-projeto.md`, fontes locais relevantes, regras editoriais, histórico e `brand/` quando existir. Não limite a leitura aos arquivos citados pela produtora. Ausência obrigatória ou conflito factual impede aprovação e recebe destino explícito.

## Procedimento para este canal

1. Confirme o formato de artigo ou newsletter Substack e a versão recebida; identifique o caminho e o ID sem renomear a peça.
2. Compare os campos e parâmetros com o brief. Os alvos editoriais da produtora não são limites técnicos universais. Uma faixa diferente precisa estar registrada no brief, não ser aceita silenciosamente.
3. Aplique os itens 1 a 6 do checklist ao conteúdo específico de `substack`. Registre trechos e fontes; gosto pessoal não produz reprovação.
4. Aplique os itens 7 a 11 ao conjunto inteiro. Execute passe literal de vetos, passe semântico de paráfrases e leitura estrutural do documento. Inspecione texto visual quando existir.
5. Registre `inboundfy-copy-editor` e A5 conforme a base. Preencha matriz, achados e encaminhamento. Não use nota, percentual editorial ou aprovação condicional.
6. Após correção, releia tudo, repita os passes e execute `inboundfy content digest <id>` para obter caminho e SHA-256 completo da versão final antes de aprovar. Copie os campos canônicos da base. Mudança posterior invalida a aprovação anterior.

## Checklist numerado do par

Esta lista espelha exatamente a produtora. Resultado permitido por item: conforme, não conforme ou não aplicável com justificativa. Qualquer ocorrência de veto literal, semântico ou estrutural reprova a peça. Falta visual obrigatória também exige correção antes de aprovação.

1. [ ] **literal**: Frontmatter contém canal, persona, acervo, base editorial, título, fontes, revisão e `brief` de pacote.
2. [ ] **semântica**: A tese deriva do acervo aprovado; autoria e primeira pessoa não atribuem vivência inexistente.
3. [ ] **estrutural**: Abertura, desenvolvimento, caso e contraponto formam argumento; adaptação ultrapassa o resumo da fonte.
4. [ ] **semântica**: Links e referências sustentam as afirmações; condição de acesso e promessa de continuação conferem com brief.
5. [ ] **estrutural**: CTA é único; separador de acesso, se aplicável, segue template; revisão fica fora do texto público.
6. [ ] **visual**: Título, subtítulo, hierarquia e prévia disponível preservam leitura; imagens existentes têm alt text e marca conferidos.
7. [ ] **literal**: ID, estado real, persona, origem e fontes estão ligados à peça; o exemplo fictício não virou contexto do consumidor.
8. [ ] **semântica**: Voz e afirmações conferem com todos os contextos e fontes aplicáveis; lacuna factual permanece fora da copy.
9. [ ] **estrutural**: Proibições foram revistas em passes literal e semântico/estrutural no arquivo inteiro, inclusive metadata, links e CTA.
10. [ ] **visual**: `brand/` foi procurada; ativos existentes e texto visual foram inspecionados ou a ausência foi justificada.
11. [ ] **estrutural**: Revisão de `inboundfy-copy-editor`, marco A5 e retorno da validadora foram registrados; mudança exige nova leitura integral.

## Categorias e alcance da leitura

| Categoria | Leitura aplicada a substack | Registro necessário |
| --- | --- | --- |
| Literal | Campos, nomes, URLs, números e termos vedados, inclusive frontmatter | Campo ou trecho exato e origem da regra |
| Semântica | Promessa, fatos, intenção, atribuição e paráfrase de veto | O que a frase afirma e qual fonte a sustenta ou contradiz |
| Estrutural | Ordem dos blocos, função das seções e pedidos ao leitor | Relação entre seções e item numerado violado |
| Visual | Hierarquia, tabelas, ativos de marca e prévia disponível | Artefato realmente inspecionado; ausência justificada quando aplicável |

Uma imagem não inspecionada não recebe resultado conforme. Se não houver recurso de prévia, registre a limitação e não afirme teste de tela. Se o brief exigir exportação ou prévia, mantenha essa pendência obrigatória aberta.

## Template de relatório

Use [o relatório canônico da base](../inboundfy-base-validador/REFERENCIA.md#template-do-relatório), preservando todas as suas seções e rótulos. Salve em `06-auditoria/assets/<canal>-<item>.md` no pacote ou `<nome-do-asset>.auditoria.md` junto da peça avulsa. O quadro de canal complementa o relatório da base, sem substituir manifesto, matriz ou histórico.

```markdown
# Validação de asset; substack/{item}

- **Asset:** `{caminho da candidata}`
- **Brief:** {caminho ou peça avulsa}
- **Produtora:** inboundfy-especialista-substack
- **Validadora:** inboundfy-validador-substack
- **Rodada:** {número}
- **ID da peça:** `{ID}`
- **SHA-256 da peça:** `{hash completo obtido pelo digest da candidata}`
- **Veredito:** {aprovado | reprovado | devolvido para briefing | impedido}

## Fontes carregadas

| Arquivo ou ativo | Estado | Uso na auditoria |
| --- | --- | --- |
| {cada contexto, fonte, regra e ativo} | {lido ou impedimento} | {campo ou afirmação conferida} |

## Conferência do canal

| Item | Categoria | Resultado | Comprovação localizada |
| --- | --- | --- | --- |
| {1 a 11, uma linha por item} | {categoria do checklist} | {resultado} | {local e fonte} |

## Achados

| Localização | Trecho observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| {arquivo e seção} | {trecho} | {item e origem} | {alteração verificável, sem editar a candidata} |

## Conferência de proibições

{Matriz completa da base: vetos de negócio, aberturas, fechamentos, vocabulário, parágrafos, headings/listas, pontuação/fluidez e autoridade/dados.}

## Marca e apresentação

{Arquivos e ativos inspecionados, resultados e pendências.}

## A5 e revisão editorial

{Caminho, ciclo e resultado do A5; achados do copy-editor e tratamento.}

## Encaminhamento

- **Destino:** {produtora, planejamento, usuário ou nenhum}
- **Instrução:** {correção e nova leitura integral}

## Histórico

- Rodada {número}: {síntese e veredito}.
```

## Exemplo de relatório preenchido

Este relatório é uma demonstração de reprovação. Empresa, pessoas, arquivos e rodada são fictícios. A versão defeituosa contém a alteração descrita abaixo em relação ao [exemplo integral](../inboundfy-especialista-substack/references/exemplo-completo.md). Não representa auditoria realizada no consumidor. O hash não foi calculado, pois não existe candidata persistida; esta demonstração nunca autoriza estado aprovado.

```markdown
# Validação de asset; substack/fornada

- **Asset:** `canais/substack/0042-2026-09-14-fornada/README.md`
- **Brief:** conteudo/fornada/04-briefs/substack-fornada.md
- **Produtora:** inboundfy-especialista-substack
- **Validadora:** inboundfy-validador-substack
- **Rodada:** 1
- **ID da peça:** `0042`
- **SHA-256 da peça:** não calculado; demonstração sem candidata persistida
- **Veredito:** reprovado

## Fontes carregadas

| Arquivo ou ativo | Estado | Uso na auditoria |
| --- | --- | --- |
| conteudo/fornada/04-briefs/substack-fornada.md | lido | Formato e objetivo específico de substack |
| acervo/0042-2026-09-14-fornada/base-editorial.md | lido | Persona-01 e base factual do caso |
| acervo/0042-2026-09-14-fornada/processado.md | lido | Caso didático: 300, 260, dez e 30 pães |
| .inboundfy/fontes-projeto.md | lido | Registro didático das fontes locais |
| .inboundfy/context/empresa.md | lido | Empresa fictícia em Campinas |
| .inboundfy/context/marca-voz.md | lido | Voz direta e assinatura da equipe |
| .inboundfy/context/publico.md | lido | Persona-01, responsável pelo balcão |
| .inboundfy/context/produtos.md e servicos.md | lido | Nenhuma funcionalidade ou oferta acrescida |
| .inboundfy/context/ofertas.md | lido | Sem oferta paga nesta peça |
| .inboundfy/context/pessoas.md | lido | Lia e Beto pertencem ao caso fictício |
| .inboundfy/context/links.md e ferramentas.md | lido | Destino didático da ficha, sem integração real |
| .inboundfy/context/canais.md e integracoes.md | lido | Caminho demonstrativo, sem envio autorizado |
| .inboundfy/context/glossario.md e aprendizado.md | lido | Grafias e alcance da orientação |
| .inboundfy/context/proibicoes.md e estruturas-proibidas.md | lido | Passes integralmente realizados na simulação |
| Demais Markdown encontrados no contexto didático | lido | Nenhum conflito com a peça |
| SKILL.md e REFERENCIA.md da produtora e validadora | lido | Contrato de substack e checklist 1 a 11 |
| ESCRITA.md, ESTRUTURAS-PERSUASIVAS.md, CONTEXTO.md e METODOLOGIA.md | lido | Prosa, fontes e fluxo |
| brand/ | não aplicável | Ausente no cenário didático |

## Conferência do canal

| Item | Resultado | Comprovação localizada |
| --- | --- | --- |
| 1 | não conforme | frontmatter, campo acervo: acervo ausente |
| 2 | conforme | Intenção, atribuição e alcance comparados com a origem |
| 3 | conforme | Blocos e ação principal lidos na sequência completa |
| 4 | conforme | Fatos e parâmetros comparados com a fonte correspondente |
| 5 | conforme | Links, grafias e fechamento conferidos no escopo do canal |
| 6 | conforme | Hierarquia legível no Markdown; sem mídia ou prévia exigida |
| 7 | conforme | ID, persona e origem didática presentes nas relações |
| 8 | conforme | Afirmações comparadas com o contexto didático |
| 9 | conforme | Passes literal e semântico/estrutural sem veto na simulação |
| 10 | não aplicável | brand/ ausente no cenário |
| 11 | não conforme | Candidata ainda exige correção e nova rodada |

## Achados

| Localização | Trecho observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| README.md, frontmatter, campo acervo | acervo ausente | Regra 1: relação obrigatória com o material de origem | Adicionar caminho do acervo e conferir base editorial, fontes e tese contra essa entrada. |

## Conferência de proibições

| Categoria | Passe literal | Passe semântico/estrutural | Ocorrências |
| --- | --- | --- | --- |
| Vetos de negócio | aprovado | aprovado | nenhuma |
| Aberturas proibidas | aprovado | aprovado | nenhuma |
| Fechamentos proibidos | aprovado | aprovado | nenhuma |
| Vocabulário proibido | aprovado | aprovado | nenhuma |
| Estruturas de parágrafo | aprovado | aprovado | nenhuma |
| Headings e listas | aprovado | aprovado | nenhuma |
| Pontuação e fluidez | aprovado | aprovado | nenhuma |
| Autoridade e dados | aprovado | aprovado | nenhuma |

## Marca e apresentação

Sem brand/ ou imagem no cenário. Conferida a hierarquia do Markdown. Nenhuma inspeção de provedor ou publicação foi simulada como teste real.

## A5 e revisão editorial

Registro didático: auditorias/anti-slop/05-peca.md, ciclo 1. A revisão localizou o mesmo achado descrito acima. Correção ainda não aplicada; novo A5 e nova leitura integral serão necessários.

## Encaminhamento

- **Destino:** inboundfy-especialista-substack
- **Instrução:** Adicionar caminho do acervo e conferir base editorial, fontes e tese contra essa entrada. Devolver a peça inteira para nova rodada, incluindo digest real antes de qualquer aprovação.

## Histórico

- Rodada 1: reprovado pelo achado localizado; nenhuma candidata foi alterada pela validadora.
```

Na execução real, liste cada arquivo do manifesto individualmente, com o caminho efetivo. As linhas agrupadas acima resumem somente o cenário fictício. Para aprovação real, o relatório precisa de ID, caminho e SHA-256 completo retornados por `inboundfy content digest <id>` e `Veredito: aprovado`, conforme o formato canônico da base.

## Erros comuns de auditoria

- Colar transcrição sem reconstruir argumento. Comece pela tese e selecione apenas trechos que a sustentam.
- Criar paywall por sugestão própria. Use somente acesso previsto no brief e template.
- Colocar relatório de revisão dentro do corpo a publicar. Mantenha caminho na metadata e documento separado.
- Aprovar apenas os campos visíveis do canal e omitir vetos no frontmatter ou no CTA. Faça os passes sobre o conjunto inteiro.
- Declarar texto visual conforme sem abrir o ativo. Registre ausência ou pendência, conforme o brief.
- Corrigir a candidata dentro da validadora. Descreva a alteração necessária e devolva à produtora.

## Guia específico do grupo

O grupo `validador` registra asset, brief, fontes, achados e estado real. Reprovação retorna a `inboundfy-especialista-substack`; divergência de finalidade volta a `inboundfy-planejamento`; fato obrigatório ausente vai ao responsável pelo contexto. Não transforme ausência factual em aprovação parcial. Preserve relatório e histórico por rodada no mesmo caminho. Uma alteração de origem exige nova auditoria completa.

## Arquitetura aplicada

- Antes da redação ou auditoria: [preflight e fontes](../_shared/01-preflight-e-fontes.md).
- Ao registrar a peça: [artefato e relações](../_shared/02-contrato-de-artefato.md).
- Nas escolhas e entrega: [checkpoints e handoff](../_shared/03-interacao-e-handoff.md).
- A cada rodada: [validação e retomada](../_shared/04-validacao-e-retomada.md).
- Antes de qualquer texto público: [contexto editorial](../_shared/05-contexto-editorial.md).

Na auditoria, consulte também `docs/method/07-validacao-e-testes.md`.

Leia também `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, `CONTEXTO.md` e `METODOLOGIA.md`. Os caminhos `context/` resolvem para `.inboundfy/context/` no consumidor; preserve a resolução e os diretórios já configurados.
