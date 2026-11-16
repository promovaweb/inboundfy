# Clusters e links internos

Leia nos passos 5 e 6 do fluxo de `inboundfy-seo`.

## Regra de agrupamento

Dois termos ficam na mesma página quando a pessoa que busca um ficaria
satisfeita com a resposta do outro. Teste prático: busque os dois termos. Se
quatro ou mais dos dez primeiros resultados forem as mesmas URLs, os termos
pedem a mesma página.

| Situação | Ação |
| --- | --- |
| Mesma intenção, resultados quase iguais | Uma página; o termo maior é o principal |
| Mesma área, perguntas diferentes | Páginas diferentes no mesmo cluster |
| Mesmo termo, intenções diferentes por público | Uma página por público, se as personas forem distintas |
| Termo que já tem página ranqueando | Melhore a página existente antes de criar outra |

## Estrutura de cluster

```text
Página pilar (termo amplo, intenção informativa ou mista)
├── Página de apoio 1 (pergunta específica)
├── Página de apoio 2 (pergunta específica)
├── Página de apoio 3 (comparativo ou custo)
└── Página comercial (serviço, produto ou plano)
```

- O pilar cobre o assunto de forma ampla e resume cada apoio em uma seção.
- Cada apoio aprofunda uma pergunta e volta ao pilar.
- A página comercial recebe links do pilar e dos apoios no trecho do texto
  logo depois de a pessoa entender o problema.
- Um cluster útil começa com quatro a oito páginas. Cluster de vinte páginas
  sem material de origem gera conteúdo raso.

## Template de mapa de cluster

```markdown
## Cluster: {{tema}}

| Página | URL | Termo principal | Intenção | Estado | Fonte no acervo |
| --- | --- | --- | --- | --- | --- |
| Pilar | /{{slug}}/ | {{}} | {{}} | {{existe, reescrever, criar}} | {{ID}} |
| Apoio 1 | /{{slug}}/ | {{}} | {{}} | {{}} | {{ID}} |
| Comercial | /{{slug}}/ | {{}} | transacional | {{}} | {{ID}} |

### Links obrigatórios

| De | Para | Âncora | Posição no texto |
| --- | --- | --- | --- |
| Pilar | Apoio 1 | {{âncora descritiva}} | {{seção}} |
| Apoio 1 | Pilar | {{}} | {{abertura ou fechamento}} |
| Apoio 1 | Comercial | {{}} | {{seção de solução}} |
```

## Canibalização

Duas páginas do mesmo site disputam o mesmo termo quando o Search Console
mostra as duas URLs alternando para a mesma consulta, ou quando nenhuma passa
da segunda página apesar de bom conteúdo.

Correções, da mais leve para a mais forte:

1. Ajustar title, H1 e foco de uma das páginas para outra intenção.
2. Fundir as duas numa página mais completa e aplicar redirecionamento 301
   da que sai para a que fica.
3. Manter as duas e indicar canônica para a principal, quando as duas
   precisarem existir por motivo comercial.

Registre a proposta no pipeline antes de qualquer fusão ou redirecionamento.

## Links internos

- **Âncora descritiva.** Use o assunto da página de destino ("planos para
  microempresa"), não "saiba mais" ou "clique aqui".
- **Varie a âncora.** Repetir a mesma âncora exata em dezenas de páginas
  parece manipulação. Use variações naturais.
- **Link no corpo vale mais que no rodapé.** Coloque o link onde ele ajuda a
  leitura.
- **Página órfã não existe para o buscador.** Toda página nova recebe ao
  menos dois links de páginas já indexadas.
- **Profundidade.** Páginas comerciais a no máximo três cliques da Home.
- **Atualize as antigas.** Ao publicar uma página nova, edite duas ou três
  páginas existentes do mesmo assunto para apontar para ela.

## Links externos

Citar fonte oficial (Receita Federal, Portal do Simples Nacional, ANPD para
LGPD, IBGE) melhora a confiança do leitor. A conquista de links de outros
sites para o projeto é trabalho de `inboundfy-seo-links-externos`. Indique a
necessidade no handoff quando a SERP for dominada por domínios com muito mais
autoridade.
