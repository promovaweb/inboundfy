# REFERENCIA.md; inboundfy-contexto-canais

Roteiro de entrevista, exemplo preenchido e checklist para `context/canais.md`.

## Roteiro de entrevista

1. "Quais canais estão ativos agora: Blog, Email, LinkedIn, Instagram,
   Substack ou YouTube?"
2. "Qual formato e limite técnico vale para cada canal ativo?"
3. Para cada canal ativo: "Qual é a cadência de publicação esperada?"
4. "Existe limite técnico de formato: tamanho de título, contagem de
   caracteres, proporção de imagem?"
5. "Onde o artefato final é publicado depois de pronto; CMS, planilha de
   handoff, pasta compartilhada?"

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Diretórios de trabalho

- **Caminho do acervo:** acervo/
- **Caminho das peças:** canais/
- **Caminho do calendário:** calendario/

## Blog

- **Ativo?** sim
- **Skill de redação:** inboundfy-especialista-blog
- **Skill de imagem:** inboundfy-especialista-blog-imagem
- **Cadência de publicação:** 1 post por semana
- **Formato e limites técnicos:** title 50-60 caracteres, capa 1200x800
- **Onde é publicado:** CMS próprio em exemplo-estoquely.com.br/blog

## Instagram

- **Ativo?** sim
- **Skill de redação:** inboundfy-especialista-instagram
- **Skill de imagem:** inboundfy-especialista-instagram-imagem
- **Cadência de publicação:** 3 posts por semana, 1 carrossel por semana
- **Formato e limites técnicos:** legenda até 2.200 caracteres, imagem 1080x1350
- **Onde é publicado:** agendado manualmente pelo time de marketing

## E-mail

- **Ativo?** não; planejado para o próximo trimestre
```

## Checklist de completude

- [ ] Acervo, canais e calendário definidos.
- [ ] Cada canal ativo tem skill de redação (e de imagem, se aplicável)
      referenciando um nome real de `SKILLS.md`.
- [ ] Cadência e limites técnicos preenchidos para canais ativos; canal
      inativo pode ficar só com "Ativo? não".
- [ ] Destino de publicação registrado, mesmo que seja "handoff manual".

## Erros comuns

- Ativar um canal sem preencher a skill de redação correspondente; isso
  impede `inboundfy-planejamento-05-producao`, que depende desse
  mapeamento para rotear o brief.
- Inventar nome de skill que não existe em `SKILLS.md`; sempre confira o
  catálogo antes de registrar.
- Ativar canal sem definir formato, cadência e destino externo.
- Marcar cadência otimista demais sem confirmação real da capacidade do
  time; isso vira uma expectativa que o planejamento vai assumir como
  verdadeira.
