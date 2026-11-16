---
name: inboundfy-anti-slop-codigo
description: Revisa código, scripts, integrações e documentação técnica do Inboundfy para remover abstração sem uso, tipos frouxos, casts e comentários que só narram a linha, sem mudar o comportamento. Use quando a pessoa pedir refatoração, limpeza, revisão de código do CLI ou disser que o código está inchado, confuso ou com cara de gerado.
---

# Anti-slop de código

Use somente na manutenção do próprio framework, scripts e integrações. A
revisão editorial de conteúdo público fica com `inboundfy-anti-slop`.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de criar ou alterar artefatos. Se faltar um deles, informe: "O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio." Encerre sem escrever. Após a confirmação, leia as fontes locais relevantes e `.inboundfy/context/empresa.md`.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **qualidade**.

## Contexto exigido

- `AGENTS.md`, `package.json`, o código relacionado, seus chamadores e testes.
- `.inboundfy/framework/` quando o projeto consumidor estiver disponível. Sem
  instalação ou configuração completa, acione `inboundfy-setup`.
- Regras de idioma, dicionário e documentação do repositório.

## Entrada esperada

Arquivo, mudança, erro, proposta de refatoração ou pedido de revisão de
código, vindo da pessoa ou encaminhado por `inboundfy`. Identifique
comportamento atual, contratos públicos, testes e escopo.

## Fluxo

1. Leia o diagnóstico e o procedimento de [REFERENCIA.md](REFERENCIA.md) antes
   de editar.
2. Descreva o contrato atual: entrada, saída, erros e persistência.
3. Remova abstração sem uso, comentário que apenas narra a linha e duplicação
   sem ganho de manutenção.
4. Use tipos explícitos nas fronteiras, funções pequenas e validação na
   entrada. Recuse `any` ou cast para esconder lacuna. Mantenha `unknown` na
   entrada externa até a validação.
5. Troque cópias repetidas de acumuladores, parâmetros abertos e APIs
   reflexivas por acesso tipado quando ele resolve o caso.
6. Preserve compatibilidade, segurança de caminho, escrita atômica e
   idempotência.
7. Atualize documentação e testes junto com o comportamento alterado.
8. Preencha o relatório técnico de [REFERENCIA.md](REFERENCIA.md) só com
   comandos realmente executados e contratos preservados.

## Saída

Código revisado, testes atualizados, documentação alinhada e relatório com as
alterações de comportamento (ou a confirmação de que não houve).

## Validação

- Typecheck, testes, `node scripts/validar-framework.mjs` e lint disponível
  executados, com resultado registrado.
- A segunda execução não produz alteração adicional.
- Nenhum log novo expõe token, variável secreta ou conteúdo de cliente.

## Responsabilidade do grupo

Faça uma revisão específica de qualidade. Separe achado literal, semântico e estrutural e só libere após nova leitura integral.

## Idempotência

Não reescreva arquivos sem mudança semântica. Preserve APIs, IDs, caminhos e
dados do usuário.
