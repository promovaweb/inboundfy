---
name: inboundfy-brainstorm
description: >
  Orquestra uma ideia até brainstorm.md pesquisado e aprovado, executando as
  etapas 00 a 04, consultando context/, ESCRITA.md e os dois arquivos de
  proibições. Use quando o usuário trouxer uma ideia curta e quiser
  desenvolvê-la sem coordenar skills manualmente.
---

# Inboundfy Brainstorm

Wrapper autônoma para transformar uma ideia em base editorial. Ela carrega as
cinco referências internas de `references/etapas/`; não escreve a peça final.

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
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

- `context/empresa.md`, `context/marca-voz.md` e `context/publico.md`.
- `context/canais.md`, para propor formatos que o usuário realmente publica.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`.

Se faltar um item obrigatório para identificar marca, audiência ou canal,
acionar a skill `inboundfy-contexto-*` correspondente. Se a lacuna for
opcional, registrar suposição conservadora e continuar.

## Entrada esperada

Uma frase, pergunta, nota, áudio transcrito ou tema que ainda não constitui
um brief.

## Fluxo

1. Conferir os caminhos canônicos de `INSTALACAO.md`. Se faltar arquivo de
   apoio ou diretório, acionar `inboundfy-setup`; não criar uma estrutura
   alternativa. Depois, ler `BRAINSTORM.md` e a matriz de autonomia em
   `REFERENCIA.md`.
2. Executar a etapa `00-triagem` de `references/etapas/` para preservar a ideia e abrir
   `brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md`.
3. Executar a etapa `01-entrevista` de `references/etapas/`. Fazer no máximo um bloco de
   perguntas, somente quando uma lacuna impedir afirmação factual segura.
4. Executar a etapa `02-pesquisa` de `references/etapas/` com acesso às fontes disponíveis.
5. Executar a etapa `03-sintese` de `references/etapas/` para preencher o modelo completo.
6. Executar a etapa `04-validacao` de `references/etapas/`. Corrigir automaticamente e
   repetir apenas a fase indicada pela reprovação.
7. Se o pedido mencionar uma peça, encaminhar o arquivo aprovado para
   `inboundfy-planejamento`. Se pedir várias peças ou não indicar
   canal, encaminhar para `inboundfy-iniciar`.
8. Informar caminho, suposições relevantes, fontes e próximo fluxo executado.

## Saída

`brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md`, com status `aprovado`.

## Validação

- As fases 00 a 04 foram executadas na ordem.
- Fatos externos têm fonte; suposições aparecem como suposições.
- A validação conferiu `ESCRITA.md` e os dois arquivos de proibições.
- Nenhuma aprovação intermediária foi solicitada fora das exceções de
  `REFERENCIA.md`.

## Responsabilidade do grupo

Transforme a ideia em direção trabalhável. Separe fatos, hipóteses, tese,
recorte, perguntas e oportunidades antes do handoff.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** brainstorm
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma ideia nova cria diretório novo. Um caminho de brainstorm informado pelo
usuário retoma o arquivo existente e preserva o histórico.
