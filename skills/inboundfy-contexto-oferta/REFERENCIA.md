# REFERENCIA.md; inboundfy-contexto-oferta

## Template

```markdown
---
id: {{id}}
skill: inboundfy-contexto-oferta
dominio: {{produtos|servicos|ofertas}}
estado: rascunho
fonte: {{resposta, arquivo ou URL}}
---

# Atualização de oferta

## Fato registrado

{{Descrição do fato e relação com a empresa.}}

## Limites e perguntas

- {{limite, origem pendente ou "nenhuma"}}

## Próxima ação

{{skill que pode usar o dado}}
```

## Exemplo

O usuário informa que um plano inclui suporte mensal. A skill confirma se isso
é característica do produto ou condição da oferta, grava no arquivo correto e
relaciona o plano ao nome oficial no glossário.

## Checklist

- [ ] Produto, serviço ou oferta foi identificado.
- [ ] O arquivo canônico foi lido antes da alteração.
- [ ] Benefício, condição e limite foram separados.
- [ ] A origem foi registrada.
- [ ] Relações relevantes foram apontadas.
- [ ] Promessa não confirmada virou pergunta aberta.

## Erros comuns

- Transformar recurso em resultado garantido.
- Colocar preço, prazo e descrição do produto na mesma seção sem relação.
- Criar nome comercial novo sem confirmação.
- Apagar condição anterior sem registrar a atualização.

## Arquitetura aplicada

Os detalhes de domínio ficam nas referências internas:

- `references/produtos.md`
- `references/servicos.md`
- `references/ofertas.md`

O arquivo do usuário permanece em `.inboundfy/context/` e é a fonte de trabalho
para as skills de copy e estratégia.

## Mapa dos domínios

| Domínio | Arquivo do usuário | Pergunta principal |
| --- | --- | --- |
| produtos | `.inboundfy/context/produtos.md` | o que existe e como funciona? |
| servicos | `.inboundfy/context/servicos.md` | qual trabalho é prestado? |
| ofertas | `.inboundfy/context/ofertas.md` | qual condição comercial está disponível? |

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

## Especificação operacional

### Quando usar

Use **inboundfy-contexto-oferta** para executar esta função: Mantém produtos, serviços e ofertas comerciais nos arquivos canônicos do projeto. Use para registrar fatos confirmados sobre a solução, seus planos, condições, diferenciais e limites antes da criação de copy.

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
skill: inboundfy-contexto-oferta
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/produtos.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-oferta
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/produtos.md
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
