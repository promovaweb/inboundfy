# Aprendizado do projeto

Este arquivo reúne sugestões, correções, alinhamentos e dicas recebidos do
usuário. Ele funciona como memória operacional do projeto, sem substituir
`marca-voz.md`, `glossario.md` ou `proibicoes.md`.

## Como o registro funciona

1. Cada orientação recebe um ID `AP-0001`, `AP-0002` e assim por diante.
2. O texto recebido fica preservado junto com a interpretação aplicada.
3. Toda orientação informa seu alcance: `peça`, `canal`, `persona` ou
   `projeto`.
4. Uma sugestão sem confirmação permanece `proposta` e não vira regra geral.
5. Uma orientação confirmada para todo o projeto também atualiza o arquivo
   canônico adequado quando for uma regra de voz, grafia ou proibição.
6. Uma nova orientação não apaga registros anteriores. Ela cria um novo
   registro e pode substituir o anterior de forma explícita.

## Registros

Nenhum aprendizado registrado ainda.

## Modelo de registro

```md
### AP-0001 | título curto

- **Estado:** proposta | confirmada | aplicada | arquivada
- **Data:** AAAA-MM-DD
- **Tipo:** sugestão | correção | alinhamento | dica
- **Alcance:** peça | canal | persona | projeto
- **Canal:** nome ou não se aplica
- **Persona:** ID ou não se aplica
- **Arquivo relacionado:** caminho ou não se aplica
- **Orientação recebida:** texto do usuário
- **Interpretação:** regra operacional extraída
- **Aplicação:** alteração feita na peça ou no contexto
- **Arquivo canônico atualizado:** caminho ou não se aplica
- **Fonte:** conversa, arquivo ou pessoa responsável
- **Validação seguinte:** como conferir o uso futuro
```
