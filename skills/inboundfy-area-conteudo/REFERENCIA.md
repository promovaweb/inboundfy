# Referência da área de conteúdo

## Mapa da área

| Situação | Skill | Resultado |
| --- | --- | --- |
| Ideia solta, sem tese nem recorte | `inboundfy-brainstorm` | pacote de ideia com tese, recorte e perguntas |
| Campanha nova com objetivo, público e período | `inboundfy-estrategia` | plano de campanha e calendário |
| Material bruto: transcrição, notícia, artigo, anotação | `inboundfy-acervo` | bruto preservado, processado, FAQ, pesquisa e base editorial |
| Base editorial aprovada que precisa virar peças | `inboundfy-planejamento` | oportunidades e briefs por canal |
| Brief aprovado de um canal | `inboundfy-producao` | peça do canal pela especialista pareada |
| Peça pronta para revisar | `inboundfy-validador-<canal>` | relatório aprovado ou de correção |
| Situação das peças, estados e calendário | `inboundfy-pipeline` | estado atualizado e próximas ações |
| Relações entre itens, busca no catálogo | `inboundfy-catalogo` | registro de relações e índice |

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-area-conteudo**, do grupo
**area**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Uma skill de área é uma porta. Ela pergunta pouco, escolhe uma rota e sai do
caminho. Quando o pedido mistura duas áreas, atenda primeiro a etapa que
alimenta a outra (medição antes de teste, posicionamento antes de copy,
pesquisa antes de persona) e registre a segunda como próxima etapa.

## Template do pacote de entrada

```markdown
---
area: inboundfy-area-conteudo
skill_destino: {id da skill}
estado: encaminhado
---

# Pacote para {id da skill}

## Pedido original

{texto do pedido, sem edição}

## O que já se sabe

- Objetivo: {objetivo}
- Persona: {ID e nome em publico.md}
- Canal ou ativo: {canal, URL ou arquivo}
- Números atuais: {dados recebidos ou "não informados"}

## Arquivos e fontes

- {caminho ou URL}

## Perguntas em aberto

- {pergunta ou "nenhuma"}

## Próxima etapa sugerida

{skill seguinte da sequência comum ou "nenhuma"}
```

## Exemplo

**Pedido:** Gravei uma live de 40 minutos sobre controle de estoque e quero transformar em conteúdo para a semana.

**Diagnóstico:** Entrada é material bruto sem ID. Canal e persona ainda não foram informados. Não há campanha.

**Rota:** `inboundfy-acervo`.

**Pacote entregue:** transcrição da live, data da gravação, pedido de saída (conteúdo da semana) e pergunta aberta sobre canais.

## Checklist

- [ ] O doctor confirmou o setup antes do roteamento.
- [ ] As perguntas feitas eram só as que faltavam.
- [ ] A rota escolhida está na tabela da área.
- [ ] O pacote tem o pedido original sem edição.
- [ ] Dados ausentes aparecem como pergunta.
- [ ] A próxima etapa foi proposta, não executada sem confirmação.

## Erros comuns

- Executar o trabalho da skill de destino dentro da skill de área.
- Acionar duas skills ao mesmo tempo para o mesmo pedido.
- Fazer dez perguntas quando o pedido já responde metade delas.
- Encaminhar sem o pedido original, obrigando a skill seguinte a adivinhar.
- Escolher a skill pelo nome do canal quando o problema está em outra etapa
  (por exemplo, pedir anúncio quando a página não converte).
