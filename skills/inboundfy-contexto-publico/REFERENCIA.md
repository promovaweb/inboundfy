# REFERENCIA.md; inboundfy-contexto-publico

Roteiro de entrevista, exemplo preenchido e checklist para `context/publico.md`.

## Roteiro de entrevista

1. "Quem é essa pessoa; cargo, contexto do negócio dela, nível de
   maturidade no assunto?"
2. "O que ela já sabe sobre o problema antes de chegar até vocês?"
3. "Qual é a dor principal dela? (concreta: uma situação específica, não
   'falta de eficiência')"
4. "O que ela já tentou para resolver isso, e por que não resolveu?"
5. "Qual é a objeção mais comum que ela levanta antes de decidir?"
6. "O que faria essa pessoa agir de verdade; que gatilho concreto muda a
   escolha dela?"
7. "Onde ela consome conteúdo; Instagram, busca no Google, indicação de
   outra pessoa, grupo de WhatsApp?"
8. "Que palavras ou termos ela mesma usaria para descrever o problema (não
   o termo técnico que a empresa usa)?"

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Dona de loja de roupas com 1 a 3 funcionários

- **Quem é:** administra a loja sozinha ou com familiares, nunca usou
  sistema de gestão, controla estoque em caderno ou planilha.
- **O que já sabe sobre o problema:** sabe que perde venda quando o produto
  acaba sem ela perceber, mas acha que "sistema" é coisa de loja grande.
- **Dor principal:** vender um produto que já tinha acabado e só descobrir
  na hora de separar para o cliente.
- **O que já tentou e não resolveu:** planilha no celular; funciona por
  duas semanas e depois ela para de atualizar.
- **Objeção mais comum:** "eu não entendo de tecnologia, vou complicar
  minha vida."
- **O que faria essa pessoa agir:** ver alguém parecida com ela (outra
  lojista, não um especialista) usando o app em menos de um minuto.
- **Onde essa pessoa consome conteúdo:** Instagram, grupo de WhatsApp de
  lojistas do bairro, indicação de outra loja.
- **Jargão que essa pessoa usa:** "faltou mercadoria", "perdi a venda",
  nunca diz "gestão de catalogo" ou "SKU".
```

## Checklist de completude

- [ ] Dor principal é concreta (uma cena específica), não abstrata.
- [ ] Objeção mais comum está registrada em linguagem real da pessoa, não
      reformulada tecnicamente.
- [ ] Jargão da persona preenchido; sem isso, `inboundfy-base-seo` não
      consegue alinhar palavra-chave à busca real.
- [ ] Canal de consumo de conteúdo presente, para orientar
      `inboundfy-planejamento`.

## Erros comuns

- Descrever a persona pelo que a empresa quer vender ("pessoa que precisa
  de automação") em vez de pela dor real dela.
- Usar jargão técnico da empresa no campo de "jargão que essa pessoa usa";   o campo existe exatamente para capturar a linguagem que a persona usa,
  não a linguagem interna da empresa.
- Criar persona genérica demais ("empreendedor brasileiro") sem
  especificidade suficiente para orientar ângulo de conteúdo.
- Confundir esta skill com `inboundfy-contexto-institucional`; aqui é quem a marca
  tenta atingir, não quem fala pela marca.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-publico**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de contexto publico dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-contexto-publico
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de contexto publico

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
skill: inboundfy-contexto-publico
grupo: contexto
entrada: acervo/0042-2026-09-14-contexto-publico/processado.md
pedido: aplicar a etapa de contexto publico e entregar o próximo registro
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
skill: inboundfy-contexto-publico
estado: aprovado
entrada: acervo/0042-2026-09-14-contexto-publico/processado.md
fontes:
  - .inboundfy/context/publico.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de contexto publico

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

- Executar **inboundfy-contexto-publico** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-contexto-publico** para executar esta função: Preenche e mantém context/publico.md. Ative quando o usuário definir ou corrigir uma persona ou segmento; perfil, dor principal, objeção comum, onde consome conteúdo, jargão próprio.

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
skill: inboundfy-contexto-publico
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/publico.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-publico
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/publico.md
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
