# REFERENCIA.md — thothfy-iniciar

Matriz de decisão para conduzir o fluxo automático sem parar em toda etapa,
mas sem pular confirmação onde ela importa.

## Matriz: quando pausar vs. quando seguir automaticamente

| Situação | Ação |
| --- | --- |
| `context/` mínimo obrigatório incompleto | Pausa obrigatória — aciona `thothfy-setup` ou skill de manutenção antes de qualquer outra coisa. |
| Lista de oportunidades planejada (fase 3) | Segue automaticamente com até cinco itens de prioridade alta ou média; respeita canais pedidos pelo usuário. |
| Peça reprovada em auditoria com correção óbvia (ex.: parágrafo abaixo de 90%) | Segue automaticamente — corrige e reenvia para auditoria. |
| Peça reprovada por divergência de estratégia (brief errado) | Pausa — devolve para `thothfy-planejamento-04-briefing` e avisa o usuário do motivo. |
| `context/` incompleto para afirmação de preço, produto, autoria ou oferta | Reúne os campos essenciais em uma única pergunta; continua os outros itens do pacote. |
| Canal sem skill de imagem correspondente | Segue com texto e registra a imagem como pendência, salvo se a imagem for o próprio artefato pedido. |
| Entrada é uma ideia curta | Aciona `thothfy-brainstorm` e só abre o pacote depois da aprovação automática do brainstorm. |
| Entrada é uma peça-base substancial | Preserva a peça como material original e usa o pipeline completo para extrair oportunidades. |

## Seleção automática de oportunidades

Produzir até cinco peças. Ordenar por:

1. canal pedido explicitamente;
2. aderência da audiência e do formato;
3. força dos ativos disponíveis;
4. diferença real de ângulo em relação às outras peças;
5. esforço compatível com os recursos declarados em `context/canais.md`.

Excluir canal sem ativo suficiente e registrar o motivo no plano.

## Exemplo de resumo final

```markdown
## Pacote: <nome ou slug do pacote>

Ativos gerados:
- Blog: content/<pacote>/97-ativos-finais/blog/<slug>/README.md — aprovado
- LinkedIn: content/<pacote>/97-ativos-finais/linkedin/<slug>/README.md — aprovado
- Instagram: content/<pacote>/97-ativos-finais/instagram/<slug>/ — pendente (falta imagem, aguardando identidade visual)

Oportunidades não produzidas nesta rodada:
- E-mail de nutrição — usuário optou por não produzir agora.
```

## Erros comuns

- Gerar peça para todos os canais possíveis sem verificar se o material
  sustenta ângulos diferentes.
- Tratar reprovação de auditoria por divergência de brief como se fosse
  reprovação de escrita — a correção certa é replanejar, não só reescrever.
- Encerrar o resumo final sem listar oportunidades pendentes — o usuário
  precisa saber o que não foi produzido e por quê.
