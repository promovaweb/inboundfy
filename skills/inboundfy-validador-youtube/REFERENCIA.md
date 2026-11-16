# Conferência de YouTube

Aplique `inboundfy-base-validador`. No passo 1, leia a
[referência da produtora](../inboundfy-especialista-youtube/REFERENCIA.md) e seus
[modelos](../inboundfy-especialista-youtube/references/modelos-e-exemplo.md).
Confira metadados, corpo, notas, legendas, alt text e texto visual previsto.

## Procedimento de leitura

1. Confirme ID, brief, persona, fontes e versão recebida. Execute
   `inboundfy content digest <id>` e use o caminho retornado.
2. Leia todos os Markdown de `.inboundfy/context/`, documentos editoriais,
   fontes locais relevantes e regras de `brand/` quando existir.
   Registre cada arquivo lido. Fonte necessária ausente impede a aprovação.
3. Faça passes literal, semântico, estrutural e visual.
4. Aplique a lista numerada espelhada. Cada falha recebe local, trecho,
   regra ou fonte, diagnóstico e correção verificável.
5. Confirme `inboundfy-copy-editor` e a auditoria A5 de `inboundfy-anti-slop`.
   Uma contagem ou nota editorial não substitui essas leituras.
6. Gere o relatório no caminho previsto pela base. Devolva falhas à produtora
   sem editar o asset. Depois da correção, leia tudo novamente, preserve o
   histórico e obtenha o digest atual.

## Checklist espelhado

1. [ ] **Literal | Envelope.** ID, persona, acervo, base editorial, brief, formato, duração, estado e destino estão vinculados no README.
2. [ ] **Semântica | Promessa do título.** Título, abertura e roteiro entregam a mesma tarefa, sem número ou resultado não sustentado.
3. [ ] **Literal | Metadados copiáveis.** Título e descrição têm contagens registradas e cabem nos campos confirmados; notas internas não entram na publicação.
4. [ ] **Estrutural | Abertura e desenvolvimento.** Abertura apresenta objeto e limite; roteiro progride por funções e resolve a dúvida sem introdução vazia.
5. [ ] **Semântica | Fala e autoria.** Fala é compreensível em voz alta; autor e experiências, quando houver, conferem com o registro de pessoas.
6. [ ] **Semântica | Fontes e simulações.** Afirmações e demonstrações têm origem; simulação é identificada e não vira resultado de cliente.
7. [ ] **Estrutural | Descrição.** Descrição resume o conteúdo e organiza ação, links, materiais e fontes sem repetir palavras-chave artificialmente.
8. [ ] **Literal | Links e CTA.** Destinos conferem com o contexto e foram verificados no alcance disponível; CTA falado e escrito pedem a mesma ação principal.
9. [ ] **Estrutural | Capítulos e duração.** Duração distingue estimativa de medição; capítulos publicados usam tempos conferidos no vídeo final ou ficam pendentes fora do texto público.
10. [ ] **Visual | Apoio e thumbnail.** Apoios existem ou têm pendência localizada; o pedido de thumbnail representa a tarefa real, sem prometer outra entrega.
11. [ ] **Literal | Dicionário e vetos.** Título, fala, descrição, metadados, apoio e notas respeitam os termos e estruturas canônicas.
12. [ ] **Estrutural | Auditoria e versão.** Copy e A5 estão vinculadas à versão recebida; roteiro reaproveitado mantém caminho e coerência; relatório contém ID, caminho e digest atual.

## Categorias de conferência

| Categoria | Aplicação neste canal |
| --- | --- |
| Literal | Contar título e descrição, conferir destinos, grafias, tempos, campos e vetos nos metadados e na fala. |
| Semântica | Testar a correspondência entre promessa, demonstração, autoria, fontes e resultado que o público recebe. |
| Estrutural | Conferir encadeamento do roteiro, ordem da descrição, capítulos finais e versão canônica de roteiro reaproveitado. |
| Visual | Confrontar o texto de thumbnail com a tarefa mostrada e localizar ativos de apoio; não aprovar vídeo final não recebido. |

Paráfrases de vetos continuam sujeitas à fonte canônica. Exceção exige
permissão explícita dessa fonte e comprovação da condição.
Justifique todo item não aplicável pelo formato recebido. Faixa editorial
ajustada pelo brief não substitui proibição ou limite técnico confirmado.

## Template do relatório de correção

Use o relatório completo de `inboundfy-base-validador`. Acrescente a matriz
numerada e a categoria de cada achado, preservando os campos da base.

```markdown
# Validação de asset; youtube/<item>

- **Asset:** <caminho retornado pelo digest>
- **Brief:** <brief aprovado>
- **Produtora:** inboundfy-especialista-youtube
- **Validadora:** inboundfy-validador-youtube
- **Rodada:** <número>
- **ID da peça:** <id>
- **SHA-256 da peça:** <64 caracteres retornados pelo comando>
- **Veredito:** <aprovado | reprovado | devolvido para briefing | impedido>
- **Estado da peça:** <revisao | aprovado>

## Fontes carregadas

| Arquivo | Estado de leitura | Uso |
| --- | --- | --- |
| <cada arquivo lido> | <lido/não aplicável/impedimento> | <campo ou motivo> |

## Matriz do canal

| Item | Categoria | Resultado | Local e comprovação |
| --- | --- | --- | --- |
| <número> | <literal/semântica/estrutural/visual> | <conforme/falha/não aplicável> | <local e motivo> |

## Achados

| Item e categoria | Localização | Trecho observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- | --- |
| <item> | <arquivo/seção/campo> | <trecho exato> | <arquivo e seção> | <alteração verificável> |

## Conferência de proibições

Inclua a tabela completa da base: vetos de negócio, aberturas, fechamentos,
vocabulário, parágrafos, headings e listas, pontuação e fluidez, autoridade
e dados. Preencha passes literal e semântico/estrutural e locais das ocorrências.

## Encaminhamento

- **Destino:** <produtora pareada ou destino previsto pela base>
- **Instrução:** <correção e alcance>
- **Nova conferência:** <conjunto inteiro e digest atual>

## Histórico

- Rodada <número>: <veredito, alterações e pendências>.
```

## Exemplo de relatório preenchido

A candidata fictícia publicou os tempos estimados como capítulos e
marcou como conferidos os URLs .example.

- **Asset:** canais/youtube/0047-2026-11-15-orcamento/README.md.
- **Brief:** acervo/0047-2026-11-15-orcamento/04-briefs/youtube-orcamento.md.
- **Produtora:** inboundfy-especialista-youtube.
- **Validadora:** inboundfy-validador-youtube.
- **ID da peça:** 0047.
- **Rodada:** 1.
- **Veredito:** reprovado.
- **Estado da peça:** revisao.
- **SHA-256 da peça:** não calculado, marcador didático de reprovação; nenhum arquivo consumidor está aprovado.

Manifesto do cenário: brief, processado.md e base-editorial.md lidos.
Contexto completo lido: empresa.md, publico.md, produtos.md, marca-voz.md,
glossario.md, proibicoes.md, estruturas-proibidas.md, links.md, canais.md,
aprendizado.md e integracoes.md, sob .inboundfy/context/.
CONTEXTO.md, ESCRITA.md e ESTRUTURAS-PERSUASIVAS.md lidos.
brand/ ausente; vídeo final não recebido.

| Item | Categoria | Resultado | Local e comprovação |
| --- | --- | --- | --- |
| 1 | literal | Conforme | Acervo, base, brief e campos do README presentes. |
| 2 | semântica | Conforme | Conferência de orçamento é a tarefa do título e do roteiro. |
| 3 | literal | Falha | Contagens ainda não registradas; capítulos indevidos entraram na descrição. |
| 4 | estrutural | Conforme | Objeto, limite e desenvolvimento por campos presentes. |
| 5 | semântica | Conforme | Fala compreensível em leitura; não há apresentador com experiência atribuída. |
| 6 | semântica | Conforme | Simulação expressa e fontes ligadas aos campos. |
| 7 | estrutural | Falha | Descrição contém material marcado como final sem vídeo recebido. |
| 8 | literal | Falha | URLs didáticos não comprovam destino de produção; CTA principal é coerente. |
| 9 | estrutural | Falha | Capítulos derivam de estimativa; ensaio e vídeo final ausentes. |
| 10 | visual | Conforme | Documento simulado disponível; pedido textual de thumbnail coincide com a tarefa. |
| 11 | literal | Conforme | Sem ocorrência literal ou semântica de veto no cenário. |
| 12 | estrutural | Falha | Auditorias e digest atuais ainda não registrados. |

| Item e categoria | Local | Trecho | Regra ou fonte | Correção |
| --- | --- | --- | --- | --- |
| 8, literal | Notas de links | URLs conferidos | links.md e item 8 | Confirmar destinos reais no projeto; manter a pendência fora do bloco público. |
| 9, estrutural | Descrição, capítulos | 00:20 conferir o item | Item 9 | Retirar capítulos estimados do corpo público; conferir depois no vídeo final. |
| 3, literal | Notas internas | Contagens pendentes | Item 3 | Contar título e descrição corrigida com espaços. |
| 12, estrutural | Auditorias e versão | Registros e digest pendentes | Item 12 | Executar copy-editor, A5 e digest sobre o README corrigido; reler todo o pacote. |

Proibições do cenário: passe literal sem ocorrência. O passe
semântico/estrutural reprovou autoridade e dados pela conferência declarada
sem suporte para links e capítulos. As demais categorias passaram.
Passe visual textual conforme para o pedido de imagem. Vídeo e thumbnail
finais não recebidos, sem aprovação visual.

Destino: inboundfy-especialista-youtube. Resolver destinos, contagens e
capítulos; repetir auditorias e leitura integral do pacote. Histórico:
rodada 1 reprovada. A rodada final exige ID, caminho e SHA-256 atual.

### Conferência preenchida das proibições

| Categoria da base | Passe literal | Passe semântico/estrutural | Ocorrências |
| --- | --- | --- | --- |
| Vetos de negócio | aprovado | aprovado | Nenhuma. |
| Aberturas proibidas | aprovado | aprovado | Nenhuma. |
| Fechamentos proibidos | aprovado | aprovado | Nenhuma. |
| Vocabulário proibido | aprovado | aprovado | Nenhuma. |
| Estruturas de parágrafo | aprovado | aprovado | Nenhuma. |
| Headings e listas | aprovado | aprovado | Nenhuma. |
| Pontuação e fluidez | aprovado | aprovado | Nenhuma. |
| Autoridade e dados | aprovado | reprovado | Links e capítulos: conferência declarada sem confirmação. |

## Erros comuns na auditoria

- Aprovar descrição sem abrir ou conferir o destino no alcance disponível: registre a pendência.
- Tratar capítulos estimados como finais: exija a reprodução do vídeo.
- Conferir só metadados, ignorando a fala: leia o roteiro inteiro.
- Aprovar título atrativo que amplia a promessa: confronte a tarefa efetivamente ensinada.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme sentinelas e origens.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): preserve envelope, ID e brief.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e perguntas.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona, voz e proibições.

Resolva caminhos abreviados `context/` por `.inboundfy/fontes-projeto.md`.
A instalação usa `.inboundfy/context/`. Não mova fontes nem grave dados do consumidor no framework.

## Guia específico do grupo

Valide pacote YouTube com roteiro, título, descrição, CTA e fontes contra o brief, sem criar outro recorte.
Leia `ESCRITA.md`, `CONTEXTO.md`, `ESTRUTURAS-PERSUASIVAS.md` e
`docs/method/07-validacao-e-testes.md`.
O veredito `reprovado` mantém a peça em `revisao`. A aprovação exige
zero achado aberto, auditorias concluídas, ID, caminho e SHA-256 atual.
Não aprove arte ou vídeo renderizado apenas pelo roteiro.
