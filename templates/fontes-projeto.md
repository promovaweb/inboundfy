# Fontes Markdown do Projeto

> Inventário gerado por `inboundfy-setup`. Os arquivos originais permanecem em
> seus caminhos e não são copiados para `.inboundfy/`.

## Metadados

- **Raiz pesquisada:** {caminho relativo}
- **Atualizado em:** {data}
- **Resultado:** {quantidade de fontes encontradas ou nenhum arquivo}

## Regra de descoberta

O setup procura arquivos Markdown cujo nome, sem a extensão, tenha ao menos
uma letra e use somente letras maiúsculas, números, hífens ou sublinhados.
`README.md`, `AGENTS.md`, `PRODUCT.md` e `COPY-GUIDE.md` são exemplos válidos.
`readme.md` e `Product.md` ficam fora.

Se `brand/` existir na raiz, todo Markdown dentro dela entra no inventário,
independentemente de usar maiúsculas ou minúsculas. A pasta pode conter
manual, voz, tokens, aplicações, logos e outras fontes canônicas de marca.
Ativos não Markdown permanecem no caminho original e são consultados pelas
skills visuais quando relevantes; o setup não os copia.

A busca não entra em `.git/`, `.inboundfy/`, `.codex/`, `.claude/`, `.agents/`,
`node_modules/`, `vendor/`, `.venv/`, `dist/`, `build/`, `coverage/`, nos
diretórios de brainstorm e conteúdo gerado, nem em submódulos Git. Um caminho
ignorado só entra quando o usuário solicitar sua inclusão.

## Fontes encontradas

| Caminho | Classe | Assuntos | Uso | Observação |
| --- | --- | --- | --- | --- |
| {caminho relativo} | {instrução, factual, editorial, operacional ou referência} | {assuntos} | {ativo, complementar, conflitante ou ignorado} | {nota curta} |

Quando a busca não encontrar candidatos, registre `Nenhuma fonte encontrada`
no lugar da tabela.

## Conflitos

| Assunto | Fonte A | Fonte B | Tratamento |
| --- | --- | --- | --- |
| {assunto ou nenhum} | {caminho} | {caminho} | {fonte escolhida ou confirmação pendente} |

## Precedência

1. `AGENTS.md` e `CLAUDE.md` governam o comportamento do agente no escopo em
   que se aplicam.
2. `.inboundfy/context/` guarda os fatos de negócio já confirmados.
3. `brand/`, quando existir, governa identidade, voz, logos, cores,
   tipografia e aplicações de marca no domínio que documentar.
4. Um Markdown descoberto que declare responsabilidade explícita por um
   domínio pode complementar o contexto correspondente.
5. Outros Markdown em maiúsculas servem como referência e não substituem
   fatos confirmados.
6. Divergências ficam registradas nesta página e exigem confirmação. Nenhuma
   skill corrige silenciosamente a fonte original ou o `context/`.
