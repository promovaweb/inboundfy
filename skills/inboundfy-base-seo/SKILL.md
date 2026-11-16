---
name: inboundfy-base-seo
description: Classifica a intenção de busca e devolve title, description, slug, outline de headings e links internos de uma peça indexável, antes da escrita ou na conferência do texto pronto. Use quando uma especialista de texto precisar de metadata, ou quando a pessoa pedir title, meta description, slug, intenção de busca ou otimização de um texto existente.
---

# Metadata e intenção de busca

Base acionada por `inboundfy-especialista-blog` e pelas demais skills de texto
indexável. Ela define metadata e estrutura de SEO. O corpo do texto fica com a
skill chamadora.

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
artefato. O grupo desta skill é **base**.

## Contexto exigido

- `.inboundfy/context/publico.md`: jargão e nível técnico da persona, para
  alinhar a palavra-chave à forma real de busca.
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ferramentas.md`: destinos de linkagem interna na
  primeira menção de cada entidade.

## Entrada esperada

Uma destas três entradas, sempre com a peça e a chamadora identificadas:

- **Preparação:** tema ou brief de peça indexável (artigo de blog, artigo
  longo, página de conteúdo), ou o plano de palavra-chave e cluster entregue
  por `inboundfy-seo`.
- **Conferência de metadata:** rascunho ou artigo pronto da especialista, para
  confirmar title, description e slug finais.
- **Otimização:** texto já publicado que precisa de title, description,
  headings e links ajustados, como `inboundfy-area-seo` encaminha.

## Fluxo

1. Leia o diagnóstico, o procedimento e o template de
   [REFERENCIA.md](REFERENCIA.md). Identifique o modo pela entrada.
2. Nomeie a pergunta principal numa frase e classifique a intenção
   (informativa, comparativa, transacional ou investigativa) pela tabela de
   [REFERENCIA.md](REFERENCIA.md). Registre se a intenção foi observada numa
   consulta ou se continua hipótese.
3. Sem pergunta real do público que justifique o tema, devolva à chamadora a
   recomendação de não escrever a partir de tema solto.
4. Registre variações da busca com o jargão de `.inboundfy/context/publico.md`.
5. Defina title de 50 a 60 caracteres, sem o nome da marca como sufixo
   genérico, e description de 145 a 155 caracteres com intenção clara e CTA.
   As faixas são convenção editorial, sem garantia de exibição.
6. Defina slug curto, legível e estável, sem retirar palavra necessária ao
   assunto.
7. Defina um H1 e H2/H3 que cubram a dúvida real, sem heading em pergunta
   seguido de resposta genérica.
8. Marque a primeira menção de cada produto, serviço ou ferramenta com link
   para a página registrada no contexto.
9. Compare páginas existentes. Se outra já responde à mesma pergunta,
   recomende atualizá-la.
10. No modo de conferência, compare o texto com o pacote e aponte só o que
    diverge. No modo de otimização, preserve o que já funciona.
11. Devolva o pacote à chamadora.

## Saída

Pacote do template de [REFERENCIA.md](REFERENCIA.md) (intenção, title,
description, slug, outline, links internos, relação com páginas existentes e
pendências) devolvido à skill chamadora. A base não salva arquivo final.

## Validação

- A intenção está justificada por pergunta real, não por tema solto.
- `title` e `description` respeitam as faixas de caracteres, com contagem
  registrada.
- Todo link interno aponta para entidade confirmada em `.inboundfy/context/`.
- O checklist de [REFERENCIA.md](REFERENCIA.md) foi cumprido item a item.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

## Idempotência

Reclassificar a mesma peça não altera metadata já aprovada pelo usuário sem
pedido explícito de revisão.
