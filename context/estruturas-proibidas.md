<!--
Preenchido e mantido por inboundfy-contexto-marca. Diferente de proibicoes.md
(vetos de negócio: termo, promessa, comparação específica do usuário), este
arquivo cataloga padrões de escrita que denunciam texto gerado por IA sem
revisão humana — válido para qualquer negócio, em qualquer canal. Use os
dois arquivos juntos: inboundfy-copy-editor aplica ambos na mesma auditoria de
parágrafo, e uma violação aqui também reprova o texto (ver
ESCRITA.md).

Este arquivo já vem pré-preenchido com um catálogo genérico de padrões
universais. Edite, remova ou adicione itens conforme a voz da marca —
alguns termos "proibidos" abaixo podem ser aceitáveis em contexto técnico
específico; o julgamento editorial sempre vem antes da lista mecânica.
-->

# Estruturas Proibidas — Padrões de Escrita com Cara de IA

## Regra central

Nenhum item desta lista é proibido por si só em todo e qualquer contexto —
o padrão é proibido quando funciona como muleta, substituindo raciocínio,
objeto real ou consequência concreta. Antes de reprovar um trecho, confirme
que ele se encaixa na descrição do padrão, não apenas que contém uma palavra
da lista. `ESCRITA.md` define o padrão positivo (o que escrever); este
arquivo cataloga o padrão negativo (o que evitar) em detalhe operacional.

## 1. Aberturas proibidas

- "No mundo atual...", "no cenário atual...", "nos dias de hoje...", "cada
  vez mais...", "é inegável que...", "vivemos em uma época em que..." —
  abertura de contexto amplo sem cena, ator, dado ou decisão concreta.
  Reescreva começando pela situação real, pelo erro observado ou pelo dado
  verificável.
- "Você já parou para pensar...", "Já se perguntou...", "Imagine se..." —
  pergunta retórica de abertura genérica. Comece pela afirmação ou pelo
  fato, não pela pergunta que finge engajamento.
- "Se você é [perfil genérico] que [problema genérico], este [artigo/post/
  guia] é para você." — condicional de segunda pessoa usado como gancho
  universal. Comece pelo objeto técnico, pela rotina real ou pela
  consequência prática.
- "É fundamental destacar/ressaltar/salientar que..." — anúncio de
  importância sem conteúdo. Vá direto ao ponto que supostamente seria
  destacado.
- Definição de dicionário como abertura ("Segundo o dicionário, X
  significa...") — abertura genérica emprestada de redação escolar.

## 2. Fechamentos proibidos

- "Em suma...", "Em resumo...", "Concluindo...", "Portanto, podemos
  concluir que..." seguido de resumo do que já foi dito, sem informação
  nova.
- "Esperamos que este conteúdo tenha ajudado", "Ficou claro que...",
  "Agora você já sabe..." — fechamento decorativo que não avança nenhuma
  ideia.
- Conclusão moralizante ou de palestra motivacional, com lição ampla
  desconectada do argumento desenvolvido no texto.
- Chamada para ação colada sem transição real, só porque o texto "precisa"
  terminar com CTA (ver `ESTRUTURAS-PERSUASIVAS.md` para CTA que nasce do
  argumento).
- "Não é sobre X, é sobre Y" como fórmula de fechamento repetida — válida
  ocasionalmente como recurso retórico, proibida como muleta usada em toda
  peça.

## 3. Palavras e expressões proibidas (vocabulário)

| Termo/família | Por que é problema |
| --- | --- |
| `revolucionário`, `disruptivo`, `inovador` (como adjetivo vazio) | Jargão de marketing sem conteúdo verificável. |
| `desbloqueie`, `potencialize`, `maximize seu potencial` | Fórmula de copy vazia, sem mecanismo. |
| `mergulhar fundo`, `vamos mergulhar`, `explorar esse universo` | Tradução literal de "dive into" — soa a texto traduzido por IA. |
| `landscape`, `ecossistema` (fora de sentido técnico real) | Metáfora emprestada sem necessidade. |
| `robusto`, `escalável`, `de ponta a ponta` usados como enchimento | Adjetivo vago que qualquer produto reivindicaria. |
| `é importante notar que`, `vale ressaltar que`, `cabe destacar que` | Anúncio de conteúdo sem conteúdo — vá direto à informação. |
| `sem dúvida`, `certamente`, `obviamente` | Reforço retórico sem evidência; se for óbvio, não precisa dizer. |
| `bússola`, `jornada` (fora do sentido literal de trajeto), `caminho` como metáfora vazia | Metáfora batida de conteúdo motivacional. |
| `nesse sentido`, `dessa forma`, `diante disso` em excesso | Conector de transição usado para encobrir falta de relação lógica real entre frases. |
| `de forma eficaz/eficiente` como enchimento | Advérbio vago; nomeie o mecanismo que torna algo eficaz. |
| `múltiplos`, `diversos`, `vários` como quantificador vago | Prefira número real ou exemplo específico. |
| `não é apenas X, é Y` (fórmula de contraste em excesso) | Contraste artificial repetido peça após peça vira tique de escrita de IA. |
| `100%`, `sempre`, `nunca`, `totalmente` sem base | Absoluto sem evidência (ver também `context/proibicoes.md`). |
| `em que` como cola sintática | Reescreva com sujeito e verbo diretos; use `quando` apenas para relação temporal real ou substitua por formulação específica da frase. |
| `risco`, `riscos` como categoria genérica de prudência | Nomeie a consequência concreta: falha, perda, retrabalho, custo, exposição, atraso, instabilidade, incompatibilidade ou outro efeito verificável. |
| `decisão`, `decisões` como substantivo abstrato para parecer estratégico | Nomeie a escolha, a definição, a regra, a pergunta, a comparação, o desenho técnico, o cálculo, a responsabilidade ou o compromisso específico. |
| `evidência`, `evidências` como substantivo abstrato para parecer rigoroso | Nomeie o artefato real: log, print, tela, teste, commit, comparação, histórico de execução, registro de erro, comando executado, resposta da API ou documento consultado. |
| `inventário`, `inventariar` como substantivo abstrato para parecer organizado | Nomeie o registro real: lista de dependências, planilha, checklist de teste, registro, tabela de comparação ou o documento específico. |
| `atrito`, `sem atrito` como nome de dificuldade | Descreva a etapa afetada ou use `ruído`, `esforço desnecessário`, `restrição operacional`, `permissão negada` ou `ação recusada`. |
| `bloqueio`, `bloquear` como muleta de dificuldade, permissão ou falha | Nomeie a superfície real: permissão negada, ação recusada, estado fechado que rejeita edição, validação que falhou, teste que reproduz a falha, arquivo protegido, fila parada ou erro visível. |
| `critério`, `critérios` como regra vaga | Nomeie a regra real, o escopo, o aceite, a governança, o custo, a prioridade, o parâmetro técnico ou a escolha comercial específica. |

## 4. Estruturas de parágrafo proibidas

- **Tríade automática**: listar sempre três adjetivos, três exemplos ou
  três benefícios em sequência, em quase todo parágrafo ("rápido, simples e
  eficiente"; "mais ágil, mais barato e mais seguro"). Quando toda
  enumeração do texto tem exatamente três itens, é sinal de padrão
  mecânico, não de coincidência.
- **Frase-eco**: uma frase curta que apenas repete ou resume a frase
  anterior com outras palavras, sem avançar informação. Ex.: "A automação
  economiza tempo. Ou seja, ela torna o processo mais rápido."
- **Parágrafo de transição vazio**: um parágrafo curto só para "preparar"
  o próximo tópico, sem conteúdo próprio ("Mas isso não é tudo. Vamos ver
  mais a seguir.").
- **Enumeração em prosa comprimida**: espremer uma lista inteira dentro de
  uma frase só, separada por vírgulas, para simular densidade sem
  desenvolver nenhum item ("a ferramenta oferece integração, automação,
  relatórios, dashboards e suporte").
- **Contraste artificial repetido**: toda seção seguindo o molde "por um
  lado X, por outro lado Y" mesmo quando a oposição é forçada ou óbvia.
- **Parágrafo definição-exemplo-benefício em sequência mecânica**: definir
  o termo, dar um exemplo genérico, declarar o benefício — sempre na mesma
  ordem, em todo parágrafo, sem variação de ritmo.
- **Sequência de frases curtíssimas (4 a 10 palavras) em cadeia**, cada uma
  pontuada como parágrafo ou frase isolada, criando ritmo de slide de
  apresentação em vez de prosa.

## 5. Padrões de heading e lista proibidos

- Heading em formato de pergunta seguido de resposta de uma linha genérica
  ("O que é X? X é...").
- Sequência de headings que repete o mesmo molde sintático do início ao
  fim (todos no formato "Como fazer X", ou todos "X: o guia completo").
- Lista previsível de exatamente 3, 5 ou 7 itens usada para substituir
  argumento em vez de organizar informação genuinamente paralela.
- Emoji como marcador de lista ou heading (✅, 🚀, 💡) em conteúdo que não é
  post casual de rede social.
- Negrito aplicado a frases inteiras ou parágrafos inteiros como se fosse
  destaque — negrito deveria marcar 2-4 palavras no máximo, não a frase
  toda.

## 6. Padrões de pontuação e fluidez proibidos

- Uso de travessão (—) ou ponto e vírgula (;) em quase toda frase do texto,
  como muleta de conexão em vez de reescrever com conectivo real. Em copy
  editorial, o ponto e vírgula é proibido como substituto de vírgula,
  dois-pontos ou ponto final para unir ideias, criar sofisticação artificial
  ou alongar período; reescreva com ponto final, vírgula, dois-pontos ou
  divisão em duas frases naturais. O travessão longo `—` ou meio-travessão `–`
  também é proibido como pontuação dentro de frase de prosa corrida; preserve
  apenas em citação literal e no separador de título e subtítulo em heading.
- Excesso de "e" coordenativo emendando ideias não relacionadas na mesma
  frase só para parecer fluida.
- Remoção sistemática de artigos definidos antes de sigla ou termo técnico
  quando funciona como sujeito ("API recebe" em vez de "A API recebe") —
  ver detalhamento em `context/proibicoes.md` se o usuário mantiver a regra
  de determinantes.
- Parênteses usados repetidamente para inserir qualificação genérica ("(o
  que é essencial hoje em dia)").
- Substantivo técnico modificado por adjetivo sem determinante quando a
  construção fica truncada, como `transformar em comportamento revisável` em
  vez de `transformar em um comportamento revisável` — use o artigo indefinido
  quando a frase precisar de coesão.
- Concisão artificial que remove conectivos, artigos ou determinantes e deixa
  a frase com cara de tradutor automático ou manual técnico truncado; não
  sacrifique naturalidade para encurtar.
- Enumeração serial em prosa, com sequência de itens separados por vírgulas
  (`usuário, permissão, dado obrigatório, estado visual, comportamento de
  erro e limite de versão`) usada para simular densidade; agrupe em raciocínio
  corrido ou use lista Markdown quando a informação for realmente paralela.
- Estrutura temporal pronta com `começa antes`, `a decisão começa antes`,
  `começa muito antes`, `começa bem antes` e grafias sem acento — nomeie a
  etapa anterior, a condição de avanço, o ator, o sistema ou a restrição que
  existe antes da ação principal.
- Família `entrega` usada como muleta de resultado (`entrega valor`, `entrega
  resultado`, `entregamos X`) sem artefato claro — diga qual arquivo, aula,
  configuração, revisão, suporte, regra, sistema, relatório ou decisão fica
  disponível e qual efeito limitado pode ser observado.

## 7. Autoridade fabricada e generalização vazia

- Afirmar liderança, pioneirismo ou "melhor prática do mercado" sem caso,
  dado ou fonte que sustente.
- "Especialistas dizem que...", "estudos mostram que..." sem citar o
  estudo ou o especialista.
- Estatística solta sem fonte, contexto ou ano ("87% das empresas fazem
  X") — todo dado precisa de origem rastreável (`context/` ou fonte
  externa citada).
- Tom de autoridade fabricada: medalha verbal, método inflado, posição
  messiânica ou a marca falando de si sem evidência; mostre caso, regra,
  prática, decisão, limite ou evidência.
- Atribuição sem fonte identificável: `especialistas concordam`, `estudos
  mostram`, `relatórios indicam`, `muitos defendem`, `é amplamente
  reconhecido` — nomeie a fonte, o documento, a pesquisa e o alcance da
  afirmação, ou retire a atribuição.
- Agência falsa de objeto inanimado para omitir o responsável: `os dados
  dizem`, `a conversa avançou`, `o mercado recompensou`, `a cultura mudou`,
  `a escolha surgiu` — nomeie quem leu, conduziu, pagou, mudou ou escolheu.
  Preserve verbos técnicos próprios do objeto, como `o servidor responde`,
  `a fila processa` e `o teste falha`.

## 8. Padrões de edição e preservação de voz

Estes padrões denunciam texto corrigido por automação, não apenas gerado:

- Abertura que limpa a garganta antes da tese: `a verdade é`, `vou ser
  sincero`, `deixe-me ser claro`, `o problema é o seguinte`, `vale destacar`,
  `quando se trata de` — retire o anúncio e comece pela afirmação, pela
  situação ou pelo objeto.
- Preparação de falsa descoberta: `o que ninguém conta`, `a parte que todo
  mundo ignora`, `o detalhe que quase ninguém percebe`, `o segredo é` —
  apresente a afirmação sem elogiar o autor como observador excepcional.
- Ênfase performática: `ponto final`, `deixe isso entrar`, `isso muda tudo`,
  `não se engane` — deixe o fato, a ação e a consequência carregarem a
  ênfase.
- Revelação dramática depois de dois-pontos com rótulo vago: `o melhor: ele
  aprende`, `o detalhe central: um agente separado avalia` — escreva frase
  declarativa com sujeito, verbo e relação causal.
- Metadiscurso interpretativo: `o ponto principal é`, `como você pode ver`,
  `em outras palavras`, `essa distinção importa` — apague o comentário quando
  a passagem já estiver clara; se não estiver, acrescente a informação, a
  causa ou o exemplo que falta.
- Análise superficial presa a gerúndio: `destacando`, `reforçando`,
  `demonstrando`, `refletindo` depois de um fato, sem consequência observável
  — troque por relação causal específica.
- Grandeza declarada sem apoio concreto: `momento crucial`, `papel vital`,
  `prova do compromisso`, `consolida sua posição`, `importância significativa`
  — apresente o fato específico e permita que o público avalie seu peso.
- Voz passiva que esconde autoria, responsabilidade ou fonte: `foi definido`,
  `foi decidido`, `é considerado`, `acredita-se` — coloque o ator real como
  sujeito quando conhecido e relevante.
- Verbo inflado no lugar de `é`, `tem` ou de ação específica: `serve como`,
  `atua como`, `representa`, `se posiciona como` — use o verbo simples.
- Troca de sinônimos para evitar repetir o termo correto: não alterne
  `sistema`, `ferramenta`, `solução` e `plataforma` se todos nomeiam a mesma
  entidade; repita o nome estável.
- Frase portátil que poderia aparecer sem mudança em outra pessoa, empresa,
  produto ou país — retire o preenchimento ou substitua por fato, mecanismo,
  exemplo, consequência, limite ou julgamento próprio.
- Ritmo robótico: frases do mesmo tamanho, parágrafos montados pelo mesmo
  molde ou encerramentos curtos repetidos — varie a construção conforme o
  raciocínio, sem trocar palavras só por trocar.
- Encerramento que recapitula toda a peça ou busca frase profunda: `em
  conclusão`, `no fim das contas`, metáfora final, sentença de palco —
  termine no último ponto concreto, no limite, na consequência ou na próxima
  ação.
- Formatação usada para fabricar ênfase: negrito espalhado dentro de frases,
  heading sobre seção mínima, emoji decorativo ou bullet que funcionaria
  melhor em prosa — faça a forma acompanhar a função.

## 9. Contraste artificial, jargões e rótulos vazios

- `não é sobre X, é sobre Y`, `X não é Y; é Z`, `não é só`, `não é apenas`,
  `não se trata de`, `é sobre` como fecho — afirme diretamente a tese e
  explique a consequência.
- `não vendemos X, entregamos Y`, `troque X por Y`, `pare de X e comece Y`,
  `mais X do que Y`, `com mais X e menos Y` — reescreva sem oposição
  artificial.
- `passa a ser`, `passa a trabalhar`, `passa a depender`, `passa a + verbo`
  como virada automática de transformação — reescreva com o ator real, a ação
  concreta e a consequência observável.
- `revolucionário`, `disruptivo`, `game changer`, `transforme sua jornada`,
  `desbloqueie seu potencial`, `potencialize seu sucesso` — troque por
  benefício concreto e verificável.
- `ganha força`, `ganhou força` para dizer que uma prática ficou popular —
  nomeie o que mudou: adoção, uso, redução de barreira, aumento de
  protótipos, mudança no fluxo de trabalho.
- `teatro de aprovação`, `a mudança tenta provar que merece entrar`,
  `merece entrar` — não personifique mudança, código, ferramenta ou texto;
  reescreva com ator e evidência.
- `a verdadeira...`, `a imensa maioria` — afirme a tese sem teatralização e
  use dado, recorte ou fonte quando houver quantificador.
- `isso muda`, `isso mudou`, `isso muda tudo` como virada genérica de copy —
  nomeie a consequência real.
- Rótulos comerciais ou técnicos vazios: `mostrar valor`, `tem valor`,
  `antecipa valor`, `valor real`, `projeto real`, `fluxo real`, `cenário
  comercial`, `o ponto central`, `decisão fica presa`, `sistema vivo`,
  `vira problema` — nomeie a utilidade concreta, o efeito prático, a
  informação disponível, a evidência ou o mecanismo.
- Família `salvar` como metáfora de aprovação ou continuidade (`salva`,
  `salvamento`) — reescreva com mecanismo concreto: registra, documenta,
  preserva evidência, permite recuperar, mantém histórico ou evita retrabalho.
  Preserve apenas o sentido literal de gravar arquivo ou guardar mídia.
- `pacote`, `pacotes` como agrupamento vago — nomeie o conjunto real:
  arquivos alterados, versão final, diretório, artefatos públicos, build,
  release ou conjunto de mudanças.

## Checklist rápido para inboundfy-copy-editor

- [ ] Nenhuma abertura da seção 1 presente.
- [ ] Nenhum fechamento da seção 2 presente.
- [ ] Nenhuma palavra/expressão da seção 3 presente sem justificativa
      técnica específica.
- [ ] Nenhuma estrutura de parágrafo da seção 4 presente.
- [ ] Headings e listas não seguem os padrões proibidos da seção 5.
- [ ] Pontuação não abusa dos padrões da seção 6.
- [ ] Nenhuma afirmação de autoridade ou estatística sem fonte (seção 7).
- [ ] Nenhum padrão de edição da seção 8 presente.
- [ ] Nenhum contraste artificial, jargão ou rótulo vazio da seção 9
      presente.
