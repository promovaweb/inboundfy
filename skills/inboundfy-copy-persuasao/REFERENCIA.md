# Referência de psicologia aplicada

Este arquivo apoia os passos 1 a 6 do fluxo de `SKILL.md`: mapa de forças,
estágios da mensagem, registro de STEPPS, template do diagnóstico, exemplo
completo e checklist.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-copy-persuasao**, do grupo
**copy**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Materiais de apoio

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/catalogo-de-principios.md](references/catalogo-de-principios.md) | Passo 3 | Princípios de comportamento por estágio, com uso honesto e forma abusiva. |
| [references/limites-eticos-e-legais.md](references/limites-eticos-e-legais.md) | Passo 5 | Teste de transparência, CDC, CONAR, LGPD e padrões enganosos de interface. |

## Guia específico do grupo

A persuasão nesta skill é organização de motivo real. Os campos do grupo são
**objetivo** (comportamento pedido), **mensagem** (o motivo que a persona
tem para agir), **persona** (forças que a prendem e a puxam), **canal**
(onde a aplicação aparece) e **revisão** (teste ético, fontes, anti-slop).

## Perguntas de análise

- A pessoa entende por que isso importa para sua situação?
- O texto reduz dúvida com informação ou tenta pressionar?
- A prova confirma a promessa e tem contexto?
- A ação seguinte é simples e reversível quando apropriado?
- A urgência tem prazo ou condição real?

## Mapa de forças de mudança

Toda troca de comportamento tem duas forças a favor e duas contra. A copy
fortalece as primeiras e responde às segundas.

| Força | Pergunta | Como a copy trabalha |
| --- | --- | --- |
| Empurrão (dor atual) | O que incomoda hoje? | Nomear a situação com as palavras da persona. |
| Atração (ganho novo) | O que a pessoa imagina conseguir? | Mostrar o resultado concreto e o mecanismo. |
| Ansiedade (medo da troca) | O que pode dar errado? | Prova, garantia, demonstração, condição clara. |
| Hábito (apego ao atual) | O que funciona "bem o suficiente" hoje? | Reconhecer o que a pessoa já faz e reduzir o esforço de troca. |

Se a ansiedade e o hábito forem maiores que o empurrão e a atração, nenhum
princípio de persuasão resolve. Nesse caso, devolva para
`inboundfy-copy-oferta` (a oferta precisa reduzir o esforço) ou para
`inboundfy-copy-posicionamento` (a persona pode estar errada).

## Estágios da mensagem

| Estágio | O leitor pergunta | Princípios típicos |
| --- | --- | --- |
| Atenção | "Isso é para mim?" | Relevância pessoal, especificidade, curiosidade com resposta logo depois. |
| Compreensão | "Entendi o que é?" | Fluência (frase simples), exemplo concreto, comparação com algo conhecido. |
| Confiança | "Posso acreditar?" | Prova social real, autoridade com credencial, admissão de limite, garantia. |
| Ação | "Vale fazer agora?" | Primeiro passo pequeno, padrão recomendado, custo de adiar real, redução de esforço. |
| Pós-ação | "Fiz a escolha certa?" | Confirmação clara, próximo passo, sensação de progresso. |

## Compartilhamento com STEPPS

Leia a seção STEPPS de `.inboundfy/framework/ESTRUTURAS-PERSUASIVAS.md` quando
o comportamento desejado for compartilhar ou recomendar. O método reúne moeda
social, gatilhos, emoção, visibilidade, valor prático e histórias.

Registre no diagnóstico existente, antes de encaminhar à redação:

```yaml
compartilhamento:
  objetivo: ajudar colegas a resolver a mesma tarefa
  principios:
    - nome: valor prático
      aplicacao: mostrar os passos da correção e como conferir o resultado
      suporte: exemplo ilustrativo; substituir pelo material real do acervo
  limite: não há previsão de alcance ou viralização
```

Esse preenchimento é ilustrativo. Use o objetivo e as fontes reais da peça.
Na revisão, confira o trecho que realiza cada aplicação e explique qualquer
ajuste necessário. Não conte princípios para aprovar o texto; a validação
continua dependendo das fontes, da voz e das regras do canal.

## Guardrails

Nunca invente escassez, depoimento, autoridade, número, medo ou consenso.
Explique as condições antes de pedir a ação.

## Template de diagnóstico persuasivo

```markdown
---
id: {{id}}
skill: inboundfy-copy-persuasao
estado: rascunho
entrada: {{caminho da peça ou do brief}}
persona_principal: {{persona-xx}}
comportamento_desejado: {{verbo + objeto}}
custo_para_pessoa: {{dinheiro, tempo, exposição}}
fontes:
  - .inboundfy/context/depoimentos.json
  - .inboundfy/context/ofertas.md
proxima_skill: {{inboundfy-copy-redacao | inboundfy-copy-edicao | especialista}}
---

# Diagnóstico persuasivo: {{peça}}

## Forças

| Força | O que a persona sente | Fonte |
| --- | --- | --- |
| Empurrão | {{...}} | {{...}} |
| Atração | {{...}} | {{...}} |
| Ansiedade | {{...}} | {{...}} |
| Hábito | {{...}} | {{...}} |

## Princípios escolhidos

| Estágio | Princípio | Aplicação (trecho ou instrução) | Sustentação | Teste ético |
| --- | --- | --- | --- | --- |
| {{...}} | {{...}} | {{...}} | {{fonte}} | {{aprovado / ajustado}} |

## Removido ou rejeitado

- {{trecho ou princípio}}: {{motivo}}

## Opções de abertura

1. Recomendada: {{...}}
2. {{...}}
3. {{...}}

## Pendências

- {{prova que falta ou "nenhuma"}}
```

## Exemplo completo: página de orçamento de energia solar

Dados fictícios e ilustrativos. A Lumina Solar é uma empresa inventada que
instala painéis solares residenciais em Belo Horizonte e região. O
orçamento é gratuito e pedido pelo WhatsApp.

### Entrada

```yaml
entrada: canais/site/0311-2026-10-22-orcamento-solar/README.md
comportamento_desejado: pedir orçamento pelo WhatsApp
persona_principal: persona-03 (casal com conta de luz acima de R$ 450, casa própria)
problema_relatado: a página recebe visitas e poucas pessoas clicam no WhatsApp
fontes:
  - .inboundfy/context/depoimentos.json (2 depoimentos com consentimento)
  - .inboundfy/context/ofertas.md (financiamento em até 72x por parceiro; vistoria gratuita)
  - acervo/0311-2026-10-22-orcamento-solar/faq.md
```

### Trecho original do topo

> ÚLTIMAS VAGAS! A tarifa de energia vai disparar e quem não instalar agora
> vai pagar caro. Não fique para trás: seus vizinhos já economizam. Peça seu
> orçamento HOJE.

### Forças mapeadas

| Força | Leitura | Fonte |
| --- | --- | --- |
| Empurrão | Conta alta todo mês | `faq.md`: pergunta mais frequente é "quanto vou economizar?" |
| Atração | Conta menor e valorização do imóvel | Simulações do acervo |
| Ansiedade | Medo de golpe, de dano no telhado e de não ter retorno | `faq.md`: 4 das 10 perguntas tratam telhado e garantia |
| Hábito | "Pagar a conta" não exige nenhuma ação | Entrevistas do acervo |

A página original só trabalhava o empurrão, com medo. Não respondia à
ansiedade, que é a força mais forte nesta persona.

### Princípios escolhidos

| Estágio | Princípio | Aplicação | Sustentação |
| --- | --- | --- | --- |
| Atenção | Relevância pessoal | "Sua conta passa de R$ 450? Veja quanto ela cairia com painéis no seu telhado." | Perfil da persona |
| Confiança | Prova social real | Depoimento de Marcos e Lívia, Contagem, com foto da instalação | `depoimentos.json` |
| Confiança | Admissão de limite | "Nem todo telhado serve. Na vistoria gratuita, dizemos se o seu serve antes de qualquer proposta." | Processo registrado em `ofertas.md` |
| Ação | Primeiro passo pequeno | CTA "Mandar foto da conta pelo WhatsApp", com microcopy "a simulação chega em até 1 dia útil" | Processo comercial |

### Removido

- "ÚLTIMAS VAGAS": não há limite de vagas registrado. Escassez inventada.
- "A tarifa vai disparar": previsão sem fonte. Medo artificial.
- "Seus vizinhos já economizam": consenso sem número.
- "Não fique para trás": culpa e pressão social sem dado.

### Interpretação

A taxa baixa vinha da ansiedade não respondida, não de falta de urgência. O
novo topo troca pressão por informação e transforma a vistoria em resposta
ao medo do telhado. A falha provável seria manter "últimas vagas" por hábito
de campanha: sem quantidade e data registradas, isso configura publicidade
enganosa.

## Checklist

- [ ] O comportamento desejado está escrito com verbo e objeto.
- [ ] As quatro forças estão mapeadas com fonte.
- [ ] Cada princípio escolhido responde a uma força mapeada.
- [ ] Toda prova social vem de `depoimentos.json` ou fonte registrada.
- [ ] Urgência e escassez têm data, quantidade ou motivo verificável.
- [ ] Preço total, fidelidade e renovação aparecem antes do CTA quando existem.
- [ ] Cada aplicação passou no teste de limites éticos e legais.
- [ ] Princípios rejeitados estão registrados com motivo.
- [ ] Três opções de abertura ou CTA foram apresentadas quando cabível.

## Erros comuns

- **Empilhar gatilhos.** Escassez, urgência, autoridade e prova social no
  mesmo bloco. O leitor percebe a pressão e desconfia.
- **Contador falso.** Cronômetro que reinicia ao recarregar a página. Além de
  enganoso, é fácil de descobrir e destrói a confiança.
- **Autoridade emprestada.** Citar "especialistas recomendam" sem nome,
  credencial e fonte.
- **Responder só à dor.** Agitar o problema e ignorar o medo da troca, que
  quase sempre é a força que mais impede a ação.
- **Ancoragem desonesta.** Preço "de" que nunca foi praticado. O CDC trata
  como publicidade enganosa.
- **Escolha padrão contra a pessoa.** Caixa de renovação automática ou de
  envio de ofertas já marcada sem informação clara.
