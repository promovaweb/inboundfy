# REFERENCIA.md — thothfy-iniciar

Matriz de decisão para conduzir o fluxo automático sem parar em toda etapa,
mas sem pular confirmação onde ela importa.

## Matriz: quando pausar vs. quando seguir automaticamente

| Situação | Ação |
| --- | --- |
| `context/` mínimo obrigatório incompleto | Pausa obrigatória — aciona `thothfy-setup` ou skill de manutenção antes de qualquer outra coisa. |
| Lista de oportunidades planejada (fase 3) | Pausa obrigatória — apresenta ao usuário, salvo autorização prévia explícita de "gere tudo". |
| Peça reprovada em auditoria com correção óbvia (ex.: parágrafo abaixo de 90%) | Segue automaticamente — corrige e reenvia para auditoria. |
| Peça reprovada por divergência de estratégia (brief errado) | Pausa — devolve para `thothfy-planejamento-04-briefing` e avisa o usuário do motivo. |
| `context/` de um arquivo específico incompleto para uma peça pontual (ex.: falta pessoa em `context/pessoas.md` para assinar um post) | Pausa pontual — pede só o dado faltante, não interrompe o pacote inteiro. |
| Canal sem skill de imagem correspondente pedindo imagem | Pausa — pergunta se segue só com texto ou aguarda definição do canal. |

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

- Gerar peça para todos os canais possíveis sem confirmar a lista de
  oportunidades — sempre pause nesse ponto, mesmo em fluxo automático.
- Tratar reprovação de auditoria por divergência de brief como se fosse
  reprovação de escrita — a correção certa é replanejar, não só reescrever.
- Encerrar o resumo final sem listar oportunidades pendentes — o usuário
  precisa saber o que não foi produzido e por quê.
