# REFERENCIA.md — thothfy-planejamento-05-producao

## Tabela de roteamento canal → skill especialista

| Canal | Skill de texto | Validadora de texto | Skill de imagem | Validadora de imagem |
| --- | --- | --- | --- | --- |
| Blog | `thothfy-especialista-blog` | `thothfy-validador-blog` | `thothfy-especialista-blog-imagem` | `thothfy-validador-blog-imagem` |
| E-mail | `thothfy-especialista-email` | `thothfy-validador-email` | — | — |
| Newsletter | `thothfy-especialista-newsletter` | `thothfy-validador-newsletter` | — | — |
| LinkedIn | `thothfy-especialista-linkedin` | `thothfy-validador-linkedin` | `thothfy-especialista-linkedin-imagem` | `thothfy-validador-linkedin-imagem` |
| Instagram | `thothfy-especialista-instagram` | `thothfy-validador-instagram` | `thothfy-especialista-instagram-imagem` | `thothfy-validador-instagram-imagem` |
| Vídeo | `thothfy-especialista-video` | `thothfy-validador-video` | `thothfy-especialista-video-imagem` | `thothfy-validador-video-imagem` |
| Ebook | `thothfy-especialista-ebook` | `thothfy-validador-ebook` | `thothfy-especialista-ebook-imagem` | `thothfy-validador-ebook-imagem` |
| Infográfico | `thothfy-especialista-infografico` | `thothfy-validador-infografico` | `thothfy-especialista-infografico-imagem` | `thothfy-validador-infografico-imagem` |
| Webinar | `thothfy-especialista-webinar` | `thothfy-validador-webinar` | `thothfy-especialista-webinar-imagem` | `thothfy-validador-webinar-imagem` |
| Changelog | `thothfy-especialista-changelog` | `thothfy-validador-changelog` | — | — |
| Podcast | `thothfy-especialista-podcast` | `thothfy-validador-podcast` | — | — |

Esta tabela espelha `SKILLS.md` — se os dois divergirem, `SKILLS.md` é a
fonte de verdade e esta tabela deve ser corrigida.

## Checklist de pré-condição antes de acionar a skill de canal

- [ ] O brief tem canal, público, objetivo, ângulo e critério de pronto
      preenchidos (ver `REFERENCIA.md` de `thothfy-planejamento-04-briefing`).
- [ ] Se o brief tem objetivo comercial, a estrutura persuasiva está
      declarada — caso contrário, devolva para briefing antes de rotear.
- [ ] Todo `context/` que a skill de canal alvo declara como exigido (ver
      seção "Contexto exigido" do `SKILL.md` dela) está preenchido para o
      dado que esta peça específica precisa.
- [ ] O caminho de saída (`content/<pacote>/97-ativos-finais/<canal>/<item>/`)
      está disponível e não conflita com um item já existente sem
      confirmação de refação.
- [ ] A validadora de mesmo sufixo foi incluída no roteamento e receberá
      asset, brief e materiais-fonte.

## Exemplo de log de roteamento

```markdown
Brief: 04-briefs/email-nutricao-migracao-estoque.md
Canal identificado: email
Skill de texto acionada: thothfy-especialista-email
Validadora acionada: thothfy-validador-email
Skill de imagem acionada: nenhuma (canal sem imagem própria)
Pré-condição de contexto: OK (context/publico.md, context/marca-voz.md, context/proibicoes.md confirmados)
Validação individual: aprovada
Encaminhado para: thothfy-planejamento-06-auditoria
```

## Erros comuns

- Acionar a skill de imagem de um canal que não tem par de imagem
  (e-mail, newsletter, changelog, podcast) — confira a tabela antes de
  assumir que todo canal tem imagem.
- Rotear para uma skill de canal parecida por engano (ex.: confundir
  `thothfy-especialista-video` com `thothfy-especialista-video-imagem`).
- Acionar a skill de canal antes de confirmar que ela declarou o `context/`
  necessário como completo — isso empurra o problema para a auditoria em
  vez de resolver na origem.
- Encaminhar o asset à fase 6 sem aprovação da validadora de mesmo sufixo.
