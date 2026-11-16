# Dicionário de eventos

Leia no passo 3 do fluxo. O dicionário é o contrato entre quem define a
medição e quem implementa. `inboundfy-rastreamento-conversao` recebe este
arquivo e devolve a conferência de disparo de cada linha.

## Regras de nome

- Formato `objeto_acao`: `formulario_enviado`, `pix_gerado`, `cta_clicado`.
- Minúsculas, sem acento, sem espaço, separados por sublinhado.
- O objeto vem primeiro, para que eventos do mesmo objeto fiquem juntos na
  lista.
- Quando a ferramenta já tem evento recomendado (como `purchase`,
  `add_to_cart`, `generate_lead` no GA4), use o nome recomendado. Os
  relatórios prontos dependem dele.
- Um evento por ação, com variações em propriedades. Nunca um evento por
  botão.

## Propriedades padrão

| Propriedade | Exemplo | Uso |
| --- | --- | --- |
| `local` | cabecalho, rodape, meio_artigo | Onde a ação aconteceu |
| `texto` | "Quero meu kit" | Rótulo visível do botão |
| `id_peca` | B12 | Liga ao catálogo de peças do acervo |
| `oferta` | kit-varanda | Liga a `.inboundfy/context/ofertas.md` |
| `valor` | 189.00 | Valor em reais, ponto como separador decimal |
| `metodo_pagamento` | pix, cartao, boleto | Corte do funil de pagamento |
| `persona` | persona-02 | Quando a página ou o formulário identificam o perfil |

Nunca coloque email, telefone, CPF ou nome em propriedade de evento ou na
URL. A LGPD trata esses dados como pessoais. As ferramentas de analytics
também proíbem esse envio nos termos de uso.

## Eventos essenciais por tipo de negócio

### Site de conteúdo e geração de leads

| Evento | Gatilho | Propriedades | Conversão? |
| --- | --- | --- | --- |
| `cta_clicado` | Clique em botão de oferta | local, texto, id_peca | Não |
| `formulario_iniciado` | Primeiro campo preenchido | formulario | Não |
| `generate_lead` | Envio com sucesso | formulario, oferta, id_peca | Sim |
| `whatsapp_clicado` | Clique em link `wa.me` | local, id_peca | Sim (secundária) |
| `material_baixado` | Download do PDF | material, id_peca | Sim |
| `newsletter_inscrita` | Confirmação da inscrição | origem | Sim |
| `rolagem_75` | 75% da página | id_peca | Não |

### Loja virtual

| Evento | Gatilho | Propriedades | Conversão? |
| --- | --- | --- | --- |
| `view_item` | Página de produto | item, valor | Não |
| `add_to_cart` | Produto no carrinho | item, valor | Não |
| `begin_checkout` | Início do checkout | valor, itens | Não |
| `pix_gerado` | QR code ou copia e cola exibido | valor | Não |
| `add_payment_info` | Dados de cartão enviados | metodo_pagamento | Não |
| `purchase` | Pagamento confirmado (webhook) | valor, metodo_pagamento, id_pedido | Sim |
| `refund` | Estorno | valor, id_pedido | Qualidade |

### SaaS e assinatura

| Evento | Gatilho | Propriedades | Conversão? |
| --- | --- | --- | --- |
| `conta_criada` | Cadastro concluído | plano, origem | Sim |
| `ativacao_concluida` | Primeira ação de valor (definida com o produto) | recurso | Sim |
| `trial_iniciado` | Início do teste | plano | Sim |
| `assinatura_paga` | Primeira cobrança aprovada | plano, valor | Sim |
| `assinatura_cancelada` | Cancelamento | plano, motivo | Qualidade |

## Linha do dicionário

```markdown
| Evento | Descrição | Gatilho | Propriedades | Fonte | Conversão | Criado em | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| pix_gerado | Cliente vê QR code ou copia e cola | Exibição da tela de Pix | valor | Loja (camada de dados) | Não | 2026-11-10 | a implementar |
```

O campo **estado** usa: `a implementar`, `implementado`, `conferido`,
`descontinuado`. Só `conferido` entra no painel. A conferência é feita por
`inboundfy-rastreamento-conversao`.

## Conversão de navegador e conversão de servidor

Eventos de pagamento confirmados (`purchase`, `assinatura_paga`) devem vir
do servidor ou do webhook do gateway, porque o navegador perde o evento
quando a pessoa paga o Pix no aplicativo do banco e não volta para a loja.
Registre no dicionário qual é a fonte de cada evento para que a leitura não
compare um número de navegador com um número de servidor.
