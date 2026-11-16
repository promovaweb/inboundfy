---
name: inboundfy-base-formatador
description: Corrige a sintaxe Markdown de um artefato pronto (headings, listas, links, tabelas e frontmatter YAML) sem alterar o conteúdo editorial. Use quando uma skill produtora terminar o texto e precisar da última passada mecânica, ou quando a pessoa pedir lint, formatação Markdown ou correção de frontmatter.
---

# Formatação Markdown

Última passada mecânica antes de a chamadora considerar um artefato Markdown
pronto. Conteúdo, tom e voz pertencem a `inboundfy-copy-editor`.

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

Nenhum arquivo de `.inboundfy/context/` é obrigatório. Consulte
`.inboundfy/context/glossario.md` apenas para confirmar grafia em link e texto
âncora.

## Entrada esperada

Um artefato Markdown com o corpo definido, geralmente já revisado por
`inboundfy-copy-editor`, mais o contrato da chamadora: campos obrigatórios do
frontmatter e limite do corpo copiável. Sem contrato, confira só a sintaxe e
registre os campos que não puderam ser conferidos.

## Fluxo

1. Leia a triagem e o procedimento de [REFERENCIA.md](REFERENCIA.md) antes da
   primeira alteração.
2. Separe corpo copiável, notas de produção e cercas de código. O interior das
   cercas não entra na contagem de headings e não muda.
3. Confira a hierarquia: um único H1 fora das cercas e nenhum nível pulado.
4. Confira listas: linha vazia antes, indentação e itens paralelos. Lista usada
   no lugar de prosa vira nota para a chamadora, sem reescrita.
5. Confira links: âncora descritiva (nunca "clique aqui"), caminho relativo
   resolvido e URL externa não verificada marcada como pendente.
6. Confira tabelas: cabeçalho, número de colunas e célula vazia preenchida com
   "não informado" apenas quando a chamadora autorizar.
7. Analise o frontmatter com parser YAML e confira os campos do contrato
   (título, description, slug, `brief` quando aplicável).
8. Se o contrato exigir texto simples no corpo copiável, remova qualquer
   sintaxe Markdown que tenha vazado para esse trecho.
9. Aplique as correções no próprio arquivo, compare o diff e rode a conferência
   de novo: a segunda execução precisa produzir diff vazio.
10. Preencha o registro de formatação de [REFERENCIA.md](REFERENCIA.md) e
    devolva à chamadora.

## Saída

O mesmo artefato no mesmo caminho, com a estrutura corrigida, e o registro de
formatação com alterações, links não conferidos e destino de retorno.

## Validação

- Um único H1 por documento.
- Nenhum link com texto âncora genérico.
- Frontmatter válido e completo para o contrato recebido.
- O diff contém só correções de sintaxe.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

## Idempotência

Rodar de novo sobre um artefato já formatado não introduz mudança.
