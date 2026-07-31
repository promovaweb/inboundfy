# Guia do usuário do Thothfy

<!-- markdownlint-disable MD033 -->
<p align="center">
  <picture>
    <source srcset="../../brand/logo/icon.svg" type="image/svg+xml">
    <img src="../../brand/logo/icon.png" alt="Logo do Thothfy" width="128">
  </picture>
</p>
<!-- markdownlint-enable MD033 -->

Este guia acompanha uma instalação do Thothfy e ensina a operar o framework
sem exigir conhecimento da implementação das skills.

## Leia online ou como ebook

Os capítulos deste diretório também formam o
**Thothfy — Guia completo do usuário**. O PDF preserva a diagramação para
leitura, compartilhamento e impressão. O EPUB permite ajustar fonte e tamanho
no leitor digital.

- [Baixe o PDF](../../ebook/Thothfy-Guia-do-Usuario-v1.0.0.pdf).
- [Baixe o EPUB](../../ebook/Thothfy-Guia-do-Usuario-v1.0.0.epub).
- [Consulte a edição e os hashes](../../ebook/README.md).

## Percurso completo

Leia na ordem:

1. [Visão geral e escolha do fluxo](00-visao-geral.md)
2. [Pré-requisitos](01-pre-requisitos.md)
3. [Instalação e preparação](02-instalacao.md)
4. [Contexto, fontes e marca](03-contexto-e-marca.md)
5. [Primeiro brainstorm](04-primeiro-brainstorm.md)
6. [Primeira campanha](05-primeira-campanha.md)
7. [Primeiro pacote editorial](06-primeiro-pacote.md)
8. [Peça avulsa](07-peca-avulsa.md)
9. [Validação e correções](08-validacao-e-correcoes.md)
10. [Atualização e reparo](09-atualizacao-e-reparo.md)
11. [Solução de problemas](10-solucao-de-problemas.md)

Os [exemplos executáveis](../../examples/README.md) mostram relatórios,
reprovações, correções e aprovações preenchidos com dados fictícios.

## Três comandos conceituais

- `thothfy-setup`: instala, atualiza ou repara o ambiente.
- `thothfy-brainstorm`: desenvolve uma ideia até uma base pesquisada.
- `thothfy-iniciar`: escolhe e executa o fluxo de produção completo.

Uma skill especialista pode ser chamada diretamente quando já existe um brief
claro para uma única peça.

## Um exemplo de ponta a ponta

Imagine que você quer transformar uma anotação sobre manutenção preventiva em
um artigo e um post. Depois do setup, o percurso fica assim:

1. Você entrega a anotação a `thothfy-brainstorm`.
2. O brainstorm preserva a ideia, pesquisa o tema e registra oportunidades.
3. `thothfy-iniciar` abre um pacote e prepara um brief para cada peça.
4. As especialistas produzem o artigo e o post.
5. Cada validadora confronta sua peça com o brief, o contexto e a marca.
6. Uma reprovação volta à especialista com a correção necessária.
7. A auditoria libera somente as versões aprovadas.

Você acompanha esse trabalho pelos arquivos criados. A resposta do agente
resume o resultado, mas os artefatos do projeto são a evidência que permite
retomar, revisar e auditar a execução.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | percurso completo do usuário do Thothfy |
| Autoridade | interfaces públicas das skills e metodologia instalada |
