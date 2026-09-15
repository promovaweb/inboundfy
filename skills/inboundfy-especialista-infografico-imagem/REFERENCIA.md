# REFERENCIA.md; inboundfy-especialista-infografico-imagem

## Formato

| Peça | Proporção | Dimensão comum |
| --- | --- | --- |
| Infográfico completo | 9:16 | 1080×1920 |

## Hierarquia de leitura vertical

Um infográfico em 9:16 é lido de cima para baixo, em ordem fixa; diferente
de um card social de foco único. A composição precisa refletir essa ordem:

```text
[Título; 1 linha, maior destaque visual]
[Bloco 1; dado ou afirmação + ícone/número]
[Bloco 2; dado ou afirmação + ícone/número]
[Bloco 3; dado ou afirmação + ícone/número]
[Bloco 4, se houver]
[Fonte dos dados; texto pequeno no rodapé]
[Logo; rodapé]
```

## Exemplo de brief de imagem (fictício)

```text
Formato: 9:16, 1080x1920
Texto principal (título): "Onboarding remoto em números"
Blocos:
  1. "68% dos times remotos não têm checklist de primeiro dia"
  2. "Times com checklist retêm 40% mais no primeiro trimestre"
  3. "A etapa mais pulada é a apresentação ao time, não a técnica"
Fonte dos dados: pesquisa interna 2024 (exemplo fictício)
Tom visual: técnico, direto, alto contraste entre blocos
Elemento de marca obrigatório: logo no rodapé
```

## Checklist específico de infográfico

- [ ] Ordem de leitura vertical clara; o olho sabe para onde ir a seguir
      sem precisar caçar o próximo bloco.
- [ ] Cada bloco tem no máximo uma frase + um número/ícone; não vira
      parágrafo dentro do bloco visual.
- [ ] Todo número na imagem é idêntico ao texto aprovado por
      `inboundfy-especialista-infografico`; nenhuma composição altera dado.
- [ ] Fonte dos dados legível, mesmo que em texto pequeno no rodapé.
- [ ] Número de blocos bate exatamente com o que o brief define; não
      adicione nem corte bloco na composição visual.

## Erros comuns

- Comprimir texto longo demais dentro de um bloco, forçando fonte pequena
  que quebra a leitura em tela de celular.
- Alterar levemente um número ao compor a imagem (arredondamento, corte de
  casa decimal) sem confirmar com o texto aprovado; trate isso como erro
  de dado, não liberdade de design.
- Perder a hierarquia vertical ao tentar caber mais blocos do que o
  formato comporta com legibilidade.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-infografico-imagem**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista infografico imagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-infografico-imagem
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista infografico imagem

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
skill: inboundfy-especialista-infografico-imagem
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-infografico-imagem/processado.md
pedido: aplicar a etapa de especialista infografico imagem e entregar o próximo registro
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
skill: inboundfy-especialista-infografico-imagem
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-infografico-imagem/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista infografico imagem

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

- Executar **inboundfy-especialista-infografico-imagem** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-infografico-imagem** para executar esta função: Gera a peça final de infográfico (formato típico 9:16) a partir da copy aprovada, reaproveitando o motor de inboundfy-base-imagem.

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
skill: inboundfy-especialista-infografico-imagem
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-infografico-imagem/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-infografico-imagem
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-infografico-imagem/brief.md
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
