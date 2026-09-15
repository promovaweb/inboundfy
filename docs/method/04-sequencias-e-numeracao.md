# Sequências e numeração

O Inboundfy mantém três sequências com uma única skill pública por fluxo. A
numeração continua importante para a ordem de execução, mas agora identifica
arquivos de referência internos. Isso mantém o catálogo curto e deixa claro
que o usuário chama a skill agrupadora.

## Brainstorm

Skill pública: `inboundfy-brainstorm`.

```text
00 triagem → 01 entrevista → 02 pesquisa → 03 síntese → 04 validação
```

Referências em `skills/inboundfy-brainstorm/references/etapas/`:

- `00-triagem.md`
- `01-entrevista.md`
- `02-pesquisa.md`
- `03-sintese.md`
- `04-validacao.md`

## Estratégia

Skill pública: `inboundfy-estrategia`.

```text
00 briefing → 01 pesquisa de mercado → 02 campanha → 03 calendário
```

Referências em `skills/inboundfy-estrategia/references/etapas/`:

- `00-briefing-cliente.md`
- `01-pesquisa-mercado.md`
- `02-campanha.md`
- `03-calendario.md`

## Planejamento

Skill pública: `inboundfy-planejamento`.

```text
00 triagem → 01 saneamento → 02 pesquisa → 03 oportunidades
→ 04 briefing → 05 produção ⇄ validação → 06 auditoria
```

Referências em `skills/inboundfy-planejamento/references/etapas/`:

- `00-triagem.md`
- `01-saneamento.md`
- `02-pesquisa.md`
- `03-oportunidades.md`
- `04-briefing.md`
- `05-producao.md`
- `06-auditoria.md`

## Contexto agrupado

Os dados do projeto continuam separados em `.inboundfy/context/`. As skills
agrupadoras apenas organizam a manutenção:

| Skill | Referências internas |
| --- | --- |
| `inboundfy-contexto-institucional` | empresa, pessoas, endereços, links e glossário |
| `inboundfy-contexto-oferta` | produtos, serviços e ofertas |
| `inboundfy-contexto-operacao` | canais, ferramentas e campanhas |
| `inboundfy-contexto-marca` | marca, voz e regras de texto |
| `inboundfy-contexto-publico` | personas e audiência |
| `inboundfy-contexto-concorrentes` | cadastro de concorrentes |
| `inboundfy-aprendizado` | orientações confirmadas do usuário |

## Invariantes

- A chamada pública usa `inboundfy-brainstorm`, `inboundfy-estrategia` ou
  `inboundfy-planejamento`.
- A etapa interna é informada como `etapa` ou pelo caminho da referência.
- Referências internas não aparecem como skills instaláveis.
- Especialistas e validadoras preservam o pareamento pelo mesmo sufixo.
- Os namespaces `inboundfy-copy-*` e `inboundfy-growth-*` identificam as
  capacidades de mensagem e crescimento.
- O catálogo e o validador conferem os diretórios públicos, as referências e
  as interfaces de agente.
