# REFERENCIA.md; inboundfy-planejamento-00-triagem

## Template do `README.md` do pacote

```markdown
# Pacote: <slug-do-pacote>

- **Origem do material:** <transcrição, peça-base, release, pesquisa, etc.>
- **Data de criação:** <data>
- **escolha:** <pacote completo | peça avulsa>
- **Motivo da escolha:** <por que o material sustenta múltiplas peças, ou por que já é um brief específico>
- **Status atual:** 00-entrada
- **Canais previstos (se já visível na triagem):** <lista, opcional>
```

## regra objetivo: pacote completo vs. peça avulsa

| Sinal no material recebido | escolha |
| --- | --- |
| Transcrição de aula, reunião ou entrevista com mais de um tema explorável | Pacote completo |
| Pesquisa ou dado extenso com múltiplos ângulos possíveis | Pacote completo |
| Lançamento de produto, feature ou mudança relevante | Pacote completo |
| Pedido já nomeia canal + tema + objetivo em uma frase ("escreva um post de LinkedIn sobre X") | Peça avulsa |
| Usuário pede explicitamente "só uma peça, não preciso do pacote todo" | Peça avulsa, mesmo que o material permitisse mais |

Regra de desempate: se o material permite pacote completo mas o usuário não
deixou claro o que quer, pergunte antes de decidir; não assuma pacote
completo por padrão só porque o material é longo.

## Exemplo preenchido (fictício)

Material recebido: transcrição de 40 minutos de uma reunião interna sobre
"por que clientes cancelam no primeiro mês de uso de um software de gestão
de estoque fictício".

```markdown
# Pacote: cancelamento-primeiro-mes-estoque

- **Origem do material:** transcrição de reunião interna (call gravada)
- **Data de criação:** 2026-03-02
- **escolha:** pacote completo
- **Motivo da escolha:** a reunião cobre três causas distintas de
  cancelamento, cada uma com potencial de virar peça em canal diferente
  (blog explicativo, post de LinkedIn com opinião, e-mail de retenção).
- **Status atual:** 00-entrada
- **Canais previstos:** blog, linkedin, email
```

## Checklist de qualidade

- [ ] `00-entrada/material-original.md` contém o material bruto sem
      qualquer edição, resumo ou correção.
- [ ] escolha (pacote completo/peça avulsa) está registrada com motivo, não
      só a escolha isolada.
- [ ] Se pacote completo, a estrutura de diretório mínima
      (`README.md` + `00-entrada/`) foi criada no caminho certo de
      `context/canais.md`.
- [ ] Usuário foi informado do próximo passo antes da skill encerrar.

## Erros comuns

- Resumir ou "limpar" o material já na triagem; isso é trabalho de
  `inboundfy-planejamento-01-saneamento`, não desta fase.
- Decidir pacote completo automaticamente para qualquer material longo,
  mesmo quando o usuário só queria uma peça rápida.
- Criar o pacote em um caminho diferente do definido em
  `context/canais.md`, gerando dois "diretórios de trabalho" no mesmo
  projeto.
