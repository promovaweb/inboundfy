---
name: inboundfy-copy-simplificar
description: Simplifica textos existentes para reduzir o esforço de leitura, cortando repetição e aquecimento e pondo as frases em ordem direta, sem perder fatos, ressalvas ou voz. Use quando disserem que o texto está difícil, longo, confuso, burocrático, cheio de jargão ou precisa caber num limite.
---

# Simplificar escrita

Revisa um texto pronto pelo lado de quem lê. Remove o que não ajuda a
entender, agir ou acompanhar a mensagem e reorganiza o que obriga o leitor a
reconstruir uma relação. Simplicidade não é brevidade: um passo, uma ressalva
ou um exemplo que evita erro de leitura fica. Para revisão ampla de mensagem e
prova, use `inboundfy-copy-edicao`. Para criar texto do zero, use
`inboundfy-copy-redacao`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se
uma sentinela estiver ausente, apresente o alerta canônico de
`SKILL-AUTORIA.md`, acione `inboundfy-setup` e pare até a preparação terminar.
Depois leia `.inboundfy/context/empresa.md` e os Markdown marcados como
relevantes em `.inboundfy/fontes-projeto.md`.

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

Consulte [REFERENCIA.md](REFERENCIA.md) nos passos 2, 4 e 7 do fluxo. O grupo
desta skill é **copy**.

## Quando usar e quando não usar

| Sinal no texto | Esta skill resolve? |
| --- | --- |
| Frases longas com várias ideias, parágrafo que demora a chegar no ponto | Sim. |
| Linguagem de ofício ("informamos que", "faz-se necessário") | Sim. |
| Jargão interno que a persona não usa | Sim, com o vocabulário de `publico.md`. |
| Repetição da mesma ideia em seções diferentes | Sim. |
| Mensagem errada para o objetivo ou prova fraca | Não. Use `inboundfy-copy-edicao`. |
| Violação de voz ou proibições | Não. Use `inboundfy-copy-editor`. |
| Erro de vírgula, crase ou concordância | Não. Use `inboundfy-copy-gramatica`. |
| Pedido de "deixar mais curto" para caber num limite fixo | Sim, se o corte não apagar fato ou ressalva. Caso contrário, pergunte o que sai. |

## Contexto exigido

Leia `ESCRITA.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md` e
`.inboundfy/context/aprendizado.md`. Acrescente o contexto do canal, as fontes
ligadas ao texto e as regras técnicas quando a peça explicar código ou
sistema.

Se faltar público, objetivo, canal ou fato capaz de mudar a revisão, registre
a lacuna. Pergunte somente quando não for possível inferir esses elementos do
pedido e da peça recebida.

## Entrada esperada

Texto ou caminho do arquivo, persona, canal, objetivo da revisão e alcance
permitido (`leve` permite só cortes e ordem, `profundo` permite reestruturar seções).
Aceita copy, email, pitch, apresentação, post, termo de uso em linguagem
simples e documentação que explica código ou sistema. Preserve a fonte e não
mude tese, oferta, promessa, voz ou posição sem autorização.

## Perguntas de diagnóstico

1. Quem lê, com quanto tempo e em qual tela (celular no ônibus, desktop no
   trabalho)?
2. O que a pessoa precisa fazer ou entender depois de ler? Escreva em uma
   frase.
3. Que palavras a persona usa para esse assunto, segundo `publico.md`?
4. Quais trechos carregam fato, prazo, valor, condição legal ou ressalva que
   não pode sumir?
5. Existe limite de tamanho do canal?

## Fluxo

1. Registre entrada, persona, canal e alcance. Leia o texto inteiro e escreva
   a frase-mensagem: o que precisa permanecer para a peça cumprir o objetivo.
2. Marque os trechos intocáveis: fatos, valores, prazos, condições, ressalvas,
   instruções e exemplos que sustentam a compreensão. Faça a medição de
   diagnóstico descrita em
   [references/medidas-de-leitura.md](references/medidas-de-leitura.md) e
   registre os números como ponto de partida, não como meta.
3. Faça a passada de leitor. Em cada parágrafo, pergunte se ainda há motivo
   para continuar, se a mensagem é clara na primeira leitura e se o
   raciocínio avança sem exigir adivinhação.
4. Aplique as técnicas de
   [references/tecnicas-de-simplificacao.md](references/tecnicas-de-simplificacao.md)
   na ordem da tabela de [REFERENCIA.md](REFERENCIA.md): primeiro estrutura
   (essencial primeiro, corte de aquecimento e repetição), depois frase (ordem
   direta, uma ideia por frase, verbo no lugar de nominalização), depois
   palavra (termo da persona, número concreto).
5. Ajuste ao formato com
   [references/simplificar-por-formato.md](references/simplificar-por-formato.md):
   email, página, post, WhatsApp, documentação técnica ou texto legal.
6. Confira os intocáveis um por um contra a versão nova. Se a simplificação
   mudar posicionamento, escopo, promessa ou significado, desfaça aquela
   mudança e peça confirmação.
7. Refaça a medição, preencha o registro de [REFERENCIA.md](REFERENCIA.md) e
   acione `inboundfy-copy-editor` para auditar a versão completa. Corrija os
   achados e releia o texto inteiro antes do handoff.

## Saída

Versão revisada no caminho definido pelo fluxo ou no formato solicitado, com o
original preservado. Junto, um registro curto com frase-mensagem, intocáveis,
alterações relevantes, medição antes e depois, fontes, pendências e próxima
ação. Em pacote de conteúdo, siga o ID e o estado já existentes.

## Validação

- A frase-mensagem continua verdadeira na versão nova.
- Todos os intocáveis estão presentes, com o mesmo valor e o mesmo sentido.
- Cada parágrafo ajuda a persona a entender ou agir.
- O vocabulário é o da persona, com as grafias de `glossario.md`.
- O tom combina com `marca-voz.md` e com o canal.
- `inboundfy-copy-editor` não encontrou pendência na versão final.
- A medição foi registrada, mas não serviu de aprovação. Texto mais curto não
  aprova sozinho.

## Idempotência

Nova execução parte da versão atual e do novo pedido. Não repete mudanças já
aplicadas, não acumula trocas decorativas e nunca sobrescreve a fonte original
ou uma versão aprovada sem solicitação explícita.

## Responsabilidade do grupo

Aplique a capacidade do grupo **copy** a uma peça existente. Devolva texto
revisado e registro consumível pela skill chamadora, sem assumir público,
canal ou objetivo ausente.

Antes do handoff, confirme:

- **grupo:** copy;
- **entrada:** texto ou caminho de origem, persona, canal e alcance;
- **transformação:** redução de esforço de leitura com preservação de sentido
  e dos intocáveis;
- **saída:** versão revisada e registro das alterações;
- **handoff:** `inboundfy-copy-editor`, depois especialista de canal,
  validadora, planejamento ou solicitante.
