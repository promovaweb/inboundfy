# Conferência de Vídeo

Aplique `inboundfy-base-validador`. No passo 1, leia a
[referência da produtora](../inboundfy-especialista-video/REFERENCIA.md) e seus
[modelos](../inboundfy-especialista-video/references/modelos-e-exemplo.md).
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

1. [ ] **Literal | Envelope.** ID, formato, apresentador quando houver, brief, persona, fontes e duração estão registrados.
2. [ ] **Semântica | Competência.** Tema e experiências atribuídos ao apresentador correspondem ao registro de pessoas.
3. [ ] **Semântica | Gancho.** A abertura apresenta tarefa ou objeto real e promete somente o que o vídeo demonstra.
4. [ ] **Estrutural | Modo do roteiro.** Estruturado tem cenas e fala literal; talking head tem tópicos, exemplos e transições sem virar script integral.
5. [ ] **Semântica | Fala natural.** A fala foi lida em voz alta e permite escuta sem depender de sintaxe de artigo ou siglas inexplicadas.
6. [ ] **Estrutural | Progressão.** Cenas ou tópicos avançam por função; entrada, execução e conferência permanecem compreensíveis.
7. [ ] **Semântica | Duração.** Estimativa separa fala e pausas; leitura ou ensaio foi cronometrado antes de declarar tempo confirmado.
8. [ ] **Visual | Apoio executável.** Cada apoio citado existe ou recebe pendência; o roteiro não exige tela ou resultado ausente dos ativos.
9. [ ] **Visual | Escopo do apoio.** Instruções mostram o objeto necessário sem prescrever edição; conteúdo essencial da tela também aparece na explicação.
10. [ ] **Semântica | CTA e persuasão.** CTA falado tem destino confirmado; AIDA, PAS, PASTOR ou FAB seguem o brief sem inventar testemunho.
11. [ ] **Literal | Vocabulário e dados.** Fala, tópicos, telas previstas e metadados respeitam dicionário, fontes e proibições.
12. [ ] **Estrutural | Revisão e retorno.** Auditorias de copy e A5 acompanham o roteiro; nova rodada relê o conjunto e mantém o ID.

## Categorias de conferência

| Categoria | Aplicação neste canal |
| --- | --- |
| Literal | Conferir nomes, grafias, números, destino, campos e vetos na fala, nos tópicos e no apoio. |
| Semântica | Testar se a fala soa natural, se a demonstração sustenta a promessa e se o autor pode atribuir-se a experiência. |
| Estrutural | Conferir modo do roteiro, função de cada cena, ordem, duração prevista e presença do CTA falado. |
| Visual | Relacionar cada apoio ao ativo que será mostrado, com informação essencial narrada e sem exigência de edição fora do escopo. |

Paráfrases de vetos continuam sujeitas à fonte canônica. Exceção exige
permissão explícita dessa fonte e comprovação da condição.
Justifique todo item não aplicável pelo formato recebido. Faixa editorial
ajustada pelo brief não substitui proibição ou limite técnico confirmado.

## Template do relatório de correção

Use o relatório completo de `inboundfy-base-validador`. Acrescente a matriz
numerada e a categoria de cada achado, preservando os campos da base.

```markdown
# Validação de asset; video/<item>

- **Asset:** <caminho retornado pelo digest>
- **Brief:** <brief aprovado>
- **Produtora:** inboundfy-especialista-video
- **Validadora:** inboundfy-validador-video
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

A candidata fictícia acrescentou uma instrução de edição à cena 03 e
declarou duração confirmada sem ensaio.

- **Asset:** canais/video/0045-2026-11-15-retirada/README.md.
- **Brief:** acervo/0045-2026-11-15-retirada/04-briefs/video-retirada.md.
- **Produtora:** inboundfy-especialista-video.
- **Validadora:** inboundfy-validador-video.
- **ID da peça:** 0045.
- **Rodada:** 1.
- **Veredito:** reprovado.
- **Estado da peça:** revisao.
- **SHA-256 da peça:** não calculado, marcador didático de reprovação; nenhum arquivo consumidor está aprovado.

Manifesto do cenário: brief e processado.md lidos; contexto completo lido:
empresa.md, pessoas.md, publico.md, servicos.md, marca-voz.md, glossario.md,
proibicoes.md, estruturas-proibidas.md, canais.md, links.md, aprendizado.md
e integracoes.md sob .inboundfy/context/. CONTEXTO.md, ESCRITA.md e
ESTRUTURAS-PERSUASIVAS.md lidos. brand/ ausente.

| Item | Categoria | Resultado | Local e comprovação |
| --- | --- | --- | --- |
| 1 | literal | Conforme | Estruturado, Lívia Paiva e brief vinculados. |
| 2 | semântica | Conforme | Tema de atendimento autorizado em pessoas.md. |
| 3 | semântica | Conforme | Abertura mostra a ordem simulada e a retirada. |
| 4 | estrutural | Conforme | Seis cenas com fala literal. |
| 5 | semântica | Conforme | Leitura em voz alta identificou fala compreensível. |
| 6 | estrutural | Conforme | Conferência, contato, ação e leitura final progridem. |
| 7 | semântica | Falha | “Duração confirmada: 04:00” sem ensaio cronometrado. |
| 8 | visual | Conforme | Apoios usam a ordem simulada disponível. |
| 9 | visual | Falha | Cena 03 exige transição e efeito fora do escopo. |
| 10 | semântica | Conforme | CTA pede aplicação no procedimento interno. |
| 11 | literal | Conforme | Nomes, campos, metadados e fala conferidos com dicionário, fontes e proibições do cenário; não há dado de cliente real. |
| 12 | estrutural | Falha | Auditorias devem considerar a versão corrigida. |

| Item e categoria | Local | Trecho observado | Regra ou fonte | Correção |
| --- | --- | --- | --- | --- |
| 7, semântica | Registro do ensaio | Duração confirmada: 04:00 | Item 7 | Retirar confirmação e cronometrar com as pausas de tela. |
| 9, visual | Cena 03, apoio | Aplicar transição e efeito | SKILL.md, escopo de apoio mínimo | Manter apenas o objeto que precisa aparecer; remover prescrição de edição. |
| 12, estrutural | Auditorias | Registros pendentes | Item 12 | Repetir copy-editor e A5 no roteiro inteiro e vincular os registros. |

Passe literal sem ocorrência nos vetos de negócio, vocabulário e pontuação.
Autoridade e dados reprovados no passe semântico pela duração declarada sem medição.
Passe semântico/estrutural conforme nas categorias de abertura, fechamento,
parágrafos, headings/listas e autoridade/dados das proibições do cenário.
A declaração de duração falha na regra de produção do canal.
Passe visual textual falha no item 9; vídeo renderizado não recebido.

Destino: inboundfy-especialista-video. Corrigir apoio e confirmação de tempo,
realizar ensaio, reler o roteiro inteiro e atualizar auditorias.
Histórico: rodada 1 reprovada; próxima rodada exige roteiro integral e digest atual.

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
| Autoridade e dados | aprovado | reprovado | Registro do ensaio: tempo declarado sem medição. |

## Erros comuns na auditoria

- Aprovar oralidade lendo em silêncio: faça leitura em voz alta.
- Tratar estimativa de palavras como tempo medido: exija registro do ensaio.
- Reprovar outline por faltar fala literal: confira o formato aprovado.
- Aprovar captura de tela inexistente: mantenha a pendência de ativo localizada.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme sentinelas e origens.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): preserve envelope, ID e brief.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e perguntas.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona, voz e proibições.

Resolva caminhos abreviados `context/` por `.inboundfy/fontes-projeto.md`.
A instalação usa `.inboundfy/context/`. Não mova fontes nem grave dados do consumidor no framework.

## Guia específico do grupo

Valide roteiro com cenas ou outline de talking head contra o brief, sem criar outro recorte.
Leia `ESCRITA.md`, `CONTEXTO.md`, `ESTRUTURAS-PERSUASIVAS.md` e
`docs/method/07-validacao-e-testes.md`.
O veredito `reprovado` mantém a peça em `revisao`. A aprovação exige
zero achado aberto, auditorias concluídas, ID, caminho e SHA-256 atual.
Não aprove arte ou vídeo renderizado apenas pelo roteiro.
