# Modelos e peça completa de LinkedIn

Leia ao escrever o formato aprovado e ao conferir o corpo copiável.

## Campos próprios

```yaml
formato: "<post|artigo>"
autor: "<pessoa registrada, quando houver>"
estrutura: "<aida|pas|nenhuma>"
brief: "<brief aprovado>"
```

Complete também ID, skill, tipo, estado, datas, entrada, contexto, fontes e próxima ação.

## Modelo de post

```markdown
## Texto copiável
~~~text
<objeto, situação ou dado com recorte>

<explicação e exemplo sustentado pela fonte>

<interpretação e limite para o público>

<ação única ou pergunta concreta>
~~~

## Notas internas
Autor: <registro e competência>
Fontes: <arquivo/seção>
CTA: <destino ou resposta esperada>
Contagem: <caracteres com espaços do bloco>
Imagem: <não prevista ou encaminhamento com alt text>
```

## Modelo de artigo

```markdown
# <Título com tema e recorte>

<dúvida e aplicação que justificam a leitura>

## <Primeira pergunta sobre a tarefa>
<explicação, fonte e condição de aplicação>

## <Exemplo que permite conferir o mecanismo>
<situação, execução e interpretação>

## <Variação ou limite relevante>
<como reconhecer que a aplicação precisa mudar>

## <Próximo passo relacionado à dúvida>
<ação possível e destino confirmado>

## Fontes e notas internas
<autoria, arquivos, contagem e apoio visual>
```

## Entrada fictícia

Giro de Bairro, Curitiba. Elisa Moura, nome fictício, trabalha na implantação
do cadastro de ordens. O registro de pessoas autoriza explicar o fluxo,
sem estatísticas de receita ou número de clientes.
Persona-01: responsável por pequena oficina. Produto: campo Próxima ação
aceita texto e responsável. Brief: post educativo, pergunta de conversa,
sem imagem.

## Peça completa

```markdown
---
id: "0044"
skill: inboundfy-especialista-linkedin
tipo: post-nativo
estado: revisao
criado_em: 2026-11-15
atualizado_em: 2026-11-15
entrada:
  - acervo/0044-2026-11-15-ordem/processado.md
brief: acervo/0044-2026-11-15-ordem/04-briefs/linkedin-ordem.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
fontes:
  - acervo/0044-2026-11-15-ordem/base-editorial.md
  - .inboundfy/context/pessoas.md
  - .inboundfy/context/produtos.md
  - acervo/0044-2026-11-15-ordem/processado.md
formato: post
autor: Elisa Moura
estrutura: nenhuma
proxima_acao: "Solicitar inboundfy-validador-linkedin."
---

## Texto copiável

~~~text
Uma ordem de serviço precisa dizer o que acontece depois de “aguardando peça”.

Na Giro de Bairro, eu explico o campo Próxima ação a partir dessa dúvida.
O status descreve a situação do serviço. Para retomar o trabalho no dia
seguinte, a oficina também precisa encontrar a ação esperada e quem ficou
responsável por ela.

Considere uma troca de corrente aguardando uma peça do fornecedor.
“Aguardar” deixa a ordem parada sem dizer quem consulta a entrega.
“Consultar o fornecedor amanhã, responsável pelo atendimento” indica um
trabalho que a equipe consegue retomar.

Esse registro depende da atualização da própria oficina. Se a previsão
mudar e o cadastro continuar igual, o campo deixa de orientar o próximo
turno. Por isso, a conferência precisa incluir a data e o responsável.

Qual informação costuma faltar quando sua equipe retoma uma ordem de serviço?
~~~

## Notas internas

Autor: pessoas.md, Elisa Moura, implantação de ordens.
Produto: produtos.md, campo Próxima ação.
Exemplo da corrente: situação didática, não depoimento de cliente.
CTA: resposta à pergunta final; não há material prometido por automação.
Imagem: não prevista; alt text não aplicável.
Contar o bloco copiável na revisão e registrar o valor.
Auditorias de copy e A5 aguardam a versão final.
```

## Ampliação para artigo

Quando o brief pedir artigo, desenvolva a implantação completa: seleção de
ordens para revisar, definição de responsável, mudança de previsão e conferência
no turno seguinte. Cada seção precisa responder uma dúvida nova e consultar
a fonte correspondente. Repetir o post com sinônimos não cria profundidade.

