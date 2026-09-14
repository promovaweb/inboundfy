# REFERENCIA.md; inboundfy-contexto-ferramentas

Roteiro de entrevista, exemplo preenchido e checklist para
`context/ferramentas.md`.

## Roteiro de entrevista

1. "Qual ferramenta você quer que eu registre, e para que a empresa a usa
   internamente?"
2. "Essa ferramenta pode ser citada em conteúdo público, ou é uso interno
   que não deve aparecer?"
3. "Qual é o link oficial da ferramenta?"
4. "Qual é a relação da empresa com ela; fornecedor pago, parceiro
   técnico, tecnologia própria construída internamente?"
5. "Existe uma página própria do site para onde a primeira menção dessa
   ferramenta deve linkar (ex.: página de integrações)?"

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Zendesk

- **Para que a empresa usa:** atendimento de suporte ao cliente.
- **Pode ser citada em conteúdo público?** sim, em contexto de "como
  funciona nosso suporte".
- **Link oficial:** https://www.zendesk.com
- **Relação com a empresa:** fornecedor pago (ferramenta de terceiro).
- **Página própria para link:** nenhuma; linkar direto para o site oficial
  da ferramenta.

## Motor de Reconhecimento de Produto

- **Para que a empresa usa:** identificar produto por foto no cadastro do
  aplicativo.
- **Pode ser citada em conteúdo público?** sim, como tecnologia própria.
- **Link oficial:** não aplicável (tecnologia interna).
- **Relação com a empresa:** tecnologia própria, construída internamente.
- **Página própria para link:** exemplo-estoquely.com.br/tecnologia
```

## Checklist de completude

- [ ] Permissão de citação pública definida explicitamente (nunca
      "assumido como sim").
- [ ] Link oficial presente quando a ferramenta for de terceiro.
- [ ] Relação com a empresa classificada (fornecedor, parceiro, tecnologia
      própria).
- [ ] Página própria de destino registrada quando existir, para uso por
      `inboundfy-base-seo` na primeira menção.

## Erros comuns

- Assumir que toda ferramenta usada internamente pode ser citada em
  conteúdo público; algumas são uso interno sensível (ex.: ferramenta de
  billing, banco de dados interno) e não devem aparecer.
- Registrar ferramenta de terceiro sem link oficial; isso impede a
  linkagem correta na primeira menção.
- Confundir tecnologia própria da empresa com ferramenta de terceiro;   tecnologia própria não tem "link oficial" externo, mas pode ter página
  própria no site do usuário.
