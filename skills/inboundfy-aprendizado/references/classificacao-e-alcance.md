# Classificação e alcance

Leia nos passos 2 a 5 do fluxo.

## Os quatro tipos

| Tipo | Como reconhecer | Exemplo de mensagem | Estado inicial |
| --- | --- | --- | --- |
| `correção` | Aponta algo errado no texto entregue | "Não é 'delivery', é 'entrega'." | `proposta`, ou `confirmada` se o alcance vier junto |
| `alinhamento` | Define como o projeto quer trabalhar daqui para frente | "Sempre trate o leitor por 'você'." | `confirmada` quando diz "sempre" |
| `sugestão` | Hipótese, com "talvez", "acho que", "e se" | "Talvez valha abrir com uma pergunta." | `proposta` |
| `dica` | Informação de processo ou contexto que ajuda a executar | "A sócia só aprova às sextas." | `proposta`, até confirmar alcance |

Dúvida entre `sugestão` e `correção`: se o usuário aceitaria a versão atual
sem a mudança, é sugestão.

## Literal e interpretação

Guarde as duas coisas em campos separados.

| Mensagem literal | Interpretação justa | Interpretação exagerada |
| --- | --- | --- |
| "Tira esse 'incrível' daqui." | Remover "incrível" deste parágrafo. | Proibir adjetivos em todo o projeto. |
| "No Instagram, frases mais curtas." | Legendas e slides do Instagram com frases curtas. | Encurtar frases em todos os canais. |
| "Não cita o concorrente pelo nome." | Não nomear concorrentes nesta peça; perguntar se vale para o projeto. | Remover qualquer comparação de mercado. |

A interpretação nunca é maior do que o texto permite. Se for preciso
generalizar, pergunte.

## Os quatro alcances

| Alcance | Uso futuro | Quem lê o registro |
| --- | --- | --- |
| `peça` | Somente o arquivo relacionado | produção e validadora daquela peça |
| `canal` | Peças do canal indicado | especialista e validadora do canal |
| `persona` | Peças destinadas à persona indicada | produção, ao montar insumos para a persona |
| `projeto` | Todo novo trabalho do projeto | todas as skills que leem `aprendizado.md` |

## Pergunta de alcance

Use quando o alcance não estiver claro. A opção mais local vem primeiro.

```markdown
Registrei sua orientação como AP-{{0000}}: "{{texto literal}}".
Até onde ela vale?

1. Só nesta peça ({{caminho}}).
2. Em todas as peças de {{canal ou persona}}.
3. Em todo o projeto. {{Se for grafia, voz ou proibição: "Também atualizo {{arquivo canônico}}."}}

Ou descreva outro alcance.
```

Sinais de alcance explícito, que dispensam a pergunta:

| Frase | Alcance |
| --- | --- |
| "sempre", "nunca", "em tudo", "vale para o projeto" | `projeto` |
| "no LinkedIn", "nos e-mails" | `canal` |
| "para os tutores de primeira viagem" | `persona` |
| "aqui", "neste post", "nesse parágrafo" | `peça` |

## Destino de cada regra confirmada para o projeto

| Natureza da regra | Arquivo canônico | Skill de manutenção |
| --- | --- | --- |
| Grafia de marca, termo técnico ou sigla | `.inboundfy/context/glossario.md` | `inboundfy-contexto-institucional` |
| Tom, tratamento, vocabulário preferido | `.inboundfy/context/marca-voz.md` | `inboundfy-contexto-marca` ou `inboundfy-voz` |
| Termo, promessa ou comparação vetada | `.inboundfy/context/proibicoes.md` | `inboundfy-contexto-marca` |
| Estrutura de texto com cara de IA | `.inboundfy/context/estruturas-proibidas.md` | `inboundfy-contexto-marca` |
| Formato, processo, estrutura de peça, preferência de canal | somente `aprendizado.md` | esta skill |
| Fato de oferta, empresa, persona ou integração | não é aprendizado | `inboundfy-contexto-oferta`, `inboundfy-contexto-institucional`, `inboundfy-contexto-publico` ou `inboundfy-contexto-operacao` |

O arquivo canônico só muda depois do alcance `projeto` confirmado. O registro
de aprendizado cita o caminho alterado, e o arquivo canônico pode citar o ID
`AP-0000` como origem.
