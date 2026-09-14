# Sequências e numeração

A numeração representa dependência cronológica obrigatória. Existem
exatamente três sequências.

## Brainstorm

```text
00 triagem → 01 entrevista → 02 pesquisa → 03 síntese → 04 validação
```

Diretórios canônicos:

1. `inboundfy-brainstorm-00-triagem`
2. `inboundfy-brainstorm-01-entrevista`
3. `inboundfy-brainstorm-02-pesquisa`
4. `inboundfy-brainstorm-03-sintese`
5. `inboundfy-brainstorm-04-validacao`

## Estratégia

```text
00 briefing → 01 pesquisa de mercado → 02 campanha → 03 calendário
```

Diretórios canônicos:

1. `inboundfy-estrategia-00-briefing-cliente`
2. `inboundfy-estrategia-01-pesquisa-mercado`
3. `inboundfy-estrategia-02-campanha`
4. `inboundfy-estrategia-03-calendario`

## Planejamento

```text
00 triagem → 01 saneamento → 02 pesquisa → 03 oportunidades
→ 04 briefing → 05 produção ⇄ validação → 06 auditoria
```

Diretórios canônicos:

1. `inboundfy-planejamento-00-triagem`
2. `inboundfy-planejamento-01-saneamento`
3. `inboundfy-planejamento-02-pesquisa`
4. `inboundfy-planejamento-03-oportunidades`
5. `inboundfy-planejamento-04-briefing`
6. `inboundfy-planejamento-05-producao`
7. `inboundfy-planejamento-06-auditoria`

## Invariantes

- O número tem dois dígitos e faz parte do nome da skill e do diretório.
- Não pode haver lacuna, duplicidade, nome legado ativo ou quarta sequência.
- Wrappers citam e acionam os nomes canônicos.
- Base, contexto, especialistas e validadoras não recebem números:
  dependem da necessidade ou do tipo de asset, não de uma ordem global.
- Especialista e validadora são organizadas pelo mesmo sufixo; o ciclo entre
  elas ocorre dentro da fase `05`.

O validador estrutural confere os 16 nomes exatos, e não apenas a presença dos
números.
