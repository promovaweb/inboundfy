---
name: inboundfy-especialista-ebook
description: >
  Escreve arquitetura e capítulos de ebook a partir de um brief aprovado
  (fase 5 do pipeline). Aplica ESCRITA.md e a voz de context/marca-voz.md em
  formato de livro curto.
---

# Inboundfy Ebook Redator

Skill de canal para ebook; cobre tanto a arquitetura editorial (promessa,
público, capítulos) quanto a escrita do corpo dos capítulos.

## Escopo

Cobre texto de ebook. Capa e imagem OpenGraph são `inboundfy-especialista-ebook-imagem`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/marca-voz.md`: tom e voz de formato longo.
- `context/publico.md`: persona a que o ebook se dirige.
- `context/produtos.md` e/ou `context/servicos.md`: quando o ebook mencionar
  oferta da empresa.
- `context/proibicoes.md`: vetos que reprovam parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): para o
  capítulo de abertura de ebook com função comercial e para trechos que
  apresentam produto.

## Estrutura persuasiva

O corpo do ebook é majoritariamente informativo e segue `ESCRITA.md`
diretamente; capítulo de desenvolvimento não precisa forçar AIDA, PAS ou
PASTOR. Duas exceções valem a pena:

- **Capítulo ou introdução de abertura**, quando o ebook funciona como isca
  de geração de demanda: use **PAS** para nomear o problema que trouxe o
  leitor até o material, agitar a consequência real de não resolvê-lo, e
  situar o ebook como o caminho de solução que o restante do livro
  desenvolve.
- **Capítulo final ou seção de oferta**, quando o brief indicar que o ebook
  fecha com uma chamada comercial: use **AIDA** compacto; retomar a
  Atenção do tema, reforçar o Interesse com o que o leitor já aprendeu,
  conectar ao Desejo por resolver de vez, e fechar com uma Ação única
  (`context/ofertas.md`).
- Qualquer trecho que descreva uma funcionalidade de produto ou serviço
  aplica **FAB**: característica, vantagem, benefício, sempre com base em
  `context/`.

## Entrada esperada

Um brief com: tema, promessa central, público-alvo, ativos de apoio (do
pacote, quando existir) e, se já definida, a estrutura de capítulos.

## Fluxo

1. Leia o brief e `ESCRITA.md`.
2. Se a estrutura de capítulos ainda não existir, defina-a: promessa central,
   progressão lógica entre capítulos, e o que cada capítulo entrega que o
   anterior não entregou. Use o template de arquitetura de `REFERENCIA.md`.
3. Escreva cada capítulo em prosa de livro curto; desenvolvimento contínuo,
   exemplo interpretado, sem fragmentação em blocos de "dica rápida" a menos
   que o brief peça explicitamente um capítulo de checklist.
4. Insira menção a produto ou serviço apenas com base em `context/`, e apenas
   quando o brief indicar que o ebook tem função de geração de demanda.
5. Feche cada capítulo com transição para o próximo, e o ebook inteiro com
   CTA único e claro.
6. Rode `inboundfy-base-editor` por capítulo; ele cruza `context/proibicoes.md` e `context/estruturas-proibidas.md`; e corrija parágrafos abaixo de 90%.
7. Salve com frontmatter incluindo `titulo`, `promessa`, sumário de
   capítulos e `brief` quando fizer parte de um pacote.
8. Encaminhe para `inboundfy-especialista-ebook-imagem` e depois para `inboundfy-planejamento-06-auditoria`.

## Encaminhamento obrigatório

Antes de considerar o ebook pronto, acione `inboundfy-validador-ebook`. Em
caso de reprovação, aplique as correções do relatório e reenvie o ebook
inteiro até a aprovação. Só então avance para imagem e auditoria do pacote.

## Saída

Arquivo Markdown do ebook (um arquivo por capítulo ou um único arquivo com
seções, conforme `context/canais.md` definir), salvo no caminho do canal
ebook.

## Validação

- Progressão de capítulos é lógica, sem repetição de conteúdo entre eles.
- Nenhum parágrafo abaixo de 90% na auditoria de `inboundfy-base-editor`.
- Menção institucional confere com `context/`.
- Aprovação registrada por `inboundfy-validador-ebook`.

## Idempotência

Editar um capítulo já existente altera apenas o capítulo indicado, sem
reescrever os demais.
