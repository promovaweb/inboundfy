# Referência de loops de crescimento

## Método e escolhas

Um funil termina na conversão. Um ciclo usa parte da saída para gerar nova entrada: quem recebe valor convida outra pessoa, publica um artefato ou melhora o acervo que atrai novos leitores. A rotina recorrente apenas mantém esse mecanismo. Rodar um relatório semanal, sozinho, não cria crescimento.

| Mecanismo | Retorno esperado | Pré-condição | Limite a observar |
| --- | --- | --- | --- |
| Indicação | Cliente traz novo usuário | Valor já percebido e convite útil | Convites sem ativação |
| Conteúdo do uso | Artefato público atrai leitor | Compartilhamento desejado e autorizado | Exposição indevida de dados |
| Conhecimento comunitário | Resposta vira recurso reutilizável | Perguntas recorrentes e edição | Trabalho concentrado na equipe |
| Reinvestimento | Margem financia próxima aquisição | Margem e conversão medidas | Receita confundida com caixa livre |
| Rotina de manutenção | Correção preserva o mecanismo | Sinal confiável e responsável | Alertas repetidos sem ação |

Leia [o procedimento de loops de crescimento](references/ciclos-estado-e-parada.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-loops
grupo: growth
tipo: plano-loops
estado: rascunho
entrada: ["{{acervo ou pedido}}"]
brief: "{{caminho do brief}}"
persona: "{{id da persona}}"
canal: "{{canal ativo}}"
oferta: "{{oferta confirmada}}"
fontes: ["{{contexto}}", "{{fonte do tema}}"]
responsavel: "{{pessoa}}"
janela: "{{início e fim}}"
orcamento_reais: "{{valor aprovado}}"
proxima_skill: "{{skill e ação solicitada}}"
pendencias: ["{{pergunta ou nenhuma}}"]
```

```yaml
mecanismo:
  entrada: "{{unidade elegível}}"
  acao: "{{ação da pessoa}}"
  valor: "{{benefício}}"
  saida: "{{artefato ou convite}}"
  retorno: "{{evento que cria nova entrada}}"
rotina:
  consulta: "{{frequência e fuso}}"
  age_quando: "{{condição mensurável}}"
  fonte: "{{arquivo ou sistema}}"
  chave_unica: "{{entidade + evento + versão}}"
  intervalo_minimo: "{{tempo}}"
  limite: "{{ações ou R$ por período}}"
  parada: "{{condição e responsável}}"
  em_erro: "{{registrar e encaminhar}}"
```

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Caderno da Turma**, de Fortaleza, oferece modelos para escolas pequenas. O plano `loop-019` usa `acervo/019-planejamento/processado.md`, persona `coordenadora-escolar` e brief `conteudo/escolas/04-briefs/loop-019.md`. Um modelo público e sem dados de alunos pode levar novas coordenadoras ao acervo. A pessoa escolhe se deseja compartilhar; arquivos privados não entram no mecanismo.

No piloto fictício, 100 coordenadoras ativas geram 40 compartilhamentos. Cada compartilhamento produz três visitas, em média. Das 120 visitas, 24 pessoas concluem o primeiro modelo. Retorno por pessoa ativa = 0,4 × 3 × 0,2 = 0,24 nova pessoa ativada por ciclo de 14 dias. Como o retorno fica abaixo de um, esse mecanismo não sustenta crescimento sozinho. A equipe mantém outras fontes e investiga a perda entre visita e primeiro uso.

A rotina consulta o relatório toda segunda, às 9h de Brasília. Só prepara melhoria quando há pelo menos 100 visitas na coorte fechada e queda de conclusão superior ao limite interno escolhido no plano. A chave é `modelo + coorte + versão`. Há uma proposta por modelo a cada 14 dias; publicação depende da autorização do projeto. Dados atrasados interrompem análise. Duas falhas consecutivas suspendem a rotina até revisão da responsável fictícia Mila.

Custo do piloto: R$ 1.200, ou R$ 50 por nova ativação observada. Estado `revisao`. Mila entrega a hipótese de simplificar instruções a `inboundfy-growth-onboarding` e mantém a consulta sem criar novas ações sobre a mesma coorte.

## Métricas e leitura do resultado

- Coeficiente de retorno = proporção que compartilha × novas visitas por compartilhamento × ativação dessas visitas.
- Tempo de ciclo = intervalo entre primeira ação e nova entrada ativada. Compare coortes já maduras.
- Contribuição líquida = margem das novas entradas − incentivo − operação − distribuição, na janela declarada.
- Saúde da rotina: execuções completas / execuções previstas, duplicatas evitadas, falhas de fonte e ações realmente concluídas.
- Coeficiente acima de um não garante permanência: saturação, sobreposição de público e abandono precisam entrar na leitura.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] Uma saída retorna como nova entrada mensurável.
- [ ] Ciclo e rotina operacional estão separados.
- [ ] Fonte, chave única e intervalo mínimo estão preenchidos.
- [ ] Há limite de ação, condição de parada e responsável.
- [ ] Retomada após erro foi simulada.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Chamar sequência de emails de loop sem retorno: identifique o mecanismo ou renomeie como rotina.
- Agir a cada consulta: separe frequência de leitura da condição de ação.
- Repetir envio depois de timeout: confira confirmação antes de tentar novamente.
- Projetar crescimento infinito: considere público repetido e capacidade.

## Arquitetura aplicada

A skill `inboundfy-growth-loops` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é um mecanismo com ciclo mensurável e operação limitada. A skill coordena capacidades existentes e devolve hipóteses e planos, sem assumir autorização para publicar ou gastar.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
