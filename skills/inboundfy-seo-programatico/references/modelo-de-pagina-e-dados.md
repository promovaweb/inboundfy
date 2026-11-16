# Modelo de página e dados

Leia nos passos 4, 6 e 7 do fluxo de `inboundfy-seo-programatico`.

## Especificação da base

Cada linha da base é uma página possível. Cada coluna alimenta um bloco.

```markdown
| Campo | Tipo | Exemplo | Fonte | Atualização | Responsável | Obrigatório |
| --- | --- | --- | --- | --- | --- | --- |
| slug | texto | recife | gerado do nome | na criação | sistema | sim |
| nome_exibicao | texto | Recife | IBGE | na criação | sistema | sim |
| {{campo de dado único}} | {{}} | {{}} | {{}} | {{}} | {{}} | sim |
| {{campo opcional}} | {{}} | {{}} | {{}} | {{}} | {{}} | não |
| atualizado_em | data | 2026-11-10 | sistema | a cada edição | sistema | sim |
```

Regras:

- Todo campo que aparece como fato na página tem fonte e responsável.
- Campos com dado pessoal (nome de cliente, foto, depoimento) só entram com
  consentimento registrado, conforme a LGPD.
- A coluna `atualizado_em` aparece na página quando o dado muda com o tempo.

## Tipos de bloco

| Tipo | Definição | Exemplo |
| --- | --- | --- |
| Fixo | Igual em todas as páginas | Como o produto funciona, CTA |
| Variável | Muda com os campos da linha | Passo a passo da prefeitura, preço da cidade |
| Condicional | Só aparece quando o campo existe ou passa de um limite | Depoimento local, número de clientes acima de 10 |
| Relacional | Vem de outras linhas da base | Cidades próximas, integrações da mesma categoria |

Distribuição saudável: blocos variáveis, condicionais e relacionais somam
mais da metade do corpo. Se o fixo domina, as páginas parecem iguais.

## Estrutura base do modelo

1. **H1 com a variável** e a intenção ("Integração da Agenda Viva com o
   Google Agenda").
2. **Resposta direta** em duas ou três frases, já com dado da linha.
3. **Bloco principal variável:** o que muda nesta combinação (passos, preço,
   recursos, limites, horários).
4. **Tabela ou lista de dados** da linha, com fonte e data.
5. **Como a empresa resolve** neste caso, com CTA.
6. **Prova condicional:** depoimento, caso ou número da combinação.
7. **Perguntas frequentes da combinação**, quando houver perguntas reais.
8. **Relacionadas:** irmãs próximas e hub.

## Fórmulas de metadados

| Elemento | Fórmula | Cuidado |
| --- | --- | --- |
| Title | {{intenção}} {{variável}}: {{diferencial}} | Até cerca de 60 caracteres com a variável mais longa da base |
| Description | {{resposta curta com dado}} + {{ação}} | Use um campo variável, não só o nome |
| H1 | {{assunto}} {{variável}} | Pode diferir do title |
| URL | /{{prefixo}}/{{slug}}/ | Prefixo fixo, slug da base |

Teste as fórmulas com as cinco variáveis de nome mais longo e mais curto da
base antes de aprovar.

## Textos fixos

- Escreva como peça única, com voz, dicionário e proibições do projeto.
- Evite frases que só fazem sentido com a variável encaixada à força
  ("A melhor solução de {{segmento}} para {{segmento}}").
- Revise concordância de gênero e número com variáveis (em São Paulo, no Rio
  de Janeiro, na Bahia). Guarde a preposição na base quando necessário.

## Regra de não publicação

Escreva como lista de condições e consequências:

```markdown
| Condição | Consequência |
| --- | --- |
| Falta qualquer campo obrigatório | Não gerar a página |
| Dado com mais de {{n}} meses sem revisão | Gerar com noindex até revisão |
| Corpo com mais de 60% de semelhança com uma irmã | Revisão manual antes de publicar |
| Combinação sem atendimento ou sem integração real | Não gerar |
| Demanda zero e sem impressão após 6 meses | Fundir em página regional com 301 |
```

## Erros desta etapa

- Começar pelo texto do modelo antes de ter a base preenchida.
- Usar IA para gerar o "dado" de cada linha sem fonte.
- Esconder blocos condicionais vazios com texto genérico em vez de remover o
  bloco.
- Não guardar a data de atualização e publicar valor vencido.
