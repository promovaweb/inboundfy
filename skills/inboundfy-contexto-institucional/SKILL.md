---
name: inboundfy-contexto-institucional
description: Mantém os dados institucionais em .inboundfy/context/ (empresa, pessoas, endereços, links e glossário) com fonte confirmada. Use quando a pessoa informar ou corrigir nome da empresa, porta-voz, CNPJ, WhatsApp oficial, endereço, site, perfil de rede social ou a grafia oficial de uma marca ou produto.
---

# Inboundfy Contexto: Institucional

Esta skill guarda os fatos que identificam a empresa: quem ela é, quem fala
por ela, onde ela está, quais endereços digitais são oficiais e como cada
nome se escreve. Ela não produz peça pública nem escolhe estratégia. Toda
skill de copy, SEO, imagem e validação lê esses arquivos antes de citar a
empresa, uma pessoa, um contato ou uma URL.

Oferta, preço e produto ficam com `inboundfy-contexto-oferta`. Voz e vetos
ficam com `inboundfy-contexto-marca`. Público-alvo fica com
`inboundfy-contexto-publico`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Na ausência de qualquer um, informe: "O setup do Inboundfy ainda não
foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup`
para preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos.
Quando um arquivo de `.inboundfy/context/` desta skill estiver ausente, acione
`inboundfy-setup` para restaurar o template; esta skill não cria o arquivo
por conta própria.

## Arquitetura de execução

A skill confirma as sentinelas, escolhe um domínio por vez e carrega a
referência interna desse domínio antes de gravar.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): confirme o domínio e entregue o próximo passo.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise a alteração e preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, glossário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 2 do fluxo e, em seguida, a
referência do domínio escolhido em `references/`. O grupo desta skill é
**contexto**.

## Quando usar e quando não usar

| Situação | Use esta skill? | Caminho certo |
| --- | --- | --- |
| A empresa mudou de nome de marca, site ou descrição | sim | domínio empresa |
| Entrou uma nova porta-voz ou autora do blog | sim | domínio pessoas |
| Mudou o WhatsApp oficial, o CNPJ ou o endereço fiscal | sim | domínio enderecos |
| O perfil do Instagram trocou de @ ou a landing de cadastro mudou | sim | domínio links |
| Um produto passou a se chamar "Estoquely Pro", com P maiúsculo | sim | domínio glossario |
| O preço do plano subiu | não | `inboundfy-contexto-oferta` |
| A marca quer parar de usar "solução" nos textos | não | `inboundfy-contexto-marca` |
| Chegou um depoimento de cliente | não | `inboundfy-contexto-depoimentos` |
| É preciso descrever a cliente ideal | não | `inboundfy-contexto-publico` |

## Contexto exigido

- `.inboundfy/context/empresa.md`, sempre, porque localiza a identidade do
  projeto;
- `.inboundfy/context/pessoas.md`, quando o pedido mencionar uma pessoa;
- `.inboundfy/context/enderecos.md`, para endereço, registro legal e contatos;
- `.inboundfy/context/links.md`, para site, redes e destinos de conversão;
- `.inboundfy/context/glossario.md`, para grafia de marcas, produtos e siglas;
- `.inboundfy/fontes-projeto.md` e a pasta `brand/`, quando existirem, para
  conferir divergência com manual de marca ou documento institucional.

## Entrada esperada

Uma resposta do usuário, uma correção, um documento institucional (cartão
CNPJ, apresentação comercial, contrato social, página "Sobre"), uma lista de
links ou um material bruto do qual se extraem fatos para um dos cinco
domínios.

## Perguntas de diagnóstico

Faça estas perguntas antes de gravar, na ordem, e pare quando a resposta já
definir o caminho:

1. A informação descreve a empresa, uma pessoa, um local ou contato, um
   endereço na web ou a forma de escrever um nome?
2. Quem confirmou o dado? Usuário responsável, documento oficial ou apenas
   uma página pública?
3. O dado substitui um valor antigo? Se sim, o valor antigo aparece em peça
   publicada que vai precisar de correção?
4. O dado é pessoal (CPF, endereço residencial de sócio, telefone pessoal)?
   Se sim, ele pode mesmo circular em conteúdo público?
5. A mudança cria ou altera uma grafia oficial que o glossário precisa
   registrar?

## Fluxo

1. Identifique o domínio principal da entrada com a tabela de
   `Quando usar e quando não usar`. Se a entrada tocar mais de um domínio,
   liste os domínios e confirme com o usuário a ordem de gravação.
2. Leia o arquivo canônico atual, o [REFERENCIA.md](REFERENCIA.md) e a
   referência do domínio: [empresa](references/empresa.md),
   [pessoas](references/pessoas.md), [endereços](references/enderecos.md),
   [links](references/links.md) ou [glossário](references/glossario.md).
3. Se a entrada for material bruto, extraia candidatos e classifique cada um
   como confirmado, a confirmar ou descartado. Apresente a lista ao usuário
   antes de gravar. Use o roteiro de entrevista da referência do domínio
   para cobrir lacunas.
4. Grave somente os campos confirmados, dentro da seção correspondente do
   template. Não apague seção. Campo sem resposta fica como "não informado".
5. Quando o domínio for empresa, garanta os três campos que o
   `inboundfy doctor` confere em `empresa.md`: `Nome da empresa`,
   `Descrição curta` e `Site principal` (ver `REFERENCIA.md`).
6. Quando a alteração criar ou mudar uma grafia oficial, proponha a linha do
   glossário e grave após confirmação.
7. Compare o novo valor com peças já publicadas citadas em
   `.inboundfy/fontes-projeto.md` ou indicadas pelo usuário. Liste as
   divergências encontradas. Esta skill não corrige a peça publicada.
8. Relate o arquivo alterado, os campos mudados, a fonte, as pendências e a
   próxima skill que deve usar o dado.

## Saída

Um ou mais arquivos atualizados em `.inboundfy/context/`, com a fonte e a
data da confirmação registradas no próprio arquivo quando o template tiver
campo para isso. A resposta ao usuário traz o resumo da alteração no formato
do template de `REFERENCIA.md`.

## Validação

- o arquivo canônico correto foi usado e nenhuma seção foi removida;
- todo campo gravado tem origem rastreável (resposta, documento ou URL
  confirmada pelo responsável);
- nenhum dado foi inferido de página de terceiro, buscador ou diretório;
- dados pessoais ficaram fora de campos de uso público sem autorização;
- grafias novas entraram no glossário;
- divergências com peças publicadas foram listadas ao usuário;
- dado sem confirmação ficou como pendência, com a pergunta, e o campo não
  foi preenchido.

## Idempotência

Uma nova execução atualiza somente os campos mencionados. O mesmo pedido não
cria pessoa, link ou termo duplicado. Valores substituídos ficam registrados
na linha de observação ou no registro de conferência do arquivo, com data.

## Responsabilidade do grupo

Mantenha o registro institucional separado por domínio. Grave fatos
confirmados, preserve respostas anteriores e pergunte antes de expandir o
alcance para outro arquivo.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** resposta, documento ou link ligado ao pedido;
- **transformação:** atualização do domínio canônico selecionado;
- **saída:** arquivo de contexto com origem e alcance;
- **handoff:** `inboundfy-setup` quando faltar arquivo, a skill de canal ou
  copy que consome o dado, ou `inboundfy-dados-estruturados` quando endereço,
  CNPJ ou links mudarem e houver marcação de organização no site.
