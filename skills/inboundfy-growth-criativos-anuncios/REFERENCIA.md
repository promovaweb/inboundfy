# Criativos de anúncios: da hipótese ao pacote de produção

## Arquitetura aplicada

A criação segue [fontes](../_shared/01-preflight-e-fontes.md), [artefato](../_shared/02-contrato-de-artefato.md), [handoff](../_shared/03-interacao-e-handoff.md), [validação](../_shared/04-validacao-e-retomada.md) e [contexto editorial](../_shared/05-contexto-editorial.md). O resultado pertence ao grupo **growth**. A peça conserva vínculo com a campanha e seu brief.

## Guia específico do grupo

Relacione objetivo, público, canal, oferta e próxima ação por conceito. Leia [conceitos e produção](references/conceitos-e-producao.md) nos passos 2 a 4; leia [testes e renovação](references/testes-e-renovacao.md) no passo 5. Orçamento segue para `inboundfy-growth-anuncios`; eventos e UTMs para `inboundfy-rastreamento-conversao`; página inconsistente para `inboundfy-growth-cro`. A geração de imagem usa `inboundfy-base-imagem` quando solicitada e autorizada, com fonte declarada.

Pergunte antes da produção: qual tarefa o público tenta resolver? Qual mecanismo pode ser mostrado? Existe comprovação da promessa? O que já foi testado? Quantas peças a equipe consegue produzir e a verba consegue avaliar? Comentário público pode revelar uma dúvida, mas não autoriza uso de nome ou depoimento no anúncio.

## Template de pacote criativo

```markdown
---
id: {{pacote}}
skill: inboundfy-growth-criativos-anuncios
grupo: growth
estado: rascunho
brief: {{caminho}}
fontes: [{{oferta}}, {{ativo}}, {{pesquisa}}]
persona: {{id}}
proxima_skill: inboundfy-growth-anuncios
---
# Matriz de criação
| Conceito | Necessidade | Fonte | Hipótese | Formato | Custo/prazo |
| --- | --- | --- | --- | --- | --- |
| {{id}} | {{problema}} | {{origem}} | {{efeito esperado}} | {{formato}} | {{estimativa}} |
## Peça {{id-conceito-versao}}
- Canal, posicionamento e proporção: {{dados}}
- Abertura/título: {{texto}}
- Corpo e CTA: {{texto}}
- Comprovação e limites da promessa: {{fonte}}
- Composição/roteiro: {{elementos ou cenas}}
- Ativos e direitos: {{origem e permissão}}
- Destino e identificação de medição: {{URL/ID}}
- Prévia e formato conferidos: {{data/arquivo}}
- Teste: {{controle, variável, métrica, teto, janela e maturação}}
- Pendências e próxima ação: {{responsável e arquivo}}
```

## Exemplo de produção brasileira fictícia

A Rota de Bairro, empresa fictícia de software para entregas de pequenos mercados de Curitiba, oferece demonstração gratuita de 15 minutos. O plano fictício `acervo/0082-2026-11-15-entregas/estrategia.md` seleciona persona-01, gerente que organiza entregas pelo celular. O produto confirma agrupamento de pedidos por bairro, mas não possui estudo de redução de combustível. O pacote `0082`, estado `rascunho`, usa fontes simuladas `.inboundfy/context/produtos.md`, `.inboundfy/context/ofertas.md` e uma gravação de demonstração do acervo.

| Conceito | Necessidade e fonte | Hipótese | Entrega |
| --- | --- | --- | --- |
| C01 | Pedidos espalhados, entrevista fictícia do acervo | Mostrar a organização pode elevar solicitação válida | Vídeo de tela com narração |
| C02 | Dúvida sobre cadastro, FAQ fictícia | Demonstrar o primeiro cadastro pode reduzir objeção | Card de três etapas |

A equipe produz C01 primeiro por possuir gravação de tela pronta. A peça `0082-C01-v1` usa o texto: “Organize as entregas do mercado por bairro. Veja os pedidos reunidos na Rota de Bairro e conheça a tela em uma demonstração de 15 minutos.” Título: “Entregas por bairro”. CTA: “Agendar demonstração”. O destino fictício `/demonstracao` repete duração e oferta.

| Tempo planejado | Imagem | Narração e legenda |
| --- | --- | --- |
| 0 a 3 s | Pedidos fictícios em cartões separados | “Os pedidos de entrega chegam separados?” |
| 3 a 9 s | Tela reúne pedidos por bairro | “Na Rota de Bairro, você agrupa os pedidos antes de sair.” |
| 9 a 15 s | Pessoa seleciona o bairro e vê a lista | “Veja o que vai para cada região.” |
| 15 a 20 s | Tela final com marca e CTA | “Agende uma demonstração de 15 minutos.” |

A produção planeja vídeo vertical, texto dentro da área visível da prévia e legendas completas. A interface usa nomes e endereços fictícios. O briefing solicita gravação real do produto, não interface sintética. A música fica ausente; a narração pertence à equipe fictícia com permissão registrada. O arquivo final ainda não foi gerado, portanto o registro declara “roteiro pronto, renderização pendente”.

No teste didático, v1 compara com v2, que troca somente a abertura por “Separe as entregas por bairro antes de sair”. Os dois recebem a mesma oferta e o mesmo destino. O plano reserva R$ 400 por versão como teto, não como garantia de volume. Após a janela comercial simulada de sete dias, v1 apresenta 100 cliques e cinco solicitações válidas; v2 apresenta 80 cliques e seis. Com gasto de R$ 400 em cada, os CPAs seriam R$ 80 e R$ 66,67. A entrega otimizada e os poucos eventos impedem declarar superioridade causal. O pacote recomenda nova rodada estruturada, registra a limitação e mantém v2 como candidata.

A próxima ação da produtora fictícia Nara Lima é finalizar a gravação e obter a prévia do canal. `inboundfy-rastreamento-conversao` recebe o ID de cada versão para mapear evento e UTM; `inboundfy-growth-anuncios` recebe o pacote revisado para avaliar a ativação.

## Checklist de produção e teste

- [ ] Fontes sustentam todas as promessas.
- [ ] Conceitos diferem por necessidade ou mecanismo.
- [ ] Os ativos possuem origem e permissão de uso.
- [ ] O roteiro informa cenas, texto, duração e CTA.
- [ ] A copy é compreensível com a imagem isolada e sem áudio.
- [ ] O destino corresponde à oferta.
- [ ] A revisão registra métrica principal e limitações da comparação.
- [ ] Arquivo planejado e arquivo produzido têm estados distintos.

## Erros comuns de criação

- Prometer redução percentual sem estudo: mostre a função comprovada.
- Produzir vinte títulos equivalentes: teste conceitos antes de sinônimos.
- Imitar conversa privada para simular recomendação de cliente: identifique dramatização e use personagens fictícios.
- Recortar uma tela sem contexto: mostre a ação que explica a função.
- Considerar CTR suficiente para substituir o controle: confira conversão válida e qualidade comercial.
- Declarar fadiga só pela idade da peça: verifique exposição, resposta e mudanças na entrega.
