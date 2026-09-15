---
name: inboundfy-catalogo
description: Reconstrói e mantém os índices de acervo, bases editoriais, peças por canal e calendário para localizar rapidamente todo material do projeto.
---

# Catálogo do projeto

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

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`, os diretórios de
`acervo/`, `canais/` e `calendario/` e os índices existentes.

## Entrada esperada

Uma alteração de arquivo, uma solicitação de atualização ou um projeto com
índices ausentes ou desatualizados.

## Fluxo

1. Localize diretórios válidos e leia IDs, frontmatter e links.
2. Atualize `.inboundfy/indices/acervo.json`, `conteudos.json` e
   `calendario.json` sem incorporar texto completo nos índices.
3. Aponte caminhos relativos, títulos, estados, canais, personas e acervos.
4. Relate arquivos sem ID, duplicados ou com caminho quebrado.

## Saída

Índices pequenos, estáveis e suficientes para lookup, navegação e linkagem.

## Validação

Cada registro aponta para um arquivo existente e nenhum ID aparece duas vezes
no mesmo índice.

## Responsabilidade do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Reconstruir a partir dos diretórios produz a mesma relação ordenada.
