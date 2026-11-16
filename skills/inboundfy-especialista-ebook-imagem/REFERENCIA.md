# Capa de ebook e OpenGraph: produção

O par `inboundfy-especialista-ebook-imagem` e `inboundfy-validador-ebook-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente ebook-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Capa | 1:1.4 | 1600×2240 |
| OpenGraph | 1.91:1 | 1200×630 |

- Fonte ou motor: Geração por inboundfy-base-imagem com composição derivada.
- Arquivos: capa.png, opengraph.png e README.md com título final e relação entre derivados.
- Destino: `97-ativos-finais/ebook/<item>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Composição e escolha de abordagem

| Situação observada | Ação |
| --- | --- |
| Título longo | Quebrar linhas preservando todas as palavras. |
| Capa precisa de imagem conceitual | Gerar ilustração coerente sem simular comprovação de resultado. |
| OpenGraph fica apertado | Reposicionar elementos; retirar subtítulo apenas com permissão do brief. |

1. Copie título e subtítulo diretamente do ebook final. Registre caminho e versão. Não crie título alternativo para resolver espaço.
2. Desenhe a capa em três áreas: título no terço superior, elemento visual no centro, autoria ou logo no rodapé conforme a marca. Planeje a quebra de linha antes de gerar.
3. Passe dimensão, textos literais, paleta, tipografia e ativo do logo a `inboundfy-base-imagem`. Ilustração pode representar o tema; capa não pode inventar selos, edição ou endosso.
4. Abra a capa e confira cada acento. Se título extenso perder legibilidade, reorganize linhas e reduza elementos decorativos antes de diminuir o texto.
5. Derive o OpenGraph da mesma composição: reorganize título e ilustração em colunas, preserve paleta e família tipográfica. Não comprima a capa vertical dentro do retângulo horizontal.
6. Faça previews de capa a 160 px de largura e de OpenGraph a 300 px. O título deve ser lido sem ampliar. Subtítulo pode ser omitido no OpenGraph somente se o brief permitir. Registre essa diferença.

## Template de brief visual e entrega

Preencha antes de chamar o motor ou buscar a foto. Preserve o envelope do contrato compartilhado no README. O texto entre chaves é campo de preenchimento.

```yaml
id: "{ID da peça}"
skill: inboundfy-especialista-ebook-imagem
estado: revisao
brief: "04-briefs/{arquivo}.md"
entrada: "{texto final e versão}"
persona: "{ID confirmado}"
fontes:
  - "{context/canais.md e identidade visual}"
titulo_literal: "{título final do ebook}"
subtitulo_literal: "{subtítulo final ou ausente}"
fonte_texto: "{caminho e versão}"
capa: "{dimensão, quebras e posição do logo}"
opengraph: "{dimensão e reorganização dos mesmos elementos}"
subtitulo_no_opengraph: "{sim ou permissão para omitir}"
elemento_comum: "{ilustração ou forma reconhecível}"
alt_capa: "{descrição da capa}"
alt_opengraph: "{descrição do derivado}"
saidas:
  - "{caminho de cada arquivo exportado}"
preview: "{largura de teste, recorte e resultado observado}"
pendencias: []
proxima_skill: inboundfy-validador-ebook-imagem
```

O README relaciona o brief, o texto final, cada exportação, suas dimensões, peso, alt e origem dos ativos. No pacote, mantenha `brief` no frontmatter. Texto longo em imagem exige transcrição acessível junto ao arquivo; o alt não substitui a transcrição.

## Exemplo completo de produção

A empresa fictícia brasileira **Oficina Ipê**, de Curitiba, oferece manutenção de bicicletas. O ebook aprovado para donos de oficinas chama-se “Caixa da oficina em dia”, com subtítulo “Registro semanal para quem recebe por Pix e cartão”. O material ensina registro financeiro; não promete lucro.

Brief 0042: capa 1600×2240 e OpenGraph 1200×630 em `97-ativos-finais/ebook/caixa-oficina/`. Paleta fictícia: verde #164B3B, creme #FFF7E8 e amarelo #F1C75B. Fonte sem serifa aprovada pela marca; logo fornecido em `brand/logo.svg`.

Capa: margem de 100 px; título em três linhas (“Caixa da” / “oficina” / “em dia”), subtítulo em duas linhas abaixo, ilustração de caderno de caixa na metade inferior e logo no rodapé. Nenhum saldo, selo ou depoimento aparece. A ilustração não imita uma tela de banco.

OpenGraph: margem de 60 px; título literal à esquerda, caderno à direita, logo no rodapé. O brief autoriza omitir o subtítulo somente nesse derivado. A versão mantém verde, creme e o mesmo caderno. Alt da capa: “Capa de Caixa da oficina em dia, com caderno de registros e marca Oficina Ipê”. Alt do OpenGraph: “Caixa da oficina em dia, da Oficina Ipê, ao lado de um caderno ilustrado”.

Entrega didática: `capa.png`, `opengraph.png`, `README.md` com título, subtítulo, dimensões, vínculo do ebook e permissão de omissão. Preview a 160 px permite ler o título da capa. Preview a 300 px permite ler o título do OpenGraph. Estado revisao; destino `inboundfy-validador-ebook-imagem`.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Título e subtítulo da capa coincidem com o ebook final, incluindo acentos; omissão no OpenGraph tem permissão registrada.
2. **Literal:** Autoria, logo textual e alt seguem as grafias canônicas; vetos foram conferidos no texto incorporado e nos metadados.
3. **Semântica:** Ilustração representa o assunto e não acrescenta certificação, endosso ou promessa ausente do ebook.
4. **Semântica:** OpenGraph comunica o mesmo ebook; título alternativo não substitui o nome final sem novo brief.
5. **Estrutural:** Capa e OpenGraph existem no diretório contratado e o README relaciona os dois ao ebook final.
6. **Estrutural:** Capa e OpenGraph têm dimensões exatas e registro dos elementos comuns e das diferenças autorizadas.
7. **Visual:** Título da capa é legível a 160 px; subtítulo é subordinado e o logo não compete com o título.
8. **Visual:** OpenGraph é legível a 300 px sem esticar a capa e preserva paleta, fonte e elemento visual comum.

## Erros comuns e correções

- Esticar a capa no OpenGraph: recompor o mesmo material em outra grade.
- Trocar título sem avisar: devolver a questão à especialista de texto.
- Gerar logo com grafia aproximada: aplicar o ativo fornecido pela marca.

## Medição e limites

Comparar legibilidade nos dois previews e registrar peso por arquivo. Cliques no compartilhamento podem orientar outra composição, sem autorizar renomear o ebook. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A especialista prepara o conjunto completo e encaminha arquivos, fontes, medidas e previews a `inboundfy-validador-ebook-imagem`. Registre a fonte ou motor utilizado, sem expor segredos. Reaproveite a versão existente quando o pedido não exigir refação. Mudança em texto aprovado ou dado factual retorna à fonte responsável; ajuste visual não autoriza mudar a copy.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato e a fonte de imagem permitida. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Entrega para a validadora

Encaminhe a `inboundfy-validador-ebook-imagem` o conjunto descrito em Formato e pacote, acompanhado de ID, brief, texto final e versão, fontes, medidas reais e previews. Inclua o registro de origem dos ativos e as pendências. Uma devolução mantém o mesmo ID e informa a rodada; ajuste os arquivos apontados e entregue novamente todas as exportações, não apenas o recorte corrigido.
