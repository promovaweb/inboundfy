# Roteamento por canal

Leia no passo 2 do fluxo. A tabela diz quem escreve, quem aprova e se o CLI
cria a pasta da peça.

## Canais criados pelo CLI

`inboundfy content create` aceita seis canais. Cada um precisa estar marcado
em `.inboundfy/estrategia.md` como `- [x] Blog`, `- [x] Email`,
`- [x] LinkedIn`, `- [x] Instagram`, `- [x] Substack` ou `- [x] YouTube`.

| Canal no CLI | Especialista | Validadora | Imagem pareada | Formato típico | CTA típico |
| --- | --- | --- | --- | --- | --- |
| `blog` | `inboundfy-especialista-blog` | `inboundfy-validador-blog` | `inboundfy-especialista-blog-imagem` | artigo com intenção de busca, 1.200 a 2.500 palavras para guia | material rico, contato, próximo artigo |
| `email` | `inboundfy-especialista-email` | `inboundfy-validador-email` | não | assunto, pré-cabeçalho, corpo curto, um link principal | clique único |
| `linkedin` | `inboundfy-especialista-linkedin` | `inboundfy-validador-linkedin` | `inboundfy-especialista-linkedin-imagem` | post com gancho nas duas primeiras linhas | comentário, conversa, link no primeiro comentário quando a marca usar |
| `instagram` | `inboundfy-especialista-instagram` | `inboundfy-validador-instagram` | `inboundfy-especialista-instagram-imagem` | carrossel ou legenda com roteiro visual | salvar, enviar, chamar no direct ou WhatsApp |
| `substack` | `inboundfy-especialista-substack` | `inboundfy-validador-substack` | não | edição autoral com voz pessoal | assinatura, resposta |
| `youtube` | `inboundfy-especialista-youtube` | `inboundfy-validador-youtube` | `inboundfy-especialista-video-imagem` para thumbnail | roteiro, título, descrição e capítulos | inscrição, link na descrição |

Limites de caracteres e proporções de imagem mudam com as plataformas. A
referência atual de cada canal fica na `REFERENCIA.md` da especialista; a
produção não repete esses números no brief.

## Canais sem suporte do CLI

Estas especialistas existem, mas `inboundfy content create` não cria a pasta
nem `inboundfy content status` acompanha o estado:

| Canal | Especialista | Validadora |
| --- | --- | --- |
| newsletter | `inboundfy-especialista-newsletter` | `inboundfy-validador-newsletter` |
| ebook | `inboundfy-especialista-ebook` | `inboundfy-validador-ebook` |
| podcast | `inboundfy-especialista-podcast` | `inboundfy-validador-podcast` |
| webinar | `inboundfy-especialista-webinar` | `inboundfy-validador-webinar` |
| vídeo curto | `inboundfy-especialista-video` | `inboundfy-validador-video` |
| infográfico | `inboundfy-especialista-infografico` | `inboundfy-validador-infografico` |
| changelog | `inboundfy-especialista-changelog` | `inboundfy-validador-changelog` |

Para esses canais, use a estrutura de pacote de `METODOLOGIA.md`
(`97-ativos-finais/<canal>/<item>/README.md`) ou o diretório definido em
`.inboundfy/context/canais.md`. Avise o usuário que o estado fica registrado
no README do item e no relatório do pacote, sem o portão de SHA-256 do CLI.
Não crie pasta manual dentro de `canais/` para esses canais: ela ficaria fora
de `conteudos.json` e o catálogo a apontaria como divergência.

## Qual capacidade transversal acionar

| Sinal no brief | Capacidade |
| --- | --- |
| Peça precisa ranquear no Google | `inboundfy-base-seo` antes, `inboundfy-seo` para revisão |
| Peça precisa ser citada por assistentes de IA | `inboundfy-geo` |
| Página ou e-mail com oferta e preço | `inboundfy-copy-oferta` |
| Texto persuasivo de venda | `inboundfy-copy-persuasao` |
| Redação do zero a partir de base editorial | `inboundfy-copy-redacao` |
| Material rico para captar lead | `inboundfy-growth-lead-magnet` |
| Plano de distribuição depois da publicação | `inboundfy-growth-distribuicao` |

Acione só o que o brief pede. Cada capacidade extra é mais uma leitura e mais
uma chance de desviar da voz.
