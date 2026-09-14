---
name: inboundfy-brainstorm-03-sintese
description: >
  Fase 03 do brainstorm. Consolida ideia, entrevista, arquivos de context/ e
  pesquisa no modelo templates/brainstorm.md, definindo tese, recorte,
  argumentos, objeções, limites, ativos e oportunidades distintas para os
  canais ativos.
---

# Inboundfy Brainstorm 03; Síntese

Transforma o material reunido em base editorial utilizável. Não produz post,
artigo, email ou roteiro.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos. Depois do
preflight, leia o catalogo e os Markdown relevantes para a tarefa.

## Contexto exigido

- `context/marca-voz.md`, `context/publico.md` e `context/canais.md`.
- `context/proibicoes.md` e `context/estruturas-proibidas.md`.
- Arquivos de produto, serviço, oferta ou pessoa citados no brainstorm.
- `ESCRITA.md`, para redigir parágrafos naturais e verificáveis.

## Entrada esperada

`brainstorm.md` com entrevista e pesquisa concluídas.

## Fluxo

1. Ler o arquivo inteiro, `ESCRITA.md` e o exemplo de `REFERENCIA.md`.
2. Formular uma tese defendível, um recorte e um limite apoiados pelo
   material registrado.
3. Desenvolver argumentos com mecanismo, prova, exemplo e consequência.
4. Responder objeções reais sem inventar prova social ou resultado.
5. Extrair ativos editoriais reutilizáveis.
6. Propor até cinco oportunidades para canais ativos. Cada oportunidade deve
   ter ângulo próprio e apontar os ativos usados.
7. Registrar voz e proibições efetivamente aplicáveis.
8. Marcar o status como `em-validacao` e encaminhar para
   `inboundfy-brainstorm-04-validacao`.

## Saída

O `brainstorm.md` completamente preenchido pelo modelo canônico.

## Validação

- Tese, recorte, limite e audiência são específicos.
- Argumentos possuem apoio no próprio arquivo.
- Oportunidades não repetem a mesma abertura em canais diferentes.
- Nenhum canal sem ativo suficiente recebeu uma peça.

## Idempotência

Nova síntese preserva ideia, respostas e fontes; atualiza apenas as seções
derivadas e registra a execução no histórico.
