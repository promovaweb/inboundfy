# Permissão de citação e manutenção do cadastro

Leia nos passos 6 e 7 do fluxo de `inboundfy-contexto-concorrentes`. Este
arquivo define como gravar a permissão de citação nominal, como ela interage
com `context/proibicoes.md`, quais estados um rival pode ter e quando cada
fato precisa ser conferido de novo.

## Permissão de citação nominal

| Situação | Valor gravado | Observação |
| --- | --- | --- |
| Usuário confirma com autor e data | `sim; autorizado por {autor} em {data}` | Vale para todos os canais, salvo ressalva gravada |
| Usuário confirma só para um canal | `sim, só em {canal}; autorizado por {autor} em {data}` | Demais canais tratam como "não" |
| Usuário nega | `não; definido por {autor} em {data}` | Peças usam "outras ferramentas" ou descrevem a categoria |
| Usuário não sabe | `não; aguardando confirmação de {quem decide}` | Padrão seguro até a resposta |
| Veto em `context/proibicoes.md` | `não; veto em proibicoes.md` | O veto prevalece sobre qualquer resposta |
| Rival inativo | Mantém o último valor | Conteúdo novo não cita rival inativo sem nova confirmação |

Antes de gravar "sim", leia `context/proibicoes.md` procurando: o nome do rival,
a palavra "comparação" ou "concorrente", vetos de adjetivos e vetos de canal.
Registre na resposta ao usuário o que foi encontrado, mesmo quando nada
impede a citação.

Permitir a citação não libera qualquer comparação. A página pública ainda
segue as regras de publicidade comparativa aplicadas por
`inboundfy-concorrentes`: dado verificável, itens equivalentes e nenhuma
depreciação do rival.

## Estados do rival

| Estado | Quando usar | Efeito nas peças |
| --- | --- | --- |
| `ativo` | Rival em operação e relevante para a persona | Pode ser considerado em comparação |
| `observacao` | Rival novo, ainda sem dado suficiente | Só uso interno, nunca em conteúdo público |
| `inativo` | Encerrou, foi comprado ou saiu da categoria | Não entra em conteúdo novo; peças antigas são revistas |

Grave a mudança de estado no histórico com data e motivo.

## Validade dos fatos

| Campo | Conferir de novo a cada | Gatilho extra |
| --- | --- | --- |
| Preço de referência | 90 dias | Antes de campanha que cite preço |
| O que oferecem | 180 dias | Lançamento anunciado pelo rival |
| Onde são fortes | 180 dias | Mudança no padrão de perdas comerciais |
| Diferença da empresa | 180 dias | Mudança na oferta da própria empresa |
| Citação nominal | 12 meses | Troca de diretoria ou de política comercial |

Quando um campo passar da validade, não apague. Acrescente ao campo a marca
`(rever: consultado em {data})` e avise a skill que pediu o dado.

## Histórico de mudanças

Cada correção vira uma linha, da mais antiga para a mais recente:

```markdown
- **Histórico:**
  - 2026-11-12: entrada criada
  - 2027-02-03: preço de referência mudou de "R$ 59 por profissional" para "R$ 64 por profissional" (página de preços)
  - 2027-02-03: citação nominal mudou de "sim" para "não" (diretoria comercial, reunião de 2027-02-01)
```

O histórico explica por que uma peça antiga cita o rival e uma nova não cita.
Ele também mostra quando a diferença da empresa deixou de valer.

## Rival que mudou de nome ou foi comprado

1. Mantenha o bloco com o nome novo no título.
2. Registre o nome anterior no histórico.
3. Revise a citação nominal: a autorização dada ao nome antigo não passa
   automaticamente para a empresa compradora.
4. Avise `inboundfy-concorrentes` para rever páginas comparativas publicadas
   que usam o nome antigo.

## LGPD no cadastro

O arquivo guarda dados de empresas, não de pessoas. Não registre nome, email ou
telefone de funcionários do rival nem de autores de avaliações. Quando uma
fonte for uma avaliação pública, grave a plataforma e a data, sem identificar
quem escreveu.
