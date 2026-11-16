# Referência de parcerias de distribuição

## Método e escolhas

O melhor encaixe reúne a mesma persona e tarefas complementares. Compare valor para o público e capacidade de execução antes do tamanho das listas. Uma parceria pequena pode produzir uma oficina útil; uma grande pode exigir trabalho que a equipe não consegue cumprir.

| Necessidade | Tipo de parceria | Entrega inicial | Responsável seguinte |
| --- | --- | --- | --- |
| Testar público complementar | Co-marketing | Conteúdo ou oficina conjunta | Esta skill |
| Conectar produtos | Integração | Validação técnica e caso de uso | Equipe de produto |
| Remunerar indicação | Afiliado | Regra de comissão | inboundfy-growth-referencias |
| Vender por terceiro | Revenda | Modelo comercial e atendimento | Responsável comercial |
| Descoberta em ecossistema | Marketplace | Cadastro e requisitos | inboundfy-growth-diretorios |

Leia [o procedimento de parcerias de distribuição](references/acordos-e-contrapartidas.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-parcerias
grupo: growth
tipo: plano-parcerias
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

| Item do acordo | Empresa A | Empresa B | Prazo | Conferência |
| --- | --- | --- | --- | --- |
| Produção | {{entrega}} | {{entrega}} | {{data}} | {{arquivo aprovado}} |
| Divulgação | {{canal e quantidade}} | {{canal e quantidade}} | {{data}} | {{URLs/relatório}} |
| Custos | {{R$}} | {{R$}} | {{data}} | {{conciliação}} |
| Contatos | {{finalidade/acesso}} | {{finalidade/acesso}} | {{prazo}} | {{texto e configuração}} |
| Marca | {{usos permitidos}} | {{usos permitidos}} | {{fim}} | {{aprovação}} |

Convite: “Atendemos {{persona}} em {{tarefa A}}. Seu público trabalha com {{tarefa B}}. Propomos {{entrega útil}}. Nossa equipe assume {{produção}}. Sua equipe pode assumir {{contrapartida}}. Vamos conferir esse piloto para {{data}}?”

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Estoque de Perto**, de Goiânia, vende controle para lojas de materiais. A fictícia **Conta da Obra** oferece contabilidade para o mesmo público. O plano `par-023` usa `acervo/023-fechamento/processado.md`, persona `gestora-material` e brief `conteudo/lojas/04-briefs/par-023.md`.

Estoque de Perto tem 800 assinantes ativos; Conta da Obra tem 2.000. A primeira produz planilha e aula. A segunda divulga a oficina em duas edições da newsletter e oferece uma especialista. Ambas aprovam marca e texto até D−5. Os contatos de inscrição recebem o acesso. Comunicações comerciais de cada empresa são apresentadas separadamente no formulário, com finalidade clara. A equipe não troca planilhas de contatos indiscriminadamente.

O custo fictício é R$ 2.400, dividido igualmente. Em 21 dias, a oficina recebe 120 inscrições únicas, 70 da origem A e 50 da origem B. Há 24 pedidos comerciais para A e 16 para B; seis pessoas pedem ambos. A entrega total reúne 34 pessoas com interesse comercial, não 40 pessoas distintas. Para A, custo por pedido = R$ 1.200/24 = R$ 50; para B, R$ 75.

A responsável fictícia Sora confere as duas divulgações e o arquivo final. Estado `revisao`, aguardando oportunidades após 30 dias. O handoff a `inboundfy-growth-eventos` inclui roteiro, inscrições e responsáveis. Uma proposta posterior de comissão segue para `inboundfy-growth-referencias`.

## Métricas e leitura do resultado

- Cumprimento = entregas concluídas no prazo / entregas combinadas por parceiro.
- Pessoas novas elegíveis: exclua base já existente de cada lado, com método de comparação autorizado.
- Custo por contato qualificado = custo próprio / contatos que atendem à regra comercial própria.
- Conversão por origem e por empresa destinatária: separe origem do acesso e empresa procurada.
- Sobreposição: conte pessoas únicas no total e interseção entre interesses. Não some bases como audiência inédita.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] Ofertas complementares e persona compartilhada foram demonstradas.
- [ ] Contrapartidas têm quantidade, prazo e responsável.
- [ ] Uso de marca tem finalidade e duração.
- [ ] Tratamento de contatos foi explicado no cadastro.
- [ ] Encerramento e entrega parcial têm procedimento.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Exigir igualdade de lista: negocie valor de produção e especialização.
- Prometer dados sem definir finalidade: resolva antes de abrir inscrições.
- Fazer acordo só verbal: registre entregas e aprovação.
- Trocar links como finalidade única do co-marketing: encaminhe trabalho de backlinks à skill própria.

## Arquitetura aplicada

A skill `inboundfy-growth-parcerias` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade é um acordo operacional de ação conjunta. O plano responde quem faz, quem divulga, quem paga, quem aprova e como o público recebe valor.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
