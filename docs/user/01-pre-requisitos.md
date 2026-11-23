# Pré-requisitos

Antes de instalar, confirme:

- o binário `inboundfy` está instalado (`inboundfy --version`), pelo npm
  (`npm install -g @promovaweb/inboundfy`, que pede Node.js 18.17 ou mais
  novo) ou pelo executável da GitHub Release para Linux, macOS ou Windows;
- o agente consegue carregar skills no formato `SKILL.md`;
- o projeto possui uma raiz bem definida;
- existe um diretório de skills ativo ou o usuário pode indicar um;
- o projeto permite criar `.inboundfy/`, `acervo/`, `canais/` e `calendario/`;
- as instruções existentes em `AGENTS.md` ou `CLAUDE.md` podem ser
  preservadas e complementadas por um bloco delimitado.

Não é necessário instalar servidor ou banco de dados. O binário leva dentro
dele o framework, as skills e os templates da versão; os dados do projeto
ficam em arquivos Markdown e JSON versionáveis. Serviços de imagem e pesquisa
só exigem credenciais quando uma skill específica os usa.

## Antes de executar o setup

1. Abra o agente na raiz do projeto consumidor.
2. Confira o binário com `inboundfy --version`.
3. Preserve mudanças locais do projeto.
4. Peça ao agente para usar `inboundfy-setup`; ela conduzirá o binário.

Se `.claude/skills/` e `.codex/skills/` existirem ao mesmo tempo, o setup
deve perguntar qual diretório está ativo. Ele não instala em ambos por
suposição.

## O que ter em mãos

O setup consegue começar com poucas informações. Separe:

- uma frase que explique o que a empresa ou o profissional faz;
- três palavras para descrever a voz;
- um texto curto que já represente essa voz, quando existir;
- o primeiro produto ou serviço que será usado;
- o primeiro canal no qual você quer produzir.

Documentos existentes como `README.md`, `PRODUCT.md`, `BRAND.md` e `COPY.md`
podem fornecer parte dessas respostas. O setup cataloga os arquivos e aguarda
a sua confirmação antes de gravar fatos em `.inboundfy/context/`.

## Como saber se pode continuar

Continue quando estiver na raiz correta, souber qual diretório de skills está
ativo e puder identificar o negócio, a voz, um produto ou serviço e um canal.
Se uma dessas definições ainda não existir, você pode iniciar o setup, mas a
produção ficará suspensa até essas informações mínimas serem confirmadas.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | referência |
| Escopo | condições necessárias antes da instalação |
| Autoridade | contrato executável de `inboundfy-setup` |
