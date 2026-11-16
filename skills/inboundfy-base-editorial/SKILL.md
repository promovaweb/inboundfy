---
name: inboundfy-base-editorial
description: Monta o base-editorial.md de um item do acervo com afirmações numeradas, fontes, objeções, perguntas e lacunas, a partir de bruto, processado, FAQ e pesquisa. Use quando inboundfy-acervo chegar à base editorial ou a pessoa pedir resumo rastreável, matéria-prima para peças ou o que um material permite dizer.
---

# Base editorial

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de criar ou alterar artefatos. Se faltar um deles, informe: "O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio." Encerre sem escrever. Após a confirmação, leia as fontes locais relevantes e `.inboundfy/context/empresa.md`.

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

- `.inboundfy/context/empresa.md`, `.inboundfy/context/marca-voz.md`,
  `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md` e
  `.inboundfy/context/glossario.md`.
- Índices do projeto, para localizar bases editoriais relacionadas.
- Sem `.inboundfy/framework/`, acione `inboundfy-setup` antes de continuar.

## Entrada esperada

Os quatro arquivos do mesmo ID do acervo: `bruto.md`, `processado.md`,
`faq.md` e `pesquisa.md`, este com a seção `Encaminhamento à base
editorial`. É o que `inboundfy-acervo` entrega na etapa da base editorial e
o que `inboundfy-pesquisa-acervo` deixa pronto ao fechar a pesquisa. Podem
vir junto contextos locais e bases editoriais relacionadas. Sem um dos quatro
arquivos ou sem a seção de encaminhamento, registre a lacuna e devolva à
chamadora. Use bases e peças finais de outros itens apenas para relacionar
assuntos, confirmar continuidade e apontar diferenças.

## Fluxo

1. Leia o método e o template de [REFERENCIA.md](REFERENCIA.md), os quatro
   arquivos do item e a seção `Encaminhamento à base editorial` da pesquisa.
2. Numere as afirmações (F01, F02) com origem, condição e limite de uso.
3. Registre título, resumo, núcleo, intenção, público, persona possível,
   atores, frases fortes, exemplos, objeções, consequências, perguntas e
   lacunas.
4. Classifique cada linha como fato recebido, informação pesquisada, hipótese
   editorial ou sugestão de uso. Hipótese nunca aparece como fato.
5. Relacione fontes internas por caminho e externas por URL.
6. Liste formatos possíveis e os cuidados para preservar o sentido, sem eleger
   canal ou campanha.
7. Salve `base-editorial.md` com links para todos os arquivos do item.
8. Acione `inboundfy-copy-editor` sobre a prosa da base, com formato `base editorial`,
   persona do item e alcance `auditar-e-corrigir`. Trate os achados.
   O bruto recebido permanece intacto.
9. Execute `inboundfy-anti-slop` no marco A2 e registre o ciclo em
   `auditorias/anti-slop/02-base-editorial.md`.

## Saída

`base-editorial.md` no diretório do item, com afirmações rastreáveis e
lacunas explícitas, devolvido à chamadora como insumo para estratégia, brief,
redação, SEO e calendário.

## Validação

- Cada afirmação importante aponta para o bruto, o processado ou uma fonte de
  pesquisa.
- Lacunas continuam explícitas e não viram fatos.
- O registro do ciclo A2 existe e não deixa achado aberto.
- O checklist de [REFERENCIA.md](REFERENCIA.md) foi cumprido item a item.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

## Idempotência

Reprocessar atualiza a mesma base e mantém as relações já confirmadas.
