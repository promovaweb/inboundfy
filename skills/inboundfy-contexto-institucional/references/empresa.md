# Domínio empresa

## Inboundfy Contexto; Empresa

Mantém a identidade institucional e o glossário de grafia oficial. Não
escreve conteúdo público; apenas registra o fato que outras skills vão
consumir.

### Escopo

Cobre `context/empresa.md` e `context/glossario.md`. Não cobre pessoas
(`inboundfy-contexto-institucional`), produtos (`inboundfy-contexto-oferta`) nem
preço (`inboundfy-contexto-oferta`).

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

Nenhum outro arquivo de `context/` é pré-requisito. Esta skill é uma das
bases que as demais consultam depois.

### Entrada esperada

Uma correção, um dado novo, ou um material bruto (site institucional,
apresentação, documento) que o usuário quer transformar em dado estruturado.

### Fluxo

1. Leia `context/empresa.md` e `context/glossario.md` atuais para não
   duplicar nem contradizer o que já existe sem confirmação do usuário.
2. Se a entrada for material bruto, extraia candidatos a preenchimento e
   apresente ao usuário para confirmação antes de gravar; nunca grave
   inferência não confirmada como fato. Use o roteiro de entrevista de
   `REFERENCIA.md` para conduzir perguntas quando faltar dado.
3. Atualize apenas os campos indicados, preservando a estrutura de seções do
   template.
4. Quando o novo dado divergir de algo já publicado em outro artefato do
   projeto, sinalize a divergência ao usuário (ver precedência em
`CONTEXTO.md`); não corrija o artefato publicado sozinha nesta
   skill.
5. Ao criar ou confirmar grafia de marca, produto, ferramenta ou sigla,
   registre a linha correspondente em `context/glossario.md`.

### Saída

Atualização de `context/empresa.md` e/ou `context/glossario.md`.

### Validação

- Checklist de completude de `REFERENCIA.md` cumprido para os campos
  informados.
- Todo campo preenchido tem origem rastreável (resposta do usuário ou
  material fornecido), nunca suposição da skill.
- Nenhuma seção do template foi removida.
- Divergência com artefato publicado foi sinalizada, não silenciada.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

### Idempotência

Atualiza apenas os campos indicados pelo usuário na execução atual. Não
reescreve o arquivo inteiro nem normaliza campos que não foram mencionados.

## Referência do domínio

### REFERENCIA.md; inboundfy-contexto-institucional

Roteiro de entrevista, exemplo preenchido e checklist para `context/empresa.md`
e `context/glossario.md`.

#### Roteiro de entrevista

1. "Qual é o nome oficial (razão social ou nome legal) e o nome de marca que
   vocês usam no dia a dia?"
2. "Qual foi o ano de fundação da empresa, e em qual setor ou mercado ela atua?"
3. "Se eu tivesse que explicar em duas ou três frases o que a empresa faz e
   para quem, o que eu diria?" → vira o texto de "Missão e o que a empresa
   faz", sempre em prosa, nunca bullet solto.
4. "Como a empresa ganha dinheiro; venda de produto, assinatura, serviço,
   licença?"
5. "Quais são de dois a quatro diferenciais reais? Para cada um, o que prova
   que é verdade (não uma afirmação vaga)?"
6. "Existe algum marco (ano de lançamento, marco de clientes, mudança de
   direção) que valeria citar num 'sobre nós'?"
7. "O que a empresa explicitamente não faz, não vende ou não promete, que as
   pessoas às vezes assumem que ela faz?"
8. "Existe algum termo, nome de produto ou sigla que tem grafia oficial
   específica?" → alimenta `context/glossario.md`.

#### Exemplo preenchido (fictício; "Estoquely")

```markdown
### Empresa

#### Identidade

- **Nome oficial:** Estoquely Tecnologia Ltda.
- **Nome de marca:** Estoquely
- **Site:** https://exemplo-estoquely.com.br
- **Ano de fundação:** 2021
- **Setor / mercado:** software de gestão de estoque para varejo de pequeno porte

#### Missão e o que a empresa faz

A Estoquely existe porque dona de loja pequena controla estoque em caderno
ou planilha até vender um produto que não tinha mais; e só
descobre isso na hora da entrega. A empresa constrói um sistema simples de
controle de estoque que roda no celular, pensado para quem nunca usou
software de gestão antes.

#### Modelo de negócio

Assinatura mensal por loja, com planos que variam pelo número de produtos
cadastrados e usuários simultâneos.

#### Diferenciais reais

- Cadastro de produto por foto, sem digitação manual; prova: tempo
  médio de cadastro de 40 segundos por item, medido em teste com 30 lojistas.
- Funciona offline e sincroniza depois; prova: testado em loja sem
  internet estável em zona rural.

#### Marcos e histórico relevante

- 2021; lançamento da primeira versão, testada com 12 lojas piloto.
- 2023; 4.000 lojas ativas na plataforma.

#### Restrições institucionais

- Não faz emissão de nota fiscal (integra com sistemas que fazem isso).
- Não vende hardware (leitor de código de barras, impressora).
```

#### Checklist de completude

- [ ] Nome oficial e nome de marca preenchidos.
- [ ] Missão escrita em prosa (não lista), com quem a empresa atende e por
      quê.
- [ ] Modelo de negócio claro o suficiente para uma peça institucional
      explicar como a empresa ganha dinheiro.
- [ ] Ao menos um diferencial com prova (não frase vaga tipo "qualidade
      superior").
- [ ] Ao menos uma restrição institucional registrada.
- [ ] Glossário tem entrada para o nome da marca e produtos, se a grafia não
      for óbvia.

#### Erros comuns

- Preencher "Missão" com frase de efeito de marketing em vez de explicação
  concreta de o que a empresa resolve.
- Registrar diferencial sem prova ("melhor atendimento do mercado");   sempre pergunte "o que comprova isso?" antes de gravar.
- Esquecer de perguntar sobre restrições; sem isso, uma skill de canal pode
  prometer algo que a empresa não entrega.
- Confundir este arquivo com `context/produtos.md`: aqui é a empresa como
  entidade, não a descrição funcional de cada produto.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-institucional**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** executar a capacidade de contexto empresa dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Template de operação

```markdown

### Registro de contexto empresa

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
skill: inboundfy-contexto-institucional
grupo: contexto
entrada: acervo/0042-2026-09-14-contexto-empresa/processado.md
pedido: aplicar a etapa de contexto empresa e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

##### Saída ilustrativa

```markdown

### Registro de contexto empresa

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

- Executar **inboundfy-contexto-institucional** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

#### Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

#### Especificação operacional

##### Quando usar

Use **inboundfy-contexto-institucional** para executar esta função: Preenche e mantém context/empresa.md e context/glossario.md. Ative quando o usuário fornecer ou corrigir dado institucional; nome, missão, modelo de negócio, diferenciais, marcos, restrições; ou grafia oficial de termos.

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
skill: inboundfy-contexto-institucional
grupo: contexto
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/context/empresa.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-institucional
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/empresa.md
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
