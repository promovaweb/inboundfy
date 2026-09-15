# REFERENCIA.md; inboundfy-especialista-video-imagem

## Formato

| Peça | Proporção | Dimensão comum |
| --- | --- | --- |
| Thumbnail de vídeo longo | 16:9 | 1280×720 |

## Princípios de CTR (taxa de clique) para thumbnail

- **Texto curto e grande**: 3 a 5 palavras no máximo, em fonte grande o
  bastante para ler em miniatura de celular (teste reduzindo a imagem a
  ~120px de largura mentalmente).
- **Um único foco visual**: rosto com expressão clara (quando o vídeo for
  talking head), objeto central do vídeo, ou um número/dado de forte
  impacto; nunca os três competindo ao mesmo tempo.
- **Contraste alto**: cor de fundo e cor de texto em oposição forte (claro
  sobre escuro ou vice-versa), não tons próximos que se confundem em tela
  pequena.
- **Curiosidade sem clickbait vazio**: o texto da thumbnail promete algo que
  o vídeo realmente entrega; thumbnail que promete e não cumpre aumenta
  clique mas derruba retenção.

## Exemplo de brief de imagem (fictício)

```text
Formato: 16:9, 1280x720
Texto principal: "Por que seu deploy trava às sextas"
Texto secundário: (nenhum; thumbnail favorece texto único)
Tom visual: alto contraste, direto
Elemento de marca obrigatório: logo pequeno no canto inferior
```

## Checklist de CTR

- [ ] Texto legível em miniatura reduzida a ~120px de largura.
- [ ] Um único foco visual (rosto, objeto ou número), sem poluição.
- [ ] Contraste forte entre texto e fundo.
- [ ] Texto da thumbnail é coerente com o que o vídeo entrega (sem
      clickbait vazio).
- [ ] Grafia confere com `context/glossario.md`.

## Erros comuns

- Colocar o roteiro inteiro resumido em texto pequeno na thumbnail; o
  formato exige uma única frase de impacto, não um resumo.
- Usar cores da paleta de marca que têm baixo contraste entre si (ex.: duas
  tonalidades de azul próximas) só para "respeitar a identidade visual";   ajuste a saturação/luminosidade mantendo a paleta reconhecível, mas com
  contraste suficiente para leitura.
- Prometer no texto algo que o vídeo não desenvolve, gerando queda de
  retenção mesmo com clique alto.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-video-imagem**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista video imagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-video-imagem
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista video imagem

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
skill: inboundfy-especialista-video-imagem
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-video-imagem/processado.md
pedido: aplicar a etapa de especialista video imagem e entregar o próximo registro
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
skill: inboundfy-especialista-video-imagem
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-video-imagem/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista video imagem

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

- Executar **inboundfy-especialista-video-imagem** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-video-imagem** para executar esta função: Gera thumbnail de vídeo longo (formato típico 1280x720), reaproveitando o motor de inboundfy-base-imagem com foco em legibilidade e taxa de clique.

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
skill: inboundfy-especialista-video-imagem
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-video-imagem/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-video-imagem
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-video-imagem/brief.md
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
