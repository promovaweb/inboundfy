---
name: inboundfy-pesquisa-acervo
description: Pesquisa fontes externas para validar e enriquecer um item do acervo, registra links e confronta lacunas sem substituir a origem fornecida pelo usuário.
---

# Pesquisar acervo

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

Leia [REFERENCIA.md](REFERENCIA.md), `bruto.md`, `processado.md`, `faq.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e bases editoriais
relacionadas. A pesquisa web é obrigatória para material novo.

## Entrada esperada

ID do acervo e seu conteúdo já processado. Registre consulta, data, fonte,
trecho resumido, relação com o material e limite da fonte.

## Fluxo

1. Extraia afirmações que precisam de confirmação, contexto ou atualização.
2. Faça pesquisa web com fontes primárias e referências especializadas.
   Compare mais de uma fonte quando o assunto tiver versões conflitantes.
3. Salve em `pesquisa.md` a pergunta, a URL, o título, a data de acesso, o
   resumo e a forma como a fonte afeta o conteúdo.
4. Marque concordâncias, divergências, lacunas e fatos que precisam de resposta
   do usuário. Não altere `bruto.md` nem `processado.md` sem voltar à skill
   correspondente.

## Saída

Uma pesquisa rastreável dentro da pasta do acervo, com links clicáveis e uma
seção de encaminhamentos para a base editorial.

## Validação

Confira URL, data, título, escopo da fonte e relação com cada afirmação. Não
trate resultado de busca como fonte sem abrir a página original.

## Responsabilidade do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** acervo
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o registro da mesma consulta e preserve fontes anteriores. Só remova
uma referência quando ela estiver quebrada ou o usuário pedir.
