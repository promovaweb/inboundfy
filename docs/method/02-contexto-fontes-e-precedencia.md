# Contexto, fontes e precedência

## Fontes gerenciadas

`.inboundfy/context/` contém 15 arquivos de dados estruturados. O setup garante
a presença dos templates; `inboundfy-contexto-*` preenche e atualiza o conteúdo.
Arquivos existentes nunca são substituídos numa atualização.

## Fontes descobertas

O utilitário do setup percorre o projeto sem seguir symlinks, ignorando
dependências, builds, saídas, diretórios de agente, `.inboundfy/` e submódulos
Git. Inclui:

- Markdown cujo nome é composto em maiúsculas;
- todos os Markdown dentro de `brand/`, qualquer que seja a capitalização.

O inventário registra caminho relativo, headings e hash. A classificação e os
conflitos ficam em `.inboundfy/fontes-projeto.md`. Nenhuma fonte é copiada ou
alterada.

## Precedência operacional

1. instruções explícitas do usuário para a execução;
2. fatos confirmados no contexto e fontes canônicas classificadas;
3. regras de canal e brief;
4. pesquisa externa com evidência;
5. hipóteses, sempre identificadas.

Proibições e estruturas proibidas são vetos absolutos, sem compensação.
Quando `brand/` existe, regras visuais e verbais relevantes também entram na
validação. Conflito material impede a decisão até ser resolvido.
