---
name: inboundfy-setup
description: Conduz a entrevista inicial, prepara a configuração do projeto consumidor e confere canais, personas, voz, negócio, pipeline e índices do Inboundfy.
---

# Configurar o Inboundfy

O setup prepara o projeto consumidor. Não edite o framework instalado em
`.inboundfy/framework/` e não grave dados reais dentro de `inboundfy/`.

## Arquitetura de execução

Como skill de setup, ela prepara as sentinelas e as fontes do projeto; as demais skills confirmam essas sentinelas antes de escrever. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

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
`.inboundfy/context/aprendizado.md` e `.inboundfy/pipeline.md`. Confira `inboundfy
doctor` antes e depois.

## Entrada esperada

Pergunte nome e atividade da empresa, site, país, região, idioma, pessoas,
produtos, serviços, ofertas, endereço físico, registro legal, contatos, URLs
oficiais, redes sociais, fontes,
restrições, objetivos, canais, cadência, personas, voz, vocabulário e estados
do pipeline. Aproveite arquivos existentes sem apagar respostas.

## Fluxo

1. Rode `inboundfy install --yes --agent codex` ou a variante do agente do
   projeto. Use `--dry-run` antes quando a instalação ainda não for conhecida.
2. Confirme que o CLI criou `.inboundfy/framework/` para o material do produto
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
5. Garanta pelo menos uma persona completa. Registre uma fonte para cada bloco
   factual e deixe perguntas abertas onde a resposta não chegou.
6. Quando os campos mínimos estiverem preenchidos, rode
   `inboundfy context ready --yes` e depois `inboundfy doctor --strict`.

## Saída

Deixe os arquivos de configuração e contexto, os três diretórios de produção,
os índices vazios, as pastas dos canais ativos e o bloco idempotente no arquivo
de instruções do projeto.

## Validação

O setup só está pronto quando o doctor encontra os arquivos, a estratégia tem
ao menos um canal marcado, `context/publico.md` tem uma persona completa e o
estado está `ready`. Confirme que nenhum arquivo do framework foi sobrescrito.

## Responsabilidade do grupo

Prepare ou encaminhe a execução. Preserve respostas existentes e não crie conteúdo antes de o contexto mínimo estar pronto.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** entrada
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma nova execução preserva respostas, índices, acervo, peças, calendário e
customizações. Atualize somente arquivos ausentes ou blocos administrados.
