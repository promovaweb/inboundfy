# REFERENCIA.md; inboundfy-voz

Referência para definir a voz de uma empresa de forma aplicável. Um guia de
voz funciona quando duas pessoas diferentes, ou um agente, escrevem o mesmo
aviso e o resultado soa como a mesma empresa. Três adjetivos soltos ("direta,
humana, inovadora") não fazem isso. O que faz é atributo com limite, tom por
situação e exemplo aprovado.

## Mapa de leitura

| Arquivo | Passo do fluxo | Conteúdo |
| --- | --- | --- |
| [references/analise-de-amostras.md](references/analise-de-amostras.md) | Passo 3 | Como ler textos aprovados e rejeitados e extrair padrões medíveis. |
| [references/roteiro-de-entrevista.md](references/roteiro-de-entrevista.md) | Passo 4 | Perguntas por bloco, com o que cada resposta alimenta no guia. |
| [references/tons-por-situacao.md](references/tons-por-situacao.md) | Passo 6 | Eixos de tom, matriz de situações e como escrever cada célula. |
| Esta página | Passos 5, 9 e 10 | Formato dos atributos, modelo de gravação, caso completo e checklist. |

## Voz, tom, registro e vocabulário

| Camada | O que é | Muda com | Exemplo |
| --- | --- | --- | --- |
| Voz | Identidade estável da marca | Quase nunca. Só com reposicionamento | "Franca e do ramo" |
| Tom | Variação emocional da voz | Situação e estado do leitor | Mais calmo num alerta, mais leve num post |
| Registro | Grau de formalidade da língua | Canal | Coloquial no WhatsApp, culto na proposta |
| Vocabulário | Palavras escolhidas e evitadas | Persona e domínio | "frete" e não "logística de última milha" |

## Formato do atributo de voz

Cada atributo tem três partes. O "não é" impede que o atributo vire caricatura.
O "na prática" dá uma frase que qualquer pessoa consegue imitar.

```markdown
### {{Atributo}}

- **É:** {{comportamento concreto na escrita}}
- **Não é:** {{o excesso ou a caricatura do atributo}}
- **Na prática:** "{{frase de exemplo no domínio da empresa}}"
- **Evite:** "{{frase que parece o atributo mas passa do limite}}"
```

Três atributos bastam. Com cinco ou mais, ninguém lembra e eles começam a se
contradizer.

## Template das seções complementares de marca-voz.md

As seções fixas do template (Tom, Vocabulário preferido, Vocabulário evitado,
Exemplos de bom texto, Exemplos de texto a evitar, Assinatura e fechamento
padrão) continuam no lugar e recebem o conteúdo correspondente. As seções
abaixo entram depois delas.

```markdown
## Atributos de voz

### {{Atributo 1}}
- **É:** {{...}}
- **Não é:** {{...}}
- **Na prática:** "{{...}}"

## Eixos de tom

| Eixo | Posição (1 a 5) | Leitura |
| --- | --- | --- |
| Formal (1) a casual (5) | {{n}} | {{o que isso significa na frase}} |
| Sério (1) a bem-humorado (5) | {{n}} | {{...}} |
| Respeitoso (1) a irreverente (5) | {{n}} | {{...}} |
| Factual (1) a entusiasmado (5) | {{n}} | {{...}} |

## Tons por situação

| Situação | Estado do leitor | Tom | Faça | Evite | Exemplo |
| --- | --- | --- | --- | --- | --- |
| {{situação}} | {{como a pessoa chega}} | {{ajuste}} | {{...}} | {{...}} | "{{frase}}" |

## Registro e pessoa por canal

| Canal | Pessoa verbal | Registro | Emoji | Observação |
| --- | --- | --- | --- | --- |
| {{canal}} | {{você, vocês, nós}} | {{culto, coloquial}} | {{sim, não, quais}} | {{...}} |

## Ajustes por persona

| Persona | Foco | Vocabulário | Nível técnico |
| --- | --- | --- | --- |
| {{persona-xx}} | {{o que priorizar}} | {{termos dela}} | {{...}} |

## Regras de formatação

- Exclamação: {{quando pode}}
- Caixa alta: {{quando pode}}
- Números e valores: {{regra}}
- Tamanho de parágrafo por canal: {{regra}}

## Histórico do guia

- {{AAAA-MM-DD}}: {{o que mudou, quem aprovou, alcance}}
```

## Exemplo completo (ilustrativo)

Empresa fictícia: **Vigia Frotas**, de Campinas (SP). Vende rastreamento de
caminhões para transportadoras com 5 a 50 veículos. Os alertas chegam no
WhatsApp do gestor. Os dados e textos abaixo são inventados.

### Amostras

- Aprovadas: um email do sócio para clientes explicando uma queda de sinal, a
  mensagem de boas-vindas do WhatsApp e um post sobre custo de caminhão parado.
- Rejeitadas: a home atual ("Soluções inteligentes de telemetria para
  otimizar sua operação logística") e um anúncio da agência anterior com
  "Revolucione sua frota!!!".

### O que a análise mostrou

- O sócio escreve em primeira pessoa do plural, trata por "você", usa frase
  de 12 a 18 palavras e sempre diz o horário exato do problema.
- Os textos aprovados usam "caminhão", "rota", "frete", "motorista". Os
  rejeitados usam "ativo", "telemetria", "operação logística".
- Nenhum texto aprovado usa exclamação.

### Atributos escolhidos

Opções apresentadas: (1) franca, do ramo e calma, (2) técnica, precisa e
discreta, (3) próxima, bem-humorada e prática. A pessoa escolheu a primeira.

#### Franca

- **É:** dizer o que o sistema faz e o que não faz, com número.
- **Não é:** pessimista ou ríspida.
- **Na prática:** "O rastreador manda a posição a cada 2 minutos. Em trecho
  sem sinal, a posição chega quando a conexão volta."
- **Evite:** "Não garantimos nada em área sem sinal."

#### Do ramo

- **É:** falar como quem conhece pátio, rota e frete.
- **Não é:** gíria de caminhoneiro forçada nem jargão de TI.
- **Na prática:** "Caminhão parado mais de 40 minutos fora da rota gera
  alerta no seu WhatsApp."
- **Evite:** "Monitore a ociosidade dos seus ativos com telemetria
  embarcada."

#### Calma

- **É:** dar o próximo passo quando a notícia é ruim.
- **Não é:** fria nem alarmista.
- **Na prática:** "O caminhão ABC-1D23 saiu da rota às 14h10 na Anhanguera,
  km 98. Ligue para o motorista. Se não atender, toque em 'acionar central'."
- **Evite:** "ATENÇÃO! Possível roubo de carga!"

### Eixos de tom

| Eixo | Posição | Leitura |
| --- | --- | --- |
| Formal a casual | 4 | Conversa de balcão, sem gíria. |
| Sério a bem-humorado | 2 | Humor leve só em post educativo. |
| Respeitoso a irreverente | 2 | Nunca zomba de concorrente nem de motorista. |
| Factual a entusiasmado | 1 | Número e horário no lugar de adjetivo. |

### Trecho da matriz de tons

| Situação | Estado do leitor | Tom | Exemplo |
| --- | --- | --- | --- |
| Post educativo | Curioso, sem pressa | Mais leve | "Caminhão parado no pátio também gasta: seguro, parcela e motorista correm do mesmo jeito." |
| Alerta de desvio | Tenso | Mais curto, só fatos e ação | "Saiu da rota às 14h10, km 98. Ligue para o motorista." |
| Cobrança atrasada | Constrangido ou esquecido | Neutro, sem culpa | "A fatura de outubro venceu dia 10. O Pix de pagamento está aqui. O rastreio segue ativo até dia 25." |
| Reclamação pública | Irritado | Assumir e dar prazo | "Você tem razão: o alerta das 9h chegou 20 minutos atrasado. Estamos vendo a causa e respondemos aqui até 17h." |

### Registro e LGPD

- WhatsApp: coloquial, frases curtas, sem emoji em alerta.
- Proposta comercial: norma culta, mesma pessoa verbal.
- Ao falar da localização do motorista, a voz franca pede uma frase que diga
  para que o dado serve e quem vê. A pendência foi registrada para
  `inboundfy-contexto-oferta` confirmar o texto aprovado sobre LGPD.

### Teste

O aviso real de manutenção foi reescrito nas situações "alerta" e "post
educativo". A pessoa trocou "toque em acionar central" por "chame a central
no botão vermelho", porque é o nome que os clientes usam. A troca entrou no
vocabulário preferido.

### Encaminhamentos

- `inboundfy-contexto-marca`: veto de "Revolucione" e de exclamação tripla
  em `proibicoes.md`.
- `inboundfy-contexto-institucional`: grafia "Vigia Frotas" e formato de
  placa "ABC-1D23" em `glossario.md`.
- `aprendizado.md`: escolha dos três atributos, alcance `projeto`.

## Checklist

- [ ] O `marca-voz.md` atual foi lido antes de perguntar.
- [ ] As amostras aprovadas e rejeitadas foram analisadas com padrões
      anotados.
- [ ] Três atributos com "é, não é, na prática".
- [ ] Os atributos foram escolhidos entre três opções diferentes.
- [ ] Os quatro eixos de tom têm posição e leitura.
- [ ] A matriz cobre venda, suporte, má notícia e conteúdo educativo.
- [ ] Pessoa verbal e registro definidos por canal ativo.
- [ ] Vocabulário preferido e evitado com motivo.
- [ ] Vetos e grafias encaminhados às skills de contexto donas.
- [ ] Trecho real testado e aprovado pela pessoa.
- [ ] Seções fixas do template preservadas.
- [ ] Escolhas registradas com alcance em `aprendizado.md`.

## Erros comuns

- Definir a voz com adjetivos que servem para qualquer empresa ("humana,
  próxima, inovadora").
- Confundir voz com tom e escrever um guia que só funciona em post de
  lançamento.
- Copiar a voz de uma marca admirada sem checar se combina com o público.
- Criar atributos que se anulam, como "ousada" e "discreta" sem dizer onde
  cada um vale.
- Esquecer as situações difíceis (cobrança, falha, reclamação), que são onde
  a voz mais aparece.
- Gravar preferência de estilo como veto em `proibicoes.md`.
- Inventar exemplo "aprovado" sem marcar como ilustrativo.
- Pular o teste em trecho real e descobrir depois que o guia não funciona.
- Mudar a identidade central para atender uma persona. A persona muda foco e
  vocabulário. A identidade fica.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-voz**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

O grupo **capacidade** aplica um método ao objetivo informado e entrega um
resultado que outras skills consomem. Aqui o resultado é o guia de voz dentro
de `marca-voz.md`, lido por toda skill de redação e por
`inboundfy-copy-editor`. Os campos mínimos do registro da execução são estes:

- **objetivo:** definir, revisar ou expandir a voz;
- **entrada:** amostras analisadas e respostas da entrevista;
- **contexto:** arquivos lidos, incluindo `brand/` quando existir;
- **resultado:** seções gravadas e trecho de teste aprovado;
- **próxima ação:** encaminhamentos às skills de contexto e personas
  pendentes.
