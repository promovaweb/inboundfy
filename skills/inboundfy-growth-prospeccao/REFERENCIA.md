# Prospecção por aderência, sinal e contato conferido

## Arquitetura aplicada

A lista segue os contratos de [fontes](../_shared/01-preflight-e-fontes.md), [artefato](../_shared/02-contrato-de-artefato.md), [handoff](../_shared/03-interacao-e-handoff.md), [validação](../_shared/04-validacao-e-retomada.md) e [contexto editorial](../_shared/05-contexto-editorial.md). O grupo é **growth**. A pesquisa guarda fatos separados de hipóteses comerciais.

## Guia específico do grupo

Vincule objetivo, público, canal proposto, oferta e próxima ação. No passo 3, consulte [pesquisa e priorização](references/pesquisa-e-priorizacao.md). No passo 4, consulte [dados e enriquecimento](references/dados-e-enriquecimento.md). A lista elegível segue para `inboundfy-growth-email-frio`; regras de importação e dono seguem para `inboundfy-growth-revops`. Uma investigação de concorrentes pertence a `inboundfy-concorrentes`.

Antes da busca, responda: qual condição torna a conta atendível? Qual sinal sugere o momento? Qual função pode usar a oferta? Qual fonte confirma a empresa e o contato? Quanto custa verificar uma conta? O objetivo não é preencher uma quantidade sacrificando qualidade.

## Template de lista qualificada

```markdown
---
id: {{pesquisa}}
skill: inboundfy-growth-prospeccao
grupo: growth
estado: rascunho
entrada: {{brief}}
fontes: [{{oferta}}, {{perfil e exclusoes}}]
persona: {{id}}
proxima_skill: inboundfy-growth-email-frio
---
- Modalidade, região e quantidade: {{dados}}
- Inclusão, exclusão e prazo de validade: {{regras}}
- Finalidade, acesso e retenção: {{registro}}
- Limite de pesquisa/enriquecimento: {{R$ ou créditos}}
| Conta/ID | Domínio/unidade | Aderência | Sinal/data/fonte | Função | Contato e validação | Prioridade | Elegível? | Pendência |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{conta}} | {{identidade}} | {{fato}} | {{registro}} | {{papel}} | {{resultado/data}} | {{faixa e motivo}} | {{sim/não/pendente}} | {{lacuna}} |
## Ficha da conta prioritária
- Tarefa provável e hipótese: {{sem presumir intenção}}
- Observação confirmada e fonte: {{registro}}
- Oferta pertinente e limite: {{relação}}
- Próxima ação: {{responsável, skill e arquivo}}
## Cobertura
- Candidatas, verificadas, elegíveis e pendentes: {{contagens}}
- Custo, taxa de duplicação e precisão amostral: {{contas}}
```

## Exemplo de prospecção brasileira fictícia

A Termo Oficina, fornecedora fictícia de manutenção de câmaras frias em Recife, quer conversar com pequenos distribuidores de alimentos na área atendida. O brief `acervo/0084-2026-11-15-frio/estrategia.md` limita o piloto a cinco contas e R$ 120 de pesquisa. A persona-01 é responsável de operações. As fontes simuladas são `.inboundfy/context/servicos.md`, `.inboundfy/context/publico.md` e páginas institucionais fictícias. O ID `0084` permanece `rascunho` até conferir dados e tratamento.

Inclusão: distribuidor com instalação refrigerada declarada e unidade na região atendida. Exclusão: operação encerrada, endereço fora da cobertura ou recusa anterior. Uma página com anúncio de nova unidade é sinal de mudança operacional, não comprovação de falha na refrigeração.

| Conta fictícia | Observação simulada | Conferência | Prioridade e saída |
| --- | --- | --- | --- |
| Frio do Porto | Site anuncia câmara na nova unidade há 12 dias | Unidade e contato institucional confirmados | Alta: aderência e sinal atual; conferir elegibilidade final |
| Alimentos Jangada | Página de serviços declara armazenagem refrigerada | Unidade confirmada, sem sinal recente | Média: pesquisa complementar |
| Distribuidora Pátio | Diretório cita câmara, site não confirma | Contato incerto | Pendente: não encaminhar |
| Feira Norte | Mesma unidade da Frio do Porto em registro antigo | Domínio e endereço coincidem | Duplicada: unir referências sem nova linha de envio |
| Armazém da Serra | Unidade a 180 km, fora da cobertura | Endereço institucional confirmado | Excluída: motivo geográfico |

A ficha da Frio do Porto registra a hipótese: “a nova unidade pode precisar organizar calendário preventivo”. A oferta é uma visita técnica paga com escopo confirmado no contexto; não é laudo gratuito nem garantia de economia. O contato institucional foi publicado pela empresa fictícia. A pesquisa não inventa o nome de uma gerente nem adivinha seu e-mail.

A triagem gera cinco candidatas, quatro contas únicas, três verificadas quanto à adequação (duas aderentes e uma excluída) e uma pendente. Uma conta fica apta à conferência final para contato. Com gasto simulado de R$ 90, o custo por conta totalmente conferida seria R$ 90/3 = R$ 30; o custo por conta liberada só poderá ser calculado após a revisão de elegibilidade. A supressão recebe consulta antes do handoff. Taxa de duplicação: 1/5 = 20%. Nenhuma dessas taxas serve como padrão de mercado.

A próxima ação da pesquisadora fictícia Celina Alves é confirmar finalidade e tratamento com a responsável do projeto, conferir o contato no dia do handoff e entregar a ficha à `inboundfy-growth-email-frio`. `inboundfy-growth-revops` recebe conta, unidade, fonte, sinal e dono proposto. O contato da Distribuidora Pátio continua pendente, sem tentativa de envio.

## Checklist de qualificação

- [ ] Inclusão, exclusão e região foram definidas antes da busca.
- [ ] Cada campo comercial relevante tem fonte e data.
- [ ] Sinal e intenção confirmada estão separados.
- [ ] Filiais e duplicadas foram tratadas com identidade explícita.
- [ ] Contatos incertos permanecem fora da lista de envio.
- [ ] Supressão e retenção foram conferidas.
- [ ] Custos e quantidade de contas únicas estão registrados.
- [ ] A próxima skill recebe fichas utilizáveis sem inventar abertura.

## Erros comuns na construção da lista

- Qualificar pela categoria do diretório: confirme a operação no site da conta.
- Interpretar publicação de vaga como orçamento aprovado: trate como sinal a investigar.
- Usar número pessoal para WhatsApp frio: mantenha canal e permissão separados.
- Buscar mais dados após atingir a qualidade necessária: encerre o enriquecimento e preserve a verba.
- Mesclar filiais só pelo nome: confira domínio, endereço e vínculo operacional.
- Contar erro de API como ausência de contato: registre erro técnico e reprograme a conferência.
