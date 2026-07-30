# Validação de asset — LinkedIn/fila-de-contratos

- **Asset:** `01-candidato-reprovado.md`
- **Brief:** `brief.md`
- **Produtora:** `thothfy-especialista-linkedin`
- **Validadora:** `thothfy-validador-linkedin`
- **Rodada:** 1
- **Veredito:** reprovado

## Fontes carregadas

- `brief.md`: lido.
- `brand/manual-da-marca.md`: lido.
- `context/proibicoes.md`: lido na instalação simulada.
- `context/estruturas-proibidas.md`: lido na instalação simulada.
- `ESCRITA.md`: lido.

## Hard gate de proibições

| Categoria | Passe literal | Passe semântico/estrutural | Ocorrências |
| --- | --- | --- | --- |
| Abertura genérica | Reprovado | Reprovado | `No cenário atual` no primeiro parágrafo. |
| Anúncio vazio | Reprovado | Reprovado | `É importante ressaltar` no segundo parágrafo. |
| Vocabulário vago | Reprovado | Reprovado | `robusta e inovadora` no segundo parágrafo. |
| Contraste artificial | Reprovado | Reprovado | `Não é apenas` no terceiro parágrafo. |
| Fechamento decorativo | Reprovado | Reprovado | `Em suma` no último parágrafo. |

## Achados

| Localização | Evidência | Regra ou fonte | Correção verificável |
| --- | --- | --- | --- |
| Primeiro parágrafo | Abertura sem tarefa concreta. | `context/estruturas-proibidas.md` | Começar pelo contrato parado e pelo responsável ausente. |
| Segundo parágrafo | Adjetivos não explicam mecanismo. | Proibições e manual da marca. | Explicar onde a fila registra responsável e prazo. |
| Terceiro parágrafo | Contraste e promessa abstrata. | Estruturas proibidas. | Trocar pela consequência observável no histórico. |
| Último parágrafo | Resumo decorativo. | Fechamentos proibidos. | Usar o CTA único definido no brief. |

## Encaminhamento

- **Destino:** `thothfy-especialista-linkedin`.
- **Instrução:** corrigir todas as ocorrências, procurar o mesmo padrão no
  asset inteiro e reenviar à `thothfy-validador-linkedin`.
