# FAQ como mapa de respostas e lacunas

A FAQ registra o que o material responde e quais perguntas precisam de pesquisa ou confirmação. Ela não é uma lista promocional de perguntas que a empresa gostaria de receber.

## Diagnóstico da cobertura

Pergunte quem faz a ação, qual objeto muda, como a operação funciona, qual condição precisa existir e qual consequência foi observada. Uma pergunta só entra se trouxer uma resposta útil ou uma lacuna que altere o uso editorial.

| Situação na origem | Estado da resposta | Ação |
| --- | --- | --- |
| Resposta completa com localização | respondida | Copiar o sentido sem ampliar |
| Parte da resposta disponível | parcial | Separar o trecho conhecido da parte ausente |
| Duas afirmações incompatíveis | conflitante | Registrar as duas origens |
| Nenhuma resposta localizada | pendente | Escrever “não informado” e a próxima fonte |

## Extração por unidade de sentido

1. Leia bruto e processado. Numere os parágrafos ou preserve marcas temporais existentes.
2. Para cada unidade, busque perguntas sobre definição, agente, operação, condição, medida, prazo, consequência e exceção.
3. Escreva a pergunta com vocabulário da persona. Evite pergunta ampla que exigiria informação fora do material.
4. Responda somente com o conteúdo localizado. Use citação curta ou paráfrase fiel e informe o arquivo de origem.
5. Classifique o estado. Uma resposta parcial não vira respondida apenas por ter texto.
6. Agrupe perguntas por tema. Una sinônimos que pedem a mesma resposta; preserve perguntas com condições distintas.
7. Feche com lacunas ordenadas pelo efeito na produção. Leve as verificáveis externamente para pesquisa e as internas para o responsável do projeto.

## Template de faq.md

```markdown
---
id: "<id>"
entrada: [bruto.md, processado.md]
estado: revisao
---
# Perguntas sobre <tema>

## <Tema>

### Q01. <Pergunta específica>

**Resposta:** <conteúdo localizado ou não informado>
**Origem:** <arquivo, seção e parágrafo ou marca temporal>
**Estado:** respondida | parcial | conflitante | pendente
**Observação:** <limite da resposta e fonte necessária>

## Lacunas para a próxima etapa

| Pergunta | Quem pode responder | Efeito na produção |
| --- | --- | --- |
| <ID> | <responsável ou fonte> | <afirmação que depende da resposta> |
```

## Exemplo completo: Pinhão Bicicletas, empresa fictícia

**Entrada:** “Enviamos seis avisos pelo WhatsApp na terça. Quatro responderam. Ainda não conferimos quem veio. A revisão leva uma manhã quando não precisa de peça.”

**Antes:** “O WhatsApp traz clientes?” com resposta “Sim, aumenta vendas.” A origem não permite essa conclusão.

**FAQ entregue:**

```markdown
---
id: "0042"
entrada: [bruto.md, processado.md]
estado: revisao
---
# Perguntas sobre o aviso de revisão

## Envio e resposta

### Q01. Quantos avisos foram enviados?

**Resposta:** Seis avisos pelo WhatsApp.
**Origem:** processado.md, parágrafo 1.
**Estado:** respondida
**Observação:** O relato descreve uma terça-feira, sem data completa.

### Q02. Quantos destinatários responderam?

**Resposta:** Quatro.
**Origem:** processado.md, parágrafo 1.
**Estado:** respondida
**Observação:** Resposta não equivale a visita ou compra.

### Q03. Quantos compareceram após responder?

**Resposta:** Não informado.
**Origem:** bruto.md, parágrafo 1, ressalva sobre a conferência.
**Estado:** pendente
**Observação:** Conferir a agenda da oficina.

## Prazo da revisão

### Q04. A revisão sempre termina numa manhã?

**Resposta:** O prazo citado vale quando não há necessidade de peça.
**Origem:** processado.md, parágrafo 1.
**Estado:** parcial
**Observação:** O prazo com troca de peça não foi informado.

## Lacunas para a próxima etapa

| Pergunta | Quem pode responder | Efeito na produção |
| --- | --- | --- |
| Q03 | Responsável pela agenda | Impede afirmar retorno em visitas |
| Q04 | Responsável pela oficina | Impede prometer prazo para todo serviço |
```

Se outro trecho disser “toda revisão leva dois dias”, marque Q04 como conflitante e registre ambas as localizações. Não escolha a versão mais conveniente para a copy.

## Checklist numerado

1. Cada parágrafo relevante tem perguntas ou justificativa de ausência.
2. Entidades, números, condições e exceções foram examinados.
3. Cada resposta tem origem localizável.
4. Estado corresponde à completude real.
5. Pergunta pendente não contém resposta inventada.
6. Duplicações foram unidas sem apagar condições distintas.
7. Lacunas apontam responsável ou pesquisa possível.
8. A base editorial recebe a FAQ com o mesmo ID.

## Erros comuns

- Fazer só perguntas de venda. Cubra mecanismo e limite também.
- Responder com conhecimento geral sem registrar fonte. Encaminhe à pesquisa.
- Tratar uma condição como detalhe dispensável. Inclua-a na resposta.
- Medir qualidade pelo total de perguntas. Prefira cobertura útil e rastreável.

## Arquitetura aplicada

Carregue [fontes](../_shared/01-preflight-e-fontes.md) e [contexto](../_shared/05-contexto-editorial.md) antes da extração. A FAQ segue [artefato](../_shared/02-contrato-de-artefato.md). Entregue por [handoff](../_shared/03-interacao-e-handoff.md) e atualize por [retomada](../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

Use `inboundfy-pesquisa-acervo` para lacunas externas e `inboundfy-base-editorial` para consolidar usos. Esta capacidade organiza perguntas, sem produzir respostas públicas sem fonte. Consulte `CONTEXTO.md` e as regras de limpeza para manter o sentido do relato.
