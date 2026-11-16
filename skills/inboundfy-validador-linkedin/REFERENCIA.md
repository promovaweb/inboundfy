# Conferência de LinkedIn

Aplique `inboundfy-base-validador`. No passo 1, leia a
[referência da produtora](../inboundfy-especialista-linkedin/REFERENCIA.md) e seus
[modelos](../inboundfy-especialista-linkedin/references/modelos-e-exemplo.md).
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

1. [ ] **Literal | Envelope.** Formato, autor quando houver, estrutura, ID, brief, persona e fontes estão vinculados.
2. [ ] **Literal | Post copiável.** Post nativo contém texto puro, sem headings, asteriscos de ênfase ou links Markdown no bloco público.
3. [ ] **Semântica | Autoria.** Pessoa gramatical, competência e experiência correspondem ao registro de pessoas; caso externo não vira vivência própria.
4. [ ] **Semântica | Abertura.** A primeira linha nomeia assunto e recorte; o corpo sustenta os dados e a promessa.
5. [ ] **Estrutural | Argumento.** Post desenvolve uma ideia em parágrafos; artigo responde à dúvida em seções sem repetição ou fragmentação artificial.
6. [ ] **Semântica | Fontes e limites.** Casos, números e funcionalidades possuem origem; exemplo não vira comprovação de resultado geral.
7. [ ] **Estrutural | Formato e contagem.** Bloco copiável ou artigo foi contado; ajustes de faixa estão registrados e o campo de destino comporta a peça.
8. [ ] **Semântica | Persuasão.** AIDA, PAS e FAB aparecem quando pedidos, sem substituir fatos nem forçar venda no texto informativo.
9. [ ] **Semântica | Fechamento.** Há uma ação final ligada ao argumento; a pergunta pede resposta concreta e o destino existe.
10. [ ] **Visual | Apresentação.** Quebras preservam raciocínio; caracteres estilizados não simulam negrito; alt text acompanha imagem prevista.
11. [ ] **Literal | Vetos e dicionário.** Copy, título, metadados e notas respeitam termos e estruturas canônicas.
12. [ ] **Estrutural | Revisão e entrega.** Auditorias de copy e A5 estão vinculadas; a validadora recebe o texto inteiro antes do handoff.

## Categorias de conferência

| Categoria | Aplicação neste canal |
| --- | --- |
| Literal | Conferir sintaxe do corpo copiável, autor, hashtags, links, metadados e vetos. |
| Semântica | Confrontar relatos em primeira pessoa, competência, números e benefícios com pessoas e produto. |
| Estrutural | Ler a ordem do argumento, as seções do artigo, o fechamento e a separação entre notas e corpo. |
| Visual | Conferir quebras, caracteres, apoio textual e alt text; arte final exige inspeção própria. |

Paráfrases de vetos continuam sujeitas à fonte canônica. Exceção exige
permissão explícita dessa fonte e comprovação da condição.
Justifique todo item não aplicável pelo formato recebido. Faixa editorial
ajustada pelo brief não substitui proibição ou limite técnico confirmado.

## Template do relatório de correção

Use o relatório completo de `inboundfy-base-validador`. Acrescente a matriz
numerada e a categoria de cada achado, preservando os campos da base.

```markdown
# Validação de asset; linkedin/<item>

- **Asset:** <caminho retornado pelo digest>
- **Brief:** <brief aprovado>
- **Produtora:** inboundfy-especialista-linkedin
- **Validadora:** inboundfy-validador-linkedin
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

No cenário fictício, a candidata acrescentou “Eu aumentei a receita de
dezenas de oficinas” à abertura.

- **Asset:** canais/linkedin/0044-2026-11-15-ordem/README.md.
- **Brief:** acervo/0044-2026-11-15-ordem/04-briefs/linkedin-ordem.md.
- **Produtora:** inboundfy-especialista-linkedin.
- **Validadora:** inboundfy-validador-linkedin.
- **ID da peça:** 0044.
- **Rodada:** 1.
- **Veredito:** reprovado.
- **Estado da peça:** revisao.
- **SHA-256 da peça:** não calculado, marcador didático de reprovação; nenhum arquivo consumidor está aprovado.

Manifesto do cenário: brief, processado.md e todos os Markdown de contexto
foram lidos: empresa.md, pessoas.md, publico.md, produtos.md, marca-voz.md,
glossario.md, proibicoes.md, estruturas-proibidas.md, links.md, canais.md,
aprendizado.md e integracoes.md, sob .inboundfy/context/.
CONTEXTO.md, ESCRITA.md e ESTRUTURAS-PERSUASIVAS.md lidos. brand/ ausente.
Nenhum arquivo comprova resultado de receita.

| Item | Categoria | Resultado | Local e comprovação |
| --- | --- | --- | --- |
| 1 | literal | Conforme | ID, autor e formato post vinculados. |
| 2 | literal | Conforme | Corpo em texto puro. |
| 3 | semântica | Falha | Abertura atribui resultado não registrado ao autor. |
| 4 | semântica | Falha | Promessa de receita não desenvolvida nem comprovada. |
| 5 | estrutural | Conforme | Explicação da ordem progride em parágrafos. |
| 6 | semântica | Falha | Receita de dezenas de oficinas não tem fonte. |
| 7 | estrutural | Falha | O corpo aparenta caber, mas a candidata não registra contagem nem conferência do campo de destino. |
| 8 | semântica | Não aplicável | Brief educativo sem venda. |
| 9 | semântica | Conforme | Pergunta final pede informação concreta. |
| 10 | visual | Conforme | Quebras preservam raciocínio; imagem não prevista. |
| 11 | literal | Falha | Autoridade sem comprovação viola o contexto fictício. |
| 12 | estrutural | Falha | Auditorias devem ser repetidas após correção. |

| Item e categoria | Local | Trecho | Regra ou fonte | Correção |
| --- | --- | --- | --- | --- |
| 3, 4, 6 e 11, semântica | Texto copiável, abertura | Eu aumentei a receita de dezenas de oficinas | pessoas.md, Elisa Moura | Remover a atribuição e abrir pelo problema da ordem, dentro da competência autorizada. |
| 12, estrutural | Auditorias | Versão anterior | ESCRITA.md e contrato A5 | Repetir leitura e atualizar os registros. |
| 7, literal | README.md, notas de contagem | Contagem não registrada | Item 7 | Contar o bloco copiável com espaços e conferir o campo de destino antes da nova rodada. |

Passe literal: vetos de negócio, vocabulário e pontuação sem ocorrência.
Passe semântico/estrutural: autoridade e dados reprovados pelo item 3;
aberturas, fechamentos, parágrafos e headings/listas sem outra ocorrência.
Passe visual textual conforme; arte não recebida.

Destino: inboundfy-especialista-linkedin. Remover a atribuição sem fonte,
reler todo o post e atualizar auditorias. Histórico: rodada 1 reprovada;
retorno exige arquivo inteiro e digest atual.

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
| Autoridade e dados | aprovado | reprovado | Abertura: resultado atribuído sem fonte. |

## Erros comuns na auditoria

- Tratar primeira pessoa como prova de autenticidade: consulte a fonte do autor.
- Aprovar porque cabe no campo, apesar de promessa sem fonte: aplique os itens semânticos.
- Reprovar hashtag como heading: confira sua função no bloco público.
- Exigir primeira pessoa de marca sem autor: respeite a voz aprovada.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme sentinelas e origens.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): preserve envelope, ID e brief.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e perguntas.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona, voz e proibições.

Resolva caminhos abreviados `context/` por `.inboundfy/fontes-projeto.md`.
A instalação usa `.inboundfy/context/`. Não mova fontes nem grave dados do consumidor no framework.

## Guia específico do grupo

Valide post nativo ou artigo de LinkedIn contra o brief, sem criar outro recorte.
Leia `ESCRITA.md`, `CONTEXTO.md`, `ESTRUTURAS-PERSUASIVAS.md` e
`docs/method/07-validacao-e-testes.md`.
O veredito `reprovado` mantém a peça em `revisao`. A aprovação exige
zero achado aberto, auditorias concluídas, ID, caminho e SHA-256 atual.
Não aprove arte ou vídeo renderizado apenas pelo roteiro.
