# REFERENCIA.md; inboundfy-contexto-operacao

Material de apoio para manter canais, ferramentas e campanhas. O detalhe de
cada domínio está em `references/`. Este arquivo traz o mapa, as fronteiras
com estratégia e integrações, o modelo de relato, um exemplo completo e as
armadilhas.

## Arquitetura aplicada

Leia os contratos compartilhados conforme a etapa:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md), antes do passo 1;
- [artefato e relações](../_shared/02-contrato-de-artefato.md), ao gravar;
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md), ao confirmar
  ativação de canal e no relato;
- [validação e retomada](../_shared/04-validacao-e-retomada.md), antes de
  declarar a alteração pronta;
- [contexto editorial](../_shared/05-contexto-editorial.md), quando a
  campanha trouxer mensagem ou nome público.

Referências internas, lidas no passo 2 do fluxo:

| Arquivo | Leia quando |
| --- | --- |
| [references/canais.md](references/canais.md) | ativar, desativar ou ajustar canal, cadência, formato e destino |
| [references/ferramentas.md](references/ferramentas.md) | ferramenta citável, parceria, afiliado, tecnologia própria |
| [references/campanhas.md](references/campanhas.md) | campanha nova, status, KPI, período, UTM e resultado |

## Mapa dos domínios e fronteiras

| Arquivo | Guarda | Não guarda | Quem decide o conteúdo |
| --- | --- | --- | --- |
| `.inboundfy/estrategia.md` | quais canais estão ativos e o objetivo de negócio | detalhe técnico do canal | usuário, com `inboundfy-setup` e `inboundfy-estrategia` |
| `context/canais.md` | formato, cadência, limites, especialista e destino por canal | prioridade entre canais | usuário |
| `context/ferramentas.md` | ferramenta, uso, se pode ser citada, link e relação | chave, token, variável de ambiente | usuário |
| `context/integracoes.md` | estado do acesso e nomes de variáveis | valor de segredo | `inboundfy-setup` |
| `context/campanhas.md` | objetivo, KPI, público, canais, período, status, resultado | plano tático da campanha | usuário, com `inboundfy-estrategia` |
| `.inboundfy/calendario/` | datas das peças | registro de campanha | `inboundfy-planejamento` |

O `inboundfy doctor` exige ao menos uma caixa marcada em `Canais ativos` de
`.inboundfy/estrategia.md` e o campo `Objetivo de negócio` preenchido. Esta
skill marca ou desmarca a caixa do canal confirmado e não toca nos objetivos.

## Template de relato da alteração

```markdown
---
skill: inboundfy-contexto-operacao
dominio: {canais | ferramentas | campanhas}
arquivo: .inboundfy/context/{arquivo}.md
estado: {gravado | pendente de confirmação}
fonte: {resposta do usuário em AAAA-MM-DD, documento ou painel}
---

# Atualização operacional

## Registro

| Item | Campo | Antes | Depois |
| --- | --- | --- | --- |
| {canal, ferramenta ou campanha} | {campo} | {valor ou "vazio"} | {valor} |

## Relações conferidas

- {persona, canal, link ou caminho, ou "nenhuma"}

## Perguntas abertas

- {pergunta ou "nenhuma"}

## Próxima ação

{skill seguinte e o que ela faz}
```

## Exemplo completo (fictício)

Empresa ilustrativa: Estoquely, aplicativo de estoque para lojas pequenas.

**Entrada.** A responsável de marketing escreve: "Vamos fazer uma campanha
de Black Friday de 20 a 30 de novembro, com e-mail e Instagram. Meta: 120
assinaturas anuais. Também começamos a usar o Canva e podemos citar."

**Passo 1.** Dois domínios: campanha e ferramenta.

**Passo 6, relações.** A persona prioritária será "Persona 01: Dona de loja
de roupas". Existe em `publico.md`. Instagram está em `canais.md`. E-mail
consta como `Ativo? não`. A skill pergunta:

> O e-mail ainda está inativo em `canais.md` e desmarcado em
> `estrategia.md`. A campanha depende dele. Quer ativar o canal agora, com
> cadência e destino, ou tirar o e-mail da campanha?

A responsável ativa o e-mail: duas mensagens por semana durante a campanha,
envio pelo RD Station, especialista `inboundfy-especialista-email`.

**Passo 7, campanha gravada.**

```markdown
## Black Friday 2026

- **Cliente/marca:** própria
- **Status:** em planejamento
- **Objetivo de negócio:** vender planos anuais para lojas que estão no mensal ou no teste grátis.
- **KPI(s) e meta:** 120 assinaturas anuais pagas até 2026-11-30.
- **Público prioritário:** Persona 01: Dona de loja de roupas (context/publico.md)
- **Canais envolvidos:** e-mail, Instagram (context/canais.md)
- **Período:** 2026-11-20 a 2026-11-30
- **Orçamento de mídia paga, se houver:** sem mídia paga
- **Oferta:** 30% no primeiro ano do anual (context/ofertas.md, Condições temporárias)
- **Destino:** https://exemplo-estoquely.com.br/black-friday (context/links.md)
- **UTM da campanha:** utm_campaign=black-friday-2026
- **Brief de origem:** pendente; criar com inboundfy-estrategia
- **Plano de campanha:** pendente
- **Histórico de status:** 2026-11-15 em planejamento
```

**Ferramenta gravada.**

```markdown
## Canva

- **Para que a empresa usa:** criação de posts e carrosséis do Instagram.
- **Pode ser citada em conteúdo público?** sim, em tutoriais para lojistas.
- **Link oficial da ferramenta:** https://www.canva.com
- **Relação com a empresa:** fornecedor (assinatura paga); sem parceria comercial.
- **Página própria para linkar na primeira menção, se houver:** nenhuma
```

**Passo 8, relato.** A próxima ação aponta para `inboundfy-estrategia`
(brief da campanha) e `inboundfy-rastreamento-conversao` (parâmetros por
peça e evento de compra do plano anual).

## Checklist

- [ ] Domínio classificado.
- [ ] Ativação de canal confirmada e caixa marcada em `estrategia.md`.
- [ ] Especialista com nome real de `SKILLS.md`.
- [ ] Ferramenta com permissão de citação e relação comercial explícitas.
- [ ] Nenhum segredo gravado em `ferramentas.md`.
- [ ] Campanha com KPI numérico, prazo, persona e canais existentes.
- [ ] Status com histórico datado.
- [ ] Campanha encerrada mantida no arquivo.

## Erros comuns

- Ativar canal por inferência porque existe um perfil social em `links.md`.
- Marcar cadência que o time não sustenta. O planejamento vai assumir a
  cadência como verdade.
- Gravar token de API em `ferramentas.md`. Segredo fica em `.env`, e o nome
  da variável em `integracoes.md`, pelo setup.
- Registrar campanha com objetivo "fortalecer a marca" sem KPI.
- Citar ferramenta de parceiro pago sem registrar a relação. A peça precisa
  sinalizar a parceria.
- Apagar campanha encerrada. Ela é a base de comparação da próxima.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve seções e pergunte antes de expandir o alcance.
Pedidos de prioridade, orçamento ou plano tático seguem para
`inboundfy-estrategia`; esta skill registra o que foi combinado.

Leituras de apoio do framework: `CONTEXTO.md`, `METODOLOGIA.md` (fases que
consomem canais e campanhas) e `docs/method/02-contexto-fontes-e-precedencia.md`.
