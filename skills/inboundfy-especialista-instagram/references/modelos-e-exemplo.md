# Modelos de Instagram e exemplo da Pote de Casa

Leia na redação; use apenas o formato do brief.

## Envelope e arquivos

Complete o envelope compartilhado. Acrescente:
```yaml
formato: "<post|carrossel|video-curto>"
brief: "<brief aprovado>"
cta: "<ação única e destino confirmado>"
duracao-estimada: "<somente vídeo>"
```

## Modelo de post

```markdown
# Corpo copiável
<abertura com objeto e utilidade>
<explicação e exemplo>
<ação final única>
<hashtags pertinentes, se usadas>

# Alt text
<cena, instrução e informações visuais relevantes>

# Fontes e notas internas
<arquivo e seção; destino do CTA; contagem da legenda>
```

## Modelo de carrossel

```markdown
# Índice do README
- slide-01.md: <capa e promessa>
- slide-02.md: <primeira informação>
- slide-03.md: <segunda informação>
- slide-04.md: <aplicação ou limite>
- slide-05.md: <ação final>

# Legenda copiável
<contexto que complementa a sequência e mesma ação final>

# Arquivo slide-01.md
ID: <id da peça>-01
README: <caminho do índice>
Ordem: 1
Texto: <copy literal da capa>
Alt text: <descrição da imagem prevista>
```

Repita a estrutura do arquivo por slide. A contagem pode mudar conforme o
brief; atualize índice, numeração e promessa juntos.

## Modelo de vídeo curto

```markdown
# Roteiro
| Intervalo | Fala literal | Texto na tela |
| --- | --- | --- |
| 00:00-00:03 | <objeto e promessa realizável> | <rótulo curto> |
| 00:03-00:25 | <demonstração e interpretação> | <apoio legível> |
| 00:25-00:30 | <ação única> | <mesma ação> |

# Legenda copiável
<contexto e fechamento>
# Notas internas
<duração medida, pausas, legendagem e fonte>
```

## Entrada fictícia da peça completa

A Pote de Casa fica em Belo Horizonte. Seu manual fictício autoriza a
conferência visual de encaixe e orienta obedecer às condições de uso de cada
modelo. O conteúdo não promete vedação universal nem recomenda virar um pote
com líquido quente. Persona-01: pessoa que prepara marmitas para levar ao trabalho.
O brief solicita carrossel educativo, cinco slides e CTA de salvar.

## README preenchido

```markdown
---
id: "0043"
skill: inboundfy-especialista-instagram
tipo: carrossel-textual
estado: revisao
criado_em: 2026-11-15
atualizado_em: 2026-11-15
entrada:
  - acervo/0043-2026-11-15-tampa/processado.md
brief: acervo/0043-2026-11-15-tampa/04-briefs/instagram-tampa.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
fontes:
  - acervo/0043-2026-11-15-tampa/base-editorial.md
  - .inboundfy/context/produtos.md
  - acervo/0043-2026-11-15-tampa/processado.md
formato: carrossel
cta: "Salvar o carrossel para a próxima montagem."
proxima_acao: "Solicitar inboundfy-validador-instagram."
---

# Conferência da tampa antes de sair

## Índice
- slide-01.md: capa.
- slide-02.md: borda.
- slide-03.md: encaixe.
- slide-04.md: condições de transporte.
- slide-05.md: fechamento.

## Legenda copiável

Na montagem da marmita, confira a borda antes de fechar a tampa. Um grão de
arroz no encaixe pode impedir que as duas peças se acomodem como previsto.

A sequência mostra a conferência visual indicada no manual da Pote de Casa.
Ela não substitui as condições de uso do seu modelo. Para transportar
líquidos, consulte a orientação específica da embalagem antes de colocar o
pote na bolsa.

Salve o carrossel para conferir na próxima montagem.

#Marmita #OrganizacaoDaCozinha

## Notas internas

Fonte: produtos.md, seção Fechamento; processado.md, demonstração autorizada.
A legenda deve ser contada no bloco copiável antes do envio.
Aguardam validação textual e composição por inboundfy-especialista-instagram-imagem.
```

## slide-01.md

```markdown
ID: 0043-01
README: canais/instagram/0043-2026-11-15-tampa/README.md
Ordem: 1
Texto: Confira a tampa antes de levar a marmita
Alt text: Capa com um pote aberto ao lado de sua tampa e a instrução de conferir o fechamento antes do transporte.
```

## slide-02.md

```markdown
ID: 0043-02
README: canais/instagram/0043-2026-11-15-tampa/README.md
Ordem: 2
Texto: Limpe a borda. Retire restos de comida da área de encaixe antes de posicionar a tampa. Confira também a parte interna da tampa, junto à borda.
Alt text: Mão aponta para um grão de arroz sobre a borda do pote. O texto orienta limpar a área de encaixe e conferir a tampa.
```

## slide-03.md

```markdown
ID: 0043-03
README: canais/instagram/0043-2026-11-15-tampa/README.md
Ordem: 3
Texto: Confira todo o contorno. Posicione a tampa conforme o manual do modelo e observe se ela ficou nivelada. Se uma parte estiver levantada, abra e reposicione.
Alt text: Vista lateral de uma tampa nivelada, com indicação de observar todo o contorno. Uma borda levantada pede abertura e reposicionamento.
```

## slide-04.md

```markdown
ID: 0043-04
README: canais/instagram/0043-2026-11-15-tampa/README.md
Ordem: 4
Texto: Consulte o uso indicado. O encaixe visual não garante transporte de líquidos em qualquer posição. Confira as orientações de temperatura e transporte do seu modelo antes de sair.
Alt text: Pote em pé ao lado do manual. O texto esclarece que a conferência visual não garante vedação para líquidos em qualquer posição.
```

## slide-05.md

```markdown
ID: 0043-05
README: canais/instagram/0043-2026-11-15-tampa/README.md
Ordem: 5
Texto: Salve esta conferência para a próxima marmita.
Alt text: Fechamento do carrossel com o pedido de salvar a sequência para a próxima montagem da marmita.
```

## Alternativa completa: post

Use somente se o brief mudar para post, com nova rodada de validação.

```text
Um grão de arroz na borda pode impedir o encaixe da tampa da marmita.
Antes de fechar, limpe o contorno do pote e confira a parte interna da tampa.

Depois de posicioná-la conforme o manual, observe se todo o contorno ficou
nivelado. Se uma parte estiver levantada, abra e reposicione. Essa conferência
visual não garante transporte de líquidos em qualquer posição; as condições
de uso dependem do modelo.

Salve esta orientação para a próxima montagem.

#Marmita
```

Alt text previsto: pote aberto com a borda destacada e instrução de retirar
restos de comida antes de fechar.

## Alternativa completa: roteiro de 30 segundos

| Intervalo | Fala | Texto na tela |
| --- | --- | --- |
| 00:00-00:03 | Confira a borda da marmita antes de fechar. | Confira a borda |
| 00:03-00:12 | Retire os restos de comida do encaixe. Confira também a parte interna da tampa. | Limpe o encaixe |
| 00:12-00:22 | Posicione a tampa conforme o manual e observe o contorno. Se um lado ficar levantado, abra e reposicione. | Observe todo o contorno |
| 00:22-00:27 | Para líquidos, consulte as condições do seu modelo. | Consulte o manual |
| 00:27-00:30 | Salve para a próxima montagem. | Salvar |

Legenda: A conferência visual ajuda a observar o encaixe. As condições de
temperatura e transporte dependem do modelo. Salve para a próxima montagem.

Notas: leitura deve ser cronometrada na produção; 30 segundos são a meta do
brief, não uma medição realizada neste manual. Prever legendagem da fala.
Não há prescrição de cortes, música ou efeitos nesta entrega.

