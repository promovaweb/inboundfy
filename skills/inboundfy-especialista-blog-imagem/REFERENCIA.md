# Fotografia de blog: produção

O par `inboundfy-especialista-blog-imagem` e `inboundfy-validador-blog-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente blog-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Cover | 3:2 | 1200×800 |
| Thumbnail | 12:5 | 1200×500 |

- Fonte ou motor: Busca fotográfica licenciada; sem geração sintética.
- Arquivos: cover.jpg, thumbnail.jpg, credito.md e README.md; frontmatter do artigo atualizado com a chave de capa já adotada pelo projeto.
- Destino: `97-ativos-finais/blog/<slug>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Composição e escolha de abordagem

| Situação observada | Ação |
| --- | --- |
| Objeto central visível nos dois recortes | Usar a foto e registrar coordenadas de corte. |
| Foto bonita perde o objeto na faixa horizontal | Trocar candidato; não esticar o original. |
| Licença ou autor não podem ser confirmados | Pedir fonte licenciada; não preencher crédito por suposição. |

1. Leia o artigo inteiro e escreva uma frase sobre o objeto fotografável. Para um artigo sobre conferência de estoque, procure prateleira, caixa e contagem manual. Evite metáforas de sucesso.
2. Consulte `context/integracoes.md` quando disponível para localizar o banco e o nome da variável. Confira apenas presença da chave no ambiente, sem imprimir seu valor. Sem chave, peça a configuração e interrompa a busca por API conforme o contrato.
3. Faça três buscas com objetos concretos. Guarde três candidatos com ID, URL da página, autor, resolução e motivo de descarte ou seleção. Não trate resultado de busca como licença.
4. Abra a página da foto escolhida e os termos de uso. Confirme uso comercial, recorte e atribuição. Salve URL e data da consulta. Respeite as exigências do banco para download e crédito.
5. Baixe o original sem ampliação artificial. Calcule dois recortes independentes. Registre coordenadas x/y/largura/altura no original para reprodução. Use a mesma foto ou a mesma sessão.
6. Exporte os dois arquivos e abra ambos. Leia marcas, placas e telas visíveis. Salve a nota de crédito antes de atualizar o artigo. Texto do próprio layout pode sobrepor a foto fora do arquivo; arte composta com título segue `inboundfy-base-imagem`.

## Template de brief visual e entrega

Preencha antes de chamar o motor ou buscar a foto. Preserve o envelope do contrato compartilhado no README. O texto entre chaves é campo de preenchimento.

```yaml
id: "{ID da peça}"
skill: inboundfy-especialista-blog-imagem
estado: revisao
brief: "04-briefs/{arquivo}.md"
entrada: "{texto final e versão}"
persona: "{ID confirmado}"
fontes:
  - "{context/canais.md e identidade visual}"
objeto: "{atividade mostrada no artigo}"
banco: "{banco configurado}"
variavel_api: "{somente nome}"
foto_id: "{ID verificável}"
pagina_foto: "{URL}"
autor: "{nome informado pelo banco}"
licenca_url: "{URL dos termos}"
consulta_em: "{AAAA-MM-DD}"
uso_comercial_e_corte: "{permissão encontrada}"
credito_exigido: "{texto e destino}"
cortes: "{coordenadas do cover e da thumbnail}"
alt: "{descrição do assunto realmente visível}"
saidas:
  - "{caminho de cada arquivo exportado}"
preview: "{largura de teste, recorte e resultado observado}"
pendencias: []
proxima_skill: inboundfy-validador-blog-imagem
```

O README relaciona o brief, o texto final, cada exportação, suas dimensões, peso, alt e origem dos ativos. No pacote, mantenha `brief` no frontmatter. Texto longo em imagem exige transcrição acessível junto ao arquivo; o alt não substitui a transcrição.

## Exemplo completo de produção

A empresa fictícia brasileira **Armazém Jatobá**, de Goiânia, publicou o artigo “Conferência de estoque antes da abertura”. A persona é dona de mercearia de bairro. O artigo ensina a contar caixas por prateleira, sem divulgar dados de clientes.

Brief aprovado: capa fotográfica sem texto incorporado; cover 1200×800; thumbnail 1200×500; saída `97-ativos-finais/blog/conferencia-estoque/`.

Busca planejada: “contagem caixas prateleira”, “estoque mercearia”, “conferência depósito”. Na simulação didática, o candidato F01 mostra uma mesa de escritório e é descartado. F02 tem logotipo na caixa e é descartado. F03 mostra uma pessoa contando caixas sem rótulo e permite os dois recortes.

Registro simulado de F03: banco Banco Serra (fictício), autora Lia Monte Claro (fictícia), ID foto-031, página `https://banco-serra.example/fotos/031`, termos `https://banco-serra.example/licenca`, consulta 2026-11-15. A permissão simulada inclui uso comercial, corte e crédito “Foto: Lia Monte Claro / Banco Serra”. Esses endereços demonstram os campos, não comprovam licença para produção real.

Original simulado 2400×1600. Cover: corte x=0, y=0, largura=2400, altura=1600, redução para 1200×800. Thumbnail: x=0, y=300, largura=2400, altura=1000, redução para 1200×500. Ambos mostram mãos, caixa e prateleira. Alt: “Pessoa conta caixas sem rótulo numa prateleira de estoque”. `credito.md` recebe origem, termos, data, cortes e atribuição. O frontmatter preserva a chave existente e passa a apontar para `cover.jpg`.

Handoff didático: ID 0042, estado revisao, quatro arquivos relacionados, destino `inboundfy-validador-blog-imagem`. Uma execução real só recebe aprovação após comprovar a licença fora desta simulação.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Crédito contém autor, banco, URL da foto, URL dos termos e data; conferir cada campo com a página consultada.
2. **Literal:** Alt e legenda descrevem a foto; grafias seguem o glossário e os vetos são conferidos também no frontmatter.
3. **Semântica:** Objeto fotografado corresponde ao assunto do artigo, sem sugerir que a pessoa retratada é cliente da empresa.
4. **Semântica:** Origem é fotografia real licenciada; arquivo sintético, licença ausente ou permissão incompatível reprova.
5. **Estrutural:** Cover e thumbnail existem junto ao artigo no diretório contratado, com nota de crédito e vínculo no frontmatter.
6. **Estrutural:** Dimensões dos dois arquivos são exatas; o original e as coordenadas dos dois cortes permitem reproduzir o resultado.
7. **Visual:** Objeto continua reconhecível nos dois recortes; não há distorção, pixelização, texto incorporado ou marca indevida.
8. **Visual:** Miniaturas mostram o mesmo assunto e alt corresponde a cada corte; crédito aparece no destino exigido pela licença.

## Erros comuns e correções

- Aceitar licença pela aparência do site: abrir os termos da foto.
- Ampliar imagem pequena: buscar original suficiente para os dois cortes.
- Inserir título na foto: manter arquivo fotográfico e usar o layout do artigo.

## Medição e limites

Registrar peso dos dois arquivos e nitidez no tamanho servido. Compressão não deve apagar detalhes do objeto; desempenho do artigo não comprova licença. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A especialista prepara o conjunto completo e encaminha arquivos, fontes, medidas e previews a `inboundfy-validador-blog-imagem`. Registre a fonte ou motor utilizado, sem expor segredos. Reaproveite a versão existente quando o pedido não exigir refação. Mudança em texto aprovado ou dado factual retorna à fonte responsável; ajuste visual não autoriza mudar a copy.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato e a fonte de imagem permitida. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Entrega para a validadora

Encaminhe a `inboundfy-validador-blog-imagem` o conjunto descrito em Formato e pacote, acompanhado de ID, brief, texto final e versão, fontes, medidas reais e previews. Inclua o registro de origem dos ativos e as pendências. Uma devolução mantém o mesmo ID e informa a rodada; ajuste os arquivos apontados e entregue novamente todas as exportações, não apenas o recorte corrigido.
