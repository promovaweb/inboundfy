# Pesquisa ligada às afirmações do acervo

A pesquisa responde perguntas delimitadas. Ela amplia contexto e atualiza informação, mas não transforma uma fonte externa em resultado obtido pela empresa.

## Diagnóstico da afirmação

Pergunte qual frase precisa de confirmação, qual parte pode mudar com o tempo e qual fonte teria acesso direto ao fato. Faça uma consulta por lacuna, evitando pesquisa ampla sem relação com o material.

| Afirmação | Fonte prioritária | Limite de uso |
| --- | --- | --- |
| Funcionalidade de produto | Documentação oficial e notas de versão | Recurso disponível não prova adoção pelo cliente |
| Resultado do próprio negócio | Registro interno autorizado | Fonte pública não substitui dado interno |
| Estatística de mercado | Pesquisa original com método e período | Não misturar amostra nacional com caso local |
| Regra de plataforma | Ajuda ou documentação oficial atual | Registrar data e configuração aplicável |
| Relato sem fonte acessível | Responsável pelo material | Manter como não confirmado |

## Procedimento de consulta

1. Extraia de FAQ e processado uma lista de afirmações A01, A02. Registre qual uso editorial depende de cada uma.
2. Transforme cada lacuna numa pergunta verificável. Defina região, produto, versão e período quando relevantes.
3. Pesquise na web e abra a página original. Não use snippet como confirmação.
4. Leia método, atualização e alcance. Procure a fonte primária apontada por uma notícia ou resumo.
5. Registre URL, título, organização, publicação quando disponível, acesso, resumo próprio e relação com A01.
6. Confronte versões incompatíveis. Uma fonte mais recente só prevalece se tratar do mesmo objeto e alcance.
7. Diferencie `confirmado`, `contrariado`, `parcial` e `não localizado`. Ausência na busca não prova inexistência.
8. Escreva recomendações de uso para a base editorial. Não corrija o bruto para fazê-lo concordar com a pesquisa.

## Template de pesquisa.md

```markdown
---
id: "<id do acervo>"
entrada: [processado.md, faq.md]
pesquisado_em: <AAAA-MM-DD>
---
# Pesquisa sobre <tema>

## A01. <Afirmação ou lacuna>

- Pergunta: <pergunta verificável>
- Consulta: <termos, região e período>
- Uso pretendido: <trecho que depende da resposta>

### F01. <Título da fonte>

- URL: <link direto>
- Organização: <responsável>
- Publicação ou atualização: <data ou não informada>
- Acesso: <AAAA-MM-DD>
- Resumo: <síntese própria>
- Alcance: <objeto, amostra, versão ou região>
- Resultado: confirmado | contrariado | parcial | não localizado
- Relação com o acervo: <o que a fonte permite afirmar>
- Limite: <o que continua sem resposta>

## Encaminhamento à base editorial
<Afirmações utilizáveis, atribuição necessária e perguntas internas.>
```

## Exemplo trabalhado: oficina fictícia Pinhão Bicicletas

**Entrada:** o relato diz “o botão de exportar garante que a mensagem foi entregue”. O manual interno fictício do aplicativo descrito no acervo explica apenas exportação do histórico.

**Antes:** pesquisa genérica por “vantagens de mensagens”, sem fonte ligada ao botão.

**Depois:**

```markdown
# Pesquisa sobre exportação e entrega de mensagens

## A01. Exportar histórico comprova entrega?

- Pergunta: o comando exportar inclui recibo de entrega por mensagem?
- Consulta: nome do aplicativo, exportar histórico, recibo de entrega.
- Uso pretendido: explicar como conferir os avisos enviados pela oficina.

### F01. Manual fictício recebido com o acervo

- URL: não aplicável; fonte local em fontes/manual-mensagens.md.
- Organização: fornecedora fictícia Mensagem do Bairro.
- Publicação ou atualização: não informada.
- Acesso: 2026-10-20.
- Resumo: o manual descreve a exportação das conversas, sem informar recibos por mensagem.
- Alcance: função de exportação descrita no documento recebido.
- Resultado: parcial.
- Relação com o acervo: pode explicar a exportação, sem afirmar entrega.
- Limite: a documentação não responde como consultar recibos.

## Encaminhamento à base editorial
Retirar a equivalência entre exportar e comprovar entrega. Perguntar ao responsável qual tela contém os recibos. A pesquisa web permanece necessária antes de concluir o material novo.
```

Este exemplo mostra como registrar uma fonte local sem inventar URL ou consulta executada. Numa execução real com material novo, acrescente as páginas abertas na web; se não houver acesso, marque a etapa como pendente. A ficha local acima, sozinha, não satisfaz a pesquisa web obrigatória.

## Checklist numerado

1. Cada consulta responde uma lacuna identificada.
2. Fontes web foram abertas, não apenas encontradas.
3. URL aponta para a página original.
4. Organização, data de acesso e alcance estão registrados.
5. Resumo usa redação própria e conserva ressalvas.
6. Resultado diferencia confirmação de ausência de resposta.
7. Divergências mantêm as duas fontes.
8. Informação externa tem atribuição própria.
9. Perguntas sobre resultados internos voltam ao responsável do projeto.

## Erros comuns

- Pesquisar apenas para confirmar a tese inicial. Procure também condições que a limitem.
- Misturar versões de um produto. Registre a versão de cada fonte.
- Inventar consulta, URL ou data para completar template. Declare a etapa não executada.
- Atribuir estatística de mercado à empresa do acervo. Mantenha a atribuição original.

## Arquitetura aplicada

Use [fontes](../_shared/01-preflight-e-fontes.md) para a procedência, [artefato](../_shared/02-contrato-de-artefato.md) para vínculos e [contexto](../_shared/05-contexto-editorial.md) para vocabulário. Encaminhe com [handoff](../_shared/03-interacao-e-handoff.md) e preserve fontes anteriores por [retomada](../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

Esta capacidade entrega `pesquisa.md` para `inboundfy-base-editorial` e `inboundfy-acervo`. Leia o método no início de cada consulta. Consulte `CONTEXTO.md` para precedência e `ESCRITA.md` para separar fato, interpretação e alegação comercial.
