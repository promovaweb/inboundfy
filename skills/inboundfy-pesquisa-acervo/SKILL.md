---
name: inboundfy-pesquisa-acervo
description: "Pesquisa na web as afirmações e lacunas de um item do acervo e grava pesquisa.md com fontes abertas, datas, alcance, resultado e encaminhamento à base editorial, sem alterar a origem. Use quando a pessoa pedir para pesquisar, checar fatos, confirmar dados, buscar fontes ou atualizar a informação de um material do acervo."
---

# Pesquisar acervo

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de criar ou alterar artefatos. Se faltar um deles, informe: "O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio." Encerre sem escrever. Após a confirmação, leia as fontes locais relevantes e `.inboundfy/context/empresa.md`.

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

O ID de um item do acervo com `processado.md` e `faq.md` na mesma pasta,
entregues por `inboundfy-processar-acervo` e `inboundfy-extrair-faq`. A tabela
`Lacunas para a próxima etapa` da FAQ indica as perguntas verificáveis fora do
projeto. Um `pesquisa.md` existente é retomado, sem perder as fontes anteriores.

## Fluxo

Antes da primeira consulta, leia a tabela de fontes prioritárias e o procedimento de [REFERENCIA.md](REFERENCIA.md). Sem acesso web, mantenha a etapa pendente e declare isso em `pesquisa.md`.

1. Numere (A01, A02) as afirmações de `processado.md` e as lacunas de
   `faq.md` que precisam de confirmação, contexto ou atualização.
2. Faça pesquisa web com fontes primárias e referências especializadas.
   Compare mais de uma fonte quando o assunto tiver versões conflitantes.
3. Abra cada página e salve a ficha da fonte no template de
   [REFERENCIA.md](REFERENCIA.md), com resultado `confirmado`, `contrariado`,
   `parcial` ou `não localizado`.
4. Registre divergências com as duas fontes e as perguntas que voltam ao
   usuário. Não altere `bruto.md` nem `processado.md` sem voltar à skill
   correspondente.

Antes da entrega, acione `inboundfy-copy-editor` sobre a prosa produzida, trate os achados e releia o derivado inteiro. O original recebido permanece intacto.

## Saída

`pesquisa.md` na pasta do item, com afirmações numeradas, fichas de fonte
com links clicáveis e a seção `Encaminhamento à base editorial`. O arquivo
segue para `inboundfy-base-editorial` junto com `bruto.md`, `processado.md` e
`faq.md` do mesmo ID.

## Validação

Confira a checklist numerada de [REFERENCIA.md](REFERENCIA.md). Resultado de
busca sem a página original aberta não conta como fonte.

## Responsabilidade do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

## Idempotência

Atualize o registro da mesma consulta e preserve fontes anteriores. Só remova
uma referência quando ela estiver quebrada ou o usuário pedir.
