# Roteiro de gravação: modelos e exemplo

Leia ao dividir cenas e ao revisar a duração.

## Modelo estruturado

Complete o envelope compartilhado e os campos abaixo:

```yaml
formato: estruturado
apresentador: "<pessoa registrada, quando houver>"
brief: "<brief aprovado>"
duracao-prevista: "<minutos e segundos>"
duracao-medida: "<tempo da leitura ou pendente>"
```

```markdown
## Cena 01: <função> (<início-fim estimados>)
Fala: <texto literal para ouvir>
Apoio visual: <objeto ou tela necessário>
Fonte: <arquivo/seção>

## Cena 02: <função seguinte> (<início-fim estimados>)
Fala: <execução, interpretação ou variação>
Apoio visual: <ativo necessário>
Fonte: <arquivo/seção>

## Encerramento
Fala: <CTA com destino confirmado>
Apoio visual: <destino literal se necessário>

## Registro do ensaio
Palavras faladas: <contagem>
Pausas e demonstrações: <segundos>
Duração medida: <tempo>
Ajuste aplicado: <cenas alteradas e nova leitura>
```

## Modelo de talking head

```markdown
## Tópico 01: <objeto> (<tempo reservado>)
Ideia central: <tese autorizada>
Exemplo: <caso ou procedimento sustentado pela fonte>
Transição: <ligação com o próximo tópico>
Apoio visual: <opcional e mínimo>

## Tópico final: <ação possível>
Ideia central: <próximo passo único>
Destino: <local confirmado>
Ensaio: <tempo medido ou pendente>
```

## Entrada fictícia

Oficina Horizonte, Recife. Lívia Paiva, nome fictício, responsável por
atendimento com competência para explicar cadastro e retirada.
A base editorial contém uma ordem simulada: revisão de bicicleta concluída,
pessoa avisada, retirada ainda não confirmada. O procedimento exige conferir
a ordem e atualizar a próxima ação. Não contém informação de cliente real.
Brief: vídeo estruturado, meta inicial de aproximadamente quatro minutos,
sem promessa de receita ou redução de tempo.

## Roteiro completo

```markdown
---
id: "0045"
skill: inboundfy-especialista-video
tipo: roteiro
estado: revisao
criado_em: 2026-11-15
atualizado_em: 2026-11-15
entrada:
  - acervo/0045-2026-11-15-retirada/processado.md
brief: acervo/0045-2026-11-15-retirada/04-briefs/video-retirada.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
fontes:
  - acervo/0045-2026-11-15-retirada/base-editorial.md
  - .inboundfy/context/pessoas.md
  - .inboundfy/context/servicos.md
  - acervo/0045-2026-11-15-retirada/processado.md
formato: estruturado
apresentador: Lívia Paiva
duracao-prevista: "Aproximadamente quatro minutos, sujeita ao ensaio."
duracao-medida: pendente
proxima_acao: "Cronometrar a leitura e solicitar inboundfy-validador-video."
---

## Cena 01: o serviço terminou, a retirada continua (00:00-00:25)

Fala: A revisão da bicicleta terminou, mas a ordem ainda precisa dizer
quem acompanha a retirada. Vou usar uma ordem simulada para mostrar o que
conferir depois de avisar a pessoa. O objetivo é deixar o próximo atendimento
com uma informação que a equipe consiga retomar.

Apoio visual: ordem simulada sem dados pessoais.
Fonte: processado.md, situação de retirada.

## Cena 02: conferir a situação antes do contato (00:25-01:10)

Fala: Primeiro, confira se a revisão está concluída na ordem certa. O nome
do serviço e a identificação da bicicleta precisam corresponder ao registro
que será atualizado. Se a ordem ainda trouxer uma etapa pendente, consulte
quem executou o trabalho antes de tratar a bicicleta como pronta.

Neste exemplo, a revisão está concluída. A retirada continua aberta.
São informações diferentes: uma descreve o trabalho da oficina; a outra
descreve o que falta combinar com a pessoa que vai buscar a bicicleta.

Apoio visual: campos de serviço e retirada da ordem simulada.
Fonte: servicos.md, procedimento de entrega.

## Cena 03: registrar o contato sem presumir resposta (01:10-02:00)

Fala: Depois do aviso, registre o que realmente aconteceu. Enviar uma
mensagem não significa que a retirada foi combinada. Se a pessoa ainda não
respondeu, escreva que o aviso foi enviado e que a confirmação continua
pendente.

A equipe também precisa saber qual contato foi usado. No atendimento real,
essa informação fica no cadastro autorizado da oficina. Aqui, a demonstração
usa apenas dados simulados. Não coloque conversas ou números de clientes
numa captura destinada à publicação.

Apoio visual: anotação de aviso enviado com confirmação pendente.
Fonte: processado.md, registro de contato.

## Cena 04: deixar uma próxima ação retomável (02:00-02:55)

Fala: Agora preencha a próxima ação. “Aguardando” informa pouco para quem
assume o turno amanhã. O registro precisa indicar o trabalho esperado e o
responsável, conforme o procedimento da oficina.

No exemplo, a ação é conferir se houve resposta antes de fazer novo contato.
A pessoa responsável pelo atendimento fica indicada no cadastro. Se houver
resposta durante o turno, atualize a ordem com a combinação real. Evite
deixar dois registros que se contradizem sobre o mesmo horário.

Apoio visual: próxima ação com responsável fictício do turno.
Fonte: servicos.md, atualização da ordem.

## Cena 05: conferir o que o próximo turno verá (02:55-03:35)

Fala: Antes de encerrar, leia a ordem como alguém que não acompanhou a
conversa. Você consegue encontrar o serviço concluído, o aviso enviado e o
que falta fazer? Se uma dessas informações depende da sua memória, complete
o registro enquanto o contato ainda está recente.

Esse procedimento organiza a informação da retirada. Ele não garante que
a pessoa responda nem substitui as condições de atendimento combinadas pela
oficina. Quando a situação mudar, o cadastro também precisa mudar.

Apoio visual: ordem simulada completa, com as três informações identificadas.
Fonte: servicos.md, conferência de entrega.

## Cena 06: próximo passo (03:35-04:00)

Fala: Na próxima passagem de turno, escolha uma ordem de retirada e confira
se o registro permite continuar o atendimento. Use o procedimento interno
da sua oficina para completar o que faltar.

Apoio visual: nome do procedimento interno, sem link público prometido.
Fonte: brief video.md, CTA de aplicação.

## Registro do ensaio

Os intervalos são reservas editoriais para este exemplo.
A duração ainda não foi medida. Cronometrar fala, leitura da tela e pausas;
ajustar o roteiro antes de declarar compatibilidade com a meta.
Copy e auditoria A5 devem considerar a versão ajustada.
Thumbnail segue para inboundfy-especialista-video-imagem após aprovação.
```

## Outline completo alternativo

Use apenas quando o brief aprovar talking-head. Não misture o outline com
fala literal para criar um formato intermediário sem autorização.

| Tópico | Tempo reservado | Ideia central | Exemplo autorizado | Transição e apoio |
| --- | --- | --- | --- | --- |
| Serviço e retirada | 00:00-00:30 | Serviço pronto não encerra a combinação de retirada. | Ordem simulada da bicicleta. | Passar da situação para a conferência; ordem em tela. |
| Conferir a ordem | 00:30-01:15 | Validar conclusão do serviço antes do aviso. | Revisão concluída, retirada pendente. | Entrar no registro de contato; dois campos destacados por rótulo. |
| Registrar o contato | 01:15-02:05 | Aviso enviado não equivale a resposta. | Confirmação ainda pendente. | Explicar próxima ação; anotação simulada. |
| Atualizar responsável | 02:05-03:00 | Próxima ação precisa permitir retomada. | Conferir resposta no próximo turno. | Chegar à leitura final; campo do responsável fictício. |
| Conferir e aplicar | 03:00-04:00 | Ler o cadastro como alguém que não viu a conversa. | Serviço, aviso e ação localizáveis. | Encerrar com aplicação numa ordem; procedimento interno. |

Ensaio de talking head pendente. A tabela reserva tempo para tópicos;
não comprova duração da fala improvisada.
