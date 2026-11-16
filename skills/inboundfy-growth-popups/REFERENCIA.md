# Referência de popups e formulários contextuais

## Escolher formato pela tarefa

Interrupção precisa ter uma razão concreta. Se a pessoa está preenchendo
cadastro ou concluindo pagamento, um segundo formulário pode disputar a
tarefa principal. Em artigo que ensina uma rotina, um botão para baixar a
planilha daquela rotina pode funcionar sem abertura automática.

| Finalidade | Formato a considerar | Gatilho pertinente | Situação para excluir |
| --- | --- | --- | --- |
| Entregar recurso pedido | Modal acionado por clique | Clique em CTA explícito | Recurso já entregue sem pedido novo |
| Oferecer complemento de leitura | CTA no conteúdo ou convite lateral | Trecho concluído e tempo de leitura ativo | Formulário já em preenchimento |
| Avisar mudança operacional | Barra com link | Página afetada pela mudança | Aviso vencido ou já dispensado |
| Capturar newsletter | Formulário no conteúdo ou convite discreto | Interesse no assunto demonstrado | Assinante identificado |
| Pesquisa curta | Convite após tarefa concluída | Sucesso confirmado | Erro ou tarefa ainda pendente |
| Último convite no desktop | Modal com regra restrita | Saída por ponteiro, se adequada à página | Mobile ou recusa recente |

Tempo e rolagem são indícios de interação, não prova de interesse na oferta.
Uma pessoa pode chegar ao fim por um link de âncora. Combine sinais apenas
quando eles representam a leitura e trate a regra como hipótese local.

## Exibição sem concorrência

| Condição | Comportamento |
| --- | --- |
| Banner de consentimento ou aviso crítico aberto | Adiar convite promocional |
| Formulário em edição | Não abrir automaticamente |
| Campanha de maior prioridade visível | Esperar nova oportunidade elegível |
| Pessoa fechou convite | Registrar recusa e aplicar prazo de supressão |
| Pessoa concluiu captura | Suprimir aquisição daquele recurso |
| Identidade ou armazenamento indisponível | Usar comportamento conservador por sessão, sem prometer memória permanente |
| Oferta ou prazo encerrado | Retirar convite e revisar destino do CTA |

Leia [Exibição, foco e acompanhamento](references/exibicao-foco-e-acompanhamento.md)
nos passos 3 a 6 para especificação operacional e testes.

## Template de brief

```markdown
---
id: {{id}}
skill: inboundfy-growth-popups
grupo: growth
tipo: brief-captura-contextual
estado: rascunho
entrada: [{{pagina ou acervo}}]
fontes: [{{oferta}}, {{recurso}}, {{dados}}]
persona: {{id}}
canal: {{site e origem}}
oferta: {{id}}
proxima_acao: {{responsavel e entrega}}
---
Objetivo e motivo da interrupção: {{tarefa e benefício}}
Formato e alternativa: {{modal, barra, lateral ou CTA}}
| Página/público | Elegibilidade | Gatilho | Exclusão | Frequência | Supressão |
| --- | --- | --- | --- | --- | --- |
| {{grupo}} | {{condição}} | {{evento}} | {{condição}} | {{limite}} | {{prazo/estado}} |
Prioridade: {{componentes que prevalecem e regra de disputa}}
Título: {{texto}}
Apoio: {{entrega, formato e condição}}
Campos e finalidade: {{campo, motivo, destino e responsável}}
CTA e recusa: {{texto e destino}}
Envio/erro/sucesso: {{estado confirmado e mensagem}}
Teclado e mobile: {{foco, fechamento, rolagem e tamanho}}
Follow-up: {{permissão, mensagem, responsável e saída}}
Métricas: {{elegíveis, expostos, envios, qualidade e ação principal}}
Aceites: {{cenários e resultado esperado}}
Pendências/handoff: {{skill, arquivo, estado e ação}}
```

## Exemplo: checklist de separação para uma loja de cerâmica

Empresa fictícia: a Barro em Ordem, de Belo Horizonte, vende sistema de
organização de pedidos para ateliês. A persona `persona-07` cuida da expedição.
O artigo “Como conferir peças antes de embalar” recebe tráfego de busca.
O acervo `acervo/0316-embalagem/` contém checklist e oferta fictícios.

Objetivo: entregar checklist de conferência. Escolha inicial: CTA após o
trecho de inspeção. Clique abre modal pequeno, sem convite automático.
Uma hipótese separada testa convite lateral após 50% de rolagem e 45 segundos
de leitura ativa. Esses limiares são propostas do caso, não padrões universais.

Título: “Checklist para conferir as peças antes de embalar”.
Apoio: “Uma folha com conferência de peça, quantidade e proteção da embalagem.
Você recebe o PDF na confirmação e por email.”
CTA: “Receber checklist”. Recusa: “Agora não”.
Campo obrigatório: email para entrega. Inscrição em conteúdos aparece em
opção separada sem seleção inicial. Nenhuma promessa de que o recurso evitará
toda quebra ou substituirá o teste de embalagem.

| Regra | Definição do caso |
| --- | --- |
| Páginas | Artigos sobre separação e embalagem |
| Exclusões | Carrinho, pagamento, conta, formulário em edição e recurso já recebido |
| Frequência automática em teste | Uma vez por sessão |
| Recusa | Suprimir convite automático por 14 dias |
| Captura | Suprimir aquisição do mesmo checklist |
| Sobreposição | Banner de consentimento, aviso crítico e atendimento aberto prevalecem |
| Mobile | Manter CTA no artigo; sem gatilho por saída de ponteiro |
| Clique explícito | Pode reabrir o recurso solicitado mesmo após recusa de convite automático |

Ao abrir o modal, o foco vai ao título ou primeiro campo conforme a estrutura
especificada. Tab percorre os controles do diálogo; Escape e botão “Fechar”
encerram e devolvem foco ao CTA de origem. Mensagem de erro fica associada
ao email e preserva o que foi digitado. Sucesso: “Seu checklist está disponível.
Baixar PDF”. Email de entrega vai para a especialista do canal; a captura
não cria automaticamente contato no WhatsApp.

Leitura sintética do piloto da hipótese lateral: 1.000 visitantes elegíveis
por grupo; convite aparece para 600 no grupo de teste, com 36 capturas únicas.
Captura por exposto = 6%; por elegível = 3,6%.
No grupo só com CTA, há 25 capturas únicas: 2,5% por elegível.
Diferença descritiva = 1,1 ponto percentual. Não concluir ganho só por essa
diferença sem aferir desenho, amostra e janela.

Ação comercial principal da página: 18 visitas qualificadas à demonstração no
teste e 20 no controle. Esses números exigem leitura junto das capturas.
Três reclamações sobre interrupção aparecem no teste. A hipótese ainda não
está aprovada; aumentar lista não basta para justificar o formato.

Saída: `acervo/0316-embalagem/brief-popup.md`, ID 0316, grupo growth,
estado `revisao`, persona, fonte e oferta declaradas.
Pendência: testar teclado e supressão em navegador sem armazenamento persistente.
Próxima ação: equipe executora conferir os aceites antes da exposição.
Handoff para `inboundfy-rastreamento-conversao`: elegibilidade, exposição,
fechamento por motivo, captura confirmada e ação comercial por variante.
`inboundfy-growth-lead-magnet` recebe a revisão do recurso se surgirem dúvidas
de uso. `inboundfy-experimentacao` recebe o desenho da comparação.

## Checklist

- [ ] Oferta e assunto da página correspondem.
- [ ] Formato possui justificativa e alternativa.
- [ ] Elegibilidade, gatilho, frequência e supressão estão separados.
- [ ] Regras de prioridade impedem sobreposição.
- [ ] Mobile possui comportamento próprio.
- [ ] Fechar, Escape e retorno de foco estão descritos.
- [ ] Erro preserva dados e sucesso vem do receptor.
- [ ] Contato existente e envio repetido possuem tratamento.
- [ ] Conversão principal e reclamações acompanham captura.

## Erros comuns

- Chamar tempo na página de intenção comprovada: descreva o sinal e teste a hipótese.
- Usar saída de ponteiro como solução mobile: escolha comportamento compatível.
- Mostrar popup sobre pedido de consentimento: respeite a prioridade registrada.
- Esconder recusa ou usar culpa: mantenha fechamento visível e texto neutro.
- Reabrir a cada rota após fechar: aplique supressão de campanha.
- Mostrar “sucesso” no clique do botão: aguarde confirmação de recebimento.
- Comparar capturas por exposto com capturas por visita: alinhe denominadores.
- Coletar telefone apenas para enriquecer a base: solicite somente com finalidade aprovada.

## Guia específico do grupo

Growth entrega regra de exibição e captura ligada ao objetivo, público, canal e
oferta. `inboundfy-growth-cro` trata o formulário e a página;
`inboundfy-growth-lead-magnet` trata utilidade do recurso;
`inboundfy-growth-paywall` trata acesso pago. A equipe executora recebe
requisitos de interface, sem a skill substituir implementação ou aprovação.

Confirme: o convite ajuda a tarefa atual? A pessoa consegue fechar e continuar?
A captura diminui a ação principal? Consulte `ESTRATEGIA.md`, `CONTEXTO.md`
e `docs/method/05-artefatos-e-estados.md` para manter as relações do brief.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-growth-popups**, do grupo
**growth**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).
