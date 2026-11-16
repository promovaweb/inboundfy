# Estruturas proibidas

Referência de `.inboundfy/context/estruturas-proibidas.md`. Lida no passo 2
do fluxo quando o pedido for um padrão de escrita observado, uma exceção da
marca ou um ajuste de rigor.

## Função

O arquivo chega pré-preenchido com um catálogo genérico de padrões que
denunciam texto sem revisão humana: aberturas de contexto amplo, fechamentos
decorativos, tríades de adjetivos, cadeias de frases curtas, personificação
para esconder responsável e outros. Ele vale para qualquer marca e reprova a
peça junto com `proibicoes.md`.

Ele raramente precisa de entrevista. Só entra em edição em três casos.

| Caso | Ação | Exemplo fictício |
| --- | --- | --- |
| Padrão recorrente na produção, ainda fora do catálogo | acrescentar item na seção mais próxima, com exemplo e reescrita | "Todo carrossel termina com 'E aí, faz sentido pra você?'" |
| A voz da marca aceita um item de propósito | anotar exceção no próprio item, com canal | emoji no Instagram de uma marca infantil |
| Pedido de mudar o rigor de uma categoria | anotar a regra nova na seção, com alcance | tolerar frase curta em sequência em anúncio de até 125 caracteres |

## Formato de um item novo

```markdown
- "{padrão literal ou descrição}"; padrão: {o que ele substitui}. Reescreva com {alternativa concreta}. Exemplo observado: "{trecho}". Registrado em AAAA-MM-DD.
```

## Formato de uma exceção

```markdown
  - Exceção da marca: aceito no {canal}, porque {motivo}. Confirmado em AAAA-MM-DD.
```

A exceção fica indentada sob o item genérico. O item continua valendo para
os outros canais.

## Como confirmar que é um padrão

1. O trecho aparece em três peças ou mais.
2. Ele funciona como muleta: tira o lugar de um fato, de um ator ou de uma
   consequência.
3. A reescrita sem ele fica mais clara.

Se só o item 1 for verdadeiro, é repetição de estilo e pode ir para
vocabulário evitado em `marca-voz.md`.

## Checklist

- [ ] O item novo tem exemplo observado e reescrita.
- [ ] A exceção cita canal e motivo.
- [ ] Nenhuma seção do catálogo foi apagada.
- [ ] O item novo não repete padrão já catalogado com outras palavras.

## Erros comuns

- Apagar a seção inteira porque um item não se aplica.
- Transformar uma palavra isolada em padrão. O catálogo trata estrutura.
- Registrar exceção sem canal. Ela vira permissão geral sem ninguém
  perceber.
