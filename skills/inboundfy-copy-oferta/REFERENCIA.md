# Referência de oferta

Este arquivo apoia os passos 1 a 9 do fluxo de `SKILL.md`: diagnóstico pelas
fatores de valor, ficha de oferta, nome, exemplo completo e checklist.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-copy-oferta**, do grupo
**copy**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Materiais de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/anatomia-da-oferta.md](references/anatomia-da-oferta.md) | Passos 1 a 4 | Fatores de valor, componentes da oferta, escopo, formatos por tipo de negócio. |
| [references/garantias-bonus-e-urgencia.md](references/garantias-bonus-e-urgencia.md) | Passo 6 | Tipos de garantia, montagem de bônus, urgência e escassez reais. |

## Guia específico do grupo

Uma oferta forte permite que a pessoa entenda o que muda, como a empresa
ajuda, o que precisa fazer e qual condição vale antes de avançar. Os campos
do grupo são **objetivo** (ação que a oferta pede), **mensagem** (resultado e
mecanismo em uma frase), **persona** (para quem o pacote foi montado),
**canal** (onde a oferta aparece) e **revisão** (conferência com
`ofertas.md`, CDC e proibições).

## Diagnóstico rápido

| Sintoma | Fator fraco | Correção típica |
| --- | --- | --- |
| "Parece bom, mas não sei se funciona para mim" | Confiança | Prova da mesma persona, garantia, demonstração. |
| "Demora demais para ver resultado" | Tempo | Primeiro resultado em dias, marco inicial entregue rápido. |
| "Vou ter muito trabalho" | Esforço | Fazer pela pessoa uma parte (configuração, migração, modelo pronto). |
| "Não entendi o que ganho" | Resultado | Trocar lista de entregáveis por resultado com prazo. |
| "Está caro" sem comparação | Resultado ou confiança | Mostrar custo do problema e da alternativa antes do preço. |
| "Vou pensar" sem objeção clara | Urgência ausente | Motivo real para agir agora, ou primeiro passo menor. |

## Nome da oferta

O nome ajuda a pessoa a lembrar e repetir. Proponha três opções:

| Molde | Exemplo ilustrativo |
| --- | --- |
| Resultado + prazo | Marca Pronta em 21 Dias |
| Público + resultado | Clínica Sem Falta |
| Mecanismo nomeado | Método Caixa Fechado |

Evite nome que promete mais do que o resultado registrado ou que já pertence
a um concorrente em `concorrentes.md`.

## Template de ficha de oferta

```markdown
---
id: {{id}}
skill: inboundfy-copy-oferta
versao: {{v1}}
estado: rascunho
persona_principal: {{persona-xx}}
fontes:
  - .inboundfy/context/ofertas.md
  - .inboundfy/context/servicos.md
  - .inboundfy/context/depoimentos.json
proxima_skill: {{inboundfy-contexto-oferta | inboundfy-copy-redacao}}
---

# Ficha de oferta: {{nome}}

## Mensagem principal

{{Resultado + para quem + mecanismo, em uma ou duas frases.}}

## Para quem é e para quem não é

- É para: {{perfil e situação}}
- Não é para: {{perfil e motivo}}

## Resultado e prazo

- Resultado: {{o que muda, observável}}
- Primeiro sinal: {{o que a pessoa percebe primeiro e quando}}
- Fora do controle da empresa: {{fatores}}

## Mecanismo

{{O que a pessoa recebe, o que a empresa faz, o que a pessoa faz.}}

## Entregável central e escopo

| Incluso | Não incluso |
| --- | --- |
| {{...}} | {{...}} |

## Bônus

| Bônus | Objeção que resolve | Custo de entrega |
| --- | --- | --- |
| {{...}} | {{...}} | {{...}} |

## Garantia

- Tipo: {{incondicional | condicional | de resultado | de serviço extra}}
- Texto: {{garantia em linguagem simples}}
- Condição de uso: {{como pedir, prazo}}

## Investimento e pagamento

- Preço: {{valor}} (fonte: `.inboundfy/context/ofertas.md`)
- Formas: {{Pix, cartão em até N vezes, boleto}}
- Desconto: {{condição real}}
- Arrependimento: {{7 dias para compra online, CDC art. 49}}

## Urgência ou escassez

- {{motivo real com data ou quantidade, ou "não se aplica"}}

## Objeções e respostas

| Objeção | Resposta | Fonte |
| --- | --- | --- |
| {{...}} | {{...}} | {{...}} |

## Variações por canal

- Página: {{...}}
- Email: {{...}}
- WhatsApp: {{...}}
- Anúncio: {{...}}

## Histórico de versões

| Versão | Data | Mudança | Motivo |
| --- | --- | --- | --- |
| v1 | {{AAAA-MM-DD}} | Criação | {{...}} |

## Pendências

- {{fato ou aprovação que falta, ou "nenhuma"}}
```

## Exemplo completo: serviço de identidade visual

Dados fictícios e ilustrativos. O Estúdio Traço Fino é uma agência inventada
de Recife que cria identidade visual para pequenos negócios.

### Oferta antes

> Criação de logo e identidade visual. Valor: R$ 4.900. Prazo a combinar.
> Entre em contato.

### Diagnóstico

| Fator | Leitura |
| --- | --- |
| Resultado | "Logo e identidade" é entregável, não resultado. A pessoa quer começar a vender com uma marca que pareça profissional. |
| Confiança | Nenhuma prova, nenhuma garantia. O portfólio existe, mas não está ligado à oferta. |
| Tempo | "Prazo a combinar" assusta quem tem inauguração marcada. |
| Esforço | Não diz quantas reuniões nem o que o cliente precisa trazer. |

Capacidade informada pelo usuário: quatro projetos por mês.

### Oferta depois

```markdown
# Ficha de oferta: Marca Pronta em 21 Dias

## Mensagem principal

Identidade visual completa para pequenos negócios que vão inaugurar ou
reposicionar a marca, entregue em 21 dias úteis com arquivos prontos para
fachada, Instagram e cardápio.

## Para quem é e para quem não é

- É para: restaurantes, lojas e clínicas com até 20 funcionários.
- Não é para: empresas que precisam de pesquisa de naming ou registro de
  marca no INPI (indicamos parceiro).

## Mecanismo

Uma reunião de briefing de 1 hora, três rotas visuais em 7 dias úteis,
duas rodadas de ajuste e entrega final. O cliente traz referências e a
lista de aplicações.

## Entregável central e escopo

| Incluso | Não incluso |
| --- | --- |
| Logo em 3 versões, paleta, tipografia | Registro no INPI |
| Manual de marca de 12 páginas | Impressão de materiais |
| 10 modelos para Instagram no Canva | Gestão de redes sociais |
| Arquivos para fachada e cardápio | Fotografia |

## Bônus

| Bônus | Objeção que resolve | Custo de entrega |
| --- | --- | --- |
| Arte da fachada pronta para a gráfica | "Ainda vou ter que contratar alguém para a fachada" | 3 horas da equipe |
| Sessão de 30 minutos para ensinar a usar os modelos | "Não sei mexer no Canva" | 30 minutos |

## Garantia

- Tipo: de serviço extra.
- Texto: se nenhuma das três rotas agradar, criamos uma quarta rota sem
  custo. Se a quarta também não servir, devolvemos 50% do valor.
- Condição de uso: pedido por escrito até 5 dias úteis depois da
  apresentação das rotas.

## Investimento e pagamento

- Preço: R$ 4.900 (fonte: `.inboundfy/context/ofertas.md`, confirmado em
  2026-11-12).
- Formas: Pix com 5% de desconto (R$ 4.655), cartão em até 6x sem juros ou
  50% na assinatura e 50% na entrega.
- Arrependimento: contrato fechado pelo site pode ser cancelado em 7 dias.

## Urgência ou escassez

- Quatro projetos por mês, limite da equipe. A página mostra quantas vagas
  restam no mês, atualizadas pela agenda real.

## Objeções e respostas

| Objeção | Resposta | Fonte |
| --- | --- | --- |
| "E se eu não gostar?" | Garantia de quarta rota e devolução parcial | Política aprovada pelo sócio |
| "21 dias é pouco, vai sair genérico" | Mostrar três projetos do portfólio feitos nesse prazo | Portfólio no acervo |
| "R$ 4.900 é caro" | Comparar com contratar logo, manual e fachada separados | Orçamentos do acervo |
```

### Interpretação

O preço não mudou. A oferta passou a nomear resultado e prazo, mostrou o que
não está incluso, ligou cada bônus a uma objeção e trocou "prazo a combinar"
por um processo com datas. A escassez é real porque vem da capacidade da
equipe. A falha provável seria escrever "garantia de satisfação total": a
operação não suporta devolução integral depois de três rotas entregues.

## Checklist

- [ ] Resultado escrito como mudança observável, com prazo do primeiro sinal.
- [ ] Fatores fora do controle da empresa estão declarados.
- [ ] Escopo tem colunas de incluso e não incluso.
- [ ] Cada bônus resolve uma objeção nomeada.
- [ ] Garantia tem tipo, texto simples e condição de uso.
- [ ] Preço e formas de pagamento batem com `ofertas.md`.
- [ ] Prazo de arrependimento aparece quando a venda é online.
- [ ] Urgência e escassez têm motivo verificável ou estão ausentes.
- [ ] Três nomes foram propostos e um foi escolhido.
- [ ] A versão aprovada foi encaminhada a `inboundfy-contexto-oferta`.

## Erros comuns

- **Lista de entregáveis no lugar de resultado.** "12 vídeos, 3 PDFs e um
  grupo" não diz o que muda para a pessoa.
- **Bônus inflado.** "Bônus no valor de R$ 2.000" sem que o item seja vendido
  separadamente por esse preço. É ancoragem enganosa.
- **Garantia que ninguém consegue usar.** Exigir comprovação de dez tarefas
  para devolver o dinheiro. A pessoa percebe e a garantia vira motivo de
  desconfiança.
- **Desconto permanente.** "50% de desconto" todo mês ensina a base a nunca
  pagar o preço cheio.
- **Oferta igual para todas as personas.** O dono de clínica e o gerente de
  marketing têm objeções diferentes; a mensagem principal muda.
- **Esconder o que não está incluso.** O cliente descobre na entrega e o
  suporte paga a conta.
