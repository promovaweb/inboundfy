---
name: inboundfy-growth-eventos
description: Planeja eventos próprios, palestras, participação e patrocínio com orçamento e acompanhamento comercial. Use quando o pedido falar em evento, encontro, feira, webinar, patrocínio, inscrição ou retorno dos contatos após o encontro.
---

# Marketing de eventos

Organize a operação antes, durante e depois do encontro. Acordos entre marcas ficam em `inboundfy-growth-parcerias`. Comunicação de novidade fica em `inboundfy-growth-lancamento`.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

## Contexto exigido

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` antes de alterar artefatos. Na ausência de qualquer sentinela, apresente:

> O setup do Inboundfy ainda não foi concluído ou precisa de reparo neste
> projeto. Execute `inboundfy-setup` para preparar os arquivos de apoio.

Leia `.inboundfy/context/empresa.md`, `.inboundfy/estrategia.md`, `.inboundfy/context/publico.md`, `.inboundfy/context/canais.md`, `.inboundfy/context/marca-voz.md`, `.inboundfy/context/glossario.md`, `.inboundfy/context/proibicoes.md` e `.inboundfy/context/estruturas-proibidas.md`. Localize a oferta e as fontes relacionadas ao pedido. Consulte `.inboundfy/framework/` para os contratos instalados. Acione `inboundfy-setup` quando a configuração precisar de reparo.

## Entrada esperada

Receba formato, data, fuso, público, tema, capacidade, papel da empresa, equipe, orçamento, destino dos contatos e resultado esperado.

## Perguntas de diagnóstico

- Quem precisa estar presente para o evento cumprir seu objetivo?
- Que tarefa o participante consegue fazer ao terminar?
- Qual custo inclui deslocamento, horas e acompanhamento?
- Quem atende o interesse comercial na semana seguinte?

## Fluxo

1. Leia [REFERENCIA.md](REFERENCIA.md) e confirme o papel da empresa no evento, o público necessário e o resultado prioritário.
2. Leia [produção e acompanhamento](references/producao-e-acompanhamento.md). Compare organizar, palestrar, patrocinar ou apenas participar pelo custo total e pela quantidade provável de conversas qualificadas.
3. Monte cronograma reverso, orçamento com horas da equipe, convites, inscrição, ensaio e alternativa para falha de transmissão.
4. Prepare roteiro, acessibilidade, acolhimento, registro de interesse e autorização de imagem. Registre contexto e próxima ação por conversa.
5. Separe pedidos imediatos, interessados em material e pessoas sem intenção comercial. Faça acompanhamento contextual e encaminhe oportunidades ao CRM.
6. Entregue o plano com ID, fontes, estado, responsável e próxima ação. Para copy pública, leia `ESCRITA.md` e encaminhe a `inboundfy-copy-redacao`, à especialista do canal e à validadora pareada. Aplique `inboundfy-copy-editor` e `inboundfy-anti-slop`.

## Saída

Entregue plano de evento, orçamento, cronograma, roteiro de experiência, briefs de convite e acompanhamento por segmento. Salve no pacote já definido pelo projeto, com vínculos ao acervo, brief, persona e calendário. Use o campo `brief` nas peças finais. Não crie estrutura paralela ao setup.

## Validação

Confirme acesso, fuso, capacidade, ensaio, alternativa técnica, identificação de interessados e responsável pelo acompanhamento. Patrocínio precisa de entregas verificáveis e custo por conversa previsto.

Confira cálculos, denominadores, datas, fontes e autorização aplicável. Devolva promessas sem fonte ao brief. Mantenha o estado `revisao` enquanto houver pendência factual. A publicação depende do estado e da autorização existentes no projeto.

## Responsabilidade do grupo

Grupo **growth**. Registre entrada, transformação executada, arquivo de saída, estado, próxima skill e pendências no pacote de handoff.

## Encaminhamentos

Use `inboundfy-growth-parcerias` para contrapartidas, `inboundfy-growth-comunidade` para encontros recorrentes e `inboundfy-growth-revops` para encaminhamento ao CRM. Use `inboundfy-growth-distribuicao` para reaproveitar gravações e `inboundfy-growth-diretorios` para cadastros em agendas setoriais.

## Idempotência

Atualize o plano pelo mesmo ID. Preserve fontes, versões aprovadas e histórico. Mantenha uma inscrição por pessoa e edição. Não dispare lembrete após cancelamento nem repita atendimento já concluído.
