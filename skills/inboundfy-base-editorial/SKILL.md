---
name: inboundfy-base-editorial
description: Constrói a base editorial de um acervo a partir do material processado, pesquisa, FAQ e fontes relacionadas para orientar futuras peças de marketing.
---

# Base editorial

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/inbound.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `bruto.md`, `processado.md`, `faq.md`,
`pesquisa.md`, `.inboundfy/inbound.md`, `.inboundfy/voz.md`,
`.inboundfy/personas.md`, `.inboundfy/proibicoes.md`, `.inboundfy/dicionario.md`
e índices do projeto. Use `inboundfy-anti-slop` antes de concluir o arquivo.

## Entrada esperada

Um item completo do acervo. Use outras bases editoriais e peças finais apenas
para relacionar assuntos, confirmar continuidade e apontar diferenças.

## Fluxo

1. Registre título, resumo, núcleo, intenção, público, persona possível, atores,
   fatos, frases fortes, exemplos, objeções, consequências, perguntas e lacunas.
2. Separe fato recebido, informação pesquisada, hipótese editorial e sugestão
   de uso. Não trate hipótese como fato.
3. Relacione fontes internas e externas por caminho ou URL.
4. Descreva formatos possíveis e cuidados para preservar o sentido.
5. Escreva `base-editorial.md` com links para todos os arquivos do acervo.

## Saída

Uma base editorial ampliada, útil como insumo para estratégia, brief, redação,
SEO e calendário.

## Validação

Cada afirmação importante aponta para o bruto, o processado ou uma fonte de
pesquisa. Lacunas continuam explícitas e não viram fatos. Voz, persona,
proibições, dicionário e anti-slop precisam ser conferidos antes da entrega.

## Idempotência

Reprocessar atualiza a mesma base e mantém relações já confirmadas.
