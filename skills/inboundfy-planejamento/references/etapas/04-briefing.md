# Referências internas

## Etapa 04 briefing

### Inboundfy Briefing

Quinta skill do pipeline. Também é o ponto de entrada para peça avulsa
encaminhada diretamente por `inboundfy-planejamento`, quando o usuário já pede uma
peça específica sem pacote completo.

#### Escopo

Formaliza o brief. Não produz o artefato final; isso é
`inboundfy-planejamento` + skill de canal.

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

- `context/publico.md`: para definir o público-alvo do brief.
- `context/marca-voz.md`, `context/proibicoes.md` e `context/estruturas-proibidas.md`: para registrar restrições
  de voz e vetos que a peça deve respeitar.
- `context/canais.md`: para confirmar formato e limites técnicos do canal.
- `ESTRUTURAS-PERSUASIVAS.md` (contexto compartilhado do framework, não um
  arquivo de dados do usuário): para decidir se a peça exige estrutura
  persuasiva e qual delas.

#### Estrutura persuasiva

Sempre que o objetivo do brief for comercial explícito; anúncio, e-mail de
venda, página de oferta, script de vídeo de conversão, post com CTA de
compra, convite de webinar; leia `ESTRUTURAS-PERSUASIVAS.md` e decida:

1. **Qual estrutura cabe:** AIDA para peça curta com uma única oferta clara;
   PAS quando a persona de `context/publico.md` ainda não sente urgência e
   precisa ver o custo do problema antes da solução; PASTOR para peça longa
   de conversão que pode usar prova social e oferta detalhada
   (`context/ofertas.md`).
2. **Se FAB se aplica:** toda vez que o brief envolver apresentar produto ou
   serviço (`context/produtos.md` / `context/servicos.md`), registre que a
   skill de canal deve traduzir característica em vantagem e benefício, não
   apenas listar funcionalidade.
3. **Registre a escolha no brief**, com uma frase por bloco da estrutura
   (o que entra em cada bloco, com base nos ativos de apoio e no
   `context/`), para que a skill de canal não precise decidir estratégia
   sozinha; ela só aplica `ESCRITA.md` dentro de cada bloco já definido.

Peça informativa sem objetivo comercial (artigo explicativo, changelog,
shownotes) não exige estrutura persuasiva; nesse caso, registre no brief que
a peça segue `ESCRITA.md` diretamente, sem bloco de AIDA/PAS/PASTOR.

#### Entrada esperada

Uma oportunidade aprovada em `03-planejamento/plano-de-oportunidades.md`, ou
um pedido direto de peça avulsa vindo de `inboundfy-planejamento`.

#### Fluxo

1. Se vier de oportunidade aprovada, leia o item correspondente no plano e os
   ativos de apoio associados em `02-pesquisa-e-ativos/ativos.md`.
2. Se vier de peça avulsa, extraia do pedido do usuário: canal, tema,
   objetivo e qualquer restrição já informada.
3. Defina o público-alvo do brief a partir de `context/publico.md`; se
   nenhuma persona cadastrada corresponder, sinalize ao usuário antes de
   prosseguir.
4. Defina ângulo, formato e condição de aprovação da peça, alinhados ao formato
   e limite técnico do canal em `context/canais.md`.
5. Registre restrições de voz (`context/marca-voz.md`) e vetos aplicáveis
   (`context/proibicoes.md` e `context/estruturas-proibidas.md`) diretamente no brief, para que a skill de canal
   não precise recuperá-los de memória.
6. Decida a estrutura persuasiva do brief, conforme a seção acima, e registre
   a escolha (ou a ausência dela) explicitamente no brief.
7. Salve o brief em `04-briefs/<canal>-<slug>.md`, seguindo o template
   completo de `REFERENCIA.md`.
8. Execute novamente `inboundfy-anti-slop` no marco A3 sobre o brief e registre
   o ciclo em `06-auditoria/anti-slop-03-estrategia-brief.md`.
9. Encaminhe para `inboundfy-planejamento`.

#### Saída

Um arquivo por peça em `04-briefs/<canal>-<slug>.md`, dentro do diretório do
pacote; ou, em peça avulsa fora de pacote, o brief é passado diretamente
para `inboundfy-planejamento` sem persistência em disco, se o usuário não tiver
pacote de trabalho aberto.

#### Validação

- Todo brief tem canal, público, objetivo, ângulo e condição de aprovação
  preenchidos.
- Restrições de marca e vetos aplicáveis estão explícitos no brief.
- Todo brief comercial declara a estrutura persuasiva escolhida (ou justifica
  a ausência); nenhuma peça comercial sai sem essa escolha registrada.
- Nenhum brief foi criado para oportunidade sem aprovação manual ou seleção
  automática registrada por `inboundfy-iniciar`.
- O brief foi submetido ao marco A3 e não contém ângulo genérico, persona
  nominal ou CTA sem próxima ação.

#### Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Editar um brief já existente altera apenas os campos indicados pelo pedido
atual, preservando o restante.

### Referência da etapa

#### REFERENCIA.md; inboundfy-planejamento

##### Template de brief completo

```markdown

#### Brief; <canal>; <slug>

- **Formato:** <post, artigo, e-mail, roteiro, etc.>
- **Público-alvo:** <persona de context/publico.md>
- **Objetivo:** <o que a peça precisa alcançar; não confundir com tema>
- **Ângulo:** <recorte específico, herdado da oportunidade aprovada>
- **Ativos de apoio:** <lista de itens de ativos.md usados nesta peça>
- **Restrições de voz:** <de context/marca-voz.md, se houver algo específico para esta peça>
- **Vetos aplicáveis:** <de context/proibicoes.md, se relevante para o tema>
- **Estrutura persuasiva:** <AIDA | PAS | PASTOR | nenhuma; com uma frase por bloco, ver ESTRUTURAS-PERSUASIVAS.md>
- **regra de pronto:** <o que precisa estar presente para a peça ser considerada completa>
```

##### Exemplo preenchido (fictício)

```markdown

#### Brief; email; nutricao-migracao-estoque

- **Formato:** e-mail de nutrição, etapa 2 de uma sequência de onboarding
- **Público-alvo:** gestor de pequeno varejo, primeiro mês de uso
- **Objetivo:** reduzir cancelamento por medo de migração de estoque
- **Ângulo:** mostrar que a importação de planilha é guiada, não manual
- **Ativos de apoio:** tese sobre migração, dado "6 em cada 10 tickets",
  objeção "estoque bagunçado" (ativos.md)
- **Restrições de voz:** tom direto, sem jargão técnico de banco de dados
- **Vetos aplicáveis:** nenhum específico além das proibições genéricas
- **Estrutura persuasiva:** PAS; Problema: medo de perder histórico de
  estoque ao migrar. Agitação: cliente que adia a migração acumula estoque
  desatualizado e erra pedido de compra. Solução: passo a passo guiado de
  importação, com suporte disponível na primeira tentativa.
- **regra de pronto:** e-mail com assunto, pré-header, corpo seguindo PAS,
  CTA único para iniciar a importação e achados verificáveis de copy tratados
  após leitura integral em `inboundfy-copy-editor`.
```

##### Checklist de qualidade

- [ ] Todo brief tem os 9 campos do template preenchidos ou explicitamente
      marcados como "não aplicável" com motivo.
- [ ] Ângulo é um recorte específico, não repete o tema genérico do pacote.
- [ ] Estrutura persuasiva está decidida e justificada por bloco, nunca
      deixada em branco quando o objetivo é comercial.
- [ ] regra de pronto é verificável (não "escreva bem"), com referência a
      validação objetiva.

##### Erros comuns

- Copiar o ângulo do plano de oportunidades sem detalhar o suficiente para
  a skill de canal não precisar improvisar estratégia.
- Marcar estrutura persuasiva como "PASTOR" sem preencher o que entra em
  cada um dos seis blocos; a escolha sem detalhamento não ajuda a skill de
  canal.
- Esquecer de registrar vetos aplicáveis quando o tema toca uma categoria
  sensível (ver `context/proibicoes.md`, seção de afirmações que exigem
  confirmação).

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-planejamento**, do grupo
**planejamento**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de planejamento 04 briefing dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de planejamento 04 briefing

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
entrada: acervo/0042-2026-09-14-planejamento-04-briefing/processado.md
pedido: aplicar a etapa de planejamento 04 briefing e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de planejamento 04 briefing

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

Use **inboundfy-planejamento** para executar esta função: Fase 4 do pipeline (METODOLOGIA.md). Transforma cada oportunidade aprovada em um brief formal por peça, com canal, formato, público, objetivo, ângulo, ativos de apoio e restrições de marca. Não escreve copy final.

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
