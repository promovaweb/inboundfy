# Conferência de Webinar

Aplique `inboundfy-base-validador`. No passo 1, leia a
[referência da produtora](../inboundfy-especialista-webinar/REFERENCIA.md) e seus
[modelos](../inboundfy-especialista-webinar/references/modelos-e-exemplo.md).
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

1. [ ] **Literal | Envelope e formato.** ID, brief, persona, data, apresentador, formato, estrutura, estado e destino estão registrados.
2. [ ] **Literal | Dados do evento.** Data, horário, fuso, duração e formato são consistentes no corpo, metadados, convite e apoio visual previsto.
3. [ ] **Semântica | Promessa e agenda.** Cada entrega anunciada encontra tópico específico e duração plausível; não há resultado garantido além da sessão.
4. [ ] **Semântica | Apresentador.** Nome e competência no assunto conferem com o registro de pessoas.
5. [ ] **Estrutural | Estrutura.** PASTOR segue a ordem aprovada, com testemunho omitido se faltar fonte; convite AIDA permanece compacto.
6. [ ] **Semântica | Testemunho e urgência.** Depoimentos, inscritos, edições anteriores e escassez têm comprovação; ausência não é preenchida por invenção.
7. [ ] **Literal | Oferta.** Preço ou gratuidade, materiais, gravação, prazo de acesso e demais condições conferem com a fonte da oferta.
8. [ ] **Semântica | Inscrição.** CTA descreve a ação real, usa destino confirmado e explica como chega o acesso; repetições mantêm a mesma ação.
9. [ ] **Estrutural | Informações práticas.** Pré-requisitos, funcionamento, campos de inscrição e condições de uso dos dados aplicáveis foram confirmados ou encaminhados como pendência.
10. [ ] **Visual | Handoff de imagem.** Textos literais, data, fuso e hierarquia para a thumbnail estão separados e coerentes com a página.
11. [ ] **Literal | Prosa e vetos.** Título, corpo, CTA, metadados e notas respeitam dicionário e proibições sem paráfrase de veto.
12. [ ] **Estrutural | Revisão do conjunto.** Auditorias de copy e A5 estão vinculadas; página, convite e derivados foram relidos antes da aprovação.

## Categorias de conferência

| Categoria | Aplicação neste canal |
| --- | --- |
| Literal | Comparar data, fuso, duração, preço, prazo de gravação, nome, destino e todos os textos logísticos. |
| Semântica | Confrontar promessa com agenda, competência, prova social e condição real da inscrição. |
| Estrutural | Conferir ordem de PASTOR ou AIDA, ausência justificada de testemunho e informação prática junto da ação. |
| Visual | Conferir o pacote textual da thumbnail e sua equivalência com a página; aprovação da arte continua separada. |

Paráfrases de vetos continuam sujeitas à fonte canônica. Exceção exige
permissão explícita dessa fonte e comprovação da condição.
Justifique todo item não aplicável pelo formato recebido. Faixa editorial
ajustada pelo brief não substitui proibição ou limite técnico confirmado.

## Template do relatório de correção

Use o relatório completo de `inboundfy-base-validador`. Acrescente a matriz
numerada e a categoria de cada achado, preservando os campos da base.

```markdown
# Validação de asset; webinar/<item>

- **Asset:** <caminho retornado pelo digest>
- **Brief:** <brief aprovado>
- **Produtora:** inboundfy-especialista-webinar
- **Validadora:** inboundfy-validador-webinar
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

Candidata fictícia da Linha de Forno alterou o convite para “gravação por
30 dias”, enquanto a página mantém sete dias.

- **Asset:** canais/webinar/0046-2026-11-15-encomendas/README.md e convite.md.
- **Brief:** acervo/0046-2026-11-15-encomendas/04-briefs/webinar-encomendas.md.
- **Produtora:** inboundfy-especialista-webinar.
- **Validadora:** inboundfy-validador-webinar.
- **ID da peça:** 0046.
- **Rodada:** 1.
- **Veredito:** reprovado.
- **Estado da peça:** revisao.
- **SHA-256 da peça:** não calculado, marcador didático de reprovação; nenhum arquivo consumidor está aprovado.

Manifesto do cenário: brief, base-editorial.md e processado.md lidos.
Todos os Markdown do contexto fictício lidos: empresa.md, pessoas.md,
publico.md, ofertas.md, marca-voz.md, glossario.md, proibicoes.md,
estruturas-proibidas.md, links.md, canais.md, aprendizado.md e integracoes.md,
sob .inboundfy/context/. CONTEXTO.md, ESCRITA.md e
ESTRUTURAS-PERSUASIVAS.md lidos. brand/ não existe no cenário.

| Item | Categoria | Resultado | Local e comprovação |
| --- | --- | --- | --- |
| 1 | literal | Conforme | ID, brief, estrutura, persona e destino presentes. |
| 2 | literal | Conforme | Data, horário, fuso, 45 minutos e ao vivo conferem entre página, convite, frontmatter e notas da thumbnail. |
| 3 | semântica | Conforme | Tabela de encomendas corresponde à agenda de 45 minutos. |
| 4 | semântica | Conforme | Joana Leme autorizada para o assunto em pessoas.md. |
| 5 | estrutural | Conforme | PASTOR sem testemunho, ausência justificada nas notas; convite compacto. |
| 6 | semântica | Conforme | Nenhum depoimento, escassez ou edição anterior afirmados. |
| 7 | literal | Falha | Convite promete 30 dias; ofertas.md confirma sete. |
| 8 | semântica | Conforme | Inscrição gratuita, mesmo destino didático e acesso por e-mail descritos. |
| 9 | estrutural | Conforme | Pré-requisitos e dados do formulário conferem com a oferta do cenário. |
| 10 | visual | Conforme | Pacote textual da thumbnail mantém título, data, fuso e apresentadora. |
| 11 | literal | Conforme | Sem ocorrência literal ou paráfrase de veto no cenário. |
| 12 | estrutural | Falha | Derivados divergem; registros de copy e A5 pendentes, a repetir sobre a versão coerente. |

| Item e categoria | Local | Trecho | Regra ou fonte | Correção |
| --- | --- | --- | --- | --- |
| 7, literal | convite.md, condições | gravação por 30 dias | ofertas.md, encontro de encomendas | Usar sete dias e conferir todas as repetições. |
| 12, estrutural | Conjunto | Página e convite diferentes | Item 12 | Reenviar os dois arquivos, notas de imagem e auditorias atualizadas. |

Proibições no cenário: passes literal e semântico/estrutural sem ocorrência
em vetos de negócio, aberturas, fechamentos, vocabulário, parágrafos,
headings/listas, pontuação/fluidez e autoridade/dados. A oferta falhou na
comparação literal da condição, independentemente dos vetos.
Passe visual textual conforme; arte não recebida.

Destino: inboundfy-especialista-webinar. Corrigir o prazo e reler página,
convite, CTA, notas de imagem e auditorias. Histórico: rodada 1 reprovada;
a próxima rodada exige digest atual e comprovação de todas as condições.

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

- Aprovar horário no frontmatter e ignorar convite divergente: examine o conjunto recebido.
- Cobrar testemunho inexistente: a regra permite omitir, sem inventar prova social.
- Validar apenas a promessa: confira acesso, oferta, dados e agenda.
- Corrigir o preço dentro da validadora: registre a falha e devolva à produtora.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme sentinelas e origens.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): preserve envelope, ID e brief.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e perguntas.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona, voz e proibições.

Resolva caminhos abreviados `context/` por `.inboundfy/fontes-projeto.md`.
A instalação usa `.inboundfy/context/`. Não mova fontes nem grave dados do consumidor no framework.

## Guia específico do grupo

Valide copy de página ou convite de webinar contra o brief, sem criar outro recorte.
Leia `ESCRITA.md`, `CONTEXTO.md`, `ESTRUTURAS-PERSUASIVAS.md` e
`docs/method/07-validacao-e-testes.md`.
O veredito `reprovado` mantém a peça em `revisao`. A aprovação exige
zero achado aberto, auditorias concluídas, ID, caminho e SHA-256 atual.
Não aprove arte ou vídeo renderizado apenas pelo roteiro.
