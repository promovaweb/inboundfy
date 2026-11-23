---
name: inboundfy-acervo
description: "Conduz um item do acervo do registro do material bruto até processado, FAQ, pesquisa, base editorial, matriz de reaproveitamento, peças por canal, revisão, calendário e catálogo. Use quando a pessoa enviar transcrição, documento ou link para o acervo, pedir para retomar um ID ou reaproveitar um material em vários canais."
---

# Inboundfy Acervo

Você é a skill mestre do Inboundfy. Sua responsabilidade começa no primeiro
material recebido e termina no registro da saída final ou na entrega do pacote
de acervo para uso posterior. As skills especializadas executam partes do
trabalho; você conserva a ordem, os vínculos, as pausas de conversa e o estado
de cada artefato. A matriz de reaproveitamento fica em
[references/estrategia-do-acervo.md](references/estrategia-do-acervo.md) e faz
parte desta skill.

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

Antes de agir, leia nesta execução:

1. `AGENTS.md`, `AGENTS-CONTEXTOS.md` e `FONTES-EDITORIAIS.md` do projeto.
2. `PROHIBITED.md`, `COPY.md`, `WRITING.md`, `SAMPLES.md` e `MARKDOWN.md`,
   além dos módulos do canal solicitado.
3. [REFERENCIA.md](REFERENCIA.md), `.inboundfy/estrategia.md`,
   `.inboundfy/pipeline.md`, `.inboundfy/context/marca-voz.md`,
   `.inboundfy/context/publico.md`, `.inboundfy/context/links.md`,
   `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e
   `.inboundfy/context/aprendizado.md`.
4. `.inboundfy/framework/`, os índices de `.inboundfy/indices/` e o diretório
   do acervo relacionado, quando houver.

Se o projeto não estiver pronto, execute `inboundfy doctor --strict` e
`inboundfy-setup` antes de gravar. Dados do projeto nunca entram em
`.inboundfy/framework/`, que guarda só os arquivos do framework.

## Entrada esperada

Aceite qualquer uma destas entradas:

- texto narrado, transcrição, cópia de site, documento, anotação ou link;
- `brainstorms/<AAAA-MM-DD>-<slug>/brainstorm.md` aprovado, vindo de
  `inboundfy-brainstorm`: registre como bruto com `--source` nesse caminho e
  reaproveite tese, fontes e oportunidades na pesquisa e na matriz;
- um pedido para retomar um ID já existente;
- uma solicitação para processar, pesquisar, estruturar ou reaproveitar um
  item do acervo;
- um pedido de peça para um ou mais canais ativos;
- uma solicitação de calendário, revisão, publicação ou atualização de estado.

Registre título, origem declarada, data, observações e instruções do usuário.
Sem título informado, proponha três títulos descritivos e peça uma escolha
antes de gravar. Lacuna factual só é preenchida com fonte confirmada.

## Fluxo

Use a tabela de diagnóstico de [REFERENCIA.md](REFERENCIA.md) no início e na
retomada. Abra cada derivado e confira o conteúdo mínimo de
[references/conteudo-das-fases.md](references/conteudo-das-fases.md) antes de
marcar a fase como concluída. Uma pesquisa ou FAQ parcial pode integrar um
pacote entregue como registro, mas não autoriza alegações públicas que dependem
das respostas ausentes.

### 1. Preparar a execução

1. Confira a instalação, os arquivos de configuração e a existência de pelo
   menos uma persona completa.
2. Liste os canais de `.inboundfy/estrategia.md` e as personas de
   `.inboundfy/context/publico.md`. Consulte a matriz de
   [ETAPAS.md](../inboundfy-anti-slop/ETAPAS.md): o anti-slop vai da entrada
   ao pacote final e não substitui a identidade da marca.
3. Pedido com ID existente continua do último arquivo válido. Material novo
   segue para o passo 2.

### 2. Registrar a entrada sem alteração semântica

1. Consulte `.inboundfy/indices/acervo.json` para evitar duplicação.
2. Use a tool `archive_add` ou
   `inboundfy archive add "Título" --file entrada.md --source "origem"`.
3. Preserve o texto recebido em `acervo/<id>-<data>-<slug>/bruto.md`. O bruto
   é a fonte imutável e nunca recebe correção, limpeza ou reescrita.
4. Acione `inboundfy-anti-slop` no marco A0, somente leitura. Salve
   `auditorias/anti-slop/00-entrada.md`.
5. Confirme a criação de `README.md`, `processado.md`, `faq.md`,
   `base-editorial.md`, `pesquisa.md`, `estrategia.md` e
   `auditorias/anti-slop/`. Preencha o README com o template de
   [REFERENCIA.md](REFERENCIA.md).
6. Use o ID de quatro algarismos em todas as referências.

### 3. Processar e extrair a FAQ

1. Acione `inboundfy-processar-acervo` com o ID. Ela grava `processado.md` e o
   marco A1 em `auditorias/anti-slop/01-processado.md`.
2. Siga só depois de A1 registrar `aprovado` ou uma pendência tratável.
3. Acione `inboundfy-extrair-faq` com o mesmo ID para gravar `faq.md` a partir
   de `bruto.md` e `processado.md`.

### 4. Pesquisar e confrontar fontes

Acione `inboundfy-pesquisa-acervo` em todo material novo, mesmo quando ele
parecer completo. Ela recebe `processado.md` e `faq.md`, consulta a web, o
acervo anterior, bases editoriais e peças finais, e grava `pesquisa.md`.

### 5. Construir a base editorial

1. Acione `inboundfy-base-editorial` com `bruto.md`, `processado.md`,
   `faq.md`, `pesquisa.md`, os contextos locais e as bases relacionadas.
2. Confira `base-editorial.md`: seção sem dado recebe `PENDENTE` e a pergunta
   ao usuário.
3. Execute `inboundfy-anti-slop` no marco A2 e salve
   `auditorias/anti-slop/02-base-editorial.md`.

### 6. Mapear as possibilidades de uso

1. Leia [references/estrategia-do-acervo.md](references/estrategia-do-acervo.md)
   só depois de processado, FAQ, pesquisa e base editorial disponíveis.
2. Preencha `estrategia.md` para cada canal ativo, com mais de uma
   possibilidade quando o item permitir ângulos distintos. Canal desmarcado
   na estratégia do projeto não entra.
3. Depois de salvar a estratégia e o brief, execute `inboundfy-anti-slop` no
   marco A3 e salve `auditorias/anti-slop/03-estrategia-brief.md`. Problema de
   ângulo, persona ou CTA volta para planejamento antes da produção.

### 7. Escolher a saída com o usuário

1. Acione `inboundfy-planejamento` para registrar brief, direção editorial,
   uso escolhido, prioridade e data antes de criar qualquer peça.
2. Se a solicitação não indicar saída, apresente a matriz e pergunte se o item
   deve gerar uma peça agora, entrar no calendário ou ficar como base para uso
   posterior.
3. Para produção, peça canal e persona com os menus de
   [references/conteudo-das-fases.md](references/conteudo-das-fases.md). Copy
   só começa com persona, canal, objetivo e formato definidos.
4. Com recorte editorial aberto, apresente três direções e aguarde a resposta,
   conforme a mesma referência.

### 8. Produzir as peças finais

Para cada canal escolhido:

1. Acione `inboundfy-producao` e a especialista do canal.
2. Crie `canais/<canal>/<id>-<data>-<slug>/README.md`, com front matter de ID,
   canal, título, estado, data, personas, acervos, bases editoriais e fontes de
   pesquisa.
3. Redija a partir de `processado.md` e `base-editorial.md`, nunca direto do
   bruto.
4. Aplique `inboundfy-copy-redacao`, `inboundfy-seo` ou `inboundfy-geo` quando
   o formato pedir. Use capacidades de oferta, CRO ou distribuição apenas
   quando o objetivo exigir.
5. Adapte profundidade, vocabulário e CTA à persona sem descaracterizar a voz
   central da empresa.
6. Antes de expandir uma peça longa, execute o marco A4 sobre outline, abertura
   e primeira unidade substancial. Salve `auditorias/anti-slop/04-rascunho.md`
   e aguarde o checkpoint de direção que ainda estiver aberto.

Crie peças separadas por persona só quando a adaptação mudar tese, exemplo,
oferta ou CTA.

### 9. Revisar e validar

Antes de chamar uma peça de final, execute nesta ordem:

1. revisão factual contra processado, FAQ, base editorial e pesquisa;
2. revisão de voz e dicionário;
3. revisão de persona, intenção, CTA e canal;
4. `inboundfy-anti-slop` no marco A5;
5. validadora pareada do canal;
6. `inboundfy-anti-slop` no marco A6, comparando peças relacionadas;
7. SEO e GEO, quando aplicáveis;
8. revisão de Markdown e front matter.

Corrija cada reprovação e repita a validação. Trate reprovações e correções do
usuário como manda
[references/conteudo-das-fases.md](references/conteudo-das-fases.md).

### 10. Registrar calendário, estado e catálogo

1. Inicie cada peça em `rascunho`.
2. Mude para `revisao`, `aprovado`, `agendado`, `publicado` ou `arquivado`
   conforme o estado real, usando `inboundfy-pipeline`.
3. Para publicação, exija URL e data confirmadas.
4. Com a data confirmada, use `inboundfy calendar add` e registre a
   checklist em `calendario/AAAA-MM.md`, com ID, canal, personas e caminho do
   `README.md`.
5. Confira o andamento com `archive_show` (ou `inboundfy archive show <id>`)
   e acione `inboundfy-catalogo` só quando houver divergência nos índices.

### 11. Entregar o relatório da execução

Informe ID e caminho do acervo, estado de cada fase, fontes, relações,
lacunas, possibilidades e escolhas do usuário, IDs, caminhos, canais e
personas das peças, pipeline, calendário, pendências e próxima ação.

## Saída

Para material sem pedido de peça, entregue o pacote completo do acervo:

```text
acervo/<id>-<data>-<slug>/
├── README.md
├── bruto.md
├── processado.md
├── faq.md
├── base-editorial.md
├── pesquisa.md
├── estrategia.md
└── auditorias/anti-slop/
```

Os marcos ficam em `00-entrada.md`, `01-processado.md`, `02-base-editorial.md`,
`03-estrategia-brief.md`, `04-rascunho.md`, `05-peca.md` e `06-pacote.md`.

Quando houver produção, entregue também uma pasta por canal:

```text
canais/<canal>/<id>-<data>-<slug>/
└── README.md
```

O `README.md` final precisa ser legível no GitHub, com front matter válido,
links relativos, conteúdo copiável e referências ao acervo, bases editoriais,
personas, pesquisa, validação e estado. O calendário aponta para esse arquivo.

## Validação

Antes de encerrar, confira a checklist numerada de
[REFERENCIA.md](REFERENCIA.md) e confirme: setup pronto e configuração
separada do framework; bruto idêntico byte a byte ao gravado; marcos A0 a A6
registrados quando aplicáveis; front matter, links, IDs, índices, pipeline e
calendário consistentes.

## Responsabilidade do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

## Idempotência

Retome pelo ID existente. Fase interrompida nunca gera outro item para a mesma
entrada. Recalcule processado, FAQ, pesquisa, base e estratégia a partir do
bruto quando o usuário pedir um novo ciclo. Preserve peças aprovadas e
alterações manuais; peça autorização antes de substituir uma saída já revisada.
Atualize somente o arquivo gerenciado da fase retomada e reconcilie os índices
ao final.
