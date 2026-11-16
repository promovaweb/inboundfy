---
name: inboundfy-pesquisa-cliente
description: Pesquisa clientes e organiza falas, temas e linguagem num relatório com fontes e limites da amostra. Use quando o pedido falar em entrevistas, voz do cliente, dores, objeções, avaliações, motivos de perda ou pesquisa de público.
---

# Pesquisa de cliente

Use esta skill para descobrir, com fonte, como clientes e potenciais clientes
descrevem o problema, o que tentaram antes, o que os fez comprar ou desistir
e quais palavras usam. O resultado alimenta personas, FAQ, base editorial,
copy e hipóteses de teste.

Ela não escreve copy final (acione `inboundfy-copy-redacao` ou a
especialista do canal), não grava persona diretamente em
`context/publico.md` (acione `inboundfy-personas` ou
`inboundfy-contexto-publico` com o achado aprovado) e não analisa
concorrentes como empresa (acione `inboundfy-concorrentes`). Avaliações de
clientes de concorrentes entram aqui como fonte de linguagem.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Quando usar e quando não usar

| Situação | Modo | Fonte principal |
| --- | --- | --- |
| O projeto já tem transcrições, tickets, conversas de WhatsApp ou NPS | Análise de material existente | Arquivos fornecidos pelo usuário |
| Não há material interno, mas o mercado conversa em público | Escuta de comunidades e avaliações | Reclame Aqui, Google, lojas de aplicativo, grupos, fóruns, comentários de YouTube e LinkedIn |
| Há clientes acessíveis e uma pergunta específica | Pesquisa primária | Entrevista ou questionário |
| Precisa saber qual versão converte mais | Não é pesquisa | `inboundfy-experimentacao` |
| Precisa saber quanto cada canal gera | Não é pesquisa | `inboundfy-metricas` ou `inboundfy-atribuicao` |
| Persona inexistente e nenhuma fonte disponível | Hipótese de persona marcada como provisória | Entrevista com o usuário e plano de validação |

## Perguntas de diagnóstico

1. Qual escolha de marketing depende desta pesquisa (persona, mensagem,
   oferta, pauta, objeção da página)?
2. Qual segmento ou persona está em foco e qual fica de fora?
3. Que material interno existe: gravações de venda, atendimento no
   WhatsApp, chamados, cancelamentos, NPS, avaliações?
4. Há clientes que aceitam conversar? Clientes recentes ou de longa data?
5. Onde o público pede indicação e reclama em público?
6. Existe consentimento para usar falas de clientes em peça pública?
7. Qual prazo e qual formato de entrega o usuário espera?

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/ofertas.md`,
`.inboundfy/context/concorrentes.md`, `.inboundfy/context/depoimentos.json`,
`.inboundfy/context/marca-voz.md`, `.inboundfy/context/proibicoes.md`,
`.inboundfy/context/glossario.md`, o acervo e as bases editoriais
relacionadas. Consulte `.inboundfy/framework/` para as regras de pesquisa e
escrita. Se `publico.md` estiver vazio, registre a pesquisa como exploratória
e encaminhe o resultado para `inboundfy-personas`.

## Entrada esperada

Receba segmento, persona, pergunta de negócio, URLs, entrevistas,
transcrições, conversas exportadas, comentários, tickets, avaliações ou dados
internos. Identifique o que é fala literal, observação, interpretação e
hipótese. Dados pessoais chegam anonimizados ou são anonimizados no passo 3.

## Fluxo

1. Confirme as sentinelas e leia o contexto exigido. Escreva a pergunta de
   pesquisa em uma frase e a escolha de marketing que ela informa. Escolha o
   modo pela tabela acima e confirme com o usuário quando houver mais de um
   caminho viável.
2. Monte o plano de fontes com
   [references/fontes-e-coleta.md](references/fontes-e-coleta.md): onde
   procurar, buscas, volume mínimo e período. Para pesquisa primária, use
   [references/entrevistas-e-questionarios.md](references/entrevistas-e-questionarios.md)
   para recrutamento, roteiro e questionário.
3. Colete registrando URL ou caminho, título, data da fala, data de consulta
   e trecho literal. Remova nome, telefone, CPF e email de clientes antes de
   salvar (LGPD). Não fabrique, não complete e não traduza falas.
4. Codifique cada trecho com a ficha de achado de [REFERENCIA.md](REFERENCIA.md):
   gatilho, tarefa, dor, tentativa anterior, resultado desejado, objeção,
   motivo da escolha, palavra usada e intensidade.
5. Sintetize com
   [references/sintese-e-mapa-de-linguagem.md](references/sintese-e-mapa-de-linguagem.md):
   agrupe temas, ordene por frequência e intensidade, separe padrão de caso
   isolado e marque o grau de confiança de cada tema.
6. Compare com a persona registrada. Liste confirmações, contradições e
   lacunas sem substituir a descrição confirmada por inferência.
7. Apresente ao usuário os achados que mudam persona, mensagem ou oferta e
   pergunte o alcance de cada um (peça, canal ou projeto). Aguarde a resposta.
8. Grave o relatório e transfira para `pesquisa.md`, `faq.md` e
   `base-editorial.md` do item do acervo apenas o que o usuário aprovou.
   Passe os termos novos pelo glossário, pelas proibições e pela voz.
9. Monte o handoff: `inboundfy-personas` para atualização de persona,
   `inboundfy-copy-posicionamento` ou `inboundfy-copy-redacao` para mensagem,
   `inboundfy-contexto-depoimentos` para falas com consentimento de uso,
   `inboundfy-experimentacao` para hipóteses testáveis.

## Saída

Salve o relatório como `pesquisa-cliente-<slug>.md` no item do acervo
indicado (`acervo/<id>-<data>-<slug>/`), com o envelope de
`../_shared/02-contrato-de-artefato.md`. O relatório contém pergunta, modo,
fontes, temas, mapa de linguagem, comparação com a persona, lacunas e
handoff. Atualizações nos arquivos do item (`pesquisa.md`, `faq.md`,
`base-editorial.md`) citam o relatório como fonte.

## Validação

Reprove quando: uma citação não tiver fonte localizável; uma fala estiver
parafraseada como se fosse literal; houver dado pessoal identificável no
arquivo; um tema com menos de três ocorrências independentes aparecer como
padrão; a amostra (quantidade, perfil, período) não estiver declarada; ou
um achado tiver sido gravado em contexto sem aprovação de alcance. Corrija e
repita a leitura inteira.

## Idempotência

Não duplique achados já registrados. Atualize um tema somente quando a nova
fonte acrescentar ocorrência, contradizer o anterior ou alterar sua
validade. Preserve as datas das fontes antigas. Nova pergunta de pesquisa
recebe novo relatório.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** pergunta de pesquisa, persona e fontes fornecidas ou públicas;
- **transformação:** coleta, codificação e síntese com proveniência;
- **saída:** `pesquisa-cliente-<slug>.md` e atualizações aprovadas do acervo;
- **handoff:** `inboundfy-personas`, `inboundfy-copy-posicionamento`,
  `inboundfy-contexto-depoimentos` ou `inboundfy-experimentacao`.
