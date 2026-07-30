---
name: thothfy-base-validador
description: >
  Aplica o contrato transversal de validação a qualquer asset produzido pelo
  Thothfy. Use como base obrigatória das skills thothfy-validador-* para
  confrontar brief, metodologia, todos os contextos, fontes locais, regras e
  contrato da skill produtora. Proibições e estruturas proibidas são hard
  gates com reprovação automática, sem compensação por nota.
---

# Thothfy Base Validador

Base de julgamento compartilhada pelas validadoras de asset. Não substitui a
validação específica do canal e não corrige o artefato diretamente.

## Verificação do setup

Confirme `.thothfy/VERSAO.md` e `.thothfy/FONTES-PROJETO.md` no início. Na
ausência de qualquer um, informe: "O setup do Thothfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `thothfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o inventário e os Markdown relevantes para a tarefa.

## Contexto exigido

- Todos os arquivos Markdown de `.thothfy/context/`, sem limitar a leitura
  aos declarados pela produtora.
- `.thothfy/FONTES-PROJETO.md` e cada fonte local marcada como relevante.
- `brand/`, quando existir: todos os Markdown e os ativos de marca
  relevantes, como logos, tokens, cores, tipografia e aplicações.
- `CONTEXTO.md`, `METODOLOGIA.md`, `ESCRITA.md`,
  `ESTRUTURAS-PERSUASIVAS.md` e demais regras aplicáveis ao asset.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`, sempre.

Não atribua autoridade automática a uma fonte descoberta. Aplique a
precedência de `CONTEXTO.md` e registre conflitos sem inventar uma síntese.

## Entrada esperada

Asset candidato, brief de origem, materiais-fonte, nome da skill produtora e
nome da validadora específica que solicitou a auditoria.

## Fluxo

1. Leia `REFERENCIA.md` e monte o manifesto de fontes da auditoria.
2. Leia o asset inteiro, o brief, a `SKILL.md` e a `REFERENCIA.md` da
   produtora, além da referência da validadora específica.
3. Carregue todos os arquivos de `.thothfy/context/`, o inventário e as
   fontes locais relevantes. Registre arquivo ausente, template vazio e
   conflito factual como bloqueio; não peça à validadora para reparar apoio.
   Se `brand/` existir, leia seus Markdown e inspecione os ativos aplicáveis.
4. Verifique rastreabilidade factual, aderência ao brief, voz, escrita,
   estrutura persuasiva, formato, acessibilidade, metadata, dimensões,
   licenças e demais regras aplicáveis.
5. Execute o hard gate de proibições antes de qualquer pontuação:
   - execute um passe literal e compare cada termo, expressão e veto de
     `context/proibicoes.md` com o asset inteiro, incluindo frontmatter,
     headings, listas, CTA, alt text e texto incorporado em imagem;
   - faça uma segunda leitura semântica, procurando paráfrase, variação
     morfológica, tradução, eufemismo e tentativa de contornar o veto;
   - confronte a arquitetura completa com cada categoria de
     `context/estruturas-proibidas.md`: abertura, fechamento, vocabulário,
     parágrafo, headings, listas, pontuação, fluidez e autoridade;
   - marque qualquer ocorrência como reprovação automática. Outros critérios
     nunca compensam uma proibição: nota alta, média do asset, SEO, estética
     ou aprovação parcial não alteram o hard gate.
6. Aplique exceção somente quando o próprio arquivo canônico declarar de
   forma explícita a condição permitida e o asset provar que a satisfaz.
   Registre regra, condição e evidência; não crie exceção por interpretação.
7. Para texto público, acione `thothfy-base-editor`, leia parágrafo por
   parágrafo e reprove qualquer trecho abaixo de 90%.
8. Produza um relatório com evidência localizada, regra ou fonte violada,
   correção verificável e destino de retorno.
9. Depois da correção, descarte o resultado anterior como prova de
   aprovação, releia o asset inteiro e repita os dois passes do hard gate.
10. Aprove somente quando o hard gate estiver zerado e não houver violação
   nem pendência obrigatória.
   Reprovação volta à skill produtora; divergência estratégica volta ao
   briefing; falta factual irrecuperável é apresentada ao usuário.

## Saída

Relatório conforme `REFERENCIA.md`, salvo em
`06-auditoria/assets/<canal>-<item>.md` no pacote ou junto ao asset avulso
como `<nome-do-asset>.auditoria.md`.

## Validação

- O manifesto prova que todas as classes de fonte aplicáveis foram lidas.
- O relatório contém uma matriz completa de proibições e estruturas
  proibidas, com resultado por categoria.
- Zero ocorrência literal, semântica ou estrutural permanece no asset.
- O asset respeita `brand/` quando a pasta existe; divergência de voz, logo,
  cor, tipografia ou aplicação reprova a peça.
- Cada reprovação cita localização, evidência, regra e correção.
- Nenhum asset recebe aprovação condicional.
- Nenhuma nota ou aprovação em outro critério compensa hard gate reprovado.
- A skill de destino está registrada de forma inequívoca.

## Idempotência

Reauditar atualiza o mesmo relatório e acrescenta uma rodada ao histórico.
Não cria relatórios paralelos nem altera o asset candidato.
