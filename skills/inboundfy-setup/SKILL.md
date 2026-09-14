---
name: inboundfy-setup
description: Conduz a entrevista inicial, prepara a configuração do projeto consumidor e confere canais, personas, voz, negócio, pipeline e índices do Inboundfy.
---

# Configurar o Inboundfy

O setup prepara o projeto consumidor. Não edite o framework instalado em
`.inboundfy/framework/` e não grave dados reais dentro de `inboundfy/`.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/README.md`,
`.inboundfy/inbound.md`, `.inboundfy/estrategia.md`, `.inboundfy/voz.md`,
`.inboundfy/personas.md`, `.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md`
e `.inboundfy/pipeline.md`. Confira `inboundfy doctor` antes e depois.

## Entrada esperada

Pergunte nome e atividade da empresa, site, país, região, idioma, pessoas,
produtos, serviços, ofertas, endereços, contatos, redes sociais, fontes,
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
3. Preencha `inbound.md`, `voz.md`, `personas.md`, `proibicoes.md`,
   `dicionario.md`, `estrategia.md` e `pipeline.md` com respostas confirmadas.
4. Em `estrategia.md`, ofereça Blog, Email, LinkedIn, Instagram, Substack e
   YouTube. Marque apenas os canais escolhidos e rode `inboundfy project sync`.
5. Garanta pelo menos uma persona completa. Registre uma fonte para cada bloco
   factual e deixe perguntas abertas onde a resposta não chegou.
6. Quando os campos mínimos estiverem preenchidos, rode
   `inboundfy context ready --yes` e depois `inboundfy doctor --strict`.

## Saída

Deixe os sete arquivos de configuração, os três diretórios de produção, os
índices vazios, as pastas dos canais ativos e o bloco idempotente no arquivo de
instruções do projeto.

## Validação

O setup só está pronto quando o doctor encontra os arquivos, a estratégia tem
ao menos um canal marcado, `personas.md` tem uma persona completa e o estado
está `ready`. Confirme que nenhum arquivo do framework foi sobrescrito.

## Idempotência

Uma nova execução preserva respostas, índices, acervo, peças, calendário e
customizações. Atualize somente arquivos ausentes ou blocos administrados.
