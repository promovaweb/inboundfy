---
name: inboundfy-setup
description: Conduz a entrevista inicial e grava as configurações do projeto: empresa, canais, personas, voz, pipeline, áreas de trabalho, integrações e variáveis de ambiente. Use quando a pessoa disser instalar, configurar, começar do zero, setup, doctor com erro, ativar canal ou área, ou ligar uma ferramenta como Google Analytics, CRM ou ClickUp.
---

# Configurar o Inboundfy

O setup prepara o projeto consumidor. Não edite o framework instalado em
`.inboundfy/framework/` e não grave dados reais dentro de `inboundfy/`.

## Arquitetura de execução

Esta skill cria as sentinelas e as fontes do projeto. As demais skills conferem essas sentinelas antes de escrever.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **entrada**.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/README.md`,
`.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/links.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/aprendizado.md`, `.inboundfy/context/integracoes.md` e
`.inboundfy/pipeline.md`. Confira `inboundfy doctor` antes e depois. Na etapa
de integrações, leia [references/integracoes.md](references/integracoes.md);
para o binário, o MCP e os códigos de saída, leia
[references/binario-e-mcp.md](references/binario-e-mcp.md).

Esta é a única skill que cria ou altera configuração. As demais skills leem
os arquivos acima e devolvem para cá qualquer configuração ausente.

## Entrada esperada

Pergunte nome e atividade da empresa, site, país, região, idioma, pessoas,
produtos, serviços, ofertas, endereço físico, registro legal, contatos, URLs
oficiais, redes sociais, fontes,
restrições, objetivos, canais, cadência, personas, voz, vocabulário, estados
do pipeline, agente principal, fuso, moeda, áreas de trabalho e ferramentas
usadas em cada área. Aproveite arquivos existentes sem apagar respostas.

## Fluxo

1. Confira `inboundfy --version` e siga
   [references/binario-e-mcp.md](references/binario-e-mcp.md) quando o
   binário faltar ou estiver atrás da versão do projeto. Rode
   `inboundfy install --yes --agent codex` ou a variante do agente do
   projeto. Use `--dry-run` antes quando a instalação ainda não for conhecida.
2. Confirme que o binário criou `.inboundfy/framework/` para o material do produto
   e os arquivos específicos em `.inboundfy/`. A documentação fica em
   `.inboundfy/framework/docs/`, o ebook em `.inboundfy/framework/ebook/`, a
   identidade visual em `.inboundfy/framework/brand/` e os templates em
   `.inboundfy/framework/templates/`.
3. Preencha `context/empresa.md`, `context/marca-voz.md`, `context/publico.md`,
   `context/links.md`, `context/enderecos.md`,
   `context/proibicoes.md`, `context/glossario.md`, `estrategia.md` e
   `pipeline.md` com respostas confirmadas. Preserve
   `context/aprendizado.md` e use-o para registrar orientações recebidas
   durante o setup ou em execuções futuras.
4. Em `estrategia.md`, ofereça Blog, Email, LinkedIn, Instagram, Substack e
   YouTube. Marque apenas os canais escolhidos e rode `inboundfy project sync`.
5. Registre as configurações gerais (agente, fuso, moeda, idioma de
   publicação, quem aprova mudanças) na seção Regras do projeto de
   `context/integracoes.md`.
6. Conduza a etapa de integrações com
   [references/integracoes.md](references/integracoes.md): área por área,
   registre ferramenta, estado, variáveis e escopo em
   `context/integracoes.md`, escreva os nomes no `.env.example` e peça que a
   pessoa coloque os valores no `.env`, fora do Git. Nunca peça nem grave
   segredo em arquivo versionado.
7. Pergunte quais áreas o projeto vai usar (conteúdo, SEO, copy, growth,
   vendas, dados, pesquisa), registre em `estrategia.md` e apresente a skill
   `inboundfy-area-*` de cada área ativa como porta de entrada.
8. Garanta pelo menos uma persona completa. Registre uma fonte para cada bloco
   factual e deixe perguntas abertas onde a resposta não chegou. Use
   `inboundfy context check` (ou a tool `context_check`) para mostrar à
   pessoa o que ainda falta.
9. Quando os campos mínimos estiverem preenchidos, rode
   `inboundfy context ready --yes` e depois `inboundfy doctor --strict`.
10. Ofereça ligar o MCP do Inboundfy ao agente e apresente o painel
    (`inboundfy`, sem argumentos), conforme
    [references/binario-e-mcp.md](references/binario-e-mcp.md).

## Saída

Deixe os arquivos de configuração e contexto, os três diretórios de produção,
os índices vazios, as pastas dos canais ativos e o bloco idempotente no arquivo
de instruções do projeto.

## Validação

O setup só está pronto quando o doctor encontra os arquivos, a estratégia tem
ao menos um canal marcado, `context/publico.md` tem uma persona completa e o
estado está `ready`. Confirme que nenhum arquivo do framework foi sobrescrito,
que `context/integracoes.md` lista cada ferramenta com estado e que nenhum
valor de segredo aparece em arquivo versionado.

## Responsabilidade do grupo

Entregue o projeto em estado `ready` ou com as perguntas abertas listadas. Nenhuma peça nasce antes disso.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** entrada
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma nova execução preserva respostas, índices, acervo, peças, calendário e
customizações. Atualize somente arquivos ausentes ou blocos administrados.
