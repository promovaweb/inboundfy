# Referência de cro de páginas e formulários

## Método de leitura da visita ao envio

Comece pela tarefa da visita. Uma pessoa que procura orçamento de instalação
precisa entender cobertura, prazo e como será contatada. Um título sobre
“soluções completas” não responde a isso. Compare a busca ou anúncio com o
primeiro bloco visível e com a confirmação do formulário.

| Objeto | O que registrar | Ajuste possível |
| --- | --- | --- |
| Título e subtítulo | Oferta, público e benefício legíveis | Trocar abstração por serviço e região atendida |
| CTA | Verbo, destino e condição | “Solicitar orçamento” com expectativa de retorno |
| Prova | Origem, autorização e alcance do resultado | Mostrar caso pertinente sem generalizar |
| FAQ | Perguntas reais anteriores à compra | Responder instalação, cancelamento e prazo |
| Formulário | Campos, erros e responsável pelo contato | Adiar dado sem uso anterior ao retorno |
| Mobile | Teclado, zoom, CTA e mensagem de erro | Rótulo persistente, coluna única e foco no erro |
| Pós-envio | Registro no CRM e confirmação | Preservar envio válido se consulta auxiliar falhar |

Não exclua navegação ou reduza página apenas porque o formato é uma landing page.
Compare a informação que a persona precisa com os elementos que disputam a ação.

## Escolha da intervenção

| Situação comprovada | Fazer agora | Hipótese a investigar | Encaminhamento |
| --- | --- | --- | --- |
| Botão não envia | Corrigir integração | Não exige A/B para restaurar função | Equipe executora |
| Anúncio promete visita local, página omite cobertura | Esclarecer cobertura real | Ênfase de região no título | inboundfy-copy-redacao |
| Muitos inícios, poucos envios | Verificar erro por campo | Telefone opcional versus obrigatório | inboundfy-experimentacao |
| Muitos envios, poucos contatos válidos | Conferir definição e recepção | Ajustar qualificação antes de cortar campos | inboundfy-growth-revops |
| Página envia para criação de conta | Delimitar passagem até o CTA | Alterações dentro do cadastro | inboundfy-growth-signup |
| Eventos de envio só contam clique | Registrar falha de medição | Não comparar conversão ainda | inboundfy-rastreamento-conversao |

Leia [Diagnóstico e aferição](references/diagnostico-e-afericao.md) nos passos
3 a 5 do fluxo para formulário, priorização e desenho das hipóteses.

## Template de diagnóstico

```markdown
---
id: {{id}}
skill: inboundfy-growth-cro
grupo: growth
tipo: diagnostico-cro
estado: rascunho
entrada: [{{url ou arquivo}}]
brief: {{brief de origem quando houver}}
fontes: [{{oferta}}, {{relatorio do periodo}}]
persona: {{id}}
canal: {{origem do trafego}}
oferta: {{id}}
proxima_acao: {{responsavel e acao}}
---
Objetivo: {{acao confirmada}}
População e janela: {{quem entra, inicio e fim}}
Conversão atual: {{numerador / denominador}}
Passagem posterior: {{como sera verificada}}
| Local | Observação | Fonte | Correção ou hipótese | Prioridade | Responsável |
| --- | --- | --- | --- | --- | --- |
| {{seção}} | {{trecho}} | {{caminho}} | {{proposta}} | {{ordem e motivo}} | {{pessoa}} |

Título proposto: {{texto}}
Subtítulo: {{texto}}
CTA: {{texto e destino}}
| Campo | Obrigatório? | Finalidade agora | Uso posterior | Erro e recuperação |
| --- | --- | --- | --- | --- |
| {{nome}} | {{sim/nao}} | {{razão}} | {{responsavel}} | {{texto}} |

Hipótese: {{alteração, segmento e comportamento esperado}}
Teste: {{controle, variante, unidade, duração e regra de encerramento}}
Métrica principal: {{fórmula}}
Acompanhamento: {{qualidade, erros e suporte}}
Pendências: {{dado ausente}}
Handoff: {{skill, arquivos, estado e ação solicitada}}
```

## Exemplo: orçamento de uma instaladora em Curitiba

Caso inteiramente fictício. A empresa Brisa do Pinhal instala telas de proteção
para apartamentos em Curitiba. O acervo `acervo/0311-telas/` contém a oferta
e um relatório sintético de quatro semanas. A persona `persona-02` quer
orçamento para duas janelas; a visita vem de anúncio de instalação local.

Entrada: 2.000 sessões elegíveis, 300 inícios, 90 envios confirmados e 36
pedidos atendíveis. Conversão por sessão: 90/2.000 = 4,5%. Conclusão por início:
90/300 = 30%. Pedidos atendíveis por envio: 36/90 = 40%. A diferença entre
envio e oportunidade exige conferir bairro e tipo de instalação.

| Local | Achado fictício | Proposta | Ordem |
| --- | --- | --- | --- |
| Primeiro bloco | “Proteção que transforma” omite serviço e cidade | “Telas de proteção para apartamentos em Curitiba” | 1 |
| Formulário | CPF obrigatório antes de estimar instalação | Adiar CPF para contratação | 2 |
| Telefone | Máscara apaga o DDD ao voltar à tela | Corrigir preservação do campo | 1 |
| Confirmação | “Enviado” sem prazo de retorno | Informar retorno em até um dia útil, conforme oferta | 2 |

Copy proposta: “Informe o bairro e as janelas que deseja proteger. Nossa equipe
retorna em até um dia útil para confirmar medidas e preparar o orçamento.”
CTA: “Solicitar orçamento”. Campos: nome, bairro e canal escolhido para contato;
email ou telefone conforme essa escolha. Campo opcional para quantidade de
janelas. Erro: “Inclua o DDD para receber o retorno por telefone.”
Sucesso: “Recebemos seu pedido. O retorno chegará pelo canal escolhido em até
um dia útil.” Prazo e cobertura vêm da oferta fictícia, não de promessa do agente.

Saída: `acervo/0311-telas/diagnostico-cro.md`, ID 0311, grupo growth,
estado `revisao`. Fontes: oferta, capturas e relatório sintético do acervo.
Primeiro se corrige a máscara. Depois, a hipótese de adiar CPF segue para
`inboundfy-experimentacao`, com envios atendíveis por sessão como métrica.
A meta interna ilustrativa é passar de 1,8% para 2,2%; ela não representa
resultado nem referência de mercado. O plano exige a mesma janela de retorno
comercial para os dois grupos.

Handoff para `inboundfy-rastreamento-conversao`: medir `formulario_iniciado`,
`envio_confirmado` e `pedido_atendivel` com ID de formulário e variante.
Não enviar CPF, telefone ou texto livre para analytics. A equipe comercial
confirma a definição de pedido atendível antes de começar. Pendência:
ainda não há dados da variante. Próxima ação: responsável pela página
implementar a correção da máscara e devolver a captura para conferência.

## Checklist

- [ ] Origem, promessa e destino do CTA foram comparados.
- [ ] Contagens possuem população, janela e etapa declaradas.
- [ ] Prova social e prazos possuem origem local.
- [ ] Campos foram justificados individualmente.
- [ ] Mobile, falha de envio e confirmação foram descritos.
- [ ] Hipóteses usam métrica posterior ao clique.
- [ ] O pacote informa responsável, pendências e próxima skill.

## Erros comuns

- Retirar telefone sem conferir se o serviço só atende por chamada: ofereça escolha de contato compatível com a operação.
- Classificar clique no botão como lead: use aceitação confirmada pelo sistema receptor.
- Alterar título, oferta e formulário juntos e atribuir o resultado a uma frase: delimite o conjunto testado.
- Usar gravações de sessão com dados pessoais visíveis: peça coleta restrita e acesso autorizado.
- Aprovar aumento de envio enquanto cai a proporção de pedidos atendíveis: acompanhe as duas etapas.

## Guia específico do grupo

O grupo growth entrega uma intervenção ligada a objetivo, público, canal e oferta.
CRO mantém o diagnóstico da página. `inboundfy-growth-revops` recebe regras de
qualificação, `inboundfy-growth-pricing` recebe preço e embalagem,
`inboundfy-growth-popups` recebe exibição contextual. A execução da página
continua com o responsável indicado no projeto.

Pergunte antes do handoff: a página consegue cumprir o prazo anunciado? O
receptor confirmou o envio? A métrica representa contato ou oportunidade?
Consulte `ESTRATEGIA.md`, `CONTEXTO.md` e
`docs/method/05-artefatos-e-estados.md` para manter o vínculo do diagnóstico.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-growth-cro**, do grupo
**growth**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).
