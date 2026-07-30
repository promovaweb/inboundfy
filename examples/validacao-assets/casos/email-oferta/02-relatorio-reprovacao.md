# Validação de asset — Email/convite-plano-equipe

- **Asset:** `01-candidato-reprovado.md`
- **Produtora:** `thothfy-especialista-email`
- **Validadora:** `thothfy-validador-email`
- **Rodada:** 1
- **Veredito:** reprovado

## Achados

| Localização | Evidência | Regra ou fonte | Correção verificável |
| --- | --- | --- | --- |
| Segundo parágrafo | O asset informa `R$ 99`. | `fonte-oferta.md` registra `R$ 79`. | Usar o preço vigente ou remover o preço. |
| Fechamento | Há `Inicie o teste` e `agende uma conversa`. | Brief e referência de email exigem CTA único. | Manter somente o CTA autorizado. |

## Encaminhamento

- **Destino:** `thothfy-especialista-email`.
- **Instrução:** corrigir o preço, remover o CTA concorrente e reenviar o
  email inteiro à validadora.
