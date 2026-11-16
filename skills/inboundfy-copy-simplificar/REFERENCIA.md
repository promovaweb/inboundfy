# REFERENCIA.md; inboundfy-copy-simplificar

Referência para simplificar texto existente. Ela organiza as técnicas por
nível (estrutura, frase, palavra), mostra quando cada uma serve, traz o modelo
de registro e um caso completo com medição antes e depois. `ESCRITA.md`, as
fontes locais, a voz da marca e as regras do canal continuam valendo.

## Mapa de leitura

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/medidas-de-leitura.md](references/medidas-de-leitura.md) | Passos 2 e 7 | Como medir frase, parágrafo e índice de leiturabilidade, e por que a medida não aprova texto. |
| [references/tecnicas-de-simplificacao.md](references/tecnicas-de-simplificacao.md) | Passo 4 | Catálogo de técnicas com antes e depois. |
| [references/simplificar-por-formato.md](references/simplificar-por-formato.md) | Passo 5 | Ajustes para email, página, post, WhatsApp, documentação técnica e texto legal. |

## Ordem das técnicas

Aplique de cima para baixo. Ajustar palavra antes de resolver a estrutura
gasta esforço em frases que talvez saiam.

| Nível | Técnica | Use quando | Não use quando |
| --- | --- | --- | --- |
| Estrutura | Essencial primeiro | O pedido, o prazo ou a resposta aparecem só no fim | O formato exige contexto antes (relato, história de cliente) |
| Estrutura | Corte de aquecimento | Abertura agradece, cumprimenta em excesso ou anuncia o que vem | A saudação é regra registrada da voz |
| Estrutura | Corte de repetição | A mesma ideia volta com outras palavras | A repetição é resumo pedido pelo formato (ebook, aula) |
| Estrutura | Lista para itens paralelos | Três ou mais passos, documentos ou opções do mesmo tipo | Os itens dependem um do outro por causa e efeito |
| Frase | Ordem direta | Sujeito e verbo aparecem depois de orações intercaladas | A inversão destaca algo de propósito e a frase é curta |
| Frase | Uma ideia por frase | A frase passa de 30 palavras com duas ou mais afirmações | A frase longa liga causa e consequência que precisam ficar juntas |
| Frase | Verbo no lugar de nominalização | "realizar a análise", "efetuar o pagamento" | O substantivo é termo técnico do domínio |
| Frase | Voz ativa com agente | O leitor precisa saber quem faz | O agente é irrelevante ou desconhecido |
| Frase | Afirmativa no lugar de dupla negativa | "não é impossível", "não deixe de não" | A negativa é a informação (o que não está incluso) |
| Palavra | Termo da persona | O texto usa jargão interno ou de ofício | O termo técnico é o que a persona procura na busca |
| Palavra | Número concreto | "em breve", "diversos", "um valor acessível" | O número não tem fonte. Nesse caso, pendência |
| Palavra | Corte de muleta | "basicamente", "de fato", "realmente", "no sentido de" | A palavra muda o sentido da frase |

## Template de registro

```markdown
---
id: {{id}}
skill: inboundfy-copy-simplificar
estado: {{rascunho | revisao | aprovado}}
entrada: {{caminho do original}}
saida: {{caminho da versão revisada}}
persona: {{persona-xx}}
canal: {{canal}}
alcance: {{leve | profundo}}
fontes:
  - {{caminho}}
---

# Simplificação: {{título}}

## Frase-mensagem

{{O que a persona precisa entender ou fazer, em uma frase.}}

## Intocáveis

- {{fato, valor, prazo, condição ou ressalva}}: {{presente na versão nova? sim}}

## Medição de diagnóstico

| Medida | Antes | Depois |
| --- | --- | --- |
| Palavras | {{n}} | {{n}} |
| Média de palavras por frase | {{n}} | {{n}} |
| Maior frase | {{n}} | {{n}} |
| Índice de leiturabilidade | {{n}} | {{n}} |

## Alterações relevantes

| Técnica | Trecho antes | Trecho depois |
| --- | --- | --- |
| {{técnica}} | "{{antes}}" | "{{depois}}" |

## Pendências

- {{pergunta ou "nenhuma"}}

## Próxima ação

Enviar a versão para `inboundfy-copy-editor` e depois para {{skill}}.
```

## Exemplo completo (ilustrativo)

Empresa fictícia: **Contábil Norte**, escritório de contabilidade de Belém (PA)
que atende microempreendedores. Persona `persona-01`: dono de pequeno negócio,
lê email no celular entre um atendimento e outro, conhece o DAS pelo nome, não
conhece termos de escritório. Canal: email transacional. Alcance: `profundo`.

### Original

> Prezado(a) cliente, esperamos que esteja bem. Gostaríamos de informar que,
> em virtude da substituição do sistema utilizado por este escritório para a
> emissão do Documento de Arrecadação do Simples Nacional (DAS), faz-se
> necessária a realização de uma atualização cadastral por parte dos
> senhores, a fim de que não haja a ocorrência de eventuais pendências. Para
> tanto, solicitamos o envio do número de celular com WhatsApp, do endereço de
> email para recebimento das guias e do valor do faturamento referente ao mês
> de novembro. Ressaltamos que o não envio das informações até o dia 20/12
> poderá acarretar a impossibilidade de emissão da guia referente ao mês de
> dezembro, o que poderá gerar a incidência de multa e juros. Informamos,
> ainda, que os dados serão tratados em conformidade com a LGPD.
> Colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem
> necessários.

### Frase-mensagem e intocáveis

Frase-mensagem: "Mande três dados até 20/12 para receber a guia do DAS de
dezembro."

Intocáveis:

- troca de sistema como motivo
- os três dados (celular com WhatsApp, email, faturamento de novembro)
- prazo 20/12
- consequência (sem guia de dezembro, com multa e juros)
- menção à LGPD

### Versão simplificada

> **Assunto:** Mande 3 dados até 20/12 para receber a guia do DAS de dezembro
>
> Olá, Marcos. Trocamos o sistema que usamos para emitir a guia do DAS. Para
> gerar a sua guia de dezembro, precisamos de três dados atualizados:
>
> - celular com WhatsApp
> - email para receber as guias
> - faturamento de novembro
>
> Responda este email ou mande os dados pelo WhatsApp (91) 98888-0000 até 20
> de dezembro. Sem esses dados, não conseguimos emitir a guia de dezembro. O
> DAS pago depois do vencimento tem multa e juros.
>
> Tratamos seus dados conforme a LGPD. Se tiver dúvida, responda este email.

### Medição de diagnóstico

Contagem aproximada, feita por script simples de sílabas.

| Medida | Antes | Depois |
| --- | --- | --- |
| Palavras | 141 | 85 |
| Média de palavras por frase | 23,5 | 9 |
| Maior frase | 49 | 16 |
| Índice de leiturabilidade | 43 (difícil) | 78 (fácil) |

### Alterações relevantes

| Técnica | Trecho antes | Trecho depois |
| --- | --- | --- |
| Essencial primeiro | Pedido e prazo no meio e no fim | Pedido e prazo no assunto e no primeiro bloco |
| Corte de aquecimento | "esperamos que esteja bem. Gostaríamos de informar que" | Saudação com nome |
| Verbo no lugar de nominalização | "faz-se necessária a realização de uma atualização cadastral" | "precisamos de três dados atualizados" |
| Lista para itens paralelos | Três dados numa frase de 35 palavras | Lista de três itens |
| Termo da persona | "Documento de Arrecadação do Simples Nacional (DAS)" | "guia do DAS", termo que a persona usa |
| Uma ideia por frase | Prazo, consequência e multa numa frase | Três frases curtas em sequência causal |

### Pendências

- O original não diz o canal de resposta. A versão acrescentou o WhatsApp do
  escritório. Confirmar o número em `.inboundfy/context/enderecos.md` antes
  do envio.
- "Tratamos seus dados conforme a LGPD" continua vago. Dizer a finalidade
  ("usamos esses dados só para emitir suas guias") deixaria a frase mais útil.
  A versão não acrescentou porque a finalidade não estava na fonte.

## Checklist

- [ ] A frase-mensagem está escrita e continua verdadeira na versão nova.
- [ ] Cada intocável foi conferido um por um.
- [ ] O pedido, a resposta ou a ação aparecem no primeiro bloco.
- [ ] Nenhuma frase passa de 30 palavras sem necessidade causal.
- [ ] Nominalizações de ofício foram trocadas por verbos.
- [ ] O agente aparece quando o leitor precisa saber quem faz.
- [ ] Itens paralelos estão em lista. Relações de causa ficaram em prosa.
- [ ] O vocabulário é o da persona, conferido em `publico.md`.
- [ ] Grafias seguem `glossario.md`.
- [ ] Nenhum dado novo entrou sem fonte. Acréscimos estão como pendência.
- [ ] A medição foi registrada antes e depois.
- [ ] A versão passou por `inboundfy-copy-editor`.

## Erros comuns

- **Tratar menos palavras como meta:** encurtar até a instrução perder o
  passo que evitava erro.
- **Apagar a ressalva junto com a repetição:** "exceto para planos anuais"
  some e o cliente reclama depois.
- **Trocar termo preciso por palavra vaga:** "nota fiscal de serviço" vira
  "documento" e o leitor não sabe o que mandar.
- **Simplificar o termo que a persona busca:** a persona técnica procura
  "webhook". Trocar por "aviso automático" afasta quem conhece.
- **Picotar tudo em frases curtas:** o texto vira escadinha e perde as
  ligações de causa. Frase longa que liga causa e consequência pode ficar.
- **Transformar argumento em lista:** lista serve para itens paralelos, não
  para raciocínio.
- **Inventar dado para ficar concreto:** "em até 2 dias úteis" sem fonte
  troca uma vagueza por um compromisso que ninguém assumiu.
- **Aprovar pelo índice:** texto com índice alto ainda pode estar errado,
  frio ou fora da voz.
- **Forçar humor ou provocação:** o tom precisa combinar com marca, persona
  e assunto.

## Arquitetura aplicada

Esta referência atende à skill **inboundfy-copy-simplificar**, do grupo
**copy**. Consulte os contratos compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O grupo **copy** trabalha sobre texto. Esta skill devolve uma versão nova e
preserva o original. Os campos mínimos do registro são estes:

- **objetivo:** frase-mensagem da peça;
- **intocáveis:** lista conferida item a item;
- **persona:** ID usado para escolher vocabulário;
- **canal:** formato e limite de tamanho;
- **revisão:** alterações relevantes, medição e encaminhamento para
  `inboundfy-copy-editor`.

Em pacote de conteúdo, a versão simplificada usa o mesmo ID da peça e fica ao
lado do original com sufixo de versão definido pela skill chamadora.
