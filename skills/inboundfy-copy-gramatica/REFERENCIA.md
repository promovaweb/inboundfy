# REFERENCIA.md; inboundfy-copy-gramatica

Material de apoio para revisar a norma culta em copy. As regras detalhadas
ficam em `references/`. Esta página traz a ordem de leitura, a tabela que
separa erro de registro aceito pela marca, o modelo de relatório, um caso
completo e o checklist final.

## Mapa de leitura

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/pontuacao.md](references/pontuacao.md) | Passos 3 e 4 | Estrutura da frase, vírgula obrigatória e proibida, vírgula antes de `e`, demais sinais. |
| [references/concordancia-crase-e-regencia.md](references/concordancia-crase-e-regencia.md) | Passos 5 e 6 | Verbos impessoais, porcentagem, partitivo, concordância nominal, crase, regência. |
| [references/colocacao-grafia-e-estilo.md](references/colocacao-grafia-e-estilo.md) | Passos 7 e 8 | Colocação pronominal, `há` e `a`, `onde` e `aonde`, porquês, acentuação, paralelismo, gerundismo, artigos. |
| [references/numeros-datas-e-moeda.md](references/numeros-datas-e-moeda.md) | Passo 8 | Valores em R$, porcentagem, números por extenso, datas, horas, telefones, siglas e maiúsculas. |

## Ordem de prioridade

Quando o tempo for curto, revise nesta ordem. Os primeiros itens mudam o
sentido ou derrubam a credibilidade da peça. Os últimos incomodam, mas raramente
confundem.

1. Valores, datas, horas e nomes de marca (um preço mal grafado gera
   reclamação de cliente).
2. Vírgula entre sujeito e verbo ou entre verbo e complemento.
3. Concordância com verbo impessoal (`houveram`, `fazem dois anos`).
4. Crase antes de verbo ou palavra masculina (`à partir`, `à prazo`).
5. Regência de CTA (`acesse ao`, `assista o`).
6. Paralelismo em listas de benefícios.
7. Colocação pronominal e porquês.
8. Acentuação diferencial e grafias frequentes.

## Norma ou registro da marca

A norma culta é o padrão. A marca pode aceitar uma forma coloquial em canais
informais, desde que `marca-voz.md` registre a escolha. Sem registro, aplique
a norma.

| Forma encontrada | Norma culta | Aceita quando |
| --- | --- | --- |
| "Me manda o comprovante" | "Mande-me o comprovante" ou "Você pode me mandar o comprovante" | `marca-voz.md` registra próclise coloquial para WhatsApp ou Instagram. |
| "pra", "pro" | "para", "para o" | A voz registra linguagem falada naquele canal. Nunca em página de vendas, contrato ou email transacional. |
| "Tá liberado" | "Está liberado" | Mesmo caso de "pra". |
| "A gente envia" | "Nós enviamos" ou "Enviamos" | A voz usa "a gente" como marca de proximidade. Concordância sempre na terceira pessoa do singular ("a gente envia", nunca "a gente enviamos"). |
| "Chegue no topo" | "Chegue ao topo" | Nunca. Regência de verbo de movimento não tem exceção de voz. |
| "Houveram" | "Houve" | Nunca. |
| "À partir de" | "A partir de" | Nunca. |

O registro coloquial muda escolhas de palavra e colocação. Ele não autoriza
concordância errada, crase errada nem vírgula entre sujeito e verbo.

## Template de relatório

```markdown
---
id: {{id da peça}}
skill: inboundfy-copy-gramatica
chamadora: {{skill que pediu a revisão}}
estado: {{aprovado | revisao}}
entrada: {{caminho da versão analisada}}
canal: {{canal}}
registro_aplicado: {{culto | coloquial registrado em marca-voz.md para o canal}}
fontes:
  - ESCRITA.md
  - .inboundfy/context/marca-voz.md
  - .inboundfy/context/glossario.md
---

# Revisão de gramática: {{título da peça}}

## Achados

| # | Local | Trecho | Regra | Diagnóstico | Ação |
| --- | --- | --- | --- | --- | --- |
| 1 | {{seção, parágrafo}} | "{{trecho}}" | {{arquivo de references e regra}} | {{efeito}} | {{correção aplicada}} |

## Mantido de propósito

- "{{trecho}}": {{por que está correto ou por que é exceção registrada}}

## Texto corrigido

{{versão completa}}

## Pendências de dado

- {{skill dona do dado}}: {{dúvida que a gramática não pode resolver}}

## Próxima ação

{{skill chamadora}} {{verbo + objeto}} em `{{caminho}}`.
```

A seção "Mantido de propósito" evita que a próxima revisão desfaça uma forma
correta que parecia errada, como "à vista" ou a concordância opcional de
partitivo.

## Exemplo completo (ilustrativo)

Empresa fictícia: **Rota Verde Turismo**, agência de ecoturismo de Bonito (MS).
Peça: email para lista de leads com o pacote de dezembro. `marca-voz.md`
fictício registra: "Linguagem falada só no WhatsApp. Email segue a norma
culta." `glossario.md` registra `Pix` e `Rio da Prata`.

### Texto recebido

> **Assunto:** Últimas vagas pra Bonito em dezembro
>
> Me responda até sexta, porque restam poucas vagas. Houveram 40 reservas na
> última semana e, a maioria dos viajantes, escolheram o pacote de 4 dias. O
> pacote inclui: transfer do aeroporto, flutuação no Rio da Prata e, almoço
> típico. Pagamento à vista no pix tem 5% de desconto, ou parcelado à partir
> de R$389. A saída é as 7h da manhã, e o retorno acontece às 17hrs. Nossa
> equipe vai estar enviando o roteiro detalhado por WhatsApp. Acesse ao link
> abaixo para garantir a sua.

### Achados

| # | Local | Trecho | Regra | Diagnóstico | Ação |
| --- | --- | --- | --- | --- | --- |
| 1 | Assunto | "pra" | Tabela de registro. Voz registra norma culta no email | Coloquial fora do canal permitido | "para" |
| 2 | P1 | "Me responda" | Colocação, início de frase | Oblíquo abre a oração | "Responda" |
| 3 | P1 | "Houveram 40 reservas" | Verbo impessoal `haver` | Plural indevido | "Houve" |
| 4 | P1 | "semana e, a maioria" | Vírgula antes de `e` entre orações | Conector mecânico | Divididas em duas frases |
| 5 | P1 | "a maioria dos viajantes, escolheram" | Vírgula entre sujeito e verbo | Separa par indissociável | Vírgula removida. Concordância mantida no plural, forma válida para partitivo |
| 6 | P1 | "4 dias" | Números de zero a dez por extenso | Forma numérica em prosa | "quatro dias" |
| 7 | P1 | "inclui: transfer" e "Prata e, almoço" | Dois-pontos antes de complemento, vírgula antes do último item com `e` | Dois-pontos separa verbo e objeto. Vírgula indevida | Dois-pontos e vírgula removidos |
| 8 | P1 | "pix" | `glossario.md` | Grafia da marca | "Pix" |
| 9 | P1 | "à partir de R$389" | Crase antes de verbo, grafia de moeda | Crase proibida. Falta espaço após `R$` | "a partir de R$ 389" |
| 10 | P1 | "é as 7h da manhã" | Crase em hora exata, horas | Falta crase. "da manhã" redundante | "é às 7h" |
| 11 | P1 | "7h da manhã, e o retorno" | Vírgula antes de `e` entre orações | Conector mecânico | Divididas em duas frases |
| 12 | P1 | "17hrs" | Horas | Abreviação fora do padrão | "17h" |
| 13 | P1 | "vai estar enviando" | Gerundismo | Locução artificial | "envia" |
| 14 | P1 | "Acesse ao link" | Regência de `acessar` | Transitivo direto | "Acesse o link" |
| 15 | P1 | "garantir a sua" | Referente | "sua" sem substantivo próximo | "garantir sua vaga" |

### Mantido de propósito

- "Pagamento à vista": locução adverbial feminina, crase obrigatória.
- "porque restam poucas vagas": `porque` causal, vírgula antes correta.

### Texto corrigido

> **Assunto:** Últimas vagas para Bonito em dezembro
>
> Responda até sexta, porque restam poucas vagas. Houve 40 reservas na última
> semana. A maioria dos viajantes escolheram o pacote de quatro dias. O pacote
> inclui transfer do aeroporto, flutuação no Rio da Prata e almoço típico. O
> pagamento à vista no Pix tem 5% de desconto. Também é possível parcelar, a
> partir de R$ 389. A saída é às 7h. O retorno acontece às 17h. Nossa equipe
> envia o roteiro detalhado pelo WhatsApp. Acesse o link abaixo para garantir
> sua vaga.

### Pendências de dado

- `inboundfy-contexto-oferta`: "a partir de R$ 389" é o valor da parcela ou o
  total parcelado? A revisão manteve a forma ambígua porque escolher um dos
  sentidos mudaria a oferta.
- `inboundfy-especialista-email`: "Responda até sexta" não diz qual sexta.
  Confirmar a data (por exemplo, "até sexta-feira, 4 de dezembro").

## Checklist

- [ ] Nenhuma vírgula separa sujeito e predicado.
- [ ] Nenhuma vírgula separa verbo e complemento, inclusive por dois-pontos.
- [ ] Aposto intercalado tem vírgula antes e depois.
- [ ] Vocativo está isolado em qualquer posição.
- [ ] Adjunto adverbial longo deslocado está isolado.
- [ ] `mas`, `porém`, `contudo`, `pois` e `logo` iniciando oração têm vírgula
      antes.
- [ ] Nenhuma vírgula antes de `e` liga orações.
- [ ] Nenhuma vírgula antes do último item de lista com `e`.
- [ ] Nenhum ponto e vírgula nem travessão de prosa.
- [ ] `haver` e `fazer` impessoais no singular, inclusive em locução.
- [ ] Porcentagem e partitivo com concordância válida.
- [ ] Palavras variáveis (`anexo`, `incluso`, `mesmo`, `meio`, `bastante`)
      concordam conforme o caso.
- [ ] Nenhuma crase antes de verbo, masculino, pronome ou numeral cardinal.
- [ ] Crase presente em hora exata e locução feminina.
- [ ] `de...a` e `da...à` seguem o artigo.
- [ ] Regência de `acessar`, `visitar`, `assistir`, `implicar`, `visar`,
      `ir` e `chegar` correta.
- [ ] Nenhum oblíquo abre oração, salvo exceção registrada para o canal.
- [ ] Próclise após palavra atrativa.
- [ ] Porquês, `há` e `a`, `onde` e `aonde` corretos.
- [ ] Itens de lista com a mesma forma gramatical.
- [ ] Sem gerundismo e sem `mesmo` como pronome.
- [ ] Siglas e ferramentas com artigo em prosa corrida.
- [ ] Valores, datas, horas, telefones e marcas com forma única na peça.
- [ ] Nenhum dado mudou de valor ou de sentido.
- [ ] Leitura integral refeita depois das correções.

## Erros comuns

- Inserir vírgula entre sujeito longo e verbo para "dar respiro".
- Corrigir a concordância de partitivo como erro quando as duas formas são
  válidas. Registre em "Mantido de propósito".
- Trocar `houveram` por `houve` e esquecer o `podem haver` dois parágrafos
  abaixo.
- Aplicar a norma culta num canal onde a voz registrou linguagem falada, ou
  aplicar o coloquial num canal onde ela não registrou.
- Usar dois-pontos entre verbo e objeto ("inclui: transfer").
- Tirar a crase de "à vista", "às vezes" ou "à medida que".
- Uniformizar números escolhendo um valor. Um valor ambíguo vira pendência.
- Corrigir `pix` para `PIX`. A grafia correta é `Pix`.
- Reescrever a frase inteira para fugir de uma dúvida de vírgula. A skill
  corrige a norma, não o estilo.
- Juntar duas frases com vírgula antes de `e` ao corrigir uma frase picada.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-copy-gramatica**,
do grupo **copy**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O grupo **copy** trabalha sobre texto. Esta skill devolve o texto corrigido e
o relatório para a chamadora, sem salvar arquivo próprio. Os campos mínimos
do registro são estes:

- **texto:** caminho da versão analisada;
- **registro aplicado:** norma culta ou exceção registrada em `marca-voz.md`
  para o canal;
- **achados:** tabela com regra e ação;
- **mantido de propósito:** formas corretas que parecem erro;
- **retorno:** pendências de dado com a skill dona de cada uma.

Quando `inboundfy-copy-editor` chama esta skill, o relatório de gramática
entra como anexo do relatório de auditoria, com o mesmo ID da peça.
