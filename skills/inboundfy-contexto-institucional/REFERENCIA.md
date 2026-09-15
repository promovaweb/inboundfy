# REFERENCIA.md; inboundfy-contexto-institucional

## Template

```markdown
---
id: {{id}}
skill: inboundfy-contexto-institucional
dominio: {{empresa|pessoas|enderecos|links|glossario}}
estado: rascunho
fonte: {{resposta, arquivo ou URL}}
---

# Atualização institucional

## Alteração

{{Dado confirmado e campo atualizado.}}

## Perguntas abertas

- {{pergunta ou "nenhuma"}}

## Próxima ação

{{skill ou pessoa que consumirá o contexto}}
```

## Exemplo

Uma pessoa informa o novo perfil oficial da empresa. A skill seleciona o
domínio `links`, lê `.inboundfy/context/links.md`, confirma a URL, preserva os
demais perfis e registra a origem da alteração.

## Checklist

- [ ] O domínio escolhido corresponde à entrada.
- [ ] O arquivo canônico atual foi lido.
- [ ] A origem foi registrada.
- [ ] A alteração não duplicou dado existente.
- [ ] Grafias novas foram encaminhadas ao glossário.
- [ ] O próximo uso do contexto foi indicado.

## Erros comuns

- Misturar endereço físico com perfil de rede social.
- Gravar uma URL apenas porque ela aparece em uma página não confirmada.
- Atualizar empresa, pessoas e oferta na mesma execução sem pedido para isso.
- Apagar histórico ao substituir um contato.

## Arquitetura aplicada

Esta referência segue o contrato comum das skills e usa os cinco domínios
internos deste grupo. Leia os arquivos compartilhados na ordem necessária e
carregue somente a referência do domínio selecionado.

- `references/empresa.md`
- `references/pessoas.md`
- `references/enderecos.md`
- `references/links.md`
- `references/glossario.md`

## Mapa dos domínios

| Domínio | Arquivo do usuário | Uso |
| --- | --- | --- |
| empresa | `.inboundfy/context/empresa.md` | identidade, missão e modelo |
| pessoas | `.inboundfy/context/pessoas.md` | fundadores, porta-vozes e contatos |
| enderecos | `.inboundfy/context/enderecos.md` | endereços físicos, legais e atendimento |
| links | `.inboundfy/context/links.md` | site, redes sociais e destinos oficiais |
| glossario | `.inboundfy/context/glossario.md` | grafia e vocabulário aprovado |

## Regras de handoff

O resultado sempre informa o domínio alterado, a origem, o caminho do arquivo e
o próximo uso. Se a origem não confirmar o dado, deixe a pergunta aberta e
encaminhe para o usuário antes de gravar.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

## Especificação operacional

### Quando usar

Use **inboundfy-contexto-institucional** para executar esta função: Mantém os dados institucionais, as pessoas, os endereços, os links oficiais e o glossário do projeto em arquivos canônicos separados. Use para registrar ou corrigir fatos da empresa antes de qualquer produção de conteúdo.

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
skill: inboundfy-contexto-institucional
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/empresa.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-institucional
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/empresa.md
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
