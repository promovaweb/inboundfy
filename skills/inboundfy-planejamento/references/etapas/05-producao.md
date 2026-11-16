# Etapa 05: produção

Fase 5 de `METODOLOGIA.md`. É a camada de roteamento entre o brief pronto e
a especialista que escreve ou gera a peça. Confere pré-condições, aciona a
especialista e a validadora de mesmo sufixo. A escrita acontece na
especialista, não aqui.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

`context/canais.md` e `SKILLS.md`, para identificar a skill de texto e de
imagem do canal.

## Entrada esperada

Um brief de `04-briefs/<canal>-<slug>.md` ou brief de peça avulsa.

## Fluxo

1. Leia o brief e identifique o canal.
2. Confirme a especialista e a validadora pela tabela abaixo, por
   `context/canais.md` e por `SKILLS.md`.
3. Percorra o checklist de pré-condição. Se a especialista sinalizar
   `context/` incompleto, pare e acione a skill de manutenção.
4. Brief comercial sem estrutura persuasiva volta para a etapa 04.
5. Peça longa: execute `inboundfy-anti-slop` no marco A4 sobre outline,
   abertura e primeira unidade. Registre `06-auditoria/anti-slop-04-rascunho.md`.
6. Acione a especialista de texto com o brief completo.
7. Depois da redação, execute o marco A5 e registre
   `06-auditoria/anti-slop-05-peca.md` antes da validadora.
8. Se o canal exigir imagem, acione a especialista de imagem depois do
   texto, salvo pedido contrário no brief.
9. Acione a validadora de mesmo sufixo para cada asset. Reprovação volta à
   produtora pareada. Repita até aprovar ou encontrar impedimento factual
   que exija a pessoa.
10. Siga para a etapa 06 somente com assets aprovados.

## Saída

Nenhum artefato próprio. A especialista produz o asset em
`97-ativos-finais/<canal>/<item>/` (pacote) ou
`canais/<canal>/<id>-<data>-<slug>/` (acervo). A validadora grava o relatório
em `06-auditoria/assets/`.

## Validação

- A especialista corresponde ao canal do brief.
- Nenhuma especialista foi acionada com `context/` incompleto.
- Cada asset tem aprovação da validadora pareada.
- Os marcos A4 e A5 foram registrados quando aplicáveis.

## Idempotência

Reacionar a produção para o mesmo brief não duplica o asset. Confirme com a
pessoa antes de sobrescrever peça já produzida.

## Roteamento canal para especialista

| Canal | Texto | Validadora de texto | Imagem | Validadora de imagem |
| --- | --- | --- | --- | --- |
| Blog | `inboundfy-especialista-blog` | `inboundfy-validador-blog` | `inboundfy-especialista-blog-imagem` | `inboundfy-validador-blog-imagem` |
| Email | `inboundfy-especialista-email` | `inboundfy-validador-email` | não há | não há |
| Newsletter | `inboundfy-especialista-newsletter` | `inboundfy-validador-newsletter` | não há | não há |
| Substack | `inboundfy-especialista-substack` | `inboundfy-validador-substack` | não há | não há |
| LinkedIn | `inboundfy-especialista-linkedin` | `inboundfy-validador-linkedin` | `inboundfy-especialista-linkedin-imagem` | `inboundfy-validador-linkedin-imagem` |
| Instagram | `inboundfy-especialista-instagram` | `inboundfy-validador-instagram` | `inboundfy-especialista-instagram-imagem` | `inboundfy-validador-instagram-imagem` |
| YouTube | `inboundfy-especialista-youtube` | `inboundfy-validador-youtube` | `inboundfy-especialista-video-imagem` | `inboundfy-validador-video-imagem` |
| Vídeo | `inboundfy-especialista-video` | `inboundfy-validador-video` | `inboundfy-especialista-video-imagem` | `inboundfy-validador-video-imagem` |
| Ebook | `inboundfy-especialista-ebook` | `inboundfy-validador-ebook` | `inboundfy-especialista-ebook-imagem` | `inboundfy-validador-ebook-imagem` |
| Infográfico | `inboundfy-especialista-infografico` | `inboundfy-validador-infografico` | `inboundfy-especialista-infografico-imagem` | `inboundfy-validador-infografico-imagem` |
| Webinar | `inboundfy-especialista-webinar` | `inboundfy-validador-webinar` | `inboundfy-especialista-webinar-imagem` | `inboundfy-validador-webinar-imagem` |
| Changelog | `inboundfy-especialista-changelog` | `inboundfy-validador-changelog` | não há | não há |
| Podcast | `inboundfy-especialista-podcast` | `inboundfy-validador-podcast` | não há | não há |

Esta tabela espelha `SKILLS.md`. Se divergirem, `SKILLS.md` prevalece e esta
tabela deve ser corrigida.

## Checklist de pré-condição

- [ ] O brief tem canal, persona, objetivo, ângulo, métrica e regra de
      pronto.
- [ ] Brief comercial declara a estrutura persuasiva.
- [ ] Todo `context/` exigido pela especialista está preenchido para esta
      peça.
- [ ] O caminho de saída está livre ou a refação foi confirmada.
- [ ] A validadora de mesmo sufixo está no roteamento e recebe asset, brief
      e fontes.

## Exemplo de registro de roteamento

```markdown
Brief: 04-briefs/email-nutricao-migracao-estoque.md
Canal: email
Especialista: inboundfy-especialista-email
Validadora: inboundfy-validador-email
Imagem: não há para o canal
Pré-condição de contexto: publico.md, marca-voz.md e proibicoes.md confirmados
A5: aprovado no ciclo 2
Validação individual: aprovada na rodada 2
Próxima etapa: 06-auditoria
```

## Erros comuns

- Acionar imagem para canal sem par de imagem.
- Confundir `inboundfy-especialista-video` com
  `inboundfy-especialista-video-imagem`.
- Acionar a especialista antes de confirmar o `context/` exigido.
- Mandar asset para a auditoria sem aprovação da validadora.
