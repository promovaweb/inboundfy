# Página e convite de webinar: modelos e exemplo

Leia antes de escrever a página ou reduzir seu conteúdo ao convite.

## Campos e modelo da página

Complete o envelope compartilhado e os campos específicos.

```yaml
data: "<AAAA-MM-DD>"
horario: "<HH:mm>"
fuso: "<fuso confirmado>"
duracao: "<minutos>"
formato: "<ao vivo|gravado>"
apresentador: "<pessoa registrada>"
estrutura: pastor
brief: "<04-briefs/webinar-slug.md>"
inscricao: "<destino confirmado>"
```

```markdown
# <Título e tarefa>
<entrega principal>
<data, horário, fuso, duração, formato e condição de inscrição>

## <Problema que a sessão trata>
<situação reconhecível e consequência concreta>

## <O que a sessão permite fazer>
<solução e limites>

## <Quem apresenta>
<nome e competência confirmados>

## <Testemunho, somente com fonte>
<relato autorizado; omitir se não existir>

## Agenda
- <entrega, tempo e material>
- <próxima entrega, tempo e material>
- <perguntas ou aplicação, tempo>

## Inscrição e acesso
<gratuidade ou preço; materiais; gravação e prazo; como receber acesso>
<mesmo CTA e destino em todas as ocorrências>

## Dúvidas práticas
<pré-requisito; funcionamento; dados do formulário e condição confirmada>

## Notas internas
<fontes por condição; testemunho omitido, se aplicável; handoff de imagem>
```

## Modelo do convite compacto

```text
<Título>

<situação e tarefa que a sessão vai ensinar>

<data, horário, fuso e duração>. <formato e apresentador>.
<condição essencial de inscrição e acesso>.

<ação e destino confirmados>
```

## Entrada do exemplo fictício

Linha de Forno, Salvador. Persona-01: responsável por encomendas de padaria.
Apresentadora: Joana Leme, nome fictício, consultora com competência registrada
em organização de encomendas. Evento simulado de 20/11/2026, 15h de Brasília,
45 minutos ao vivo. Gratuito, gravação por sete dias e planilha editável.
Não há depoimento, certificado ou edição anterior.
Formulário fictício pede nome e e-mail para acesso. A condição de comunicação
está registrada na oferta. O domínio .example não é um destino de produção.

## Página completa

```markdown
---
id: "0046"
skill: inboundfy-especialista-webinar
tipo: pagina-de-evento
estado: revisao
criado_em: 2026-11-15
atualizado_em: 2026-11-15
entrada:
  - acervo/0046-2026-11-15-encomendas/processado.md
brief: acervo/0046-2026-11-15-encomendas/04-briefs/webinar-encomendas.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
fontes:
  - .inboundfy/context/pessoas.md
  - .inboundfy/context/ofertas.md
  - acervo/0046-2026-11-15-encomendas/base-editorial.md
data: 2026-11-20
horario: "15:00"
fuso: "America/Sao_Paulo"
duracao: "45 minutos"
formato: ao vivo
apresentador: Joana Leme
estrutura: pastor
inscricao: "https://linhadeforno.example/encontro"
proxima_acao: "Solicitar inboundfy-validador-webinar antes da arte."
---

# Organize as encomendas da padaria antes de fechar o turno

Monte uma tabela para reunir pedido, prazo e responsável na mesma consulta.

20 de novembro de 2026, às 15h, horário de Brasília. Encontro gratuito,
ao vivo pela internet, com duração de 45 minutos.

## O pedido precisa continuar compreensível no próximo turno

Uma encomenda anotada sem prazo de retirada exige nova conferência antes
de entrar na produção. Se a pessoa que recebeu o pedido já saiu, a equipe
precisa procurar a informação no histórico de atendimento.

Esse trabalho reaparece quando a anotação fica espalhada entre caderno e
mensagem. A sessão da Linha de Forno trata do registro necessário para
retomar o pedido, sem prometer aumento de vendas ou substituir o controle
de produção da sua padaria.

## O que você vai montar durante o encontro

Joana Leme vai preencher uma tabela de encomendas com um pedido simulado.
Você verá onde registrar o produto, a quantidade, o prazo de retirada e o
responsável pela confirmação. Depois, a sessão mostra como identificar um
campo vazio antes de passar o pedido para o próximo turno.

A planilha é um ponto de partida para o exercício. Se sua operação exige
campos próprios, como rota de entrega ou confirmação de pagamento, será
necessário ajustar o registro antes de usá-lo na rotina. O encontro não
configura integração com WhatsApp nem automatiza o recebimento de pedidos.

## Quem apresenta

Joana Leme é a consultora fictícia da Linha de Forno responsável por
organização de encomendas. Nesta sessão, ela apresenta o procedimento
descrito no material do exercício e responde perguntas sobre os campos
da tabela. O tema não inclui formação de preço ou orientação contábil.

## Agenda de 45 minutos

- 10 minutos: localizar informações que faltam numa encomenda simulada.
- 15 minutos: preencher a tabela com pedido, prazo e responsável.
- 10 minutos: conferir o registro antes da troca de turno.
- 10 minutos: responder perguntas sobre o exercício.

## Inscrição gratuita e acesso

A inscrição inclui o encontro ao vivo, uma planilha editável e acesso à
gravação por sete dias após a sessão. O link da sala será enviado por e-mail
depois da inscrição. A gravação e a planilha chegam no mesmo endereço após
o encontro, conforme a condição desta oferta fictícia.

Inscreva-se no encontro:
https://linhadeforno.example/encontro

## O que preparar

Você pode acompanhar o exercício sem instalar um sistema de gestão.
Para preencher a planilha durante a sessão, use um editor compatível.
O exemplo utiliza dados simulados; não é preciso enviar nomes ou pedidos
de clientes da sua padaria.

## Quais dados entram na inscrição

O formulário pede nome e e-mail para identificar a inscrição e enviar o
acesso e os materiais do encontro. A comunicação de outros conteúdos exige
a opção separada descrita no formulário da oferta. Confira as informações
de privacidade apresentadas na inscrição antes de enviar os dados.

## Notas internas

Sem testemunho: não existe edição anterior documentada.
Não anunciar certificado, vagas limitadas ou gravação por 30 dias.
Fonte logística e condições: ofertas.md, encontro de encomendas.
Fonte de competência: pessoas.md, Joana Leme.
Thumbnail, nesta hierarquia: título; 20/11/2026 e 15h de Brasília;
ao vivo; Joana Leme.
A copy aguarda validação. O domínio .example é apenas didático.
```

## Convite completo para a mesma oferta

```text
Organize as encomendas da padaria antes de fechar o turno

Um pedido sem prazo de retirada exige nova conferência antes de entrar na
produção. No encontro da Linha de Forno, você vai preencher uma tabela com
pedido, prazo e responsável usando dados simulados.

Joana Leme apresenta o exercício em 20 de novembro de 2026, às 15h, horário
de Brasília. A sessão será ao vivo pela internet e terá 45 minutos, com
tempo para perguntas sobre os campos da tabela.

A inscrição é gratuita e inclui planilha editável e gravação por sete
dias após a sessão. O acesso chega por e-mail depois da inscrição.

Inscreva-se no encontro:
https://linhadeforno.example/encontro
```
