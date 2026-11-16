# Etapa 00: triagem

Primeira etapa do pipeline (fase 0 de `METODOLOGIA.md`). Não escreve copy nem
produz artefato final. Escolhe o caminho (pacote completo ou peça avulsa),
preserva o material e prepara as etapas seguintes.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/canais.md`: diretório de trabalho do pacote. Se não estiver
  preenchido, pare e acione `inboundfy-contexto-operacao`.
- `context/campanhas.md`: campanha de origem, quando o item vier de
  `inboundfy-estrategia`.

## Entrada esperada

Material bruto de qualquer natureza: transcrição de reunião ou aula,
peça-base, nota de pesquisa, release de produto, briefing informal ou item
alocado no calendário. Ideia curta sem tese ou prova chega por
`inboundfy-brainstorm`.

## Fluxo

1. Confirme que `context/canais.md` tem o diretório de trabalho e que o
   caminho existe. Se faltar diretório ou arquivo de apoio, acione
   `inboundfy-setup`. Não recrie a estrutura nesta etapa.
2. Encaminhe ideia curta para `inboundfy-brainstorm` antes de abrir pacote.
3. Para as demais entradas, escolha pela regra abaixo:
   - **Pacote completo:** material substancial que gera várias peças em
     vários canais.
   - **Peça avulsa:** pedido que já é brief de uma peça em um canal. Siga
     para a etapa 04 com brief mínimo, pulando as etapas 01 a 03.
4. Para pacote completo, crie dentro do caminho de `context/canais.md`:

   ```text
   <diretório-de-trabalho>/<slug-do-pacote>/
   ├── README.md
   └── 00-entrada/
       └── material-original.md
   ```

5. Salve o material bruto, sem edição, em `00-entrada/material-original.md`.
   Esse arquivo nunca é reescrito.
6. Execute `inboundfy-anti-slop` no marco A0 em modo somente leitura e
   registre `06-auditoria/anti-slop-00-entrada.md`.
7. Escreva o `README.md` do pacote no modelo de
   [REFERENCIA.md](../../REFERENCIA.md), com campanha de origem quando houver.
8. Informe o próximo passo: etapa 01 para pacote completo, etapa 04 para
   peça avulsa.

## Saída

- Pacote completo: diretório novo com `README.md` e `00-entrada/`.
- Peça avulsa: nenhum arquivo novo. A etapa encaminha para a 04.

## Validação

- O material original está preservado, sem edição, em `00-entrada/`.
- O registro A0 foi criado sem alterar a origem.
- A escolha entre pacote completo e peça avulsa está registrada com motivo.
- Nenhuma etapa posterior foi executada nesta etapa.

## Idempotência

Material novo para um pacote existente abre pacote novo. Um pacote
corresponde a uma origem de material.

## Regra de escolha

| Sinal no material recebido | Escolha |
| --- | --- |
| Transcrição de aula, reunião ou entrevista com mais de um tema | Pacote completo |
| Pesquisa ou dado extenso com vários ângulos | Pacote completo |
| Lançamento de produto, funcionalidade ou mudança relevante | Pacote completo |
| Pedido nomeia canal, tema e objetivo numa frase | Peça avulsa |
| A pessoa pede só uma peça | Peça avulsa, mesmo que o material permita mais |

Desempate: se o material permite pacote completo mas a pessoa não deixou
claro o que quer, pergunte. Não assuma pacote completo só porque o material
é longo.

## Exemplo

Caso fictício. Material: transcrição de 40 minutos de reunião interna sobre
por que clientes cancelam no primeiro mês de uso de um software de estoque.

```markdown
# Pacote: cancelamento-primeiro-mes-estoque

- **Origem do material:** transcrição de reunião interna
- **Campanha de origem:** nenhuma
- **Data de criação:** 2026-03-02
- **Escolha:** pacote completo
- **Motivo da escolha:** a reunião cobre três causas distintas de
  cancelamento, cada uma com potencial de peça em canal diferente.
- **Status atual:** 00-entrada
- **Canais previstos:** blog, linkedin, email
```

## Checklist

- [ ] `00-entrada/material-original.md` contém o material sem edição.
- [ ] A escolha tem motivo registrado.
- [ ] A estrutura mínima foi criada no caminho de `context/canais.md`.
- [ ] O A0 foi registrado.
- [ ] A pessoa foi informada do próximo passo.

## Erros comuns

- Resumir ou limpar o material na triagem. Isso é a etapa 01.
- Escolher pacote completo para qualquer material longo.
- Criar o pacote fora do caminho de `context/canais.md`.
