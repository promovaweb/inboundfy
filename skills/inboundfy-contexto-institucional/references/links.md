# Domínio links

## Contexto de links

Use esta skill quando o usuário informar, corrigir, substituir ou revisar uma
URL oficial, um perfil social, uma página de produto ou um destino de ação.
Este trabalho atualiza somente `.inboundfy/context/links.md`. Endereço físico,
registro legal e contato ficam sob `inboundfy-contexto-institucional`.

### Arquitetura de execução

Como skill de contexto, ela confirma as sentinelas antes de atualizar o
arquivo canônico. O trabalho segue o contrato compartilhado e usa a
referência específica desta pasta.

- [Preflight e fontes](../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](../REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **contexto**.

### Contexto exigido

Leia [REFERENCIA.md](../REFERENCIA.md), `AGENTS.md`, `.inboundfy/README.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/context/links.md`,
`.inboundfy/context/enderecos.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/aprendizado.md` e
`.inboundfy/framework/`. Confira `inboundfy doctor` antes e depois.

### Entrada esperada

Receba a URL, o nome do destino, o tipo de link, a pessoa que confirmou a
informação, a fonte e o alcance da alteração. Aceite uma atualização pontual
ou um lote de URLs relacionadas.

### Fluxo

1. Leia o arquivo atual e localize o destino informado.
2. Separe URL oficial, perfil social, página de campanha e referência externa.
3. Confirme que a URL usa `http://` ou `https://` e que o destino está claro.
4. Preserve registros existentes e atualize somente o alcance pedido.
5. Registre fonte, responsável e data da conferência.
6. Se a URL substituir outra, mantenha a informação anterior nas observações
   ou no histórico indicado pelo projeto.
7. Se o dado for endereço físico, registro legal ou contato, encaminhe para
   `inboundfy-contexto-institucional` sem duplicar o dado neste arquivo.
8. Entregue o caminho atualizado e sugira a próxima skill quando a alteração
   afetar uma peça, campanha ou calendário.

### Saída

Atualização de `.inboundfy/context/links.md` com a URL, seu tipo, destino,
situação, fonte, responsável e data. Devolva um resumo curto, o alcance
aplicado e as relações que precisam ser revistas.

### Validação

- A URL registrada é completa e começa com `http://` ou `https://`.
- O destino é único ou a diferença entre destinos está descrita.
- Perfil social, página permanente e URL de campanha estão separados.
- Endereço físico, dado legal e telefone não foram misturados neste arquivo.
- A fonte, a data e a pessoa responsável aparecem quando disponíveis.
- O arquivo anterior foi preservado quando houve substituição.
- Links usados por uma peça apontam para esta fonte canônica.

### Idempotência

Antes de escrever, compare destino, URL, situação e observações com o arquivo
atual. Não crie linha duplicada para a mesma combinação. Em nova execução,
aplique somente a alteração confirmada e preserve os registros sem relação
com o pedido.

### Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** resposta do usuário ou arquivo canônico do domínio;
- **transformação:** registrar, classificar e conferir URLs;
- **saída:** arquivo de links atualizado e registro da alteração;
- **handoff:** setup, orquestrador ou skill que depende da URL.

## Referência do domínio

### Referência de links oficiais

#### Template

Use `.inboundfy/context/links.md` como fonte canônica para URLs mantidas pela
empresa. Cada registro deve informar o destino, a categoria, a situação e a
origem da confirmação.

```yaml
id: LNK-0001
tipo: perfil-social
nome: LinkedIn oficial
url: https://exemplo.com/perfil
situacao: ativo
fonte: pessoa responsável ou página oficial
conferido_em: 2026-09-15
```

#### Exemplo

Pedido: “Atualize o LinkedIn oficial e retire o perfil antigo.”

Resultado:

```markdown
#### Redes sociais oficiais

- **LinkedIn:** https://exemplo.com/novo-perfil

#### Registro de conferência

- **Última conferência:** 2026-09-15
- **Pessoa responsável:** Nome da pessoa
- **Fonte da confirmação:** mensagem do usuário
- **Observações:** perfil anterior substituído nesta data.
```

#### Checklist

- [ ] A URL foi recebida de uma fonte do projeto.
- [ ] O tipo do link está claro.
- [ ] A URL começa com `http://` ou `https://`.
- [ ] O destino não duplica outro registro.
- [ ] A data e a pessoa responsável foram anotadas quando disponíveis.
- [ ] O dado físico ou legal foi encaminhado para `enderecos.md`.
- [ ] Peças e campanhas relacionadas podem apontar para o novo caminho.

#### Erros comuns

- Misturar endereço de escritório com URL de perfil social.
- Registrar uma URL de campanha como página permanente.
- Alterar vários destinos sem autorização para o lote.
- Apagar uma URL anterior sem deixar uma nota de substituição.
- Usar um link externo de pesquisa como se fosse um canal oficial.

#### Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-contexto-institucional**,
do grupo **contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../../_shared/05-contexto-editorial.md).

#### Contrato específico

- **Função:** manter URLs oficiais e destinos de ação do projeto.
- **Entrada mínima:** resposta do usuário ou arquivo canônico do domínio.
- **Saída mínima:** arquivo de links atualizado e registro da alteração.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

#### Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

#### Especificação operacional

##### Quando usar

Use **inboundfy-contexto-institucional** para executar esta função: Mantém a fonte canônica de URLs oficiais, perfis sociais, páginas de oferta e destinos de conversão usados pelo projeto Inboundfy.

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
entrada: .inboundfy/context/links.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-contexto-institucional
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/context/links.md
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
