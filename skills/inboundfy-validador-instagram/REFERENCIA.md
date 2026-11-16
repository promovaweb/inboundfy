# Conferência de Instagram

Aplique `inboundfy-base-validador`. No passo 1, leia a
[referência da produtora](../inboundfy-especialista-instagram/REFERENCIA.md) e seus
[modelos](../inboundfy-especialista-instagram/references/modelos-e-exemplo.md).
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

1. [ ] **Literal | Envelope.** Formato, ID, brief, persona, fontes, estado e destino correspondem à peça solicitada.
2. [ ] **Literal | Corpo copiável.** Legenda, hashtags, texto de slide e fala respeitam grafias e vetos; notas internas ficam fora do texto de publicação.
3. [ ] **Semântica | Promessa da abertura.** O corpo entrega o que a primeira linha ou a capa promete, com informações sustentadas pelo projeto.
4. [ ] **Estrutural | Unidade por formato.** Post mantém prosa; carrossel tem arquivo por slide e índice; vídeo apresenta intervalos e campos distintos.
5. [ ] **Estrutural | Progressão.** Cada slide ou trecho acrescenta uma informação e a sequência permite executar ou compreender a tarefa.
6. [ ] **Semântica | Ação final.** Existe uma única ação, apenas no fechamento; destino, envio ou resposta prometida estão confirmados.
7. [ ] **Literal | Hashtags e contagem.** Hashtags pertencem ao assunto; o bloco copiável foi contado com espaços e a conta comporta o texto.
8. [ ] **Semântica | Fala e duração.** No vídeo, leitura cronometrada cabe na duração com pausas; nos demais formatos, registre não aplicável.
9. [ ] **Visual | Texto para composição.** Cada slide tem rótulo e densidade compatível; capa e tela não dependem de microtexto para transmitir a ideia.
10. [ ] **Visual | Acesso ao conteúdo.** Alt text descreve cada imagem prevista; vídeo tem texto compreensível sem som e indicação de legendagem.
11. [ ] **Estrutural | Auditorias.** A copy passou por `inboundfy-copy-editor`, auditoria A5 e validação do conjunto, incluindo slides.
12. [ ] **Literal | Handoff.** Índice, fontes, arquivos de slide e pendências acompanham a próxima skill; a copy não aprova a arte final.

## Categorias de conferência

| Categoria | Aplicação neste canal |
| --- | --- |
| Literal | Conferir formato, arquivos, texto copiável, contagem, hashtags e proibições em legenda, fala e slides. |
| Semântica | Comparar promessa e entrega; confirmar instruções, segurança de uso do produto e operação do CTA. |
| Estrutural | Ler a sequência completa, procurar repetição entre slides e somar os intervalos do vídeo. |
| Visual | Avaliar densidade do texto previsto e alt text; pedir inspeção da arte à validadora de imagem, sem supor que ela já ocorreu. |

Paráfrases de vetos continuam sujeitas à fonte canônica. Exceção exige
permissão explícita dessa fonte e comprovação da condição.
Justifique todo item não aplicável pelo formato recebido. Faixa editorial
ajustada pelo brief não substitui proibição ou limite técnico confirmado.

## Template do relatório de correção

Use o relatório completo de `inboundfy-base-validador`. Acrescente a matriz
numerada e a categoria de cada achado, preservando os campos da base.

```markdown
# Validação de asset; instagram/<item>

- **Asset:** <caminho retornado pelo digest>
- **Brief:** <brief aprovado>
- **Produtora:** inboundfy-especialista-instagram
- **Validadora:** inboundfy-validador-instagram
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

A candidata fictícia da Pote de Casa repetiu no slide 03 a instrução de
limpar a borda do slide 02. Este relatório devolve a sequência antes da arte.

- **Asset:** canais/instagram/0043-2026-11-15-tampa/README.md e slide-01.md a slide-05.md.
- **Brief:** acervo/0043-2026-11-15-tampa/04-briefs/instagram-tampa.md.
- **Produtora:** inboundfy-especialista-instagram.
- **Validadora:** inboundfy-validador-instagram.
- **Rodada:** 1.
- **ID da peça:** 0043.
- **Veredito:** reprovado.
- **Estado da peça:** revisao.
- **SHA-256 da peça:** não calculado, marcador didático de reprovação; nenhum arquivo consumidor está aprovado.

Manifesto do cenário: brief e processado.md lidos; produtos.md lido, seção
Fechamento; empresa.md, publico.md, marca-voz.md, glossario.md, proibicoes.md,
estruturas-proibidas.md, canais.md, links.md, aprendizado.md e integracoes.md
lidos sob .inboundfy/context/. Esses são todos os Markdown de contexto
presentes na simulação. CONTEXTO.md, ESCRITA.md e ESTRUTURAS-PERSUASIVAS.md
lidos. brand/ ausente.

| Item | Categoria | Resultado | Local e comprovação |
| --- | --- | --- | --- |
| 1 | literal | Conforme | Formato carrossel, cinco slides e persona-01. |
| 2 | literal | Conforme | Corpo público separado das notas. |
| 3 | semântica | Falha | A capa pede conferência da tampa; falta explicar o contorno no miolo candidato. |
| 4 | estrutural | Conforme | Índice e cinco arquivos presentes. |
| 5 | estrutural | Falha | Slides 02 e 03 trazem a mesma ação. |
| 6 | semântica | Conforme | Salvar é a única ação, no fechamento. |
| 7 | literal | Falha | Hashtags pertinentes, mas a contagem com espaços não foi registrada na candidata. |
| 8 | semântica | Não aplicável | A peça recebida é carrossel. |
| 9 | visual | Conforme | Texto curto por slide e capa legível como requisito da composição. |
| 10 | visual | Falha | Alt text do slide 03 descreve contorno ausente da copy candidata. |
| 11 | estrutural | Falha | Registros de copy e A5 pendentes; repetir as auditorias após corrigir a sequência. |
| 12 | literal | Conforme | IDs e destino de imagem registrados. |

| Item e categoria | Local | Trecho observado | Regra ou fonte | Correção |
| --- | --- | --- | --- | --- |
| 3 e 5, semântica/estrutural | slide-03.md, Texto | Limpe a borda | produtos.md, Fechamento; item 5 | Substituir repetição pela conferência do contorno autorizada no manual. |
| 10, visual | slide-03.md, Alt text | Tampa nivelada | Item 10 | Harmonizar copy, descrição e indicação à especialista de imagem. |
| 7, literal | README.md, notas de contagem | Contagem não registrada | Item 7 | Contar o bloco copiável com espaços e conferir o campo de destino antes da nova rodada. |
| 11, estrutural | Auditorias | Registros pendentes | Item 11 | Executar copy-editor e A5 no conjunto corrigido, com seus caminhos no retorno. |

Passe literal: sem ocorrência nos vetos de negócio, vocabulário e pontuação.
Passe semântico/estrutural: aberturas, fechamentos, parágrafos, headings/listas
e autoridade/dados conformes às proibições do cenário. A sequência falhou na
regra do canal, itens 3 e 5. Passe visual textual falhou no item 10.
Arte final não recebida, sem aprovação visual.

Destino: inboundfy-especialista-instagram. Corrigir o slide 03, reler a
sequência, legenda, descrições e auditorias. Histórico: rodada 1 reprovada;
retorno exige todos os arquivos, não apenas o slide editado.

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
| Autoridade e dados | aprovado | aprovado | Nenhuma. |

## Erros comuns na auditoria

- Aprovar capa e fechamento sem abrir todos os slides.
- Marcar vídeo como compatível pela quantidade de palavras sem leitura cronometrada.
- Aprovar resposta automática porque o CTA soa natural, sem consultar o contexto de integrações.
- Reprovar hashtag pelo símbolo # como se fosse heading Markdown; confira sua função real.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme sentinelas e origens.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): preserve envelope, ID e brief.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e perguntas.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona, voz e proibições.

Resolva caminhos abreviados `context/` por `.inboundfy/fontes-projeto.md`.
A instalação usa `.inboundfy/context/`. Não mova fontes nem grave dados do consumidor no framework.

## Guia específico do grupo

Valide legenda, carrossel textual ou roteiro curto de Instagram contra o brief, sem criar outro recorte.
Leia `ESCRITA.md`, `CONTEXTO.md`, `ESTRUTURAS-PERSUASIVAS.md` e
`docs/method/07-validacao-e-testes.md`.
O veredito `reprovado` mantém a peça em `revisao`. A aprovação exige
zero achado aberto, auditorias concluídas, ID, caminho e SHA-256 atual.
Não aprove arte ou vídeo renderizado apenas pelo roteiro.
