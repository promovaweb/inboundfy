---
name: inboundfy-especialista-youtube
description: Produz pacote de YouTube com roteiro, título, descrição, CTA e fontes a partir de acervo e brief aprovados. Use quando o pedido trouxer vídeo para YouTube, metadados, descrição copiável, capítulos ou adaptação de roteiro.
---

# Especialista YouTube

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`
antes de criar ou alterar artefatos. Se faltar uma sentinela, informe:
"O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio."
Encerre sem alterar a peça até o reparo. Depois, leia o catálogo e as fontes
aplicáveis ao pedido.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/estrategia.md`, o acervo e o template da
peça dentro de `canais/youtube/`.

## Entrada esperada

ID do acervo, base editorial, persona, duração, formato e objetivo do vídeo.

## Fluxo

1. Leia diagnóstico, parâmetros e checklist em [REFERENCIA.md](REFERENCIA.md). Na redação, abra [modelos e exemplo](references/modelos-e-exemplo.md). Preserve as escolhas do brief.
2. Leia o acervo, a base editorial, o brief aprovado, o template de
   `canais/youtube/` e [REFERENCIA.md](REFERENCIA.md). Confirme tarefa,
   persona, duração e fontes antes de escrever a promessa.
3. No passo de redação, abra [modelos e exemplo](references/modelos-e-exemplo.md).
   Produza título, abertura, roteiro e apoio mínimo de gravação coerentes
   com a tarefa. Não transforme hipótese em afirmação.
4. Se houver roteiro aprovado de `inboundfy-especialista-video`, registre
   caminho e versão. Preserve uma origem canônica e revalide mudanças de fala.
5. Escreva descrição copiável, CTA e referências. Confira URLs com
   `.inboundfy/context/links.md`. Se houver integração de envio ou captura,
   consulte `.inboundfy/context/integracoes.md` sem expor valores de variáveis.
6. Separe estimativa de duração e tempo medido. Só inclua capítulos
   publicáveis após conferir o vídeo final; tempos de roteiro ficam nas notas.
7. Acione `inboundfy-copy-editor`, trate achados e confirme a auditoria A5
   de `inboundfy-anti-slop`. Releia título, fala, descrição e apoio juntos.
8. Salve o README da peça em `canais/youtube/` e envie o pacote inteiro a
   `inboundfy-validador-youtube`. Corrija pela produtora e repita a leitura
   integral até a aprovação. Encaminhe a thumbnail, quando prevista, a
   `inboundfy-especialista-video-imagem` e retorne a `inboundfy-planejamento`.

## Saída

README final em `canais/youtube/` com frontmatter, roteiro, metadados e fontes.

## Validação

Acione `inboundfy-validador-youtube` e confira voz, fontes, persona, título,
descrição, CTA e consistência do roteiro.

## Responsabilidade do grupo

Produza pacote YouTube com roteiro, título, descrição, CTA e fontes para o formato aprovado. Use a lista numerada de `REFERENCIA.md` antes de enviar à `inboundfy-validador-youtube`. Para thumbnail, use `inboundfy-especialista-video-imagem`, com título aprovado, tarefa mostrada e textos literais previstos. Não existe uma especialista pública de imagem com sufixo youtube neste grupo.

## Idempotência

Edite a pasta da peça existente quando o pedido trouxer o mesmo ID.
