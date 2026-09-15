# Referências internas

## Etapa 01 saneamento

### Inboundfy Saneamento

Segunda skill do pipeline. Recebe o pacote criado por `inboundfy-planejamento` e
produz uma versão limpa do material, sem ainda aplicar voz editorial; apenas remove ruído e organiza estrutura.

#### Escopo

Cobre a limpeza mecânica e estrutural do material. Não reescreve com a voz de
`context/marca-voz.md`; isso é papel das skills de canal na fase 5. Não
extrai ativos reutilizáveis; isso é `inboundfy-planejamento`.

#### Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

#### Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../../../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../../../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](../../REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **planejamento**.

#### Contexto exigido

Nenhum arquivo de `context/` é estritamente obrigatório para limpeza
mecânica, mas leia `context/glossario.md` para corrigir grafia de marcas e
termos técnicos durante a limpeza. Leia também `LIMPEZA-MATERIAL-BRUTO.md`
(regras completas do que pode e não pode ser alterado, por tipo de
material) e `TRADUCAO.md` (lógica de correção canônica de termo e nome
próprio mal transcrito) como requisito para alterar material bruto; essa
leitura é obrigatória, não apenas `REFERENCIA.md` desta skill.

#### Entrada esperada

O pacote criado por `inboundfy-planejamento`, com `00-entrada/material-original.md`
preenchido.

#### Fluxo

1. Leia `00-entrada/material-original.md` sem alterá-lo.
2. Identifique o tipo de material (transcrição, texto colado, nota solta) e
   aplique a seção correspondente de `LIMPEZA-MATERIAL-BRUTO.md`; o que é
   permitido corrigir muda por tipo de material.
3. Corrija grafia de marcas e termos técnicos contra `context/glossario.md`
   e a lógica de correção canônica de `TRADUCAO.md`. Termo incerto vira
   pendência registrada (`TRADUCAO.md`), nunca suposição silenciosa.
4. Organize a estrutura em blocos lógicos, preservando a sequência e o
   sentido original; não resuma, não corte conteúdo, apenas organize (ver
   lista do que nunca é permitido em `LIMPEZA-MATERIAL-BRUTO.md`).
5. Salve o resultado em `01-saneamento/base-limpa.md`, seguindo o template de
   `REFERENCIA.md`.
6. Escreva `01-saneamento/relatorio-saneamento.md` documentando o que foi
   alterado e por quê, bloco a bloco quando a alteração for relevante,
   seguindo o template de `LIMPEZA-MATERIAL-BRUTO.md` e `REFERENCIA.md`.
7. Se o material original for uma transcrição com falantes identificáveis,
   preserve a sequência e a atribuição de fala na base limpa.
8. Depois de salvar a base limpa, execute `inboundfy-anti-slop` no marco A1 e
   registre `06-auditoria/anti-slop-01-processado.md`.

#### Saída

`01-saneamento/base-limpa.md` e `01-saneamento/relatorio-saneamento.md`,
dentro do diretório do pacote.

#### Validação

- `00-entrada/material-original.md` permanece idêntico ao criado por
  `inboundfy-planejamento`.
- Nenhum conteúdo foi resumido, cortado ou reescrito com voz editorial;   apenas limpo e organizado.
- O relatório documenta toda alteração relevante.
- O ciclo A1 confirma que a base limpa não ganhou fórmula genérica nem perdeu
  sentido, fato ou ressalva.

#### Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Rodar novamente sobre o mesmo pacote não duplica o trabalho; atualiza
`base-limpa.md` e o relatório existente, sem criar uma segunda versão
paralela.

### Referência da etapa

#### REFERENCIA.md; inboundfy-planejamento

Este arquivo cobre o formato dos artefatos desta fase. As regras completas
do que pode e não pode ser alterado durante a limpeza vivem em
`LIMPEZA-MATERIAL-BRUTO.md` (leitura obrigatória, ver `SKILL.md`); a lógica
de correção de termo mal transcrito vive em `TRADUCAO.md`.

##### Template de `base-limpa.md`

```markdown
#### Base limpa; <slug-do-pacote>

<!-- Conteúdo organizado em blocos lógicos, preservando sequência e sentido
original. Sem resumo, sem corte de conteúdo, sem voz editorial ainda. -->

##### Bloco 1; <tema ou trecho identificado>

<texto organizado>

##### Bloco 2; <tema ou trecho identificado>

<texto organizado>
```

##### Template de `relatorio-saneamento.md`

```markdown
#### Relatório de saneamento; <slug-do-pacote>

| Bloco | O que foi alterado | Por quê |
| --- | --- | --- |
| Bloco 1 | <ex.: removida repetição de "então, tipo"> | <ruído de fala, sem valor de conteúdo> |
| Bloco 2 | <ex.: corrigida grafia de "Estoqueli" para "Estoquely"> | <conferência contra context/glossario.md> |

##### Falantes identificados (se transcrição)

- <Falante A>; <papel na conversa>
- <Falante B>; <papel na conversa>
```

##### Exemplo preenchido (fictício)

```markdown
#### Relatório de saneamento; cancelamento-primeiro-mes-estoque

| Bloco | O que foi alterado | Por quê |
| --- | --- | --- |
| Bloco 1 | Removidas marcações de tempo (00:03:12) e falas cruzadas confusas | Ruído de transcrição sem valor de conteúdo |
| Bloco 2 | Unificadas três interrupções do mesmo raciocínio em um bloco contínuo | A ideia original ficava fragmentada por interrupções da call |
| Bloco 3 | Corrigida grafia de "estoque" (aparecia como "estoke" em um trecho) | Erro de transcrição automática |

##### Falantes identificados

- Falante A; gestor de sucesso do cliente, relata os casos de cancelamento
- Falante B; gestor de produto, questiona causas e propõe hipóteses
```

##### Checklist de qualidade

- [ ] `00-entrada/material-original.md` permanece idêntico ao original;       confira com um diff mental antes de salvar.
- [ ] Nenhum trecho foi resumido ou cortado; apenas reorganizado e limpo.
- [ ] Toda correção de grafia relevante foi conferida contra
      `context/glossario.md`.
- [ ] O relatório documenta toda alteração que não seja trivial (espaço
      duplo, pontuação solta não precisa de linha no relatório; mudança de
      sentido ou remoção de trecho precisa).
- [ ] Falantes identificados (quando houver) mantêm atribuição consistente
      do início ao fim.

##### Erros comuns

- Aproveitar a limpeza para já aplicar a voz de `context/marca-voz.md`;   isso pertence à fase de produção, não ao saneamento.
- Remover um trecho "porque parecia irrelevante" sem registrar a remoção no
  relatório; toda remoção precisa de rastro.
- Corrigir grafia por achismo em vez de conferir `context/glossario.md`,
  introduzindo uma nova inconsistência.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-planejamento**, do grupo
**planejamento**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de planejamento 01 saneamento dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de planejamento 01 saneamento

##### Resultado

{Conteúdo específico da etapa.}

##### Pendências

- {pergunta ou "nenhuma"}

##### Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

##### Exemplo operacional completo

###### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-planejamento
grupo: planejamento
entrada: acervo/0042-2026-09-14-planejamento-01-saneamento/processado.md
pedido: aplicar a etapa de planejamento 01 saneamento e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de planejamento 01 saneamento

##### Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

##### Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

##### Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

##### Erros comuns adicionais

- Executar **inboundfy-planejamento** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

##### Guia específico do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

##### Especificação operacional

###### Quando usar

Use **inboundfy-planejamento** para executar esta função: Fase 1 do pipeline (METODOLOGIA.md). Limpa e organiza o material bruto de 00-entrada/ preservando o original intocado, gerando base limpa e relatório de saneamento. Não escreve copy editorial nem decide estratégia.

O grupo **planejamento** trabalha com estes campos mínimos:

- **ID:** preencher com dado ligado ao pedido.
- **pacote:** preencher com dado ligado ao pedido.
- **persona:** preencher com dado ligado ao pedido.
- **brief:** preencher com dado ligado ao pedido.
- **roteamento:** preencher com dado ligado ao pedido.

###### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-planejamento
grupo: planejamento
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/base-editorial.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-planejamento
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/base-editorial.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

###### Perguntas de conferência

1. A entrada pertence ao grupo **planejamento** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

###### Referências de execução

Leia, na ordem necessária:

- `METODOLOGIA.md`
- `ESTRUTURAS-PERSUASIVAS.md`
- `docs/method/06-contrato-de-skill.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
