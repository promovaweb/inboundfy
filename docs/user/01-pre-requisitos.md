# Pré-requisitos

Antes de instalar, confirme:

- Node.js 22.14.0 ou superior está disponível (`node --version`);
- o projeto possui acesso ao registro público do npm;
- o agente consegue carregar skills no formato `SKILL.md`;
- o projeto possui uma raiz bem definida;
- existe um diretório de skills ativo ou o usuário pode indicar um;
- o projeto permite criar `.thothfy/`, `brainstorms/` e `content/`;
- as instruções existentes em `AGENTS.md` ou `CLAUDE.md` podem ser
  preservadas e complementadas por um bloco delimitado.

Não é necessário instalar servidor ou banco de dados. O comando `npx` baixa o
CLI no momento do uso. Serviços de imagem e pesquisa podem exigir credenciais
apenas quando uma skill específica os usar.

## Antes de executar o setup

1. Abra o agente na raiz do projeto consumidor.
2. Confira o CLI com `npx @promovaweb/thothfy@latest --version`.
3. Preserve mudanças locais do projeto.
4. Peça ao agente para usar `thothfy-setup`; ela conduzirá o CLI.

Se `.claude/skills/` e `.codex/skills/` existirem ao mesmo tempo, o setup
deve perguntar qual diretório está ativo. Ele não instala em ambos por
suposição.

## O que ter em mãos

O setup consegue começar com poucas informações. Separe:

- uma frase que explique o que a empresa ou a pessoa faz;
- três palavras para descrever a voz;
- um texto curto que já represente essa voz, quando existir;
- o primeiro produto ou serviço que será usado;
- o primeiro canal no qual você quer produzir.

Documentos existentes como `README.md`, `PRODUCT.md`, `BRAND.md` e `COPY.md`
podem fornecer parte dessas respostas. O setup cataloga os arquivos e pede
confirmação antes de gravar fatos no contexto.

## Como saber se pode continuar

Continue quando estiver na raiz correta, souber qual diretório de skills está
ativo e puder identificar o negócio, a voz, um produto ou serviço e um canal.
Se uma dessas decisões ainda não existir, você pode iniciar o setup, mas a
produção ficará suspensa até o contexto mínimo ser confirmado.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | referência |
| Escopo | condições necessárias antes da instalação |
| Autoridade | contrato executável de `thothfy-setup` |
