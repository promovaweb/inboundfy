---
name: inboundfy-experimentacao
description: Planeja testes A/B e registra a leitura dos resultados com hipótese, amostra e janela. Use quando o pedido falar em testar copy, oferta, CTA, página, email, variantes, significância ou experimento de marketing.
---

# Experimentação de marketing

Use esta skill para transformar uma dúvida de marketing em teste controlado:
qual título de email abre mais, qual CTA gera mais pedidos de demonstração,
se a página com preço visível converte melhor. Ela planeja o teste, confere se
há tráfego suficiente, acompanha a janela e escreve a leitura do resultado.

Ela não instala ferramenta de teste nem configura eventos de rastreamento
(acione `inboundfy-rastreamento-conversao`), não define o plano de métricas
do negócio (acione `inboundfy-metricas`) e não reescreve a página inteira
(acione `inboundfy-growth-cro` ou a especialista do canal). Uma preferência de
redação sem teste nunca aparece como resultado.

## Arquitetura de execução

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) no passo do fluxo que monta o
artefato. O grupo desta skill é **capacidade**.

## Quando usar e quando não usar

| Situação | Abordagem | Skill |
| --- | --- | --- |
| Duas versões de um elemento, tráfego suficiente | Teste A/B clássico | esta skill |
| Três ou mais versões do mesmo elemento | A/B/n com correção para comparações múltiplas | esta skill |
| Combinações de vários elementos com tráfego alto | Teste multivariado | esta skill, só acima de dezenas de milhares de visitas por semana |
| Pouco tráfego (menos de 1.000 conversões por mês) | Teste sequencial, antes e depois com controle, ou teste qualitativo | esta skill, com limitação declarada |
| Página com problema evidente (link quebrado, formulário que falha) | Correção direta, sem teste | `inboundfy-growth-cro` |
| Falta saber por que as pessoas não compram | Entrevista ou pesquisa | `inboundfy-pesquisa-cliente` |
| Evento ou meta não registra no analytics | Instrumentação | `inboundfy-rastreamento-conversao` |

## Perguntas de diagnóstico

1. Qual observação motivou o teste (dado, gravação de sessão, fala de
   cliente, comentário do time de vendas)?
2. Qual métrica de negócio deve mudar se a hipótese estiver certa?
3. Quantas visitas ou envios a peça recebe por semana e qual a taxa atual?
4. Qual a menor melhora que justificaria trocar a versão atual?
5. A ferramenta mantém a mesma variante para a mesma pessoa em visitas
   seguintes?
6. Que campanha, sazonalidade ou mudança de preço acontece na janela prevista?
7. Quem aprova a conclusão e o que acontece com a variante perdedora?

## Contexto exigido

Consulte `.inboundfy/context/empresa.md`, `.inboundfy/framework/` e
`inboundfy-setup` antes de continuar quando a instalação ou a configuração
estiver incompleta.

Leia [REFERENCIA.md](REFERENCIA.md), `AGENTS.md`,
`.inboundfy/context/publico.md` (persona do teste),
`.inboundfy/context/ofertas.md` (quando a variante muda preço, condição ou
bônus), `.inboundfy/context/canais.md`, `.inboundfy/context/ferramentas.md`
(ferramenta de teste e analytics disponíveis), `.inboundfy/context/marca-voz.md`,
`.inboundfy/context/proibicoes.md`, `.inboundfy/estrategia.md` e a peça
testada com seu acervo. Sem linha de base ou sem ferramenta registrada, peça o
dado ou acione `inboundfy-metricas` antes de calcular amostra.

## Entrada esperada

Receba observação, mudança proposta, peça ou URL, persona, canal, métrica
principal desejada, volume semanal, taxa atual, restrições técnicas, janela
disponível e formato de resultado (plano, acompanhamento, leitura ou backlog).
Aceite hipóteses de `inboundfy-pesquisa-cliente` com o trecho e a fonte que
as motivaram. Para leitura de resultado, receba os números brutos por variante: visitantes
ou envios, conversões e período.

## Fluxo

1. Confirme as sentinelas e leia o contexto exigido. Registre a peça, a
   persona e o ID do experimento (`exp-AAAA-MM-DD-slug`).
2. Classifique o pedido: plano novo, acompanhamento, leitura de resultado ou
   priorização de backlog. Use a tabela de escolha do tipo de teste em
   [references/desenho-e-hipotese.md](references/desenho-e-hipotese.md).
3. Escreva a hipótese no formato: porque observamos X, acreditamos que Y
   fará Z para a persona P, medido por M. Recuse hipótese sem observação de
   origem e marque-a como palpite no backlog.
4. Defina uma mudança principal por variante, a métrica principal, até três
   métricas de apoio e pelo menos uma métrica de proteção (cancelamento,
   reembolso, descadastro, ticket de suporte).
5. Calcule amostra e duração com
   [references/amostra-e-duracao.md](references/amostra-e-duracao.md). Se a
   duração passar de oito semanas, apresente três caminhos (aumentar o
   efeito testado, trocar a métrica por uma mais frequente, usar método para
   pouco tráfego), com o recomendado primeiro. Aguarde a escolha.
6. Monte o plano com o template de [REFERENCIA.md](REFERENCIA.md):
   variantes, divisão de tráfego, persistência, instrumentação, checklist de
   lançamento e regra de parada escrita antes do início.
7. Quando a variante tiver texto público, aplique `marca-voz.md`,
   `glossario.md` e `proibicoes.md` e passe a copy por
   `inboundfy-copy-editor`. A variante não pode prometer o que a oferta não
   confirma.
8. Durante a janela, registre fatores externos e só verifique integridade
   (divisão de tráfego, eventos chegando). Não declare vencedor antes da
   amostra planejada, salvo regra de parada sequencial definida no passo 6.
9. Na leitura, siga
   [references/leitura-de-resultado.md](references/leitura-de-resultado.md):
   conferência de amostra, diferença relativa, intervalo de confiança,
   significância, segmentos pré-registrados e impacto em R$.
10. Registre o aprendizado e a ação (implantar, descartar, retestar). Leve ao
    `inboundfy-aprendizado` somente aprendizado com alcance confirmado pelo
    usuário.

## Saída

Salve o plano e a leitura no mesmo arquivo `experimento-<id>.md`, na pasta da
peça testada ou no item do acervo indicado pelo usuário. O backlog
priorizado fica em `experimentos-backlog.md` no local escolhido pelo usuário.
Todo arquivo usa o envelope de `../_shared/02-contrato-de-artefato.md`.
Preserve os estados editoriais no campo `estado`. Registre `planejado`,
`rodando`, `concluido` ou `cancelado` apenas em `estado_teste`.

## Validação

Reprove o plano quando faltar: observação de origem, hipótese com métrica,
uma única mudança principal por variante, métrica de proteção, amostra
calculada com taxa real, duração mínima de uma semana cheia, regra de parada
escrita antes do início ou instrumentação conferida. Reprove a leitura quando
a amostra não foi atingida sem limitação declarada, quando a divisão de
tráfego difere da planejada em mais de 1 ponto percentual sem explicação, ou
quando a conclusão extrapola segmento não pré-registrado. Corrija e repita a
validação inteira.

## Idempotência

Preserve o ID do teste, o plano original e os números de cada leitura
parcial com data. Um novo teste recebe novo ID, mesmo que use a mesma peça
com outro recorte. Nunca altere a hipótese ou a métrica principal depois do
início: registre a mudança como novo experimento.

## Responsabilidade do grupo

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** capacidade
- **entrada:** observação, peça testada e números de linha de base;
- **transformação:** hipótese, plano de teste ou leitura de resultado;
- **saída:** `experimento-<id>.md` ou `experimentos-backlog.md`;
- **handoff:** `inboundfy-rastreamento-conversao` para instrumentar,
  especialista do canal para produzir a variante, `inboundfy-aprendizado`
  para registrar a lição confirmada.
