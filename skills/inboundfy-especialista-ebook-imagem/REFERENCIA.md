# REFERENCIA.md; inboundfy-especialista-ebook-imagem

## Formato

| Peça | Proporção | Dimensão comum |
| --- | --- | --- |
| Capa de ebook | 1:1.4 (retrato, tipo A4/carta) | 1600×2240 |
| Imagem OpenGraph | 1.91:1 | 1200×630 |

## Exemplo de brief de imagem; capa (fictício)

```text
Formato: 1:1.4, 1600x2240
Texto principal: "Guia de Onboarding para Times Remotos"
Texto secundário: "Como estruturar os primeiros 30 dias sem depender de uma pessoa só"
Tom visual: editorial, sóbrio, confiável
Elemento de marca obrigatório: logo no rodapé da capa
```

## Exemplo de brief de imagem; OpenGraph derivado (fictício)

```text
Formato: 1.91:1, 1200x630
Texto principal: "Guia de Onboarding para Times Remotos"
Texto secundário: (opcional; subtítulo curto, se couber com legibilidade)
Tom visual: mesma paleta e tipografia da capa
Elemento de marca obrigatório: logo, mesma posição relativa da capa
```

## Checklist de capa de ebook

- [ ] Título legível em miniatura de listagem/catálogo (thumbnail pequena
      de página de ebooks).
- [ ] Subtítulo, quando presente, não compete visualmente com o título;       hierarquia clara entre os dois.
- [ ] Capa e OpenGraph compartilham identidade visual (mesma paleta,
      tipografia, posição de logo), ajustando apenas a composição para a
      proporção diferente.
- [ ] Nenhum erro de grafia no título (confira `context/glossario.md`);       erro na capa é o mais visível de qualquer peça do ebook.

## Erros comuns

- Gerar a versão OpenGraph do zero, com composição totalmente diferente da
  capa; quebra a identidade da publicação entre o material e o preview de
  compartilhamento.
- Título longo demais para o espaço da capa, forçando fonte pequena que
  perde legibilidade em miniatura de catálogo.
- Esquecer de revisar o subtítulo com o mesmo rigor do título; erro de
  grafia no subtítulo é igualmente visível.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-ebook-imagem**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista ebook imagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-ebook-imagem
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista ebook imagem

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
skill: inboundfy-especialista-ebook-imagem
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-ebook-imagem/processado.md
pedido: aplicar a etapa de especialista ebook imagem e entregar o próximo registro
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
skill: inboundfy-especialista-ebook-imagem
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-ebook-imagem/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista ebook imagem

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

- Executar **inboundfy-especialista-ebook-imagem** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-ebook-imagem** para executar esta função: Gera capa de ebook e imagem OpenGraph derivada, reaproveitando o motor de inboundfy-base-imagem com a identidade visual do usuário.

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
skill: inboundfy-especialista-ebook-imagem
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-ebook-imagem/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-ebook-imagem
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-ebook-imagem/brief.md
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
