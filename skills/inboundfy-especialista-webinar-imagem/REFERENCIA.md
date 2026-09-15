# REFERENCIA.md; inboundfy-especialista-webinar-imagem

## Formato

| Peça | Proporção | Dimensão comum |
| --- | --- | --- |
| Thumbnail de evento (Lu.ma e equivalentes) | 1:1 | 1080×1080 |

## Exemplo de brief de imagem; sem apresentador em destaque (fictício)

```text
Formato: 1:1, 1080x1080
Texto principal: "Como estruturar onboarding remoto"
Texto secundário: "Ao vivo; 12 de março, 19h"
Tom visual: convite, direto
Elemento de marca obrigatório: logo no canto, cor de destaque no fundo
```

## Exemplo de brief de imagem; com apresentador (fictício)

```text
Formato: 1:1, 1080x1080
Texto principal: "Como estruturar onboarding remoto"
Texto secundário: "com Ana Ribeiro; 12 de março, 19h"
Tom visual: convite, confiável
Elemento de marca obrigatório: logo no canto; espaço reservado para foto do
apresentador (círculo ou moldura, canto inferior)
```

## Checklist específico de webinar

- [ ] Título do evento legível em miniatura (a maioria das plataformas de
      evento exibe a thumbnail bem reduzida em listagem).
- [ ] Data e horário sempre presentes quando o brief definir uma data
      confirmada; nunca deixe a thumbnail sem essa informação se ela já
      existe.
- [ ] Quando houver apresentador, nome e (se disponível) foto conferem
      exatamente com `context/pessoas.md`.
- [ ] Espaço reservado para foto do apresentador não compete visualmente
      com o título do evento.

## Erros comuns

- Publicar a thumbnail sem data/horário quando o evento já tem data
  confirmada; obriga o usuário a abrir a página para descobrir quando é.
- Usar nome ou cargo do apresentador desatualizado em relação a
  `context/pessoas.md`.
- Colocar título do evento e nome do apresentador na mesma hierarquia
  visual; o título precisa ser o elemento dominante, o nome do
  apresentador é informação de apoio.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-webinar-imagem**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista webinar imagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-webinar-imagem
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista webinar imagem

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
skill: inboundfy-especialista-webinar-imagem
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-webinar-imagem/processado.md
pedido: aplicar a etapa de especialista webinar imagem e entregar o próximo registro
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
skill: inboundfy-especialista-webinar-imagem
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-webinar-imagem/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista webinar imagem

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

- Executar **inboundfy-especialista-webinar-imagem** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-webinar-imagem** para executar esta função: Gera thumbnail quadrada de evento/webinar, reaproveitando o motor de inboundfy-base-imagem com a identidade visual do usuário.

O grupo **especialista** trabalha com estes campos mínimos:

- **canal:** preencher com dado ligado ao pedido.
- **persona:** preencher com dado ligado ao pedido.
- **objetivo:** preencher com dado ligado ao pedido.
- **formato:** preencher com dado ligado ao pedido.
- **validadora:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-especialista-webinar-imagem
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-webinar-imagem/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-webinar-imagem
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-webinar-imagem/brief.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **especialista** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESCRITA.md`
- `ESTRUTURAS-PERSUASIVAS.md`
- `CONTEXTO.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
