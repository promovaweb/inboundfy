# Padrões e validação de demanda

Leia no passo 3 do fluxo de `inboundfy-seo-programatico`.

## Como achar o padrão

1. **Comece pelo que o projeto tem de sobra.** Lista de cidades atendidas,
   integrações, segmentos com clientes, termos explicados pelo suporte,
   modelos usados internamente. O dado vem antes da página.
2. **Escreva a busca com a variável.** `{{serviço}} em {{cidade}}`,
   `integração {{produto}} {{ferramenta}}`, `o que é {{termo}}`.
3. **Teste dez variações reais** na ferramenta de palavras-chave e no
   Search Console, incluindo variações pequenas, não só as maiores.
4. **Leia a SERP de três variações** (uma grande, uma média, uma pequena).

## Teste de demanda

| Sinal | Leitura | Ação |
| --- | --- | --- |
| Variações pequenas também têm busca ou impressão | Demanda distribuída | Padrão viável |
| Só o termo amplo tem busca | As pessoas não especificam a variável | Uma página forte, sem escala |
| SERP das variações mostra páginas específicas de outros sites | Formato aceito pelo buscador | Padrão viável, precisa de dado melhor |
| SERP das variações mostra só páginas genéricas | O buscador não separa as variações | Teste pequeno ou página única |
| Marketplaces e diretórios dominam todas as variações | Competição alta | Só entra com dado que eles não têm |

Volume de ferramenta para cauda longa no Brasil costuma aparecer como zero.
Some o volume da amostra e projete com cuidado. Impressões no Search Console
de páginas parecidas já publicadas valem mais que a estimativa.

## Intenção das variações

A mesma estrutura de busca pode mudar de intenção conforme a variável:

- "contabilidade para médicos" é transacional; "contabilidade para
  iniciantes" é informativa;
- "integração com Pix" pede página técnica; "integração com WhatsApp" pode
  pedir página de recurso com vídeo.

Classifique a intenção na amostra. Variações com intenção diferente saem do
conjunto ou ganham outro modelo.

## Fontes de dados por padrão

| Padrão | Fonte possível | Cuidado |
| --- | --- | --- |
| Local | Base de atendimento, unidades, equipe, pedidos por cidade | Só cidades atendidas de fato |
| Segmento | Casos de cliente, recursos por segmento, pesquisas de cliente | Precisa de diferença real no produto ou no uso |
| Integração | Documentação técnica, `.inboundfy/context/integracoes.md` | Integração nativa, por conector ou manual são coisas diferentes |
| Comparativo | Sites dos concorrentes, testes próprios, `concorrentes.md` | Data em todo dado; citar só o permitido |
| Modelo ou template | Arquivos próprios do time | O arquivo precisa ser útil sem a ferramenta |
| Glossário | Suporte, FAQ extraída, base editorial | Definição com exemplo próprio, não de dicionário |
| Diretório | Curadoria própria, cadastro dos listados | Consentimento dos listados e atualização |
| Dados públicos | IBGE, Banco Central, Receita Federal, prefeituras | Citar órgão, tabela e data |

## Dado único: teste das duas páginas

Pegue duas páginas irmãs do plano (Recife e Fortaleza, Pix e boleto) e
responda:

1. Uma pessoa que lê as duas aprende algo diferente em cada uma?
2. Se trocar o nome da variável, o resto da página continua verdadeiro?

Se a resposta à primeira for não, ou à segunda for sim, falta dado único.
Volte à base antes de seguir.

## Padrões que costumam falhar

- Página por bairro para negócio que atende a cidade inteira do mesmo jeito.
- Página "melhor {{produto}} em {{cidade}}" sem lista curada nem regra de
  escolha publicada.
- Glossário de termos que ninguém pesquisa só para ganhar volume de páginas.
- Página por concorrente com texto depreciativo e sem dado verificável.
