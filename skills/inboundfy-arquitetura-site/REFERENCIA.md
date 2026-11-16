# Referência de Arquitetura de site

Material de apoio de `inboundfy-arquitetura-site`. O `SKILL.md` diz a ordem;
este arquivo diz como montar cada parte do mapa, com modelos e um caso
completo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-arquitetura-site**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Mapa de leitura

| Passo do fluxo | Arquivo | Para quê |
| --- | --- | --- |
| 3 e 4 | [hierarquia e URLs](references/hierarquia-e-urls.md) | Classificar páginas atuais, definir níveis, hubs e padrões de URL por tipo de site. |
| 6 e 7 | [navegação e links internos](references/navegacao-e-links-internos.md) | Menu, rodapé, breadcrumbs, navegação contextual e plano de links. |
| 8 | [migração e redirecionamentos](references/migracao-e-redirecionamentos.md) | Tabela 301, troca de plataforma ou domínio e conferência pós-migração. |

## Tipos de trabalho

| Tipo | Quando escolher | Entrega principal |
| --- | --- | --- |
| Site novo | Projeto sem site ou com site de uma página | Árvore completa, URLs e ordem de lançamento |
| Reorganização | Menu confuso, categorias demais, páginas órfãs | Classificação das páginas atuais e nova árvore |
| Nova seção | Novo produto, nova cidade, blog ou central de ajuda | Hub da seção, URLs e links com o resto do site |
| Migração | Troca de domínio, plataforma ou padrão de URL | Tabela de redirecionamentos e plano de conferência |

## Profundidade: plana ou funda

| Estrutura | Quando funciona | Consequência quando exagera |
| --- | --- | --- |
| Plana (tudo a um ou dois cliques) | Sites com até cerca de 50 páginas, serviço local, SaaS pequeno | Menu lotado e sem agrupamento |
| Em hubs (Home, hub, página) | Sites com várias ofertas, cidades ou temas | Hub vazio que só lista links |
| Funda (quatro níveis ou mais) | Lojas grandes e catálogos com filtros | Páginas importantes longe da Home e pouco rastreadas |

Regra prática: páginas comerciais a no máximo três cliques da Home. Hub só
existe quando tem texto próprio que ajuda a escolher entre as páginas filhas.

## Métricas de referência

| Métrica | Referência | Leitura |
| --- | --- | --- |
| Itens no menu principal | Entre 5 e 7 | Acima disso a pessoa deixa de ler o menu |
| Profundidade de páginas comerciais | Até 3 cliques | Mais fundo, o rastreador visita menos e a pessoa desiste |
| Páginas órfãs | Zero | Página sem link de entrada demora a ser descoberta |
| Links de entrada de página comercial | Ao menos 3 contextuais | Sinaliza importância ao buscador |
| Páginas com tráfego zero em 12 meses | Revisar se passam de 30% do site | Indica conteúdo sem função ou duplicado |
| Cadeia de redirecionamento | Um salto | Dois ou mais saltos perdem sinal e deixam a página lenta |

Prefira os dados do projeto (Search Console, analytics, rastreamento) a
qualquer faixa geral.

## Template de mapa de arquitetura

````markdown
---
id: {{id}}
skill: inboundfy-arquitetura-site
tipo: arquitetura-site
estado: rascunho
entrada:
  - {{acervo/<id>-<data>-<slug>/ ou sitemap atual}}
personas:
  - {{persona-xx}}
fontes:
  - {{caminho ou URL com data de consulta}}
proxima_skill: {{inboundfy-seo | inboundfy-dados-estruturados | outra}}
---

# Arquitetura de site: {{projeto ou seção}}

## Objetivo e tipo de site

- **Tipo de trabalho:** {{site novo | reorganização | nova seção | migração}}
- **Tipo de site:** {{serviço local | SaaS | loja | conteúdo | misto}}
- **Tarefas principais da persona:** {{1, 2, 3}}
- **Ações de negócio:** {{tarefa → ação → URL de links.md}}

## Classificação das páginas atuais

| URL atual | Tráfego 12 meses | Função | Ação | Destino |
| --- | --- | --- | --- | --- |
| {{/url/}} | {{n}} | {{}} | {{manter, fundir, reescrever, remover}} | {{URL ou "410"}} |

## Árvore de páginas

```text
Home (/)
├── {{Hub}} (/{{hub}}/)
│   ├── {{Página}} (/{{hub}}/{{pagina}}/)
│   └── {{Página}} (/{{hub}}/{{pagina}}/)
├── {{Página comercial}} (/{{slug}}/)
└── Blog (/blog/)
```

## Mapa visual

```mermaid
graph TD
  H[Home] --> A[{{Hub}}]
  A --> A1[{{Página}}]
  H --> B[{{Página comercial}}]
```

## Tabela de URLs

| Página | URL | Tipo | Nível | Intenção | Pai | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| {{}} | /{{}}/ | {{hub, serviço, artigo}} | {{1, 2, 3}} | {{}} | {{}} | {{existe, criar}} |

## Navegação

- **Menu principal:** {{itens na ordem}}
- **Botão de ação no cabeçalho:** {{texto}} → {{URL}}
- **Rodapé:** {{grupos e itens}}
- **Breadcrumb:** {{padrão, ex.: Home > Hub > Página}}

## Links internos

| De | Para | Âncora | Tipo |
| --- | --- | --- | --- |
| {{}} | {{}} | {{}} | {{contextual, hub, relacionado}} |

## Redirecionamentos

| Origem | Destino | Código | Motivo |
| --- | --- | --- | --- |
| {{/antiga/}} | {{/nova/}} | 301 | {{}} |

## Ordem de implementação

1. {{etapa}}: {{páginas}}, {{responsável}}

## Pendências

- {{pergunta ou "nenhuma"}}

## Próxima ação

{{verbo + objeto + caminho}}
````

## Exemplo completo: Lavô Lavanderias

Empresa fictícia, usada só para ilustrar. Não vira contexto de projeto.

**Contexto.** A Lavô tem quatro lavanderias self-service em Recife (Boa
Viagem, Casa Forte, Graças e Pina) e um serviço de coleta e entrega pedido
pelo WhatsApp. O ciclo de lavagem custa R$ 18, a secagem R$ 16 e o plano
mensal de coleta sai a R$ 189, pago por Pix. O site atual, num construtor de
páginas, tem 38 URLs: Home, uma página por unidade com endereço repetido,
uma página "Serviços" com tudo junto, 22 posts de blog e nove páginas de
promoções antigas. A persona principal (`persona-01`, Caio) mora num
apartamento sem área de serviço e quer resolver a roupa da semana sem perder
o sábado.

**Pedido.** "O site não aparece quando alguém busca lavanderia no bairro e
ninguém acha o plano de coleta."

**Diagnóstico registrado.**

1. Tipo: serviço local com várias unidades e um serviço por assinatura.
2. Tarefas: achar a unidade mais perto e o horário; saber o preço; pedir
   coleta.
3. Ações: rota no mapa, pedido pelo WhatsApp, assinatura do plano.
4. Páginas com tráfego: as quatro de unidade e o post "como lavar edredom"
   (1.900 visitas no ano).
5. Sem função: nove páginas de promoções vencidas, sem tráfego.
6. A plataforma permite URL própria e redirecionamento 301 por página.
7. Atendimento em quatro bairros, com coleta em toda a Zona Sul.

**Classificação (trecho).**

| URL atual | Tráfego 12 meses | Ação | Destino |
| --- | --- | --- | --- |
| /unidade-boa-viagem | 2.300 | reescrever | /unidades/boa-viagem/ |
| /servicos | 640 | dividir | /lavagem-self-service/ e /coleta-e-entrega/ |
| /promo-carnaval-2024 | 0 | remover | 410 |
| /blog/como-lavar-edredom | 1.900 | manter, linkar | sem mudança |

**Três estruturas apresentadas.**

1. **Recomendada.** Dois serviços na raiz (`/lavagem-self-service/` e
   `/coleta-e-entrega/`), hub `/unidades/` com uma página por bairro, página
   `/precos/` e blog. Cada unidade ganha horário, fotos, preço e link para o
   pedido de coleta.
2. Hub por bairro como entrada principal, com os serviços dentro de cada
   unidade. Funciona para busca local e duplica a explicação dos serviços
   quatro vezes.
3. Site de uma página com âncoras e as unidades como seções. Simples de
   manter e fraco para busca por bairro.

A equipe escolhe a estrutura 1.

**Árvore resultante.**

```text
Home (/)
├── Lavagem self-service (/lavagem-self-service/)
├── Coleta e entrega (/coleta-e-entrega/)
├── Preços (/precos/)
├── Unidades (/unidades/)
│   ├── Boa Viagem (/unidades/boa-viagem/)
│   ├── Casa Forte (/unidades/casa-forte/)
│   ├── Graças (/unidades/gracas/)
│   └── Pina (/unidades/pina/)
├── Blog (/blog/)
└── Privacidade (/privacidade/)
```

**Navegação.** Menu com cinco itens: Self-service, Coleta e entrega, Preços,
Unidades, Blog. Botão "Pedir coleta no WhatsApp" fixo no cabeçalho. Rodapé
com as quatro unidades, horários, CNPJ e link para a política de
privacidade, porque o pedido de coleta coleta nome, endereço e telefone e
precisa informar o uso desses dados pela LGPD. Breadcrumb em unidades e
blog: Home > Unidades > Boa Viagem.

**Links internos (trecho).** Cada unidade → `/coleta-e-entrega/` com âncora
"coleta e entrega em {{bairro}}". O post do edredom → `/lavagem-self-service/`
com âncora "máquinas para edredom e cobertor". `/precos/` → as duas páginas
de serviço.

**Redirecionamentos.** Quatro URLs de unidade com 301 para o novo padrão;
`/servicos` com 301 para `/lavagem-self-service/`, porque a maior parte do
tráfego buscava lavagem; nove promoções com 410.

**Ordem de implementação.** 1) Páginas de serviço e preços. 2) Hub e
unidades com redirecionamentos. 3) Remoção das promoções. 4) Links dos posts
antigos.

**Pendências.** Confirmar se Pina mantém horário 24 horas; confirmar o raio
de coleta em `ofertas.md`.

**Handoff.** `inboundfy-seo` para briefing das páginas de unidade e de coleta;
`inboundfy-dados-estruturados` para LocalBusiness por unidade e
BreadcrumbList; `inboundfy-auditoria-seo` duas semanas depois da publicação.

## Checklist

- [ ] O tipo de trabalho e o tipo de site estão registrados.
- [ ] As sete perguntas de diagnóstico têm resposta ou pendência.
- [ ] Toda página atual tem ação: manter, fundir, reescrever, criar ou remover.
- [ ] Três estruturas foram apresentadas e a escolha foi registrada.
- [ ] A árvore e o Mermaid mostram a mesma hierarquia.
- [ ] Toda página tem função, intenção e página pai.
- [ ] Páginas comerciais ficam a até três cliques da Home.
- [ ] O menu principal tem entre cinco e sete itens.
- [ ] Breadcrumb e URL seguem a mesma hierarquia.
- [ ] Nenhuma página planejada fica órfã.
- [ ] Toda URL alterada tem 301 para destino equivalente, sem cadeia.
- [ ] Remoções sem destino equivalente recebem 410, com motivo.
- [ ] A ordem de implementação está escrita com responsável.

## Erros comuns

- **Desenhar o menu pelo organograma.** "Quem somos", "Soluções" e
  "Institucional" refletem a empresa. O menu segue as tarefas da persona.
- **Hub que só lista links.** Uma página "Serviços" com cinco cartões e
  nenhum texto não ajuda a escolher nem ranqueia. Dê ao hub explicação,
  comparação e prova.
- **Uma página por unidade com texto copiado.** Quatro páginas iguais com o
  endereço trocado parecem duplicadas. Cada unidade precisa de horário,
  fotos, equipe, estacionamento ou outro dado próprio.
- **Trocar URL sem tabela de redirecionamento.** O tráfego das páginas
  antigas cai para zero e leva semanas para voltar.
- **Redirecionar tudo para a Home.** O buscador trata como página removida.
  Redirecione para o equivalente ou responda 410.
- **Categorias demais no blog.** Vinte categorias com dois posts cada geram
  páginas finas. Agrupe em quatro a seis temas.
- **URL com data ou ID de sistema.** `/2023/05/post-123` envelhece e
  esconde o assunto. Use slug descritivo.
- **Esquecer a página de privacidade quando há formulário.** Pedido de
  coleta, orçamento ou cadastro coleta dados pessoais e precisa da política
  acessível pela LGPD.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
Para arquitetura de site, os campos próprios são: tipo de site, árvore de
páginas, padrão de URL, navegação e redirecionamentos.
