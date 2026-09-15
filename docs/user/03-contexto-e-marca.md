# Contexto, fontes e marca

O Inboundfy combina três camadas sem copiá-las para um único arquivo:

1. `.inboundfy/context/`: dados estruturados do negócio.
2. `.inboundfy/fontes-projeto.md`: inventário das fontes que já existiam.
3. `brand/`: manual, tokens, logos, tipografia e aplicações de marca, quando
   a pasta existir.

O arquivo `.inboundfy/context/aprendizado.md` mantém as orientações dadas durante as
revisões. Cada registro informa se vale para uma peça, canal, persona ou todo o
projeto. A skill lê esse arquivo antes de produzir e encaminha regras
confirmadas de voz, grafia ou proibição para o arquivo normativo correspondente.

Durante o setup, arquivos Markdown com nome em maiúsculas, como `PRODUCT.md`,
`COPY.md` e `PROHIBITED.md`, são descobertos em todo o projeto. Dentro de
`brand/`, todos os Markdown são inventariados, inclusive nomes em minúsculas.
O setup registra caminho, assunto e possíveis conflitos, mas não move nem
reescreve as fontes.

Antes de produzir, cada skill lê o inventário e carrega somente os arquivos
relevantes. Fatos confirmados no contexto prevalecem sobre exemplos; conflitos
entre fontes são explicitados e não podem ser resolvidos por invenção.

## Proibições são hard gates

`context/proibicoes.md` reúne vetos do negócio.
`context/estruturas-proibidas.md` reúne padrões genéricos de escrita
artificial. A validação faz um passe literal e outro semântico. Uma ocorrência
reprova o asset, independentemente de nota, estética ou SEO.

Detalhes de precedência estão em [CONTEXTO.md](../../CONTEXTO.md).

## Arquivos de contexto

| Arquivo | Informação mantida |
| --- | --- |
| `empresa.md` | identidade, missão e modelo de negócio |
| `pessoas.md` | porta-vozes e pessoas citáveis |
| `produtos.md` | produtos, recursos e limites |
| `servicos.md` | serviços e condições |
| `ofertas.md` | preço, validade, garantia e CTA |
| `marca-voz.md` | idioma, tom e exemplos de voz |
| `publico.md` | públicos, dores e objeções |
| `concorrentes.md` | referências e diferenças confirmadas |
| `enderecos.md` | Endereço físico, registro legal e contatos oficiais |
| `links.md` | URLs oficiais, perfis sociais, páginas e destinos de conversão |
| `canais.md` | formatos, caminhos e canais ativos |
| `ferramentas.md` | ferramentas que podem ser citadas |
| `glossario.md` | termos e grafias preferidas |
| `campanhas.md` | campanhas ativas e seus estados |
| `proibicoes.md` | vetos específicos do negócio |
| `estruturas-proibidas.md` | padrões genéricos de escrita artificial |
| `.inboundfy/context/aprendizado.md` | sugestões, correções, alinhamentos e dicas confirmadas |

## Quando um dado estiver faltando

Use a skill `inboundfy-contexto-*` ligada ao arquivo. Ela pergunta, registra a
origem e atualiza o conteúdo sem mudar o caminho. Quando o próprio arquivo
estiver ausente, execute primeiro `inboundfy-setup` para restaurar o template.

## Como conferir a marca

Quando `brand/` existir, abra o manual e os ativos usados pela tarefa. Uma peça
visual precisa respeitar logo, proporção, paleta, tipografia e aplicação. Uma
peça textual também pode depender da voz e das proibições registradas ali.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | contexto, fontes descobertas, marca e proibições |
| Autoridade | `CONTEXTO.md` e contrato de descoberta do setup |
