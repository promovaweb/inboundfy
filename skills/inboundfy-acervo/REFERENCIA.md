# Referência do acervo

`inboundfy-acervo` é a skill mestre. Ela conduz o material desde a entrada
até a peça final e chama as skills específicas na ordem descrita abaixo.

## Ordem canônica

| Fase | Skill principal | Artefato ou ação |
| --- | --- | --- |
| 0 | `inboundfy-setup` | Configuração global, voz, personas, proibições, dicionário, canais e pipeline. |
| 1 | `inboundfy-acervo` | ID, `bruto.md`, README, índices e arquivos de trabalho. |
| 2 | `inboundfy-processar-acervo` | `processado.md` limpo pelas regras do projeto. |
| 3 | `inboundfy-extrair-faq` | `faq.md` com perguntas, respostas e lacunas. |
| 4 | `inboundfy-pesquisa-acervo` | `pesquisa.md` com pesquisa web e fontes locais. |
| 5 | `inboundfy-base-editorial` | `base-editorial.md` com metadados e relações. |
| 6 | `inboundfy-estrategia-acervo` | `estrategia.md` com usos por canal. |
| 7 | `inboundfy-planejamento` | Brief, direção editorial, data e prioridade. |
| 8 | `inboundfy-producao` | Pasta final e texto do canal. |
| 9 | Especialista do canal | Copy adaptada a formato, persona e objetivo. |
| 10 | Anti-slop e validadora | Revisão de fonte, voz, dicionário, proibições e canal. |
| 11 | `inboundfy-pipeline` | Estado, URL, data e publicação. |
| 12 | `inboundfy-catalogo` | Índices de acervo, peças e calendário. |

As fases 2 a 6 podem ser retomadas individualmente. Quando a entrada for
material novo, a skill mestre deve conduzir todas elas antes de propor uma
peça. As fases 7 a 12 só seguem após o usuário escolher uso, canal, persona,
direção e data quando esses dados forem necessários.

## Contrato dos arquivos

| Arquivo | Regra |
| --- | --- |
| `bruto.md` | Cópia preservada do material recebido; fonte única para reprocessamento. |
| `processado.md` | Texto limpo, sem afirmações novas e alinhado à configuração do projeto. |
| `faq.md` | Perguntas por parágrafo, entidade, fato, condição, exemplo e lacuna. |
| `pesquisa.md` | Fontes web e locais, datas, URLs, relações e pontos pendentes. |
| `base-editorial.md` | Núcleo, objetivo, atores, frases, fontes, personas e usos. |
| `estrategia.md` | Possibilidades por canal ativo, formato, ângulo, CTA e reaproveitamento. |
| `README.md` | Índice navegável, checklist da execução e links relativos. |

## Pausas obrigatórias

Pare e converse com o usuário quando faltar:

- configuração inicial ou persona completa;
- canal ativo para a peça;
- persona da peça;
- título ou direção editorial;
- confirmação de fato, oferta, preço, depoimento ou número;
- data de calendário ou autorização para substituir peça revisada.

Use três opções materialmente diferentes quando a direção estiver aberta. A
primeira é a recomendada; sempre permita resposta livre e registre o alcance.

## Relatório mínimo

```md
id_acervo:
caminho_acervo:
arquivos:
fontes_pesquisa:
lacunas:
possibilidades:
pecas:
personas:
calendario:
pipeline:
pendencias:
```
