---
name: inboundfy-estrategia
description: Define estratégia de inbound marketing, temas, canais, jornada, cadência, campanhas e reaproveitamento do acervo para um projeto.
---

# Estratégia de inbound marketing

Use para montar ou atualizar a direção editorial do projeto, incluindo
objetivos, canais, temas, campanhas, cadência, distribuição e calendário.

## Etapas internas

Esta skill concentra quatro etapas em `references/etapas/`: `00-briefing-cliente`,
`01-pesquisa-mercado`, `02-campanha` e `03-calendario`. O chamador informa a
etapa quando precisa retomar apenas uma parte do fluxo.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, todos os arquivos canônicos
de `.inboundfy/`, o catálogo de acervo e as bases editoriais relacionadas.
Consulte `.inboundfy/framework/` para o método e os templates ativos.

## Entrada esperada

Receba objetivo de negócio, oferta, personas, canais ativos, recursos,
cadência, período, acervos disponíveis e restrições. Se faltar um dado que
mude a direção, registre a pergunta no briefing.

## Fluxo

1. Conecte objetivo de negócio, oferta, persona, jornada e métrica.
2. Defina pilares editoriais e a função de cada canal: descoberta,
   consideração, relacionamento, conversão ou retenção.
3. Mapeie temas para perguntas, dores, provas, objeções e ofertas.
4. Selecione acervos e proponha mais de um uso somente quando cada uso tiver
   ângulo, formato e CTA próprios.
5. Monte campanha ou calendário com data, canal, persona, acervo, peça,
   estado, dependências e próximo passo.
6. Encaminhe oportunidades para `inboundfy-planejamento` e peças para
   `inboundfy-copy-redacao` ou especialista do canal.
7. Registre a proposta e aguarde aprovação quando houver mais de um caminho
   editorial materialmente diferente.

## Saída

Entregue plano estratégico, mapa de canais, pilares, oportunidades,
campanha, calendário ou briefing. Salve o artefato no diretório apropriado e
atualize os índices.

## Validação

Confirme alinhamento entre objetivo, persona, oferta, canal, acervo, cadência,
CTA e métrica. Nenhuma peça entra no calendário sem ID, caminho e estado.

## Responsabilidade do grupo

Relacione objetivo, público, oferta, canais, período e recursos. Entregue plano
ou calendário; copy final pertence à produção.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** estratégia
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Atualize o plano existente preservando itens aprovados. Uma nova oportunidade
precisa de novo ID ou referência explícita à peça que está sendo adaptada.
