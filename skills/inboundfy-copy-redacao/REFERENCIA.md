# Referência de redação de copy

Este arquivo apoia os passos 2 a 9 do fluxo de `SKILL.md`. Ele traz os
princípios de redação, a tabela de escolha de estrutura, o template do
artefato, um exemplo completo e o checklist de entrega.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-copy-redacao**, do grupo
**copy**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Materiais de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/estrutura-de-pagina.md](references/estrutura-de-pagina.md) | Passo 4 | Seções por tipo de página, topo da página, ordem por nível de consciência. |
| [references/titulos-e-ctas.md](references/titulos-e-ctas.md) | Passo 5 | Fórmulas de título, regras de CTA e microcopy de confiança. |

## Guia específico do grupo

A redação transforma material confirmado em texto que provoca uma ação. Ela
trabalha com cinco campos: **objetivo** (ação única), **mensagem** (tese e
ângulo escolhidos), **persona** (quem lê e em qual nível de consciência),
**canal** (forma e limite da plataforma) e **revisão** (marcos A4 e A5,
`inboundfy-copy-editor` e validadora). Registre os cinco no frontmatter.

## Princípios de redação

1. **Clareza antes de criatividade.** Se o leitor precisa decifrar o título,
   a página perdeu o topo. Um trocadilho só entra quando a frase continua
   compreensível para quem nunca ouviu falar do produto.
2. **Benefício amarrado à característica.** "Emite nota fiscal em 40
   segundos pelo celular" é característica com benefício implícito; "Mais
   tempo para o que importa" é slogan sem objeto. Use FAB: cada característica
   chega ao ganho antes do fim do parágrafo.
3. **Específico vence genérico.** Troque "economize tempo" por "feche o mês
   sem abrir planilha". Troque "milhares de clientes" pelo número registrado.
4. **Palavras do cliente.** O vocabulário vem de entrevistas, avaliações,
   tickets e conversas registradas no acervo. Se a persona diz "boleto do
   DAS", a página não diz "obrigação tributária mensal".
5. **Uma ideia por seção.** Cada seção responde a uma pergunta do leitor e
   termina apontando para a próxima.
6. **Afirmação com fonte.** Toda promessa, número e comparação aponta para o
   contexto ou o acervo. Sem fonte, a frase sai ou vira pendência.

## Tabela de escolha da estrutura

| Peça | Nível de consciência típico | Estrutura sugerida | Observação |
| --- | --- | --- | --- |
| Anúncio ou post de conversão curto | Sabe do problema | AIDA | Um CTA só. |
| Email para lead frio da base | Sabe do problema, sem urgência | PAS | Agitação com custo verificável. |
| Landing page de oferta paga | Conhece soluções | PASTOR | Pule o testemunho se não houver prova real. |
| Página de produto ou funcionalidade | Conhece o produto | FAB por seção | Característica, uso, ganho. |
| Home institucional | Misto | Seções por pergunta (ver estrutura de página) | Rotas claras para cada perfil. |
| Página de preços | Pronto para comprar | Comparação + perguntas frequentes | Condição e limite visíveis. |
| Artigo de blog informativo | Não sabe ou sabe do problema | Sem estrutura persuasiva | Segue `ESCRITA.md` direto. |

## Métricas de acompanhamento

A redação não mede resultado sozinha, mas a peça precisa nascer com o que
será observado. Registre no frontmatter a métrica principal:

| Peça | Métrica principal | Leitura |
| --- | --- | --- |
| Landing page | Taxa de conversão da ação principal | Compare com a própria média histórica. Referências públicas de mercado costumam ficar entre 2% e 7%, variando muito por setor e origem do tráfego. |
| Email | Taxa de clique e respostas | Abertura perdeu confiabilidade desde a proteção de privacidade dos clientes de email; prefira clique. |
| Anúncio | CTR e custo por lead | Ligue a promessa do anúncio ao título da página de destino. |
| Página de preços | Cliques no plano e início de checkout | Observe qual plano recebe atenção e se o Pix ou o cartão abandona mais. |

Detalhes de rastreamento ficam com `inboundfy-metricas` e
`inboundfy-rastreamento-conversao`.

## Template de peça

```markdown
---
id: {{id}}
skill: inboundfy-copy-redacao
tipo: {{landing-page | home | pagina-produto | pagina-precos | email | post | roteiro}}
estado: rascunho
canal: {{canal}}
objetivo: {{ação única}}
persona_principal: {{persona-xx}}
nivel_consciencia: {{inconsciente | problema | solucao | produto | pronto}}
origem_trafego: {{busca | anuncio | email | indicacao | social}}
estrutura: {{AIDA | PAS | PASTOR | FAB | secoes-por-pergunta}}
angulo: {{ângulo escolhido pelo usuário}}
metrica_principal: {{métrica}}
entrada:
  - acervo/{{id}}-{{data}}-{{slug}}/base-editorial.md
fontes:
  - .inboundfy/context/ofertas.md
  - .inboundfy/context/depoimentos.json
anti_slop:
  A4: {{caminho do registro ou "não se aplica"}}
  A5: {{caminho do registro}}
proxima_skill: {{validadora do canal}}
---

# {{Título escolhido}}

## Seção 1: {{nome da seção}}

{{copy}}

> Anotação: {{pergunta do leitor respondida, prova usada, objeção tratada}}

## Seção 2: {{nome da seção}}

{{copy}}

> Anotação: {{...}}

## CTA

- Principal: {{texto do botão}}
- Microcopy ao lado do botão: {{condição, prazo, segurança}}

## Alternativas

- Título B: {{...}} (ângulo: {{...}})
- Título C: {{...}} (ângulo: {{...}})
- CTA B: {{...}}

## Pendências

- {{fato, prova ou aprovação que falta, ou "nenhuma"}}
```

## Exemplo completo: landing page de teste grátis

Dados fictícios e ilustrativos. A Rota Fiscal é uma empresa inventada que
vende um aplicativo de emissão de nota fiscal para MEI por R$ 39 por mês, com
14 dias grátis sem cartão.

### Entrada

```yaml
id: 0118
objetivo: iniciar teste grátis de 14 dias
canal: site
persona_principal: persona-02 (MEI prestador de serviço que emite notas pelo portal do governo)
nivel_consciencia: solucao
origem_trafego: anuncio de busca para "emitir nota fiscal MEI pelo celular"
objecao_principal: "já tentei um app e voltei para o portal porque deu erro na nota"
prova_disponivel: 3.200 MEIs ativos em outubro de 2026; depoimento de Carla, manicure em Curitiba, com consentimento registrado
fontes:
  - .inboundfy/context/ofertas.md
  - .inboundfy/context/depoimentos.json
  - acervo/0118-2026-11-10-app-nfse/base-editorial.md
```

### Ângulos apresentados ao usuário

1. **Recomendado: velocidade com segurança.** A nota sai em menos de um
   minuto e o app avisa antes de enviar se algum campo vai dar erro. Responde
   direto à objeção principal.
2. **Organização do mês.** Todas as notas e o lembrete do DAS num lugar só.
   Bom para quem já emite sem dificuldade, mas perde a ligação com o anúncio.
3. **Fim do portal.** Comparação com o portal do governo. Forte, mas depende
   de afirmações sobre um serviço público que precisam de fonte atualizada.

O usuário escolheu o ângulo 1.

### Peça entregue (trecho do topo e da prova)

```markdown
# Emita sua nota fiscal de MEI pelo celular em menos de um minuto

O Rota Fiscal confere CNPJ do cliente, código do serviço e valor antes de
enviar. Se algo estiver errado, você corrige ali mesmo, antes de a nota
chegar à prefeitura.

[Testar grátis por 14 dias]
Sem cartão de crédito. Cancele pelo app ou pelo WhatsApp.

> Anotação: o título repete a busca do anúncio. O subtítulo trata a objeção
> "deu erro na nota" com o mecanismo (conferência antes do envio).

## Quem já trocou o portal pelo app

"Eu perdia a tarde de sexta emitindo nota das clientes do salão. Agora faço
no intervalo entre um atendimento e outro." Carla M., manicure em Curitiba.

3.200 MEIs emitem notas pelo Rota Fiscal (dado de outubro de 2026).

> Anotação: depoimento com consentimento em depoimentos.json; número com data.
```

### Microcopy e LGPD

Abaixo do formulário de cadastro: "Usamos seu email e WhatsApp só para enviar
o acesso e avisos da sua conta. Você pode pedir a exclusão dos dados a
qualquer momento." A frase cumpre a transparência exigida pela LGPD sem
juridiquês. O texto legal completo fica no link da política de privacidade.

### Interpretação

O topo cumpre a promessa do anúncio, a objeção aparece no primeiro parágrafo
e o CTA tem duas informações que reduzem receio (sem cartão, cancelamento
simples). A falha provável seria escrever "a forma mais fácil de emitir
notas": superlativo sem fonte, reprovado pela validadora.

## Checklist

- [ ] A peça tem uma ação principal e o CTA a nomeia com verbo.
- [ ] O título conversa com a origem do tráfego registrada.
- [ ] O nível de consciência está registrado e a ordem das seções combina com ele.
- [ ] A objeção principal é tratada antes do primeiro CTA.
- [ ] Cada benefício está ligado a uma característica ou mecanismo.
- [ ] Todo número, depoimento e selo tem fonte no frontmatter.
- [ ] Preço e condição batem com `.inboundfy/context/ofertas.md`.
- [ ] Coleta de dados pessoais tem microcopy de uso e link de privacidade.
- [ ] Há duas alternativas de título e uma de CTA registradas.
- [ ] `inboundfy-copy-editor` rodou e o registro A5 existe antes do handoff.

## Erros comuns

- **Abrir pela empresa.** "Somos líderes em..." no topo. O leitor chegou com
  um problema; a primeira frase fala dele.
- **Promessa do anúncio esquecida.** O anúncio fala de preço e a página abre
  com funcionalidade. A taxa de rejeição sobe porque o leitor acha que errou
  de página.
- **CTA genérico.** "Saiba mais" ou "Enviar" não dizem o que acontece depois.
  Prefira "Pedir orçamento pelo WhatsApp" ou "Começar teste grátis".
- **Lista de funcionalidades sem uso.** Doze ícones com duas palavras cada.
  Escolha as três que respondem às objeções e explique o uso de cada uma.
- **Prova genérica.** Depoimento sem nome, cargo ou contexto. Sem
  consentimento registrado em `depoimentos.json`, o depoimento não entra.
- **Mesmo texto em todos os canais.** Copiar a landing page para o email.
  Cada canal recebe ângulo, ordem e tamanho próprios.
