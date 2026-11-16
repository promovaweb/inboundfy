---
name: inboundfy-base-validador
description: Aplica o contrato comum de validação a um asset do Inboundfy, confrontando brief, contextos, fontes, marca e proibições, e devolve relatório com achados localizados, digest e veredito. Use quando uma skill inboundfy-validador-* auditar uma peça ou a pessoa pedir para validar, aprovar ou reprovar um asset antes da publicação.
---

# Validação transversal

Base de julgamento compartilhada pelas validadoras de asset. Não substitui a
validação específica do canal e não corrige o artefato.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **base**.

## Contexto exigido

- `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`,
  `.inboundfy/context/publico.md`, `.inboundfy/context/links.md`,
  `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`,
  `.inboundfy/context/aprendizado.md` e
  `.inboundfy/pipeline.md`.
- Todos os arquivos Markdown de `.inboundfy/context/`, sem limitar a leitura
  aos declarados pela produtora.
- `.inboundfy/fontes-projeto.md` e cada fonte local marcada como relevante.
- `brand/`, quando existir: todos os Markdown e os ativos de marca
  relevantes, como logos, tokens, cores, tipografia e aplicações.
- `CONTEXTO.md`, `METODOLOGIA.md`, `ESCRITA.md`,
  `ESTRUTURAS-PERSUASIVAS.md` e demais regras aplicáveis ao asset.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`, sempre.
- `skills/inboundfy-anti-slop/ETAPAS.md` ou a cópia instalada em
  `.inboundfy/framework/skills/inboundfy-anti-slop/ETAPAS.md`, para confirmar
  que a auditoria do asset está no marco A5.

Não atribua autoridade automática a uma fonte descoberta. Aplique a
precedência de `CONTEXTO.md` e registre conflitos sem inventar uma síntese.

## Entrada esperada

Asset candidato, brief de origem (ou indicação de peça avulsa), materiais-fonte
e nome da skill produtora, enviados pela validadora de canal que aciona esta
base. O nome da validadora é o da própria chamadora. Sem asset ou produtora
identificados, registre impedimento.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e monte o manifesto de fontes.
2. Leia o asset inteiro, o brief, a `SKILL.md` e a `REFERENCIA.md` da
   produtora e a referência da validadora chamadora.
3. Carregue todos os arquivos de `.inboundfy/context/`, o catalogo e as fontes
   locais relevantes. Arquivo ausente, template vazio e conflito factual viram
   impedimento: não peça à validadora para reparar apoio. Se `brand/` existir,
   leia seus Markdown e inspecione os ativos aplicáveis.
4. Execute o hard gate de proibições de [REFERENCIA.md](REFERENCIA.md) antes
   dos demais aspectos, com os passes literal, semântico e estrutural.
5. Siga o procedimento de julgamento de [REFERENCIA.md](REFERENCIA.md) para
   rastreabilidade factual, aderência ao brief, voz, escrita, estrutura
   persuasiva, formato, acessibilidade, metadata, dimensões e licenças. O passe
   visual cobre imagem final, texto incorporado, logos e área de corte. Uma
   inspeção não executada permanece pendente.
6. Para texto público, acione `inboundfy-copy-editor` com canal, persona do
   brief e alcance `auditar` (a validadora não corrige) e registre cada achado
   com trecho, localização, regra ou fonte, diagnóstico e ação, sem notas ou
   percentuais.
7. Acione `inboundfy-anti-slop` no marco A5 e confirme o registro
   `auditorias/anti-slop/05-peca.md` ou seu equivalente no pacote.
8. Preencha o relatório do template de [REFERENCIA.md](REFERENCIA.md). Antes de
   aprovar, execute `inboundfy content digest <id>` depois da última alteração e
   registre ID, caminho, SHA-256 completo e `Veredito: aprovado`. Marcador de
   exemplo nunca vale como digest real.
9. Depois de qualquer correção, descarte o resultado anterior, releia o asset
   inteiro e repita o hard gate.
10. Aprove só com hard gate zerado e sem pendência obrigatória. Reprovação
    volta à produtora; divergência estratégica volta ao briefing; falta
    factual irrecuperável vai ao usuário.

## Saída

Relatório conforme [REFERENCIA.md](REFERENCIA.md), salvo em
`06-auditoria/assets/<canal>-<item>.md` no pacote ou junto ao asset avulso
como `<nome-do-asset>.auditoria.md`.

## Validação

- O manifesto prova que todas as classes de fonte aplicáveis foram lidas.
- O relatório contém a matriz completa de proibições e estruturas proibidas,
  com resultado por categoria.
- Zero ocorrência literal, semântica ou estrutural permanece no asset.
- Divergência de voz, logo, cor, tipografia ou aplicação em relação a `brand/`
  reprova a peça.
- Cada reprovação cita localização, prova, regra e correção.
- Nenhum asset recebe aprovação condicional.
- A skill de destino está registrada de forma inequívoca.
- O relatório identifica o marco A5 e o ciclo executado.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

## Idempotência

Reauditar atualiza o mesmo relatório e acrescenta um ciclo ao histórico.
Não cria relatórios paralelos nem altera o asset candidato.
