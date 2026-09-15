# Referência da FAQ

## Campos mínimos

| Campo | Uso |
| --- | --- |
| Pergunta | Formula o ponto que precisa ser respondido. |
| Resposta | Reproduz ou resume somente o que a fonte permite afirmar. |
| Origem | Aponta para o arquivo e o trecho de origem. |
| Estado | Separa resposta completa, parcial, conflitante e pendente. |
| Observação | Registra limite, fonte necessária ou pergunta ao usuário. |

## Cobertura mínima

- cada parágrafo do bruto e do processado gera ao menos uma pergunta útil;
- entidades, datas, números, condições, exemplos e comparações são cobertos;
- lacunas factuais viram perguntas pendentes;
- a base editorial pode usar a FAQ sem acessar o bruto diretamente.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-extrair-faq**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de extrair faq dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-extrair-faq
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de extrair faq

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
skill: inboundfy-extrair-faq
grupo: capacidade
entrada: acervo/0042-2026-09-14-extrair-faq/processado.md
pedido: aplicar a etapa de extrair faq e entregar o próximo registro
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
skill: inboundfy-extrair-faq
estado: aprovado
entrada: acervo/0042-2026-09-14-extrair-faq/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de extrair faq

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

- Executar **inboundfy-extrair-faq** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-extrair-faq** para executar esta função: Extrai uma FAQ ampla de um item do acervo, relacionando perguntas, respostas, fontes, lacunas e pontos que precisam de confirmação.

O grupo **acervo** trabalha com estes campos mínimos:

- **bruto:** preencher com dado ligado ao pedido.
- **processado:** preencher com dado ligado ao pedido.
- **FAQ:** preencher com dado ligado ao pedido.
- **pesquisa:** preencher com dado ligado ao pedido.
- **base editorial:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-extrair-faq
grupo: acervo
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/bruto.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-extrair-faq
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/bruto.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **acervo** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `METODOLOGIA.md`
- `LIMPEZA-MATERIAL-BRUTO.md`
- `TRADUCAO.md`
- `docs/method/05-artefatos-e-estados.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
