---
name: inboundfy-contexto-operacao
description: Registra canais ativos, ferramentas citáveis e campanhas em .inboundfy/context/ (canais.md, ferramentas.md e campanhas.md), com cadência, destino, KPI, período e status. Use quando a pessoa disser que vai começar ou parar de publicar num canal, mudou a cadência, adotou uma ferramenta, abriu ou encerrou uma campanha.
---

# Inboundfy Contexto: Operação

Esta skill guarda como o marketing roda: em quais canais a empresa publica e
com quais limites técnicos, quais ferramentas podem ser citadas em conteúdo
e quais campanhas estão abertas ou encerradas. Ela não decide estratégia,
não cria calendário e não configura integração. Estratégia é
`inboundfy-estrategia`, calendário é `inboundfy-planejamento`, e acesso a
ferramentas com variáveis de ambiente é registrado por `inboundfy-setup` em
`.inboundfy/context/integracoes.md`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Na ausência de qualquer um, informe: "O setup do Inboundfy ainda não
foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup`
para preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos.
Quando um arquivo de `.inboundfy/context/` desta skill estiver ausente,
acione `inboundfy-setup` para restaurar o template; esta skill não cria o
arquivo por conta própria.

## Arquitetura de execução

A skill confirma as sentinelas, seleciona o domínio operacional e carrega a
referência interna correspondente antes de gravar.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): confirme canal, ferramenta ou campanha.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o arquivo e o estado após a alteração.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 2 do fluxo e, depois, a
referência do domínio em `references/`. O grupo desta skill é **contexto**.

## Quando usar e quando não usar

| Entrada | Destino | Observação |
| --- | --- | --- |
| "Vamos começar a publicar no LinkedIn" | `canais.md` e caixa do canal em `estrategia.md` | só com confirmação |
| "O blog passa a ter dois posts por semana" | `canais.md` | cadência |
| "Usamos uma ferramenta de e-mail marketing e podemos citar" | `ferramentas.md` | citação pública |
| "A chave da API de medição é esta" | não | `integracoes.md` via `inboundfy-setup`; o valor vai para `.env` |
| "Abrimos a campanha de Black Friday" | `campanhas.md` | objetivo, KPI, período |
| "A campanha de lançamento acabou" | `campanhas.md` | mudar status, manter bloco |
| "Qual canal devemos priorizar?" | não | `inboundfy-estrategia` |
| "Monte o calendário de dezembro" | não | `inboundfy-planejamento` |

## Contexto exigido

- `.inboundfy/context/empresa.md`, para identificar a operação;
- `.inboundfy/context/canais.md`, `.inboundfy/context/ferramentas.md` e
  `.inboundfy/context/campanhas.md`, conforme o domínio;
- `.inboundfy/estrategia.md`, sempre que o pedido ativar ou desativar canal,
  porque a seleção principal mora ali;
- `.inboundfy/context/publico.md`, para validar a persona de uma campanha;
- `.inboundfy/context/links.md`, para destinos de campanha;
- `.inboundfy/context/integracoes.md`, para saber se uma ferramenta já tem
  acesso configurado, sem alterá-lo;
- `SKILLS.md`, para conferir o nome exato da especialista de cada canal.

## Entrada esperada

Uma escolha de canal, uma mudança de cadência ou formato, uma ferramenta
nova, uma campanha, uma mudança de status ou um resultado de campanha
informado pelo usuário.

## Perguntas de diagnóstico

1. É canal (onde publica), ferramenta (com o que trabalha) ou campanha
   (esforço com objetivo e prazo)?
2. A mudança de canal já foi aprovada pela estratégia do projeto?
3. A ferramenta pode aparecer em conteúdo público? Há relação comercial com
   ela (parceria, afiliado)?
4. A campanha tem objetivo de negócio, KPI com meta e prazo?
5. A persona e os canais citados já existem nos arquivos de contexto?

## Fluxo

1. Classifique a entrada com a tabela de `Quando usar e quando não usar`.
2. Leia o arquivo atual, o [REFERENCIA.md](REFERENCIA.md) e a referência do
   domínio: [canais](references/canais.md),
   [ferramentas](references/ferramentas.md) ou
   [campanhas](references/campanhas.md).
3. Use o roteiro de entrevista da referência para cobrir lacunas.
4. Para canal: confirme a ativação, marque a caixa correspondente em
   `.inboundfy/estrategia.md` (`Canais ativos`) e grave formato, cadência,
   limites, especialista e destino em `canais.md`. Não altere outras seções
   de `estrategia.md`.
5. Para ferramenta: grave uso, permissão de citação, relação e link. Não
   grave chave, token, senha ou variável de ambiente.
6. Para campanha: confira que a persona existe em `publico.md` e os canais em
   `canais.md`. Se não existirem, pare e indique a skill de contexto
   responsável. Campanha nova exige KPI com meta e prazo.
7. Atualize somente o arquivo do domínio, com histórico de status quando
   houver mudança.
8. Relate a alteração e o próximo passo operacional.

## Saída

Um registro atualizado em `.inboundfy/context/` com domínio, status, relações
e origem, mais a caixa de canal em `.inboundfy/estrategia.md` quando houver
ativação ou desativação confirmada. A resposta segue o template de
`REFERENCIA.md`.

## Validação

- Canal ativo tem caixa marcada em `estrategia.md`, especialista com nome real
  de `SKILLS.md`, cadência, limites e destino.
- Ferramenta tem permissão de citação explícita e nenhum segredo gravado.
- Campanha tem objetivo, KPI com meta e prazo, persona e canais existentes,
  período e status.
- Relações apontam para caminhos e IDs existentes.
- Nenhum domínio vizinho foi reescrito.

## Idempotência

O mesmo status não é duplicado. Mudança de status acrescenta uma linha de
histórico com data. Campanha encerrada nunca é apagada. Canal desativado
mantém o bloco com `Ativo? não` e a data.

## Responsabilidade do grupo

Mantenha os dados da operação prontos para setup, estratégia, calendário,
planejamento e produção. Cada domínio recebe somente seu próprio tipo de
dado.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** escolha ou atualização de canal, ferramenta ou campanha;
- **transformação:** atualização do domínio operacional;
- **saída:** arquivo canônico com status e relações;
- **handoff:** `inboundfy-estrategia`, `inboundfy-planejamento`,
  `inboundfy-producao`, `inboundfy-metricas` ou
  `inboundfy-rastreamento-conversao` quando a campanha precisar de UTM e
  eventos de conversão.
