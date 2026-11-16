---
name: inboundfy-copy-gramatica
description: Corrige gramática, pontuação e grafia de copy em português pela norma culta (vírgula, crase, concordância, regência, colocação, porquês, números, datas e valores em R$) sem mudar sentido, voz ou fatos. Use quando pedirem revisão de português, correção de vírgula ou crase ou revisão ortográfica antes de publicar.
---

# Inboundfy Gramática

Revisão de norma culta para copy pronta. A skill confere cada sinal de
pontuação, cada concordância e cada crase, registra o achado com a regra que o
sustenta e corrige sem mexer em sentido, tese, voz ou dado. Ela não reescreve
para melhorar o estilo: isso é trabalho de `inboundfy-copy-editor` (regras do
projeto) e de `inboundfy-copy-simplificar` (esforço de leitura).

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Se algum estiver ausente, apresente o alerta canônico de
`SKILL-AUTORIA.md`, indique `inboundfy-setup` e encerre sem criar ou alterar
artefatos. Depois leia `.inboundfy/context/empresa.md` e os Markdown marcados
como relevantes em `.inboundfy/fontes-projeto.md`.

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar artefatos. Siga o contrato
compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) nos passos 1, 9 e 12 do fluxo. O grupo
desta skill é **copy**.

## Quando usar e quando não usar

| Situação | Ação |
| --- | --- |
| Texto pronto vai para publicação e precisa de revisão de norma | Use esta skill. |
| `inboundfy-copy-editor` encontrou erros de norma repetidos | Use esta skill sobre o arquivo inteiro. |
| Texto tem problema de clareza, repetição ou tamanho | Use `inboundfy-copy-simplificar` antes. |
| Texto viola voz ou proibições do projeto | Use `inboundfy-copy-editor`. |
| Transcrição bruta precisa de limpeza | Use `inboundfy-planejamento` na fase de saneamento. |

## Contexto exigido

- `ESCRITA.md`: regras de pontuação do framework (sem ponto e vírgula, sem
  travessão de prosa, sem vírgula antes de `e` entre orações).
- `.inboundfy/context/marca-voz.md`: registro formal ou informal por canal e
  exceções de norma aceitas pela marca.
- `.inboundfy/context/glossario.md`: grafia oficial de marcas, produtos e
  siglas.
- `.inboundfy/context/publico.md`: persona, para escolher entre forma culta e
  forma coloquial aceita.
- `.inboundfy/context/proibicoes.md` e
  `.inboundfy/context/estruturas-proibidas.md`: para não reintroduzir um veto
  durante a correção.

Acrescente o contexto do canal quando a peça tiver formato próprio. Se faltar
o texto ou o canal, registre a lacuna e pergunte só quando não for possível
inferir do pedido.

## Entrada esperada

Texto em Markdown ou texto puro, geralmente um rascunho de skill de canal,
junto de canal, persona e objetivo. Quando a peça pertence a um pacote,
identifique o ID e o caminho de origem.

## Fluxo

1. Leia `ESCRITA.md`, `marca-voz.md`, `glossario.md` e a tabela "Norma ou
   registro da marca" de [REFERENCIA.md](REFERENCIA.md). Anote quais
   variações coloquiais a voz aceita e em qual canal.
2. Leia o texto inteiro, incluindo título, headings, listas, CTA, alt text,
   assunto de email e texto inserido em imagem.
3. Confira a pontuação com
   [references/pontuacao.md](references/pontuacao.md): nenhuma vírgula entre
   sujeito e verbo ou entre verbo e complemento. Aposto, vocativo, adjunto
   deslocado, conectivo e termo explicativo isolados. Nenhuma vírgula antes de
   `e` entre orações. Nenhum ponto e vírgula nem travessão de prosa.
4. Confira a estrutura de cada frase longa: identifique sujeito, verbo e
   complemento antes de mover qualquer sinal.
5. Confira a concordância com
   [references/concordancia-crase-e-regencia.md](references/concordancia-crase-e-regencia.md):
   verbos impessoais, porcentagens, partitivos e as palavras variáveis
   (`anexo`, `incluso`, `mesmo`, `próprio`, `meio`, `bastante`).
6. Confira crase e regência no mesmo arquivo: crase proibida, obrigatória e o
   paralelismo `de...a` e `da...à`, além da preposição exigida por verbos como
   `acessar`, `assistir`, `implicar`, `visar` e `chegar`.
7. Confira colocação pronominal, porquês, `há` e `a`, `onde` e `aonde` com
   [references/colocacao-grafia-e-estilo.md](references/colocacao-grafia-e-estilo.md).
8. Confira paralelismo em listas, gerundismo, `mesmo` como pronome, artigos
   antes de siglas e a grafia de números, datas, horas, valores e marcas com
   [references/numeros-datas-e-moeda.md](references/numeros-datas-e-moeda.md).
9. Registre cada achado na tabela de [REFERENCIA.md](REFERENCIA.md) com
   localização, trecho, regra, diagnóstico e ação. Não use notas, médias ou
   percentuais.
10. Corrija os trechos preservando sentido, voz e fatos. Quando a correção
    exigir escolher um dado (parcela ou total, dia útil ou corrido), não
    escolha: registre pendência para a skill dona do dado.
11. Releia o texto inteiro depois das correções. Confirme que nenhuma
    correção criou erro novo nem reintroduziu veto.
12. Devolva o texto corrigido e o relatório no modelo de
    [REFERENCIA.md](REFERENCIA.md).

## Saída

Relatório de achados e texto corrigido, devolvidos à skill que chamou
`inboundfy-copy-gramatica` (especialista de canal, `inboundfy-copy-editor` ou
`inboundfy-planejamento`). Esta skill não salva arquivo próprio. A chamadora
define onde persistir o resultado.

## Validação

- Cada achado aponta trecho, localização e regra.
- Nenhuma vírgula separa sujeito e predicado nem verbo e complemento.
- Nenhuma vírgula antes de `e` liga duas orações.
- Nenhum ponto e vírgula nem travessão de prosa corrida no texto final.
- Crase, concordância, regência e colocação seguem a norma ou uma exceção
  registrada em `marca-voz.md` para aquele canal.
- Listas mantêm a mesma forma gramatical em todos os itens.
- Valores, datas, horas e marcas seguem uma forma única na peça.
- Nenhum número, preço, prazo ou nome mudou de valor durante a correção.
- A leitura integral foi refeita depois das correções.

## Idempotência

Nova execução parte do texto atual e do novo pedido. Não repete mudanças já
aplicadas, não acumula trocas decorativas e nunca sobrescreve a fonte original
ou uma versão aprovada sem solicitação explícita.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um
artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy;
- **entrada:** caminho ou ID da peça, canal e persona;
- **transformação:** correção de gramática, pontuação e grafia pela norma
  culta, respeitando exceções registradas;
- **saída:** texto corrigido e relatório de achados;
- **handoff:** skill chamadora, com pendências de dado encaminhadas à skill
  dona.
