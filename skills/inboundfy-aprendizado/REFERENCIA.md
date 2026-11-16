# Referência de aprendizado

O registro vive em `.inboundfy/context/aprendizado.md`, abaixo do heading
`## Registros`. Cada orientação ganha um bloco com ID `AP-0000`, estado, tipo,
alcance, mensagem literal e interpretação.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-aprendizado**, do grupo
**contexto**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Material de apoio por passo

| Passo do fluxo | Arquivo | Uso |
| --- | --- | --- |
| 2 a 5 | [references/classificacao-e-alcance.md](references/classificacao-e-alcance.md) | Tipos, literal versus interpretação, alcances, pergunta de alcance e destino canônico. |
| 6 a 10 | [references/aplicacao-e-conflitos.md](references/aplicacao-e-conflitos.md) | Estados do registro, filtro de leitura futura, substituição e efeito em peças existentes. |

## Template

```md
### AP-0001 | título curto

- **Estado:** proposta
- **Data:** AAAA-MM-DD
- **Tipo:** correção
- **Alcance:** peça
- **Canal:** blog
- **Persona:** persona-01
- **Arquivo relacionado:** canais/blog/0001-peca/README.md
- **Orientação recebida:** texto literal do usuário
- **Interpretação:** regra usada nesta alteração
- **Aplicação:** trecho atualizado e resultado
- **Arquivo canônico atualizado:** não se aplica
- **Fonte:** conversa de AAAA-MM-DD
- **Validação seguinte:** conferir na próxima revisão da peça
```

O título curto descreve a regra, não a conversa: "tutor em vez de dono", e
não "ajuste pedido pela Marina". Ao gravar o primeiro registro, troque a frase
`Nenhum aprendizado registrado ainda.` pelo bloco; nos seguintes, acrescente
no fim da seção, em ordem de ID.

## Exemplo

O usuário informa: “não use a palavra automação neste post; prefiro falar em
fluxo”. A skill registra a orientação como `correção`, alcance `peça`, preserva
o texto recebido, altera o post atual e deixa o glossário sem mudança. Se o
usuário confirmar que a preferência vale para todo o projeto, a skill cria um
registro com alcance `projeto` e atualiza o glossário.

### Exemplo completo

Exemplo fictício. A Trigal & Cia, padaria artesanal de Belo Horizonte, recebe
encomendas pelo WhatsApp e cobra por Pix. Durante a revisão do post de blog
`0005` ("Pão de fermentação natural: como conservar em casa"), a sócia Marina
manda três mensagens.

**Mensagem 1:** "Aqui não é 'delivery', a gente fala 'entrega'. Sempre."

- Tipo `correção`; "sempre" informa alcance `projeto`. Não há pergunta.
- É vocabulário preferido: atualiza `.inboundfy/context/marca-voz.md`, seção
  de vocabulário, citando AP-0003.

```md
### AP-0003 | "entrega" em vez de "delivery"

- **Estado:** aplicada
- **Data:** 2026-11-15
- **Tipo:** correção
- **Alcance:** projeto
- **Canal:** não se aplica
- **Persona:** não se aplica
- **Arquivo relacionado:** canais/blog/0005-2026-11-12-pao-de-fermentacao-natural-como-conservar/README.md
- **Orientação recebida:** "Aqui não é 'delivery', a gente fala 'entrega'. Sempre."
- **Interpretação:** usar "entrega" para o envio de pedidos; não usar "delivery" em nenhum canal.
- **Aplicação:** duas ocorrências trocadas no post 0005.
- **Arquivo canônico atualizado:** .inboundfy/context/marca-voz.md
- **Fonte:** conversa de 2026-11-15 com a sócia
- **Validação seguinte:** validadoras conferem "delivery" no passe literal.
```

**Mensagem 2:** "Talvez fique melhor terminar com a receita da torrada."

- Tipo `sugestão`. Fica `proposta`. A skill pergunta:

```markdown
Registrei sua sugestão como AP-0004: "Talvez fique melhor terminar com a receita da torrada."
Até onde ela vale?

1. Só neste post (canais/blog/0005-.../README.md).
2. Em todos os posts do blog que falem de pão.
3. Em todo o projeto.

Ou descreva outro alcance.
```

- Resposta: "Só nesse." O registro passa a `confirmada`, alcance `peça`. A
  especialista do blog troca o fechamento. `marca-voz.md` não muda.

**Mensagem 3:** "No Instagram a gente nunca mostra preço, só manda chamar no
WhatsApp."

- Tipo `alinhamento`, alcance `canal` (Instagram), explícito.
- É preferência de canal, não grafia nem veto de negócio geral: fica só no
  aprendizado. A produção do Instagram passa a listar AP-0005 nas escolhas.

**Depois das mensagens:** a peça 0005 estava em `revisao`. A skill avisa a
`inboundfy-validador-blog` que a rodada recomeça, roda `inboundfy-anti-slop`
no marco A5 e entrega o relatório: AP-0003 aplicada (com arquivo canônico),
AP-0004 confirmada para a peça, AP-0005 confirmada para o canal.

**Três semanas depois:** Marina diz "pode usar 'delivery' nos anúncios do
iFood". A skill cria AP-0009 com alcance `canal` (anúncios), escreve
`Exceção de canal a AP-0003` na interpretação e mantém AP-0003 ativa, porque a
regra geral continua valendo fora dos anúncios.

## Checklist

- [ ] O registro recebeu ID sequencial sem reutilizar ID antigo.
- [ ] A mensagem do usuário e a interpretação aparecem separadas.
- [ ] Tipo, alcance, fonte, arquivo e data foram preenchidos.
- [ ] A peça atual recebeu a alteração solicitada.
- [ ] O arquivo normativo só mudou após alcance confirmado.
- [ ] A próxima execução consultará o registro aplicável.
- [ ] Anti-slop e a validadora foram executados depois da alteração.
- [ ] Registro substituído foi arquivado com remissão ao novo ID.
- [ ] Peça aprovada afetada voltou para `revisao` pelo pipeline.

## Erros comuns

- Transformar uma sugestão pontual em regra do projeto sem perguntar o alcance.
- Apagar a orientação original depois de resumir sua aplicação.
- Atualizar voz, glossário ou proibições sem apontar o registro de aprendizado.
- Reaplicar uma regra arquivada sem confirmação nova.
- Confundir uma preferência de formato com uma regra de grafia.
- **Gravar preço ou dado de produto como aprendizado.** O fato fica escondido
  num arquivo que as skills de oferta não leem. Encaminhe a
  `inboundfy-contexto-oferta`.
- **Criar ID novo para a mesma orientação repetida.** Procure antes; a
  repetição pode só confirmar um registro `proposta`.
- **Reescrever peças publicadas por causa de regra nova.** A regra vale para
  trabalho novo; o retroativo depende de pedido.

## Registro de alcance

| Alcance | Uso futuro |
| --- | --- |
| `peça` | Somente o arquivo relacionado. |
| `canal` | Peças do canal indicado. |
| `persona` | Peças destinadas à persona indicada. |
| `projeto` | Todo novo trabalho do projeto. |

## Handoff

Após registrar uma orientação confirmada, encaminhe:

1. grafia para `inboundfy-contexto-institucional` e `glossario.md`;
2. característica de escrita para `inboundfy-voz` e `marca-voz.md`;
3. veto de termo, promessa ou estrutura para `inboundfy-contexto-marca` e
   `proibicoes.md`;
4. preferência de peça para a produtora e a validadora do canal;
5. mudança ampla para `inboundfy-acervo` e o próximo ciclo anti-slop.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
No aprendizado, o arquivo canônico é `aprendizado.md`, o fato registrado é a
mensagem literal, a preferência é a interpretação, a fonte é a conversa ou o
arquivo de origem, e a alteração aponta para a peça e o arquivo canônico
afetados.
