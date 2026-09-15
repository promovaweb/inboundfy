# Cadência de auditorias anti-slop

O Inboundfy executa `inboundfy-anti-slop` em vários marcos. Cada ciclo tem
uma pergunta própria e não substitui os demais. O ciclo anterior não aprova
automaticamente o artefato após uma alteração.

## Matriz de execução

| Código | Marco | Entrada | Foco do ciclo | Registro | Próximo handoff |
| --- | --- | --- | --- | --- | --- |
| A0 | Entrada | `bruto.md` | localizar ruído, fórmulas prontas, promessas e afirmações vagas recebidas do usuário | `auditorias/anti-slop/00-entrada.md` | processamento |
| A1 | Processado | `processado.md` | conferir se a limpeza preservou sentido, fatos, ressalvas e voz | `auditorias/anti-slop/01-processado.md` | FAQ e pesquisa |
| A2 | Base editorial | `faq.md`, `pesquisa.md` e `base-editorial.md` | evitar resumo genérico, interpretação sem fonte e enriquecimento sem limite | `auditorias/anti-slop/02-base-editorial.md` | estratégia do acervo |
| A3 | Estratégia e brief | `estrategia.md` e brief | conferir especificidade de ângulo, persona, canal, CTA e reaproveitamento | `auditorias/anti-slop/03-estrategia-brief.md` | planejamento e produção |
| A4 | Rascunho inicial | outline, abertura e primeira unidade | detectar molde repetido antes de expandir uma peça longa | `auditorias/anti-slop/04-rascunho.md` | especialista do canal |
| A5 | Peça completa | asset do canal | revisar texto inteiro, incluindo front matter, títulos, listas, CTA e texto visual | `auditorias/anti-slop/05-peca.md` | validadora do canal |
| A6 | Pacote final | asset aprovado, relatórios e peças relacionadas | conferir repetição entre peças, contradições e perda de especificidade no conjunto | `auditorias/anti-slop/06-pacote.md` | pipeline e catálogo |

## Regras por marco

### A0: entrada preservada

Leia o bruto sem alterar o arquivo. Aponte sinais já presentes no material
recebido e separe esses sinais de problemas criados durante o processamento.
Uma ocorrência no bruto não justifica reescrever a fonte original.

### A1: processado

Leia o bruto e o processado lado a lado. Confirme que a remoção de ruído não
apagou fatos, nomes, números, ressalvas ou a ordem do raciocínio. Quando o
processado ganhar voz editorial, a auditoria precisa conferir também voz,
dicionário e proibições.

### A2: base editorial

Confira se títulos, resumos, frases aproveitáveis, benefícios e relações
continuam ligados ao material e à pesquisa. Marque como `PENDENTE` o que não
possui fonte ou resposta. A base editorial pode organizar e expandir o
contexto, mas não pode transformar hipótese em afirmação.

### A3: estratégia e brief

Leia as possibilidades de uso e o brief como orientação de produção. Rejeite
ângulo que serviria a qualquer negócio, CTA sem próxima ação, persona apenas
nominal ou promessa sem mecanismo, exemplo ou fonte. Ajuste o brief antes de
acionar a especialista quando o problema estiver na direção.

### A4: rascunho inicial

Antes de expandir uma peça longa, audite o outline, a abertura e a primeira
unidade substancial. Apresente três caminhos materialmente diferentes quando a
direção ainda estiver aberta, com o caminho recomendado primeiro, e aguarde a
opinião do usuário. Registre a escolha e o alcance no brief ou no arquivo de
trabalho.

### A5: peça completa

Faça a leitura integral depois da redação e antes da validadora. Procure sinais
que surgiram durante a expansão: frases intercambiáveis, cadência uniforme,
benefícios sem mecanismo, autoridade sem fonte e CTA decorativo. Corrija na
skill produtora e execute A5 novamente.

### A6: pacote final

Depois da aprovação individual, compare as peças relacionadas. Retire
repetição de abertura, tese, exemplo, CTA ou estrutura quando ela empobrecer o
conjunto. Se a alteração atingir uma peça, repita A5 e A6 dessa peça; se
alterar estratégia, persona, voz ou regra global, repita os marcos posteriores
afetados para todo o pacote.

## Registro e estados

Cada registro deve conter:

```yaml
etapa: A0 | A1 | A2 | A3 | A4 | A5 | A6
entrada: caminho ou ID
ciclo: 1
estado: aprovado | ajustes-necessarios | pendente
fontes:
  - caminho
achados:
  - trecho, regra, motivo e ação
proxima_acao: verbo + objeto + caminho
```

No layout padrão do acervo, os registros ficam em:

```text
acervo/<id>-<data>-<slug>/auditorias/anti-slop/
├── 00-entrada.md
├── 01-processado.md
├── 02-base-editorial.md
├── 03-estrategia-brief.md
├── 04-rascunho.md
├── 05-peca.md
└── 06-pacote.md
```

Em pacotes que usam `06-auditoria/`, preserve os mesmos códigos nos nomes dos
registros dentro dessa pasta. O `README.md` do pacote deve apontar para todos
os registros existentes.

Um ciclo com `ajustes-necessarios` retorna à skill responsável pelo artefato.
Um ciclo `pendente` aguarda resposta, fonte ou escolha do usuário. A palavra
`aprovado` só vale para o marco indicado no registro.

## Invalidação

Uma alteração em texto, brief, persona, voz, dicionário, proibição, fonte ou
canal invalida as auditorias posteriores ao ponto alterado. Preserve os
registros anteriores no histórico, marque-os como superados e execute as
ciclos necessários novamente.
