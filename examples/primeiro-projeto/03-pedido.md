# Primeiro pedido

> Transforme este material em uma peça para blog: como perceber que a bicicleta
> urbana precisa de revisão antes de um trajeto diário.

## Roteamento esperado

1. `inboundfy-acervo` preserva o material e atribui um ID.
2. `inboundfy-processar-acervo`, `inboundfy-pesquisa-acervo` e
   `inboundfy-base-editorial` preparam os arquivos do item.
3. `inboundfy-estrategia-acervo` lista os usos possíveis para Blog.
4. `inboundfy-producao` chama `inboundfy-especialista-blog`.
5. A produtora envia o artigo a `inboundfy-validador-blog` e ao anti-slop.
6. `inboundfy-pipeline` atualiza estado e `inboundfy-planejamento` agenda.
