# Domínio produtos

## Inboundfy Contexto; Produtos e Serviços

Mantém o catálogo de produtos e serviços que podem virar tema de conteúdo ou
ser mencionados em uma peça. Não escreve copy de venda; registra o fato que
as skills de canal vão consumir para descrever produto ou serviço com
precisão.

### Escopo

Cobre `context/produtos.md` e `context/servicos.md`. Não cobre preço nem
condição comercial; isso é `inboundfy-contexto-oferta`.

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

Nenhum outro arquivo é pré-requisito.

### Entrada esperada

Um produto ou serviço novo, uma correção de funcionalidade, um material bruto
(documentação, changelog, apresentação de produto) a estruturar.

### Fluxo

1. Leia `context/produtos.md` e `context/servicos.md` atuais para não
   duplicar uma entrada existente.
2. Classifique a entrada: produto (algo que o usuário final opera) ou serviço
   (algo entregue por pessoas da empresa). Na dúvida, pergunte ao usuário.
3. Se a entrada for material bruto, extraia definição, público, problema
   resolvido, mecanismo e limites reais, e confirme antes de gravar; nunca
   infira funcionalidade que o material não confirma. Use o roteiro de
   entrevista de `REFERENCIA.md`.
4. Registre explicitamente o que o produto ou serviço **não faz**, para que
   nenhuma peça futura prometa algo fora do escopo real.
5. Grave a entrada no arquivo correto, seguindo a estrutura de bloco do
   template.

### Saída

Atualização de `context/produtos.md` e/ou `context/servicos.md`.

### Validação

- Checklist de completude de `REFERENCIA.md` cumprido para a entrada.
- Toda funcionalidade registrada tem origem rastreável (documentação,
  confirmação do usuário), nunca suposição da skill.
- O campo de limite real está preenchido sempre que o usuário indicar um.
- Nenhuma entrada existente foi removida sem pedido explícito.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

### Idempotência

Atualiza apenas o produto ou serviço indicado na execução atual, preservando
as demais entradas inalteradas.

## Referência do domínio

### REFERENCIA.md; inboundfy-contexto-oferta

Roteiro de entrevista, exemplo preenchido e checklist para `context/produtos.md`
e `context/servicos.md`.

#### Roteiro de entrevista

1. "É um produto (o cliente final opera sozinho) ou um serviço (alguém da
   empresa entrega)?"
2. "Em uma frase, o que esse produto ou serviço é?"
3. "Para quem ele é pensado; que perfil de cliente usa isso?"
4. "Que problema concreto ele resolve? (não o benefício abstrato, o problema
   real que existia antes)"
5. "Como ele funciona, resumido, sem jargão de venda?"
6. "Quais são as duas ou três funcionalidades principais, e o que cada uma
   permite fazer na prática?"
7. "O que ele explicitamente não faz? Onde termina o escopo?"
8. "Qual é o estágio dele; desenvolvimento, beta, disponível,
   descontinuado?"
9. (Só para serviço) "Qual é o formato de entrega, a duração típica e existe
   pré-requisito do cliente?"

#### Exemplo preenchido (fictício; "Estoquely")

```markdown
### Produtos

#### Estoquely Core

- **O que é, em uma frase:** aplicativo de controle de estoque para loja
  física pequena, operado pelo celular.
- **Para quem é:** dono ou gerente de loja com até 10 funcionários, sem
  time de TI.
- **Problema que resolve:** perder venda por não saber que o produto tinha
  acabado, ou comprar demais por não saber o que já tinha em estoque.
- **Como funciona, resumido:** cadastro de produto por foto, baixa
  automática no estoque a cada venda registrada, alerta quando um item
  chega perto do fim.
- **Funcionalidades principais:**
  - Cadastro por foto; reconhece o produto e sugere categoria
  - Alerta de estoque baixo; avisa antes de faltar, não depois
- **Limites reais:** não emite nota fiscal, não controla estoque de mais de
  uma loja na mesma conta (recurso multi-loja está em desenvolvimento).
- **Estágio:** geral disponível.
- **Link oficial:** https://exemplo-estoquely.com.br/core
- **Termos que sempre acompanham o nome:** nenhum.
```

```markdown
### Serviços

#### Implantação Assistida

- **O que é entregue:** uma sessão remota de 1 hora para cadastrar os
  primeiros 50 produtos junto com o lojista.
- **Formato de entrega:** remoto, por videochamada.
- **Para quem é indicado:** lojista que nunca usou sistema de gestão antes.
- **O que não está incluso:** cadastro completo do estoque inteiro (só os
  primeiros itens, para o lojista aprender o processo).
- **Duração ou cadência típica:** sessão única de 1 hora, na primeira
  semana de assinatura.
- **Pré-requisito do cliente:** ter o celular com o aplicativo já instalado.
```

#### Checklist de completude

- [ ] Classificação correta entre produto e serviço.
- [ ] Problema que resolve é concreto, não um benefício abstrato.
- [ ] Ao menos duas funcionalidades (produto) ou escopo de entrega
      (serviço) descritas.
- [ ] Limite real / o que não está incluso está preenchido; campo mais
      importante para evitar promessa fora do escopo.
- [ ] Estágio atualizado (evita anunciar como disponível algo que ainda
      está em beta).

#### Erros comuns

- Descrever a funcionalidade com o mesmo texto de venda do site, sem
  mecanismo real; a skill de canal precisa entender como funciona, não só
  o discurso comercial.
- Deixar "o que não faz" em branco; esse é o campo que mais evita uma peça
  prometer algo inexistente.
- Cadastrar o mesmo item em produtos e serviços por dúvida; decida com o
  usuário antes de gravar; um SaaS que o cliente opera sozinho é produto,
  mesmo que venha com onboarding.
- Confundir preço e condição comercial com este arquivo; isso é
  `context/ofertas.md`.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-oferta**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** executar a capacidade de contexto produtos dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Template de operação

```markdown

### Registro de contexto produtos

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
entrada: acervo/0042-2026-09-14-contexto-produtos/processado.md
pedido: aplicar a etapa de contexto produtos e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

##### Saída ilustrativa

```markdown

### Registro de contexto produtos

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

Use **inboundfy-contexto-oferta** para executar esta função: Preenche e mantém context/produtos.md e context/servicos.md. Ative quando o usuário fornecer ou corrigir dado sobre um produto, funcionalidade ou serviço prestado; definição, público, funcionamento e limites reais.

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
entrada: .inboundfy/context/produtos.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-oferta
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/produtos.md
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
