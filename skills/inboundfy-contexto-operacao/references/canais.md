# Domínio canais

Referência de `.inboundfy/context/canais.md`. Lida no passo 2 do fluxo
quando a entrada ativa, desativa ou ajusta um canal.

## Função

A seleção de canais mora em `.inboundfy/estrategia.md`, na lista
`Canais ativos` (Blog, Email, LinkedIn, Instagram, Substack, YouTube).
`canais.md` complementa essa lista com o que as especialistas precisam para
produzir: formato, cadência, limites técnicos, skill responsável e onde a
peça é publicada fora do Inboundfy. O arquivo também guarda os diretórios de
trabalho (acervo, peças, calendário).

## Fluxo do domínio

1. Leia `.inboundfy/estrategia.md` e `canais.md`.
2. Confirme com o usuário a ativação ou desativação. Perfil existente em
   `links.md` não ativa canal.
3. Marque ou desmarque a caixa do canal em `estrategia.md`. Não altere
   objetivos nem regras de distribuição.
4. Para cada canal ativo, grave formato, cadência, limites, especialista de
   texto e de imagem (nomes reais de `SKILLS.md`) e destino de publicação.
5. Canal desativado mantém o bloco com `Ativo? não` e a data.
6. Canais fora da lista principal (WhatsApp, podcast, webinar, TikTok) podem
   ter bloco próprio em `canais.md` como canal de apoio. Eles não ganham
   caixa em `estrategia.md` e precisam de especialista existente ou da
   anotação "sem especialista; produção manual".

## Roteiro de entrevista

1. "Quais canais estão ativos agora?"
2. "Qual formato cada canal usa: artigo, newsletter, post, carrossel, vídeo
   longo, vídeo curto?"
3. "Qual cadência o time consegue sustentar por três meses?"
4. "Há limites técnicos: tamanho de título, caracteres, proporção de imagem,
   duração de vídeo?"
5. "Onde a peça é publicada depois de pronta: CMS, ferramenta de e-mail,
   agendador, publicação manual?"
6. "Quem aprova antes de publicar?"
7. "Algum canal de apoio, como lista de transmissão no WhatsApp?"

## Limites técnicos de referência

Valores de mercado em uso em 2026. Confirme com o usuário, porque
plataformas mudam limites e cada marca escolhe o seu padrão.

| Canal | Formato | Limites comuns |
| --- | --- | --- |
| Blog | artigo | title de 50 a 60 caracteres, description de 145 a 155, imagem de capa 1200x630 para compartilhamento |
| Email | newsletter ou nutrição | assunto de 30 a 50 caracteres, pré-cabeçalho de 40 a 90, largura de 600 px |
| LinkedIn | post e documento | até 3.000 caracteres; cerca de 210 aparecem antes do "ver mais"; imagem 1200x627 ou 1080x1350 |
| Instagram | post, carrossel, reels | legenda até 2.200 caracteres; até 20 itens por carrossel; feed 1080x1350; reels 1080x1920 |
| Substack | publicação | título curto, subtítulo de uma linha, imagem de capa 1456x816 |
| YouTube | vídeo | título até 100 caracteres (cerca de 60 visíveis), descrição até 5.000, miniatura 1280x720 |
| WhatsApp (apoio) | lista de transmissão ou canal | mensagem curta, link no fim, envio só para quem aceitou receber (LGPD) |

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Diretórios de trabalho

- **Caminho do acervo:** `acervo/`
- **Caminho das peças:** `canais/`
- **Caminho do calendário:** `calendario/`

## Blog

- **Ativo?** sim
- **Formato:** artigo
- **Skill de redação:** inboundfy-especialista-blog
- **Skill de imagem, se houver:** inboundfy-especialista-blog-imagem
- **Cadência de publicação:** 1 artigo por semana, às terças
- **Formato e limites técnicos:** title de 50 a 60 caracteres, capa 1200x630
- **Onde o artefato final é publicado (fora do Inboundfy):** CMS do site, publicação pela responsável de marketing

## Email

- **Ativo?** sim, desde 2026-11-15
- **Formato:** newsletter quinzenal e e-mails de campanha
- **Skill de redação:** inboundfy-especialista-email
- **Skill de imagem, se houver:** não se aplica
- **Cadência de publicação:** quinzenal; 2 por semana durante campanha
- **Formato e limites técnicos:** assunto até 45 caracteres, pré-cabeçalho até 80
- **Onde o artefato final é publicado (fora do Inboundfy):** ferramenta de e-mail marketing, envio agendado

## WhatsApp (canal de apoio)

- **Ativo?** sim
- **Formato:** lista de transmissão para clientes que aceitaram receber novidades
- **Skill de redação:** sem especialista; produção manual a partir do post do blog
- **Cadência de publicação:** 1 mensagem por semana
- **Onde o artefato final é publicado (fora do Inboundfy):** WhatsApp Business
```

## Checklist de completude

- [ ] Caixa do canal coerente entre `estrategia.md` e `canais.md`.
- [ ] Diretórios de trabalho definidos.
- [ ] Especialista com nome real de `SKILLS.md`.
- [ ] Cadência sustentável confirmada.
- [ ] Limites técnicos e destino preenchidos.
- [ ] Canal desativado mantido com data.

## Erros comuns

- Ativar canal sem especialista. O planejamento não consegue rotear o brief.
- Inventar nome de skill.
- Cadência otimista sem confirmação da capacidade do time.
- Tratar WhatsApp como canal de massa sem consentimento de quem recebe.

## Relações

`inboundfy-planejamento` e `inboundfy-producao` leem formato, cadência e
especialista. `inboundfy-growth-distribuicao` usa os canais ativos para
redistribuir peças. Limites técnicos alimentam as validadoras de cada canal.
