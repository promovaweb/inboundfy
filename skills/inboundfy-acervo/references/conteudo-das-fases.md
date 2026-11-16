# Conteúdo mínimo de cada fase do acervo

Leia esta referência nos passos 3 a 7 e 9 de `inboundfy-acervo`, ao abrir cada
derivado antes de marcar a fase como concluída. Cada skill especializada define o
próprio template; esta lista diz o que a orquestradora confere no retorno.

## Passo 3: processado.md e faq.md

`inboundfy-processar-acervo` entrega `processado.md` a partir de `bruto.md`.
Confira se o derivado:

1. removeu ruído mecânico, duplicações acidentais e marcas de cópia;
2. aplicou a grafia de `.inboundfy/context/glossario.md`;
3. retirou ou marcou termos e estruturas vetados em `.inboundfy/context/proibicoes.md`;
4. usou voz, persona e anti-slop para limpar a redação sem mudar o sentido;
5. preservou fatos, nomes, números, ressalvas e ordem do raciocínio;
6. registrou como pergunta qualquer trecho sem confirmação suficiente.

`inboundfy-extrair-faq` percorre `bruto.md` e `processado.md`. A FAQ cobre cada
parágrafo, fato, ator, entidade, condição, consequência, exemplo, definição,
comparação, intenção e lacuna. Cada resposta aponta a origem ou declara que o
material não responde.

## Passo 4: pesquisa.md

`inboundfy-pesquisa-acervo` recebe `processado.md` e `faq.md`. Confira em
`pesquisa.md`:

- data da consulta, pergunta pesquisada e fonte consultada;
- URL, título, autor ou organização e trecho útil resumido;
- fatos confirmados, pontos divergentes e informação ausente;
- relação de cada achado com o bruto e o processado;
- orientação sobre o que pode ser publicado e o que exige confirmação.

Uma fonte externa nunca vira afirmação do cliente sem registro da origem. Quando a
pesquisa contraria o material, os dois lados ficam registrados e a redação pública
espera a confirmação do usuário.

## Passo 5: base-editorial.md

`inboundfy-base-editorial` recebe bruto, processado, FAQ, pesquisa, contextos locais
e bases relacionadas. Confira se `base-editorial.md` traz:

- resumo factual e núcleo da mensagem;
- objetivo do material e importância para o negócio;
- pessoas, empresas, produtos, serviços, ferramentas e lugares citados;
- público e personas compatíveis;
- tese, principais pontos, frases aproveitáveis e vocabulário do material;
- fatos com fonte, limites de uso, perguntas abertas e lacunas;
- mecanismos, exemplos, objeções, benefícios concretos e CTA possível;
- relações com outros IDs do acervo e peças já produzidas;
- formatos, canais e reaproveitamentos sugeridos.

Seção sem informação recebe `PENDENTE` e a pergunta que o usuário precisa responder.
Bases anteriores completam relações e contexto, nunca dados ausentes.

## Passo 6: estrategia.md

Para cada canal ativo, a matriz de
[estratégia do acervo](estrategia-do-acervo.md) registra:

- formato possível e título de trabalho;
- ângulo, tese, estágio de compra e objetivo;
- persona, CTA, oferta e dependências;
- relação com outras peças e possibilidades de reaproveitamento;
- adaptação para o mesmo canal e para canais diferentes;
- prioridade sugerida, data possível e perguntas pendentes.

## Passo 7: menus de escolha

Ao pedir canal e persona, mostre:

1. canais ativos de `.inboundfy/estrategia.md` em menu numérico, com escolha única
   ou múltipla;
2. todas as personas completas de `.inboundfy/context/publico.md`, cada uma com
   número de seleção, ID, nome de referência, resumo do perfil, contexto de compra,
   problema, resultado, canais e oferta.

Quando o recorte editorial estiver aberto, apresente exatamente três direções
materialmente diferentes, com a recomendada primeiro, pergunte a opinião e aguarde.
Registre escolha, rejeições, ajustes e alcance no arquivo de trabalho da peça. A
dispensa de perguntas vale só quando o usuário a pede na solicitação atual.

## Passo 9: reprovação e correção do usuário

Cada reprovação aponta trecho, regra, fonte e correção proposta. Sem confirmação, a
afirmação sai da peça, a lacuna é registrada e o usuário recebe a pergunta. Prova,
depoimento, número, link e resultado nunca são fabricados.

Quando o usuário corrige grafia, formulação ou direção, `inboundfy-aprendizado`
preserva a mensagem, pergunta o alcance e aplica a alteração atual. Só depois disso
`.inboundfy/context/glossario.md`, `.inboundfy/context/marca-voz.md` ou
`.inboundfy/context/proibicoes.md` mudam, quando o alcance confirmado pedir.
