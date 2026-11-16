# Referência de ferramentas gratuitas de aquisição

## Seleção da tarefa e do formato

Uma ferramenta de aquisição precisa resolver um trabalho que antecede o produto
pago. Se a empresa vende organização de pedidos, calcular capacidade da cozinha
tem relação direta com compra. Um gerador de frases populares pode atrair
pessoas sem qualquer necessidade de organizar pedidos.

| Tipo | Escolher quando | Saída mínima | Trabalho permanente |
| --- | --- | --- | --- |
| Calculadora | Entradas numéricas sustentam regra transparente | Valor, unidade e memória do cálculo | Revisar fórmula e premissas |
| Gerador | Usuário precisa de um documento repetível | Conteúdo editável com limites | Revisar exemplos e qualidade |
| Diagnóstico | Há regras verificáveis sobre um objeto | Achados com explicação e ação | Atualizar regras e falsos positivos |
| Testador | Pergunta tem resultado técnico verificável | Resultado e condição do teste | Manter compatibilidade |
| Simulador | Pessoa quer comparar cenários | Comparação sem promessa de resultado | Atualizar hipóteses |
| Biblioteca consultável | Público precisa localizar recurso recorrente | Busca, filtro e material autorizado | Curadoria e atualização |

| Construção | Usar quando | Confirmar antes de escolher |
| --- | --- | --- |
| Planilha piloto | Cálculo pode ser validado manualmente | Fórmula compreensível e acesso simples |
| Plataforma visual | Formulário e regras são simples | Exportação, custo por uso e destino dos dados |
| Código próprio | Regra ou experiência exige controle específico | Equipe, prazo e manutenção disponíveis |
| Recurso incorporado | Solução existente cumpre a tarefa | Licença, coleta de dados e continuidade do fornecedor |

No passo 3, leia [Especificação e operação](references/especificacao-e-operacao.md).
No passo 5, use a mesma referência para cenários e conferência econômica.

## Priorização das ideias

Avalie cada candidata por aderência ao comprador, frequência da tarefa,
disponibilidade de regra confiável, demanda observada e manutenção. Registre
alto, médio ou baixo com justificativa local. Uma ideia sem fonte para o cálculo
não deve vencer por parecer fácil de divulgar.

| Sinal encontrado | Escolha |
| --- | --- |
| Clientes já usam planilha improvisada | Testar regra com eles antes da interface |
| Muitas buscas, compradores diferentes da oferta | Tratar como alcance, sem previsão de leads qualificados |
| API cara para resultado simples | Prototipar alternativa manual ou limitar escopo |
| Dado pessoal dispensável | Calcular localmente ou usar valores anônimos |
| Não há responsável pela atualização | Adiar publicação e nomear proprietário |

## Template de brief

```markdown
---
id: {{id}}
skill: inboundfy-growth-ferramentas-gratuitas
grupo: growth
tipo: brief-ferramenta
estado: rascunho
entrada: [{{acervo ou pedido}}]
fontes: [{{regra}}, {{produto}}, {{pesquisa}}]
persona: {{id}}
canal: {{distribuicao}}
oferta: {{produto relacionado}}
proxima_acao: {{responsavel e entrega}}
---
Tarefa e situação: {{verbo, objeto, frequência}}
Alternativa atual: {{como resolve hoje}}
Valor gratuito: {{resultado entregue sem compra}}
Próximo uso pago: {{continuidade pertinente}}
Escopo inicial: {{inclui e exclui}}
Construção escolhida: {{método, razão, prazo e proprietário}}
| Entrada | Tipo/unidade | Faixa | Valor padrão | Finalidade |
| --- | --- | --- | --- | --- |
| {{nome}} | {{tipo}} | {{faixa}} | {{sem padrão se pessoal}} | {{uso}} |
Regra/fórmula e fonte: {{expressão, versão e limites}}
Saída: {{resultado, interpretação e exportação}}
Casos de aceite: {{entradas e resultados esperados}}
Captura: {{aberta, opcional ou parcial; finalidade e destino}}
Custos: {{construção, operação, distribuição e suporte}}
Cenários: {{uso, lead qualificado, cliente e contribuição}}
Distribuição: {{página, conteúdo de apoio, canal e responsável}}
Medição: {{eventos e horizonte comercial}}
Manutenção: {{cadência, gatilhos de revisão e retirada}}
Pendências e handoff: {{skill, arquivo, estado e ação}}
```

## Exemplo: capacidade de produção de uma confeitaria

Empresa e números fictícios. A Fornada Clara, de Campinas, oferece software de
organização de encomendas por R$ 149/mês. A persona `persona-03` é dona de uma
confeitaria que aceita pedidos por WhatsApp e perde a conta das horas disponíveis.
Entrada: entrevistas sintéticas em `acervo/0312-capacidade/`, oferta fictícia
e planilha de capacidade fornecida como regra.

A ferramenta escolhida é uma calculadora de capacidade semanal. Recebe horas
produtivas da equipe, horas já comprometidas e tempo médio por encomenda.
Não recebe nome de cliente, telefone ou conteúdo de conversa.

Regra: capacidade adicional = piso((horas disponíveis − horas comprometidas) /
horas por encomenda), com mínimo zero. Valores do caso: 40 horas disponíveis,
28 comprometidas, 1,5 hora por encomenda. Resultado: piso(12/1,5) = 8
encomendas adicionais. Copy: “Sua estimativa é de 8 encomendas adicionais
nesta semana. O cálculo usa tempo médio e não inclui imprevistos ou compras.”

Aceites: 40/40/1,5 retorna zero; 40/28/0 pede tempo maior que zero;
40/45/1,5 retorna zero e informa excesso de cinco horas; campo “1,5” é
interpretado como uma hora e meia. Não aceitar valor negativo nem mostrar
capacidade negativa. A equipe valida os cálculos na planilha antes da interface.

O resultado fica aberto. CTA: “Organizar as encomendas no Fornada Clara”.
Um botão separado oferece receber a planilha por email; o envio não inclui
permissão automática para campanhas. A página de apoio explica como estimar
tempo por encomenda. A distribuição começa em conteúdo sobre agenda semanal
e newsletter com público já autorizado.

Cenário base, inteiramente hipotético: 1.000 usuários mensais, 600 resultados,
60 contatos opcionais, 24 contatos aderentes e 3 novos clientes. Construção:
R$ 3.000; operação mensal: R$ 150; conteúdo e divulgação: R$ 300.
Contribuição mensal por cliente assumida: R$ 90 por seis meses, sem
extrapolar permanência. Contribuição de 3 clientes: R$ 1.620.
Após R$ 450 de operação/distribuição, sobra R$ 1.170 para recuperar a construção
se o cenário se repetir. Não registrar isso como retorno realizado.

Saída: `acervo/0312-capacidade/brief-ferramenta.md`, ID 0312, estado
`revisao`, grupo growth, fontes locais e persona declaradas. Pendência:
validar o tempo por encomenda com usuárias do piloto. Próxima ação:
responsável de produto executar os aceites na planilha.
Handoff para `inboundfy-rastreamento-conversao`: medir início, resultado
válido, CTA e cliente posterior, com versão da fórmula e origem. O brief
segue para execução técnica só após o aceite da regra.

## Checklist

- [ ] O resultado gratuito resolve uma tarefa completa.
- [ ] A relação com produto pago aparece sem falsa necessidade.
- [ ] Fórmula, unidade, arredondamento e fonte estão registrados.
- [ ] Casos extremos possuem resposta definida.
- [ ] Captura e destino dos dados estão explícitos.
- [ ] O custo inclui manutenção e suporte.
- [ ] Distribuição e responsável pela atualização estão nomeados.
- [ ] Uso, lead aderente e cliente são medidos separadamente.

## Erros comuns

- Produzir nota de diagnóstico sem regra explicável: mostre os achados que formam o resultado.
- Exibir “economia garantida” a partir de premissa do visitante: identifique estimativa e limites.
- Exigir cadastro para cálculo anunciado como aberto: cumpra o acesso prometido.
- Financiar ferramenta por tráfego bruto: estime contribuição de clientes aderentes.
- Manter API indisponível sem alternativa: mostre erro útil e preserve entradas.
- Publicar resultado compartilhável com dados do usuário: compartilhe apenas quando houver escolha explícita e conteúdo revisado.

## Guia específico do grupo

Growth conecta tarefa útil, aquisição e continuidade comercial. Entregue objetivo,
público, canal, oferta e próxima ação junto do contrato funcional.
`inboundfy-growth-lead-magnet` recebe a versão baixável;
`inboundfy-growth-distribuicao` recebe divulgação; `inboundfy-seo` recebe busca.
A equipe executora recebe aceites e limitações, sem promessa de software pronto.

Confirme: quem revisa a regra? A saída ainda ajuda se ninguém preencher contato?
Qual custo muda a cada uso? Consulte `ESTRATEGIA.md`, `CONTEXTO.md` e
`docs/method/05-artefatos-e-estados.md` antes de salvar o handoff.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-growth-ferramentas-gratuitas**, do grupo
**growth**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).
