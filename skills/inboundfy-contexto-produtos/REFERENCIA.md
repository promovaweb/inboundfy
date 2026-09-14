# REFERENCIA.md; inboundfy-contexto-produtos

Roteiro de entrevista, exemplo preenchido e checklist para `context/produtos.md`
e `context/servicos.md`.

## Roteiro de entrevista

1. "É um produto (o cliente final opera sozinho) ou um serviço (alguém da
   empresa entrega)?"
2. "Em uma frase, o que esse produto ou serviço é?"
3. "Para quem ele é pensado; que perfil de cliente usa isso?"
4. "Que problema concreto ele resolve? (não o benefício abstrato, o problema
   real que existia antes)"
5. "Como ele funciona, resumido, sem jargão de venda?"
6. "Quais são as duas ou três funcionalidades principais, e o que cada uma
   permite fazer na prática?"
7. "O que ele explicitamente não faz? Onde termina o escopo?"
8. "Qual é o estágio dele; desenvolvimento, beta, disponível,
   descontinuado?"
9. (Só para serviço) "Qual é o formato de entrega, a duração típica e existe
   pré-requisito do cliente?"

## Exemplo preenchido (fictício; "Estoquely")

```markdown
# Produtos

## Estoquely Core

- **O que é, em uma frase:** aplicativo de controle de estoque para loja
  física pequena, operado pelo celular.
- **Para quem é:** dono ou gerente de loja com até 10 funcionários, sem
  time de TI.
- **Problema que resolve:** perder venda por não saber que o produto tinha
  acabado, ou comprar demais por não saber o que já tinha em estoque.
- **Como funciona, resumido:** cadastro de produto por foto, baixa
  automática no estoque a cada venda registrada, alerta quando um item
  chega perto do fim.
- **Funcionalidades principais:**
  - Cadastro por foto; reconhece o produto e sugere categoria
  - Alerta de estoque baixo; avisa antes de faltar, não depois
- **Limites reais:** não emite nota fiscal, não controla estoque de mais de
  uma loja na mesma conta (recurso multi-loja está em desenvolvimento).
- **Estágio:** geral disponível.
- **Link oficial:** https://exemplo-estoquely.com.br/core
- **Termos que sempre acompanham o nome:** nenhum.
```

```markdown
# Serviços

## Implantação Assistida

- **O que é entregue:** uma sessão remota de 1 hora para cadastrar os
  primeiros 50 produtos junto com o lojista.
- **Formato de entrega:** remoto, por videochamada.
- **Para quem é indicado:** lojista que nunca usou sistema de gestão antes.
- **O que não está incluso:** cadastro completo do estoque inteiro (só os
  primeiros itens, para o lojista aprender o processo).
- **Duração ou cadência típica:** sessão única de 1 hora, na primeira
  semana de assinatura.
- **Pré-requisito do cliente:** ter o celular com o aplicativo já instalado.
```

## Checklist de completude

- [ ] Classificação correta entre produto e serviço.
- [ ] Problema que resolve é concreto, não um benefício abstrato.
- [ ] Ao menos duas funcionalidades (produto) ou escopo de entrega
      (serviço) descritas.
- [ ] Limite real / o que não está incluso está preenchido; campo mais
      importante para evitar promessa fora do escopo.
- [ ] Estágio atualizado (evita anunciar como disponível algo que ainda
      está em beta).

## Erros comuns

- Descrever a funcionalidade com o mesmo texto de venda do site, sem
  mecanismo real; a skill de canal precisa entender como funciona, não só
  o discurso comercial.
- Deixar "o que não faz" em branco; esse é o campo que mais evita uma peça
  prometer algo inexistente.
- Cadastrar o mesmo item em produtos e serviços por dúvida; decida com o
  usuário antes de gravar; um SaaS que o cliente opera sozinho é produto,
  mesmo que venha com onboarding.
- Confundir preço e condição comercial com este arquivo; isso é
  `context/ofertas.md`.
