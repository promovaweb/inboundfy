---
name: inboundfy-base-editorial
description: Constrói a base editorial de um acervo a partir do material processado, pesquisa, FAQ e fontes relacionadas para orientar futuras peças de marketing.
---

# Base editorial

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **base**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), `bruto.md`, `processado.md`, `faq.md`,
`pesquisa.md`, `.inboundfy/context/empresa.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`
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
6. Execute `inboundfy-anti-slop` no marco A2 depois de salvar a base. Confira
   resumos, frases, benefícios, relações e hipóteses; registre o ciclo em
   `auditorias/anti-slop/02-base-editorial.md`.

## Saída

Uma base editorial ampliada, útil como insumo para estratégia, brief, redação,
SEO e calendário.

## Validação

Cada afirmação importante aponta para o bruto, o processado ou uma fonte de
pesquisa. Lacunas continuam explícitas e não viram fatos. Voz, persona,
proibições, dicionário e o ciclo A2 do anti-slop precisam ser conferidos antes
da entrega.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** base
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Reprocessar atualiza a mesma base e mantém relações já confirmadas.
