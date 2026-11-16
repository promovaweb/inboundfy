# Referência da área de copy

## Mapa da área

| Situação | Skill | Resultado |
| --- | --- | --- |
| Texto novo de página, anúncio ou email | `inboundfy-copy-redacao` | copy completa pronta para revisão |
| Texto existente que precisa melhorar | `inboundfy-copy-edicao` | versão editada com registro das mudanças |
| Revisão final antes de publicar | `inboundfy-copy-editor` | parecer de editor e versão final |
| Erros de português, concordância, regência | `inboundfy-copy-gramatica` | texto corrigido com lista de correções |
| Texto difícil, longo ou técnico demais | `inboundfy-copy-simplificar` | versão mais clara com o mesmo conteúdo |
| Oferta, bônus, garantia, preço apresentado | `inboundfy-copy-oferta` | oferta estruturada |
| Mensagem central, diferencial, categoria | `inboundfy-copy-posicionamento` | declaração de posicionamento e mensagens |
| Estrutura persuasiva, objeções, prova | `inboundfy-copy-persuasao` | estrutura e argumentos por etapa |
| Tom e voz da marca | `inboundfy-voz` | guia de voz aplicado ao texto |
| Texto com cara de IA | `inboundfy-anti-slop` | relatório e versão revisada |

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-area-copy**, do grupo
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
area: inboundfy-area-copy
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

**Pedido:** Preciso da copy da página do nosso curso de confeitaria, que abre turma em dezembro.

**Diagnóstico:** Texto novo. Ação: inscrição. Falta confirmar se a oferta (preço, bônus, garantia) está em `.inboundfy/context/ofertas.md`.

**Rota:** `inboundfy-copy-oferta`, seguida de inboundfy-copy-redacao.

**Pacote entregue:** produto, turma, data de abertura, persona, oferta registrada e destino do CTA em `.inboundfy/context/links.md`.

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
