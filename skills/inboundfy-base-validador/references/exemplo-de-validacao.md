# Relatório completo de validação

Leia este exemplo no passo de redigir o relatório, após executar os passes. Ele demonstra a primeira reprovação e a retomada, sem substituir o digest real da execução.

## Caso preenchido: revisão da oficina fictícia Pinhão Bicicletas

Entrada: o asset anuncia “Revisão por R$ 80 com entrega no mesmo dia”. A oferta canônica informa R$ 120 e prazo após avaliação. A primeira rodada produz:

```markdown
# Validação de asset; exemplo/0042

- **Asset:** `canais/exemplo/0042/README.md`
- **Brief:** `04-briefs/exemplo-revisao.md`
- **Produtora:** especialista recebida pela chamadora
- **Validadora:** validadora recebida pela chamadora
- **Rodada:** 1
- **ID da peça:** `0042`
- **SHA-256 da peça:** `<copiar os 64 caracteres retornados pelo CLI>`
- **Veredito:** reprovado

## Fontes carregadas

| Fonte | Estado | Uso |
| --- | --- | --- |
| README.md e brief | lido | Oferta e finalidade |
| Todos os Markdown de context/ | lido | Voz, público e limites comerciais |
| context/ofertas.md | lido | R$ 120 e prazo após avaliação |
| context/proibicoes.md | lido | Veto a promessa de prazo sem avaliação |
| context/estruturas-proibidas.md | lido | Passes literais e estruturais |
| brand/ | não aplicável | Pasta ausente neste exemplo |
| fontes-projeto.md e regras do framework | lido | Precedência e contrato |

## Achados

| Localização | Trecho observado | Regra ou fonte | Diagnóstico e correção |
| --- | --- | --- | --- |
| README.md, oferta | R$ 80 | context/ofertas.md, preço | Corrigir para R$ 120 |
| README.md, oferta | no mesmo dia | context/ofertas.md, prazo | Informar prazo após avaliação |

## Conferência de proibições

| Categoria | Passe literal | Passe semântico/estrutural | Ocorrências |
| --- | --- | --- | --- |
| Vetos de negócio | reprovado | reprovado | Promessa de prazo no parágrafo de oferta |
| Aberturas proibidas | aprovado | aprovado | nenhuma |
| Fechamentos proibidos | aprovado | aprovado | nenhuma |
| Vocabulário proibido | aprovado | aprovado | nenhuma |
| Estruturas de parágrafo | aprovado | aprovado | nenhuma |
| Headings e listas | aprovado | aprovado | nenhuma |
| Pontuação e fluidez | aprovado | aprovado | nenhuma |
| Autoridade e dados | reprovado | reprovado | Preço diverge da oferta |

## Encaminhamento

- Destino: produtora recebida pela chamadora.
- Instrução: corrigir preço e prazo, devolver o arquivo inteiro.

## Histórico

- Rodada 1: reprovado por preço e prazo.
```

O marcador do SHA-256 existe apenas para não inventar um digest de arquivo ausente nesta documentação. Numa execução, obtenha o valor real com `inboundfy content digest 0042`. Um relatório com esse marcador não permite aprovação.

Após a produtora corrigir a oferta para “Revisão por R$ 120. O prazo será informado após avaliação”, a segunda rodada repete todas as leituras. Ela atualiza digest e histórico. Só registra `Veredito: aprovado` se todos os achados desaparecerem. A auditoria aprova aquela versão específica; qualquer alteração posterior exige novo digest e nova rodada.
