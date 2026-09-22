---
name: inboundfy-especialista-linkedin
description: >
  Escreve post nativo ou artigo longo de LinkedIn a partir de um brief
  aprovado (fase 5 do pipeline). Aplica ESCRITA.md e a voz de
  context/marca-voz.md, sempre em primeira pessoa quando o brief indicar
  autor, e sem Markdown no corpo copiável do post.
---

# Inboundfy LinkedIn Redator

Skill de canal para LinkedIn; post nativo curto e artigo longo.

## Escopo

Cobre texto de post e de artigo de LinkedIn. Imagem correspondente é
`inboundfy-especialista-linkedin-imagem`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **especialista**.

## Contexto exigido

- `context/marca-voz.md`: tom e pessoa gramatical.
- `context/pessoas.md`: quando o brief indicar que o post é assinado por uma
  pessoa específica; confirme que o tema está dentro dos temas que essa
  pessoa pode assinar.
- `context/publico.md`: persona a que o post se dirige.
- `context/proibicoes.md`: vetos que reprovam parágrafo.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework): quando o
  brief marcar objetivo comercial.

## Estrutura persuasiva

Post de LinkedIn com objetivo de gerar lead ou clique (não apenas construir
autoridade) normalmente cabe em **AIDA**: a primeira linha antes do "ver
mais" é o bloco de Atenção; precisa parar o scroll com o objeto real, não
com frase de efeito; o corpo desenvolve o Interesse com um fato ou experiência
concreta; o parágrafo seguinte cria o Desejo ligando o fato ao ganho da
persona (`context/publico.md`); o fechamento é a Ação, um único CTA.

Quando o post nomeia uma dor específica do mercado antes de apresentar um
ponto de vista ou solução, **PAS** funciona melhor: abre no problema
reconhecível, agita a consequência real de ignorá-lo, fecha na solução ou no
posicionamento do autor (`context/pessoas.md`).

Artigo longo de LinkedIn segue a mesma lógica de `inboundfy-especialista-blog`; raramente precisa de AIDA/PAS/PASTOR inteiros, mas aplica **FAB** sempre que
descrever uma funcionalidade de produto: característica, vantagem e
benefício antes de fechar o parágrafo.

## Entrada esperada

Um brief com: formato (post nativo ou artigo), ângulo, autor (se houver),
ativos de apoio e CTA.

## Fluxo

1. Leia o brief e confirme se há autor definido; se houver, leia a entrada
   correspondente em `context/pessoas.md` e confirme que o tema está dentro
   da competência declarada dessa pessoa.
2. Leia `ESCRITA.md` e escreva o gancho de abertura; a primeira linha
   decide se o post é expandido, então ela precisa apresentar o objeto real,
   não uma frase de efeito vazia. Use as fórmulas de gancho de
   `REFERENCIA.md`.
3. Para post nativo: escreva em texto puro, sem sintaxe Markdown (sem `#`,
   `**`, links formatados); o corpo precisa ser copiável direto para o
   campo de post do LinkedIn. Ver checklist de canal em `REFERENCIA.md`.
4. Para artigo longo: pode usar estrutura com headings, mais próximo de
   `inboundfy-especialista-blog` em profundidade, mas mantendo a voz em primeira
   pessoa quando houver autor.
5. Feche com CTA claro e, quando aplicável, uma pergunta genuína ao público;    nunca pergunta retórica seguida de resposta óbvia.
6. Rode `inboundfy-copy-editor`, trate os achados verificáveis e repita a leitura integral.
7. Salve com frontmatter incluindo `formato` (post/artigo), `autor` (se
   houver) e `brief` quando fizer parte de um pacote.
8. Encaminhe para `inboundfy-especialista-linkedin-imagem` quando o canal exigir imagem, e
   depois para `inboundfy-planejamento`.

## Encaminhamento obrigatório

Antes de considerar o asset pronto, acione `inboundfy-validador-linkedin`.
Em caso de reprovação, aplique as correções do relatório e reenvie o arquivo
inteiro até a aprovação.

## Saída

Arquivo Markdown (ou texto puro para post nativo) salvo no caminho definido
em `context/canais.md` para LinkedIn.

## Validação

- Post nativo está livre de sintaxe Markdown no corpo copiável.
- Autor, quando definido, está falando dentro da competência registrada em
  `context/pessoas.md`.
- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Aprovação registrada por `inboundfy-validador-linkedin`.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Editar um post já existente altera apenas o que o pedido atual indicar.
