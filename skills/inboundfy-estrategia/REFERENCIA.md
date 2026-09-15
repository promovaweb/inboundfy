# Referência de estratégia

## Mapa de canal

| Canal | Função principal | Formatos possíveis |
| --- | --- | --- |
| Blog | Busca e aprofundamento | artigo, guia, comparativo, FAQ |
| Email | Relação e próxima ação | nutrição, newsletter, oferta |
| LinkedIn | Tese e autoridade profissional | post, artigo, documento |
| Instagram | Alcance e demonstração rápida | post, carrossel, vídeo |
| Substack | Visão e relacionamento recorrente | artigo, newsletter |
| YouTube | Explicação, demonstração e descoberta | vídeo, série, shorts |

## Brief estratégico

```md
objetivo:
persona:
oferta:
estágio_da_jornada:
canal:
tema:
acervo:
ângulo:
cta:
métrica:
data:
```

## Reaproveitamento responsável

O acervo é fonte, não fila automática de publicações. Cada adaptação deve
explicar o que muda entre canais, personas e momentos da jornada.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-estrategia**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de estrategia dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-estrategia
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de estrategia

## Resultado

{Conteúdo específico da etapa.}

## Pendências

- {pergunta ou "nenhuma"}

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Exemplo operacional completo

### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-estrategia
grupo: estratégia
entrada: acervo/0042-2026-09-14-estrategia/processado.md
pedido: aplicar a etapa de estrategia e entregar o próximo registro
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
skill: inboundfy-estrategia
estado: aprovado
entrada: acervo/0042-2026-09-14-estrategia/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de estrategia

## Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy-estrategia** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-estrategia** para executar esta função: Define estratégia de inbound marketing, temas, canais, jornada, cadência, campanhas e reaproveitamento do acervo para um projeto.

O grupo **estratégia** trabalha com estes campos mínimos:

- **objetivo:** preencher com dado ligado ao pedido.
- **público:** preencher com dado ligado ao pedido.
- **canal:** preencher com dado ligado ao pedido.
- **período:** preencher com dado ligado ao pedido.
- **medida:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-estrategia
grupo: estratégia
pedido: executar a função desta skill sobre o material selecionado
entrada: estrategia/2026-09-campanha/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-estrategia
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - estrategia/2026-09-campanha/brief.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **estratégia** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESTRATEGIA.md`
- `CONTEXTO.md`
- `docs/method/05-artefatos-e-estados.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
