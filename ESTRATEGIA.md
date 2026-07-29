# ESTRATEGIA.md — Planejamento Estratégico de Agência

Este arquivo descreve a camada que existe **antes** de `METODOLOGIA.md`. O
pipeline editorial (`thothfy-planejamento-<NN>-*`) processa um pacote de
conteúdo que já tem material bruto ou um brief mínimo. A camada estratégica
descrita aqui existe para o momento em que nenhum dos dois ainda existe:
uma agência (ou o próprio dono do negócio) precisa decidir **por que** vai
produzir conteúdo, **para quem**, **em que canais** e **quando**, antes de
qualquer transcrição, ideia ou rascunho entrar no pipeline.

## Por que este grupo é separado do pipeline

`thothfy-planejamento-<NN>-*` é sequencial e por peça: cada fase avança um
único pacote, da entrada de material até a auditoria final. As skills de
`thothfy-estrategia-*` operam em outro nível — o de campanha e agenda — e
não seguem uma sequência numerada fixa, porque uma agência real revisita
pesquisa de mercado, ajusta calendário e abre campanha nova em paralelo,
não em fases estanques. Separar os dois grupos evita que decisão de negócio
(objetivo, KPI, orçamento) fique misturada com decisão de execução de peça
(ângulo, brief, produção).

## As quatro skills do grupo

### 1. Kickoff (`thothfy-estrategia-briefing-cliente`)

Traduz uma conversa de kickoff — com cliente externo ou com o dono do
negócio — em objetivo de negócio, KPI com meta e prazo, público prioritário,
orçamento e restrições. Não decide canal nem tema.

### 2. Pesquisa de mercado (`thothfy-estrategia-pesquisa-mercado`)

Investiga o que concorrentes e o mercado estão publicando agora sobre o
tema da campanha, identificando lacunas acionáveis. Diferente de
`thothfy-contexto-concorrentes`, que só guarda cadastro estático, esta skill
produz análise viva para uma campanha específica.

### 3. Plano de campanha (`thothfy-estrategia-campanha`)

Cruza o brief e a pesquisa em fases, temas, mix de canal e volume
aproximado de peças. É o documento que decide o quê a campanha vai
precisar — cada pacote de conteúdo listado aqui alimenta o pipeline
(`thothfy-planejamento-00-triagem`) ou um especialista direto.

### 4. Calendário editorial (`thothfy-estrategia-calendario`)

Distribui no tempo os pacotes de todas as campanhas ativas somados à
cadência orgânica de cada canal (conteúdo recorrente sem campanha
associada). É a única skill contínua do grupo — roda por período (semana,
mês, trimestre), não por campanha.

## Ordem típica de uso

```text
Kickoff → Pesquisa de mercado → Plano de campanha → Calendário editorial
                                                            │
                                                            ▼
                      thothfy-planejamento-00-triagem (pacote com material)
                                        ou
                          thothfy-especialista-<canal> (peça avulsa)
```

Uma campanha nova sempre passa por kickoff antes de pesquisa e plano. O
calendário editorial, depois de existir, é recalculado a cada período —
inclusive quando não há campanha nova, só para acomodar a cadência
orgânica.

## Quando pular etapas

- Peça avulsa fora de qualquer campanha (pedido pontual do usuário): pula
  todo o grupo `thothfy-estrategia-*` e vai direto para
  `thothfy-especialista-<canal>`, como já previsto em `METODOLOGIA.md`.
- Campanha recorrente já madura, sem pesquisa nova necessária: pode reabrir
  direto em `thothfy-estrategia-campanha` para uma fase nova, sem repetir
  `thothfy-estrategia-pesquisa-mercado` — mas nunca pule
  `thothfy-estrategia-briefing-cliente` para campanha que ainda não tem
  brief aprovado registrado em `context/campanhas.md`.

## Contexto envolvido

- `context/campanhas.md`: registro de campanhas (mantido por
  `thothfy-contexto-campanhas`, nunca decidido pelas skills de estratégia
  sozinhas).
- `context/publico.md`, `context/canais.md`, `context/concorrentes.md`,
  `context/ofertas.md`: consultados pelas quatro skills do grupo, conforme
  declarado em cada `SKILL.md`.

## Relação com METODOLOGIA.md

Todo pacote de conteúdo que nasce de uma campanha carrega, no seu
`README.md` (estrutura de pacote de `METODOLOGIA.md`), uma referência ao
plano de campanha e à fase que o originou. `thothfy-planejamento-06-auditoria`
verifica essa origem quando o pacote pertence a uma campanha ativa, além dos
critérios já previstos em `METODOLOGIA.md`.
