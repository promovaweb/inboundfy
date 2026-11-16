---
name: inboundfy-contexto-marca
description: Mantém voz, proibições de negócio e estruturas proibidas em .inboundfy/context/ (marca-voz.md, proibicoes.md e estruturas-proibidas.md). Use quando a pessoa ajustar o tom, enviar um trecho bom ou ruim, disser "nunca escreva", "não podemos prometer", "não cite o concorrente" ou apontar um padrão de texto com cara de IA.
---

# Inboundfy Contexto: Marca e Voz

Mantém os três arquivos que, junto com `ESCRITA.md`, definem o que pode ser
publicado: a voz (como a marca quer soar), as proibições de negócio (o que a
marca nunca promete, compara ou afirma sem checagem) e as estruturas
proibidas (padrões que denunciam texto sem revisão humana, válidos para
qualquer marca).

A skill registra o que foi definido. A descoberta profunda da voz, com
análise de amostras e tons por situação, é trabalho de `inboundfy-voz`, que
grava o guia em `marca-voz.md` e encaminha para cá os vetos e os ajustes
pontuais. Identidade institucional fica com
`inboundfy-contexto-institucional` e persona com `inboundfy-contexto-publico`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Na ausência de qualquer um, informe: "O setup do Inboundfy ainda não
foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup`
para preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos.
Quando um arquivo de `.inboundfy/context/` desta skill estiver ausente,
acione `inboundfy-setup` para restaurar o template; esta skill não cria o
arquivo por conta própria.
Depois do preflight, leia os Markdown de `.inboundfy/fontes-projeto.md`
marcados como voz ou marca e os arquivos de `brand/`, quando existirem.

## Arquitetura de execução

A skill confirma as sentinelas antes de alterar qualquer arquivo e trabalha
um arquivo por vez.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo 2 do fluxo e a referência
interna do arquivo escolhido. O grupo desta skill é **contexto**.

## Quando usar e quando não usar

| Pedido | Arquivo | Observação |
| --- | --- | --- |
| "Nosso tom é direto e próximo" | `marca-voz.md` | seção Tom |
| "Nunca escreva 'solução'" por gosto | `marca-voz.md` | vocabulário evitado, não veto |
| "Não podemos prometer cura" | `proibicoes.md` | veto de negócio ou regulatório |
| "Não cite o concorrente X em anúncio" | `proibicoes.md` | comparações proibidas |
| "Dado financeiro precisa de aprovação" | `proibicoes.md` | afirmações que exigem confirmação |
| "Toda abertura nossa começa com pergunta retórica" | `estruturas-proibidas.md` | padrão observado na produção |
| "Usamos emoji de propósito no Instagram" | `estruturas-proibidas.md` | exceção anotada, com canal |
| Análise de 20 textos antigos para extrair a voz | não | `inboundfy-voz`, depois volte aqui |

## Contexto exigido

- `.inboundfy/context/marca-voz.md`, `.inboundfy/context/proibicoes.md` e
  `.inboundfy/context/estruturas-proibidas.md`, sempre lidos juntos para
  evitar duplicidade entre preferência e veto;
- `.inboundfy/context/publico.md`, quando o tom variar por persona;
- `.inboundfy/context/aprendizado.md`, para correções de voz já aprovadas;
- `brand/`, quando existir. Divergência entre `brand/` e `marca-voz.md`
  impede a gravação até o usuário indicar a fonte responsável.

## Entrada esperada

Definição ou ajuste de tom, um trecho real de texto bom ou ruim, um veto
(termo, promessa, comparação, afirmação sensível), uma regra por canal ou
público, um padrão de escrita observado na própria produção, ou os vetos e
ajustes encaminhados por `inboundfy-voz`.

## Perguntas de diagnóstico

1. É preferência de estilo ou algo que reprova a peça inteira? Preferência
   vai para `marca-voz.md`. Reprovação vai para `proibicoes.md`.
2. Vale para toda a comunicação, para um canal ou para uma persona?
3. Existe trecho real que mostra a regra? Sem trecho, peça um.
4. O veto tem origem regulatória (conselho profissional, CDC, CONAR,
   órgão setorial) ou é política interna? Registre a origem no motivo.
5. O padrão observado já está no catálogo de estruturas proibidas com outro
   nome?

## Fluxo

1. Classifique o pedido com a tabela de `Quando usar e quando não usar` e as
   perguntas de diagnóstico.
2. Leia os três arquivos atuais, o [REFERENCIA.md](REFERENCIA.md) e a
   referência interna: [voz e tom](references/voz-e-tom.md),
   [proibições de negócio](references/proibicoes-de-negocio.md) ou
   [estruturas proibidas](references/estruturas-proibidas.md).
3. Para voz: registre adjetivos, pessoa verbal, idioma, nível técnico, humor
   e variações por canal. Use os rótulos que o `inboundfy doctor` lê (ver
   `REFERENCIA.md`).
4. Para exemplos: peça o trecho real e o motivo. Trecho criado pela skill só
   entra marcado como ilustrativo e aprovado pelo usuário.
5. Para vetos: registre termo ou situação concreta, motivo e origem. Veto por
   canal ou público vai para a seção própria.
6. Para estruturas proibidas: acrescente o padrão observado na seção mais
   próxima ou anote a exceção aceita pela marca, com canal. Nunca apague uma
   seção inteira.
7. Faça o teste de calibração de `references/voz-e-tom.md` quando a voz
   mudar: reescreva um trecho curto do projeto com a nova regra e peça
   aprovação.
8. Relate os arquivos alterados, as pendências e as skills que precisam
   reler a voz.

## Saída

Atualização de `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/proibicoes.md` e/ou
`.inboundfy/context/estruturas-proibidas.md`, mais o relato da alteração no
formato do template de `REFERENCIA.md`.

## Validação

- `marca-voz.md` fica sem chaves `{}` e sem TODO, PENDENTE ou PREENCHER,
  porque o `inboundfy doctor` reprova o arquivo inteiro com qualquer um
  deles. Campo sem resposta recebe "não definido".
- Adjetivos de tom são concretos e acompanhados do que eles excluem.
- Todo exemplo é real ou marcado como ilustrativo.
- Todo veto tem motivo e origem.
- Nenhum item aparece ao mesmo tempo como preferência e como veto.
- Seções do catálogo de estruturas proibidas continuam presentes.

## Idempotência

Atualiza apenas a seção indicada, preservando exemplos e vetos já
registrados. O mesmo veto não é gravado duas vezes. Exceção nova no catálogo
não remove o item genérico; ela o anota com canal e motivo.

## Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos e
preferências confirmados, preserve seções e pergunte antes de expandir o
alcance de uma regra para outro canal.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto;
- **entrada:** definição de voz, trecho de exemplo, veto ou padrão observado;
- **transformação:** atualização do arquivo de marca escolhido;
- **saída:** arquivo de contexto com motivo, origem e alcance;
- **handoff:** `inboundfy-copy-editor` e as validadoras passam a aplicar a
  regra; `inboundfy-aprendizado` registra a correção quando ela nasceu de
  uma revisão de peça.
