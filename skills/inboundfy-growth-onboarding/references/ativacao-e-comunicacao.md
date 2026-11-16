# Ativação e comunicação por estado

## Escrever o marco antes da sequência

Use uma definição que permita conferir conta, objeto e tempo. “Usuário
entendeu o valor” não é verificável. “Conta publicou sua primeira agenda e
confirmou um horário real em sete dias” pode ser conferido no sistema.
A definição precisa ser pertinente ao produto, não apenas fácil de medir.

```yaml
marco:
  versao: "{{versao}}"
  unidade: "{{conta ou pessoa}}"
  inicio: "{{momento de acesso ou compra}}"
  evento: "{{resultado util confirmado}}"
  janela: "{{prazo}}"
  exclusoes: ["{{contas internas, testes ou outra classe justificada}}"]
  demonstracao_conta: false
  confirmacao: "{{fonte do sistema}}"
  retencao_posterior: "{{uso real e horizonte}}"
```

Em produtos de equipe, medir só quem recebeu o email pode perder o administrador
que executa a tarefa. Em serviços, o cliente pode ter enviado todos os insumos
e aguardar a equipe. Relate esse estado sem classificá-lo como inativo.

## Redução de passos com controle

Para cada tela ou contato, pergunte: este dado é necessário ao resultado agora?
Ele já existe confirmado? Pode ser solicitado durante o uso pertinente?
Uma etapa de autorização indispensável permanece, mesmo quando aumenta o tempo.
Uma apresentação opcional deve poder ser encerrada sem impedir a tarefa.

| Passo | Manter agora se | Adiar se |
| --- | --- | --- |
| Escolha do objetivo | Altera imediatamente o caminho | Serve só para segmentação futura |
| Importação | Primeiro valor depende dos registros | Exemplo identificado permite aprender antes |
| Convite de colega | Outro papel executa parte necessária | Colaboração é recurso posterior |
| Permissão de notificação | Pessoa pediu alerta naquele momento | Não altera o primeiro resultado |
| Configuração visual | Uso inicial depende da marca | É acabamento da conta |
| Integração | Sem ela o resultado seria impossível | Tarefa pode começar com entrada manual |

## Mensagem operacional para preencher

```yaml
id_mensagem: "{{id}}"
segmento: "{{papel e estado}}"
gatilho: "{{evento confirmado ou ausencia avaliada}}"
espera: "{{tempo a partir do evento}}"
checagem_antes_de_enviar: "{{continua no estado e canal permitido}}"
mensagem: "{{o que fazer e por que ajuda agora}}"
cta: "{{verbo e destino exato}}"
saida: "{{evento, compra, descadastro ou fim da etapa}}"
limite: "{{quantidade por periodo}}"
responsavel: "{{quem atende resposta e erro}}"
```

Mantenha uma fonte de estado para produto, email e atendimento. Se o cliente
concluiu a tarefa enquanto a mensagem esperava, retire-o do envio. Se pediu
ajuda, encaminhe o contexto ao atendimento antes de insistir no lembrete.
Não copie senhas, tokens ou conteúdo de cliente para o registro do fluxo.

## Contagem e qualidade das coortes

| Medida | Definição |
| --- | --- |
| Ativação na janela | Contas com marco dentro do prazo / contas elegíveis com prazo completo |
| Passagem de etapa | Contas que chegaram à etapa seguinte / contas que chegaram à anterior |
| Tempo até valor | Intervalo entre início e marco; p50 e p90 entre concluintes |
| Pendentes | Contas elegíveis sem marco ao final da janela |
| Retorno posterior | Contas com uso real na janela posterior / contas elegíveis da coorte |
| Ajuda | Contas que solicitaram ajuda / contas elegíveis |
| Ação do email | Contas que realizaram a tarefa após contato / contas contatadas |

O último indicador descreve sequência temporal, sem provar contribuição
incremental do email. Para aferir esse efeito, planeje grupo de comparação
com `inboundfy-experimentacao`. Compare sempre marcos e prazos equivalentes.

Não importe percentuais de abandono ou ativação de produtos distintos.
Qualquer referência quantitativa externa exige fonte primária, período,
tipo de produto, evento e denominador. Enquanto isso, use a linha de base
local e metas internas identificadas como hipóteses.

## Aceites antes de automatizar

Teste conta nova, retorno com tarefa concluída, email trocado, erro de importação,
pessoa sem permissão, equipe aguardada, descadastro e marco registrado com atraso.
Peça a `inboundfy-rastreamento-conversao` teste de evento duplicado e atualização
de identidade. Consulte `.inboundfy/context/integracoes.md` para conectores
e nomes de variáveis, sem revelar valores de segredo.

## Referência pública de método

O material relaciona ativação e retorno posterior. Use a distinção para avaliar se o marco escolhido acompanha uso recorrente; não transfira resultados de outro produto para a coorte do projeto. [Amplitude: ativação de novos usuários](https://amplitude.com/books/user-engagement/activating-new-users).

Consulta: 15/11/2026. Esta fonte sustenta o comportamento descrito, sem
fornecer uma meta universal para o funil do projeto.
