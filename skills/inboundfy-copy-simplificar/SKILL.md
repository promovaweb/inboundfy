---
name: inboundfy-copy-simplificar
description: >
  Simplifica textos existentes para reduzir esforço de leitura e retirar excessos, preservando intenção, fatos, voz e formato do projeto.
---

# Simplificar escrita

Revisa textos existentes pela experiência do público leitor. Remove trechos
que não ajudam a entender, agir ou acompanhar a mensagem, sem confundir
simplicidade com brevidade. Para uma edição ampla, use
`inboundfy-copy-edicao`; para criar texto do zero, use
`inboundfy-copy-redacao`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se
uma sentinela estiver ausente, apresente o alerta canônico de
`SKILL-AUTORIA.md`, acione `inboundfy-setup` e pare até a preparação terminar.

## Contexto exigido

Leia `ESCRITA.md`, `context/empresa.md`, `context/marca-voz.md`,
`context/publico.md`, `context/proibicoes.md`, `context/glossario.md` e
`context/aprendizado.md`. Acrescente o contexto do canal, as fontes ligadas ao
texto e regras técnicas quando a peça explicar código ou sistema. Consulte
também [REFERENCIA.md](REFERENCIA.md) e os cinco contratos em
`skills/_shared/`.

Se faltar público, objetivo, canal ou fato capaz de mudar a revisão, registre
a lacuna. Pergunte somente quando não for possível inferir esses elementos do
pedido e da peça recebida.

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar artefatos. Siga o contrato
compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme setup,
  fontes e proveniência.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): preserve ID,
  estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza
  escolhas que alterem o resultado.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira a
  versão inteira e preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona,
  voz, dicionário e proibições.

Consulte [REFERENCIA.md](REFERENCIA.md) durante a revisão. O grupo desta skill
é **copy**.

## Entrada esperada

Receba texto ou caminho do arquivo, público, canal, objetivo da revisão e
alcance permitido. Aceite copy, email, pitch, apresentação, publicação social
e documentação explicativa de código ou sistema. Preserve a fonte recebida e
não mude tese, oferta, promessa, voz ou posição sem autorização.

## Fluxo

1. Registre a entrada e o escopo. Leia o texto inteiro e identifique sua
   mensagem principal, o que precisa permanecer e as condições que limitam a
   afirmação.
2. Leia [REFERENCIA.md](REFERENCIA.md) e faça uma passagem de leitor: em cada
   frase e parágrafo, confira interesse, clareza e continuidade do raciocínio.
3. Retire repetição, aquecimento, elogio à própria peça, termos dispensáveis e
   trechos que ocupam espaço sem ajudar o público. Reorganize quando a ordem
   exigir que a pessoa leitora reconstrua uma relação importante.
4. Mantenha exemplos, explicações, condições, instruções e detalhes técnicos
   sempre que sustentarem compreensão ou uso. Não reduza o texto só para
   atingir uma contagem menor.
5. Dê à peça um motivo concreto para merecer leitura, como uma explicação
   útil, uma aplicação clara, humor, uma provocação pertinente ou uma
   apresentação visual que ajude a mensagem. Não force choque, urgência ou
   promessa.
6. Registre alterações relevantes, material preservado e perguntas abertas. Se
   a revisão mudar posicionamento, escopo ou significado, suspenda essa
   alteração e peça confirmação.
7. Acione `inboundfy-copy-editor` para auditar a versão completa. Corrija os
   achados e releia o texto inteiro antes do handoff.

## Saída

Entregue a versão revisada no caminho definido pelo fluxo ou no formato
solicitado. Preserve o original. Anexe um registro curto com objetivo, plano,
marcos da revisão, validação final, alterações relevantes, conteúdo mantido,
fontes consultadas, pendências e próxima ação. Em pacote de conteúdo, siga o
ID e o estado já existentes.

## Validação

A revisão está pronta quando cada frase tem função clara, cada parágrafo ajuda
o público a entender ou acompanhar a mensagem, os fatos e limites permanecem
intactos, o tom combina com a marca e o canal, e `inboundfy-copy-editor` não
encontra pendência editorial. Clareza não depende de cortar explicações
necessárias nem de chamar atenção por exagero.

## Responsabilidade do grupo

Aplique a capacidade do grupo **copy** a uma peça existente. Devolva texto
revisado e registro consumível pela skill chamadora, sem assumir público,
canal ou objetivo ausente.

Antes do handoff, confirme:

- **grupo:** copy;
- **entrada:** texto ou caminho de origem;
- **transformação:** redução de esforço de leitura com preservação de sentido;
- **saída:** versão revisada e registro das alterações;
- **handoff:** especialista de canal, validadora, planejamento ou solicitante.

## Idempotência

Nova execução parte da versão atual e do novo pedido. Não repita mudanças já
aplicadas, não acumule trocas decorativas e nunca sobrescreva a fonte original
ou uma versão aprovada sem solicitação explícita.
