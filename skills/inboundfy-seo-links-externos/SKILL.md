---
name: inboundfy-seo-links-externos
description: Prepara ativos citáveis e um plano de links externos com oportunidades editoriais, mensagens e links conferidos. Use quando o pedido falar em backlinks, menções sem link, recuperação de links ou divulgação de pesquisas.
---

# Links externos

Use para preparar ativos citáveis, localizar menções sem link, propor contribuições editoriais e acompanhar links recebidos. Cadastros repetíveis em catálogos seguem para `inboundfy-growth-diretorios`.

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

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md`. Se uma sentinela estiver ausente, encerre sem criar artefatos e apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/ofertas.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md`, `.inboundfy/estrategia.md` e `.inboundfy/fontes-projeto.md`. Consulte `.inboundfy/framework/`, o acervo, a auditoria SEO e as páginas de destino. Nunca atribua ao projeto uma pesquisa que ele não realizou.

## Entrada esperada

Receba domínio, páginas prioritárias, tema, país, idioma, ativos disponíveis, prazo, teto de horas ou gasto e alcance autorizado de contato com terceiros. Exporte links do Search Console ou da ferramenta disponível, registrando origem, cobertura e data.

Aceite achados de `inboundfy-auditoria-seo` com domínio, páginas e sintoma de links ou menções. Complete ativos citáveis, teto de trabalho e alcance de contato antes de preparar divulgação.

## Perguntas de diagnóstico

- Qual página merece uma citação pelo conteúdo que oferece?
- A marca já foi mencionada sem endereço clicável?
- Quem publica para a mesma persona e tem motivo editorial para citar esse material?
- O projeto consegue manter dados, calculadoras ou guias atualizados depois da divulgação?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md), estabeleça páginas-alvo e salve a linha de base: domínios referentes, links observados, sessões referidas e contatos atribuíveis. Não confunda exportação parcial com perfil completo.
2. Separe oportunidades de recuperação de links perdidos, menções sem link, ativos de pesquisa, ferramentas úteis e contribuições especializadas. Aplique a matriz de escolha da referência.
3. Confira acesso, autoria, método, dados e atualização do ativo. Sem material citável, encaminhe a produção a `inboundfy-planejamento`, `inboundfy-especialista-blog` ou `inboundfy-growth-ferramentas-gratuitas` conforme o brief.
4. Leia [relações e manutenção](references/relacoes-e-manutencao.md). Monte lista curta de páginas e responsáveis editoriais com justificativa individual. Use fontes públicas e contato profissional pertinente.
5. Prepare uma mensagem específica por oportunidade. Leia `ESCRITA.md` e aplique `inboundfy-copy-editor`. Envie apenas dentro do alcance autorizado, respeitando recusa e canal escolhido. Sugira recurso útil, sem exigir âncora comercial ou troca de links.
6. Confira a página publicada: URL de origem, destino, contexto, texto do link, atributo rel e data. Conte link observado, não promessa de publicação. Registre remoções, mudança de destino e indisponibilidade.
7. Leia resultados no período acordado, preservando limites de atribuição. Entregue ações de manutenção a `inboundfy-auditoria-seo`, divulgação jornalística a `inboundfy-growth-relacoes-publicas` e mensuração a `inboundfy-rastreamento-conversao`.

## Saída

Entregue `links-externos-<id>.md` no diretório de pesquisa ou campanha já registrado pelo projeto, com linha de base, ativos, lista de oportunidades, mensagens preparadas, tentativas, links conferidos e leitura de contatos. O registro mantém ID, grupo capacidade, persona, fontes e datas, estado, pendências e próxima ação.

## Validação

- Cada oportunidade tem página concreta e razão editorial ligada ao público.
- O ativo existe, funciona e apresenta autoria e origem dos dados.
- As mensagens descrevem a contribuição específica sem promessa de posição.
- Cada resultado publicado foi aberto e tem destino e contexto registrados.
- Links pagos não são tratados como citações editoriais espontâneas.
- A manutenção distingue dado ausente, link removido e mudança de atributo. Não recomenda desautorizar links por pontuação isolada.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** domínio, páginas-alvo, ativos e alcance de contato;
- **transformação:** seleção editorial, proposta individual e conferência de links;
- **saída:** plano de links com URLs observadas e manutenção;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Use URL de origem + URL de destino como chave do link e domínio + contato + ativo como chave de contato. Preserve tentativas e recusas. Reabra apenas a oportunidade alterada, sem reenviar mensagens a toda a lista.
