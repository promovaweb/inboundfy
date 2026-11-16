# Manual de LinkedIn

O post entrega um argumento completo no feed. O artigo desenvolve uma dúvida com mais espaço e subtítulos. A autoria determina quais experiências podem aparecer em primeira pessoa; uma fonte externa não vira lembrança do autor.

## Diagnóstico antes da redação

1. O brief solicita post nativo ou artigo? Qual dúvida profissional deve resolver?
2. Quem assina? O tema e a experiência constam em `context/pessoas.md`?
3. A abertura se sustenta sem adjetivos de autoridade nem resultado emprestado?
4. Quais fontes sustentam números, casos e condições de oferta?
5. O fechamento pede conversa, leitura ou ação comercial? Qual destino recebe o clique?

## Formato e orçamento de texto

| Formato | Faixa editorial | Estrutura |
| --- | --- | --- |
| post | 800 a 1.800 caracteres com espaços; encurte se a ideia terminar antes | Abertura concreta, argumento em parágrafos e ação final |
| artigo | 700 a 1.400 palavras quando a profundidade justificar | Título, introdução, subtítulos, exemplo interpretado, limite e fechamento |
| título de artigo | 40 a 80 caracteres como meta | Tema e recorte que o corpo entrega |

Post: bloco de texto puro pronto para colar. Frontmatter, headings do arquivo e notas ficam fora dele. Hashtags opcionais não são headings Markdown. Artigo: Markdown pode estruturar o arquivo, mas confira a apresentação no editor. Mantenha `formato: post|artigo`, `autor` quando definido, `estrutura`, `brief` e envelope compartilhado. Conte o bloco copiável, não todo o README. Evite caracteres estilizados para simular negrito.

As faixas são escolhas editoriais, não limites universais da plataforma nem
promessas de alcance. O brief aprovado pode ajustá-las com motivo registrado.
Confirme limites técnicos na ajuda oficial ou no campo de publicação da conta
antes do envio; registre a data. Não transforme corte de interface em tamanho do gancho.

## Método de construção

1. Confira autoria e competência antes de redigir. Sem experiência documentada, escreva explicação sustentada por fontes sem inventar relato pessoal.
2. Escolha a abertura pela fonte disponível:

| Fonte | Abertura adequada | Limite |
| --- | --- | --- |
| Relato autorizado | Incidente e interpretação do autor | Não ampliar para todo o mercado |
| Dado documentado | Valor, base e recorte | Não atribuir causalidade sem suporte |
| Procedimento de produto | Dúvida prática e objeto | Não converter função em resultado financeiro |

3. Para post, desenvolva causa, exemplo e aplicação em parágrafos completos. Para artigo, anote a pergunta respondida por cada seção; inclua interpretação e variação que pede ajuste.
4. Respeite a estrutura aprovada: AIDA para ação comercial curta, PAS para problema e solução, FAB para funcionalidade. Não force venda na peça educativa.
5. Feche com pergunta que o público possa responder pela própria prática ou com destino específico. Evite pedir comentário apenas para aumentar distribuição.
6. Rode `inboundfy-copy-editor` e confirme se a revisão preservou voz e competência do autor.

## Template do canal

No passo de escrita, abra [modelos prontos](references/modelos-e-exemplo.md).
Use o modelo do formato aprovado. Complete o envelope compartilhado antes
dos campos do canal. Separe corpo público, fontes e notas de produção.

## Exemplo com empresa brasileira fictícia

A Giro de Bairro, empresa fictícia de software para oficinas em Curitiba, publica um post de Elisa Moura, pessoa fictícia. O registro autoriza sua fala sobre ordens de serviço, mas não contém resultado de receita. A peça explica como o campo Próxima ação permite retomar um serviço.

A entrada e a peça completa estão em [modelos e exemplo](references/modelos-e-exemplo.md).
Os números, nomes e condições deste caso não viram contexto de outro projeto.

## Checklist numerado do canal

A numeração coincide com `inboundfy-validador-linkedin`. Registre conforme, falha ou
não aplicável, com motivo e local. O passe visual avalia copy e apoio previsto.
A arte final segue para a validadora de imagem correspondente, quando houver.

1. [ ] **Literal | Envelope.** Formato, autor quando houver, estrutura, ID, brief, persona e fontes estão vinculados.
2. [ ] **Literal | Post copiável.** Post nativo contém texto puro, sem headings, asteriscos de ênfase ou links Markdown no bloco público.
3. [ ] **Semântica | Autoria.** Pessoa gramatical, competência e experiência correspondem ao registro de pessoas; caso externo não vira vivência própria.
4. [ ] **Semântica | Abertura.** A primeira linha nomeia assunto e recorte; o corpo sustenta os dados e a promessa.
5. [ ] **Estrutural | Argumento.** Post desenvolve uma ideia em parágrafos; artigo responde à dúvida em seções sem repetição ou fragmentação artificial.
6. [ ] **Semântica | Fontes e limites.** Casos, números e funcionalidades possuem origem; exemplo não vira comprovação de resultado geral.
7. [ ] **Estrutural | Formato e contagem.** Bloco copiável ou artigo foi contado; ajustes de faixa estão registrados e o campo de destino comporta a peça.
8. [ ] **Semântica | Persuasão.** AIDA, PAS e FAB aparecem quando pedidos, sem substituir fatos nem forçar venda no texto informativo.
9. [ ] **Semântica | Fechamento.** Há uma ação final ligada ao argumento; a pergunta pede resposta concreta e o destino existe.
10. [ ] **Visual | Apresentação.** Quebras preservam raciocínio; caracteres estilizados não simulam negrito; alt text acompanha imagem prevista.
11. [ ] **Literal | Vetos e dicionário.** Copy, título, metadados e notas respeitam termos e estruturas canônicas.
12. [ ] **Estrutural | Revisão e entrega.** Auditorias de copy e A5 estão vinculadas; a validadora recebe o texto inteiro antes do handoff.

## Erros comuns do canal

- Atribuir “dezenas de clientes” ao autor sem fonte: explique o mecanismo sem fabricar vivência.
- Deixar asteriscos no post copiável: separe formatação do arquivo e corpo público.
- Prometer faturamento porque o produto organiza ordens: descreva a função comprovável.
- Criar uma escada de frases de impacto: desenvolva a explicação em parágrafos.
- Alongar observação simples para preencher artigo: ajuste o formato pelo brief.
- Fechar com pergunta retórica e resposta pronta: peça uma informação concreta da prática do público.

## Medição após a publicação

Para conversa, observe comentários que tragam prática ou objeção. Para clique, compare cliques no destino rastreado e impressões da mesma janela. Registre autor, formato, tema e tamanho para comparar peças semelhantes. Alcance alto sem resposta ao objetivo pede revisão do recorte e da chamada.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirme sentinelas e origens.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): preserve envelope, ID e brief.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registre escolhas e perguntas.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): preserve o histórico.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique persona, voz e proibições.

Resolva caminhos abreviados `context/` por `.inboundfy/fontes-projeto.md`.
A instalação usa `.inboundfy/context/`. Não mova fontes nem grave dados do consumidor no framework.

## Guia específico do grupo

`inboundfy-especialista-linkedin` produz post nativo ou artigo de LinkedIn a partir do brief aprovado.
Leia `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md` e `CONTEXTO.md`.
Preserve o caminho definido por `context/canais.md`. Nos pacotes, mantenha
`brief` apontado para `04-briefs/` e o relatório em `06-auditoria/assets/`.

Se houver imagem no brief, encaminhe a copy aprovada para `inboundfy-especialista-linkedin-imagem`, com título, texto literal e alt text previsto.

Acione `inboundfy-copy-editor` no alcance definido pela SKILL.md e
`inboundfy-validador-linkedin` antes de considerar a peça pronta. Corrija os achados e
envie o conjunto para nova leitura integral. Após a aprovação, entregue a
`inboundfy-planejamento` arquivos, fontes, pendências e próxima ação.

## Estruturas na redação

No passo de redação, consulte [a aplicação por formato](references/estruturas-persuasivas.md) para executar a estrutura já aprovada no brief.
