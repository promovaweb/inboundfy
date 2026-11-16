---
name: inboundfy-catalogo
description: Reconcilia índices de acervo, peças e calendário com os arquivos do projeto e entrega um relatório de divergências. Use quando faltar um material na busca, houver edição manual, índice inválido ou pedido de consulta por canal, persona ou estado.
---

# Catálogo do projeto

Mantém os três índices JSON de `.inboundfy/indices/` coerentes com os arquivos
reais de `acervo/`, `canais/` e `calendario/`. O catálogo responde perguntas de
localização ("quais peças usam o acervo 0003?", "o que está agendado em
novembro?") e prepara a linkagem interna. Ele não muda o estado de uma peça
(isso pertence a `inboundfy-pipeline`), não redige conteúdo e não recria a
estrutura instalada (isso pertence a `inboundfy-setup`).

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

## Quando usar e quando não usar

| Situação | Ação |
| --- | --- |
| Peça, acervo ou calendário editado à mão, fora do CLI | Use esta skill no modo reconciliação. |
| Índice com JSON inválido, vazio ou apagado por engano | Use o modo reconstrução. |
| `inboundfy-acervo` terminou o passo 10 do ciclo | Use o modo conferência e registre o resultado. |
| Busca de peças por canal, persona, acervo, estado ou mês | Use o modo consulta, sem gravar nada. |
| Mudança de estado, aprovação ou publicação | Não use. Acione `inboundfy-pipeline`. |
| Pasta `.inboundfy/indices/` ausente ou instalação parcial | Não use. Acione `inboundfy-setup`. |
| Peça nova ainda sem pasta | Não use. Acione `inboundfy-producao`. |

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`,
`.inboundfy/estrategia.md` (canais marcados), `.inboundfy/pipeline.md`
(estados válidos), os diretórios de `acervo/`, `canais/` e `calendario/` e os
três índices: `.inboundfy/indices/acervo.json`, `conteudos.json` e
`calendario.json`. A persona citada em uma peça é conferida contra
`.inboundfy/context/publico.md`.

## Entrada esperada

Um destes pedidos:

- **conferência:** comparar índices e arquivos sem gravar;
- **reconciliação:** corrigir registros divergentes depois de edição manual;
- **reconstrução:** recompor um índice inteiro a partir dos arquivos;
- **consulta:** listar peças ou acervos por um filtro (canal, persona, acervo,
  estado, mês, base editorial).

O pedido pode vir do usuário, de `inboundfy-acervo` (passo 10) ou de
`inboundfy-pipeline` depois de uma publicação.

## Perguntas de diagnóstico

Faça antes de gravar. Registre as respostas no relatório:

1. Algum comando `inboundfy` está rodando agora no projeto? Se sim, aguarde.
2. O índice é JSON válido com `schemaVersion: 1` e lista `items`?
3. Toda pasta de `acervo/` e `canais/<canal>/` segue o padrão
   `<id>-<AAAA-MM-DD>-<slug>`?
4. Existe ID repetido em pastas diferentes?
5. O estado no frontmatter da peça é o mesmo do índice e da linha do
   calendário?
6. Alguma peça aponta para acervo, base editorial ou persona inexistente?
7. O usuário quer só o relatório ou autoriza a gravação?

## Fluxo

1. Rode o preflight e confirme que `.inboundfy/indices/` existe. Se faltar,
   pare e acione `inboundfy-setup`.
2. Leia [references/esquema-dos-indices.md](references/esquema-dos-indices.md)
   e carregue os três índices. Se um JSON estiver inválido, guarde uma cópia
   `<nome>.json.bak-AAAAMMDD` antes de qualquer gravação.
3. Varra os diretórios. Para cada pasta válida, leia o frontmatter
   (`README.md` da peça, `README.md` e `processado.md` do acervo) e monte o
   registro derivado, sem copiar texto do corpo.
4. Varra `calendario/AAAA-MM.md` e extraia cada linha com `**<id>**`, a data
   do heading `## AAAA-MM-DD`, o canal e o estado.
5. Compare registros derivados e registros atuais. Classifique cada diferença
   com a tabela de
   [references/reconciliacao.md](references/reconciliacao.md).
6. No modo conferência ou consulta, entregue o relatório e pare.
7. No modo reconciliação ou reconstrução, corrija somente o que a tabela marca
   como correção do catálogo. Divergência de estado ou aprovação vai para
   `inboundfy-pipeline`, com ID, estado desejado e os documentos exigidos para
   aprovação, agendamento ou publicação. Se o estado desejado for ambíguo,
   peça a escolha antes do envio. Persona ausente vai para `inboundfy-contexto-publico`.
8. Ordene `items` por `id` (acervo e conteúdos) ou por `date` e `contentId`
   (calendário). Grave somente se a lista mudou. Use caminhos relativos.
9. Releia os índices gravados, confira o checklist de
   [REFERENCIA.md](REFERENCIA.md) e entregue o relatório com o template.

## Saída

- Índices atualizados em `.inboundfy/indices/` quando houver gravação
  autorizada.
- Relatório do catálogo no formato do `REFERENCIA.md`, com contagens,
  divergências corrigidas, divergências encaminhadas e consultas atendidas.

## Validação

- Cada registro aponta para um arquivo existente.
- Nenhum ID aparece duas vezes no mesmo índice.
- Nenhum índice guarda caminho absoluto, corpo de texto ou dado pessoal de
  leitor (e-mail, telefone, CPF).
- Estado, URL e data de publicação batem entre frontmatter, `conteudos.json`
  e calendário, ou a divergência foi encaminhada a `inboundfy-pipeline`.
- O `schemaVersion` continua `1`, que é o valor aceito pelo CLI.

Se uma validação falhar, corrija e repita a leitura integral. Se a correção
depender de escolha do usuário (dois arquivos com o mesmo ID, por exemplo),
pergunte antes de gravar.

## Idempotência

Reconstruir a partir dos diretórios produz a mesma relação ordenada. Rodar a
skill duas vezes seguidas sem mudança nos arquivos não regrava os índices, por
isso `generatedAt` só muda quando `items` muda. O catálogo nunca renomeia
pastas, nunca apaga arquivo de peça e nunca altera frontmatter.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** modo pedido e diretórios varridos;
- **transformação:** comparação entre arquivos e índices, com correção restrita;
- **saída:** índices ordenados e relatório do catálogo;
- **handoff:** `inboundfy-pipeline` para estado, `inboundfy-setup` para
  estrutura, `inboundfy-contexto-publico` para persona ausente.
