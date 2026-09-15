---
name: inboundfy-processar-acervo
description: Processa um material bruto com a configuração do projeto, remove ruído editorial, aplica o dicionário e prepara FAQ sem alterar a fonte original.
---

# Processar acervo

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), [cadência anti-slop](../inboundfy-anti-slop/ETAPAS.md), `bruto.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/proibicoes.md` e as regras em `.inboundfy/framework/ESCRITA.md`.

## Entrada esperada

Um ID do acervo recebido. O texto bruto é a única fonte de transcrição. Use
fontes locais relacionadas apenas para esclarecer grafia e contexto já
registrado.

## Fluxo

1. Preserve a ordem das ideias e os fatos do material.
2. Remova ruído de cópia, caracteres quebrados, repetições acidentais e slop
   estrutural sem inventar afirmações.
3. Aplique formas aprovadas em `dicionario.md` e registre novas correções apenas
   depois da confirmação do usuário.
4. Consulte `proibicoes.md` e remova ou marque trechos incompatíveis.
5. Use `inboundfy-anti-slop` como apoio de limpeza, sem substituir a voz ou a
   persona configuradas.
6. Escreva `processado.md` e execute `inboundfy-anti-slop` no marco A1. Salve o
   relatório em `auditorias/anti-slop/01-processado.md`.
7. Depois do registro A1, encaminhe o item para `inboundfy-extrair-faq`,
   que cria `faq.md` com perguntas sobre cada parágrafo,
   fato, ator, condição, consequência, exemplo e lacuna.

## Saída

`processado.md` contém o texto limpo e `faq.md` contém perguntas, respostas
localizadas no material e perguntas sem resposta. O bruto permanece igual.

## Validação

Compare bruto e processado, revise cada remoção, confirme termos do dicionário,
confirme o registro A1 e liste lacunas em vez de preenchê-las com suposição.

## Responsabilidade do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** acervo
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma nova execução parte do bruto e substitui somente o processado e o FAQ
gerenciados. Não acrescente correções acumuladas sem registrá-las.
