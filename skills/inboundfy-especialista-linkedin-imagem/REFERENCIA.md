# Imagem de post e capa de artigo LinkedIn: produção

O par `inboundfy-especialista-linkedin-imagem` e `inboundfy-validador-linkedin-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente linkedin-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Post | 1:1 ou 4:5 | 1080×1080 ou 1080×1350 |
| Capa de artigo | 1.91:1 aproximada | 1200×627 |

- Fonte ou motor: Geração por inboundfy-base-imagem com frase do texto final.
- Arquivos: post.png ou capa-artigo.png e README.md ligado ao texto correspondente.
- Destino: `97-ativos-finais/linkedin/<item>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Composição e escolha de abordagem

| Situação observada | Ação |
| --- | --- |
| Post com tese curta | Uma frase visual; explicação permanece no texto do post. |
| Artigo com título e subtítulo | Capa horizontal com título dominante e subtítulo de apoio. |
| Estatística exige ressalva extensa | Usar outra frase aprovada ou pedir nova copy; não esconder a ressalva. |

1. Identifique post ou artigo no brief. Capa de perfil e banner institucional têm outro uso; não substitua a peça por esses formatos.
2. Leia o texto final e selecione uma frase que permaneça verdadeira sozinha. Preserve ressalvas que mudam o sentido. Se o dado depende de amostra ou período, mantenha a identificação visível ou escolha uma frase sem número.
3. Para post, planeje uma frase central e um objeto visual; mantenha explicação na legenda. Para artigo, organize título e subtítulo aprovado com hierarquia editorial.
4. Passe texto literal e formato a `inboundfy-base-imagem`. Use identidade da série quando registrada, sem fabricar interface, relatório, selo ou depoimento.
5. Abra o arquivo a 300 px de largura e simule o recorte do destino. Confira palavras, marca e leitura. Legibilidade exige preview real, não uma impressão mental.
6. Salve a imagem junto ao texto e registre qual frase e qual seção autorizaram seu conteúdo. Se a frase precisar mudar, devolva a alteração à especialista de texto antes de gerar outra versão.

## Template de brief visual e entrega

Preencha antes de chamar o motor ou buscar a foto. Preserve o envelope do contrato compartilhado no README. O texto entre chaves é campo de preenchimento.

```yaml
id: "{ID da peça}"
skill: inboundfy-especialista-linkedin-imagem
estado: revisao
brief: "04-briefs/{arquivo}.md"
entrada: "{texto final e versão}"
persona: "{ID confirmado}"
fontes:
  - "{context/canais.md e identidade visual}"
destino: "{post nativo ou artigo}"
frase_literal: "{trecho aprovado}"
origem_frase: "{arquivo e seção}"
subtitulo: "{somente quando aprovado para capa de artigo}"
serie_visual: "{referência local ou não aplicável}"
objeto_visual: "{objeto que explica a tese}"
alt: "{texto e elemento visual relevantes}"
saidas:
  - "{caminho de cada arquivo exportado}"
preview: "{largura de teste, recorte e resultado observado}"
pendencias: []
proxima_skill: inboundfy-validador-linkedin-imagem
```

O README relaciona o brief, o texto final, cada exportação, suas dimensões, peso, alt e origem dos ativos. No pacote, mantenha `brief` no frontmatter. Texto longo em imagem exige transcrição acessível junto ao arquivo; o alt não substitui a transcrição.

## Exemplo completo de produção

A empresa fictícia brasileira **Nuvem de Papel**, de Belo Horizonte, presta organização administrativa para escritórios. O post aprovado explica que o responsável por cada prazo precisa constar no registro da equipe.

Brief 0042 pede um post 1080×1350 em `97-ativos-finais/linkedin/responsavel-prazo/`. Frase literal aprovada: “Cada prazo precisa de uma pessoa responsável”. A imagem mostra uma ficha ilustrada com os campos “Prazo” e “Responsável”, sem dados pessoais. A ficha é ilustração explicativa, não captura do produto. Fundo azul escuro, texto creme e logo fornecido pela marca no rodapé, com margem de 72 px.

Alt: “Frase Cada prazo precisa de uma pessoa responsável, acompanhada por ficha ilustrada de prazo e responsável”. README aponta para a seção “Registro de responsabilidades” do texto final, preserva a frase e identifica `post.png`, 1080×1350. A 300 px, a frase e os dois rótulos podem ser lidos.

Variante prevista no mesmo modelo para outro brief de artigo: `capa-artigo.png`, 1200×627; título aprovado “Como registrar os prazos da equipe”; subtítulo “Campos e revisão semanal”. Não usar a proporção do post para a capa. A composição horizontal mantém a ficha à direita e título à esquerda. Essa variante exige seu próprio vínculo e revisão, sem trocar o arquivo do post.

Entrega do brief 0042: `post.png` e README, estado revisao, destino `inboundfy-validador-linkedin-imagem`.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Frase, dados e subtítulo coincidem com o texto aprovado; grafias e vetos incluem alt e metadados.
2. **Literal:** README identifica o trecho do texto que autoriza a frase e o destino exato: post ou artigo.
3. **Semântica:** Frase isolada preserva condições do argumento; imagem não transforma ilustração em captura ou comprovação real.
4. **Semântica:** Imagem atende à tese do post ou artigo e não insere promessa comercial, selo ou depoimento adicional.
5. **Estrutural:** Post ou capa usa o arquivo e o diretório contratados com vínculo ao texto correspondente.
6. **Estrutural:** Proporção e dimensões correspondem ao destino; capa de perfil não foi confundida com capa de artigo.
7. **Visual:** Texto é legível no preview real de 300 px e não fica cortado no destino previsto.
8. **Visual:** Logo, paleta e tipografia seguem a marca e a série registrada; título domina o subtítulo quando presente.

## Erros comuns e correções

- Criar imagem com o parágrafo inteiro: usar a frase aprovada.
- Retirar condição de um número: preservar a ressalva ou trocar o trecho.
- Usar banner de perfil como capa de artigo: conferir destino no brief.

## Medição e limites

Registrar leitura a 300 px e, após publicação autorizada, cliques ou interações por impressão segundo o objetivo. Comparar posts e artigos separadamente, com período e amostra. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A especialista prepara o conjunto completo e encaminha arquivos, fontes, medidas e previews a `inboundfy-validador-linkedin-imagem`. Registre a fonte ou motor utilizado, sem expor segredos. Reaproveite a versão existente quando o pedido não exigir refação. Mudança em texto aprovado ou dado factual retorna à fonte responsável; ajuste visual não autoriza mudar a copy.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato e a fonte de imagem permitida. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Entrega para a validadora

Encaminhe a `inboundfy-validador-linkedin-imagem` o conjunto descrito em Formato e pacote, acompanhado de ID, brief, texto final e versão, fontes, medidas reais e previews. Inclua o registro de origem dos ativos e as pendências. Uma devolução mantém o mesmo ID e informa a rodada; ajuste os arquivos apontados e entregue novamente todas as exportações, não apenas o recorte corrigido.
