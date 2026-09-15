# REFERENCIA.md; inboundfy-especialista-instagram-imagem

## Formato

| Peça | Proporção | Dimensão comum |
| --- | --- | --- |
| Post de feed | 1:1 ou 4:5 | 1080×1080 ou 1080×1350 |
| Carrossel (por slide) | 4:5 | 1080×1350 |
| Stories / Reels capa | 9:16 | 1080×1920 |

## Exemplo de brief de imagem; post único (fictício)

```text
Formato: 4:5, 1080x1350
Texto principal: "Pare de responder cliente pelo WhatsApp pessoal"
Texto secundário: "3 sinais de que é hora de separar os números"
Tom visual: vibrante, direto
Elemento de marca obrigatório: logo no canto superior, cor de destaque no fundo
```

## Exemplo de brief de imagem; carrossel, slide a slide (fictício)

```text
Slide 1; Capa
Texto principal: "3 sinais de que seu WhatsApp de negócio virou bagunça"
Texto secundário: (nenhum)

Slide 2; Problema
Texto principal: "Você não sabe quantas conversas estão em aberto"
Texto secundário: (nenhum)

Slide 3; Problema
Texto principal: "Cliente antigo manda mensagem e ninguém responde"
Texto secundário: (nenhum)

Slide 4; Solução
Texto principal: "Separe atendimento pessoal de atendimento comercial"
Texto secundário: "Comece com um número dedicado"

Slide 5; CTA
Texto principal: "Salve esse post para não esquecer"
Texto secundário: (nenhum)
```

Todos os slides de um mesmo carrossel devem compartilhar paleta,
tipografia, posição de logo e grade; só o texto muda de slide a slide.

## Checklist específico de Instagram

- [ ] Post de feed: texto legível em miniatura de grid (bem reduzido).
- [ ] Carrossel: numeração de slide visível quando o formato do canal usar
      esse recurso, e consistência visual absoluta entre todos os slides.
- [ ] Carrossel: o slide 1 funciona como "capa"; precisa parar o scroll
      sozinho, sem depender do usuário já saber o que vem a seguir.
- [ ] Stories/Reels: elementos importantes fora da faixa superior/inferior
      onde a interface do app sobrepõe (nome de usuário, botão de reação).

## Erros comuns

- Gerar cada slide de carrossel isoladamente sem conferir consistência com
  os anteriores; resulta em pacote que parece peças soltas, não uma
  sequência.
- Colocar informação essencial na borda de um Story/Reels, onde a interface
  do aplicativo cobre o conteúdo.
- Repetir o mesmo texto do slide 1 (capa) em todos os slides seguintes por
  segurança; cada slide deve avançar o argumento, igual a um parágrafo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-instagram-imagem**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista instagram imagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-instagram-imagem
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista instagram imagem

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
skill: inboundfy-especialista-instagram-imagem
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-instagram-imagem/processado.md
pedido: aplicar a etapa de especialista instagram imagem e entregar o próximo registro
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
skill: inboundfy-especialista-instagram-imagem
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-instagram-imagem/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista instagram imagem

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

- Executar **inboundfy-especialista-instagram-imagem** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-instagram-imagem** para executar esta função: Gera imagem de feed e pacote completo de carrossel para Instagram, reaproveitando o motor de inboundfy-base-imagem com a proporção exigida por cada formato.

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
skill: inboundfy-especialista-instagram-imagem
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-instagram-imagem/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-instagram-imagem
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-instagram-imagem/brief.md
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
