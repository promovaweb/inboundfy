# Domínio ofertas

## Inboundfy Contexto; Ofertas

Mantém o cadastro de planos e ofertas comerciais. Nenhuma skill de canal deve
citar preço, inclusão de plano ou condição comercial sem ler este arquivo
primeiro; é o único lugar do Inboundfy onde esse dado é fonte de verdade.

### Escopo

Cobre exclusivamente `context/ofertas.md`. Não cobre descrição funcional de
produto (`inboundfy-contexto-oferta`).

### Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

### Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](../REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **contexto**.

### Contexto exigido

`context/produtos.md` e/ou `context/servicos.md`, para vincular cada oferta a
algo que já existe no catálogo. Se a oferta se referir a um produto ou
serviço ainda não cadastrado, acione `inboundfy-contexto-oferta` primeiro.

### Entrada esperada

Preço novo, correção de preço, novo plano, ou tabela comparativa fornecida
pelo usuário.

### Fluxo

1. Leia `context/ofertas.md` atual para localizar o plano a atualizar ou
   confirmar que é uma entrada nova.
2. Exija do usuário: valor, periodicidade, o que está incluso, o que não está
   incluso e público-alvo do plano. Nunca preencha preço por estimativa. Use
   o roteiro de entrevista de `REFERENCIA.md`.
3. Registre a data da confirmação do preço no campo correspondente; isso
   permite que qualquer skill de auditoria sinalize dado antigo.
4. Ao existir dois ou mais planos, atualize a tabela comparativa ao final do
   arquivo.
5. Sinalize ao usuário quando o preço novo divergir de um valor já usado em
   conteúdo publicado, para correção manual daquele conteúdo (ver precedência
   em `CONTEXTO.md`).

### Saída

Atualização de `context/ofertas.md`.

### Validação

- Checklist de completude de `REFERENCIA.md` cumprido para cada plano.
- Todo plano tem preço, periodicidade, inclusões e data de confirmação
  preenchidos; nunca placeholder deixado por engano.
- Nenhum valor foi estimado ou herdado de suposição.
- Divergência com conteúdo publicado foi sinalizada ao usuário.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

### Idempotência

Atualiza apenas o plano indicado. Planos não mencionados na execução atual
permanecem inalterados.

## Referência do domínio

### REFERENCIA.md; inboundfy-contexto-oferta

Roteiro de entrevista, exemplo preenchido e checklist para `context/ofertas.md`.

#### Roteiro de entrevista

1. "Qual produto ou serviço (já cadastrado em `context/produtos.md` ou
   `context/servicos.md`) esse plano representa?"
2. "Qual é o preço exato e a periodicidade (mensal, anual, único)? Se não
   houver preço público, registro como 'sob consulta'?"
3. "O que está incluso nesse plano, especificamente?"
4. "O que não está incluso; o que alguém nesse plano precisaria pagar a
   mais ou não teria acesso?"
5. "Para qual perfil de cliente esse plano é pensado?"
6. "Existe condição de upgrade ou downgrade entre planos?"
7. "Quando foi a última vez que esse preço foi confirmado? (data exata,
   para permitir auditoria de dado desatualizado)"

#### Exemplo preenchido (fictício; "Estoquely")

```markdown
### Ofertas

#### Essencial

- **Preço:** R$ 79/mês
- **Periodicidade:** mensal
- **O que está incluso:** até 200 produtos cadastrados, 1 usuário, alerta de
  estoque baixo.
- **O que não está incluso:** múltiplos usuários, relatório de giro de
  estoque.
- **Público-alvo do plano:** loja com até 3 funcionários e estoque pequeno.
- **Condição de upgrade/downgrade:** upgrade a qualquer momento, com
  cobrança proporcional aos dias restantes do ciclo.
- **Data da última confirmação:** 2026-03-01.

#### Crescimento

- **Preço:** R$ 159/mês
- **Periodicidade:** mensal
- **O que está incluso:** produtos ilimitados, até 3 usuários, relatório de
  giro de estoque, suporte prioritário.
- **O que não está incluso:** integração com emissor de nota fiscal (via
  parceiro externo, cobrado à parte).
- **Público-alvo do plano:** loja com mais de 3 funcionários ou mais de uma
  frente de venda.
- **Condição de upgrade/downgrade:** downgrade só na renovação do ciclo
  seguinte.
- **Data da última confirmação:** 2026-03-01.

#### Comparativo rápido

| Plano | Preço | Público | Diferencial principal |
| --- | --- | --- | --- |
| Essencial | R$ 79/mês | loja pequena, 1 usuário | alerta de estoque baixo |
| Crescimento | R$ 159/mês | loja com múltiplas frentes | relatório de giro + suporte prioritário |
```

#### Checklist de completude

- [ ] Todo plano tem preço (ou "sob consulta" explícito) e periodicidade.
- [ ] "O que não está incluso" preenchido; evita promessa fora do plano.
- [ ] Data de última confirmação presente em cada plano.
- [ ] Comparativo preenchido quando existirem 2 ou mais planos.
- [ ] Cada plano referencia um produto/serviço que existe em
      `context/produtos.md` ou `context/servicos.md`.

#### Erros comuns

- Estimar preço "no mesmo padrão do mercado" quando o usuário não informou
; nunca preencha preço sem confirmação direta.
- Deixar a data de confirmação em branco; sem ela, uma auditoria não
  consegue saber se o preço está desatualizado.
- Registrar plano sem vínculo a um produto ou serviço cadastrado; se o
  produto ainda não existe em `context/produtos.md`, cadastre-o primeiro.
- Ignorar divergência com preço já usado em página publicada; sempre
  sinalize ao usuário quando o valor novo for diferente do que já está em
  circulação.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-oferta**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** executar a capacidade de contexto ofertas dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Template de operação

```markdown

### Registro de contexto ofertas

#### Resultado

{Conteúdo específico da etapa.}

#### Pendências

- {pergunta ou "nenhuma"}

#### Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

#### Exemplo operacional completo

##### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-contexto-oferta
grupo: contexto
entrada: acervo/0042-2026-09-14-contexto-ofertas/processado.md
pedido: aplicar a etapa de contexto ofertas e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

##### Saída ilustrativa

```markdown

### Registro de contexto ofertas

#### Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

#### Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

#### Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

#### Erros comuns adicionais

- Executar **inboundfy-contexto-oferta** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

#### Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

#### Especificação operacional

##### Quando usar

Use **inboundfy-contexto-oferta** para executar esta função: Preenche e mantém context/ofertas.md. Fonte única de verdade para preço, plano e condição comercial. Ative sempre que o usuário informar ou corrigir preço, inclusão de plano ou condição comercial.

O grupo **contexto** trabalha com estes campos mínimos:

- **arquivo canônico:** preencher com dado ligado ao pedido.
- **fatos:** preencher com dado ligado ao pedido.
- **preferências:** preencher com dado ligado ao pedido.
- **fonte:** preencher com dado ligado ao pedido.
- **alteração:** preencher com dado ligado ao pedido.

##### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-contexto-oferta
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/ofertas.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-oferta
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/ofertas.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

##### Perguntas de conferência

1. A entrada pertence ao grupo **contexto** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

##### Referências de execução

Leia, na ordem necessária:

- `CONTEXTO.md`
- `docs/method/02-contexto-fontes-e-precedencia.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
