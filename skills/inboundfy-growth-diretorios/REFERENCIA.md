# Operação de cadastros

## Template de rodada

Preencha após o passo 1. O arquivo fica no diretório de campanha definido pelo projeto consumidor.

```markdown
---
id: dir-{{produto}}-{{rodada}}
skill: inboundfy-growth-diretorios
grupo: growth
estado: rascunho
entrada: {{brief de campanha}}
persona: {{id}}
fontes: [{{oferta}}, {{regras dos catálogos com data}}]
proxima_skill: inboundfy-rastreamento-conversao
---
# Rodada de cadastros
Objetivo: {{contatos qualificados no período}}
Destino: {{URL}}
Teto de gasto: R$ {{valor}}
Autorização aplicável: {{pedido e alcance}}

## Kit
Nome público: {{nome}}
Categoria: {{categoria real}}
Descrição curta: {{texto e contagem}}
Descrição completa: {{problema, uso, funcionamento e limites}}
Preço: {{regra, moeda e fonte}}
Logo e telas: {{caminhos aprovados}}
Suporte e privacidade: {{URLs}}

## Candidatos e tentativas
| Catálogo/país | Público | Categoria | Nota | Taxa | Estado | Data | Protocolo/URL | Próxima revisão |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {{domínio}} | {{perfil}} | {{categoria}} | {{0 a 8}} | {{R$}} | {{preparado}} | {{data}} | {{registro}} | {{data e pessoa}} |

## Resultado por rodada
Sessões identificadas: {{n ou indisponível}}
Contatos qualificados: {{n e definição}}
Clientes: {{n no período}}
Custo realizado: R$ {{valor}}
Pendências: {{lista}}
Próxima ação: {{pessoa, tarefa, prazo, arquivo}}
```

## Escolha dos cadastros

Atribua de 0 a 2 pontos para adequação ao público, clareza da categoria, atividade editorial recente e capacidade de acompanhar contatos. A soma de 0 a 8 organiza a fila interna. Ela não estima vendas. Taxas entram à parte, pois pagar mais não torna um diretório mais pertinente.

| Situação observada | Encaminhamento | Conferência antes do envio |
| --- | --- | --- |
| Associação do setor com catálogo de fornecedores | Primeira rodada se a persona compra ali | Regras de associação, cobertura regional e contato comercial |
| Marketplace de integração | Cadastrar quando a integração funcionar | Versão suportada, suporte e demonstração real |
| Catálogo de software por categoria | Preparar descrição para a tarefa de compra | Limites do plano, política de avaliações e país atendido |
| Lista editorial de ferramentas | Propor inclusão ao editor | Atualização recente e pertinência do conteúdo |
| Diretório exige selo recíproco ou taxa | Calcular custo total antes da escolha | Prazo de exposição, renovação e efeito do selo no site |
| Catálogo sem público identificável | Retirar da primeira rodada | Não usar pontuação de domínio isolada como justificativa |

## Exemplo de rodada brasileira

Caso fictício: a Oficina Nuvem vende um software de ordens de serviço a oficinas de bicicletas de Curitiba. O plano custa R$ 89 por mês. A persona `oficina-01` já usa WhatsApp para receber pedidos. O brief `campanhas/ordens-01/brief.md` autoriza preparar três cadastros gratuitos e enviar dois, sem abrir planos pagos.

O kit usa a descrição curta “Ordens de serviço para oficinas de bicicletas”. O texto completo explica cadastro de bicicleta, aprovação de orçamento e atualização de reparo. A empresa retira “integração automática com WhatsApp” porque o produto só abre um link de conversa. As fontes são a ficha de oferta e as telas da versão testada.

| Candidato fictício | Nota | Ação | Estado após a rodada |
| --- | --- | --- | --- |
| Catálogo Pedal do Paraná | 8 | Envio gratuito na categoria gestão | Publicado; URL e descrição conferidas |
| Mostruário de Aplicativos Locais | 6 | Envio gratuito com duas telas | Aguardando análise; protocolo AL-18 |
| Vitrine Nacional de Negócios | 3 | Preparar sem enviar | Exige assinatura de R$ 240; fora do alcance autorizado |

A equipe gastou quatro horas, avaliadas internamente em R$ 60 por hora. Não houve taxa. Após 30 dias, o primeiro catálogo gerou 36 sessões identificadas e seis contatos. Três contatos tinham oficina com pelo menos dois mecânicos, a definição registrada de qualificação. Um virou cliente. O custo interno por contato qualificado foi R$ 240 / 3 = R$ 80. A receita mensal contratada foi R$ 89; isso não comprova retorno positivo sem considerar permanência, margem e suporte.

A listagem do segundo catálogo continuou pendente. A equipe marcou uma consulta ao protocolo para a semana seguinte, sem reenviar. O arquivo `diretorios-ordens-01.md` ficou em `revisao`, com a primeira listagem comprovada e as duas pendências separadas. O handoff para `inboundfy-rastreamento-conversao` pede conferir a origem dos três contatos antes de ampliar a rodada.

## Métricas e leitura

- Taxa de publicação = listagens publicadas / envios submetidos. Separe os ainda dentro do prazo editorial.
- Custo por contato qualificado = `(taxas + custo das horas) / contatos qualificados`. Registre a forma de valorizar as horas.
- Taxa de contato = contatos atribuíveis / sessões identificadas. Informe ambos os números e o período.
- Receita atribuível usa a regra de atribuição do projeto. Não some crédito integral de um mesmo cliente em vários canais.

Não existe referência universal de conversão para todos os catálogos. Compare a rodada com outros canais da mesma oferta, país, período e definição de qualificação. Publique metas internas como hipóteses, nunca como média de mercado sem fonte.

## Checklist de fechamento

- [ ] Kit possui nome, categoria, descrições, preço e ativos conferidos.
- [ ] Cada taxa inclui renovação e prazo de exposição quando existirem.
- [ ] A tabela separa preparado, enviado, pendente, publicado, rejeitado e removido.
- [ ] Links publicados foram abertos na página real.
- [ ] O relatório contém denominadores e período das métricas.
- [ ] O responsável pela manutenção recebeu data e arquivo.

## Erros comuns

- Contar um protocolo como publicação: conferir a página pública antes de mudar o estado.
- Exigir UTM num campo que só aceita domínio: respeitar a regra e usar origem referida ou pergunta de atribuição, com o limite registrado.
- Pedir avaliações fictícias: convidar apenas clientes reais e respeitar regras editoriais e divulgação de incentivos.
- Cadastrar a mesma empresa várias vezes: pesquisar domínio, produto e país antes de qualquer conta nova.
- Prometer ganho de ranking por atributo do link: acompanhar descoberta e contatos sem atribuir causalidade a um link isolado.

## Arquitetura aplicada

No preflight, leia [fontes](../_shared/01-preflight-e-fontes.md) para confirmar a oferta e os canais. No passo 1, aplique [artefato](../_shared/02-contrato-de-artefato.md) ao ID da rodada. Antes de enviar, use [handoff](../_shared/03-interacao-e-handoff.md) para localizar a autorização. No passo 7, aplique [retomada](../_shared/04-validacao-e-retomada.md) ao protocolo anterior. A revisão do kit usa [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O grupo growth registra objetivo, público, canal, oferta e próxima ação por rodada. O resultado comercial pertence ao conjunto de listagens e páginas efetivamente acompanhadas. Quando a rodada fizer parte de uma novidade, envie a `inboundfy-growth-lancamento` o brief com novidade, data e fuso, público, oferta, disponibilidade, comprovação, porta-voz e capacidade de suporte, junto do calendário. Leve a `inboundfy-seo-links-externos` domínio, páginas prioritárias, ativos, país, idioma, prazo e alcance de contato. Para `inboundfy-rastreamento-conversao`, informe oferta, destino, resultado comercial, acessos e eventos disponíveis, versão e lacunas de origem.

## Leitura por etapa

No passo 5, leia [preparação e acompanhamento](references/preparacao-e-acompanhamento.md) para controlar formulário, conta, redirecionamento e manutenção.
