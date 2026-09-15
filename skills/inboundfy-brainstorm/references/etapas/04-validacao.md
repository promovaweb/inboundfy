# Referências internas

## Etapa 04 validacao

### Inboundfy Brainstorm 04; Validação

Fecha o brainstorm e autoriza seu uso pelo pipeline. Não produz a peça final.

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
artefato. O grupo desta skill é **brainstorm**.

#### Contexto exigido

- `ESCRITA.md` e `context/marca-voz.md`.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`.
- Todos os arquivos de `context/` citados como origem no documento.

#### Entrada esperada

`brainstorm.md` com status `em-validacao`.

#### Fluxo

1. Ler o arquivo inteiro e a rubrica de `REFERENCIA.md`.
2. Conferir todas as seções obrigatórias de `templates/brainstorm.md`.
3. Abrir cada fonte e confirmar que ela apoia a afirmação associada.
4. Comparar fatos internos com os arquivos de origem; reprovar divergência.
5. Acionar `inboundfy-copy-editor` na prosa. Corrigir trechos abaixo de 90% e
   reavaliar.
6. Conferir linha a linha `context/proibicoes.md` e
   `context/estruturas-proibidas.md`.
7. Devolver para entrevista quando faltar foco, para pesquisa quando faltar
   prova ou para síntese quando faltar clareza. Reexecutar a validação
   depois da correção.
8. Quando aprovado, marcar `status: "aprovado"` e registrar a execução no
   histórico.

#### Saída

O mesmo `brainstorm.md`, aprovado ou com retorno explícito para uma fase.

#### Validação

- Nenhum fato externo ficou sem fonte.
- Hipóteses e suposições estão identificadas.
- A prosa atingiu 90% em `inboundfy-copy-editor`.
- Nenhuma violação dos dois arquivos de proibições permanece.
- Todas as oportunidades apontam ativos existentes.

#### Responsabilidade do grupo

Transforme ideia em direção trabalhável. Separe fatos, hipóteses, tese, recorte, perguntas e oportunidades antes de encaminhar o pacote.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** brainstorm
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

#### Idempotência

Cada nova auditoria atualiza o status e acrescenta linha ao histórico, sem
apagar resultados anteriores.

### Referência da etapa

#### REFERENCIA.md; inboundfy-brainstorm

##### Rubrica

| Dimensão | Aprova quando | Retorno |
| --- | --- | --- |
| Foco | Tese, audiência e limite estão claros | Entrevista |
| prova | Fatos externos possuem fonte adequada | Pesquisa |
| Síntese | Argumentos explicam mecanismo e consequência | Síntese |
| Escrita | Todo parágrafo recebe pelo menos 90% | Síntese |
| Proibições | Nenhuma ocorrência real permanece | Síntese |
| Distribuição | Cada oportunidade usa ativos e ângulo próprios | Síntese |

##### Exemplo de histórico

```markdown
| 2026-07-30 | aprovado | nenhum |
```

##### Checklist

- [ ] O arquivo inteiro foi lido.
- [ ] Links foram abertos.
- [ ] Os arquivos de proibições foram comparados linha a linha.
- [ ] O status corresponde ao resultado real.

##### Erros comuns

- Aprovar porque o checklist está marcado sem ler a prosa.
- Corrigir falta de prova com linguagem mais vaga.
- Apagar uma reprovação anterior do histórico.

##### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-brainstorm**, do grupo
**brainstorm**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../../_shared/05-contexto-editorial.md).

##### Contrato específico

- **Função:** executar a capacidade de brainstorm 04 validacao dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

##### Template de operação

```markdown

#### Registro de brainstorm 04 validacao

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
skill: inboundfy-brainstorm
grupo: brainstorm
entrada: acervo/0042-2026-09-14-brainstorm-04-validacao/processado.md
pedido: aplicar a etapa de brainstorm 04 validacao e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

###### Saída ilustrativa

```markdown

#### Registro de brainstorm 04 validacao

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

- Executar **inboundfy-brainstorm** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

##### Guia específico do grupo

Transforme ideia em direção trabalhável. Separe fatos, hipóteses, tese, recorte, perguntas e oportunidades antes de encaminhar o pacote.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

##### Especificação operacional

###### Quando usar

Use **inboundfy-brainstorm** para executar esta função: Fase 04 do brainstorm. Audita brainstorm.md contra o modelo, as fontes, ESCRITA.md, context/marca-voz.md, context/proibicoes.md e context/estruturas-proibidas.md; corrige escrita ou devolve à fase capaz de reparar falta factual ou de foco.

O grupo **brainstorm** trabalha com estes campos mínimos:

- **ideia:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **hipóteses:** preencher com dado ligado ao pedido.
- **tese:** preencher com dado ligado ao pedido.
- **próximo passo:** preencher com dado ligado ao pedido.

###### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-brainstorm
grupo: brainstorm
pedido: executar a função desta skill sobre o material selecionado
entrada: brainstorms/2026-09-14-ideia/ideia.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-brainstorm
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - brainstorms/2026-09-14-ideia/ideia.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

###### Perguntas de conferência

1. A entrada pertence ao grupo **brainstorm** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

###### Referências de execução

Leia, na ordem necessária:

- `BRAINSTORM.md`
- `ESCRITA.md`
- `docs/method/05-artefatos-e-estados.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
