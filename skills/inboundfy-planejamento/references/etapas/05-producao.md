# Referências internas

## Etapa 05 producao

### Inboundfy Produção

Sexta skill do pipeline. É a camada de roteamento entre o brief pronto
(`inboundfy-planejamento`) e a skill de canal que efetivamente escreve ou gera a
peça.

#### Escopo

Roteia e verifica pré-condição. A escrita e geração acontecem na skill de
canal, não aqui.

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

`context/canais.md`, para identificar a skill de redação e de imagem
correspondente ao canal do brief.

#### Entrada esperada

Um brief de `04-briefs/<canal>-<slug>.md`, ou um brief passado diretamente em
peça avulsa.

#### Fluxo

1. Leia o brief e identifique o canal.
2. Consulte `context/canais.md`, `SKILLS.md` e a tabela de roteamento de
   `REFERENCIA.md` para confirmar qual skill de redação (e, se aplicável, de
   imagem) atende esse canal.
3. Antes de acionar a skill de canal, percorra o checklist de pré-condição
   de `REFERENCIA.md`; confirme que ela vai ler `ESCRITA.md` e os arquivos
   de `context/` que declarar como exigidos; se a skill de canal sinalizar
   `context/` incompleto, pare e acione a skill de manutenção correspondente
   antes de prosseguir.
4. Se o brief declarar uma estrutura persuasiva (`ESTRUTURAS-PERSUASIVAS.md`
; AIDA, PAS, PASTOR ou FAB pontual), confirme que ela chega intacta à
   skill de canal; se o brief tiver objetivo comercial e nenhuma estrutura
   registrada, devolva para `inboundfy-planejamento` antes de acionar o canal.
5. Antes de acionar a skill de canal para uma peça longa, execute
   `inboundfy-anti-slop` no marco A4 sobre o outline, a abertura e a primeira
   unidade substancial. Registre `06-auditoria/anti-slop-04-rascunho.md`.
6. Acione a skill de redação do canal com o brief completo.
7. Depois da redação, execute `inboundfy-anti-slop` no marco A5 e registre
   `06-auditoria/anti-slop-05-peca.md` antes da validadora pareada.
8. Se o canal exigir imagem, acione a skill de imagem do canal depois do
   texto estar pronto, salvo quando o brief pedir imagem antes do texto.
9. Para cada asset produzido, acione a `inboundfy-validador-*` de mesmo
   sufixo da produtora, conforme `REFERENCIA.md`. Se houver reprovação,
   devolva o relatório à produtora pareada e repita produção e validação até
   aprovar ou encontrar impedimento factual que exija o usuário.
10. Encaminhe para `inboundfy-planejamento` somente assets com
   relatório individual aprovado.

#### Saída

Nenhum artefato próprio; o artefato final é produzido pela skill de canal
acionada. Esta skill apenas confirma o roteamento e a pré-condição de
contexto.

#### Validação

- A skill de canal acionada corresponde exatamente ao canal do brief, sem
  substituição por skill parecida de outro canal.
- Nenhuma skill de canal foi acionada com `context/` incompleto sem antes
  passar pela skill de manutenção correspondente.
- O resultado foi encaminhado para `inboundfy-planejamento`.
- Cada asset possui aprovação da validadora pareada.
- Os marcos A4 e A5 foram registrados quando aplicáveis.

#### Responsabilidade do grupo

Converta material aprovado em oportunidades, briefs, handoffs e auditoria. Não substitua a especialista que escreve ou monta o asset.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** planejamento
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Reacionar a produção para o mesmo brief não duplica o artefato final sem
pedido explícito de refação; confirme com o usuário antes de sobrescrever
uma peça já produzida para o mesmo brief.

### Referência da etapa

#### REFERENCIA.md; inboundfy-planejamento

##### Tabela de roteamento canal → skill especialista

| Canal | Skill de texto | Validadora de texto | Skill de imagem | Validadora de imagem |
| --- | --- | --- | --- | --- |
| Blog | `inboundfy-especialista-blog` | `inboundfy-validador-blog` | `inboundfy-especialista-blog-imagem` | `inboundfy-validador-blog-imagem` |
| E-mail | `inboundfy-especialista-email` | `inboundfy-validador-email` | N/A | N/A |
| Newsletter | `inboundfy-especialista-newsletter` | `inboundfy-validador-newsletter` | N/A | N/A |
| LinkedIn | `inboundfy-especialista-linkedin` | `inboundfy-validador-linkedin` | `inboundfy-especialista-linkedin-imagem` | `inboundfy-validador-linkedin-imagem` |
| Instagram | `inboundfy-especialista-instagram` | `inboundfy-validador-instagram` | `inboundfy-especialista-instagram-imagem` | `inboundfy-validador-instagram-imagem` |
| Vídeo | `inboundfy-especialista-video` | `inboundfy-validador-video` | `inboundfy-especialista-video-imagem` | `inboundfy-validador-video-imagem` |
| Ebook | `inboundfy-especialista-ebook` | `inboundfy-validador-ebook` | `inboundfy-especialista-ebook-imagem` | `inboundfy-validador-ebook-imagem` |
| Infográfico | `inboundfy-especialista-infografico` | `inboundfy-validador-infografico` | `inboundfy-especialista-infografico-imagem` | `inboundfy-validador-infografico-imagem` |
| Webinar | `inboundfy-especialista-webinar` | `inboundfy-validador-webinar` | `inboundfy-especialista-webinar-imagem` | `inboundfy-validador-webinar-imagem` |
| Changelog | `inboundfy-especialista-changelog` | `inboundfy-validador-changelog` | N/A | N/A |
| Podcast | `inboundfy-especialista-podcast` | `inboundfy-validador-podcast` | N/A | N/A |

Esta tabela espelha `SKILLS.md`; se os dois divergirem, `SKILLS.md` é a
fonte de verdade e esta tabela deve ser corrigida.

##### Checklist de pré-condição antes de acionar a skill de canal

- [ ] O brief tem canal, público, objetivo, ângulo e regra de pronto
      preenchidos (ver `REFERENCIA.md` de `inboundfy-planejamento`).
- [ ] Se o brief tem objetivo comercial, a estrutura persuasiva está
      declarada; caso contrário, devolva para briefing antes de rotear.
- [ ] Todo `context/` que a skill de canal alvo declara como exigido (ver
      seção "Contexto exigido" do `SKILL.md` dela) está preenchido para o
      dado que esta peça específica precisa.
- [ ] O caminho de saída (`canais/<canal>/<id>-<data>-<slug>/README.md`)
      está disponível e não conflita com um item já existente sem
      confirmação de refação.
- [ ] A validadora de mesmo sufixo foi incluída no roteamento e receberá
      asset, brief e materiais-fonte.

##### Exemplo de log de roteamento

```markdown
Brief: 04-briefs/email-nutricao-migracao-estoque.md
Canal identificado: email
Skill de texto acionada: inboundfy-especialista-email
Validadora acionada: inboundfy-validador-email
Skill de imagem acionada: nenhuma (canal sem imagem própria)
Pré-condição de contexto: OK (context/publico.md, context/marca-voz.md, context/proibicoes.md confirmados)
Validação individual: aprovada
Encaminhado para: inboundfy-planejamento
```

##### Erros comuns

- Acionar a skill de imagem de um canal que não tem par de imagem
  (e-mail, newsletter, changelog, podcast); confira a tabela antes de
  assumir que todo canal tem imagem.
- Rotear para uma skill de canal parecida por engano (ex.: confundir
  `inboundfy-especialista-video` com `inboundfy-especialista-video-imagem`).
- Acionar a skill de canal antes de confirmar que ela declarou o `context/`
  necessário como completo; isso empurra o problema para a auditoria em
  vez de resolver na origem.
- Encaminhar o asset à fase 6 sem aprovação da validadora de mesmo sufixo.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-planejamento**, do grupo
**planejamento**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de planejamento 05 producao dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de planejamento 05 producao

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
entrada: acervo/0042-2026-09-14-planejamento-05-producao/processado.md
pedido: aplicar a etapa de planejamento 05 producao e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de planejamento 05 producao

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

Use **inboundfy-planejamento** para executar esta função: Fase 5 do pipeline (METODOLOGIA.md). Roteia um brief aprovado para a skill de canal correta e garante que ela leu ESCRITA.md e o context/ exigido antes de escrever. Não escreve copy final nem gera imagem diretamente.

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
