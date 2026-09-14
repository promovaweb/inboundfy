# Validação de asset — Instagram/contrato-responsavel

- **Asset:** `01-candidato-reprovado.svg`
- **Produtora:** `inboundfy-especialista-instagram-imagem`
- **Validadora:** `inboundfy-validador-instagram-imagem`
- **Rodada:** 1
- **Veredito:** reprovado

## Achados visuais

| Critério | Evidência | Fonte | Correção |
| --- | --- | --- | --- |
| Proporção | SVG mede `1080x1080`. | Brief exige `1080x1350`. | Refazer em 4:5. |
| Aplicação | Existe `linearGradient`. | Manual proíbe gradiente. | Usar fundo sólido. |
| Paleta | Fundo usa `#FF00FF` e `#6A00FF`. | Manual permite `#173F35` e `#E7EFE9`. | Aplicar somente cores autorizadas. |

## Encaminhamento

- **Destino:** `inboundfy-especialista-instagram-imagem`.
- **Instrução:** corrigir dimensão, fundo e paleta; reenviar o SVG completo
  para inspeção visual.
