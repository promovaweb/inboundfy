---
name: inboundfy-contexto-institucional
description: >
  Mantém os dados institucionais, as pessoas, os endereços, os links oficiais
  e o glossário do projeto em arquivos canônicos separados. Use para registrar
  ou corrigir fatos da empresa antes de qualquer produção de conteúdo.
---

# Inboundfy Contexto Institucional

Skill agrupadora dos domínios que identificam a empresa e seus pontos oficiais
de contato. Os arquivos de dados permanecem separados para facilitar a leitura
e a manutenção pelo usuário.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos.

## Arquitetura de execução

Esta skill confirma as sentinelas antes de alterar qualquer arquivo. O domínio
é escolhido pelo pedido do usuário e a instrução detalhada é carregada da
referência interna correspondente.

- [Preflight e fontes](../../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../../_shared/03-interacao-e-handoff.md): conduza a confirmação do domínio e entregue o próximo passo.
- [Validação e retomada](../../_shared/04-validacao-e-retomada.md): revise a alteração e preserve o histórico.
- [Contexto editorial](../../_shared/05-contexto-editorial.md): aplique voz, personas, glossário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) e depois a referência interna do
domínio: `references/empresa.md`, `pessoas.md`, `enderecos.md`, `links.md` ou
`glossario.md`. O grupo desta skill é **contexto**.

## Contexto exigido

- `.inboundfy/context/empresa.md`, para a identidade institucional;
- `.inboundfy/context/pessoas.md`, quando o pedido mencionar uma pessoa;
- `.inboundfy/context/enderecos.md` e `.inboundfy/context/links.md`, para contatos e destinos oficiais;
- `.inboundfy/context/glossario.md`, para grafia e termos aprovados.

## Entrada esperada

Uma resposta do usuário, uma correção, um documento institucional ou um link
que forneça dados para um dos cinco domínios deste grupo.

## Fluxo

1. Identifique o domínio principal da entrada: empresa, pessoas, endereços,
   links ou glossário.
2. Leia o arquivo canônico atual e a referência interna do domínio escolhido.
3. Separe dado confirmado, preferência de comunicação e pergunta aberta.
4. Grave somente o domínio indicado, preservando as demais seções e a origem
   de cada informação.
5. Quando a mudança afetar grafia oficial, atualize também o glossário após
   confirmação do usuário.
6. Relate o caminho alterado, o resumo da mudança e o próximo fluxo que pode
   consumir o contexto.

## Saída

Um ou mais arquivos atualizados em `.inboundfy/context/`, com a fonte e o
alcance da alteração registrados.

## Validação

- O arquivo canônico correto foi usado.
- Nenhum dado foi inventado a partir de um link ou documento.
- Seções não relacionadas permaneceram intactas.
- Links, contatos e grafias oficiais foram conferidos no glossário quando aplicável.
- A alteração aponta para a origem e para a próxima skill.

## Idempotência

Uma nova execução atualiza somente os campos mencionados pelo usuário. O mesmo
pedido não cria linhas duplicadas nem modifica domínios não selecionados.

## Responsabilidade do grupo

Mantenha o registro institucional separado por domínio. Grave fatos confirmados
e preserve as respostas anteriores antes de incorporar uma nova informação.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** resposta, documento ou link ligado ao pedido;
- **transformação:** atualização do domínio canônico selecionado;
- **saída:** arquivo de contexto com origem e alcance;
- **handoff:** setup, orquestrador ou skill que consome o domínio atualizado.
