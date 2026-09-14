---
name: inboundfy-copy-editing
description: Revisa copy existente preservando a mensagem, corrigindo clareza, força, ritmo, voz, factualidade e conformidade com o projeto.
---

# Edição de copy

Use quando já existe texto e o pedido é revisar, encurtar, atualizar, dar
clareza ou ajustar a conversão. Para criar uma peça do zero, use
`inboundfy-copywriting`.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` e os arquivos canônicos de
`.inboundfy/`. Leia também o frontmatter, as fontes vinculadas e o validador
do canal antes de editar.

## Entrada esperada

Receba caminho do arquivo, objetivo da revisão, canal, persona e alcance da
alteração: peça, canal ou projeto. Se o alcance não vier informado, trate o
ajuste como local à peça.

## Fluxo

1. Preserve uma cópia de trabalho ou use o histórico do Git.
2. Faça uma leitura de intenção, estrutura, clareza, prova, voz e termos.
3. Separe correções obrigatórias de sugestões opcionais.
4. Ajuste primeiro o que impede compreensão; depois trabalhe ritmo,
   especificidade, CTA e acabamento.
5. Passe o texto pelo dicionário, pelas proibições e pelo anti-slop.
6. Registre correções recorrentes no dicionário somente após confirmação do
   alcance pelo usuário.

## Saída

Entregue arquivo revisado e relatório curto com alterações relevantes,
pendências, fontes consultadas e estado do pipeline.

## Validação

O texto revisado deve manter a tese e as informações confirmadas, remover
ruído, preservar a voz e atender ao formato do canal. Não trate uma melhoria
de estilo como aprovação factual.

## Idempotência

Repetir a revisão não deve gerar novas mudanças quando o texto já atende às
regras. Nunca acumule sinônimos ou alterações decorativas sem finalidade.
