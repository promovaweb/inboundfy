---
name: inboundfy-contexto-depoimentos
description: Registra depoimentos de clientes em .inboundfy/context/depoimentos.json com texto literal, autor, empresa, foto, fonte e consentimento por canal. Use quando a pessoa enviar um elogio, áudio, print de WhatsApp ou avaliação pública, ou pedir para autorizar, ampliar ou revogar o uso de um depoimento.
---

# Inboundfy Contexto: Depoimentos

Mantém o repositório de depoimentos que outras skills usam como prova social
em landing pages, redes, e-mail, propostas comerciais e cases. A skill não
escreve peça pública. Ela guarda a fala literal do cliente, a origem e a
autorização de uso, para que `inboundfy-especialista-*`, `inboundfy-growth-*`
e `inboundfy-enablement-vendas` citem com fonte e consentimento confirmados.

Pessoas que falam pela própria empresa ficam em
`inboundfy-contexto-institucional`. A persona-alvo fica em
`inboundfy-contexto-publico`. Este arquivo registra clientes reais, já
atendidos, falando da experiência com a oferta.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Na ausência de qualquer um, informe: "O setup do Inboundfy ainda não
foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup`
para preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos.
Quando `.inboundfy/context/depoimentos.json` estiver ausente, acione
`inboundfy-setup` para restaurar o arquivo com a lista vazia; esta skill não
cria o arquivo por conta própria.

## Arquitetura de execução

A skill confirma as sentinelas antes de alterar o arquivo e trabalha um
depoimento por vez.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 2 do fluxo. O grupo desta
skill é **contexto**.

## Quando usar e quando não usar

| Pedido | Esta skill? | Caminho |
| --- | --- | --- |
| "Uma cliente mandou este áudio elogiando" | sim | transcrever literal e registrar |
| "Achei esta avaliação de 5 estrelas no Google" | sim | registrar com fonte pública e pedir consentimento para uso em anúncio |
| "O cliente pediu para tirar o nome dele do site" | sim | revogar consentimento, sem apagar o registro |
| "Melhore o texto do depoimento para a landing" | não | o texto é literal; a peça escolhe trecho com `inboundfy-copy-redacao` |
| "Monte um case de sucesso" | não | especialista do canal, usando o registro daqui |
| "Como pedir depoimentos aos clientes?" | não | `inboundfy-growth-referencias` ou `inboundfy-pesquisa-cliente` |

## Contexto exigido

- `.inboundfy/context/depoimentos.json`, para não duplicar;
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ofertas.md`, para ligar o depoimento à oferta citada;
- `.inboundfy/context/proibicoes.md`, para identificar afirmação que exige
  confirmação (saúde, finanças, resultado numérico);
- `.inboundfy/context/glossario.md`, para registrar o nome do produto citado
  na forma oficial em `produtoMencionado`, sem mexer na fala.

## Entrada esperada

Um depoimento novo (texto, áudio transcrito, vídeo transcrito, avaliação
pública, mensagem de WhatsApp, e-mail, resposta de pesquisa ou fala com
consentimento listada num relatório de `inboundfy-pesquisa-cliente`), uma
foto, ou
uma correção, revogação ou ampliação de consentimento de um registro
existente.

## Perguntas de diagnóstico

1. A fala é de um cliente real e identificável?
2. Temos o texto exato, ou alguém resumiu? Resumo não é depoimento.
3. Quem autorizou o uso, quando e para quais canais?
4. O depoimento cita número, prazo, saúde, dinheiro ou comparação? Se sim,
   precisa de checagem antes de circular.
5. Já existe registro da mesma pessoa sobre a mesma experiência?
6. A foto tem autorização de uso de imagem?

## Fluxo

1. Leia `depoimentos.json` e procure registro da mesma pessoa e empresa.
2. Leia o [REFERENCIA.md](REFERENCIA.md) e, conforme o caso,
   [consentimento e LGPD](references/consentimento-e-lgpd.md) (sempre que houver consentimento a
   registrar, ampliar ou revogar) e [coleta e uso](references/coleta-e-uso.md) (quando a
   entrada for áudio, vídeo, avaliação pública ou quando o usuário pedir
   orientação para coletar).
3. Extraia nome, cargo, empresa, texto literal e caminho ou URL da foto. Áudio
   e vídeo são transcritos palavra por palavra, mantendo a fala. Correções
   permitidas estão na referência de coleta.
4. Registre consentimento e canais autorizados. Sem confirmação, grave
   `"consentimento": "pendente"` e avise que o depoimento não pode aparecer
   em peça pública.
5. Registre fonte e data da coleta.
6. Preencha `produtoMencionado` e `resultadoMencionado` quando a fala citar
   produto, plano ou número. Resultado numérico recebe pergunta de checagem
   quando `proibicoes.md` exigir confirmação para esse tipo de afirmação.
7. Grave com `id` estável no formato `depo-NNNN`, o maior existente mais um,
   dentro da lista `depoimentos`, preservando as outras entradas.
8. Revogação muda `consentimento` para `"revogado"` e esvazia
   `canaisAutorizados`. O registro não é apagado sem pedido explícito.
9. Valide o JSON e relate o registro, as pendências e as peças que já usam o
   depoimento quando houver revogação.

## Saída

Atualização de `.inboundfy/context/depoimentos.json`, no formato
`{"depoimentos": [ ... ]}`, e relato no formato do template de
`REFERENCIA.md`.

## Validação

- O arquivo continua sendo JSON válido com a chave `depoimentos`.
- O campo `depoimento` é citação literal.
- `consentimento` é `autorizado`, `pendente` ou `revogado`.
- `canaisAutorizados` está preenchido quando autorizado e vazio quando
  pendente ou revogado.
- Nome, empresa, fonte e data estão presentes.
- `id` é único e segue a sequência.
- Nenhum registro existente foi removido ou reescrito sem pedido.

## Idempotência

Atualiza apenas o depoimento indicado. Não normaliza entradas antigas que não
foram mencionadas. O mesmo depoimento enviado duas vezes não ganha segundo
`id`; o registro existente recebe a informação nova.

## Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve registros e pergunte antes de ampliar o uso de um
depoimento para outro canal.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** depoimento, foto, correção ou mudança de consentimento;
- **transformação:** registro literal com origem e autorização;
- **saída:** `depoimentos.json` atualizado e relato da alteração;
- **handoff:** especialista do canal, `inboundfy-growth-cro`,
  `inboundfy-enablement-vendas` ou, na revogação, a lista de peças que
  precisam retirar o depoimento.
