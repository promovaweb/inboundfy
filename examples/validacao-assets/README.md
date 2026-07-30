# Exemplos — Validação rígida de assets

Este pacote fictício mostra o ciclo completo entre
`thothfy-especialista-linkedin` e `thothfy-validador-linkedin`. Ele existe
como fixture documental e executável; não representa empresa ou produto real.

Além do caso principal, `casos/` cobre falha factual/comercial, estrutura
semanticamente proibida e divergência visual de marca.

## Sequência

| Etapa | Arquivo | Resultado |
| --- | --- | --- |
| Contexto de marca | `brand/manual-da-marca.md` | Fonte descoberta pelo setup, apesar do nome minúsculo. |
| Brief | `brief.md` | Define canal, voz e critérios de pronto. |
| Primeira produção | `01-candidato-reprovado.md` | Contém violações propositais. |
| Primeira validação | `02-relatorio-reprovacao.md` | Hard gate reprovado e retorno à produtora. |
| Segunda produção | `03-asset-corrigido.md` | Corrige o padrão no asset inteiro. |
| Segunda validação | `04-relatorio-aprovacao.md` | Dois passes zerados e asset aprovado. |
| Evidência executada | `05-evidencia-testes.md` | Registra comandos, data e resultados observados. |

## Casos adicionais

| Caso | Validadora | O que reprova |
| --- | --- | --- |
| `casos/email-oferta/` | `thothfy-validador-email` | Preço divergente da fonte e dois CTAs concorrentes. |
| `casos/blog-estrutura-semantica/` | `thothfy-validador-blog` | Molde repetido de definição, exemplo e benefício, mesmo sem expressão literal proibida. |
| `casos/instagram-imagem-brand/` | `thothfy-validador-instagram-imagem` | Dimensão errada, gradiente proibido e cor fora da paleta de `brand/`. |

## O que o teste comprova

O comando abaixo confirma o pareamento das 18 validadoras, executa o
validador estrutural, verifica a descoberta do manual em `brand/`, compara
as ocorrências da primeira rodada com o relatório e exige zero ocorrência na
aprovação:

```bash
python3 -m unittest discover -s tests -v
```

O candidato reprovado contém linguagem ruim de propósito. Ele não é modelo
de escrita; serve para provar que uma única violação impede a aprovação,
mesmo quando o restante da peça poderia receber boa nota.
