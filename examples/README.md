# examples/ — Pacotes de Demonstração do Thothfy

Este diretório existe só para leitura e aprendizado: cada subpasta é um
pacote de conteúdo completo, gerado seguindo `METODOLOGIA.md` e/ou
`ESTRATEGIA.md`, com dado de empresa, produto e persona **fictícios**,
claramente marcados como ilustrativos em cada arquivo.

Diferente de `context/`, que é template vazio a preencher, `examples/` é
sempre preenchido — o objetivo é mostrar o resultado real de cada fase, não
um formulário em branco. Nenhuma skill lê `examples/` em tempo de execução;
é material de referência para quem está aprendendo o framework ou validando
se uma skill nova segue o padrão esperado.

## Pacotes

| Pacote | O que demonstra |
| --- | --- |
| [como-funciona-o-mcp](como-funciona-o-mcp/README.md) | Pipeline completo de `METODOLOGIA.md` (fases 0 a 6) aplicado a um artigo de blog técnico avulso, sem campanha — da nota de reunião crua ao artigo auditado. |

## Regras deste diretório

- Todo pacote de exemplo segue exatamente a estrutura de diretório definida
  em `METODOLOGIA.md` (ou, quando aplicável, o pacote de campanha de
  `ESTRATEGIA.md`) — não é um resumo simplificado, é o artefato real de cada
  fase.
- Toda empresa, produto, pessoa ou dado citado é fictício e está marcado
  como ilustrativo no arquivo onde aparece.
- Um pacote de exemplo pode deliberadamente não produzir todas as
  oportunidades do plano, mas deve registrar e justificar o corte no
  próprio pacote (ver `03-planejamento/plano-de-oportunidades.md` do
  exemplo `como-funciona-o-mcp` para o formato).
