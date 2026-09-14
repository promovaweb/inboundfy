---
name: inboundfy-anti-slop-codigo
description: Revisa código e documentação do CLI para remover complexidade sem função, tipos frouxos e comentários genéricos sem mudar comportamento.
---

# Anti-slop de código

Use somente na manutenção do próprio framework, scripts e integrações. Esta
skill não substitui a revisão editorial de conteúdo público.

## Contexto exigido

Consulte `.inboundfy/inbound.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, o `package.json`, o código
relacionado, testes e `.inboundfy/framework/` quando o projeto consumidor
estiver disponível. Preserve as regras de idioma, dicionário e documentação.

## Entrada esperada

Receba arquivo, mudança, erro, proposta de refatoração ou revisão de código.
Identifique comportamento atual, contratos públicos, testes e escopo.

## Fluxo

1. Entenda o caminho de entrada, saída, erros e persistência antes de editar.
2. Remova abstração sem uso, comentário que apenas narra a linha e duplicação
   sem ganho de manutenção.
3. Prefira tipos explícitos nas fronteiras, funções pequenas e validação na
   entrada. Não aceite `any`, cast ou `unknown` para esconder uma lacuna.
4. Evite cópias repetidas de acumuladores, parâmetros abertos e APIs reflexivas
   quando acesso tipado resolve o caso.
5. Preserve compatibilidade, segurança de caminho, escrita atômica e
   idempotência.
6. Atualize documentação e testes junto com o comportamento alterado.

## Saída

Entregue código revisado, testes atualizados, documentação alinhada e resumo
das alterações comportamentais.

## Validação

Execute typecheck, testes, validação do framework e lint disponível. Confira
que a segunda execução não produz alteração adicional.

## Idempotência

Não reescreva arquivos sem mudança semântica. Preserve APIs, IDs, caminhos e
dados do usuário.
