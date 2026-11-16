# Referência de posicionamento

Este arquivo apoia os passos 1 a 8 do fluxo de `SKILL.md`: classificação das
fontes, declaração de posicionamento, template do documento, exemplo
completo e checklist.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-copy-posicionamento**, do grupo
**copy**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Materiais de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/componentes-de-posicionamento.md](references/componentes-de-posicionamento.md) | Passos 2 a 4 | Alternativas, atributos, valor, cliente ideal, categoria, forças de troca e palavras do cliente. |
| [references/mapa-de-mensagens.md](references/mapa-de-mensagens.md) | Passo 6 | Mensagem central, pilares, provas por persona e uso nos canais. |

## Guia específico do grupo

Posicionamento é a escolha do lugar que o produto ocupa na cabeça do cliente
quando ele compara opções. Os campos do grupo são **objetivo** (para que o
posicionamento será usado agora), **mensagem** (declaração e pilares),
**persona** (cliente ideal e variações), **canal** (onde o mapa de mensagens
será aplicado) e **revisão** (fontes, glossário, proibições e voz).

Esta base orienta as demais skills, mas não substitui a leitura da persona,
voz, proibições, dicionário e acervo específico da peça.

## Classificação das fontes

| Classe | Exemplo | Uso permitido |
| --- | --- | --- |
| Fato confirmado | Número de clientes no CRM, preço em `ofertas.md`, depoimento com consentimento | Pode virar mensagem e prova. |
| Fala de cliente | Trecho de entrevista, avaliação, mensagem de WhatsApp registrada | Fonte das palavras do cliente; prova quando autorizada. |
| Opinião da equipe | "Nosso suporte é o melhor" | Hipótese a confirmar; não vira mensagem pública. |
| Hipótese | "Construtoras médias devem preferir isso" | Registrar com a forma de testar. |
| Fonte externa | Relatório de mercado, dado público | Contexto, com link e data de consulta. |

## Declaração de posicionamento

Molde clássico, útil como rascunho interno (não é copy pública):

```text
Para {cliente ideal} que {situação ou necessidade},
{produto} é {categoria}
que {valor principal}.
Diferente de {alternativa principal},
{produto} {diferença com prova}.
```

Escreva três versões que mudem de verdade uma escolha: o cliente ideal, a
categoria ou a alternativa principal. Três frases com sinônimos não são três
opções.

## Template do documento de posicionamento

```markdown
---
id: {{id}}
skill: inboundfy-copy-posicionamento
versao: {{v1}}
estado: rascunho
produto: {{nome oficial conforme glossario.md}}
fontes:
  - {{entrevistas, CRM, depoimentos, pesquisa de concorrentes}}
proxima_skill: {{inboundfy-contexto-publico | inboundfy-contexto-oferta | inboundfy-copy-redacao}}
---

# Posicionamento: {{produto}}

## Alternativas reais

| Alternativa | O que faz bem | Onde falha para o cliente ideal | Fonte |
| --- | --- | --- | --- |
| {{...}} | {{...}} | {{...}} | {{...}} |

## Atributos diferentes e valor

| Atributo | Prova | Valor para o cliente |
| --- | --- | --- |
| {{...}} | {{...}} | {{...}} |

## Cliente ideal

- Situação: {{o que acontece na empresa ou na vida da pessoa}}
- Sinais observáveis: {{tamanho, ferramenta usada, gatilho de compra}}
- Fora do perfil: {{quem não deve comprar e por quê}}

## Categoria

{{Como o cliente procura e nomeia este tipo de solução.}}

## Forças de troca

| Força | Leitura | Fonte |
| --- | --- | --- |
| Empurrão | {{...}} | {{...}} |
| Atração | {{...}} | {{...}} |
| Ansiedade | {{...}} | {{...}} |
| Hábito | {{...}} | {{...}} |

## Palavras do cliente

| Para descrever | O cliente diz | A empresa dizia |
| --- | --- | --- |
| {{problema}} | {{...}} | {{...}} |

## Declaração escolhida

{{declaração}}

Opções rejeitadas: {{resumo e motivo}}

## Mapa de mensagens

{{ver references/mapa-de-mensagens.md}}

## Hipóteses abertas

| Hipótese | Como testar | Responsável |
| --- | --- | --- |
| {{...}} | {{...}} | {{...}} |

## Atualizações encaminhadas

| Skill | Arquivo | Conteúdo | Alcance confirmado |
| --- | --- | --- | --- |
| inboundfy-contexto-publico | publico.md | {{...}} | {{projeto}} |
```

## Exemplo completo: software de gestão de obras

Dados fictícios e ilustrativos. O Gestor Obra é um SaaS inventado, de
Goiânia, que controla orçamento e compras de obras para pequenas
construtoras. Custa R$ 290 por mês por empresa.

### Entrada

```yaml
descricao_atual: "Sistema completo de gestão para construção civil"
clientes: 140 construtoras ativas em outubro de 2026 (CRM)
entrevistas: 9 clientes e 4 ex-clientes, registradas em acervo/0402-2026-10-15-entrevistas/
concorrentes: acervo/0398-2026-10-08-concorrentes/pesquisa.md
```

### Alternativas reais

| Alternativa | O que faz bem | Onde falha para o cliente ideal | Fonte |
| --- | --- | --- | --- |
| Planilha no Excel ou Google | Grátis, flexível, todo mundo sabe usar | Ninguém atualiza na obra; o engenheiro descobre o estouro no fim do mês | 7 de 9 entrevistas |
| ERP de construção de grande porte | Completo, integra contabilidade | Implantação de meses, custo acima de R$ 1.500 por mês | Pesquisa de concorrentes |
| Mestre de obras anotando no caderno e no WhatsApp | Rápido, sem treinamento | Compra duplicada, nota fiscal perdida | 5 de 9 entrevistas |

### Atributos diferentes e valor

| Atributo | Prova | Valor para o cliente |
| --- | --- | --- |
| Lançamento de compra pelo WhatsApp com foto da nota | Recurso em produção desde março de 2026 | O mestre de obras registra sem abrir sistema; o escritório vê no mesmo dia. |
| Alerta quando uma etapa passa de 90% do orçado | Recurso em produção | O dono descobre o estouro enquanto ainda dá para negociar. |
| Implantação em uma semana com importação da planilha | Média de 6 dias nos últimos 30 clientes (CRM) | Não para a obra para trocar de ferramenta. |

### Cliente ideal

- Situação: construtora que toca de 2 a 10 obras residenciais ao mesmo tempo
  e controla custos em planilha.
- Sinais observáveis: dono ou engenheiro que já perdeu margem por compra fora
  do orçamento; equipe de obra que usa WhatsApp.
- Fora do perfil: incorporadoras com obras acima de 20 mil m², que precisam
  de integração contábil completa.

### Palavras do cliente

| Para descrever | O cliente diz | A empresa dizia |
| --- | --- | --- |
| O problema | "A obra estoura e eu só fico sabendo no fim" | "Falta de visibilidade gerencial" |
| O resultado | "Saber quanto já gastei em cada etapa" | "Gestão integrada de custos" |
| A categoria | "Controle de obra", "planilha de obra" | "ERP para construção civil" |

### Declarações apresentadas

1. **Recomendada:** Para construtoras que tocam até 10 obras e controlam
   custos em planilha, o Gestor Obra é um controle de obra pelo WhatsApp que
   avisa quando uma etapa vai estourar o orçamento. Diferente da planilha,
   o registro acontece na obra, no momento da compra.
2. Para construtoras pequenas que acham o ERP caro e lento, o Gestor Obra é
   um ERP simples que fica pronto em uma semana. (Compete com ERP, que não é
   a alternativa da maioria dos clientes ideais.)
3. Para engenheiros responsáveis por várias obras, o Gestor Obra é um painel
   de custos por etapa. (Recorta pelo cargo, mas quem compra é o dono.)

O usuário escolheu a declaração 1.

### Atualizações encaminhadas

| Skill | Arquivo | Conteúdo |
| --- | --- | --- |
| inboundfy-contexto-publico | publico.md | Cliente ideal e sinais observáveis |
| inboundfy-contexto-concorrentes | concorrentes.md | Planilha, ERP grande e caderno como alternativas |
| inboundfy-contexto-oferta | produtos.md | Atributos com prova e limite (sem integração contábil) |
| inboundfy-contexto-institucional | glossario.md | "controle de obra" como termo de categoria |

### Interpretação

A descrição "sistema completo de gestão" colocava o produto contra ERPs
grandes, uma disputa que ele perderia. As entrevistas mostraram que a
alternativa real é a planilha. A nova categoria usa a palavra do cliente e
o diferencial nasce do momento do registro. A falha provável seria escolher
a declaração 2 por parecer mais ampla: ela atrai clientes fora do perfil e
aumenta o cancelamento.

## Checklist

- [ ] Fato, fala de cliente, opinião, hipótese e fonte externa estão
      classificados.
- [ ] A alternativa principal é a que o cliente usaria de verdade, inclusive
      "não fazer nada".
- [ ] Cada atributo diferente tem prova e valor para o cliente.
- [ ] O cliente ideal tem situação, sinais observáveis e fora do perfil.
- [ ] A categoria usa as palavras do cliente.
- [ ] Três declarações diferentes foram apresentadas e uma foi escolhida.
- [ ] O mapa de mensagens cobre cada persona ativa.
- [ ] Nomes conferem com `glossario.md`.
- [ ] Hipóteses abertas têm forma de teste.
- [ ] Atualizações de contexto foram encaminhadas com alcance confirmado.

## Erros comuns

- **Posicionar contra o concorrente famoso.** A maioria dos clientes ideais
  compara com planilha, caderno ou não fazer nada.
- **Diferencial que todo mundo tem.** "Suporte humanizado" e "fácil de usar"
  aparecem em toda página do setor. Sem prova específica, não diferencia.
- **Cliente ideal largo demais.** "PMEs" não ajuda a escolher palavra,
  exemplo nem canal.
- **Inventar categoria nova sem necessidade.** Categoria que ninguém procura
  exige explicar o problema antes de vender; só vale com verba e paciência.
- **Usar opinião da equipe como prova.** "Nosso atendimento é excelente"
  precisa de nota de avaliação, tempo de resposta ou depoimento.
- **Gravar direto no contexto.** Esta skill encaminha; a skill de contexto
  registra com o formato de `CONTEXTO.md`.
