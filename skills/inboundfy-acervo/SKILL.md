---
name: inboundfy-acervo
description: "Orquestra o ciclo completo do Inboundfy: recebe material, processa, pesquisa, estrutura, planeja, produz, revisa, agenda e registra a saída por canal."
---

# Inboundfy Acervo

Você é a skill mestre do Inboundfy. Sua responsabilidade começa no primeiro
material recebido e termina no registro da saída final, ou na entrega do
pacote de acervo pronto para uso posterior. As skills especializadas executam
partes do trabalho; você conserva a ordem, os vínculos, as pausas de conversa
e o estado de cada artefato.

## Contexto exigido

Antes de agir, leia nesta execução:

1. `AGENTS.md`, `AGENTS-CONTEXTOS.md` e `FONTES-EDITORIAIS.md` do projeto.
2. `PROHIBITED.md`, `COPY.md`, `WRITING.md`, `SAMPLES.md` e `MARKDOWN.md`,
   além dos módulos do canal solicitado.
3. [REFERENCIA.md](REFERENCIA.md), `.inboundfy/inbound.md`,
   `.inboundfy/estrategia.md`, `.inboundfy/voz.md`,
   `.inboundfy/personas.md`, `.inboundfy/proibicoes.md`,
   `.inboundfy/dicionario.md` e `.inboundfy/pipeline.md`.
4. `.inboundfy/framework/`, os índices de `.inboundfy/indices/` e o diretório
   do acervo relacionado, quando houver.

Se o projeto não estiver pronto, execute `inboundfy doctor --strict`, acione
`inboundfy-setup` e conclua a entrevista antes de gravar qualquer artefato.
Não coloque dados do projeto dentro de `.inboundfy/framework/`; esse caminho
guarda somente os arquivos distribuídos pelo framework.

## Entrada esperada

Aceite qualquer uma destas entradas:

- texto narrado, transcrição, cópia de site, documento, anotação ou link;
- um pedido para retomar um ID já existente;
- uma solicitação para processar, pesquisar, estruturar ou reaproveitar um
  item do acervo;
- um pedido de peça para um ou mais canais ativos;
- uma solicitação de calendário, revisão, publicação ou atualização de estado.

Registre título, origem declarada, data, observações e instruções do usuário.
Se a pessoa não informar um título, proponha três títulos descritivos e peça
uma escolha antes de gravar. Nunca complete lacunas factuais por conta própria.

## Fluxo

### 1. Preparar a execução

1. Confira a instalação, os arquivos de configuração e a existência de pelo
   menos uma persona completa.
2. Liste os canais marcados em `.inboundfy/estrategia.md`.
3. Liste as personas disponíveis em `.inboundfy/personas.md`.
4. Leia voz, proibições, dicionário e pipeline. O anti-slop funciona como
   filtro final e não substitui a identidade da marca.
5. Se um pedido mencionar um acervo existente, use o ID e continue do último
   arquivo válido. Se trouxer material novo, passe pela etapa seguinte.

### 2. Registrar a entrada sem alteração semântica

1. Verifique `.inboundfy/indices/acervo.json` para evitar duplicação.
2. Use `inboundfy acervo add "Título" --file entrada.md --source "origem"`
   ou a entrada equivalente do CLI.
3. Preserve o texto recebido em
   `acervo/<id>-<data>-<slug>/bruto.md`. O bruto é a fonte imutável da
   execução e nunca recebe correção, limpeza ou reescrita.
4. Confirme a criação de `README.md`, `processado.md`, `faq.md`,
   `base-editorial.md`, `pesquisa.md` e `estrategia.md`.
5. Guarde o ID de quatro algarismos e use esse ID em todas as referências.

### 3. Processar o material

Acione `inboundfy-processar-acervo` a partir de `bruto.md`. A etapa deve:

1. remover ruído mecânico, duplicações acidentais e marcas de cópia;
2. aplicar a grafia de `.inboundfy/dicionario.md`;
3. retirar termos e estruturas vetados em `.inboundfy/proibicoes.md`;
4. usar voz, persona e anti-slop para limpar a redação sem mudar o sentido;
5. preservar fatos, nomes, números, ressalvas e ordem do raciocínio;
6. registrar como pergunta qualquer trecho sem confirmação suficiente.

Depois, acione `inboundfy-extrair-faq` ou a capacidade equivalente para
percorrer o bruto e o processado. Crie perguntas sobre cada parágrafo, fato,
ator, entidade, condição, consequência, exemplo, definição, comparação,
intenção e lacuna. Cada resposta precisa apontar para sua origem ou informar
que o material não responde.

### 4. Pesquisar e confrontar fontes

Acione `inboundfy-pesquisa-acervo` em todo material novo, mesmo quando ele
parecer completo. Use pesquisa web, acervo anterior, bases editoriais e peças
finais já produzidas.

Salve `pesquisa.md` com:

- data da consulta, pergunta pesquisada e fonte consultada;
- URL, título, autor ou organização e trecho útil resumido;
- fatos confirmados, pontos divergentes e informação ausente;
- relação de cada achado com o texto bruto e o processado;
- orientação sobre o que pode ser publicado e o que exige confirmação.

Não transforme uma fonte externa em afirmação do cliente sem registrar a
origem. Se a pesquisa contrariar o material, preserve os dois lados, sinalize
a diferença e peça confirmação antes da redação pública.

### 5. Construir a base editorial

Acione `inboundfy-base-editorial` com bruto, processado, FAQ, pesquisa,
contextos locais e bases editoriais relacionadas. Preencha
`base-editorial.md` com:

- resumo factual e núcleo da mensagem;
- objetivo do material e importância para o negócio;
- pessoas, empresas, produtos, serviços, ferramentas e lugares citados;
- público e personas compatíveis;
- tese, principais pontos, frases aproveitáveis e vocabulário do material;
- fatos com fonte, limites de uso, perguntas abertas e lacunas;
- mecanismos, exemplos, objeções, benefícios concretos e CTA possível;
- relações com outros IDs do acervo e peças já produzidas;
- formatos, canais e reaproveitamentos sugeridos.

Use bases editoriais anteriores para completar relações e contexto, mas não
invente dado para fechar uma seção. Quando faltar informação, escreva
`PENDENTE` e formule a pergunta que o usuário precisa responder.

### 6. Mapear todas as possibilidades de uso

Acione `inboundfy-estrategia-acervo` somente depois de processado, FAQ,
pesquisa e base editorial estarem disponíveis. Para cada canal ativo, registre
em `estrategia.md`:

- formato possível e título de trabalho;
- ângulo, tese, estágio da jornada e objetivo;
- persona, CTA, oferta e dependências;
- relação com outras peças e possibilidades de reaproveitamento;
- adaptação para o mesmo canal e para canais diferentes;
- prioridade sugerida, data possível e perguntas pendentes.

Liste mais de uma possibilidade quando o item sustentar ângulos distintos.
Nunca proponha canal desmarcado na estratégia do projeto.

### 7. Escolher a saída com o usuário

Acione `inboundfy-planejamento` para registrar o brief, a direção editorial,
o uso escolhido, a prioridade e a data antes de criar qualquer peça.

Se a solicitação ainda não indicar saída, apresente a matriz de possibilidades
e pergunte se o item deve:

1. gerar uma peça agora;
2. entrar no calendário para produção futura;
3. permanecer como base para uso posterior.

Quando houver produção, liste somente os canais ativos em menu numérico e
permita uma ou mais escolhas. Depois liste todas as personas completas no
mesmo formato e peça uma ou mais escolhas. Não produza copy sem persona,
canal, objetivo e formato definidos.

Se o recorte editorial estiver aberto, apresente exatamente três direções
materialmente diferentes, com a recomendada primeiro, pergunte a opinião e
aguarde a resposta. Registre escolha, rejeições, ajustes e alcance no arquivo
de trabalho da peça. Uma dispensa de perguntas só vale quando o usuário a
pedir explicitamente na solicitação atual.

### 8. Produzir as peças finais

Para cada canal escolhido:

1. Acione `inboundfy-producao` e a especialista do canal.
2. Crie uma pasta
   `canais/<canal>/<id>-<data>-<slug>/README.md`.
3. Preencha front matter com ID, canal, título, estado, data, personas,
   acervos, bases editoriais e fontes de pesquisa.
4. Carregue o material processado e a base editorial como insumos; não use o
   bruto diretamente para redigir a peça.
5. Aplique `inboundfy-copywriting`, `inboundfy-seo` ou `inboundfy-geo` quando
   o formato pedir. Use as capacidades de oferta, CRO, distribuição ou outras
   apenas quando o objetivo exigir.
6. Adapte profundidade, vocabulário e CTA à persona sem descaracterizar a voz
   central da empresa.

Uma única peça pode apontar para várias personas quando a mensagem serve a
todas. Crie peças separadas quando a adaptação mudar a tese, o exemplo, a
oferta ou o CTA.

### 9. Revisar e validar

Antes de chamar uma peça de final, execute nesta ordem:

1. revisão factual contra processado, FAQ, base editorial e pesquisa;
2. revisão de voz e dicionário;
3. revisão de persona, intenção, CTA e canal;
4. `inboundfy-anti-slop`;
5. validadora pareada do canal;
6. SEO e GEO, quando aplicáveis;
7. revisão de Markdown e front matter.

Cada reprovação precisa apontar trecho, regra, fonte e correção proposta.
Corrija a peça e repita a validação. Se faltar confirmação, pare a afirmação,
registre a lacuna e pergunte ao usuário. Não fabrique prova, depoimento,
número, link ou resultado.

Quando o usuário corrigir grafia ou formulação, pergunte se a mudança vale
para a peça, canal ou projeto. Só então atualize `.inboundfy/dicionario.md`.
Mudança de voz segue a mesma regra e atualiza `.inboundfy/voz.md` apenas com o
alcance confirmado.

### 10. Registrar calendário, estado e catálogo

1. Inicie cada peça em `rascunho`.
2. Atualize para `revisao`, `aprovado`, `agendado`, `publicado` ou
   `arquivado` conforme o estado real, usando `inboundfy-pipeline`.
3. Para publicação, exija URL e data confirmadas.
4. Depois da confirmação da data, use `inboundfy calendario add` e registre a
   checklist em `calendario/AAAA-MM.md`, com ID, canal, personas e caminho do
   `README.md`.
5. Acione `inboundfy-catalogo` e atualize os índices de acervo, conteúdos e
   calendário.

### 11. Entregar o relatório da execução

Informe sempre:

- ID e caminho do acervo;
- arquivos preenchidos e estado de cada fase;
- fontes pesquisadas, relações encontradas e lacunas;
- possibilidades levantadas e escolhas do usuário;
- IDs, caminhos, canais e personas das peças;
- estado do pipeline e data do calendário;
- pendências factuais e próxima ação possível.

## Saída

Para material sem pedido de peça, entregue o pacote completo do acervo:

```text
acervo/<id>-<data>-<slug>/
├── README.md
├── bruto.md
├── processado.md
├── faq.md
├── base-editorial.md
├── pesquisa.md
└── estrategia.md
```

Quando houver produção, entregue também uma pasta por canal:

```text
canais/<canal>/<id>-<data>-<slug>/
└── README.md
```

O `README.md` final precisa ser legível no GitHub, conter front matter válido,
links relativos, conteúdo copiável, referências ao acervo, bases editoriais,
personas, pesquisa, validação e estado. O calendário aponta para esse arquivo.

## Validação

Antes de encerrar, confirme:

- setup pronto e configuração separada do framework;
- bruto preservado byte a byte após a gravação;
- processado baseado no bruto, com voz, dicionário e proibições aplicados;
- FAQ ampla, com respostas localizadas e perguntas sem resposta;
- pesquisa web salva com data, URLs e relação com o material;
- base editorial completa ou com pendências declaradas;
- possibilidades limitadas aos canais ativos;
- persona e canal presentes em toda peça;
- anti-slop e validadora do canal executados;
- front matter, links, IDs, índices, pipeline e calendário consistentes.

## Idempotência

Retomar pelo ID existente. Nunca crie outro item para a mesma entrada apenas
porque uma fase foi interrompida. Recalcule processado, FAQ, pesquisa, base e
estratégia a partir do bruto quando o usuário pedir nova rodada. Preserve
peças aprovadas e alterações manuais; peça autorização antes de substituir uma
saída já revisada. Atualize somente o arquivo gerenciado da fase retomada e
reconcilie os índices ao final.
