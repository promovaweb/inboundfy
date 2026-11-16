# Conferência de Infográfico

Aplique `inboundfy-base-validador`. No passo 1, leia a
[referência da produtora](../inboundfy-especialista-infografico/REFERENCIA.md) e seus
[modelos](../inboundfy-especialista-infografico/references/modelos-e-exemplo.md).
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

1. [ ] **Literal | Envelope.** O ID, `titulo`, `fonte-dos-dados`, brief, persona, estado e destino estão preenchidos conforme o contrato compartilhado.
2. [ ] **Literal | Vocabulário.** Metadados, blocos, legenda, fontes e alt text respeitam os vetos canônicos e o dicionário.
3. [ ] **Semântica | Proveniência.** Cada valor tem fonte e natureza identificadas; simulação não aparece como levantamento ou resultado real.
4. [ ] **Semântica | Contas e comparabilidade.** Totais, percentuais, unidades, períodos e bases foram conferidos; o título não amplia a conclusão.
5. [ ] **Estrutural | Ordem dos blocos.** O arranjo escolhido permite comparação, composição ou sequência sem misturar funções.
6. [ ] **Estrutural | Densidade.** Cada bloco tem ID, rótulo e uma ideia; as faixas foram atendidas ou ajustadas no brief.
7. [ ] **Semântica | FAB aplicável.** Bloco de produto liga característica confirmada a vantagem e benefício; registre não aplicável para conteúdo sem produto.
8. [ ] **Semântica | Legenda.** A prosa interpreta o dado, declara seu limite e contém somente a ação aprovada.
9. [ ] **Visual | Hierarquia textual.** Título, destaque, unidade, explicação e fonte estão separados; nenhuma diferença depende somente de cor.
10. [ ] **Visual | Descrição acessível.** Alt text comunica ordem, relações e dados centrais; texto longo acessível existe quando necessário.
11. [ ] **Estrutural | Auditorias.** A legenda passou por `inboundfy-copy-editor`; a auditoria A5 e o retorno da validadora estão vinculados.
12. [ ] **Literal | Encaminhamento.** O pacote preserva fontes e IDs para a especialista de imagem; não declara aprovação da arte sem inspeção.

## Categorias de conferência

| Categoria | Aplicação neste canal |
| --- | --- |
| Literal | Conferir grafias, valores, unidades, IDs, caminhos e vetos em todos os campos. |
| Semântica | Refazer cálculos e testar se título e legenda respeitam amostra, período e natureza do dado. |
| Estrutural | Conferir tipo de organização, ordem, quantidade de blocos e separação entre legenda e copy visual. |
| Visual | Conferir hierarquia prevista, fonte legível como requisito de handoff e equivalência do alt text; arte final exige inspeção própria. |

Paráfrases de vetos continuam sujeitas à fonte canônica. Exceção exige
permissão explícita dessa fonte e comprovação da condição.
Justifique todo item não aplicável pelo formato recebido. Faixa editorial
ajustada pelo brief não substitui proibição ou limite técnico confirmado.

## Template do relatório de correção

Use o relatório completo de `inboundfy-base-validador`. Acrescente a matriz
numerada e a categoria de cada achado, preservando os campos da base.

```markdown
# Validação de asset; infografico/<item>

- **Asset:** <caminho retornado pelo digest>
- **Brief:** <brief aprovado>
- **Produtora:** inboundfy-especialista-infografico
- **Validadora:** inboundfy-validador-infografico
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

Caso didático de reprovação: a candidata alterou o bloco de impressão
do exemplo para “40%”. Os arquivos e a leitura abaixo pertencem ao cenário fictício.

- **Asset:** `canais/infografico/0042-2026-11-15-cadernos/README.md`
- **Brief:** `acervo/0042-2026-11-15-cadernos/04-briefs/infografico-cadernos.md`
- **Produtora:** inboundfy-especialista-infografico
- **Validadora:** inboundfy-validador-infografico
- **Rodada:** 1
- **ID da peça:** 0042
- **Veredito:** reprovado
- **Estado da peça:** revisao
- **SHA-256 da peça:** não calculado, marcador didático de reprovação; nenhum arquivo consumidor está aprovado.

Fontes lidas no cenário: processado.md, seção Simulação (contas);
brief infografico.md (quatro blocos); .inboundfy/context/empresa.md,
publico.md, marca-voz.md, glossario.md, proibicoes.md, estruturas-proibidas.md,
canais.md, links.md, aprendizado.md e integracoes.md (contexto completo do cenário).
CONTEXTO.md, ESCRITA.md e ESTRUTURAS-PERSUASIVAS.md foram lidos.
brand/ não existe no cenário. Não há outros Markdown de contexto nessa simulação.

| Item | Categoria | Resultado | Local e comprovação |
| --- | --- | --- | --- |
| 1 | literal | Conforme | Frontmatter contém título, fonte, brief e persona. |
| 2 | literal | Conforme | Varredura integral sem termos vetados pelo contexto fictício. |
| 3 | semântica | Conforme | Subtítulo, legenda e fontes identificam simulação. |
| 4 | semântica | Falha | Bloco 03 informa 40%; R$ 360 / R$ 1.200 = 30%. |
| 5 | estrutural | Conforme | Total separado das três parcelas. |
| 6 | estrutural | Conforme | Quatro IDs; um assunto por bloco. |
| 7 | semântica | Não aplicável | A peça não apresenta produto ou funcionalidade. |
| 8 | semântica | Conforme | Legenda explica limite e comparação sem CTA comercial. |
| 9 | visual | Conforme | Unidade e fontes constam dos campos de composição. |
| 10 | visual | Falha | Alt text transmite 30%, mas diverge do bloco 03 candidato. |
| 11 | estrutural | Falha | Auditoria A5 precisa ser repetida após ajustar o destaque. |
| 12 | literal | Conforme | Destino de imagem indicado; arte ainda não aprovada. |

| Item e categoria | Local | Trecho | Regra ou fonte | Correção |
| --- | --- | --- | --- | --- |
| 4, semântica | README.md, bloco 03 | R$ 360 (40%) | processado.md, Simulação | Corrigir para 30%; conferir soma e todas as repetições. |
| 10, visual | README.md, Alt text | Impressão: 30% | Item 10 e fonte Simulação | Harmonizar bloco e descrição com a conta correta; conferir ambos novamente. |
| 11, estrutural | Auditorias | Rodada anterior à correção | ESCRITA.md e contrato A5 | Repetir leitura do conjunto e atualizar auditorias. |

Conferência de proibições no cenário: vetos de negócio, aberturas, fechamentos,
vocabulário, parágrafos, headings/listas e pontuação/fluidez passaram nos
passes literal e semântico/estrutural. Autoridade e dados falharam no passe
semântico pelo item 4. Passe visual textual: fonte e unidade presentes;
inspeção da arte não aplicável nesta rodada.

Encaminhamento: inboundfy-especialista-infografico deve corrigir o bloco 03.
Revalidar todos os blocos, legenda, alt text e auditorias. Rodada 1 permanece
no histórico. Não aprovar nem encaminhar a composição antes da nova leitura.

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
| Autoridade e dados | aprovado | reprovado | Bloco 03: percentual incorreto. |

## Erros comuns na auditoria

- Aprovar uma soma correta com denominador errado: refaça a conta a partir da fonte.
- Reprovar bloco telegráfico por não ter parágrafo longo: avalie se a ideia está completa para o canal.
- Conferir a legenda e ignorar o destaque: os valores da arte prevista também pertencem ao asset.
- Usar aprovação de copy como aprovação visual: registre a etapa de imagem ainda necessária.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme sentinelas e origens.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): preserve envelope, ID e brief.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e perguntas.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona, voz e proibições.

Resolva caminhos abreviados `context/` por `.inboundfy/fontes-projeto.md`.
A instalação usa `.inboundfy/context/`. Não mova fontes nem grave dados do consumidor no framework.

## Guia específico do grupo

Valide título, blocos, legenda e alt text de infográfico contra o brief, sem criar outro recorte.
Leia `ESCRITA.md`, `CONTEXTO.md`, `ESTRUTURAS-PERSUASIVAS.md` e
`docs/method/07-validacao-e-testes.md`.
O veredito `reprovado` mantém a peça em `revisao`. A aprovação exige
zero achado aberto, auditorias concluídas, ID, caminho e SHA-256 atual.
Não aprove arte ou vídeo renderizado apenas pelo roteiro.
