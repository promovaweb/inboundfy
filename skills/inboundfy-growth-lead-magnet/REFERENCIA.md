# Referência de material rico e captura de contatos

## Da pergunta do comprador ao recurso

O recorte nasce de uma tarefa anterior à compra. “Guia de gestão” é amplo;
“Planilha para conferir pedidos que vencem nesta semana” permite demonstrar
o uso e verificar a entrega. O recurso deve produzir um resultado mesmo se
a pessoa recusar a oferta seguinte.

| Necessidade | Formato adequado | Unidade de utilidade | Limite a declarar |
| --- | --- | --- | --- |
| Conferir execução | Checklist | Item com ação e forma de conferir | Não substitui inspeção especializada |
| Repetir rotina | Modelo editável | Estrutura com exemplo preenchido | Campos exigem adaptação |
| Calcular ou comparar | Planilha | Entrada, fórmula e interpretação | Não garante resultado futuro |
| Entender assunto complexo | Guia ou ebook | Explicação, exemplo e exercício | Exige tempo de leitura |
| Aprender por prática | Aula curta ou sequência | Uma tarefa por encontro | Dependências e duração |
| Consultar conhecimento próprio com agente | Pacote de instruções e referências | Resposta com fonte e localizador | Conteúdo e compatibilidade delimitados |

| Acesso | Escolher quando | Forma de conferir |
| --- | --- | --- |
| Aberto | Alcance e uso importam mais que captura | Consumo útil e continuidade posterior |
| Captura opcional | Recurso funciona na página, envio ajuda | Resultado disponível sem email |
| Amostra mais entrega por contato | Formato integral tem valor claro | Amostra fiel e destino informado |
| Complemento de artigo | Material aplica o assunto recém-lido | CTA explica o acréscimo concreto |

Leia [Entrega, nutrição e uso](references/entrega-nutricao-e-uso.md) nos passos
2 a 6 para roteiros, métricas e pacote de conhecimento para agentes.

## Template de pacote

```markdown
---
id: {{id}}
skill: inboundfy-growth-lead-magnet
grupo: growth
tipo: plano-material-rico
estado: rascunho
entrada: [{{acervo}}]
fontes: [{{base editorial}}, {{oferta}}]
persona: {{id}}
canal: {{canal}}
oferta: {{id}}
proxima_acao: {{responsavel e acao}}
---
Tarefa e resultado: {{o que a pessoa fará}}
Formato e razão: {{formato, uso, pré-requisitos}}
Promessa: {{texto conferível}}
Escopo: {{inclui, exclui e tempo estimado}}
| Unidade | Conteúdo | Fonte | Exercício ou uso |
| --- | --- | --- | --- |
| {{parte}} | {{conteudo}} | {{caminho}} | {{resultado}} |
Captura: {{acesso, amostra, campos e finalidade}}
Página: {{título, prévia, conteúdo, CTA e condições}}
Entrega: {{link imediato, email, alternativa e responsável}}
Nutrição: {{mensagem, gatilho, permissão, saída e destino}}
Distribuição: {{canal ativo, recorte e calendário}}
Medição: {{eventos, denominadores e janela}}
Arquivos: {{material, página, emails e briefs relacionados}}
Pendências e handoff: {{skill, estado e próxima ação}}
```

## Exemplo: planilha para uma oficina de bicicletas

Caso brasileiro fictício. A Roda Organizada, de Sorocaba, vende software para
oficinas por R$ 179/mês. A persona `persona-04` é gestora de uma oficina pequena.
O acervo `acervo/0313-entregas/` reúne rotina de ordens de serviço e oferta
fictícias. A tarefa é listar bicicletas prometidas para a semana e conferir
peças pendentes antes de confirmar a entrega.

Formato escolhido: planilha com abas “Como usar”, “Exemplo” e “Sua semana”.
Colunas: código interno da ordem, data prometida, serviço, peça pendente,
responsável e situação. O recurso não pede nome ou telefone do cliente.

Conteúdo entregue no exemplo:

| Ordem | Prometida para | Serviço | Peça pendente | Responsável fictício | Situação |
| --- | --- | --- | --- | --- | --- |
| OS-11 | Segunda | Revisão | Nenhuma | Nara | Pronta |
| OS-12 | Quarta | Troca de corrente | Corrente | Ivo | Confirmar peça |
| OS-13 | Sexta | Regulagem | Nenhuma | Nara | Em execução |

Instrução: “Copie as ordens abertas, filtre as datas desta semana e confirme a
peça pendente antes de prometer horário. Marque pronta apenas após a conferência
da oficina.” Não há integração automática com estoque. A planilha inclui
três verificações: data preenchida, responsável atribuído e peça confirmada.

Página: “Planilha para conferir as entregas da sua oficina nesta semana”.
Prévia: captura das três linhas fictícias. CTA: “Receber a planilha”.
Email é obrigatório para o envio solicitado; nome é opcional. Campo separado,
sem seleção inicial: “Quero receber conteúdos sobre organização de oficinas”.
A política e o destino do dado ficam próximos do formulário, conforme
configuração aprovada no projeto.

Entrega: download na confirmação e email “Sua planilha de entregas está aqui”.
Texto de serviço: “Faça uma cópia, leia a aba Como usar e preencha as ordens
desta semana. Se o link não abrir, responda a esta mensagem.”
Para quem autorizou relacionamento: no dia 2, exemplo de peça pendente; no
dia 5, revisão da rotina; no dia 8, convite opcional para conhecer o software.
Quem comprar sai da sequência de aquisição e segue para onboarding.

Medição fictícia de piloto: 800 visitas elegíveis, 120 solicitações únicas,
108 acessos ao arquivo, 30 contatos aderentes e 3 clientes em 45 dias.
Captura = 15%; acesso = 90% das solicitações; aderência = 25%; cliente por
solicitação = 2,5%. Acesso não comprova preenchimento. Um retorno voluntário
de uso será solicitado para entender se a tarefa foi concluída.
Custo de produção e distribuição: R$ 1.200; custo por contato aderente: R$ 40.
As contagens são didáticas, sem benchmark ou conclusão causal.

Saída: `acervo/0313-entregas/plano-material.md`, ID 0313, grupo growth,
estado `revisao`; peças com seus briefs nos caminhos de canal do projeto.
Handoff: `inboundfy-especialista-email` recebe três briefs de relacionamento;
`inboundfy-rastreamento-conversao` recebe eventos de solicitação, acesso e
cliente confirmado. Pendência: validadora conferir os links de cópia e entrega.
Próxima ação: responsável testar o recurso em uma conta sem acesso prévio.

## Checklist

- [ ] Tarefa e resultado têm escopo verificável.
- [ ] O exemplo preenchido permite começar sem consultoria.
- [ ] Amostra pública corresponde ao arquivo entregue.
- [ ] Fontes e direitos de distribuição estão conferidos.
- [ ] Link abre sem permissão interna da empresa.
- [ ] Entrega e inscrição promocional estão separadas.
- [ ] Compradores e descadastrados saem da sequência pertinente.
- [ ] Captura, acesso, uso e cliente possuem contagem distinta.

## Erros comuns

- Usar ebook longo para tarefa resolvida por uma folha: escolha formato pela aplicação.
- Mostrar só capa e esconder conteúdo: publique uma amostra representativa.
- Confundir email entregue com recurso usado: pergunte ou meça uma ação útil.
- Contar contatos repetidos como novos leads: deduplique no mesmo horizonte.
- Prometer acesso gratuito e levar direto à venda: entregue primeiro o recurso.
- Redistribuir aula com participação de terceiros sem autorização específica: retire o conteúdo pendente do pacote público.

## Guia específico do grupo

Growth conecta o recurso à oferta sem transformar todo consumidor em comprador.
Mantenha objetivo, público, canal, oferta e próxima ação no pacote.
`inboundfy-growth-cro` recebe página e formulário;
`inboundfy-growth-popups` recebe captura contextual;
`inboundfy-planejamento` recebe novos assets de canal.

Pergunte: o arquivo permite concluir a tarefa? O destinatário consegue abrir?
Qual próximo passo ajuda quem ainda não quer comprar? Consulte
`ESTRATEGIA.md`, `CONTEXTO.md` e `docs/method/05-artefatos-e-estados.md`.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-growth-lead-magnet**, do grupo
**growth**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).
