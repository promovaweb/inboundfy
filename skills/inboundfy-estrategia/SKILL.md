---
name: inboundfy-estrategia
description: Define estratégia de inbound marketing, temas, canais, jornada, cadência, campanhas e reaproveitamento do acervo para um projeto.
---

# Estratégia de inbound marketing

Use para montar ou atualizar a direção editorial do projeto, incluindo
objetivos, canais, temas, campanhas, cadência, distribuição e calendário.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
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
   `inboundfy-copywriting` ou especialista do canal.
7. Registre a proposta e aguarde aprovação quando houver mais de um caminho
   editorial materialmente diferente.

## Saída

Entregue plano estratégico, mapa de canais, pilares, oportunidades,
campanha, calendário ou briefing. Salve o artefato no diretório apropriado e
atualize os índices.

## Validação

Confirme alinhamento entre objetivo, persona, oferta, canal, acervo, cadência,
CTA e métrica. Nenhuma peça entra no calendário sem ID, caminho e estado.

## Idempotência

Atualize o plano existente preservando itens aprovados. Uma nova oportunidade
precisa de novo ID ou referência explícita à peça que está sendo adaptada.
