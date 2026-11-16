---
name: inboundfy-copy-edicao
description: Revisa e atualiza copy existente em passagens de intenção, clareza, voz, prova, especificidade e conformidade, sem mudar a tese nem os fatos confirmados. Use quando a pessoa pedir para revisar, melhorar, encurtar ou atualizar um texto antigo, ou disser que a página não converte.
---

# Edição de copy

Use quando já existe texto e o pedido é revisar, encurtar, atualizar, dar
clareza ou ajustar a conversão. Para criar uma peça do zero, use
`inboundfy-copy-redacao`. Para reduzir só a complexidade da leitura, use
`inboundfy-copy-simplificar`. Para correção ortográfica e gramatical isolada,
use `inboundfy-copy-gramatica`.

## Quando usar e quando não usar

| Pedido | Modo de edição | Skill |
| --- | --- | --- |
| "Dá uma revisada rápida antes de publicar" | Leve | `inboundfy-copy-edicao` |
| "Essa página não converte, melhora o texto" | Completo | `inboundfy-copy-edicao` |
| "Atualiza esse artigo de 2024" | Atualização | `inboundfy-copy-edicao` |
| "Reescreve com outro ângulo" | Reescrita | `inboundfy-copy-redacao` (o ângulo muda) |
| "Só corrige os erros de português" | Gramática | `inboundfy-copy-gramatica` |
| "Audita se tem cara de IA" | Auditoria | `inboundfy-anti-slop` ou `inboundfy-copy-editor` |

A diferença entre edição e reescrita: a edição mantém tese, ângulo e
estrutura principal. Quando o diagnóstico mostrar que a tese ou o ângulo
precisam mudar, pare, explique o motivo e pergunte se o usuário prefere
reescrita.

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar artefatos. Siga o contrato
compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) nos passos 3 e 4 do fluxo e ao montar
o relatório. O grupo desta skill é **copy**.

## Contexto exigido

Sem `.inboundfy/framework/VERSAO.md` ou `.inboundfy/fontes-projeto.md`,
acione `inboundfy-setup` e pare. Depois leia `.inboundfy/context/empresa.md`.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/estruturas-proibidas.md`
e `.inboundfy/context/aprendizado.md`. Quando o texto citar preço, plano,
prazo ou depoimento, leia `.inboundfy/context/ofertas.md` e
`.inboundfy/context/depoimentos.json`. Leia também o frontmatter, as fontes
vinculadas e o validador do canal antes de editar.

## Entrada esperada

Receba caminho do arquivo, objetivo da revisão, canal, persona e alcance da
alteração: peça, canal ou projeto. Se o alcance não vier informado, trate o
ajuste como local à peça. Se o modo de edição não vier informado, pergunte
com três opções (completo recomendado, leve, atualização).

Aceite também o diagnóstico persuasivo de `inboundfy-copy-persuasao` e os
achados de mensagem ou prova devolvidos por `inboundfy-copy-editor`: cada
achado vira item obrigatório da passagem correspondente.

## Perguntas de diagnóstico

1. Qual ação o texto deveria provocar e qual métrica mostra que não provoca?
2. O texto foi escrito para qual persona e ela ainda é a mesma?
3. Quais fatos podem ter mudado desde a publicação (preço, plano, tela,
   legislação, número de clientes)?
4. Existe trecho que o usuário quer preservar (frase da marca, depoimento,
   assinatura)?
5. Até onde a edição pode ir: palavras, parágrafos ou ordem das seções?

## Fluxo

1. Preserve uma cópia de trabalho ou use o histórico do Git.
2. Execute `inboundfy-anti-slop` no marco A0 sobre o texto recebido, em modo
   somente leitura, para separar sinais já existentes das mudanças da revisão.
3. Responda às perguntas de diagnóstico e escolha o modo de edição na tabela
   de [REFERENCIA.md](REFERENCIA.md).
4. Faça as passagens na ordem de [REFERENCIA.md](REFERENCIA.md): intenção,
   clareza, voz, relevância, prova, especificidade, segurança da ação e
   conformidade. Cada passagem olha um problema só. Depois de corrigir numa
   passagem, confira se as anteriores continuam válidas.
5. Para jargão e linguagem corporativa, use
   [references/trocas-de-linguagem.md](references/trocas-de-linguagem.md).
6. No modo atualização, siga
   [references/atualizacao-de-conteudo.md](references/atualizacao-de-conteudo.md)
   antes das passagens: identifique o que ficou desatualizado e o que já
   funciona.
7. Separe correções obrigatórias de sugestões opcionais. Sugestão que muda
   ângulo, posicionamento ou oferta não é aplicada sem confirmação.
8. Passe o texto pelo dicionário, pelas proibições, por `inboundfy-copy-editor`
   e pelo anti-slop no marco A5 depois da revisão completa.
9. Acione `inboundfy-aprendizado` para registrar a orientação recebida.
   Atualize o dicionário, a voz ou as proibições somente após confirmação do
   alcance pelo usuário.

## Saída

Entregue o arquivo revisado no mesmo caminho e um relatório curto, no
formato de [REFERENCIA.md](REFERENCIA.md), com as alterações separadas em
`corrigido`, `mantido`, `sugerido` e `pendente`, fontes consultadas, modo de
edição, ciclos A0 e A5 e estado do pipeline.

## Validação

O texto revisado deve manter a tese e as informações confirmadas, remover
ruído, preservar a voz e atender ao formato do canal. Reprove a própria
edição quando:

- um fato confirmado foi removido ou alterado sem fonte nova;
- o ângulo mudou sem pedido;
- a mesma falha aparece em outro trecho do arquivo e não foi corrigida;
- o registro não aponta os ciclos A0 e A5.

Não trate uma melhoria de estilo como aprovação factual.

## Idempotência

Repetir a revisão não deve gerar novas mudanças quando o texto já atende às
regras. Nunca acumule sinônimos ou alterações decorativas sem finalidade.
Trechos marcados como preservados pelo usuário não são alterados em rodadas
seguintes.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** arquivo existente, objetivo da revisão, persona e alcance;
- **transformação:** passagens de edição no modo escolhido;
- **saída:** arquivo revisado e relatório de alterações;
- **handoff:** validadora do canal, `inboundfy-aprendizado` ou especialista do canal.
