# Desenho do teste e hipótese

Leia no passo 2 (classificação) e nos passos 3 e 4 (hipótese e métricas) do
fluxo da skill.

## Escolha do tipo de teste

| Tipo | Quando escolher | Quando evitar |
| --- | --- | --- |
| A/B | Uma mudança, uma pergunta, tráfego médio | Quando a mudança é correção óbvia |
| A/B/n | Três a quatro versões do mesmo elemento | Com pouco tráfego: cada variante extra divide a amostra |
| Multivariado | Interação entre dois ou três elementos, tráfego alto | Abaixo de cerca de 50 mil visitas por semana na página |
| Divisão por URL | Página redesenhada, estrutura diferente | Quando o SEO da URL original não pode oscilar |
| Antes e depois com controle | Email transacional, mudança de preço em todo o site | Quando há campanha ou sazonalidade na janela |
| Holdout de canal | Medir se um canal (WhatsApp, newsletter) gera receita incremental | Base pequena (menos de alguns milhares de contatos) |

## Onde está o maior efeito

Mudanças grandes mostram resultado com amostra menor. Ordem aproximada de
efeito esperado em páginas e emails:

1. Oferta: preço, condição de pagamento (Pix com desconto, parcelamento),
   garantia, bônus.
2. Proposta de valor: título e subtítulo da página, assunto do email.
3. Formato do pedido: quantidade de campos, demonstração ou teste grátis,
   WhatsApp ou formulário.
4. Prova: depoimento com nome e resultado, logos, números de uso.
5. Detalhe visual: cor do botão, ícone, ordem de itens secundários.

Testes de cor e microcopy só fazem sentido em páginas com muito tráfego. Em
volume baixo, teste oferta e proposta de valor.

## Hipótese bem formada

```text
Porque observamos [dado ou fala com fonte],
acreditamos que [mudança específica]
fará [efeito esperado] para [persona],
medido por [métrica principal] em [janela].
```

| Fraca | Forte |
| --- | --- |
| "Um título melhor vai converter mais." | "Porque 7 de 12 entrevistados citaram medo de multa da Receita, acreditamos que o título 'Seu MEI em dia sem multa' aumentará os cadastros de teste da persona-02, medido pela taxa de cadastro em 3 semanas." |
| "Vamos testar o botão verde." | "Porque o mapa de cliques mostra 40% dos toques fora do botão no celular, acreditamos que um botão de largura total aumentará os cliques no CTA, medido por cliques por sessão móvel." |

## Métricas do teste

| Papel | Pergunta | Exemplos |
| --- | --- | --- |
| Principal | A hipótese se confirmou? | taxa de cadastro, taxa de pedido de orçamento, receita por visitante |
| Apoio | Por que o resultado aconteceu? | clique no CTA, rolagem até o preço, tempo até o envio |
| Proteção | A vitória custou algo? | reembolso em 30 dias, descadastro do email, ticket de suporte, cancelamento no primeiro mês |

Regras: uma única métrica principal; métrica principal próxima da mudança
(teste de assunto mede abertura e clique, não receita do trimestre); métrica
de proteção com limite escrito antes do início ("reembolso não pode subir
mais de 1 ponto").

Quando o elemento testado só aparece para parte do público (pop-up, chat,
banner de saída), meça o grupo exposto. Diluir a métrica com quem nunca viu o
elemento esconde o efeito.

## Priorização do backlog

Use ICE (impacto, confiança, facilidade) de 1 a 10. A confiança vem da força
da observação: fala repetida de cliente ou dado de funil vale mais que
opinião do time.

| Ideia | Impacto | Confiança | Facilidade | ICE | Observação de origem |
| --- | --- | --- | --- | --- | --- |
| {{ideia}} | {{1-10}} | {{1-10}} | {{1-10}} | {{média}} | {{fonte}} |

Ritmo saudável para equipe pequena: um a dois testes ativos por vez, sem
sobreposição na mesma página ou na mesma lista de email.

## Fontes de ideia

- Funil com queda forte entre duas etapas (dado de `inboundfy-metricas`).
- Gravações de sessão e mapas de calor.
- Perguntas repetidas no WhatsApp comercial e no suporte.
- Objeções registradas por `inboundfy-pesquisa-cliente`.
- Resultados de testes anteriores (retestar o vencedor com efeito maior).
