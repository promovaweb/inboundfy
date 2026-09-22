# Referências internas

## Etapa 06 auditoria

### Inboundfy Auditoria

Sétima e última skill do pipeline. Fecha o pacote ou a peça avulsa,
confirmando que o artefato final está pronto para publicação fora do
Inboundfy.

#### Escopo

Consolida a auditoria do pacote a partir das aprovações individuais. Não
substitui `inboundfy-validador-*` e não corrige copy diretamente.

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

- `context/proibicoes.md`: vetos duros que reprovam a peça.
- `context/estruturas-proibidas.md`: catálogo genérico de padrões de texto com cara de IA, mesmo peso de `context/proibicoes.md`.
- `context/marca-voz.md`: para confirmar aderência de tom.
- `context/canais.md`: para aplicar o limite técnico e formato exigido pelo
  canal.

#### Entrada esperada

O artefato final produzido por `inboundfy-planejamento` e o brief que o originou.

#### Fluxo

1. Leia o brief original em `04-briefs/<canal>-<slug>.md` e o artefato final
   correspondente em `97-ativos-finais/<canal>/<item>/`.
2. Confira se o artefato responde ao objetivo, ângulo e público do brief;    se não responder, devolva para `inboundfy-planejamento` com a divergência
registrada, não corrija a estratégia sem devolver o item ao planejamento.
3. Se o brief declarar estrutura persuasiva (`ESTRUTURAS-PERSUASIVAS.md`),
   confira se todos os blocos previstos estão presentes e na ordem certa, e
se nenhum bloco de prova social ou testemunho foi preenchido sem prova em
   `context/`; se estiver, reprove e devolva para a skill de canal.
4. Localize o relatório da `inboundfy-validador-*` pareada em
   `06-auditoria/assets/` e confirme veredito aprovado. Se estiver ausente
   ou reprovado, devolva à produção antes de continuar.
5. Confira se o manifesto do relatório inclui todos os `context/`, as fontes
   locais relevantes, proibições e validação própria do canal.
6. Faça a leitura consolidada do pacote para detectar contradição entre
   assets que as validações individuais não poderiam perceber.
7. Acione `inboundfy-anti-slop` no marco A6 para comparar abertura, tese,
   exemplos, CTAs e estruturas entre as peças relacionadas. Registre o ciclo
   em `06-auditoria/anti-slop-06-pacote.md` ou em
   `auditorias/anti-slop/06-pacote.md`, conforme o layout do pacote.
8. Registre o resultado em `06-auditoria/auditoria-final.md`: aprovado,
   reprovado com lista de correções, ou devolvido para replanejamento,
   seguindo o template de `REFERENCIA.md`.
9. Se aprovado, confirme que o frontmatter do artefato (quando Markdown) tem
   o campo `brief` apontando para o brief de origem.

#### Saída

`06-auditoria/auditoria-final.md`, dentro do diretório do pacote, com o
veredito e as pendências, se houver.

#### Validação

- A prosa passou por `inboundfy-copy-editor`; os achados verificáveis foram
  tratados ou aparecem como pendência explícita.
- Nenhuma violação de `context/proibicoes.md` ou `context/estruturas-proibidas.md` passou sem registro.
- O marco A6 do anti-slop foi executado e está registrado antes do veredito final.
- O campo `brief` está presente no artefato aprovado, quando aplicável.
- Todo asset tem relatório individual aprovado da validadora pareada.

#### Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Reauditar um artefato já aprovado não gera um segundo veredito duplicado; atualiza `auditoria-final.md` com a nova avaliação, preservando o histórico da
anterior quando relevante para o usuário.

### Referência da etapa

#### REFERENCIA.md; inboundfy-planejamento

##### Template de `auditoria-final.md`

```markdown
#### Auditoria final; <canal>/<item>

- **Brief de origem:** 04-briefs/<canal>-<slug>.md
- **Veredito:** <aprovado | reprovado | devolvido para replanejamento>
- **Relatório individual:** 06-auditoria/assets/<canal>-<item>.md
- **Validadora pareada:** <inboundfy-validador-*>
- **Veredito individual:** <aprovado | ausente | reprovado>
- **Auditoria de copy:** <sem achados | achados tratados | pendências>
- **Achados e ações:** <localização, regra, diagnóstico e correção; ou "nenhum">
- **Verificação de context/proibicoes.md:** <sem violação | violação encontrada em: ...>
- **Verificação de estrutura persuasiva:** <blocos presentes e na ordem certa | bloco ausente: ... | não aplicável>
- **Validação própria do canal:** <formato de imagem, contagem de caracteres, metadata de SEO; resultado>
- **Pendências:** <lista de correções, ou "nenhuma">
```

##### Exemplo; peça aprovada (fictício)

```markdown
#### Auditoria final; email/nutricao-migracao-estoque

- **Brief de origem:** 04-briefs/email-nutricao-migracao-estoque.md
- **Veredito:** aprovado
- **Auditoria de copy:** sem achados
- **Achados e ações:** nenhum
- **Verificação de context/proibicoes.md:** sem violação
- **Verificação de estrutura persuasiva:** PAS; problema, agitação e
  solução presentes na ordem certa
- **Validação própria do canal:** assunto com 42 caracteres, pré-header
  presente, CTA único
- **Pendências:** nenhuma
```

##### Exemplo; peça reprovada (fictício)

```markdown
#### Auditoria final; linkedin/opiniao-atendimento-reativo

- **Brief de origem:** 04-briefs/linkedin-opiniao-atendimento-reativo.md
- **Veredito:** reprovado
- **Auditoria de copy:** pendências
- **Achados e ações:** parágrafo 2, abertura genérica "no cenário atual das
  empresas...", substituir por situação observável; parágrafo 4, fechamento
  decorativo, remover e manter a consequência concreta.
- **Verificação de context/proibicoes.md:** sem violação
- **Verificação de estrutura persuasiva:** PAS; bloco de agitação ausente,
  o texto pula direto do problema para a solução
- **Validação própria do canal:** corpo copiável sem Markdown; OK
- **Pendências:**
  1. Reescrever parágrafo 2 sem abertura genérica.
  2. Reescrever parágrafo 4 removendo fechamento decorativo.
  3. Adicionar bloco de agitação antes da solução, conforme PAS.
```

##### Checklist de qualidade da auditoria

- [ ] Todo campo do template está preenchido, mesmo quando o valor é
      "nenhum" ou "não aplicável".
- [ ] Cada asset possui relatório individual aprovado e manifesto de fontes
      completo.
- [ ] Reprovação sempre lista pendências específicas e acionáveis, nunca só
      "revisar de novo".
- [ ] Divergência de estratégia (brief mal formulado) é devolvida para
      `inboundfy-planejamento`, não corrigida na auditoria.
- [ ] Peça aprovada tem o campo `brief` confirmado no frontmatter do
      artefato final.

##### Erros comuns

- Aprovar uma peça sem tratar achado individual apontado pela auditoria de
  copy.
- Reprovar por escrita quando o problema real é o brief (ângulo errado,
  público errado); nesse caso o veredito certo é "devolvido para
  replanejamento", não "reprovado".
- Aprovar peça com bloco de estrutura persuasiva ausente só porque o texto
  em si está bem escrito; estrutura incompleta é motivo de reprovação
  independente da qualidade de prosa.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-planejamento**, do grupo
**planejamento**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de planejamento 06 auditoria dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de planejamento 06 auditoria

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
entrada: acervo/0042-2026-09-14-planejamento-06-auditoria/processado.md
pedido: aplicar a etapa de planejamento 06 auditoria e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de planejamento 06 auditoria

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

Use **inboundfy-planejamento** para executar esta função: Fase 6 do pipeline (METODOLOGIA.md). Audita o artefato final contra o brief, ESCRITA.md, context/proibicoes.md, context/estruturas-proibidas.md e a validação própria do canal. Aprova, reprova com correção guiada, ou devolve para replanejamento.

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
