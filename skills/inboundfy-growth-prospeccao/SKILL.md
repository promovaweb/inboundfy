---
name: inboundfy-growth-prospeccao
description: Pesquisa e qualifica listas de contas com fontes, sinais datados, contatos conferidos e prioridade explicada. Use quando o pedido falar em prospecção B2B, lista de leads, cliente ideal, enriquecimento de contatos ou seleção de contas para abordagem.
---

# Prospecção multicanal

Pesquise e qualifique contas para contato comercial com fontes rastreáveis e prioridade explicada. A redação da abordagem pertence a `inboundfy-growth-email-frio`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se faltar uma sentinela, encerre a escrita e apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Se a configuração estiver incompleta, acione `inboundfy-setup`. Consulte [REFERENCIA.md](REFERENCIA.md), `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/context/glossario.md`, `.inboundfy/pipeline.md`, o acervo relacionado e `.inboundfy/framework/`.

Leia também `.inboundfy/fontes-projeto.md`, as bases editoriais relacionadas e os documentos públicos citados. Antes de entregar copy, consulte `inboundfy-anti-slop` e `inboundfy-copy-edicao`.

## Entrada esperada

Receba oferta, perfil de cliente ideal, região, quantidade de contas, exclusões, sinal procurado, campos necessários, fontes acessíveis, finalidade, orçamento de pesquisa e formato de saída. Para enriquecer lista existente, receba IDs estáveis, origem dos campos e data da última conferência. Nunca preencha contato ausente por adivinhação.

## Fluxo

1. Confirme oferta, região, volume solicitado, exclusões e campos da lista. Registre lacunas antes de iniciar a pesquisa.
2. Leia [REFERENCIA.md](REFERENCIA.md). Escolha a modalidade: B2B, SaaS, negócio local ou pesquisa de demanda inicial. Defina condições de inclusão, exclusão e qualidade antes da busca.
3. Leia [pesquisa e priorizacao](references/pesquisa-e-priorizacao.md) para pesquisar contas e sinais com fonte e data. Relacione cada observação à oferta, sem tratar sinal como intenção de compra confirmada.
4. Leia [dados e enriquecimento](references/dados-e-enriquecimento.md) para normalizar entidades, eliminar duplicação e conferir contatos. Use apenas integrações disponíveis em `.inboundfy/context/integracoes.md`, quando existir, com limites autorizados e sem expor variáveis secretas.
5. Priorize por aderência, sinal atual, função e contato conferido. Mantenha desconhecidos separados de inadequados. Registre finalidade, tratamento de dados, supressão e prazo de retenção definidos pelo projeto.
6. Entregue lista e fichas das contas prioritárias, com fontes, custo e lacunas. Encaminhe somente contatos elegíveis a `inboundfy-growth-email-frio`, com persona, função, sinal, oferta com fonte, objetivo, remetente, capacidade diária, exclusões, condições de envio, domínio, entregabilidade e SLA de resposta. Registre campos ausentes como pendência. Para `inboundfy-growth-revops`, inclua IDs, fontes, elegibilidade, CRM de destino, etapas e donos conhecidos.
7. Aplique revisão de fontes e o contrato de artefato. Texto que será mostrado ao prospect passa por `ESCRITA.md`, `inboundfy-copy-editor` e `inboundfy-anti-slop`. A lista qualificada não autoriza contato nem importação em ferramenta externa.

## Saída

Lista qualificada em Markdown ou CSV no caminho de campanha registrado no projeto consumidor, acompanhada de resumo de pesquisa com ID, grupo growth, persona, objetivo, canal proposto, oferta, fontes, estado e próxima ação. Cada linha tem identidade da conta, fonte e data por campo relevante, sinal, prioridade, contato conferido, elegibilidade e pendência. Contas prioritárias recebem ficha de contexto para a próxima skill.

## Validação

- Cada conta atende às condições de inclusão ou permanece pendente com motivo.
- Sinais têm data, fonte acessível e relação explícita com a oferta.
- Nomes semelhantes e filiais foram conferidos antes de mesclar.
- Contatos têm procedência, validação recente e consulta à supressão.
- Campos ausentes não foram inventados; erro de provedor não equivale a contato inexistente.
- A pesquisa respeita permissões das fontes e minimiza dados pessoais.
- Prioridades podem ser recalculadas com as regras publicadas.
- Linhas inelegíveis não seguem para sequência de contato. Custos e limites estão registrados.

## Responsabilidade do grupo

Transforme perfil de cliente e fontes em contas qualificadas; entregue contatos elegíveis à abordagem e regras de importação à operação de receita. Registre grupo `growth`, entrada, transformação, saída, próxima skill, estado e pendências no handoff.

## Idempotência

Atualize o mesmo arquivo ou brief quando o ID já existir. Preserve texto aprovado, histórico, fontes e escolhas anteriores; abra uma nova versão apenas após pedido explícito.
