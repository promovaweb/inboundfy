---
name: inboundfy-processar-acervo
description: "Limpa o bruto.md de um item do acervo e grava processado.md com grafia do glossário, proibições aplicadas, alterações registradas e auditoria A1, sem tocar no original. Use quando a pessoa pedir para limpar, revisar ou processar uma transcrição, áudio transcrito ou texto copiado já registrado no acervo."
---

# Processar acervo

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
artefato. O grupo desta skill é **capacidade**.

## Contexto exigido

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte
`.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes de continuar.

Leia [REFERENCIA.md](REFERENCIA.md), [cadência anti-slop](../inboundfy-anti-slop/ETAPAS.md), `bruto.md`, `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/publico.md`, `.inboundfy/context/glossario.md`,
`.inboundfy/context/proibicoes.md` e as regras em `.inboundfy/framework/ESCRITA.md`.

## Entrada esperada

O ID de um item registrado por `inboundfy-acervo`, com
`acervo/<id>-<data>-<slug>/bruto.md` gravado. O bruto é a única fonte de
transcrição. Fontes locais relacionadas servem apenas para esclarecer grafia e
contexto já registrado.

## Fluxo

Antes da passagem linha a linha, leia a tabela de tratamento e o procedimento de [REFERENCIA.md](REFERENCIA.md). Registre forma recebida, forma aplicada e motivo na tabela de alterações do template. Preço relatado continua histórico até conferência na oferta vigente.

1. Preserve a ordem das ideias e os fatos do material.
2. Remova ruído de cópia, caracteres quebrados, repetições acidentais e slop
   estrutural sem inventar afirmações.
3. Aplique formas aprovadas em `context/glossario.md` e registre novas correções apenas
   depois da confirmação do usuário.
4. Consulte `proibicoes.md` e remova ou marque trechos incompatíveis.
5. Use `inboundfy-anti-slop` como apoio de limpeza, sem substituir a voz ou a
   persona configuradas.
6. Escreva `processado.md` e execute `inboundfy-anti-slop` no marco A1. Salve o
   relatório em `auditorias/anti-slop/01-processado.md`.
7. Depois do registro A1, entregue o ID, `bruto.md` e `processado.md` para
   `inboundfy-extrair-faq`, que grava `faq.md`.

## Saída

`processado.md` com texto limpo, alterações registradas, lacunas e
encaminhamento, mais `auditorias/anti-slop/01-processado.md`. O bruto
permanece igual. A FAQ pertence a `inboundfy-extrair-faq`.

## Validação

Confira a checklist numerada de [REFERENCIA.md](REFERENCIA.md): compare bruto
e processado, revise cada remoção, confirme termos do glossário e o registro A1
e liste lacunas em vez de preenchê-las com suposição.

## Responsabilidade do grupo

Trabalhe a origem, suas versões derivadas, perguntas, fontes e relações. O bruto permanece intacto e cada derivado aponta para ele.

## Idempotência

Uma nova execução parte do bruto e substitui somente o `processado.md`
gerenciado. Avise que a FAQ precisa ser recalculada por `inboundfy-extrair-faq`. Não acrescente correções acumuladas sem registrá-las.
