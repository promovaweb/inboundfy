# Thumbnail de vídeo longo: produção

O par `inboundfy-especialista-video-imagem` e `inboundfy-validador-video-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente video-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Thumbnail | 16:9 | 1280×720 |

- Fonte ou motor: Geração por inboundfy-base-imagem com um foco visual.
- Arquivos: thumbnail.png e README.md com frase, título do vídeo e trecho do roteiro que sustenta a promessa.
- Destino: `97-ativos-finais/video/<item>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Composição e escolha de abordagem

| Situação observada | Ação |
| --- | --- |
| Apresentador reconhecível faz parte do brief | Usar foto autorizada como foco, sem alterar identidade. |
| Tutorial depende de uma ação concreta | Mostrar o objeto ou recorte real da ação. |
| Número só existe como hipótese | Retirar o número; pedir frase sustentada pelo roteiro. |

1. Leia tema, título e abertura do roteiro. Localize o trecho que entrega a promessa da thumbnail e registre a seção ou tempo previsto. Sem entrega no roteiro, peça revisão do brief.
2. Escreva texto de três a cinco palavras. Conte palavras separadas por espaço e mantenha o sentido aprovado. A thumbnail complementa o título, sem adicionar valor, prazo ou resultado sem fonte.
3. Escolha apenas um foco: rosto autorizado, objeto demonstrado ou número comprovado. Não empilhe os três. Captura de produto deve vir do produto; uma imagem sintética não pode fingir demonstração real.
4. Passe texto, foco, contraste e dimensão a `inboundfy-base-imagem`. Reserve espaço para a sobreposição de duração e demais elementos do destino. Não gere um rosto identificável para representar o apresentador.
5. Abra a saída a 120 px de largura. Leia a frase e reconheça o foco sem ampliar. Se falhar, reduza decoração, reorganize linhas e aumente contraste antes de trocar a mensagem.
6. Compare lado a lado thumbnail, título e roteiro. Registre os três no README e envie o pacote completo à validadora. Variações para teste só são criadas quando autorizadas e recebem identificação própria.

## Template de brief visual e entrega

Preencha antes de chamar o motor ou buscar a foto. Preserve o envelope do contrato compartilhado no README. O texto entre chaves é campo de preenchimento.

```yaml
id: "{ID da peça}"
skill: inboundfy-especialista-video-imagem
estado: revisao
brief: "04-briefs/{arquivo}.md"
entrada: "{texto final e versão}"
persona: "{ID confirmado}"
fontes:
  - "{context/canais.md e identidade visual}"
titulo_video: "{título aprovado}"
texto_thumbnail: "{três a cinco palavras}"
contagem_palavras: "{total}"
entrega_no_roteiro: "{arquivo, seção ou tempo previsto}"
foco_unico: "{rosto autorizado, objeto ou número com fonte}"
origem_foco: "{ativo e permissão}"
sobreposicoes: "{máscara do destino}"
alt: "{frase e assunto visual}"
saidas:
  - "{caminho de cada arquivo exportado}"
preview: "{largura de teste, recorte e resultado observado}"
pendencias: []
proxima_skill: inboundfy-validador-video-imagem
```

O README relaciona o brief, o texto final, cada exportação, suas dimensões, peso, alt e origem dos ativos. No pacote, mantenha `brief` no frontmatter. Texto longo em imagem exige transcrição acessível junto ao arquivo; o alt não substitui a transcrição.

## Exemplo completo de produção

A empresa fictícia brasileira **Serra Oficina Digital**, de Joinville, produz um vídeo sobre identificação de recebimentos no fechamento de caixa. O título aprovado é “Como conferir os recebimentos por Pix no fim do dia”. O roteiro demonstra a comparação de comprovante e registro na seção “Conferência final”, a partir de 02:10 no plano de edição.

Brief 0042: 1280×720 em `97-ativos-finais/video/conferencia-pix/`. Texto literal da thumbnail: “Confira cada Pix recebido” (quatro palavras). Foco único: caderno ilustrado de conferência com símbolo simples de confirmação. Não há rosto, saldo bancário, tela de banco nem alegação de ganho financeiro.

Composição: texto creme sobre fundo azul escuro à esquerda; caderno à direita; margem de 64 px; canto inferior direito livre para duração. O logo fornecido aparece pequeno no canto superior, conforme a marca fictícia. Alt: “Confira cada Pix recebido, ao lado de um caderno ilustrado de conferência”.

README registra frase, contagem quatro, título literal, caminho do roteiro, seção de entrega, origem ilustrativa do caderno e preview a 120 px. O título informa a tarefa completa; a thumbnail destaca a conferência. Entrega: `thumbnail.png` e README, estado revisao, destino `inboundfy-validador-video-imagem`.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Texto da thumbnail tem três a cinco palavras e coincide com a frase aprovada; grafias e vetos são conferidos na imagem e no alt.
2. **Literal:** Título do vídeo e trecho de entrega no roteiro estão registrados e correspondem à versão candidata.
3. **Semântica:** Promessa da thumbnail é cumprida pelo roteiro e não acrescenta prazo, valor ou resultado sem fonte.
4. **Semântica:** Rosto, captura ou número têm origem e permissão; ilustração não finge demonstração ou identidade real.
5. **Estrutural:** Thumbnail e README estão no diretório contratado, com vínculo ao roteiro ou pacote YouTube e ao brief.
6. **Estrutural:** Dimensão é exata e o preview inclui a sobreposição de duração do destino.
7. **Visual:** Texto pode ser lido a 120 px e há um único foco visual reconhecível.
8. **Visual:** Contraste e hierarquia preservam leitura; logo e sobreposição não cobrem texto ou assunto principal.

## Erros comuns e correções

- Usar sete palavras para resumir o roteiro: voltar à frase de três a cinco palavras.
- Repetir o título inteiro: destacar a ação aprovada.
- Aumentar curiosidade com promessa falsa: exigir trecho do roteiro que a entrega.

## Medição e limites

CTR é cliques divididos por impressões na mesma superfície. Interpretar junto com retenção inicial, período e amostra; clique alto com abandono não comprova adequação da promessa. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A especialista prepara o conjunto completo e encaminha arquivos, fontes, medidas e previews a `inboundfy-validador-video-imagem`. Registre a fonte ou motor utilizado, sem expor segredos. Reaproveite a versão existente quando o pedido não exigir refação. Mudança em texto aprovado ou dado factual retorna à fonte responsável; ajuste visual não autoriza mudar a copy.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato e a fonte de imagem permitida. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Entrega para a validadora

Encaminhe a `inboundfy-validador-video-imagem` o conjunto descrito em Formato e pacote, acompanhado de ID, brief, texto final e versão, fontes, medidas reais e previews. Inclua o registro de origem dos ativos e as pendências. Uma devolução mantém o mesmo ID e informa a rodada; ajuste os arquivos apontados e entregue novamente todas as exportações, não apenas o recorte corrigido.

## Entrada de pacote YouTube

No passo 1, aceite também o pacote aprovado de `inboundfy-especialista-youtube`, com título, tarefa mostrada, textos literais da thumbnail e trecho correspondente do roteiro. Preserve a origem em `canais/youtube/`; mantenha as imagens no destino visual contratado e registre o vínculo no README. A revisão visual retorna a `inboundfy-especialista-video-imagem`; alteração na copy volta à especialista de texto que a produziu.
