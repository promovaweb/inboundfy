---
name: inboundfy-estrategia
description: Define a estratégia de uma campanha ou período: kickoff com objetivo e KPI, pesquisa de mercado, pilares e mapa de temas por etapa de compra, fases, mix de canais e calendário com reaproveitamento do acervo. Use quando a pessoa falar em campanha nova, plano de marketing, estratégia de conteúdo, pilares, mix de canais, trimestre ou lançamento.
---

# Estratégia de inbound marketing

Decide por que uma campanha existe, para quem, com quais temas, em quais
canais e com qual ritmo. Trabalha antes de existir material bruto ou pacote de
conteúdo. Entrega brief de campanha, pesquisa, plano e calendário. Não
escreve copy final e não abre pacote de pipeline sozinha: cada pacote listado
no plano segue para `inboundfy-planejamento` ou para a especialista do canal.

## Etapas internas

As etapas ficam em `references/etapas/`. A numeração registra a ordem de
abertura de uma campanha. Pesquisa, plano e calendário podem ser reabertos
depois sem repetir etapas que continuam válidas.

| Etapa | Arquivo | Pergunta que responde | Saída |
| --- | --- | --- | --- |
| 00 | [00-briefing-cliente](references/etapas/00-briefing-cliente.md) | Por que a campanha existe e como medir sucesso? | `<pacote-de-campanha>/00-briefing/brief-cliente.md` |
| 01 | [01-pesquisa-mercado](references/etapas/01-pesquisa-mercado.md) | O que o mercado já publica e onde há espaço? | `<pacote-de-campanha>/00-briefing/pesquisa-mercado.md` |
| 02 | [02-campanha](references/etapas/02-campanha.md) | Quais fases, temas, canais e pacotes a campanha exige? | `<pacote-de-campanha>/01-plano/plano-de-campanha.md` |
| 03 | [03-calendario](references/etapas/03-calendario.md) | Quando cada pacote entra em produção? | `calendario/AAAA-MM.md` |

O chamador informa a etapa quando precisa retomar só uma parte do fluxo.
`<pacote-de-campanha>` é o diretório da campanha dentro do caminho de
trabalho registrado em `context/canais.md`.

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar qualquer artefato.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Quando usar e quando pular etapas

| Situação | Conduta |
| --- | --- |
| Campanha nova, sem objetivo nem KPI registrado | Comece na etapa 00. |
| Brief aprovado e tema pouco conhecido | Siga para a etapa 01. |
| Campanha recorrente madura, pesquisa ainda válida | Reabra na etapa 02 para uma fase nova. |
| Fechamento de semana, mês ou trimestre | Rode só a etapa 03, inclusive sem campanha nova. |
| Peça avulsa fora de campanha | Pule a skill e vá direto para `inboundfy-especialista-<canal>`. |
| Material bruto já existe | Use `inboundfy-planejamento` ou `inboundfy-acervo`. |
| Ideia sem tese | Use `inboundfy-brainstorm`. |

Nunca pule a etapa 00 para uma campanha que ainda não tem brief aprovado
registrado em `context/campanhas.md`.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se
um deles faltar, apresente o alerta canônico e acione `inboundfy-setup`. O
método e os templates ativos ficam em `.inboundfy/framework/`.

- `.inboundfy/context/empresa.md` e, em agência com várias marcas,
  `context/enderecos.md`.
- `.inboundfy/estrategia.md`: canais ativos, objetivo, horizonte, frequência
  e regras de distribuição do projeto.
- `context/publico.md`: personas e etapas de compra.
- `context/ofertas.md`, `produtos.md` e `servicos.md`: oferta que a campanha
  sustenta.
- `context/canais.md`: canais ativos, cadência técnica e diretórios de
  trabalho.
- `context/campanhas.md`: campanhas ativas e encerradas.
- `context/concorrentes.md` e `context/ferramentas.md`: ponto de partida da
  pesquisa.
- `context/proibicoes.md` e `context/aprendizado.md`: limites e escolhas já
  confirmadas.
- `catalogo` do acervo e bases editoriais relacionadas, quando a campanha
  reaproveitar material existente.

Persona ausente para a campanha: pare e acione `inboundfy-contexto-publico`.
Canal sem cadência registrada: pare e acione `inboundfy-contexto-operacao`.

## Entrada esperada

Objetivo de negócio, oferta, personas, canais ativos, recursos da equipe,
cadência possível, período, acervos disponíveis e restrições. Uma conversa de
kickoff ou um brief informal do cliente serve como ponto de partida da etapa
00. Se faltar um dado que muda a direção, registre a pergunta no brief.

## Perguntas de diagnóstico

1. Que resultado de negócio, em número e prazo, a campanha precisa mover?
2. Quem precisa ser convencido e em qual etapa de compra essa pessoa está?
3. Quantas peças por semana a equipe realmente consegue produzir?
4. O conteúdo precisa ser encontrado (busca), compartilhado (redes) ou os
   dois?
5. Que acervo já existe sobre o tema e pode ser reaproveitado?
6. O que o cliente não quer que apareça nesta campanha?

## Fluxo

1. Faça o preflight, leia os contextos e identifique a etapa pedida. Sem
   indicação, comece pela primeira etapa ainda não aprovada da campanha.
2. Leia o arquivo da etapa em `references/etapas/` e o material de apoio
   indicado em [REFERENCIA.md](REFERENCIA.md).
3. Etapa 00: traduza o kickoff em objetivo, KPI com meta e prazo, persona,
   orçamento, período e restrições.
4. Etapa 01: pesquise o que concorrentes e mercado publicam sobre o tema,
   separe fato de interpretação e aponte lacunas acionáveis.
5. Etapa 02: defina pilares e mapa de temas por etapa de compra, divida a
   campanha em fases, distribua canais pela função de cada um e liste os
   pacotes de conteúdo com rota (pipeline ou especialista direto).
6. Etapa 03: distribua pacotes de campanha e cadência orgânica no período,
   respeitando a cadência técnica de cada canal.
7. Em cada etapa com mais de um caminho materialmente diferente (pilares,
   fases, mix de canais), apresente três opções com a recomendada primeiro e
   aguarde a escolha.
8. Salve o artefato no caminho da etapa e apresente para aprovação. Só depois
   da aprovação acione `inboundfy-contexto-operacao` para atualizar
   `context/campanhas.md`.
9. Encaminhe: pacote com material bruto para `inboundfy-planejamento`, peça
   avulsa para `inboundfy-especialista-<canal>`, item de acervo para
   `inboundfy-acervo`.

## Saída

- Etapa 00: `<pacote-de-campanha>/00-briefing/brief-cliente.md`.
- Etapa 01: `<pacote-de-campanha>/00-briefing/pesquisa-mercado.md`.
- Etapa 02: `<pacote-de-campanha>/01-plano/plano-de-campanha.md`.
- Etapa 03: `calendario/AAAA-MM.md`, no formato canônico lido por
  `inboundfy-catalogo` e pelo comando `inboundfy calendar add`.

Todo pacote de conteúdo que nasce da campanha leva no `README.md` o nome da
campanha e o caminho do plano, como pede `METODOLOGIA.md`.

## Validação

- Objetivo é resultado de negócio, com KPI numérico e prazo.
- Toda observação de mercado tem fonte e data de acesso. Fato e
  interpretação ficam separados.
- Toda fase do plano tem tema, canais, volume, lacuna de mercado e indicador.
- Todo canal citado está ativo em `.inboundfy/estrategia.md` e em
  `context/canais.md`.
- Nenhum canal recebe no calendário mais peças do que a cadência técnica
  suporta. Conflito de capacidade foi resolvido com a pessoa.
- Nenhum item entra no calendário sem ID, caminho e estado, ou sem estar na
  seção de reservas com rota definida.
- Brief e plano foram aprovados antes de a campanha mudar de status.

## Idempotência

Rodar de novo uma etapa atualiza o mesmo arquivo. O brief incorpora
correções sem criar segundo brief. A pesquisa acrescenta achados sem apagar
lacunas ainda válidas. O plano preserva pacotes já em produção e a ordem
aprovada. O calendário preserva itens em produção ou publicados. Uma nova
oportunidade recebe novo ID ou referência explícita à peça adaptada.

## Responsabilidade do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue
brief, pesquisa, plano ou calendário. Copy final pertence à produção. O
registro de campanha em `context/campanhas.md` pertence a
`inboundfy-contexto-operacao`.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** estratégia
- **entrada:** kickoff, brief, pesquisa, plano ou período a planejar;
- **transformação:** etapa 00 a 03 aplicada à campanha ou ao período;
- **saída:** brief, pesquisa, plano ou calendário no caminho da etapa;
- **handoff:** `inboundfy-planejamento`, `inboundfy-especialista-<canal>`,
  `inboundfy-acervo` ou `inboundfy-contexto-operacao`, com pendências.
