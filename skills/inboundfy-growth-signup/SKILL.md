---
name: inboundfy-growth-signup
description: Revisa cadastro e primeiro acesso com campos necessários, autenticação, estados, mensagens e eventos de conta criada. Use quando o pedido falar em signup, abandono de cadastro, verificação de email, convite de equipe ou primeiro login.
---

# Cadastro e primeiro acesso

Use para desenhar ou revisar a passagem entre intenção de cadastro, conta criada e primeira tarefa útil. Formulário de orçamento sem criação de conta pertence a `inboundfy-growth-cro`; orientação após a conta criada segue para `inboundfy-growth-onboarding`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Ausência de sentinela exige apresentar o alerta canônico do preflight e acionar `inboundfy-setup` antes de escrever.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/ofertas.md`, `.inboundfy/context/produtos.md`, `.inboundfy/context/integracoes.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md` e `.inboundfy/estrategia.md`. Consulte `.inboundfy/framework/`, páginas de origem, suporte, autenticação e regras de privacidade. Não altere controles de acesso para elevar conversão.

## Entrada esperada

Receba URLs, dispositivos prioritários, oferta de entrada, métodos de autenticação, campos atuais, verificação exigida, regra de conta existente e primeira tarefa de valor. Inclua dados por etapa, origem e dispositivo, erros conhecidos, prazo e equipe executora.

## Perguntas de diagnóstico

- O visitante sabe o que terá após criar conta e se haverá cobrança?
- Qual dado é indispensável antes do primeiro uso e qual pode ser pedido depois?
- O problema está no formulário, no email de verificação, no login ou na tarefa inicial?
- Uma pessoa convidada para uma equipe recebe o mesmo fluxo de quem cria uma empresa?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md). Percorra cadastro e primeiro acesso em celular e computador no ambiente autorizado, incluindo conta existente e convite.
2. Registre as etapas e a fonte de sucesso de cada uma. Separe visita, início, envio, conta criada, verificação, primeiro login e ativação.
3. Para cada campo, associe finalidade operacional, necessidade imediata, validação e etapa futura possível. Use [estados e verificação](references/estados-e-verificacao.md) para erros, acessibilidade e métodos de autenticação.
4. Defina proposta, ação principal, informação de preço/cartão e expectativa de próximo passo. Preserve termos necessários e permissão promocional como finalidades distintas.
5. Prepare telas e mensagens de estado: preenchimento, processamento, erro, email enviado, link expirado, conta existente e sucesso. Não revele informação de conta além do padrão de proteção aprovado pela equipe técnica.
6. Desenhe o primeiro uso com uma tarefa concreta e ajuda pertinente. Encaminhe eventos e deduplicação a `inboundfy-rastreamento-conversao`; associe conta criada à ativação sem transportar dados pessoais em UTMs.
7. Teste navegação por teclado, leitor de tela quando disponível, preenchimento automático, falha de rede, repetição e retomada. Planeje comparação com `inboundfy-experimentacao` e revise textos com `ESCRITA.md` e `inboundfy-copy-editor`.
8. Entregue brief técnico, achados reproduzíveis, métrica e próxima ação a produto. Após criar a conta, entregue a `inboundfy-growth-onboarding` persona e papéis, oferta, acesso liberado, tarefa inicial, eventos já confirmados e pendências; preserve o marco se já ocorreu.

## Saída

Salve `cadastro-<id>.md` no diretório de campanha ou produto já registrado, com mapa de etapas, justificativa de campos, telas, textos, eventos, casos de aceite e plano de leitura. Preserve ID, grupo growth, público, canal, oferta, fontes, estado, pendências, responsável técnico e próxima ação.

## Validação

- O cadastro explica oferta, cobrança e próximo passo antes do envio.
- Cada campo tem finalidade, necessidade imediata e validação descritas.
- Conta criada e ativação possuem confirmações distintas e eventos únicos.
- Erros preservam dados seguros e permitem nova tentativa.
- Convite, conta existente, link expirado e falha de email têm tratamento definido.
- A pessoa consegue operar o fluxo com teclado e foco previsível.
- Remover controles de segurança não aparece como solução de conversão.

## Responsabilidade do grupo

Transforme intenção de cadastro em especificação de conta criada e primeiro acesso; entregue ao onboarding a tarefa inicial e as pendências. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Use ID do fluxo e versão de telas. Preserve campos e textos aprovados até revisão solicitada. Reenvio não cria nova conta; convite mantém a equipe de destino. Nova rodada compara a mesma definição de evento e registra qualquer mudança de contagem.
