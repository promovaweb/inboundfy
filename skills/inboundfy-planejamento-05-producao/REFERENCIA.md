# REFERENCIA.md; inboundfy-planejamento-05-producao

## Tabela de roteamento canal → skill especialista

| Canal | Skill de texto | Validadora de texto | Skill de imagem | Validadora de imagem |
| --- | --- | --- | --- | --- |
| Blog | `inboundfy-especialista-blog` | `inboundfy-validador-blog` | `inboundfy-especialista-blog-imagem` | `inboundfy-validador-blog-imagem` |
| E-mail | `inboundfy-especialista-email` | `inboundfy-validador-email` | N/A | N/A |
| Newsletter | `inboundfy-especialista-newsletter` | `inboundfy-validador-newsletter` | N/A | N/A |
| LinkedIn | `inboundfy-especialista-linkedin` | `inboundfy-validador-linkedin` | `inboundfy-especialista-linkedin-imagem` | `inboundfy-validador-linkedin-imagem` |
| Instagram | `inboundfy-especialista-instagram` | `inboundfy-validador-instagram` | `inboundfy-especialista-instagram-imagem` | `inboundfy-validador-instagram-imagem` |
| Vídeo | `inboundfy-especialista-video` | `inboundfy-validador-video` | `inboundfy-especialista-video-imagem` | `inboundfy-validador-video-imagem` |
| Ebook | `inboundfy-especialista-ebook` | `inboundfy-validador-ebook` | `inboundfy-especialista-ebook-imagem` | `inboundfy-validador-ebook-imagem` |
| Infográfico | `inboundfy-especialista-infografico` | `inboundfy-validador-infografico` | `inboundfy-especialista-infografico-imagem` | `inboundfy-validador-infografico-imagem` |
| Webinar | `inboundfy-especialista-webinar` | `inboundfy-validador-webinar` | `inboundfy-especialista-webinar-imagem` | `inboundfy-validador-webinar-imagem` |
| Changelog | `inboundfy-especialista-changelog` | `inboundfy-validador-changelog` | N/A | N/A |
| Podcast | `inboundfy-especialista-podcast` | `inboundfy-validador-podcast` | N/A | N/A |

Esta tabela espelha `SKILLS.md`; se os dois divergirem, `SKILLS.md` é a
fonte de verdade e esta tabela deve ser corrigida.

## Checklist de pré-condição antes de acionar a skill de canal

- [ ] O brief tem canal, público, objetivo, ângulo e regra de pronto
      preenchidos (ver `REFERENCIA.md` de `inboundfy-planejamento-04-briefing`).
- [ ] Se o brief tem objetivo comercial, a estrutura persuasiva está
      declarada; caso contrário, devolva para briefing antes de rotear.
- [ ] Todo `context/` que a skill de canal alvo declara como exigido (ver
      seção "Contexto exigido" do `SKILL.md` dela) está preenchido para o
      dado que esta peça específica precisa.
- [ ] O caminho de saída (`canais/<canal>/<id>-<data>-<slug>/README.md`)
      está disponível e não conflita com um item já existente sem
      confirmação de refação.
- [ ] A validadora de mesmo sufixo foi incluída no roteamento e receberá
      asset, brief e materiais-fonte.

## Exemplo de log de roteamento

```markdown
Brief: 04-briefs/email-nutricao-migracao-estoque.md
Canal identificado: email
Skill de texto acionada: inboundfy-especialista-email
Validadora acionada: inboundfy-validador-email
Skill de imagem acionada: nenhuma (canal sem imagem própria)
Pré-condição de contexto: OK (context/publico.md, context/marca-voz.md, context/proibicoes.md confirmados)
Validação individual: aprovada
Encaminhado para: inboundfy-planejamento-06-auditoria
```

## Erros comuns

- Acionar a skill de imagem de um canal que não tem par de imagem
  (e-mail, newsletter, changelog, podcast); confira a tabela antes de
  assumir que todo canal tem imagem.
- Rotear para uma skill de canal parecida por engano (ex.: confundir
  `inboundfy-especialista-video` com `inboundfy-especialista-video-imagem`).
- Acionar a skill de canal antes de confirmar que ela declarou o `context/`
  necessário como completo; isso empurra o problema para a auditoria em
  vez de resolver na origem.
- Encaminhar o asset à fase 6 sem aprovação da validadora de mesmo sufixo.
