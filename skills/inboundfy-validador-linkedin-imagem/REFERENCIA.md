# Imagem de post e capa de artigo LinkedIn: validação

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

## Procedimento de inspeção

1. Leia `SKILL.md` e [o manual da produtora](../inboundfy-especialista-linkedin-imagem/REFERENCIA.md), incluindo o exemplo e o template visual. Confira brief e texto final antes de abrir a arte.
2. Acione `inboundfy-base-validador`. Carregue todos os Markdown de `.inboundfy/context/`, fontes locais relevantes e `brand/` quando existir. Registre o manifesto completo, sem limitar a leitura aos arquivos mencionados pela produtora.
3. Abra cada exportação e leia seu texto integralmente. OCR é apoio; acentos, números e rótulos ainda exigem conferência visual. Sem ferramenta de inspeção visual, registre impedimento; não aprove apenas pelo prompt.
4. Execute os oito itens numerados abaixo. Para cada um, registre arquivo, localização, comparação e resultado. Campo não aplicável exige justificativa.
5. Faça os passes literal, semântico, estrutural e visual sobre arte, alt, README, frontmatter e derivados. Uma ocorrência de proibição reprova; outro item aprovado não compensa.
6. Encaminhe achados à produtora. Após a correção, reabra o conjunto inteiro e repita todos os passes, o marco A5 e o digest atual. A validadora escreve o relatório, sem corrigir os arquivos visuais.

## Template do relatório de correção

Use o formato canônico de `inboundfy-base-validador`. Acrescente números dos itens ao campo de localização, sem retirar manifesto, matriz de proibições ou histórico.

```markdown
# Validação de asset; linkedin-imagem/{item}

- **Asset:** `{caminho retornado pelo digest}`
- **Brief:** `04-briefs/{arquivo}.md`
- **Produtora:** inboundfy-especialista-linkedin-imagem
- **Validadora:** inboundfy-validador-linkedin-imagem
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

- **Destino:** inboundfy-especialista-linkedin-imagem
- **Instrução:** {correção e arquivos a reenviar}

## Histórico

- Rodada {n}: {veredito, ciclo A5 e síntese}
```

Salve em `06-auditoria/assets/linkedin-imagem-<item>.md` no pacote ou `<nome-do-asset>.auditoria.md` para asset avulso, conforme a base. `inboundfy content digest <id>` fornece o ID, caminho e SHA-256 atuais. Não calcule a aprovação a partir do nome da imagem. Relacione todos os derivados no relatório; quando o CLI cadastrar imagens como peças separadas, cada ID recebe seu próprio digest e relatório.

## Exemplo de relatório preenchido

Cenário didático da empresa fictícia brasileira **Nuvem de Papel**: mesmo brief e conjunto descritos no [exemplo da produtora](../inboundfy-especialista-linkedin-imagem/REFERENCIA.md#exemplo-completo-de-produção). A auditoria usa a variante de artigo já descrita pela produtora, com título “Como registrar os prazos da equipe” e subtítulo “Campos e revisão semanal”. O relatório abaixo mostra uma primeira rodada reprovada; não é uma auditoria executada nem autorização de publicação.

```markdown
# Validação de asset; linkedin-imagem/0042

- **Asset:** `97-ativos-finais/linkedin/prazos-equipe/README.md`
- **Brief:** `04-briefs/linkedin-imagem-0042.md`
- **Produtora:** inboundfy-especialista-linkedin-imagem
- **Validadora:** inboundfy-validador-linkedin-imagem
- **Rodada:** 1
- **ID da peça:** `0042`
- **SHA-256 da peça:** `0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`
- **Veredito:** reprovado

## Fontes carregadas

Empresa fictícia: Nuvem de Papel. Relação de fontes do exercício didático:

| Fonte | Uso | Estado |
| --- | --- | --- |
| 04-briefs/linkedin-imagem-0042.md | formato, mensagem e arquivos | lido |
| 97-ativos-finais/linkedin/prazos-equipe/README.md | conjunto candidato e vínculo com texto final | lido |
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

Nesta simulação, o diretório de contexto contém os arquivos relacionados acima.
Em projeto real, acrescentar cada outro Markdown encontrado e cada fonte local
relevante; não reduzir a leitura a esta lista didática.

## Achados

| Localização e item | Trecho ou aspecto observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| itens 6 e 7; capa-artigo.png; dimensão e preview do destino | A capa de artigo foi exportada em 1080×1350, dimensão do post. No preview horizontal do destino, o recorte automático corta o título. | Brief aprovado e lista numerada do par | Recompor a capa em 1200×627 conforme o brief de artigo; conferir título e recorte a 300 px. |

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
| Autoridade e dados | aprovado | aprovado | nenhuma; falha de formato listada nos achados |

## Inspeção visual

Arquivos abertos: capa-artigo.png, README.md.
Medidas: observado 1080×1350; esperado 1200×627. Preview: 300 px.

| Item | Resultado | Comprovação da simulação |
| --- | --- | --- |
| 1 | atende | Título e subtítulo iguais à variante aprovada do artigo. |
| 2 | atende | README identifica o artigo e o trecho de origem. |
| 3 | atende | Ficha é apresentada como ilustração, sem fingir captura real. |
| 4 | atende | Imagem corresponde à tese sobre responsabilidades da equipe. |
| 5 | atende | Capa e README ligados ao artigo no diretório contratado. |
| 6 | não atende | Exportação usa proporção de post; recompor capa horizontal. |
| 7 | não atende | Texto legível no arquivo vertical, mas o recorte automático do destino horizontal corta o título a 300 px. |
| 8 | atende | Logo e hierarquia seguem a marca e o título domina o subtítulo. |

A leitura do conjunto foi completa. Os itens reprovados exigem nova rodada integral.

## Encaminhamento

- **Destino:** inboundfy-especialista-linkedin-imagem
- **Instrução:** Recompor a capa em 1200×627 conforme o brief de artigo; conferir título e recorte a 300 px.

## Histórico

- Rodada 1: reprovado; A5, ciclo 1; aguarda correção e nova leitura integral.
```

O hash acima é demonstrativo. Na rodada real, execute o digest e use o retorno atual. Após corrigir, registre o teste de cada item, repita a matriz integral e só escreva `Veredito: aprovado` sem achados ou pendências obrigatórias. Não existe aprovação condicional.

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

A validadora usa `inboundfy-especialista-linkedin-imagem` como destino de correção e `inboundfy-base-validador` como contrato transversal. Falta de visualização ou fonte obrigatória impede o veredito aprovado. Divergência estratégica volta ao brief. Fontes conflitantes seguem `CONTEXTO.md`; nenhuma fonte descoberta recebe autoridade automática.

## Leitura adicional da revisão

Consulte `docs/method/07-validacao-e-testes.md` na preparação da rodada e `CONTEXTO.md` ao encontrar fontes conflitantes. O exemplo preenchido complementa o relatório canônico da base; não elimina nenhum de seus campos.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Recebimento e devolução do conjunto

Aceite a saída de `inboundfy-especialista-linkedin-imagem` com ID, brief, texto final versionado, README, exportações, derivados, fontes, dimensões, previews e pendências. Confira também licença e crédito nas fotos e permissão dos retratos presentes. Relacione arquivos ausentes antes do veredito. Devolva o relatório com rodada e número de cada item afetado à produtora; receba todos os arquivos novamente para uma leitura integral.
