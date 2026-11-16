# Domínio ferramentas

Referência de `.inboundfy/context/ferramentas.md`. Lida no passo 2 do fluxo
quando a entrada traz uma ferramenta que pode aparecer em conteúdo:
ferramenta de terceiro usada pela empresa, integração do produto, parceiro
técnico ou tecnologia própria.

## Função

O arquivo responde a uma pergunta editorial: esta ferramenta pode ser citada
numa peça, com qual link e com qual relação declarada? Ele não guarda acesso,
variável de ambiente ou estado de integração. Esses dados ficam em
`.inboundfy/context/integracoes.md`, mantido por `inboundfy-setup`, e os
valores de segredo ficam no `.env` do projeto.

## Fluxo do domínio

1. Leia `ferramentas.md` para não duplicar.
2. Pergunte o uso interno e se a ferramenta pode ser citada em público. Não
   assuma "sim".
3. Classifique a relação: fornecedor, integração do produto, parceiro
   comercial, afiliado ou tecnologia própria.
4. Relação comercial (parceria paga, afiliado, permuta) exige registro,
   porque a peça precisa sinalizar a publicidade.
5. Registre o link oficial da ferramenta de terceiro e, quando houver, a
   página própria do site para a primeira menção.
6. Se a ferramenta trata dados pessoais de clientes (CRM, e-mail, WhatsApp),
   pergunte se ela pode ser citada em conteúdo sobre privacidade. Muitas
   empresas preferem não expor fornecedores desse tipo.
7. Se o usuário enviar chave, token ou senha, não grave. Oriente a guardar no
   `.env` e acione `inboundfy-setup` para registrar o nome da variável em
   `integracoes.md`.

## Roteiro de entrevista

1. "Qual ferramenta e para que a empresa usa?"
2. "Ela pode ser citada em conteúdo público? Para qual tipo de peça?"
3. "Qual é a relação: assinatura paga, integração do produto, parceria
   comercial, afiliado, tecnologia própria?"
4. "Se há parceria ou afiliação, como a peça deve sinalizar?"
5. "Qual é o link oficial?"
6. "Existe página no seu site para a primeira menção, como a de
   integrações?"
7. "Há grafia oficial da marca da ferramenta?"

## Relação e exigência na peça

| Relação | Pode citar? | Exigência |
| --- | --- | --- |
| Fornecedor sem acordo | se autorizado | link oficial; sem tom de recomendação paga |
| Integração do produto | sim | link para a página de integrações própria |
| Parceiro comercial | sim | sinalizar parceria na peça |
| Afiliado | sim | sinalizar link de afiliado; registrar o link rastreado em `links.md` |
| Tecnologia própria | sim | página própria; sem link externo |
| Uso interno sensível (cobrança, banco de dados, segurança) | em geral não | registrar "não citar" |

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Emissor Fácil (parceiro fictício)

- **Para que a empresa usa:** integração de emissão de nota fiscal oferecida aos clientes do plano Crescimento.
- **Pode ser citada em conteúdo público?** sim, em páginas e artigos sobre nota fiscal.
- **Link oficial da ferramenta:** https://exemplo-emissorfacil.com.br
- **Relação com a empresa:** parceiro comercial; a Estoquely recebe comissão por indicação. Sinalizar "parceria" na peça.
- **Página própria para linkar na primeira menção, se houver:** https://exemplo-estoquely.com.br/integracoes/nota-fiscal

## Motor de Reconhecimento por Foto

- **Para que a empresa usa:** identificar o produto pela foto no cadastro.
- **Pode ser citada em conteúdo público?** sim, como tecnologia própria.
- **Link oficial da ferramenta:** não se aplica (tecnologia interna)
- **Relação com a empresa:** tecnologia própria
- **Página própria para linkar na primeira menção, se houver:** https://exemplo-estoquely.com.br/tecnologia
```

## Checklist de completude

- [ ] Permissão de citação explícita.
- [ ] Relação classificada, com forma de sinalizar parceria ou afiliação.
- [ ] Link oficial para ferramenta de terceiro.
- [ ] Página própria registrada quando existir.
- [ ] Nenhum segredo ou variável de ambiente no arquivo.
- [ ] Grafia da ferramenta conferida no glossário quando houver variação.

## Erros comuns

- Assumir que toda ferramenta interna pode ser citada.
- Citar parceiro pago sem sinalizar a parceria.
- Gravar token de API "para facilitar".
- Confundir tecnologia própria com ferramenta de terceiro.

## Relações

`inboundfy-base-seo` usa a página própria na primeira menção.
`inboundfy-concorrentes` e `inboundfy-copy-posicionamento` não tratam
ferramentas daqui como concorrentes sem confirmação. Acesso e variáveis de
ambiente ficam com `inboundfy-setup` em `integracoes.md`.
