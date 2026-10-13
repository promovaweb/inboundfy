---
name: inboundfy-contexto-depoimentos
description: >
  Registra depoimentos de clientes em context/depoimentos.json, com nome,
  cargo, empresa, texto literal, foto e consentimento de uso. Use para
  guardar prova social de forma rastreável antes de qualquer peça citá-la.
---

# Inboundfy Contexto; Depoimentos

Mantém o repositório de depoimentos de clientes que outras skills usam como
prova social em landing pages, redes sociais, e-mail, vendas e cases. Não
escreve peça pública; registra a fala literal do cliente para que
`inboundfy-especialista-*`, `inboundfy-growth-*` e `inboundfy-enablement-vendas`
citem com fonte e consentimento confirmados.

## Escopo

Cobre exclusivamente `context/depoimentos.json`. Não cobre pessoas que falam
pela própria marca (`inboundfy-contexto-institucional`) nem persona de
público-alvo (`inboundfy-contexto-publico`); este arquivo registra a voz de
clientes reais, já convertidos, sobre a experiência com a oferta.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no início. Na
ausência de qualquer um, informe: "O setup do Inboundfy ainda não foi concluído
ou precisa de reparo neste projeto. Execute `inboundfy-setup` para preparar os
arquivos de apoio." Encerre sem criar ou alterar artefatos.

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

Nenhum outro arquivo é pré-requisito. `context/produtos.md` e
`context/servicos.md` ajudam a ligar o depoimento à oferta mencionada.

## Entrada esperada

Um depoimento novo (texto, áudio transcrito, review público, mensagem,
e-mail), uma foto do cliente, ou uma correção, remoção ou atualização de
consentimento de um depoimento já registrado.

## Fluxo

1. Leia `context/depoimentos.json` atual para não duplicar um depoimento já
   cadastrado para a mesma pessoa e empresa.
2. Extraia nome, cargo (quando houver), empresa, o texto literal do
   depoimento e o caminho ou URL da foto. Nunca reescreva ou resuma a fala do
   cliente: o campo `depoimento` guarda a citação exatamente como recebida.
3. Pergunte e registre o consentimento de uso: quem autorizou, quando, e em
   quais canais o depoimento pode circular (`canaisAutorizados`). Sem
   consentimento confirmado, grave `consentimento: "pendente"` e avise que o
   depoimento não pode ser usado em peça pública até a confirmação.
4. Registre a fonte (entrevista, review público, e-mail, formulário) e a data
   da coleta.
5. Quando o depoimento citar um produto, plano ou resultado numérico, ligue
   esse dado a `context/produtos.md` ou `context/servicos.md` quando existir
   o arquivo correspondente.
6. Grave a entrada com um `id` estável (`depo-0001`, incremental) na lista
   `depoimentos` do JSON, preservando as entradas existentes.
7. Nunca remova um depoimento cadastrado sem pedido explícito do usuário.

## Saída

Atualização de `context/depoimentos.json`.

## Validação

- O texto do depoimento é citação literal, não paráfrase.
- `consentimento` e `canaisAutorizados` estão preenchidos ou marcados como
  pendentes.
- Nome, empresa e fonte estão presentes; cargo e foto são registrados quando
  disponíveis.
- Nenhum depoimento existente foi removido ou sobrescrito sem pedido.
- `id` é único e sequencial dentro do arquivo.

## Responsabilidade do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos confirmados, preserve seções e pergunte antes de expandir o alcance.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** contexto
- **entrada:** resposta do usuário ou arquivo canônico do domínio;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo de contexto atualizado e registro da alteração;
- **handoff:** setup, orquestrador ou outra skill que dependa desse contexto.

## Idempotência

Atualiza apenas o depoimento indicado pelo usuário na execução atual. Não
reescreve o arquivo inteiro nem normaliza entradas que não foram mencionadas.
