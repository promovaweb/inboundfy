# Arquivos do negócio, fontes e marca

O Inboundfy combina três camadas sem copiá-las para um único arquivo:

1. `.inboundfy/context/`: dados estruturados do negócio.
2. `.inboundfy/fontes-projeto.md`: lista das fontes que já existiam.
3. `brand/`: manual, tokens, logos, tipografia e aplicações de marca, quando
   a pasta existir.

O arquivo `.inboundfy/context/aprendizado.md` mantém as orientações dadas durante as
revisões. Cada registro informa se vale para uma peça, canal, persona ou todo o
projeto. A skill lê esse arquivo antes de produzir e encaminha as orientações
confirmadas de voz, grafia ou proibição para o arquivo normativo correspondente.

Durante o setup, arquivos Markdown com nome em maiúsculas, como `PRODUCT.md`,
`COPY.md` e `PROHIBITED.md`, são descobertos em todo o projeto. Dentro de
`brand/`, todos os Markdown entram na lista, inclusive nomes em minúsculas.
O setup registra caminho, assunto e possíveis conflitos, mas não move nem
reescreve as fontes.

Antes de produzir, cada skill lê a lista de fontes e carrega somente os arquivos
relevantes. Fatos confirmados em `.inboundfy/context/` prevalecem sobre exemplos. Conflitos
entre fontes são explicitados e não podem ser resolvidos por invenção.

## Proibições são hard gates

`context/proibicoes.md` reúne vetos do negócio e
`context/estruturas-proibidas.md` reúne padrões genéricos de escrita
artificial. A validação faz um passe literal e outro semântico, com reprovação
do asset a cada ocorrência, independentemente da escrita, da estética ou do
SEO.

Detalhes de precedência estão em [CONTEXTO.md](../../CONTEXTO.md).

## Arquivos do negócio

| Arquivo | Informação mantida |
| --- | --- |
| `empresa.md` | identidade, missão e modelo de negócio |
| `pessoas.md` | porta-vozes e nomes que podem ser citados |
| `produtos.md` | produtos, recursos e limites |
| `servicos.md` | serviços e condições |
| `ofertas.md` | preço, validade, garantia e chamada para ação |
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
| `depoimentos.json` | depoimentos de clientes: nome, cargo, empresa, citação literal, foto e consentimento de uso |
| `integracoes.md` | configurações gerais, ferramentas por área, estado de cada acesso e variáveis de ambiente esperadas |
| `.inboundfy/context/aprendizado.md` | sugestões, correções, alinhamentos e dicas confirmadas |

`depoimentos.json` é o único arquivo de `context/` em formato JSON em vez de
Markdown: um depoimento é um registro repetível com os mesmos campos (nome,
cargo, empresa, citação, foto, fonte, consentimento), não um texto corrido.
`inboundfy-contexto-depoimentos` grava cada entrada com um `id` estável e
pergunta explicitamente o consentimento de uso antes de liberar o depoimento
para `canaisAutorizados`; sem essa confirmação, o registro fica marcado como
`pendente` e nenhuma skill de canal pode citá-lo em peça pública.

## Quando faltar uma informação

Use a skill `inboundfy-contexto-*` ligada ao arquivo. Ela pergunta, registra a
origem e atualiza o conteúdo sem mudar o caminho. Quando o próprio arquivo
estiver ausente, execute primeiro `inboundfy-setup` para restaurar o template.

## Integrações registradas no contexto

`context/integracoes.md` guarda quais ferramentas o projeto usa, o estado de
cada acesso e os nomes das variáveis de ambiente. Nenhum valor de chave,
token ou senha é gravado ali. As skills de dados, SEO e growth consultam esse
arquivo antes de prometer um relatório que depende de ferramenta conectada.

As áreas de trabalho também leem esse arquivo no diagnóstico. A área de dados
verifica GA4, Tag Manager e Search Console. A área de SEO verifica Search
Console e ferramentas de palavra-chave. A área de growth verifica contas de
anúncio e pixel. Quando o acesso está marcado como `sem acesso`, o pedido
segue registrado e a pendência aparece no arquivo.

O percurso completo está em
[Configurações e integrações](12-configuracoes-e-integracoes.md).

## Como conferir a marca

Quando `brand/` existir, abra o manual e os ativos usados pela tarefa. Uma peça
visual precisa respeitar logo, proporção, paleta, tipografia e aplicação. Uma
peça textual também pode depender da voz e das proibições registradas ali.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | arquivos do negócio, fontes descobertas, marca e proibições |
| Autoridade | `CONTEXTO.md` e contrato de descoberta do setup |
