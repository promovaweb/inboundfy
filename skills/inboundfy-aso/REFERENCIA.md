# Referência de ASO

Material de apoio de `inboundfy-aso`. O `SKILL.md` diz a ordem; este arquivo
diz como fazer cada passo, com modelos e um caso completo.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-aso**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Mapa de leitura

| Passo do fluxo | Arquivo | Para quê |
| --- | --- | --- |
| 3 | Este arquivo, seção de pontuação | Auditar a página e os concorrentes |
| 4 e 5 | [metadados das lojas](references/metadados-das-lojas.md) | Limites, campos indexados, pesquisa de termos e redação por loja |
| 6 | [ativos visuais, avaliações e testes](references/ativos-visuais-avaliacoes-e-testes.md) | Screenshots, ícone, vídeo, respostas a avaliações e testes nativos |

## Modos de trabalho

| Modo | Quando escolher | Entrega principal |
| --- | --- | --- |
| Auditoria | Ninguém revisou a página há mais de seis meses ou as instalações caíram | Pontuação por dimensão e lista de ações |
| Pacote de metadados | O app aparece pouco nas buscas da loja | Título, subtítulo, palavras-chave e descrições por loja |
| Ativos visuais | Muita visita e pouca instalação | Roteiro de screenshots, ícone e vídeo |
| Avaliações | Nota abaixo de 4,3 ou queda recente | Diagnóstico das avaliações e modelos de resposta |
| Teste | Existe uma hipótese clara sobre a página | Plano de teste nativo com métrica e duração |

## Pontuação da auditoria

Dê nota de 0 a 10 por dimensão e multiplique pelo peso.

| Dimensão | Peso | Nota 10 quando |
| --- | --- | --- |
| Título e subtítulo (Apple) ou título e descrição curta (Play) | 20% | Marca e termo principal cabem no limite e dizem o que o app faz |
| Palavras-chave e descrição | 15% | Termos da persona cobertos sem repetição; descrição da Play com termos naturais |
| Screenshots | 20% | Dois primeiros mostram benefício com legenda curta e tela real |
| Ícone | 10% | Legível em tamanho pequeno e distinto dos concorrentes na busca |
| Vídeo | 5% | Mostra o app em uso nos primeiros segundos, sem depender de som |
| Avaliações | 20% | Nota a partir de 4,5, avaliações recentes, respostas da empresa |
| Localização e atualização | 10% | pt-BR completo, preço em reais, versão recente com notas úteis |

| Total | Leitura |
| --- | --- |
| 80 a 100 | Página forte; teste variações finas |
| 60 a 79 | Ganho provável com metadados e screenshots |
| Abaixo de 60 | Revisão completa antes de investir em anúncios |

## Métricas de referência

Faixas de mercado variam muito por categoria e país. Use os números do
próprio app como base e estas faixas só como orientação.

| Métrica | Onde ver | Referência |
| --- | --- | --- |
| Conversão da página (visitas → instalações) | App Store Connect, Play Console | Entre 20% e 40% em boa parte das categorias; jogos e apps de marca conhecida passam disso |
| Conversão da busca (impressões → instalações) | App Store Connect | Entre 2% e 8% |
| Nota média | Página da loja | A partir de 4,5 é competitivo; abaixo de 4,0 a conversão cai de forma visível |
| Participação da busca nas instalações | Origem das instalações nas consoles | Acima de 50% indica boa descoberta orgânica |
| Taxa de resposta a avaliações negativas | Consoles | Responder a todas as de 1 e 2 estrelas em até 48 horas |
| Tempo de teste | Recurso nativo | Ao menos sete dias e volume suficiente para a console indicar resultado |

## Template de pacote ASO

```markdown
---
id: {{id}}
skill: inboundfy-aso
tipo: {{auditoria-aso | pacote-aso | teste-aso}}
estado: rascunho
entrada:
  - {{URL da loja ou acervo/<id>-<data>-<slug>/}}
personas:
  - {{persona-xx}}
fontes:
  - .inboundfy/context/produtos.md
  - {{documentação da loja consultada em AAAA-MM-DD}}
proxima_skill: {{skill seguinte}}
---

# ASO: {{nome do app}}

## Diagnóstico

| Dimensão | Nota | Achado | Ação |
| --- | --- | --- | --- |
| {{}} | {{0-10}} | {{}} | {{}} |

**Total ponderado:** {{n}}/100

## Termos da loja

| Termo | Loja | Relevância | Concorrência | Posição atual | Campo de destino |
| --- | --- | --- | --- | --- | --- |
| {{}} | {{Apple/Play}} | {{alta/média/baixa}} | {{}} | {{n ou fora}} | {{título, subtítulo, palavras-chave, descrição}} |

## App Store (pt-BR)

- **Nome ({{n}}/30):** {{}}
- **Subtítulo ({{n}}/30):** {{}}
- **Palavras-chave ({{n}}/100):** {{termo,termo,termo}}
- **Texto promocional ({{n}}/170):** {{}}
- **Descrição:** {{primeiras três linhas com o benefício; restante em blocos}}

## Google Play (pt-BR)

- **Título ({{n}}/30):** {{}}
- **Descrição curta ({{n}}/80):** {{}}
- **Descrição completa ({{n}}/4000):** {{}}

## Funções citadas e fonte

| Função | Linha em produtos.md | Situação |
| --- | --- | --- |
| {{}} | {{}} | {{confirmada ou pendente}} |

## Screenshots

| Ordem | Tela | Legenda | Benefício |
| --- | --- | --- | --- |
| 1 | {{}} | {{até 6 palavras}} | {{}} |

## Teste planejado

- **Hipótese:** {{se mudarmos X, a conversão da página sobe porque Y}}
- **Recurso:** {{Product Page Optimization ou experimento da Play}}
- **Variações:** {{}}
- **Métrica:** {{conversão da página}}
- **Duração mínima:** {{dias}}

## Pendências

- {{pergunta ou "nenhuma"}}

## Próxima ação

{{verbo + objeto + caminho}}
```

## Exemplo completo: Feira na Porta

Empresa fictícia, usada só para ilustrar. Não vira contexto de projeto.

**Contexto.** A Feira na Porta é um app de Campinas que entrega frutas,
verduras e legumes de produtores da região. Pedido mínimo de R$ 50,
pagamento por Pix ou cartão dentro do app, entrega em até 24 horas em
Campinas, Valinhos e Sumaré, suporte por WhatsApp. A persona principal
(`persona-01`, Marina) trabalha em casa, tem dois filhos e compra
hortifruti uma vez por semana.

**Dados de outubro de 2026 (fictícios).** App Store: 18 mil impressões, 3.100
visitas à página, 520 instalações (conversão da página de 16,8%). Google
Play: 2.400 visitas, 610 instalações (25,4%). Nota 4,1 na Apple e 4,4 na Play.

**Auditoria (App Store).**

| Dimensão | Nota | Achado |
| --- | --- | --- |
| Título e subtítulo | 4 | Nome "Feira na Porta" e subtítulo "O app da sua feira", sem termo de busca |
| Palavras-chave | 5 | Campo repete "feira" e "porta", já no nome; faltam "hortifruti", "orgânicos", "delivery" |
| Screenshots | 4 | Primeiro screenshot é a tela de login |
| Ícone | 7 | Legível; cor parecida com dois concorrentes |
| Vídeo | 0 | Não tem |
| Avaliações | 5 | 4,1; seis avaliações de 1 estrela sobre atraso sem resposta |
| Localização | 8 | pt-BR completo; notas de versão genéricas ("melhorias") |

Total ponderado: 47/100. Revisão completa antes de anúncios.

**Três abordagens apresentadas.**

1. **Recomendada.** Posicionar como "hortifruti de produtor local entregue em
   24 horas". Usa o diferencial confirmado (produtores da região e prazo) e
   termos com busca real.
2. Posicionar como "feira orgânica". Termo com mais busca, mas só 30% do
   catálogo é orgânico certificado segundo `produtos.md`. Promessa parcial.
3. Posicionar por preço ("mais barato que o mercado"). Sem comparação de
   preço registrada; sairia como afirmação sem fonte.

A equipe escolhe a abordagem 1.

**Pacote App Store (pt-BR).**

- **Nome (26/30):** Feira na Porta: Hortifruti
- **Subtítulo (28/30):** Frutas e verduras em até 24h
- **Palavras-chave (99/100):**
  `delivery,orgânicos,legumes,produtor,local,campinas,sacolão,cesta,mercado,compras,pix,horta,quitanda`
  Ficaram fora "feira", "porta", "hortifruti", "frutas" e "verduras", que
  já estão no nome e no subtítulo.
- **Texto promocional (86/170):** "Pedido até as 20h chega no dia seguinte
  em Campinas, Valinhos e Sumaré. Pague com Pix."

**Pacote Google Play (pt-BR).**

- **Título (26/30):** Feira na Porta: Hortifruti
- **Descrição curta (72/80):** Frutas, verduras e legumes de produtores de
  Campinas na sua casa em 24h.
- **Descrição completa:** abre com o benefício e a região, segue com
  "Como funciona" em quatro passos, "Pagamento por Pix ou cartão", "Onde
  entregamos" e "Atendimento pelo WhatsApp". Termos "delivery de
  hortifruti", "orgânicos" (com a ressalva de seleção parcial) e "produtor
  local" aparecem de forma natural, uma ou duas vezes cada.

**Funções conferidas.** Pix no app, entrega em 24 horas nas três cidades,
pedido mínimo de R$ 50 e WhatsApp constam de `produtos.md`. "Assinatura de
cesta semanal" aparece no roteiro do produto, sem data. Saiu do texto e
virou pendência.

**Screenshots (ordem nova).** 1: cesta montada com legenda "Do produtor
para sua mesa em 24h". 2: tela de catálogo com legenda "Escolha por
unidade ou quilo". 3: pagamento com legenda "Pague com Pix em segundos". 4:
acompanhamento do pedido. 5: produtores parceiros com foto e cidade.

**Avaliações.** Resposta modelo para atraso: reconhece o atraso, informa o
prazo vigente, oferece contato pelo WhatsApp oficial e não pede dados
pessoais na resposta pública (LGPD). Pedido de avaliação dentro do app só
depois da terceira entrega concluída, pelo recurso nativo de cada loja.

**Teste planejado.** Product Page Optimization na Apple: screenshots atuais
contra a ordem nova. Hipótese: mostrar a cesta e o prazo no primeiro
screenshot sobe a conversão da página de 16,8% para mais de 22%. Duração
mínima de 14 dias.

**Pendências.** Confirmar se a assinatura de cesta será lançada antes da
próxima versão; confirmar os limites de caracteres na documentação vigente
das lojas antes de publicar.

## Checklist

- [ ] O modo de trabalho foi escolhido e registrado.
- [ ] A página foi pontuada nas sete dimensões, com total ponderado.
- [ ] Até três concorrentes foram comparados nas mesmas dimensões.
- [ ] Os limites de cada campo foram conferidos na documentação vigente, com
  data.
- [ ] Cada campo tem contagem de caracteres anotada.
- [ ] Nenhuma palavra se repete entre nome, subtítulo e palavras-chave da
  Apple.
- [ ] O campo de palavras-chave usa vírgula sem espaço.
- [ ] Toda função citada consta de `produtos.md`.
- [ ] Os dois primeiros screenshots mostram o benefício principal.
- [ ] Respostas a avaliações não pedem dado pessoal em público.
- [ ] Três abordagens foram apresentadas e a escolha foi registrada.
- [ ] O teste tem hipótese, métrica e duração mínima.

## Erros comuns

- **Copiar a descrição da Play para a Apple como estratégia de busca.** A
  Apple não indexa a descrição para busca; o trabalho de termos vai para
  nome, subtítulo e campo de palavras-chave.
- **Repetir palavras entre campos da Apple.** Termo repetido não ganha peso
  e desperdiça caracteres.
- **Encher a descrição da Play de palavras-chave.** A loja trata repetição
  excessiva como manipulação e pode rejeitar a versão.
- **Usar nome de concorrente no título ou nas palavras-chave.** Viola as
  diretrizes das duas lojas.
- **Primeiro screenshot com tela de login ou splash.** É a imagem mais vista
  na busca e não mostra benefício.
- **Prometer função do roteiro.** Função não lançada gera avaliação negativa
  e pode levar à rejeição da versão.
- **Ignorar avaliações de 1 estrela.** Sem resposta, quem visita a página lê
  só a reclamação.
- **Notas de versão genéricas.** "Correções e melhorias" desperdiça um campo
  que mostra cuidado com o app.
- **Traduzir em vez de localizar.** Preço em dólar, termos de outro país e
  telas em inglês derrubam a conversão no Brasil.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona,
canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
Para ASO, os campos próprios são: loja, campo, contagem de caracteres,
função citada com fonte e métrica do teste.
