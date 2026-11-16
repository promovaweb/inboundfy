# Referência de marketing de comunidade

## Método e escolhas

Comece pela tarefa compartilhada. Um grupo de usuários pode ensinar a configurar o produto; uma rede de profissionais pode trocar práticas sem mencionar produto. Misturar as duas expectativas faz membros esperar suporte numa conversa comercial. Registre a promessa do grupo e uma rotina compatível com as horas disponíveis.

| Situação | Escolha | Primeira entrega | Sinal para rever |
| --- | --- | --- | --- |
| Público já conversa num grupo ativo | Participação externa | Resposta útil a pergunta existente | Moderador recusa divulgação |
| Usuários repetem dúvidas operacionais | Grupo de aprendizagem | Sessão prática e FAQ pesquisável | Equipe responde tudo sozinha |
| Clientes pedem contato entre pares | Grupo próprio curado | Apresentação por tarefa e encontro | Entradas crescem sem retorno |
| Produto ainda procura público | Escuta externa | Registro de linguagem e perguntas | Convites superam contribuições |

Leia [o procedimento de marketing de comunidade](references/rituais-e-moderacao.md) no passo 2 do fluxo, antes de preencher o plano. Ele detalha execução, medição e tratamento das exceções.

## Template de trabalho

Copie o envelope para o pacote do projeto. Preencha também a tabela específica abaixo.

```yaml
id: "{{id}}"
skill: inboundfy-growth-comunidade
grupo: growth
tipo: plano-comunidade
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

| Grupo e URL | Regra consultada e data | Necessidade | Contribuição | Anfitrião | Próximo ritual | Medida |
| --- | --- | --- | --- | --- | --- | --- |
| {{grupo}} | {{regra}} | {{pergunta real}} | {{resposta ou sessão}} | {{pessoa}} | {{data}} | {{retorno em 28 dias}} |

Roteiro de boas-vindas: “Bem-vinda, {{pessoa}}. O grupo troca práticas de {{tarefa}}. Comece por {{recurso}}. Se quiser, conte qual etapa você está tentando concluir. As regras e o caminho para sair estão em {{local}}.”

## Exemplo completo brasileiro fictício

Todos os nomes, documentos e números deste exemplo são fictícios. Resultados simulados servem para demonstrar a conferência, sem prometer desempenho.

A fictícia **Oficina Clara**, de Joinville, vende gestão para oficinas a R$ 149/mês. O plano `com-017` usa `acervo/017-rotina-oficina/processado.md`, persona `gestora-oficina`, canal WhatsApp e fontes locais `context/publico.md` e `context/canais.md`. O brief fica no pacote já existente `conteudo/oficinas/04-briefs/com-017.md`.

A equipe convida individualmente 24 clientes que pediram troca entre pares. Entram 18. A anfitriã fictícia Nara recebe cada pessoa e pede um exemplo de organização de ordens de serviço, sem dados dos clientes. Segunda há pergunta prática. Quinta há plantão de 30 minutos. A equipe reserva quatro horas semanais, com substituta definida.

No primeiro ciclo de 28 dias, 12 membros fazem uma contribuição útil. Oito voltam na semana seguinte. Das dez perguntas respondidas, seis recebem primeiro uma resposta de outro membro. A mensagem de quinta diz: “Como você separa orçamento aguardando aprovação de serviço autorizado? Traga um exemplo sem nome ou telefone de cliente.”

Custo simulado: 16 horas a R$ 50 = R$ 800. Custo por participante útil: R$ 800 / 12 = R$ 66,67. O plano permanece `revisao`: há retorno entre pares, mas o ciclo ainda é curto para atribuir renovação. Nara registra as perguntas sem dados pessoais no item de acervo autorizado. Entrega a `inboundfy-extrair-faq` o ID com `bruto.md` e `processado.md` disponíveis, junto das perguntas sem resposta. Agenda nova leitura no dia 29.

## Métricas e leitura do resultado

- Ativação em sete dias = novos membros com primeira contribuição útil / novos membros elegíveis.
- Retorno por coorte = membros da mesma entrada que contribuíram novamente / membros ativados dessa entrada.
- Ajuda entre pares = perguntas cuja primeira resposta útil veio de membro / perguntas respondidas.
- Tempo de primeira resposta: mediana e percentil 90, separados por horário de atendimento.
- Renovação: compare coortes com perfil e tempo de uso semelhantes. Associação não demonstra que o grupo causou retenção.

Use a mediana histórica de ações comparáveis do próprio projeto como referência. Separe canal, formato, público e período. Se faltar histórico, trate a primeira rodada como linha inicial. Números dos exemplos são hipóteses de planejamento ou resultados simulados, nunca médias de mercado. Para adotar uma referência externa, registre fonte primária, data, amostra e método antes de comparar.

## Checklist

- [ ] A promessa do grupo descreve benefício para o membro.
- [ ] As regras de divulgação foram lidas e datadas.
- [ ] Há moderador e substituto por turno.
- [ ] Convites, saída e uso de relatos têm tratamento definido.
- [ ] Métricas excluem mensagens automáticas e moderadores.
- [ ] Fontes, ID, brief, persona e responsável acompanham o plano.
- [ ] Pendências têm responsável e data de retorno.
- [ ] O handoff inclui arquivos, estado e ação solicitada.

## Erros comuns

- Contar mensagens da equipe como saúde comunitária: reporte contribuição entre membros separadamente.
- Abrir canais demais: crie uma conversa por necessidade observada.
- Tratar dúvida de cobrança em público: encaminhe para atendimento privado.
- Transformar acolhimento em venda: espere pedido compatível com a oferta.

## Arquitetura aplicada

A skill `inboundfy-growth-comunidade` pertence ao grupo **growth**. Aplique os contratos conforme o trabalho avança:

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme instalação, contexto e origem dos dados.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): registre ID, estado e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e alcance.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): confira o artefato inteiro após correções.
- [Contexto editorial](../_shared/05-contexto-editorial.md): mantenha persona, voz, dicionário e proibições.

## Guia específico do grupo

A unidade de trabalho é a comunidade e seu ciclo de participação. O plano registra contribuição, ritual, moderação e retorno. Não substitua isso por calendário de posts.

Registre objetivo, público, canal, oferta e próxima ação no plano. Encaminhe produção para `inboundfy-planejamento` quando houver pacote. Encaminhe peça avulsa com brief aprovado à especialista correspondente. Não preencha arquivos de contexto com fatos simulados deste manual.
