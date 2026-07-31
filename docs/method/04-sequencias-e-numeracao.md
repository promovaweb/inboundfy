# Sequências e numeração

A numeração representa dependência cronológica obrigatória. Existem
exatamente três sequências.

## Brainstorm

```text
00 triagem → 01 entrevista → 02 pesquisa → 03 síntese → 04 validação
```

Diretórios canônicos:

1. `thothfy-brainstorm-00-triagem`
2. `thothfy-brainstorm-01-entrevista`
3. `thothfy-brainstorm-02-pesquisa`
4. `thothfy-brainstorm-03-sintese`
5. `thothfy-brainstorm-04-validacao`

## Estratégia

```text
00 briefing → 01 pesquisa de mercado → 02 campanha → 03 calendário
```

Diretórios canônicos:

1. `thothfy-estrategia-00-briefing-cliente`
2. `thothfy-estrategia-01-pesquisa-mercado`
3. `thothfy-estrategia-02-campanha`
4. `thothfy-estrategia-03-calendario`

## Planejamento

```text
00 triagem → 01 saneamento → 02 pesquisa → 03 oportunidades
→ 04 briefing → 05 produção ⇄ validação → 06 auditoria
```

Diretórios canônicos:

1. `thothfy-planejamento-00-triagem`
2. `thothfy-planejamento-01-saneamento`
3. `thothfy-planejamento-02-pesquisa`
4. `thothfy-planejamento-03-oportunidades`
5. `thothfy-planejamento-04-briefing`
6. `thothfy-planejamento-05-producao`
7. `thothfy-planejamento-06-auditoria`

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
