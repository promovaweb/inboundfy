---
name: inboundfy-especialista-blog
description: >
  Escreve ou edita artigos de blog a partir de um brief aprovado (fase 5 do
  pipeline). Aplica ESCRITA.md, a voz de context/marca-voz.md e a intenção de
  busca validada por inboundfy-base-seo. Não decide estratégia nem pauta; recebe o
  brief pronto.
---

# Inboundfy Blog Redator

Skill de canal para artigos de blog. Recebe um brief já aprovado (de
`inboundfy-planejamento` ou fornecido diretamente pelo usuário em peça avulsa) e
produz o artigo final. Não escolhe tema, não define estratégia de SEO
sozinha e não publica em CMS; isso é integração do projeto que adota o
Inboundfy.

## Escopo

Cobre o texto do artigo. Para a imagem de capa, use `inboundfy-especialista-blog-imagem`. Para
página institucional ou landing page, esta skill não se aplica; o Inboundfy
trata isso como um canal próprio a ser definido em `context/canais.md` do
projeto, não como blog.

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

- `context/marca-voz.md`: tom, pessoa gramatical, vocabulário, exemplos de
  bom e mau texto.
- `context/publico.md`: persona a que o artigo se dirige, para calibrar nível
  técnico e jargão.
- `context/proibicoes.md`: vetos que reprovam o parágrafo automaticamente.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, aplicado junto com `context/proibicoes.md`.
- `context/produtos.md` e/ou `context/servicos.md`: quando o artigo mencionar
  algo que a empresa oferece.
- `context/ferramentas.md`: quando o artigo citar ferramenta de terceiro, para
  saber se pode linkar e para onde.

Se qualquer um desses arquivos estiver no estado de template vazio para o
dado que o artigo precisa, pare e acione a skill de manutenção correspondente
(`CONTEXTO.md`) antes de escrever.

## Estrutura persuasiva

Artigo de blog é informativo por padrão e segue `ESCRITA.md` diretamente; não force AIDA, PAS ou PASTOR num texto que existe para responder uma
intenção de busca, não para vender. A única técnica de
`ESTRUTURAS-PERSUASIVAS.md` que se aplica aqui é **FAB**: sempre que o
artigo mencionar um produto ou serviço da empresa, traduza a característica
citada (`context/produtos.md` / `context/servicos.md`) em vantagem prática e
benefício real para o leitor antes de fechar o parágrafo, em vez de deixar a
menção solta como propaganda.

## Entrada esperada

Um brief com: canal (blog), ângulo, objetivo, público-alvo, ativos de apoio
(dados, exemplos, citações vindos de `inboundfy-planejamento` quando existir
pacote), palavra-chave ou intenção de busca já validada, e restrições
específicas da peça.

## Fluxo

1. Leia o brief por completo antes de qualquer redação.
2. Leia `ESCRITA.md` e os arquivos de contexto exigidos acima.
3. Se o brief não trouxer intenção de busca validada, acione `inboundfy-base-seo`
   antes de escrever título, description, slug ou outline; não escreva a
   partir de tema solto sem pergunta real de busca por trás.
4. Escreva o outline: um H1, hierarquia de H2/H3 cobrindo a dúvida real do
   público, sem heading em pergunta seguido de resposta genérica. Use as
   fórmulas de abertura por intenção de `REFERENCIA.md`.
5. Escreva o corpo em prosa contínua, seguindo `ESCRITA.md`: mostre o objeto,
   explique a função, dê exemplo real (de `context/` ou do material de
   pesquisa do pacote), interprete o exemplo, aponte limite ou falha
   provável.
6. Insira menção a produto, serviço ou ferramenta apenas quando o brief
   pedir e sempre com base no `context/` correspondente; nunca invente
   funcionalidade ou preço.
7. Feche com uma ação real, não uma frase decorativa. Use CTA definido em
   `context/marca-voz.md` quando existir um padrão.
8. Rode `inboundfy-copy-editor` no rascunho, trate os achados verificáveis e repita a leitura integral.
9. Rode `inboundfy-base-seo` no perfil de metadata para confirmar title, description
   e slug finais.
10. Salve o artigo com frontmatter incluindo, no mínimo: `title`,
    `description`, `slug`, e; se fizer parte de um pacote; `brief` apontando
    para o arquivo em `04-briefs/`, seguindo o template de `REFERENCIA.md`.
11. Encaminhe para `inboundfy-especialista-blog-imagem` quando o canal exigir imagem, e depois
    para `inboundfy-planejamento`.

## Encaminhamento obrigatório

Antes de considerar o artigo pronto, acione `inboundfy-validador-blog`. Em
caso de reprovação, aplique as correções do relatório e reenvie o artigo
inteiro à mesma validadora até a aprovação. Só então avance para imagem e
auditoria do pacote.

## Saída

Artigo em Markdown com frontmatter, salvo no caminho definido em
`context/canais.md` para o canal blog; em pacote, dentro de
`97-ativos-finais/blog/<slug>/README.md`.

## Validação

- Os achados de `inboundfy-copy-editor` foram tratados e a leitura integral foi repetida.
- Título, description e slug validados por `inboundfy-base-seo`.
- Toda afirmação sobre produto, serviço, preço ou ferramenta confere com
  `context/`.
- Frontmatter completo, incluindo `brief` quando aplicável.
- Aprovação registrada por `inboundfy-validador-blog`.

## Responsabilidade do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** especialista
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Ao editar um artigo já existente, altere apenas o que o brief ou o pedido do
usuário indicar. Não reescreva seções que não foram objeto do pedido.
