---
name: inboundfy-pesquisa-acervo
description: Pesquisa fontes externas para validar e enriquecer um item do acervo, registra links e confronta lacunas sem substituir a origem fornecida pelo usuário.
---

# Pesquisar acervo

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `bruto.md`, `processado.md`, `faq.md`,
`.inboundfy/inbound.md`, `.inboundfy/voz.md`, `.inboundfy/personas.md`,
`.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md` e bases editoriais
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

## Idempotência

Atualize o registro da mesma consulta e preserve fontes anteriores. Só remova
uma referência quando ela estiver quebrada ou o usuário pedir.
