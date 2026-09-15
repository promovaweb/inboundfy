---
name: inboundfy-copy-edicao
description: Revisa copy existente preservando a mensagem, corrigindo clareza, força, ritmo, voz, factualidade e conformidade com o projeto.
---

# Edição de copy

Use quando já existe texto e o pedido é revisar, encurtar, atualizar, dar
clareza ou ajustar a conversão. Para criar uma peça do zero, use
`inboundfy-copy-redacao`.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **copy**.

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` e os arquivos canônicos de
`.inboundfy/`, incluindo `.inboundfy/context/aprendizado.md`. Leia também o frontmatter, as fontes vinculadas e o validador
do canal antes de editar.

## Entrada esperada

Receba caminho do arquivo, objetivo da revisão, canal, persona e alcance da
alteração: peça, canal ou projeto. Se o alcance não vier informado, trate o
ajuste como local à peça.

## Fluxo

1. Preserve uma cópia de trabalho ou use o histórico do Git.
2. Execute `inboundfy-anti-slop` no marco A0 sobre o texto recebido, em modo
   somente leitura, para separar sinais já existentes das mudanças da revisão.
3. Faça uma leitura de intenção, estrutura, clareza, prova, voz e termos.
4. Separe correções obrigatórias de sugestões opcionais.
5. Ajuste primeiro o que impede compreensão; depois trabalhe ritmo,
   especificidade, CTA e acabamento.
6. Passe o texto pelo dicionário, pelas proibições e pelo anti-slop no marco
   A5 depois da revisão completa.
7. Acione `inboundfy-aprendizado` para registrar a orientação recebida. Atualize
   o dicionário, a voz ou as proibições somente após confirmação do alcance pelo
   usuário.

## Saída

Entregue arquivo revisado e relatório curto com alterações relevantes,
pendências, fontes consultadas e estado do pipeline.

## Validação

O texto revisado deve manter a tese e as informações confirmadas, remover
ruído, preservar a voz e atender ao formato do canal. O registro deve apontar
os ciclos A0 e A5. Não trate uma melhoria de estilo como aprovação factual.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Repetir a revisão não deve gerar novas mudanças quando o texto já atende às
regras. Nunca acumule sinônimos ou alterações decorativas sem finalidade.
