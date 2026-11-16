---
name: inboundfy-geo
description: Prepara páginas e um plano de presença da marca em respostas de IA, com perguntas monitoradas e fontes citáveis. Use quando o pedido falar em GEO, busca generativa, aparecer no ChatGPT, citações por IA ou monitorar respostas.
---

# GEO e descoberta por IA

GEO aqui significa otimização para respostas generativas: fazer com que
ChatGPT, Perplexity, Gemini, Copilot e a visão geral de IA do Google
encontrem o projeto, entendam o que ele oferece e o citem ou recomendem com
informação correta. Esta skill mede como a marca aparece hoje nessas
respostas, reescreve páginas para que trechos possam ser extraídos e
citados e aponta onde a marca precisa estar presente fora do próprio site.

Ela não substitui o SEO clássico (papel de `inboundfy-seo`), não escreve a
peça final (papel de `inboundfy-producao` e das `inboundfy-especialista-*`)
e não promete posição em resposta de IA. Nenhum fornecedor de IA publica
regra de ranqueamento das respostas. Esta skill separa orientação oficial de
hipótese em todo artefato.

## Quando usar e quando não usar

| Pedido | Skill certa |
| --- | --- |
| Saber se a marca aparece quando alguém pergunta a uma IA | `inboundfy-geo` |
| Tornar uma página citável em respostas de IA | `inboundfy-geo` |
| Corrigir informação errada que a IA diz sobre a marca | `inboundfy-geo` |
| Conferir se robôs de IA conseguem ler o site | `inboundfy-geo` |
| Pesquisa de termos, cluster e briefing de busca | `inboundfy-seo` |
| Indexação, velocidade e rastreamento do site inteiro | `inboundfy-auditoria-seo` |
| JSON-LD e rich results | `inboundfy-dados-estruturados` |
| Cadastro em diretórios, marketplaces e listas de ferramentas | `inboundfy-growth-diretorios` |
| Menções e links em sites de terceiros | `inboundfy-seo-links-externos` |
| Comparativos e análise de concorrentes | `inboundfy-concorrentes` |

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O
trabalho segue o contrato compartilhado e usa a referência específica desta
pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`.
Quando um deles faltar ou a configuração estiver incompleta, apresente o
alerta canônico e acione `inboundfy-setup` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md` e estes arquivos:

- `.inboundfy/context/empresa.md`: o que a empresa faz, mercado e região.
- `.inboundfy/context/produtos.md`, `.inboundfy/context/servicos.md` e
  `.inboundfy/context/ofertas.md`: a descrição correta que a IA deveria
  repetir.
- `.inboundfy/context/publico.md`: perguntas e vocabulário das personas.
- `.inboundfy/context/concorrentes.md`: quem aparece no lugar da marca.
- `.inboundfy/context/links.md`: URLs canônicas e perfis oficiais.
- `.inboundfy/context/glossario.md`: grafia oficial de marca, produtos e
  pessoas.
- `.inboundfy/context/marca-voz.md`, `.inboundfy/context/proibicoes.md` e
  `.inboundfy/context/aprendizado.md`.
- `.inboundfy/estrategia.md`, o acervo relacionado e seu `pesquisa.md`.

Consulte `.inboundfy/framework/` para as regras de fontes, SEO, Markdown e
escrita. Quando a descrição oficial de produto ou oferta estiver incompleta,
pare e acione `inboundfy-contexto-oferta`.

## Entrada esperada

- Pergunta, tema, URL, peça existente ou plano de conteúdo.
- Persona que faria a pergunta à IA.
- Página que deve receber a visita depois da resposta.
- Registros anteriores de monitoramento, quando existirem.
- Acesso ao `robots.txt` do site e, se houver, dados de tráfego por origem.

Identifique quem precisa da resposta, quais afirmações exigem fonte e qual
página deve ser citada.

## Perguntas de diagnóstico

Consulte o [roteiro de diagnóstico](references/diagnostico.md) no passo 2 do fluxo.

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e escolha o modo: diagnóstico de
   visibilidade, otimização de página, correção de informação ou plano de
   presença.
2. Use o [roteiro de diagnóstico](references/diagnostico.md) com o contexto
   do projeto. Pergunte à pessoa só o que muda a saída.
3. Monte ou atualize a carteira de perguntas monitoradas com
   [monitoramento em plataformas de IA](references/monitoramento-em-plataformas-de-ia.md)
   e rode o teste manual nas plataformas indicadas. Registre data,
   plataforma, resposta, citação, recomendação e fontes citadas.
4. Classifique cada pergunta: marca citada, marca recomendada, concorrente no
   lugar, informação errada ou ausência total.
5. Para as páginas que deveriam ser citadas, aplique
   [blocos citáveis e autoridade](references/blocos-citaveis-e-autoridade.md):
   resposta curta no início, definições, tabelas, passos, dados com fonte,
   autoria e data. Nomeie entidades com a grafia do dicionário.
6. Confira acesso técnico e presença fora do site com
   [acesso de robôs e presença externa](references/acesso-de-robos-e-presenca-externa.md).
7. Apresente três planos de ação, com o recomendado primeiro e aguarde a
   escolha da pessoa.
8. Vincule cada afirmação importante ao acervo, à pesquisa ou a uma URL
   canônica do projeto. Afirmação sem fonte vira pendência.
9. Revise voz, persona, proibições, `inboundfy-anti-slop` e SEO antes de
   salvar.
10. Entregue o handoff: especialista do canal para reescrever a página,
    `inboundfy-dados-estruturados` após aprovação do conteúdo visível,
    `inboundfy-growth-diretorios`
    e `inboundfy-seo-links-externos` para presença externa,
    `inboundfy-metricas` para acompanhar o tráfego de referência de IA.

## Saída

Salve em `acervo/<id>-<data>-<slug>/geo.md`, com o envelope de
[contrato de artefato](../_shared/02-contrato-de-artefato.md). O arquivo
contém, conforme o modo:

- carteira de perguntas com o registro datado de cada teste;
- mapa de perguntas, respostas, fontes, entidades, links e lacunas;
- briefing GEO ou revisão de página com blocos citáveis propostos;
- verificação de `robots.txt` e lista de presença externa;
- plano escolhido, pendências, métricas e próxima skill.

Quando o trabalho fizer parte de um pacote, o brief do canal recebe o campo
`geo: acervo/<id>-<data>-<slug>/geo.md`.

## Validação

O artefato só segue quando:

- cada pergunta monitorada tem plataforma, data e resposta registradas;
- cada página proposta responde à pergunta principal nas primeiras frases;
- cada bloco citável faz sentido lido sozinho, fora da página;
- números e afirmações externas têm fonte e data;
- autoria e fonte estão claras na página;
- recomendações técnicas sem documentação oficial estão marcadas como
  hipótese;
- o texto usa linguagem natural, sem conteúdo fabricado e mantém caminho
  lógico para a próxima ação.

GEO não autoriza escrever para robôs ignorando o leitor. Quando um item
falha, corrija. Quando depende de dado do negócio, devolva a pergunta e
mantenha o estado `revisao`.

## Idempotência

Atualize o mesmo `geo.md` do ID sem duplicar perguntas ou links. Cada nova
rodada de teste entra como linha datada; respostas antigas permanecem para
comparação. Registre novas fontes e alterações sensíveis ao tempo com data
de consulta. Não altere `robots.txt` nem página publicada sem registrar a
proposta no pipeline.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** pergunta, tema, URL ou ID do acervo ligado ao pedido;
- **transformação:** diagnóstico, otimização de página, correção ou plano de
  presença;
- **saída:** `geo.md` no acervo, com carteira, achados e ações;
- **handoff:** especialista do canal, `inboundfy-dados-estruturados`,
  `inboundfy-growth-diretorios`, `inboundfy-seo-links-externos` ou
  `inboundfy-metricas`, com estado e pendências.
