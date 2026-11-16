# Pacote visual de Instagram: validação

O par `inboundfy-especialista-instagram-imagem` e `inboundfy-validador-instagram-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente instagram-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Feed quadrado | 1:1 | 1080×1080 |
| Feed e carrossel | 4:5 | 1080×1350 |
| Stories e capa de Reels | 9:16 | 1080×1920 |

- Fonte ou motor: Geração por inboundfy-base-imagem, uma chamada por slide.
- Arquivos: post.png ou slide-01.png até slide-NN.png; README.md com ordem, textos e alt de cada arquivo.
- Destino: `97-ativos-finais/instagram/<item>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Procedimento de inspeção

1. Leia `SKILL.md` e [o manual da produtora](../inboundfy-especialista-instagram-imagem/REFERENCIA.md), incluindo o exemplo e o template visual. Confira brief e texto final antes de abrir a arte.
2. Acione `inboundfy-base-validador`. Carregue todos os Markdown de `.inboundfy/context/`, fontes locais relevantes e `brand/` quando existir. Registre o manifesto completo, sem limitar a leitura aos arquivos mencionados pela produtora.
3. Abra cada exportação e leia seu texto integralmente. OCR é apoio; acentos, números e rótulos ainda exigem conferência visual. Sem ferramenta de inspeção visual, registre impedimento; não aprove apenas pelo prompt.
4. Execute os oito itens numerados abaixo. Para cada um, registre arquivo, localização, comparação e resultado. Campo não aplicável exige justificativa.
5. Faça os passes literal, semântico, estrutural e visual sobre arte, alt, README, frontmatter e derivados. Uma ocorrência de proibição reprova; outro item aprovado não compensa.
6. Encaminhe achados à produtora. Após a correção, reabra o conjunto inteiro e repita todos os passes, o marco A5 e o digest atual. A validadora escreve o relatório, sem corrigir os arquivos visuais.

## Template do relatório de correção

Use o formato canônico de `inboundfy-base-validador`. Acrescente números dos itens ao campo de localização, sem retirar manifesto, matriz de proibições ou histórico.

```markdown
# Validação de asset; instagram-imagem/{item}

- **Asset:** `{caminho retornado pelo digest}`
- **Brief:** `04-briefs/{arquivo}.md`
- **Produtora:** inboundfy-especialista-instagram-imagem
- **Validadora:** inboundfy-validador-instagram-imagem
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

- **Destino:** inboundfy-especialista-instagram-imagem
- **Instrução:** {correção e arquivos a reenviar}

## Histórico

- Rodada {n}: {veredito, ciclo A5 e síntese}
```

Salve em `06-auditoria/assets/instagram-imagem-<item>.md` no pacote ou `<nome-do-asset>.auditoria.md` para asset avulso, conforme a base. `inboundfy content digest <id>` fornece o ID, caminho e SHA-256 atuais. Não calcule a aprovação a partir do nome da imagem. Relacione todos os derivados no relatório; quando o CLI cadastrar imagens como peças separadas, cada ID recebe seu próprio digest e relatório.

## Exemplo de relatório preenchido

Cenário didático da empresa fictícia brasileira **Doce de Bairro**: mesmo brief e conjunto descritos no [exemplo da produtora](../inboundfy-especialista-instagram-imagem/REFERENCIA.md#exemplo-completo-de-produção). O relatório abaixo mostra uma primeira rodada reprovada; não é uma auditoria executada nem autorização de publicação.

```markdown
# Validação de asset; instagram-imagem/0042

- **Asset:** `97-ativos-finais/instagram/pedido-bolo/README.md`
- **Brief:** `04-briefs/instagram-imagem-0042.md`
- **Produtora:** inboundfy-especialista-instagram-imagem
- **Validadora:** inboundfy-validador-instagram-imagem
- **Rodada:** 1
- **ID da peça:** `0042`
- **SHA-256 da peça:** `0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`
- **Veredito:** reprovado

## Fontes carregadas

Empresa fictícia: Doce de Bairro. Relação de fontes do exercício didático:

| Fonte | Uso | Estado |
| --- | --- | --- |
| 04-briefs/instagram-imagem-0042.md | formato, mensagem e arquivos | lido |
| 97-ativos-finais/instagram/pedido-bolo/README.md | conjunto candidato e vínculo com texto final | lido |
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
| itens 1 e 4; slide-04.png; texto central | slide-04.png repete a orientação da data e omite restrições alimentares. | Brief aprovado e lista numerada do par | Aplicar “Avise sobre restrições alimentares” e repetir a revisão dos cinco slides e da legenda. |

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

Arquivos abertos: slide-01.png, slide-02.png, slide-03.png, slide-04.png, slide-05.png, README.md.
Medidas: cinco arquivos 1080×1350. Preview: 180 px na capa e 360 px nos slides.

| Item | Resultado | Comprovação da simulação |
| --- | --- | --- |
| 1 | não atende | Slide 4 repete data e omite restrições; aplicar a copy aprovada. |
| 2 | atende | Índices 1/5 a 5/5 corretos; descrições individuais presentes. |
| 3 | atende | Capa informa os dados necessários ao pedido sem preço inventado. |
| 4 | não atende | CTA está correto, mas o slide 4 repete a data e não avança a explicação aprovada sobre restrições alimentares. |
| 5 | atende | Cinco arquivos em ordem e listados no README. |
| 6 | atende | Formato 4:5 e recorte previsto no brief conferidos. |
| 7 | atende | Paleta, grade e logo coerentes no mosaico. |
| 8 | atende | Capa e slides legíveis; informação fora das sobreposições. |

A leitura do conjunto foi completa. Os itens reprovados exigem nova rodada integral.

## Encaminhamento

- **Destino:** inboundfy-especialista-instagram-imagem
- **Instrução:** Aplicar “Avise sobre restrições alimentares” e repetir a revisão dos cinco slides e da legenda.

## Histórico

- Rodada 1: reprovado; A5, ciclo 1; aguarda correção e nova leitura integral.
```

O hash acima é demonstrativo. Na rodada real, execute o digest e use o retorno atual. Após corrigir, registre o teste de cada item, repita a matriz integral e só escreva `Veredito: aprovado` sem achados ou pendências obrigatórias. Não existe aprovação condicional.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Texto de cada arquivo coincide com a copy daquele slide; CTA e grafias seguem legenda, glossário e vetos.
2. **Literal:** Numeração visível, quando exigida, corresponde ao índice e total; alt é específico para cada arquivo.
3. **Semântica:** Capa informa o assunto sozinha e nenhum slide acrescenta preço, capacidade ou promessa ausente da legenda.
4. **Semântica:** Cada slide avança a explicação aprovada; CTA final corresponde ao contato e à ação autorizados.
5. **Estrutural:** Todos os slides existem uma vez, na ordem da copy, com nomes de dois dígitos e registro completo no README.
6. **Estrutural:** Dimensões correspondem ao formato e o preview usa a máscara do destino, inclusive em Stories e Reels.
7. **Visual:** Grade, logo, paleta e tipografia permanecem coerentes em todos os slides; o mosaico foi inspecionado.
8. **Visual:** Capa é legível a 180 px e slides a 360 px; recortes e sobreposições não cobrem informação essencial.

## Erros comuns e correções

- Gerar cada slide com identidade diferente: fixar grade e referências.
- Omitir um slide na exportação: comparar quantidade com a copy.
- Colocar CTA sob a interface: simular máscara antes do handoff.

## Medição e limites

Após publicação autorizada, comparar salvamentos e compartilhamentos por alcance em peças de mesmo objetivo. Anotar período e amostra; não prometer alcance por usar determinado formato. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A validadora usa `inboundfy-especialista-instagram-imagem` como destino de correção e `inboundfy-base-validador` como contrato transversal. Falta de visualização ou fonte obrigatória impede o veredito aprovado. Divergência estratégica volta ao brief. Fontes conflitantes seguem `CONTEXTO.md`; nenhuma fonte descoberta recebe autoridade automática.

## Leitura adicional da revisão

Consulte `docs/method/07-validacao-e-testes.md` na preparação da rodada e `CONTEXTO.md` ao encontrar fontes conflitantes. O exemplo preenchido complementa o relatório canônico da base; não elimina nenhum de seus campos.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Recebimento e devolução do conjunto

Aceite a saída de `inboundfy-especialista-instagram-imagem` com ID, brief, texto final versionado, README, exportações, derivados, fontes, dimensões, previews e pendências. Confira também licença e crédito nas fotos e permissão dos retratos presentes. Relacione arquivos ausentes antes do veredito. Devolva o relatório com rodada e número de cada item afetado à produtora; receba todos os arquivos novamente para uma leitura integral.
