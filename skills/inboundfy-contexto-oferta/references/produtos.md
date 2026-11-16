# Domínio produtos

Referência de `.inboundfy/context/produtos.md`. Lida no passo 2 do fluxo
quando a entrada fala de produto, funcionalidade, estágio ou limite técnico.

## Função

O arquivo explica o que cada produto é, para quem serve, como funciona e
onde termina. A skill de canal precisa entender o mecanismo, não só o
discurso comercial. O campo de limites é o que mais evita uma peça prometer
recurso inexistente.

## Fluxo do domínio

1. Leia `produtos.md` e `servicos.md` para não duplicar entrada.
2. Confirme a classificação: o cliente opera sozinho? Então é produto.
3. Se a entrada for material bruto (site, manual, release, roadmap),
   extraia definição, público, problema, mecanismo, funcionalidades e
   limites. Marque o que é recurso disponível e o que é promessa de roadmap.
4. Confirme com o usuário antes de gravar.
5. Registre o estágio de cada produto e, quando a funcionalidade for nova,
   o estágio dela.
6. Grave um bloco `## {Nome do produto}` seguindo o template.

## Roteiro de entrevista

1. "Em uma frase, o que o produto é?"
2. "Para quem ele é pensado? Que perfil usa no dia a dia?"
3. "Que problema existia antes dele? Descreva a situação, não o benefício."
4. "Como funciona, sem linguagem de venda? O que a pessoa faz e o que o
   produto faz?"
5. "Quais são as duas a cinco funcionalidades principais e o que cada uma
   permite fazer?"
6. "O que ele não faz? Onde termina o escopo?"
7. "Qual é o estágio: em desenvolvimento, beta, disponível, descontinuado?"
8. "Algum recurso está em beta ou só em certos planos?"
9. "Existe página oficial do produto?"
10. "Algum termo sempre acompanha o nome (registro, sufixo, versão)?"

## Estágio e o que a copy pode dizer

| Estágio | A copy pode | A copy não pode |
| --- | --- | --- |
| Em desenvolvimento | citar como "em construção" só com autorização | anunciar data sem confirmação |
| Beta | convidar para teste, com aviso de beta | vender como recurso estável |
| Disponível | descrever e vender | prometer o que está em "limites" |
| Descontinuado | citar em histórico | ofertar para cliente novo |

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Estoquely

- **O que é, em uma frase:** aplicativo de controle de estoque para loja física pequena, operado pelo celular.
- **Para quem é (perfil de usuário):** dona ou gerente de loja com até 10 funcionários, sem equipe de TI.
- **Problema que resolve:** vender um item que já tinha acabado ou comprar demais por não saber o que tem na prateleira.
- **Como funciona, resumido:** a lojista cadastra o produto por foto; cada venda registrada baixa o estoque; o app avisa quando o item chega ao ponto de reposição.
- **Funcionalidades principais:**
  - Cadastro por foto: sugere categoria e nome, a lojista confirma.
  - Alerta de reposição: avisa no app e, no plano Crescimento, por WhatsApp.
  - Modo sem internet: registra vendas e sincroniza quando a conexão volta.
- **Limites reais / o que o produto não faz:** não emite nota fiscal; não controla mais de uma loja por conta (multiloja em desenvolvimento); não integra com marketplaces.
- **Estágio:** disponível; alerta por WhatsApp em beta desde 2026-10.
- **Link oficial:** https://exemplo-estoquely.com.br
- **Termos que sempre acompanham o nome do produto (se houver):** nenhum.
```

## Checklist de completude

- [ ] Classificação de produto confirmada.
- [ ] Problema descrito como situação concreta.
- [ ] Mecanismo explicado sem linguagem de venda.
- [ ] Ao menos duas funcionalidades com o que permitem fazer.
- [ ] Limites reais preenchidos.
- [ ] Estágio do produto e de funcionalidades em beta.
- [ ] Link oficial igual ao de `links.md`.

## Erros comuns

- Colar o texto do site como "como funciona". Falta mecanismo.
- Deixar limites em branco.
- Registrar recurso de roadmap como disponível.
- Cadastrar o mesmo item em produtos e serviços por dúvida.
- Colocar preço aqui. Preço é `ofertas.md`.

## Relações

Cada plano de `ofertas.md` aponta para um produto ou serviço daqui.
`inboundfy-copy-posicionamento` e `inboundfy-concorrentes` leem
funcionalidades e limites para comparar. Nome novo de produto ou recurso vai
ao glossário.
