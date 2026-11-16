# Thumbnail de webinar: validação

O par `inboundfy-especialista-webinar-imagem` e `inboundfy-validador-webinar-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente webinar-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Evento | 1:1 | 1080×1080 |

- Fonte ou motor: Geração por inboundfy-base-imagem com dados do evento.
- Arquivos: thumbnail.png e README.md com título, data, horário, fuso e dados confirmados do apresentador.
- Destino: `97-ativos-finais/webinar/<item>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Procedimento de inspeção

1. Leia `SKILL.md` e [o manual da produtora](../inboundfy-especialista-webinar-imagem/REFERENCIA.md), incluindo o exemplo e o template visual. Confira brief e texto final antes de abrir a arte.
2. Acione `inboundfy-base-validador`. Carregue todos os Markdown de `.inboundfy/context/`, fontes locais relevantes e `brand/` quando existir. Registre o manifesto completo, sem limitar a leitura aos arquivos mencionados pela produtora.
3. Abra cada exportação e leia seu texto integralmente. OCR é apoio; acentos, números e rótulos ainda exigem conferência visual. Sem ferramenta de inspeção visual, registre impedimento; não aprove apenas pelo prompt.
4. Execute os oito itens numerados abaixo. Para cada um, registre arquivo, localização, comparação e resultado. Campo não aplicável exige justificativa.
5. Faça os passes literal, semântico, estrutural e visual sobre arte, alt, README, frontmatter e derivados. Uma ocorrência de proibição reprova; outro item aprovado não compensa.
6. Encaminhe achados à produtora. Após a correção, reabra o conjunto inteiro e repita todos os passes, o marco A5 e o digest atual. A validadora escreve o relatório, sem corrigir os arquivos visuais.

## Template do relatório de correção

Use o formato canônico de `inboundfy-base-validador`. Acrescente números dos itens ao campo de localização, sem retirar manifesto, matriz de proibições ou histórico.

```markdown
# Validação de asset; webinar-imagem/{item}

- **Asset:** `{caminho retornado pelo digest}`
- **Brief:** `04-briefs/{arquivo}.md`
- **Produtora:** inboundfy-especialista-webinar-imagem
- **Validadora:** inboundfy-validador-webinar-imagem
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

- **Destino:** inboundfy-especialista-webinar-imagem
- **Instrução:** {correção e arquivos a reenviar}

## Histórico

- Rodada {n}: {veredito, ciclo A5 e síntese}
```

Salve em `06-auditoria/assets/webinar-imagem-<item>.md` no pacote ou `<nome-do-asset>.auditoria.md` para asset avulso, conforme a base. `inboundfy content digest <id>` fornece o ID, caminho e SHA-256 atuais. Não calcule a aprovação a partir do nome da imagem. Relacione todos os derivados no relatório; quando o CLI cadastrar imagens como peças separadas, cada ID recebe seu próprio digest e relatório.

## Exemplo de relatório preenchido

Cenário didático da empresa fictícia brasileira **Ateliê Mandacaru**: mesmo brief e conjunto descritos no [exemplo da produtora](../inboundfy-especialista-webinar-imagem/REFERENCIA.md#exemplo-completo-de-produção). O relatório abaixo mostra uma primeira rodada reprovada; não é uma auditoria executada nem autorização de publicação.

```markdown
# Validação de asset; webinar-imagem/0042

- **Asset:** `97-ativos-finais/webinar/encomendas-dezembro/README.md`
- **Brief:** `04-briefs/webinar-imagem-0042.md`
- **Produtora:** inboundfy-especialista-webinar-imagem
- **Validadora:** inboundfy-validador-webinar-imagem
- **Rodada:** 1
- **ID da peça:** `0042`
- **SHA-256 da peça:** `0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`
- **Veredito:** reprovado

## Fontes carregadas

Empresa fictícia: Ateliê Mandacaru. Relação de fontes do exercício didático:

| Fonte | Uso | Estado |
| --- | --- | --- |
| 04-briefs/webinar-imagem-0042.md | formato, mensagem e arquivos | lido |
| 97-ativos-finais/webinar/encomendas-dezembro/README.md | conjunto candidato e vínculo com texto final | lido |
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
| .inboundfy/context/pessoas.md | nome, cargo e foto da apresentadora | lido |

Nesta simulação, o diretório de contexto contém os arquivos relacionados acima.
Em projeto real, acrescentar cada outro Markdown encontrado e cada fonte local
relevante; não reduzir a leitura a esta lista didática.

## Achados

| Localização e item | Trecho ou aspecto observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| itens 1 e 3; thumbnail.png; faixa de data | A thumbnail informa 25 de novembro, mas o evento confirmado será em 26 de novembro. | Brief aprovado e lista numerada do par | Atualizar para 26 de novembro e conferir novamente horário, fuso, título e dados da apresentadora. |

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
| Autoridade e dados | aprovado | reprovado | divergência localizada na tabela de achados |

## Inspeção visual

Arquivos abertos: thumbnail.png, README.md.
Medidas: 1080×1080. Preview: 240 px.

| Item | Resultado | Comprovação da simulação |
| --- | --- | --- |
| 1 | não atende | Arte informa dia 25; evento confirmado é dia 26 de novembro de 2026. |
| 2 | atende | Nome e cargo de Bia Flor de Barro coincidem com a fonte simulada. |
| 3 | não atende | Não há condição comercial adicional, mas a data incorreta comunica uma realização diferente da confirmada para o evento. |
| 4 | atende | Foto fornecida corresponde à apresentadora e tem permissão no cenário. |
| 5 | atende | Thumbnail e README ligados ao evento e brief. |
| 6 | atende | Quadrado e versão com apresentadora conforme autorização. |
| 7 | atende | Título, dia e horário legíveis; dia precisa da correção factual. |
| 8 | atende | Foto e nome subordinados ao título; marca e margens preservadas. |

A leitura do conjunto foi completa. Os itens reprovados exigem nova rodada integral.

## Encaminhamento

- **Destino:** inboundfy-especialista-webinar-imagem
- **Instrução:** Atualizar para 26 de novembro e conferir novamente horário, fuso, título e dados da apresentadora.

## Histórico

- Rodada 1: reprovado; A5, ciclo 1; aguarda correção e nova leitura integral.
```

O hash acima é demonstrativo. Na rodada real, execute o digest e use o retorno atual. Após corrigir, registre o teste de cada item, repita a matriz integral e só escreva `Veredito: aprovado` sem achados ou pendências obrigatórias. Não existe aprovação condicional.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Título, data e horário da arte coincidem com o evento confirmado; README conserva ano, fuso e versão da fonte.
2. **Literal:** Nome e cargo, quando presentes, coincidem com context/pessoas.md; alt inclui dados atuais e respeita grafias e vetos.
3. **Semântica:** Peça comunica o evento correto e não acrescenta gratuidade, certificado ou condição comercial ausente do brief.
4. **Semântica:** Foto corresponde à pessoa confirmada e tem autorização; ausência de dado não foi preenchida com retrato ou nome inventado.
5. **Estrutural:** Thumbnail e README estão no diretório do webinar, com vínculo à peça de evento e ao brief.
6. **Estrutural:** Arquivo é quadrado nas dimensões confirmadas; versões com e sem apresentador seguem o formato autorizado.
7. **Visual:** Título, data e horário são legíveis a 240 px; fuso permanece acessível conforme o brief.
8. **Visual:** Foto e nome são subordinados ao título; logo, contraste e margens seguem a marca sem cobrir informações.

## Erros comuns e correções

- Reaproveitar data da edição anterior: comparar com o evento confirmado.
- Destacar a foto e esconder o horário: restaurar hierarquia.
- Inventar cargo ou retrato: usar fonte confirmada e ativo autorizado.

## Medição e limites

Medir cliques para a página do evento e inscrições por visita após publicação autorizada. Registrar origem e período; presença ao vivo também depende da confirmação e dos lembretes. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A validadora usa `inboundfy-especialista-webinar-imagem` como destino de correção e `inboundfy-base-validador` como contrato transversal. Falta de visualização ou fonte obrigatória impede o veredito aprovado. Divergência estratégica volta ao brief. Fontes conflitantes seguem `CONTEXTO.md`; nenhuma fonte descoberta recebe autoridade automática.

## Leitura adicional da revisão

Consulte `docs/method/07-validacao-e-testes.md` na preparação da rodada e `CONTEXTO.md` ao encontrar fontes conflitantes. O exemplo preenchido complementa o relatório canônico da base; não elimina nenhum de seus campos.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Recebimento e devolução do conjunto

Aceite a saída de `inboundfy-especialista-webinar-imagem` com ID, brief, texto final versionado, README, exportações, derivados, fontes, dimensões, previews e pendências. Confira também licença e crédito nas fotos e permissão dos retratos presentes. Relacione arquivos ausentes antes do veredito. Devolva o relatório com rodada e número de cada item afetado à produtora; receba todos os arquivos novamente para uma leitura integral.
