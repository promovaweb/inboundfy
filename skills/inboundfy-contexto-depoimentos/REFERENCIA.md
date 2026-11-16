# REFERENCIA.md; inboundfy-contexto-depoimentos

Material de apoio para manter `context/depoimentos.json`. Consentimento,
coleta e uso em peças estão detalhados em `references/`. Este arquivo traz o
formato do registro, os estados de consentimento, o modelo de relato, um
exemplo completo e as armadilhas.

## Arquitetura aplicada

Leia os contratos compartilhados conforme a etapa:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md), antes do passo 1;
- [artefato e relações](../_shared/02-contrato-de-artefato.md), ao gravar o
  registro;
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md), ao pedir
  consentimento e no relato;
- [validação e retomada](../_shared/04-validacao-e-retomada.md), no passo 9;
- [contexto editorial](../_shared/05-contexto-editorial.md), para conferir
  afirmações sensíveis da fala.

Referências internas, lidas no passo 2 do fluxo:

| Arquivo | Leia quando |
| --- | --- |
| [references/consentimento-e-lgpd.md](references/consentimento-e-lgpd.md) | registrar, ampliar ou revogar consentimento; foto; dado de terceiro na fala |
| [references/coleta-e-uso.md](references/coleta-e-uso.md) | transcrição de áudio ou vídeo, avaliação pública, orientação de coleta, regras para a peça que cita |

## Template

O arquivo é um objeto com a lista `depoimentos`. Cada item tem estes campos,
nesta ordem. Campos sem valor recebem `""`. Nenhum campo é removido.

```json
{
  "depoimentos": [
    {
      "id": "depo-0001",
      "nome": "{{nome completo}}",
      "cargo": "{{cargo ou \"\"}}",
      "empresa": "{{empresa}}",
      "depoimento": "{{citação literal}}",
      "foto": "{{caminho ou URL ou \"\"}}",
      "fonte": "{{entrevista, avaliação pública, e-mail, WhatsApp, formulário, com detalhe}}",
      "data": "{{AAAA-MM-DD}}",
      "consentimento": "{{autorizado|pendente|revogado}}",
      "canaisAutorizados": ["{{website|linkedin|email|instagram|youtube|anuncios|vendas|...}}"],
      "produtoMencionado": "{{nome oficial do produto, serviço ou plano, ou \"\"}}",
      "resultadoMencionado": "{{número ou resultado citado, ou \"\"}}"
    }
  ]
}
```

| Campo | Regra |
| --- | --- |
| `id` | `depo-` mais quatro dígitos; maior existente mais um; nunca reaproveitado |
| `nome` | como a pessoa autorizou aparecer; iniciais só se ela pediu |
| `depoimento` | literal; trecho omitido marcado com `[...]` |
| `fonte` | canal e referência que permite achar o original |
| `data` | data da fala, não da gravação no arquivo |
| `consentimento` | só três valores |
| `canaisAutorizados` | vazio quando pendente ou revogado |
| `resultadoMencionado` | número como a pessoa disse, sem arredondar |

## Estados de consentimento

| Estado | Pode aparecer em peça pública? | `canaisAutorizados` |
| --- | --- | --- |
| `autorizado` | sim, só nos canais listados | lista com pelo menos um canal |
| `pendente` | não | `[]` |
| `revogado` | não; peças existentes precisam retirar | `[]` |

## Template de relato da alteração

```markdown
---
skill: inboundfy-contexto-depoimentos
arquivo: .inboundfy/context/depoimentos.json
registro: {depo-NNNN}
acao: {criado | atualizado | consentimento ampliado | consentimento revogado}
---

# Atualização de depoimentos

## Registro

- Pessoa e empresa: {nome, empresa}
- Consentimento: {estado} para {canais}
- Fonte: {fonte e data}

## Checagens pendentes

- {resultado numérico a confirmar, foto sem autorização, ou "nenhuma"}

## Peças afetadas

- {peças que usam o depoimento, na revogação; ou "não se aplica"}

## Próxima ação

{skill seguinte}
```

## Exemplo

Empresa ilustrativa: Estoquely, aplicativo de estoque para lojas pequenas.
Pessoas e empresas fictícias.

**Entrada.** O suporte encaminha um áudio de WhatsApp de Joana Prado, dona da
loja Ateliê Joana, transcrito pelo próprio WhatsApp:

> "oi gente, só passando pra agradecer, desde que comecei a usar o alerta eu
> não perdi mais venda por falta de peça, antes era umas três por semana,
> vocês salvaram meu dia das mães"

**Passo 1.** Não há registro de Joana no arquivo. O maior `id` existente é
`depo-0006`.

**Passo 3, transcrição.** A transcrição automática pode ter erro. A skill
pede ao suporte que confira com o áudio. O suporte confirma o texto. A skill
mantém a fala e só acerta pontuação e maiúsculas, como a referência de coleta
permite.

**Passo 4, consentimento.** O áudio é um agradecimento, não uma autorização.
A skill grava como pendente e sugere a mensagem de pedido de autorização de
`references/consentimento-e-lgpd.md`. Dois dias depois, Joana responde por
WhatsApp autorizando site e Instagram, com nome, loja e foto do perfil da
loja.

**Passo 6, checagem.** "Umas três por semana" é número aproximado dito pela
cliente. Ele é registrado como ela disse, sem virar "100% menos vendas
perdidas".

**Registro final.**

```json
{
  "id": "depo-0007",
  "nome": "Joana Prado",
  "cargo": "Proprietária",
  "empresa": "Ateliê Joana",
  "depoimento": "Desde que comecei a usar o alerta, eu não perdi mais venda por falta de peça. Antes era umas três por semana. Vocês salvaram meu Dia das Mães.",
  "foto": "assets/depoimentos/atelie-joana.jpg",
  "fonte": "áudio de WhatsApp ao suporte, transcrição conferida pelo suporte; autorização por WhatsApp em 2026-05-14",
  "data": "2026-05-12",
  "consentimento": "autorizado",
  "canaisAutorizados": ["website", "instagram"],
  "produtoMencionado": "Alerta de Reposição",
  "resultadoMencionado": "deixou de perder cerca de três vendas por semana por falta de peça"
}
```

**Relato.** Nenhuma checagem pendente. Próxima ação: o depoimento fica
disponível para a landing do plano Essencial (`inboundfy-growth-cro`) e para
o Instagram (`inboundfy-especialista-instagram`). E-mail e anúncios não estão
autorizados.

## Checklist

- [ ] O arquivo continua com a chave `depoimentos` e JSON válido.
- [ ] Texto literal, com `[...]` em trecho omitido.
- [ ] Transcrição de áudio ou vídeo conferida com o original.
- [ ] Consentimento com um dos três estados.
- [ ] Canais autorizados coerentes com o estado.
- [ ] Nome, empresa, fonte e data presentes.
- [ ] Autorização de foto confirmada quando há foto.
- [ ] `id` novo e sequencial.
- [ ] Nenhum registro removido ou reescrito sem pedido.
- [ ] Na revogação, peças afetadas listadas.

## Erros comuns

- Reescrever a fala para ficar "mais redonda". A prova vale pela voz real.
- Tratar agradecimento como autorização de uso público.
- Usar avaliação pública do Google em anúncio sem pedir autorização. Estar
  público não autoriza qualquer uso.
- Arredondar ou inflar o número dito pelo cliente.
- Apagar o registro na revogação. O histórico mostra quando a autorização
  deixou de valer.
- Criar novo `id` para o mesmo depoimento com foto nova.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve registros e pergunte antes de ampliar canais. A escolha
de qual trecho usar numa peça é da skill do canal, dentro do texto literal
registrado aqui.

Leituras de apoio do framework: `CONTEXTO.md` (exceção de formato JSON) e
`docs/method/02-contexto-fontes-e-precedencia.md`.
