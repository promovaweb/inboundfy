---
name: inboundfy-processar-acervo
description: Processa um material bruto com a configuração do projeto, remove ruído editorial, aplica o dicionário e prepara FAQ sem alterar a fonte original.
---

# Processar acervo

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `bruto.md`, `.inboundfy/voz.md`,
`.inboundfy/personas.md`, `.inboundfy/dicionario.md`,
`.inboundfy/proibicoes.md` e as regras em `.inboundfy/framework/ESCRITA.md`.

## Entrada esperada

Um ID do acervo recebido. O texto bruto é a única fonte de transcrição. Use
fontes locais relacionadas apenas para esclarecer grafia e contexto já
registrado.

## Fluxo

1. Preserve a ordem das ideias e os fatos do material.
2. Remova ruído de cópia, caracteres quebrados, repetições acidentais e slop
   estrutural sem inventar afirmações.
3. Aplique formas aprovadas em `dicionario.md` e registre novas correções apenas
   depois da confirmação do usuário.
4. Consulte `proibicoes.md` e remova ou marque trechos incompatíveis.
5. Passe o texto pelo `inboundfy-anti-slop` como filtro de qualidade, sem
   substituir a voz ou a persona configuradas.
6. Escreva `processado.md` e encaminhe o item para `inboundfy-extrair-faq`,
   que cria `faq.md` com perguntas sobre cada parágrafo,
   fato, ator, condição, consequência, exemplo e lacuna.

## Saída

`processado.md` contém o texto limpo e `faq.md` contém perguntas, respostas
localizadas no material e perguntas sem resposta. O bruto permanece igual.

## Validação

Compare bruto e processado, revise cada remoção, confirme termos do dicionário
e liste lacunas em vez de preenchê-las com suposição.

## Idempotência

Uma nova execução parte do bruto e substitui somente o processado e o FAQ
gerenciados. Não acrescente correções acumuladas sem registrá-las.
