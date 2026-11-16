# Fotografia de blog: validação

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

## Procedimento de inspeção

1. Leia `SKILL.md` e [o manual da produtora](../inboundfy-especialista-blog-imagem/REFERENCIA.md), incluindo o exemplo e o template visual. Confira brief e texto final antes de abrir a arte.
2. Acione `inboundfy-base-validador`. Carregue todos os Markdown de `.inboundfy/context/`, fontes locais relevantes e `brand/` quando existir. Registre o manifesto completo, sem limitar a leitura aos arquivos mencionados pela produtora.
3. Abra cada exportação e leia seu texto integralmente. OCR é apoio; acentos, números e rótulos ainda exigem conferência visual. Sem ferramenta de inspeção visual, registre impedimento; não aprove apenas pelo prompt.
4. Execute os oito itens numerados abaixo. Para cada um, registre arquivo, localização, comparação e resultado. Campo não aplicável exige justificativa.
5. Faça os passes literal, semântico, estrutural e visual sobre arte, alt, README, frontmatter e derivados. Uma ocorrência de proibição reprova; outro item aprovado não compensa.
6. Encaminhe achados à produtora. Após a correção, reabra o conjunto inteiro e repita todos os passes, o marco A5 e o digest atual. A validadora escreve o relatório, sem corrigir os arquivos visuais.

## Template do relatório de correção

Use o formato canônico de `inboundfy-base-validador`. Acrescente números dos itens ao campo de localização, sem retirar manifesto, matriz de proibições ou histórico.

```markdown
# Validação de asset; blog-imagem/{item}

- **Asset:** `{caminho retornado pelo digest}`
- **Brief:** `04-briefs/{arquivo}.md`
- **Produtora:** inboundfy-especialista-blog-imagem
- **Validadora:** inboundfy-validador-blog-imagem
- **Rodada:** {número}
- **ID da peça:** `{id}`
- **SHA-256 da peça:** `{hash completo obtido por inboundfy content digest}`
- **Veredito:** {aprovado | reprovado | devolvido para briefing | impedido}

## Fontes carregadas

{Manifesto completo: caminho, uso, estado e versão consultada.}

## Achados

| Localização e item | Trecho ou aspecto observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| {arquivo, área, item} | {texto ou medida observada} | {fonte e valor esperado} | {ação verificável} |

## Conferência de proibições

{Matriz completa da base: literal, semântico/estrutural e ocorrências por categoria.}

## Inspeção visual

{Arquivos abertos, dimensões medidas, largura do preview e resultado por item.}

## Encaminhamento

- **Destino:** inboundfy-especialista-blog-imagem
- **Instrução:** {correção e arquivos a reenviar}

## Histórico

- Rodada {n}: {veredito, ciclo A5 e síntese}
```

Salve em `06-auditoria/assets/blog-imagem-<item>.md` no pacote ou `<nome-do-asset>.auditoria.md` para asset avulso, conforme a base. `inboundfy content digest <id>` fornece o ID, caminho e SHA-256 atuais. Não calcule a aprovação a partir do nome da imagem. Relacione todos os derivados no relatório; quando o CLI cadastrar imagens como peças separadas, cada ID recebe seu próprio digest e relatório.

## Exemplo de relatório preenchido

Cenário didático da empresa fictícia brasileira **Armazém Jatobá**: mesmo brief e conjunto descritos no [exemplo da produtora](../inboundfy-especialista-blog-imagem/REFERENCIA.md#exemplo-completo-de-produção). O relatório abaixo mostra uma primeira rodada reprovada; não é uma auditoria executada nem autorização de publicação.

```markdown
# Validação de asset; blog-imagem/0042

- **Asset:** `97-ativos-finais/blog/conferencia-estoque/README.md`
- **Brief:** `04-briefs/blog-imagem-0042.md`
- **Produtora:** inboundfy-especialista-blog-imagem
- **Validadora:** inboundfy-validador-blog-imagem
- **Rodada:** 1
- **ID da peça:** `0042`
- **SHA-256 da peça:** `0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`
- **Veredito:** reprovado

## Fontes carregadas

Empresa fictícia: Armazém Jatobá. Relação de fontes do exercício didático:

| Fonte | Uso | Estado |
| --- | --- | --- |
| 04-briefs/blog-imagem-0042.md | formato, mensagem e arquivos | lido |
| 97-ativos-finais/blog/conferencia-estoque/README.md | conjunto candidato e vínculo com texto final | lido |
| .inboundfy/fontes-projeto.md | fontes locais pertinentes ao conjunto | lido |
| .inboundfy/framework/VERSAO.md | preflight de instalação | lido |
| .inboundfy/context/empresa.md | nome e atuação fictícios | lido |
| .inboundfy/context/canais.md | dimensões e destino do exemplo | lido |
| .inboundfy/context/marca-voz.md | tom e marca visual | lido |
| .inboundfy/context/publico.md | persona do brief | lido |
| .inboundfy/context/glossario.md | grafias do texto visual | lido |
| .inboundfy/context/proibicoes.md | vetos de negócio | lido |
| .inboundfy/context/estruturas-proibidas.md | categorias editoriais | lido |
| .inboundfy/context/aprendizado.md | orientações confirmadas para a peça | lido |
| .inboundfy/context/links.md | destinos mencionados na copy | lido |
| .inboundfy/estrategia.md | objetivo do canal | lido |
| .inboundfy/pipeline.md | estado revisao do ID 0042 | lido |
| brand/ | regras e ativos usados no exemplo | inspecionado |
| METODOLOGIA.md, CONTEXTO.md, ESCRITA.md e ESTRUTURAS-PERSUASIVAS.md | procedimento e precedência | lidos |
| manuais da produtora e da validadora | oito testes espelhados | lidos |
| 06-auditoria/anti-slop-05-peca.md | marco A5, ciclo 1 | lido |
| .inboundfy/context/integracoes.md | banco e nome da variável, sem valor secreto | lido |

Nesta simulação, o diretório de contexto contém os arquivos relacionados acima.
Em projeto real, acrescentar cada outro Markdown encontrado e cada fonte local
relevante; não reduzir a leitura a esta lista didática.

## Achados

| Localização e item | Trecho ou aspecto observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| itens 2, 3, 7 e 8; thumbnail.jpg; centro do recorte | Thumbnail corta a caixa e mostra só a parede. | Brief aprovado e lista numerada do par | Refazer o corte a partir do original, preservando caixa e mãos. Conferir novamente o cover. |

## Conferência de proibições

| Categoria | Passe literal | Passe semântico/estrutural | Ocorrências |
| --- | --- | --- | --- |
| Vetos de negócio | aprovado | aprovado | nenhuma |
| Aberturas proibidas | aprovado | aprovado | nenhuma |
| Fechamentos proibidos | aprovado | aprovado | nenhuma |
| Vocabulário proibido | aprovado | aprovado | nenhuma |
| Estruturas de parágrafo | aprovado | aprovado | nenhuma |
| Headings e listas | aprovado | aprovado | nenhuma |
| Pontuação e fluidez | aprovado | aprovado | nenhuma |
| Autoridade e dados | aprovado | aprovado | nenhuma; falha visual listada nos achados |

## Inspeção visual

Arquivos abertos: cover.jpg, thumbnail.jpg, credito.md, README.md.
Medidas: 1200×800 e 1200×500. Preview: 300 px, nos dois cortes.

| Item | Resultado | Comprovação da simulação |
| --- | --- | --- |
| 1 | atende | Autor, banco, página, termos e data presentes no registro simulado. |
| 2 | não atende | Alt e legenda descrevem contagem de caixas, mas a thumbnail mostra só a parede. |
| 3 | não atende | Cover mostra a contagem; thumbnail perde o objeto central do artigo. |
| 4 | atende | Licença e origem simuladas compatíveis com a finalidade didática. |
| 5 | atende | Dois arquivos, crédito e vínculo do artigo presentes. |
| 6 | atende | Medidas e coordenadas dos dois cortes registradas. |
| 7 | não atende | Thumbnail perde a caixa e mostra a parede; refazer corte. |
| 8 | não atende | Crédito está presente, mas os recortes mostram assuntos distintos e o alt não descreve a thumbnail. |

A leitura do conjunto foi completa. Os itens reprovados exigem nova rodada integral.

## Encaminhamento

- **Destino:** inboundfy-especialista-blog-imagem
- **Instrução:** Refazer o corte a partir do original, preservando caixa e mãos. Conferir novamente o cover.

## Histórico

- Rodada 1: reprovado; A5, ciclo 1; aguarda correção e nova leitura integral.
```

O hash acima é demonstrativo. Na rodada real, execute o digest e use o retorno atual. Após corrigir, registre o teste de cada item, repita a matriz integral e só escreva `Veredito: aprovado` sem achados ou pendências obrigatórias. Não existe aprovação condicional.

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

A validadora usa `inboundfy-especialista-blog-imagem` como destino de correção e `inboundfy-base-validador` como contrato transversal. Falta de visualização ou fonte obrigatória impede o veredito aprovado. Divergência estratégica volta ao brief. Fontes conflitantes seguem `CONTEXTO.md`; nenhuma fonte descoberta recebe autoridade automática.

## Leitura adicional da revisão

Consulte `docs/method/07-validacao-e-testes.md` na preparação da rodada e `CONTEXTO.md` ao encontrar fontes conflitantes. O exemplo preenchido complementa o relatório canônico da base; não elimina nenhum de seus campos.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Recebimento e devolução do conjunto

Aceite a saída de `inboundfy-especialista-blog-imagem` com ID, brief, texto final versionado, README, exportações, derivados, fontes, dimensões, previews e pendências. Confira também licença e crédito nas fotos e permissão dos retratos presentes. Relacione arquivos ausentes antes do veredito. Devolva o relatório com rodada e número de cada item afetado à produtora; receba todos os arquivos novamente para uma leitura integral.
