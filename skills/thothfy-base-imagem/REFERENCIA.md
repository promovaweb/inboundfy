# REFERENCIA.md — thothfy-base-imagem

Material de apoio para compor peças visuais sintéticas (card, slide,
thumbnail com texto) com identidade de marca consistente.

## Tabela de formatos por canal

| Peça | Proporção | Dimensão comum |
| --- | --- | --- |
| Carrossel Instagram/LinkedIn | 4:5 | 1080×1350 |
| Post de feed | 1:1 | 1080×1080 |
| Thumbnail de vídeo longo | 16:9 | 1280×720 |
| Capa de webinar / evento | 1:1 | 1080×1080 |
| Infográfico | 9:16 | 1080×1920 |
| Story / vídeo curto | 9:16 | 1080×1920 |
| Capa de LinkedIn (artigo) | 1.91:1 | 1200×627 |

Confirme sempre em `context/canais.md` — a tabela acima é o padrão de
mercado mais comum, não uma regra fixa do framework.

## Checklist de composição

- [ ] Um único foco visual por peça — se há mais de um elemento competindo
      por atenção, corte um.
- [ ] Contraste de texto sobre fundo suficiente para leitura em miniatura
      (teste mental: a peça ainda é legível do tamanho de um ícone?).
- [ ] Paleta e tipografia conferem com a identidade visual do usuário, não
      com uma escolha genérica de "design bonito".
- [ ] Logo presente apenas quando o canal exigir, no tamanho e posição
      definidos pela identidade visual do usuário.
- [ ] Nenhum erro de grafia no texto da peça (confira
      `context/glossario.md`).
- [ ] Margem de segurança suficiente para o texto não cortar em diferentes
      proporções de exibição (feed vs. story, por exemplo).

## Estrutura de brief de imagem

Toda skill de canal que chama `thothfy-base-imagem` deve fornecer:

```text
Formato: <proporção e dimensão>
Texto principal: <título ou dado central, curto>
Texto secundário: <subtítulo, se houver>
Tom visual: <sóbrio, vibrante, técnico, editorial — de context/marca-voz.md>
Elemento de marca obrigatório: <logo, cor de destaque, ícone>
```

## Erros comuns

- Gerar peça com texto longo demais para o formato — se o texto não cabe
  legível, peça para a skill de canal encurtar antes, não reduza a fonte
  até ficar ilegível.
- Inventar paleta ou tipografia quando o usuário ainda não definiu
  identidade visual — pare e sinalize a ausência (ver `SKILL.md`), não
  escolha uma paleta genérica "profissional".
- Reaproveitar a mesma composição para peças de canais diferentes só
  trocando o texto — ajuste proporção e hierarquia ao canal real.
