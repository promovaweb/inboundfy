---
name: inboundfy-copy-gramatica
description: >
  Audita e corrige a gramática e a pontuação de copy em português: vírgula,
  crase, concordância verbal e nominal, regência, colocação pronominal, os
  quatro porquês, paralelismo sintático e a acentuação, aplicando a norma
  culta sem alterar sentido, voz ou fatos.
---

# Inboundfy Gramática

Audita e corrige a gramática e a pontuação de copy em português com foco nos
pilares que sustentam a autoridade do texto: a vírgula, o sinal que mais exige
atenção, e as regras de crase, concordância, regência, colocação pronominal,
porquês, paralelismo sintático e acentuação. Separa os usos obrigatórios dos
usos proibidos e registra cada correção por trecho, preservando sentido, voz,
fatos e a estrutura da frase. Para revisão ampla de prosa, use
`inboundfy-copy-editor`; esta skill atua sobre a norma culta.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Se algum estiver ausente, informe o alerta canônico de
`SKILL-AUTORIA.md` e encerre sem criar ou alterar artefatos.

## Contexto exigido

Leia `ESCRITA.md`, `context/marca-voz.md`, `context/publico.md`,
`context/proibicoes.md` e `context/estruturas-proibidas.md`. Acrescente o
contexto do canal quando a peça tiver regras próprias de formato. Consulte
também [REFERENCIA.md](REFERENCIA.md) e os cinco contratos em
`skills/_shared/`.

Se faltar o texto ou o canal capazes de mudar a revisão, registre a lacuna e
pergunte somente quando não for possível inferir do pedido.

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar artefatos. Siga o contrato
compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **copy**.

## Entrada esperada

Receba texto em Markdown ou texto puro, geralmente um rascunho produzido por
uma skill de canal, junto de canal, público e objetivo. Identifique o ID e a
origem quando a peça fizer parte de um pacote.

## Fluxo

1. Leia `ESCRITA.md`, `context/marca-voz.md`, `context/proibicoes.md` e o
   checklist de [REFERENCIA.md](REFERENCIA.md).
2. Leia o texto inteiro, incluindo headings, listas, CTA, alt text e conteúdo
   inserido em imagem.
3. Confira a pontuação: cada vírgula contra as regras de uso obrigatório e
   proibido da referência (aposto, vocativo, adjunto adverbial intercalado ou
   invertido, conectivos, termos explicativos e termos coordenados) e os
   demais sinais (ponto, dois-pontos, ponto e vírgula, travessão, aspas e
   parênteses).
4. Confira a estrutura da frase: nenhuma vírgula separa sujeito de predicado,
   verbo de complemento, nem verbo de seu objeto.
5. Confira a concordância verbal e nominal: verbos impessoais, porcentagens,
   frações, partitivos e a variação de `anexo`, `incluso`, `mesmo`, `próprio`,
   `meio` e `bastante`.
6. Confira a crase e a regência: crase obrigatória e proibida (inclusive
   locuções, horas exatas e paralelismo `de...a` / `da...à`), preposições
   exigidas por verbos e nomes.
7. Confira a colocação pronominal (início de frase e próclise por palavra
   atrativa), o uso dos quatro porquês e as distinções `há` / `a` e `onde` /
   `aonde` / relativo com preposição.
8. Confira o paralelismo sintático em listas e sequências, e a ausência de
   gerundismo e de `mesmo` como pronome pessoal.
9. Registre cada achado com localização, trecho observado, regra ou fonte,
   diagnóstico e ação necessária. Não use notas, médias ou percentuais.
10. Corrija os trechos apontados, preservando sentido, voz e fatos.
11. Releia o texto inteiro depois das correções e confirme que cada trecho
    atende à norma ou à exceção documentada.
12. Devolva o texto corrigido e o relatório conforme o modelo de
    `REFERENCIA.md`.

## Saída

Relatório de achados e texto corrigido, devolvidos à skill que chamou
`inboundfy-copy-gramatica` (especialista de canal, `inboundfy-copy-editor` ou
`inboundfy-planejamento`). Não salva arquivo próprio; a skill solicitante
define onde persistir o resultado.

## Validação

- Cada achado aponta para trecho e localização identificáveis.
- Cada achado informa a regra aplicável, o diagnóstico e a ação.
- Nenhuma vírgula separa sujeito e predicado, verbo e complemento, nem verbo e
  objeto.
- Apostos, vocativos, adjuntos adverbiais intercalados ou invertidos,
  conectivos e termos explicativos estão isolados quando a norma exigir.
- Termos coordenados e listas usam vírgula entre os itens e não antes do
  último quando não há conectivo.
- Verbos impessoais, porcentagens, frações, partitivos e adjetivos de
  concordância nominal seguem a norma.
- A crase aparece só antes de palavra feminina que admita artigo e exija
  preposição; não ocorre antes de verbo, de palavra masculina, de pronomes
  pessoais, demonstrativos ou indefinidos, nem de numerais cardinais.
- Locuções conjuntivas, locuções adverbiais femininas, horas exatas e o
  paralelismo `de...a` / `da...à` aplicam a crase obrigatória.
- Regência verbal e nominal usa a preposição exigida pelo termo.
- Pronomes oblíquos não abrem frase e seguem a próclise quando há palavra
  atrativa.
- Os quatro porquês estão aplicados conforme a função de cada forma.
- `há` / `a` e `onde` / `aonde` / relativo com preposição estão aplicados
  conforme o sentido.
- Listas e sequências mantêm paralelismo sintático, sem gerundismo nem `mesmo`
  como pronome pessoal.
- A leitura integral foi refeita após as correções e o resultado descreve o
  estado observado, sem nota ou percentual editorial.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um
artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** correção de gramática e pontuação pela norma culta;
- **saída:** texto corrigido e relatório de achados;
- **handoff:** especialista de canal, validadora ou solicitante.

## Idempotência

Nova execução parte do texto atual e do novo pedido. Não repita mudanças já
aplicadas, não acumule trocas decorativas e nunca sobrescreva a fonte original
ou uma versão aprovada sem solicitação explícita.