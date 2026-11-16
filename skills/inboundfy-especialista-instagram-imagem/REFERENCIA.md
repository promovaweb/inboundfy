# Pacote visual de Instagram: produção

O par `inboundfy-especialista-instagram-imagem` e `inboundfy-validador-instagram-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente instagram-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Feed quadrado | 1:1 | 1080×1080 |
| Feed e carrossel | 4:5 | 1080×1350 |
| Stories e capa de Reels | 9:16 | 1080×1920 |

- Fonte ou motor: Geração por inboundfy-base-imagem, uma chamada por slide.
- Arquivos: post.png ou slide-01.png até slide-NN.png; README.md com ordem, textos e alt de cada arquivo.
- Destino: `97-ativos-finais/instagram/<item>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Composição e escolha de abordagem

| Situação observada | Ação |
| --- | --- |
| Uma afirmação e um objeto visual | Post único com a frase aprovada. |
| Explicação depende de sequência | Carrossel com todos os slides da copy. |
| Destino é Story ou capa de Reels | Composição 9:16 com máscara de interface do destino. |

1. Leia a legenda e a copy por slide aprovadas. Para post único, extraia a frase visual aprovada sem transformar toda a legenda em imagem. Para carrossel, registre a ordem completa antes da primeira geração.
2. Defina grade comum com margens, fonte, escala de títulos, paleta e posição do logo. A capa nomeia o assunto; os slides internos avançam uma ideia por vez; o último mantém o CTA aprovado.
3. Gere a capa por `inboundfy-base-imagem` e guarde a composição como referência das chamadas seguintes. Faça uma chamada por slide com o texto correspondente e a mesma grade.
4. Numere os arquivos com dois dígitos. Se o canal usar numeração visível, confira índice e total em todos os slides. Não acrescente slides para atingir uma quantidade arbitrária.
5. Abra um mosaico do pacote e depois cada slide a 360 px. Faça preview do primeiro slide a 180 px. Confira capa sozinha, progressão, CTA e continuidade da marca.
6. Para Stories ou capa de Reels, simule interface e recorte do perfil. Zonas seguras dependem do destino configurado; registre a máscara utilizada. Não presuma que todo o retângulo ficará visível.

## Template de brief visual e entrega

Preencha antes de chamar o motor ou buscar a foto. Preserve o envelope do contrato compartilhado no README. O texto entre chaves é campo de preenchimento.

```yaml
id: "{ID da peça}"
skill: inboundfy-especialista-instagram-imagem
estado: revisao
brief: "04-briefs/{arquivo}.md"
entrada: "{texto final e versão}"
persona: "{ID confirmado}"
fontes:
  - "{context/canais.md e identidade visual}"
formato: "{post, carrossel, Story ou capa de Reels}"
grade: "{margens, tipografia, paleta e logo}"
slides:
  - arquivo: slide-01.png
    funcao: "{capa, desenvolvimento ou fechamento}"
    texto_literal: "{copy aprovada}"
    alt: "{descrição específica deste slide}"
numeracao_visivel: "{sim ou não conforme canal}"
mascara_preview: "{recorte do grid e sobreposições simuladas}"
saidas:
  - "{caminho de cada arquivo exportado}"
preview: "{largura de teste, recorte e resultado observado}"
pendencias: []
proxima_skill: inboundfy-validador-instagram-imagem
```

O README relaciona o brief, o texto final, cada exportação, suas dimensões, peso, alt e origem dos ativos. No pacote, mantenha `brief` no frontmatter. Texto longo em imagem exige transcrição acessível junto ao arquivo; o alt não substitui a transcrição.

## Exemplo completo de produção

A empresa fictícia brasileira **Doce de Bairro**, de Recife, vende bolos por encomenda. O carrossel informa os dados necessários para registrar um pedido pelo WhatsApp. A persona é cliente que organiza festa em casa.

Brief 0042: cinco slides 1080×1350 em `97-ativos-finais/instagram/pedido-bolo/`. Paleta creme, marrom e rosa da marca fictícia. Margem de 72 px; logo fixo no rodapé; numeração visível de 1/5 a 5/5. Texto aprovado e descrição acessível:

| Arquivo | Texto literal | Alt |
| --- | --- | --- |
| slide-01.png | O que informar ao pedir seu bolo | Capa com bolo ilustrado e título sobre dados do pedido. |
| slide-02.png | Informe a data da festa | Calendário ilustrado ao lado da orientação sobre a data. |
| slide-03.png | Diga quantas pessoas vão participar | Grupo ilustrado acompanha a orientação sobre participantes. |
| slide-04.png | Avise sobre restrições alimentares | Lista ilustrada acompanha a orientação sobre restrições. |
| slide-05.png | Envie essas informações pelo WhatsApp da bio | Balão de conversa acompanha a chamada para o contato da bio. |

A legenda aprovada esclarece que o envio dessas informações inicia o atendimento e que a disponibilidade será confirmada. A arte não promete atendimento de toda restrição alimentar nem inventa preço. O logo e a grade são passados em cada uma das cinco chamadas à base. O mosaico confirma continuidade; o preview da capa a 180 px permite ler o assunto.

Entrega: cinco PNGs e README com a tabela, caminho da legenda, dimensões, máscara de preview e fontes da marca. Estado revisao; destino `inboundfy-validador-instagram-imagem`. Para post único, o mesmo modelo aceita apenas `post.png`, sem campos de ordem de carrossel.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Texto de cada arquivo coincide com a copy daquele slide; CTA e grafias seguem legenda, glossário e vetos.
2. **Literal:** Numeração visível, quando exigida, corresponde ao índice e total; alt é específico para cada arquivo.
3. **Semântica:** Capa informa o assunto sozinha e nenhum slide acrescenta preço, capacidade ou promessa ausente da legenda.
4. **Semântica:** Cada slide avança a explicação aprovada; CTA final corresponde ao contato e à ação autorizados.
5. **Estrutural:** Todos os slides existem uma vez, na ordem da copy, com nomes de dois dígitos e registro completo no README.
6. **Estrutural:** Dimensões correspondem ao formato e o preview usa a máscara do destino, inclusive em Stories e Reels.
7. **Visual:** Grade, logo, paleta e tipografia permanecem coerentes em todos os slides; o mosaico foi inspecionado.
8. **Visual:** Capa é legível a 180 px e slides a 360 px; recortes e sobreposições não cobrem informação essencial.

## Erros comuns e correções

- Gerar cada slide com identidade diferente: fixar grade e referências.
- Omitir um slide na exportação: comparar quantidade com a copy.
- Colocar CTA sob a interface: simular máscara antes do handoff.

## Medição e limites

Após publicação autorizada, comparar salvamentos e compartilhamentos por alcance em peças de mesmo objetivo. Anotar período e amostra; não prometer alcance por usar determinado formato. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A especialista prepara o conjunto completo e encaminha arquivos, fontes, medidas e previews a `inboundfy-validador-instagram-imagem`. Registre a fonte ou motor utilizado, sem expor segredos. Reaproveite a versão existente quando o pedido não exigir refação. Mudança em texto aprovado ou dado factual retorna à fonte responsável; ajuste visual não autoriza mudar a copy.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato e a fonte de imagem permitida. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Entrega para a validadora

Encaminhe a `inboundfy-validador-instagram-imagem` o conjunto descrito em Formato e pacote, acompanhado de ID, brief, texto final e versão, fontes, medidas reais e previews. Inclua o registro de origem dos ativos e as pendências. Uma devolução mantém o mesmo ID e informa a rodada; ajuste os arquivos apontados e entregue novamente todas as exportações, não apenas o recorte corrigido.
