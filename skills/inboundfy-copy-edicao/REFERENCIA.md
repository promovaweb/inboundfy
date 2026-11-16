# Referência de edição de copy

Este arquivo apoia os passos 3 a 8 do fluxo de `SKILL.md`: escolha do modo,
passagens de edição, regras de ajuste, relatório, exemplo completo e
checklist.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-copy-edicao**, do grupo
**copy**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Materiais de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/trocas-de-linguagem.md](references/trocas-de-linguagem.md) | Passo 5 | Jargão corporativo e expressões infladas com a troca em português direto. |
| [references/atualizacao-de-conteudo.md](references/atualizacao-de-conteudo.md) | Passo 6 | Quando atualizar, o que conferir, o que preservar e quando reescrever. |

## Guia específico do grupo

A edição melhora um texto que já existe sem trocar o que ele pretende dizer.
Os campos do grupo são **objetivo** (o que a revisão precisa resolver),
**mensagem** (tese preservada), **persona** (para quem o texto foi escrito),
**canal** (forma exigida) e **revisão** (modo, passagens, A0, A5). Registre
os cinco no relatório.

## Modos de edição

| Modo | Quando | Passagens | Tempo típico |
| --- | --- | --- | --- |
| Leve | Texto bom, publicação próxima | Clareza, conformidade | Minutos |
| Completo | Texto com problema de resultado ou de leitura | Todas, na ordem | Uma sessão |
| Atualização | Texto antigo com fatos ou telas defasados | Diagnóstico de atualização e depois todas | Uma sessão |

## Ordem das passagens

Cada passagem procura um problema só. Ler o texto oito vezes com um foco por
vez encontra mais do que uma leitura tentando ver tudo.

| Passagem | Pergunta | Resultado esperado |
| --- | --- | --- |
| 1. Intenção | Qual é a tese e qual ação o texto pede? | Uma tese e um objetivo reconhecíveis no primeiro bloco. |
| 2. Clareza | Uma pessoa da persona entende cada frase na primeira leitura? | Frases diretas, termos explicados, ordem lógica. |
| 3. Voz | Soa como a marca em `marca-voz.md`? | Ritmo, pessoa verbal e vocabulário do projeto. |
| 4. Relevância | Cada afirmação responde "e daí?" para a persona? | Característica sempre ligada ao ganho para o leitor. |
| 5. Prova | Cada promessa tem fonte, número, caso ou demonstração? | Afirmações sem base removidas ou marcadas como pendência. |
| 6. Especificidade | Existem palavras vagas onde caberia um dado? | Prazos, valores, telas e situações concretas. |
| 7. Segurança da ação | O leitor sabe o que acontece ao clicar e o que perde se desistir? | CTA claro, condição visível, receio respondido. |
| 8. Conformidade | Proibições, dicionário, fontes e canal batem? | Texto liberado para `inboundfy-copy-editor` e A5. |

Depois de uma passagem, confira se ela não estragou uma anterior. Um dado
acrescentado na passagem 6 pode quebrar o ritmo da passagem 3.

## Regras de ajuste

Ao editar, preserve a intenção e os fatos confirmados e corrija o que impede
compreensão antes de ajustar ritmo e acabamento:

- Retire o que só repete, enfeita ou atrasa a mensagem: aquecimento, elogio à
  própria peça, termos dispensáveis e trechos que ocupam espaço sem ajudar o
  público.
- Mantenha ressalvas, passos, exemplos, provas, limites e detalhes técnicos
  quando evitam interpretação errada ou ajudam a executar uma ação. Uma
  versão menor não é automaticamente mais simples.
- Não resolva proibições por substituição lexical em massa, regex ampla ou
  troca automática. Se a frase depende de termo proibido, reescreva o trecho
  inteiro com ator real, mecanismo, regra, consequência e limite.
- Substitua lista seca por raciocínio quando ela esconder a tese, e heading
  genérico por heading que nomeie a tela, o campo, a configuração, a versão,
  o erro ou a escolha real.
- Corrija o padrão repetido no arquivo inteiro, não apenas a ocorrência
  apontada. Depois da correção principal, releia o arquivo procurando o mesmo
  vício em abertura, desenvolvimento, listas, links, CTA e conclusão.
- Não sacrifique naturalidade para encurtar. Conecte sujeito, verbo, objeto e
  complemento com a gramática normal do português; use artigos, conectivos e
  contrações quando a frase pedir.
- Preserve a estrutura boa da origem. Melhore precisão, nomenclatura, fatos e
  fluidez sem trocar por fórmula genérica.
- A correção deve ser proporcional ao problema. Não uniformize todos os
  parágrafos, não transforme toda frase longa em duas frases curtas e não
  alise uma passagem autoral só para obter consistência.

## Verificações rápidas por nível

| Nível | O que procurar |
| --- | --- |
| Palavra | Advérbio que não muda o sentido ("realmente", "extremamente"), adjetivo sem prova ("inovador", "robusto"), jargão da tabela de trocas, sigla sem explicação na primeira menção. |
| Frase | Voz passiva escondendo quem faz, duas ideias numa frase só, frase que começa por "É importante", oração ligada por ", e". |
| Parágrafo | Primeira frase sem a ideia principal, parágrafo que repete o anterior, sequência de frases curtas em escadinha. |
| Peça | Mais de uma ação principal, CTA enterrado no fim de página longa, seção sem pergunta do leitor. |

## Problemas frequentes e correção

| Sintoma | Causa | Correção |
| --- | --- | --- |
| Parede de funcionalidades | O texto lista o que o produto tem | Agrupe por uso e escreva o ganho de cada grupo. |
| Abertura fraca | Começa pela empresa ou por contexto amplo | Comece pela situação do leitor ou pelo resultado. |
| CTA escondido | Só aparece no fim | Repita após a primeira prova e ao final. |
| Promessa genérica | "Melhore seus resultados" | Troque pelo resultado medido ou pelo mecanismo. |
| Público misturado | Fala com dono e com funcionário ao mesmo tempo | Escolha a persona do brief; a outra recebe outra peça. |

## Template de relatório de edição

```markdown
---
id: {{id da peça}}
skill: inboundfy-copy-edicao
modo: {{leve | completo | atualizacao}}
estado: revisao
arquivo: {{caminho}}
persona_principal: {{persona-xx}}
alcance: {{peça | canal | projeto}}
fontes:
  - {{caminho}}
anti_slop:
  A0: {{caminho do registro}}
  A5: {{caminho do registro}}
proxima_skill: {{validadora do canal}}
---

# Relatório de edição: {{título da peça}}

## Diagnóstico

{{Uma a três frases: o que impedia o texto de cumprir o objetivo.}}

## Corrigido

| Local | Antes | Depois | Passagem |
| --- | --- | --- | --- |
| {{heading ou parágrafo}} | {{trecho}} | {{trecho}} | {{nº}} |

## Mantido

- {{trecho preservado e motivo}}

## Sugerido (depende de confirmação)

- {{sugestão que muda ângulo, oferta ou estrutura}}

## Pendente

- {{fato sem fonte ou "nenhuma"}}
```

## Exemplo completo: página de serviço de pet shop

Dados fictícios e ilustrativos. A Agenda Pet é uma empresa inventada que
vende um sistema de agendamento para pet shops por R$ 89 por mês.

### Entrada

```yaml
arquivo: canais/site/0207-2026-11-03-agendamento/README.md
objetivo_revisao: a página recebe visitas de anúncio e quase ninguém inicia o teste
modo: completo (escolhido pelo usuário entre completo, leve e atualização)
persona_principal: persona-01 (dona de pet shop de bairro com 2 tosadores)
preservar: o nome do recurso "Lembrete Patinha"
```

### Trecho original

> A Agenda Pet é uma solução inovadora e completa que revoluciona a gestão do
> seu pet shop. Com nossa plataforma robusta, você otimiza processos e
> maximiza resultados. Temos diversas funcionalidades pensadas para você.
> Saiba mais.

### Passagens aplicadas

1. **Intenção:** a ação esperada (teste grátis) não aparece. A tese também
   não: o leitor não sabe que problema o sistema resolve.
2. **Clareza:** "solução completa" e "gestão" não dizem o que o sistema faz.
3. **Voz:** `marca-voz.md` pede tom de conversa de balcão; o trecho soa como
   folheto de multinacional.
4. **Relevância:** "diversas funcionalidades" não responde "e daí?".
5. **Prova:** "revoluciona" não tem fonte. O acervo registra queda de 38% nas
   faltas em três clientes piloto, com data.
6. **Especificidade:** "otimiza processos" vira o processo real: agenda de
   banho e tosa, lembrete pelo WhatsApp.
7. **Segurança da ação:** "Saiba mais" não diz o que acontece. A oferta tem
   14 dias grátis sem cartão.
8. **Conformidade:** "revoluciona" e "inovadora" constam em `estruturas-proibidas.md`.

### Trecho editado

> Cliente que esquece o horário do banho deixa o tosador parado e a agenda
> furada. A Agenda Pet manda o Lembrete Patinha pelo WhatsApp um dia antes e
> duas horas antes do horário, com botão para confirmar ou remarcar. Nos três
> pet shops que testaram o sistema entre agosto e outubro de 2026, as faltas
> caíram 38%.
>
> [Testar grátis por 14 dias] Sem cartão. Você configura a agenda em 15 minutos.

### Interpretação

A edição manteve o recurso preservado e a mesma oferta. Mudou a abertura para
a situação da persona, trocou adjetivos por mecanismo e trouxe a prova
registrada. A falha provável seria inventar "dezenas de pet shops" para dar
volume: sem fonte, a frase seria reprovada.

## Checklist

- [ ] O modo de edição está registrado e foi confirmado.
- [ ] A0 rodou antes da primeira alteração.
- [ ] As oito passagens rodaram no modo completo, na ordem.
- [ ] Tese, ângulo e fatos confirmados continuam no texto.
- [ ] Trechos marcados para preservar não foram alterados.
- [ ] O mesmo vício foi procurado e corrigido no arquivo inteiro.
- [ ] Sugestões que mudam ângulo ou oferta ficaram em `sugerido`.
- [ ] Preço, prazo e depoimento conferem com os arquivos de contexto.
- [ ] `inboundfy-copy-editor` e A5 rodaram sobre a versão final.
- [ ] O relatório separa corrigido, mantido, sugerido e pendente.

## Erros comuns

- **Editar o ângulo sem avisar.** O usuário pediu clareza e recebeu outra
  tese. Mudança de ângulo é reescrita e precisa de confirmação.
- **Cortar a prova para encurtar.** Remover o único número do texto deixa a
  página mais curta e menos convincente.
- **Trocar por sinônimo.** Substituir "otimizar" por "melhorar" mantém a
  frase vazia. Reescreva com o processo real.
- **Corrigir só o trecho apontado.** O mesmo adjetivo inflado aparece em
  quatro seções e só a primeira muda.
- **Aplicar sugestão silenciosamente.** Uma troca de CTA de "teste grátis"
  para "fale com vendas" muda a oferta e precisa de aprovação.
- **Uniformizar o ritmo.** Quebrar toda frase longa em duas curtas cria
  escadinha e apaga a voz do autor.
