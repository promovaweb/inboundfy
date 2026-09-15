---
name: inboundfy-aprendizado
description: Registra sugestões, correções, alinhamentos e dicas do usuário, confirma o alcance e transforma aprendizados aprovados em regras reutilizáveis do projeto.
---

# Aprendizado do projeto

Use esta skill quando o usuário orientar, corrigir, sugerir, alinhar ou explicar
uma preferência para o trabalho atual ou para usos futuros. O registro fica em
`.inboundfy/context/aprendizado.md`, separado das regras do framework.

## Arquitetura de execução

Ela confirma as sentinelas antes de criar ou alterar qualquer artefato. O trabalho segue o contrato compartilhado e usa a referência
específica desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **contexto**.

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/context/aprendizado.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/publico.md` e o arquivo alterado.
Carregue também `.inboundfy/framework/`, `inboundfy-setup`, o brief, o acervo,
o canal e a validadora quando existirem.

## Entrada esperada

Receba a mensagem do usuário, o arquivo relacionado, a alteração desejada, o
tipo de orientação e o alcance. Aceite também correções feitas durante a
revisão de uma peça.

## Fluxo

1. Preserve a orientação com o texto recebido, data, arquivo relacionado e
   ID sequencial `AP-0001`.
2. Classifique o registro como `sugestão`, `correção`, `alinhamento` ou `dica`.
3. Separe a orientação literal da regra operacional interpretada. Não atribua
   ao usuário uma regra maior do que a mensagem permite.
4. Quando o alcance não estiver claro, apresente três opções: somente esta
   peça, este canal ou persona, ou todo o projeto. Coloque a opção mais local
   primeiro e permita resposta livre.
5. Grave o registro como `proposta` até o alcance ser confirmado. Uma instrução
   explícita como “use sempre” ou “vale para o projeto” já informa o alcance.
6. Aplique a orientação confirmada à peça atual. Para regra de grafia, voz ou
   proibição com alcance de projeto, atualize também o arquivo canônico e
   registre o caminho no aprendizado.
7. Para preferência de processo, estrutura, estratégia ou formato, mantenha a
   regra no aprendizado, sem alterar os arquivos normativos.
8. Execute `inboundfy-anti-slop` e a validadora aplicável após a alteração.
   Se a orientação mudar fonte, voz, persona, dicionário ou proibição, refaça
   os marcos posteriores afetados.
9. Em toda execução futura, leia os registros `confirmada` ou `aplicada` cujo
   alcance combine com a peça, o canal, a persona ou o projeto.

## Saída

Entregue `.inboundfy/context/aprendizado.md` atualizado, a peça corrigida quando
aplicável, os arquivos canônicos alterados, o alcance confirmado, o ID do
registro e a validação executada.

## Validação

- [ ] A orientação original foi preservada.
- [ ] O tipo, o alcance, a fonte e o ID estão preenchidos.
- [ ] Sugestão sem confirmação continua fora das regras gerais.
- [ ] A alteração foi aplicada somente ao alcance confirmado.
- [ ] Voz, persona, dicionário, proibições, anti-slop e canal foram conferidos.
- [ ] O histórico anterior permaneceu disponível.

## Responsabilidade do grupo

Mantenha o aprendizado do projeto separado dos arquivos distribuídos pelo
framework. Registre cada orientação e encaminhe mudanças de voz, grafia ou
proibição para o arquivo canônico correspondente.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** orientação do usuário e arquivo relacionado;
- **transformação:** registro, confirmação de alcance e aplicação;
- **saída:** aprendizado atualizado e contexto canônico quando aplicável;
- **handoff:** peça, validadora, voz, dicionário, proibições ou orquestrador.

## Idempotência

Repetir a execução sobre a mesma orientação deve localizar o ID existente,
preservar a aplicação e registrar somente uma nova versão quando houver
alteração real. Uma nova orientação recebe outro ID, mesmo quando substituir
uma regra anterior.
