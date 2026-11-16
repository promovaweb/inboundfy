# Estudo de uma referência de marketing

## Template de estudo

Use no passo 1 para delimitar o recorte antes de pesquisar.

```markdown
---
id: estudo-{{alvo}}-{{periodo}}
skill: inboundfy-engenharia-reversa
grupo: capacidade
estado: rascunho
entrada: {{pedido e estratégia}}
persona: {{id}}
fontes: [{{URLs e datas}}]
proxima_skill: {{skill executora do primeiro teste}}
---
# Estudo de {{referência}}
Pergunta: {{mecanismo a compreender}}
Recorte e período: {{panorama, conteúdo, funil ou acompanhamento}}
Teto de pesquisa: {{horas e R$}}
Acessos autorizados: {{contas, compras e limite}}

## Registro de coleta
| Fonte/URL | Publicação | Consulta | O que mostra | Classe | Limite |
| --- | --- | --- | --- | --- | --- |
| {{URL}} | {{data ou desconhecida}} | {{data}} | {{observação}} | {{observado/declarado/hipótese}} | {{acesso e cobertura}} |

## Passagens do funil
| Etapa | Mensagem | Oferta | CTA e destino | Condição | Fonte |
| --- | --- | --- | --- | --- | --- |
| {{aquisição/captura/ativação/receita/indicação}} | {{síntese própria}} | {{oferta}} | {{ação e URL}} | {{acesso}} | {{fonte}} |

## Mudanças datadas
| Data | Mudança observável | Série comparável | Explicações simultâneas |
| --- | --- | --- | --- |
| {{data}} | {{mudança}} | {{fonte/unidade ou ausente}} | {{preço, mídia, mercado etc.}} |

## Comparação e testes
| Mecanismo | Referência | Projeto | Diferença pertinente | Teste próprio | Custo/prazo | Medida | Skill |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {{mecanismo}} | {{fonte}} | {{dado}} | {{lacuna}} | {{ação}} | {{R$ e dias}} | {{definição}} | {{ID real}} |

## Limites e próxima ação
Não observado: {{lista}}
Hipóteses que exigem mais dados: {{lista}}
Primeiro teste: {{responsável, arquivo e data}}
```

## Escolha do recorte

| Pergunta | Recorte | Fontes úteis | Entrega proporcional |
| --- | --- | --- | --- |
| Como a oferta é apresentada? | Panorama | Páginas públicas e preços | Quadro de público, promessa, condições e CTA |
| Que formatos a marca repete? | Conteúdo | Amostra datada de um canal | Padrões contados dentro da mesma rede |
| O que acontece após o cadastro? | Funil | Telas e mensagens de conta autorizada | Sequência observada até o limite de acesso |
| O que mudou desde o último estudo? | Acompanhamento | Registro anterior e mesmas fontes | Diferenças datadas e testes afetados |
| Qual ação causou crescimento? | Cronologia com ressalvas | Série consistente e mudanças datadas | Hipóteses concorrentes; sem causa isolada presumida |

## Exemplo de hipótese aplicável

Caso fictício: a Estoque de Rua vende software de reposição a pequenas lojas de materiais elétricos. A persona `lojista-01` usa planilhas. A equipe quer compreender por que a referência fictícia Prateleira Certa recebe menções em associações comerciais. O recorte é aquisição e captura em 90 dias, com oito horas de pesquisa e nenhuma compra ou cadastro externo.

A coleta inclui 24 posts da mesma rede, três páginas de aplicação, uma biblioteca de anúncios públicos e dois boletins de associações. As datas e URLs ficam no registro de fontes do estudo. O site público mostrou um simulador de estoque mínimo, seguido de um formulário para receber o cálculo. Dois boletins apontaram para o simulador. A página de preços informou R$ 149 mensais; esse valor foi classificado como declarado pela referência, sem auditoria comercial.

A equipe viu seis anúncios na biblioteca consultada. Não encontrou volume de gasto nem conversão. Uma ferramenta estimou crescimento de visitas no período, mas não ofereceu série histórica com cobertura consistente. O relatório não atribuiu crescimento ao simulador. As telas internas de onboarding ficaram como não observadas, pois o pedido não autorizou cadastro.

| Passagem | Observação fictícia | Interpretação limitada |
| --- | --- | --- |
| Boletim da associação → simulador | Dois boletins com link para cálculo | Existe distribuição setorial observada |
| Simulador → formulário | Resultado resumido aparece antes do pedido de email | O recurso oferece utilidade antes da captura |
| Formulário → venda | Sem acesso autorizado | Sequência e taxa desconhecidas |

A Estoque de Rua possui uma planilha de reposição já conferida pelo suporte. A proposta própria é publicá-la com três exemplos para lojas de materiais elétricos e testar uma divulgação autorizada em uma associação local. O texto e a planilha serão próprios. A hipótese afirma que o recurso pode gerar contatos com necessidade de reposição, sem supor resultado igual ao da referência.

O teste custa até R$ 600 de produção e dura 21 dias após publicação. A medida principal é conversa com loja ativa que repõe estoque ao menos semanalmente. A meta interna inicial é cinco conversas, tratada como hipótese operacional, sem rótulo de média do setor. Se o recurso receber acessos mas nenhum uso, a equipe entrevista visitantes antes de ampliar divulgação. Se não houver acesso suficiente para leitura, registra inconclusivo em vez de declarar que a oferta falhou.

Saída: `engenharia-reversa-prateleira-01.md`, estado `revisao`, seis observações ligadas a fontes e três lacunas. O handoff a `inboundfy-growth-lead-magnet` leva a planilha, persona, teto e hipótese. `inboundfy-rastreamento-conversao` recebe a definição de conversa qualificada e os eventos de uso do recurso.

## Medidas do estudo e dos testes

No estudo, registre cobertura de fontes, tamanho da amostra, período e quantidade de itens não observados. Essas medidas descrevem a coleta; não são notas de qualidade da empresa analisada. No teste, use a métrica do mecanismo proposto: uso do recurso, contato qualificado, primeiro resultado ou retenção.

Curtidas, tempo de veiculação e estimativas de tráfego não demonstram lucro. Compare formatos dentro da mesma rede e faixa de idade de publicação. Sem amostra suficiente, relate exemplos individuais. Não invente uma porcentagem mínima universal para validar padrões.

## Checklist do estudo

- [ ] Pergunta, período, recorte e teto de pesquisa foram fixados.
- [ ] As fontes distinguem observado, declarado e hipótese.
- [ ] A cronologia separa publicação de data de descoberta.
- [ ] As imagens descritas foram realmente abertas.
- [ ] A comparação respeita mercado, unidade e cobertura.
- [ ] Cada teste cabe nos recursos e aponta para uma skill real.
- [ ] Coleta privada não realizada está explicitamente listada.

## Erros comuns

- Deduzir campanha ativa de um pixel: consultar biblioteca pública e registrar seus filtros.
- Creditar um salto a um post: mapear mudanças simultâneas e limitações da série.
- Copiar a mensagem do concorrente: extrair o mecanismo e produzir texto próprio ligado à oferta real.
- Tratar reclamação isolada como padrão: agrupar temas com volume, datas e contexto.
- Comparar estimativa externa com GA4 próprio: usar tabelas distintas e explicar a diferença de origem.

## Arquitetura aplicada

O [preflight](../_shared/01-preflight-e-fontes.md) localiza recursos do projeto antes da comparação. O [artefato](../_shared/02-contrato-de-artefato.md) guarda alvo, recorte e período. O [handoff](../_shared/03-interacao-e-handoff.md) leva os limites ao responsável pelo teste. A [retomada](../_shared/04-validacao-e-retomada.md) conserva coleta antiga no acompanhamento. O [contexto editorial](../_shared/05-contexto-editorial.md) impede atribuir à marca fatos da referência.

## Guia específico do grupo

Esta capacidade transforma observações em hipóteses delimitadas. O plano estratégico e a execução permanecem nas skills próprias. Registre fonte, persona, canal e estado de cada teste. Envie lacunas de oferta a `inboundfy-copy-posicionamento` e lacunas de canal a `inboundfy-estrategia` antes de propor uma campanha completa.

## Leitura por etapa

No passo 3, leia [coleta e hipóteses](references/coleta-e-hipoteses.md) para montar uma amostra comparável, interpretar datas e formular testes.
