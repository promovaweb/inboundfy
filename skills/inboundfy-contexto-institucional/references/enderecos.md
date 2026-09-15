# Domínio enderecos

## Inboundfy Contexto; Endereços e Dados Oficiais

Mantém dado institucional sensível: endereço, registro legal e contatos
oficiais, usado em rodapé, página de contato, termos legais e assinatura de
e-mail. URLs oficiais e perfis sociais ficam em `context/links.md`, mantido
por `inboundfy-contexto-institucional`.

### Escopo

Cobre exclusivamente `context/enderecos.md`.

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

Endereço físico, número de registro legal ou contato oficial, fornecido
diretamente pelo usuário.

### Fluxo

1. Leia `context/enderecos.md` atual.
2. Trate todo dado deste arquivo como sensível: exija que a informação venha
   diretamente do usuário responsável pelo dado, nunca de inferência ou de
   material de terceiro sem confirmação. Use o roteiro de entrevista de
   `REFERENCIA.md`.
3. Registre o tipo de endereço (sede, escritório comercial, endereço fiscal)
   quando houver mais de um endereço.
4. Ao registrar múltiplos endereços (filiais, escritórios por país), repita o
   bloco de seção, sem sobrescrever o endereço principal.
5. Se o usuário trouxer uma URL ou perfil social, encaminhe para
   `inboundfy-contexto-institucional`.
6. Sinalize ao usuário quando um dado aqui divergir de algo já publicado em
   rodapé, página de contato ou termos; a correção do artefato publicado é
   responsabilidade do usuário ou de skill de canal, não desta skill.

### Saída

Atualização de `context/enderecos.md`.

### Validação

- Checklist de completude de `REFERENCIA.md` cumprido.
- Todo dado tem confirmação direta do usuário responsável.
- Tipo de endereço está identificado quando há mais de um.
- Divergência com artefato publicado foi sinalizada.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

### Idempotência

Atualiza apenas o endereço ou contato indicado, preservando os demais.

## Referência do domínio

### REFERENCIA.md; inboundfy-contexto-institucional

Roteiro de entrevista, exemplo preenchido e checklist para
`context/enderecos.md`. Dado sensível: só grave com confirmação direta do
responsável pela informação.

#### Roteiro de entrevista

1. "Qual é o endereço completo da sede (ou endereço fiscal, se for
   diferente)?"
2. "Existe mais de um endereço; filial, escritório em outro país? Qual o
   tipo de cada um (sede, escritório comercial, endereço fiscal)?"
3. "Qual é a razão social e o número de registro legal (CNPJ ou
   equivalente)?"
4. "Existe regime tributário relevante para citar em copy institucional?"
5. "Qual é o e-mail institucional e telefone/WhatsApp oficial?"
6. "Onde estão os canais de suporte oficiais?"
7. "Quais são os perfis oficiais em redes e diretórios que devem aparecer
   em rodapé ou página de contato?"

#### Exemplo preenchido (fictício; "Estoquely")

```markdown
#### Endereço principal

- **Endereço completo:** Rua Fictícia, 123, Sala 4, Bairro Exemplo, Belo
  Horizonte - MG, 30000-000, Brasil
- **Tipo:** sede

#### Registro legal

- **Razão social:** Estoquely Tecnologia Ltda.
- **Registro/CNPJ:** 00.000.000/0001-00 (exemplo ilustrativo)
- **Regime tributário:** Simples Nacional

#### Contatos oficiais

- **E-mail institucional:** contato@exemplo-estoquely.com.br
- **Telefone/WhatsApp oficial:** (31) 90000-0000
- **Canais de suporte:** central de ajuda em exemplo-estoquely.com.br/ajuda

#### Perfis oficiais em redes e diretórios

- Instagram; instagram.com/exemplo.estoquely
```

#### Checklist de completude

- [ ] Endereço principal completo, com tipo identificado.
- [ ] Razão social e registro legal preenchidos, se a empresa tiver CNPJ ou
      equivalente.
- [ ] Contato oficial (e-mail e/ou telefone) presente para uso em página de
      contato e rodapé.
- [ ] Cada endereço adicional (filial) tem seu próprio bloco, sem
      sobrescrever o principal.

#### Erros comuns

- Aceitar endereço ou CNPJ vindo de material de terceiro (ex.: uma listagem
  online) sem confirmação direta do responsável; dado sensível exige
  confirmação de quem realmente sabe o dado.
- Publicar um dado deste arquivo direto numa peça sem checar se ele ainda
  está atualizado; sempre confira a data da última atualização quando
  disponível.
- Sobrescrever o endereço principal ao adicionar uma filial; sempre
  adicione um novo bloco, nunca substitua o existente.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-institucional**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** executar a capacidade de contexto enderecos dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Template de operação

```markdown

### Registro de contexto enderecos

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
entrada: acervo/0042-2026-09-14-contexto-enderecos/processado.md
pedido: aplicar a etapa de contexto enderecos e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

##### Saída ilustrativa

```markdown

### Registro de contexto enderecos

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

Use **inboundfy-contexto-institucional** para executar esta função: Preenche e mantém context/enderecos.md. Ative quando o usuário informar ou corrigir endereço físico, registro legal ou contato oficial. Trata dado sensível; confirme a fonte antes de gravar.

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
entrada: .inboundfy/context/enderecos.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-institucional
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/enderecos.md
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
