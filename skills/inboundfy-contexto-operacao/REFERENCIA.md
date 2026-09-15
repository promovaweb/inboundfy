# REFERENCIA.md; inboundfy-contexto-operacao

## Template

```markdown
---
id: {{id}}
skill: inboundfy-contexto-operacao
dominio: {{canais|ferramentas|campanhas}}
estado: rascunho
fonte: {{resposta, arquivo ou URL}}
---

# Atualização operacional

## Registro

{{Canal, ferramenta ou campanha e sua situação atual.}}

## Relações

- {{caminho, ID ou "nenhuma"}}

## Próxima ação

{{ação operacional seguinte}}
```

## Exemplo

O usuário ativa LinkedIn e YouTube para a marca. A skill registra os canais em
`canais.md`, preserva os canais existentes e deixa a seleção de formatos para
a estratégia do projeto.

## Checklist

- [ ] O domínio operacional foi selecionado.
- [ ] O arquivo atual foi lido.
- [ ] Status e período foram gravados quando disponíveis.
- [ ] Relações usam caminhos ou IDs reais.
- [ ] A alteração foi limitada ao domínio pedido.
- [ ] O próximo fluxo foi indicado.

## Erros comuns

- Ativar canal por inferência a partir de uma URL.
- Registrar campanha sem status ou período conhecido.
- Confundir ferramenta usada pela empresa com canal de publicação.
- Apagar uma campanha finalizada ao iniciar outra.

## Arquitetura aplicada

Os detalhes de domínio ficam nas referências internas:

- `references/canais.md`
- `references/ferramentas.md`
- `references/campanhas.md`

Os arquivos editáveis continuam em `.inboundfy/context/`. O calendário mensal
fica sob `.inboundfy/calendario/` e não deve ser duplicado aqui.

## Mapa dos domínios

| Domínio | Arquivo do usuário | Uso |
| --- | --- | --- |
| canais | `.inboundfy/context/canais.md` | canais ativos e formatos |
| ferramentas | `.inboundfy/context/ferramentas.md` | recursos e integrações |
| campanhas | `.inboundfy/context/campanhas.md` | campanhas e status |

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

## Especificação operacional

### Quando usar

Use **inboundfy-contexto-operacao** para executar esta função: Mantém canais, ferramentas e campanhas nos arquivos canônicos do Inboundfy. Use para registrar onde a empresa publica, quais recursos utiliza e como cada campanha deve ser acompanhada pelas demais skills do framework.

O grupo **contexto** trabalha com estes campos mínimos:

- **arquivo canônico:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **preferências:** preencher com dado ligado ao pedido.
- **fonte:** preencher com dado ligado ao pedido.
- **alteração:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-contexto-operacao
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/canais.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-operacao
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/canais.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **contexto** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `CONTEXTO.md`
- `docs/method/02-contexto-fontes-e-precedencia.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
