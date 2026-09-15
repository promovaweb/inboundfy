# Referência de aprendizado

## Template

```md
### AP-0001 | título curto

- **Estado:** proposta
- **Data:** AAAA-MM-DD
- **Tipo:** correção
- **Alcance:** peça
- **Canal:** blog
- **Persona:** persona-01
- **Arquivo relacionado:** canais/blog/0001-peca/README.md
- **Orientação recebida:** texto literal do usuário
- **Interpretação:** regra usada nesta alteração
- **Aplicação:** trecho atualizado e resultado
- **Arquivo canônico atualizado:** não se aplica
- **Fonte:** conversa de AAAA-MM-DD
- **Validação seguinte:** conferir na próxima revisão da peça
```

## Exemplo

O usuário informa: “não use a palavra automação neste post; prefiro falar em
fluxo”. A skill registra a orientação como `correção`, alcance `peça`, preserva
o texto recebido, altera o post atual e deixa o dicionário sem mudança. Se o
usuário confirmar que a preferência vale para todo o projeto, a skill cria um
registro com alcance `projeto` e atualiza o dicionário.

## Checklist

- [ ] O registro recebeu ID sequencial sem reutilizar ID antigo.
- [ ] A mensagem do usuário e a interpretação aparecem separadas.
- [ ] Tipo, alcance, fonte, arquivo e data foram preenchidos.
- [ ] A peça atual recebeu a alteração solicitada.
- [ ] O arquivo normativo só mudou após alcance confirmado.
- [ ] A próxima execução consultará o registro aplicável.
- [ ] Anti-slop e a validadora foram executados depois da alteração.

## Erros comuns

- Transformar uma sugestão pontual em regra do projeto sem perguntar o alcance.
- Apagar a orientação original depois de resumir sua aplicação.
- Atualizar voz, dicionário ou proibições sem apontar o registro de aprendizado.
- Reaplicar uma regra arquivada sem confirmação nova.
- Confundir uma preferência de formato com uma regra de grafia.

## Registro de alcance

| Alcance | Uso futuro |
| --- | --- |
| `peça` | Somente o arquivo relacionado. |
| `canal` | Peças do canal indicado. |
| `persona` | Peças destinadas à persona indicada. |
| `projeto` | Todo novo trabalho do projeto. |

## Handoff

Após registrar uma orientação confirmada, encaminhe:

1. grafia para `inboundfy-voz` ou `dicionario.md`;
2. característica de escrita para `inboundfy-voz`;
3. veto de termo, promessa ou estrutura para `proibicoes.md`;
4. preferência de peça para a produtora e a validadora do canal;
5. mudança ampla para `inboundfy-acervo` e o próximo ciclo anti-slop.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-aprendizado**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de aprendizado dentro do fluxo do Inboundfy.
- **Entrada mínima:** resposta do usuário ou arquivo canônico do domínio.
- **Saída mínima:** arquivo de contexto atualizado e registro da alteração.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Template de operação

```markdown
---
id: {{id}}
skill: inboundfy-aprendizado
estado: rascunho
entrada: {{caminho ou ID}}
fontes:
  - {{caminho}}
proxima_skill: {{nome ou "pendente de confirmação"}}
---

# Registro de aprendizado

## Resultado

{{Conteúdo específico da etapa.}}

## Pendências

- {{pergunta ou "nenhuma"}}

## Próxima ação

{{verbo + objeto + caminho do arquivo seguinte}}
```

## Exemplo operacional completo

### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-aprendizado
grupo: contexto
entrada: {{caminho ou ID ligado ao pedido}}
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

### Saída ilustrativa

```markdown
---
id: 0042
skill: inboundfy-aprendizado
estado: aprovado
entrada: {{caminho ou ID ligado ao pedido}}
fontes:
  - .inboundfy/context/aprendizado.md
proxima_skill: {{skill seguinte ou "pendente de confirmação"}}
---

# Registro de aprendizado

## Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

## Próxima ação

{{verbo + objeto + caminho do arquivo seguinte}}
```

## Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Um novo ciclo preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy-aprendizado** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Especificação operacional

### Quando usar

Use **inboundfy-aprendizado** para executar esta função: Registra sugestões, correções, alinhamentos e dicas do usuário, confirma o alcance e transforma aprendizados aprovados em regras reutilizáveis do projeto.

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
skill: inboundfy-aprendizado
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/inboundfy-aprendizado.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-aprendizado
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/inboundfy-aprendizado.md
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
