# Motor de composição com identidade confirmada

A chamadora entrega dimensões, texto aprovado, finalidade e arquivos de marca. Esta base devolve uma composição sintética conferida. Fotografia documental e captura de produto seguem a fonte exigida pelo brief.

## Diagnóstico da composição

Confirme: a imagem precisa demonstrar um fato ou apenas ilustrar uma ideia? O texto cabe no espaço útil? Existe logo oficial? Qual corte o destino aplica? A marca permite fotografia, ilustração ou ambos?

| Necessidade | Procedimento | Condição de entrega |
| --- | --- | --- |
| Ilustração conceitual | Gerar cena com identidade definida | Registrar que a cena é sintética |
| Tela real de produto | Solicitar captura autorizada à chamadora | Não desenhar interface fictícia como captura |
| Logo e assinatura | Usar arquivo oficial recebido | Não recriar símbolo por prompt |
| Texto longo ou tabela | Compor com ferramenta de layout disponível | Não aceitar grafia aproximada |
| Dimensão não suportada pelo motor | Gerar com área de corte planejada | Ajustar exportação e conferir pixels finais |
| Marca ainda indefinida | Listar os arquivos faltantes | Devolver pedido de identidade |

## Procedimento do motor

1. Registre largura, altura, proporção, formato de arquivo, área segura e peso máximo recebidos. A base não escolhe esses valores pelo nome de um canal.
2. Abra paleta, tipografia, logos e exemplos aprovados de `brand/`. Identifique qual arquivo autoriza cada escolha.
3. Separe conteúdo obrigatório de ornamento. Ordene título, imagem principal e assinatura conforme a leitura pretendida.
4. Escreva instrução visual com sujeito, ação, ambiente, posição dos elementos e espaço reservado para texto. Inclua exclusões específicas: dado pessoal, marca de terceiro, interface simulada ou símbolo não autorizado.
5. Gere com a ferramenta disponível. Registre nome do motor e versão quando informada. Não registre credenciais. Consulte `context/integracoes.md` para a integração configurada.
6. Abra o arquivo produzido. Compare palavra por palavra com o texto aprovado, incluindo acentos, preços e pontuação.
7. Confira proporção, recorte e nitidez. Veja a composição no tamanho de leitura e numa miniatura de 320 px de largura como teste editorial local.
8. Se houver falha, altere somente a instrução responsável. Preserve a versão anterior. Repita todas as conferências no novo arquivo.
9. Entregue imagem, texto alternativo e manifesto à chamadora. A aprovação específica permanece com a validadora pareada.

## Template de pedido visual

```yaml
id: "<id>"
brief: <caminho>
arquivo_destino: <caminho definido pela chamadora>
largura_px: <inteiro>
altura_px: <inteiro>
formato: <png|jpg|webp>
peso_maximo_bytes: <valor ou não definido>
area_segura_px: {topo: <n>, direita: <n>, base: <n>, esquerda: <n>}
texto_literal: [<título>, <complemento>]
fontes_marca: [<paleta>, <tipografia>, <logo>]
cena: <objeto, ação e ambiente>
composicao: <posições e hierarquia>
exclusoes: [<elementos incompatíveis>]
motor: <ferramenta disponível>
```

## Exemplo completo: peça fictícia da Pinhão Bicicletas

O pedido traz 1200 × 800 px, PNG, título “Freio revisado antes de sair” e logo oficial fictício. A identidade de demonstração usa fundo creme `#FFF4DC`, texto escuro `#17392B` e fonte fornecida pela empresa. Esses valores servem apenas para este exemplo.

**Primeira instrução inadequada:** “Faça uma arte bonita de bicicleta.” Ela não informa texto, espaço ou função.

**Instrução trabalhada:** “Ilustração lateral de uma bicicleta parada numa oficina organizada. Posicione a roda dianteira no terço direito e reserve o lado esquerdo para o título literal ‘Freio revisado antes de sair’. Fundo creme #FFF4DC e texto #17392B. Use o arquivo de logo recebido sem redesenhar. Não inclua pessoas identificáveis, preço, selos de certificação ou números de desempenho. Preserve 60 px livres nas quatro bordas. Exporte 1200 × 800 px em PNG.”

**Primeira saída observada:** a última palavra perdeu uma letra e o logo ficou no corte. A rodada foi reprovada. A correção reduziu a cena para ampliar a área de texto e reposicionou o arquivo oficial dentro da margem.

**Manifesto da segunda saída:**

```yaml
id: "0042"
arquivo: arte.png
largura_px: 1200
altura_px: 800
formato: png
motor: ferramenta disponível registrada na execução
origem_visual: composição sintética
texto_conferido: "Freio revisado antes de sair"
logo: brand/logo-oficial.svg
paleta: brand/cores.md
area_segura_px: 60
miniatura_conferida: sim
alt: "Bicicleta com destaque para o freio dianteiro e título sobre a revisão antes de sair."
estado: candidato-para-validacao
```

O nome do motor precisa ser preenchido com o valor real durante uma execução. O exemplo não afirma que uma imagem foi gerada nesta documentação.

## Checklist numerado da imagem

1. Arquivo abre e usa a dimensão recebida.
2. Texto literal está completo, com grafia e acentos corretos.
3. Logo veio do arquivo oficial.
4. Paleta e tipografia possuem fonte de marca.
5. Nenhum elemento obrigatório toca a área de corte.
6. Leitura funciona no tamanho de destino e na miniatura de teste.
7. Texto alternativo transmite a informação essencial sem repetir uma legenda inteira.
8. Motor, origem sintética e versões estão registrados.
9. A validadora recebe o arquivo final, não apenas o prompt.

## Erros comuns

- Aprovar texto pelo prompt sem abrir a imagem. O motor pode alterar letras.
- Esticar uma imagem para caber. Refaça o corte ou a composição preservando a proporção.
- Redesenhar logo com IA. Insira o ativo oficial.
- Apresentar pessoa sintética como cliente. Use cena conceitual identificada.
- Guardar token no manifesto. Registre apenas o nome da integração.

## Arquitetura aplicada

Carregue [fontes](../_shared/01-preflight-e-fontes.md) e [contexto editorial](../_shared/05-contexto-editorial.md) antes do pedido. O manifesto segue [artefato](../_shared/02-contrato-de-artefato.md). Devolva com [handoff](../_shared/03-interacao-e-handoff.md) e preserve versões conforme [retomada](../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

A base recebe medidas e conteúdo, sem escolher canal, campanha ou legenda. Leia esta referência no passo de montar o pedido visual. Use `inboundfy-base-validador` para o contrato comum e retorne à especialista chamadora para a conferência do destino.
