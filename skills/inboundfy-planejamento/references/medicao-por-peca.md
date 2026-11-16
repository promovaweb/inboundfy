# Medição por peça

Leia no passo 6 do fluxo, ao preencher o campo de métrica do brief. Cada peça
tem uma métrica principal ligada ao objetivo, uma meta e uma janela de
leitura. O plano de medição do projeto inteiro fica com `inboundfy-metricas`.
O rastreamento técnico de conversões fica com
`inboundfy-rastreamento-conversao`.

## Métrica principal por objetivo

| Objetivo da peça | Métrica principal | Métrica de apoio | Janela de leitura |
| --- | --- | --- | --- |
| Ser encontrado | Cliques orgânicos | Posição média, impressões | 90 dias |
| Ganhar atenção | Alcance e compartilhamentos | Comentários, salvamentos | 7 dias |
| Captar contato | Leads gerados | Taxa de conversão da página | 30 dias |
| Nutrir | Cliques no CTA | Abertura, descadastro | 7 dias após o envio |
| Converter | Testes, vendas ou reuniões | Taxa de conversão por origem | 30 dias |
| Reter | Uso da funcionalidade ou retorno | Respostas, tickets evitados | 30 dias |

Uma peça tem uma métrica principal. Três métricas principais é o mesmo que
nenhuma.

## UTM

Todo link de peça que leva ao site carrega UTM no padrão do projeto. Sem
padrão registrado, use:

```text
utm_source={{canal}}&utm_medium={{organico | email | social | pago}}&utm_campaign={{campanha ou "organico"}}&utm_content={{id-da-peca}}
```

O `utm_content` com o ID da peça permite ligar a conversão ao calendário.

## Campo de métrica no brief

```markdown
- **Métrica principal:** {{métrica}}
- **Meta:** {{número}} em {{janela}}
- **Fonte do dado:** {{ferramenta de análise, plataforma de email, CRM}}
- **Link com UTM:** {{URL}}
```

## Referências de mercado

Use como ordem de grandeza quando o projeto não tiver histórico. Troque pelo
número real assim que houver três meses de dados.

| Indicador | Faixa comum |
| --- | --- |
| Taxa de clique em email para base própria | 1% a 4% |
| Conversão de página de captura | 20% a 40% |
| Engajamento de post no LinkedIn (reações e comentários sobre impressões) | 2% a 5% |
| Taxa de clique orgânico na primeira posição de busca | 25% a 35% |

## Erros comuns

- Meta sem janela de leitura.
- Medir artigo de busca em 7 dias.
- Link sem UTM, que some no tráfego direto.
