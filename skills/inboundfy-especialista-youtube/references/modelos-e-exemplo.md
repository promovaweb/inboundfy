# Pacote YouTube: modelos e exemplo

Leia no passo de montagem do README e na revisão dos metadados.

## Modelo de pacote

```markdown
---
id: "<id>"
skill: inboundfy-especialista-youtube
tipo: pacote-youtube
estado: revisao
criado_em: "<data>"
atualizado_em: "<data>"
entrada:
  - "<acervo>"
brief: "<04-briefs/youtube-slug.md>"
contexto:
  personas: ["<persona>"]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
fontes:
  - "<base editorial>"
  - "<fontes específicas>"
formato: "<tutorial|demonstracao|explicacao>"
duracao-prevista: "<meta>"
proxima_acao: "Solicitar inboundfy-validador-youtube."
---

## Título copiável
<título escolhido>

## Promessa entregue
<tarefa e limite que orientam roteiro e thumbnail>

## Roteiro
### Cena 01: <função> (<intervalo estimado>)
Fala: <texto para ouvir>
Apoio: <ativo necessário e disponível>
Fonte: <arquivo/seção>

### Encerramento
Fala: <ação principal e destino>

## Descrição copiável
<resumo independente da tarefa>

<ação e URL confirmada>
<fontes públicas e materiais pertinentes>
<capítulos somente após conferir o vídeo final>

## Notas internas
Contagens: <título e descrição com espaços>
Duração: <estimativa ou tempo medido>
Capítulos: <confirmados no vídeo ou pendentes>
Roteiro anterior: <caminho e versão ou não aplicável>
Thumbnail: <mesma tarefa e destino de imagem>
```

## Entrada fictícia

Conta de Bancada, Joinville. Persona-01: responsável por orçamento de pequena
marcenaria. Brief: tutorial com orçamento simulado, cerca de três minutos e
CTA para baixar o checklist de conferência.
A base autoriza conferir medidas, quantidade, prazo e condições antes do envio.
Não há vídeo final. O domínio .example é didático; os destinos de produção
devem ser confirmados no contexto do consumidor.

## Pacote completo

```markdown
---
id: "0047"
skill: inboundfy-especialista-youtube
tipo: pacote-youtube
estado: revisao
criado_em: 2026-11-15
atualizado_em: 2026-11-15
entrada:
  - acervo/0047-2026-11-15-orcamento/processado.md
brief: acervo/0047-2026-11-15-orcamento/04-briefs/youtube-orcamento.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
fontes:
  - acervo/0047-2026-11-15-orcamento/base-editorial.md
  - .inboundfy/context/produtos.md
  - .inboundfy/context/links.md
formato: tutorial
duracao-prevista: "Cerca de três minutos, a confirmar no ensaio."
duracao-medida: pendente
proxima_acao: "Cronometrar e solicitar inboundfy-validador-youtube."
---

## Título copiável

Como conferir um orçamento antes de enviar pelo WhatsApp

## Promessa entregue

Mostrar a conferência de medidas, quantidades, prazo e condições num
orçamento simulado antes do envio. O vídeo não calcula preço ou margem.

## Roteiro

### Cena 01: abrir a conferência (00:00-00:20)

Fala: Antes de enviar um orçamento pelo WhatsApp, confira se o documento
permite reconhecer o que foi combinado. Vou usar um orçamento simulado
para mostrar onde revisar medidas, quantidades, prazo e condições.
Esta conferência não calcula o preço do serviço.

Apoio: orçamento simulado sem nome, telefone ou endereço de cliente.
Fonte: base-editorial.md, conferência antes do envio.

### Cena 02: conferir o item orçado (00:20-01:05)

Fala: Comece pela descrição do item. No exemplo, o orçamento apresenta uma
prateleira sob medida. Confira se as dimensões usam a mesma unidade do
registro original e se a quantidade corresponde ao pedido.

Uma medida escrita sem unidade exige nova consulta antes do envio.
Também confira a quantidade: um documento pode descrever a peça certa e
continuar incorreto porque repetiu o número de outra versão.
Compare os campos com a origem do pedido, sem preencher uma medida pela memória.

Apoio: descrição, dimensões e quantidade no documento simulado.
Fonte: produtos.md, campos do orçamento.

### Cena 03: revisar prazo e condições (01:05-01:55)

Fala: Depois, confira o prazo indicado. Ele precisa corresponder à condição
que a marcenaria autorizou para esse orçamento. Se o prazo depende da
aprovação de uma medida, essa dependência precisa aparecer no documento.

Faça a mesma leitura nas condições de pagamento. O exemplo não traz preço
real nem forma de pagamento oferecida por uma empresa. No trabalho da sua
marcenaria, use apenas a condição confirmada para aquele pedido.
Se o documento ainda tiver um campo vazio, resolva a informação antes de enviar.

Apoio: campos de prazo e condições, identificados como simulação.
Fonte: base-editorial.md, limites do exercício.

### Cena 04: conferir a versão e o destinatário (01:55-02:35)

Fala: Ao terminar, confirme qual arquivo representa a versão revisada.
Um PDF antigo na conversa pode ter o mesmo nome e valores diferentes.
Confira o conteúdo do arquivo que será anexado, não apenas o título da pasta.

Depois, confira o contato que receberá o documento. Nesta demonstração,
não vamos enviar mensagem; a tarefa termina com a conferência do arquivo.
O envio real depende do atendimento autorizado pela sua operação.

Apoio: documento simulado identificado como versão revisada.
Fonte: processado.md, procedimento de conferência.

### Cena 05: próximo passo (02:35-03:00)

Fala: A conferência precisa deixar item, quantidade, prazo e condições
compreensíveis no arquivo que será enviado. Para repetir essa leitura no
próximo orçamento, baixe o checklist indicado na descrição.
Ele organiza os campos deste exercício, sem substituir a aprovação do
orçamento pela sua marcenaria.

Apoio: nome do checklist, sem prescrição de edição.
Fonte: links.md, checklist de orçamento.

## Descrição copiável

Confira medidas, quantidades, prazo e condições de um orçamento antes de
enviar o arquivo pelo WhatsApp. Neste tutorial da Conta de Bancada, a
demonstração usa um documento simulado e termina na revisão do arquivo.
O vídeo não calcula preço nem margem e não envia mensagem a um cliente.

Baixe o checklist de conferência:
https://contadebancada.example/checklist-orcamento

Use o material junto da origem do pedido e das condições autorizadas
pela sua marcenaria. Se faltar unidade de medida ou prazo confirmado,
resolva o campo antes do envio.

Material do exercício:
https://contadebancada.example/material-orcamento

## Notas internas

Capítulos pendentes: não há vídeo final para conferir tempos.
Os intervalos das cenas são estimativas de gravação, não capítulos publicáveis.
Roteiro anterior: não aplicável, esta peça foi escrita para o brief de YouTube.
Contagens de título e descrição devem ser registradas antes da aprovação.
Ensaio cronometrado pendente; a duração não foi medida neste manual.
Thumbnail: tarefa de conferir orçamento, com apoio do documento simulado.
Destino de imagem: inboundfy-especialista-video-imagem.
Domínios .example pertencem ao cenário didático; não são destinos reais.
Auditorias de copy e A5 aguardam a versão final.
```
