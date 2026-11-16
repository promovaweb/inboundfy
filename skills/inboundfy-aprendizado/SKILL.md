---
name: inboundfy-aprendizado
description: Registra sugestões, correções, alinhamentos e dicas da pessoa com o texto literal, confirma até onde valem (peça, canal ou projeto) e transforma o que foi aprovado em regra reutilizável no contexto. Use quando a pessoa disser não faça mais isso, sempre use, prefiro, corrija, a partir de agora ou anote para as próximas.
---

# Aprendizado do projeto

Use esta skill quando o usuário orientar, corrigir, sugerir, alinhar ou explicar
uma preferência para o trabalho atual ou para usos futuros. O registro fica em
`.inboundfy/context/aprendizado.md`, separado das regras do framework.

A skill guarda a frase do usuário, separa o que ele disse da regra que o
agente extraiu, pergunta até onde a regra vale e só então aplica. Ela não
grava fatos de negócio (preço, endereço, produto): esses vão para o arquivo de
contexto do domínio pela `inboundfy-contexto-*` responsável.

## Arquitetura de execução

Confirme as sentinelas antes de criar ou alterar qualquer artefato.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **contexto**.

## Quando usar e quando não usar

| Mensagem do usuário | Ação |
| --- | --- |
| "Troca 'cliente' por 'tutor' aqui" | Use: correção, alcance a confirmar. |
| "Sempre que falar de prazo, cite dias úteis" | Use: alinhamento com alcance explícito de projeto. |
| "Talvez fique melhor com uma lista" | Use: sugestão, fica `proposta` até confirmar. |
| "No LinkedIn a gente posta de terça" | Use: dica de processo, sem mudar arquivo normativo. |
| "O plano Pro agora custa R$ 89" | Não use. É fato de oferta: acione `inboundfy-contexto-oferta`. |
| "Nossa nova persona é o gestor de clínica" | Não use. Acione `inboundfy-contexto-publico`. |
| Pedido de nova peça sem orientação de forma | Não use. Siga para a produção. |

## Contexto exigido

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`, `.inboundfy/context/empresa.md`,
`.inboundfy/context/aprendizado.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/context/publico.md` e o arquivo alterado.
Carregue também `.inboundfy/framework/`, `inboundfy-setup`, o brief, o acervo,
o canal e a validadora quando existirem.

Se `.inboundfy/context/aprendizado.md` não existir, pare e acione
`inboundfy-setup`, que restaura o template sem apagar nada.

## Entrada esperada

Receba a mensagem do usuário, o arquivo relacionado, a alteração desejada, o
tipo de orientação e o alcance. Aceite também correções feitas durante a
revisão de uma peça.

## Perguntas de diagnóstico

1. A mensagem é forma (palavra, tom, estrutura, processo) ou fato de negócio?
   Fato vai para a skill de contexto do domínio.
2. Ela já existe como registro? Procure por palavra-chave e por arquivo em
   `aprendizado.md` antes de criar um ID.
3. O usuário disse o alcance ("sempre", "neste post", "no Instagram")?
4. A orientação contradiz um registro `confirmada` ou `aplicada`, ou uma regra
   de `marca-voz.md`, `glossario.md` ou `proibicoes.md`?
5. A mudança afeta peças já aprovadas ou publicadas?

## Fluxo

1. Preserve a orientação com o texto recebido, data, arquivo relacionado e
   ID sequencial `AP-0001`.
2. Classifique o registro como `sugestão`, `correção`, `alinhamento` ou `dica`,
   usando [references/classificacao-e-alcance.md](references/classificacao-e-alcance.md).
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
8. Se a nova orientação contradiz registro anterior, siga
   [references/aplicacao-e-conflitos.md](references/aplicacao-e-conflitos.md):
   arquive o anterior com remissão ao novo ID, nunca apague.
9. Execute `inboundfy-anti-slop` e a validadora aplicável após a alteração.
   Se a orientação mudar fonte, voz, persona, dicionário ou proibição, refaça
   os marcos posteriores afetados. Peça aprovada volta para `revisao` pelo
   `inboundfy-pipeline`.
10. Em toda execução futura, leia os registros `confirmada` ou `aplicada` cujo
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
- [ ] Nenhum fato de negócio foi gravado como aprendizado.

## Idempotência

Repetir a execução sobre a mesma orientação deve localizar o ID existente,
preservar a aplicação e registrar somente uma nova versão quando houver
alteração real. Uma nova orientação recebe outro ID, mesmo quando substituir
uma regra anterior.

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
