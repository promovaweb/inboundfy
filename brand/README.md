# Marca Thothfy

O Thothfy organiza sistemas de copy, marketing e SEO para uso por pessoas e
agentes. Sua identidade combina o petróleo e o turquesa da Promovaweb com
laranja, variação associada a conteúdo, energia editorial e decisão.

## Conceito visual

O símbolo é um **T construído como fluxo editorial**. A barra e a haste
turquesa formam a estrutura; os dois módulos laranja representam entrada e
saída, da orientação à peça produzida.

## Arquivos oficiais

| Arquivo | Uso |
| --- | --- |
| `logo/icon.svg` | ícone principal com placa petróleo |
| `logo/icon-light.svg` | ícone transparente sobre fundo claro |
| `logo/icon-dark.svg` | ícone transparente sobre fundo escuro |
| `logo/logo-light.svg` | assinatura horizontal sobre fundo claro |
| `logo/logo-dark.svg` | assinatura horizontal sobre fundo escuro |
| `logo/icon.png` | fallback raster de 512 × 512 px |

Preserve 12,5% de área livre ao redor do ativo. O tamanho mínimo é 24 px para
o ícone e 120 px para a assinatura horizontal.

## Sistema digital

- `colors/palette.json`: fonte editável da paleta;
- `tokens.json`: tokens agnósticos;
- `global.css`: webfontes, variáveis CSS e troca de tema;
- `tailwind-theme.js`: extensão para Tailwind CSS;
- `accessibility.md`: relatório de contraste;
- `typography/README.md`: hierarquia tipográfica.

## Regras para agentes

1. Use laranja para conteúdo e decisão editorial; turquesa para o sistema.
2. Use tokens semânticos e a variante correta para light ou dark mode.
3. Preserve os dois módulos laranja como parte do conceito.
4. Não aplique filtros, gradientes, sombras, rotações ou deformações.
5. Novos templates devem apontar para esta pasta como fonte canônica.
