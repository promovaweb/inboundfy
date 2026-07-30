# REFERENCIA.md — thothfy-contexto-canais

Roteiro de entrevista, exemplo preenchido e checklist para `context/canais.md`.

## Roteiro de entrevista

1. "Há motivo para não usar `brainstorms/` e `content/` como diretórios
   padrão? Se houver, quais caminhos devem ser usados?"
2. "Quais canais estão ativos agora — blog, e-mail, LinkedIn, Instagram,
   vídeo, ebook, infográfico, webinar, changelog, podcast?"
3. Para cada canal ativo: "Qual é a cadência de publicação esperada?"
4. "Existe limite técnico de formato — tamanho de título, contagem de
   caracteres, proporção de imagem?"
5. "Onde o artefato final é publicado depois de pronto — CMS, planilha de
   handoff, pasta compartilhada?"

## Exemplo preenchido (fictício — "Estoquely")

```markdown
## Diretório de trabalho do pipeline

- **Caminho onde os pacotes são criados:** content/
- **Caminho onde os brainstorms são criados:** brainstorms/

## Blog

- **Ativo?** sim
- **Skill de redação:** thothfy-especialista-blog
- **Skill de imagem:** thothfy-especialista-blog-imagem
- **Cadência de publicação:** 1 post por semana
- **Formato e limites técnicos:** title 50-60 caracteres, capa 1200x800
- **Onde é publicado:** CMS próprio em exemplo-estoquely.com.br/blog

## Instagram

- **Ativo?** sim
- **Skill de redação:** thothfy-especialista-instagram
- **Skill de imagem:** thothfy-especialista-instagram-imagem
- **Cadência de publicação:** 3 posts por semana, 1 carrossel por semana
- **Formato e limites técnicos:** legenda até 2.200 caracteres, imagem 1080x1350
- **Onde é publicado:** agendado manualmente pelo time de marketing

## E-mail

- **Ativo?** não — planejado para o próximo trimestre
```

## Checklist de completude

- [ ] Diretórios de brainstorm e do pipeline definidos.
- [ ] Cada canal ativo tem skill de redação (e de imagem, se aplicável)
      referenciando um nome real de `SKILLS.md`.
- [ ] Cadência e limites técnicos preenchidos para canais ativos — canal
      inativo pode ficar só com "Ativo? não".
- [ ] Destino de publicação registrado, mesmo que seja "handoff manual".

## Erros comuns

- Ativar um canal sem preencher a skill de redação correspondente — isso
  bloqueia `thothfy-planejamento-05-producao`, que depende desse
  mapeamento para rotear o brief.
- Inventar nome de skill que não existe em `SKILLS.md` — sempre confira o
  catálogo antes de registrar.
- Deixar o diretório de trabalho do pipeline vazio enquanto já se ativam
  canais — isso é pré-requisito de `thothfy-planejamento-00-triagem` e
  deve vir primeiro.
- Marcar cadência otimista demais sem confirmação real da capacidade do
  time — isso vira uma expectativa que o planejamento vai assumir como
  verdadeira.
