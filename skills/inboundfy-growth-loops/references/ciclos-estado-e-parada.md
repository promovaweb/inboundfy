# Ciclos, estado e parada

## Desenho causal

Nomeie a unidade de entrada: usuário, conta, recurso ou real de margem disponível. Descreva a ação e o valor recebido antes da saída. Depois mostre quem recebe essa saída e como vira uma nova unidade elegível. Se a seta de retorno depender inteiramente de outra campanha, registre essa dependência.

Não some usuários e contas na mesma fórmula. Em B2B, três pessoas de uma empresa podem representar uma única conta. Defina deduplicação antes do piloto.

## Cadência pela velocidade do sinal

| Sinal | Cadência inicial de consulta | Condição para agir |
| --- | --- | --- |
| Conversa pública sobre a marca | Diária em horário de atendimento | Pergunta relevante ainda sem resposta |
| Indicação confirmada | Por evento | Conversão elegível após conciliação |
| Desempenho de conteúdo | Semanal ou mensal | Coorte madura com mudança persistente |
| Alteração de concorrente | Semanal | Mudança pública confirmada |
| Margem para reinvestimento | Após fechamento financeiro | Valor disponível confirmado |

A tabela oferece pontos de partida. Ajuste à atualização real da fonte e à capacidade. Consultar diariamente um relatório atualizado mensalmente só repete o mesmo dado.

## Estado mínimo da rotina

```yaml
id_rotina: "{{id}}"
ativa: false
ultima_leitura: "{{data/hora/fuso}}"
versao_fonte: "{{identificador}}"
janela_fechada: "{{início/fim}}"
itens:
  - chave: "{{entidade/evento/versão}}"
    estado: preparado
    tentativa: 1
    confirmacao_externa: null
    proxima_tentativa: null
responsavel: "{{pessoa}}"
```

Registre tentativa antes da ação externa. Após resposta confirmada, salve o identificador retornado. Se o processo cair entre ação e confirmação, consulte o destino antes de repetir. Uma chave local não garante que um sistema externo deixou de executar.

## Exceções e parada

| Condição | Ação |
| --- | --- |
| Fonte atrasada ou sem denominador | Encerrar análise como pendente |
| Resultado muito diferente do histórico | Conferir medição e sazonalidade |
| Limite de envio ou verba atingido | Suspender novas ações |
| Permissão retirada | Desativar a ação correspondente |
| Falha repetida na mesma etapa | Suspender rotina e encaminhar responsável |
| Objetivo deixou de existir | Arquivar rotina e preservar estado |

Defina quantidade máxima de tentativas e intervalo crescente no plano. Nunca tente indefinidamente. Uma execução sem ação pode ser correta quando o sinal não atende à condição.

## Integrações e autorização

Consulte `.inboundfy/context/integracoes.md` para sistemas disponíveis, nomes de variáveis de ambiente e limites. Não grave segredos no plano nem no registro de execução. Sem integração configurada, entregue rotina manual equivalente.

Separe leitura, preparação, alteração interna e ação externa. A autorização existente precisa indicar quais ações podem acontecer, para qual público e dentro de qual teto. Uma rotina não amplia essa autorização. Registre como a pessoa desativa o agendamento na ferramenta realmente usada; não finja instalar um agendamento apenas porque escreveu o cronograma.

## Revisão do piloto

Confronte previsão e resultado por etapa. Se o retorno falhar, localize perda concreta: pouca saída, pouca visita, baixa ativação ou ciclo longo. Altere uma etapa por rodada quando possível. Preserve o mapa anterior e registre a hipótese que motivou a mudança.
