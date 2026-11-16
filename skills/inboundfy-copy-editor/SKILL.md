---
name: inboundfy-copy-editor
description: Audita prosa pronta contra as proibições, as estruturas proibidas, o ESCRITA.md e a voz da marca, registra cada achado com trecho e regra e corrige o padrão no arquivo inteiro. Use quando um rascunho precisar da última leitura antes da validadora do canal ou a pessoa pedir para conferir se o texto segue as regras do projeto.
---

# Inboundfy Copy Editor

Skill de apoio chamada por toda skill de redação antes da entrega e por
`inboundfy-planejamento` na auditoria final do pacote. Ela lê um texto pronto,
aponta cada ocorrência concreta que viola uma regra do projeto, corrige a prosa
sem mudar fatos nem intenção e devolve um relatório localizável. Não atribui
nota, média ou percentual. Não decide se a peça deve existir, não troca a tese
e não escreve texto novo do zero.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Se algum estiver ausente, informe: "O setup do Inboundfy ainda não foi
concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para
preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois
dessa conferência, leia `.inboundfy/context/empresa.md`, os arquivos de
`.inboundfy/framework/` ligados à revisão e os Markdown marcados como
relevantes em `.inboundfy/fontes-projeto.md`.

## Arquitetura de execução

Confirme os arquivos de instalação antes de criar ou alterar artefatos. Siga o
contrato compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) nos passos 3 a 7 do fluxo. O grupo
desta skill é **copy**.

## Quando usar e quando não usar

| Situação | Skill certa |
| --- | --- |
| Rascunho pronto precisa passar pelas regras do projeto antes da entrega | `inboundfy-copy-editor` |
| Texto aprovado na forma, com dúvida de vírgula, crase ou concordância | `inboundfy-copy-gramatica` |
| Texto longo, repetitivo ou difícil de acompanhar | `inboundfy-copy-simplificar`, depois esta skill |
| Mensagem fraca, prova ausente ou estrutura errada para o objetivo | `inboundfy-copy-edicao` |
| Pacote inteiro com sinais sintéticos em vários marcos do pipeline | `inboundfy-anti-slop` |
| Texto ainda não existe | `inboundfy-copy-redacao` ou a especialista do canal |

Esta skill é a última leitura de prosa antes da validadora do canal. Quando o
problema encontrado for de mensagem ou de estrutura, ela registra o achado e
devolve para a skill responsável em vez de reescrever a peça.

## Contexto exigido

- `ESCRITA.md`: princípios de escrita humana e anatomia do parágrafo.
- `.inboundfy/context/proibicoes.md`: vetos de negócio do projeto.
- `.inboundfy/context/estruturas-proibidas.md`: catálogo de palavra, frase e
  estrutura com aparência de texto automático.
- `.inboundfy/context/marca-voz.md`: tom, pessoa verbal, vocabulário preferido
  e evitado, exemplos aprovados.
- `.inboundfy/context/glossario.md`: grafia oficial de marcas, produtos e
  siglas.
- `.inboundfy/context/publico.md`: persona da peça, para julgar jargão e nível
  técnico.
- `.inboundfy/context/aprendizado.md`: correções já confirmadas para o canal,
  a persona ou o projeto.

Se `proibicoes.md`, `estruturas-proibidas.md` ou `marca-voz.md` estiverem
vazios, a auditoria continua com `ESCRITA.md` e registra a lacuna como
pendência para `inboundfy-contexto-marca`. Arquivo ausente aciona
`inboundfy-setup`.

## Entrada esperada

- Texto em Markdown ou texto puro, ou o caminho do arquivo no pacote.
- Canal e formato (artigo, email, post, roteiro, página).
- Persona principal registrada no brief ou no frontmatter.
- Alcance permitido: `auditar` (só relatório) ou `auditar-e-corrigir`
  (relatório mais texto corrigido). Sem indicação, use `auditar-e-corrigir`.

## Perguntas de diagnóstico

Responda antes do primeiro passe, pelo brief ou pela peça. Pergunte à pessoa só
o que não for possível inferir:

1. Qual persona lê este texto e qual o nível técnico dela?
2. Qual canal recebe a peça e que forma ele impõe (tamanho, quebra de linha,
   CTA)?
3. Existe exceção registrada em `aprendizado.md` para este canal ou persona?
4. O texto traz números, preços, prazos ou nomes que precisam de fonte?
5. A skill chamadora pediu só auditoria ou auditoria com correção?

## Fluxo

1. Leia `ESCRITA.md`, os dois arquivos de proibições, `marca-voz.md`,
   `glossario.md` e os registros aplicáveis de `aprendizado.md`.
2. Leia o texto inteiro uma vez sem marcar nada. Considere frontmatter,
   headings, listas, CTA, alt text, legenda e texto inserido em imagem.
   Escreva em uma frase o que a peça quer que a persona entenda ou faça.
3. Faça os seis passes descritos em
   [references/passes-de-auditoria.md](references/passes-de-auditoria.md), na
   ordem: vetos literais, vetos semânticos e estruturais, anatomia do
   parágrafo, voz, afirmações e fatos, forma do canal.
4. Registre cada ocorrência na tabela de [REFERENCIA.md](REFERENCIA.md) com
   localização, trecho, regra ou fonte, classe do achado, diagnóstico e ação.
5. Corrija os achados usando o catálogo de
   [references/padroes-e-reescritas.md](references/padroes-e-reescritas.md).
   Corrija o padrão no arquivo inteiro, não só a ocorrência apontada.
   Preserve fatos, objeto, intenção e sinais de escrita humana.
6. Devolva à skill responsável o que não é de prosa: afirmação sem fonte vai
   para a especialista ou para `inboundfy-copy-edicao`. Problema de norma
   culta recorrente vai para `inboundfy-copy-gramatica`.
7. Releia o texto inteiro depois das correções e repita os passes 1 e 2. Um
   veto restante mantém o texto reprovado até sua remoção ou até a
   confirmação de exceção na fonte canônica.
8. Entregue o texto corrigido e o relatório no formato de
   [REFERENCIA.md](REFERENCIA.md), com pendências separadas das correções
   aplicadas.

## Saída

Relatório de achados e texto corrigido, devolvidos à skill que chamou
`inboundfy-copy-editor` (especialista de canal, `inboundfy-copy-redacao`,
`inboundfy-copy-edicao`, `inboundfy-copy-simplificar`,
`inboundfy-copy-persuasao` ou `inboundfy-planejamento`). Esta skill não salva
arquivo próprio. A skill solicitante define onde persistir o resultado,
normalmente ao lado da peça, com o mesmo ID do pacote.

## Validação

- Cada achado aponta trecho e localização identificáveis.
- Cada achado informa regra ou fonte, classe, diagnóstico e ação.
- Toda ocorrência de `proibicoes.md` ou `estruturas-proibidas.md` mantém o
  texto reprovado até ser tratada.
- Os passes literal e semântico foram refeitos no texto inteiro após a
  correção.
- Nenhuma correção alterou número, preço, prazo, nome, promessa ou tese.
- O relatório descreve o estado observado, sem nota ou percentual.

## Idempotência

Uma nova execução reavalia o texto atual do início e não herda achados antigos
sem ler a versão presente. A skill nunca sobrescreve a versão original nem uma
versão aprovada. O texto corrigido sai como nova versão para a skill chamadora.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um
artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy;
- **entrada:** caminho ou ID da peça, canal, persona e alcance;
- **transformação:** auditoria em seis passes e correção do padrão no arquivo
  inteiro;
- **saída:** texto corrigido e relatório de achados;
- **handoff:** skill chamadora, com estado `aprovado`, `revisao` ou
  `devolvido` e as pendências.
