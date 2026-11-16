# Domínio enderecos

Referência do domínio `enderecos` da skill `inboundfy-contexto-institucional`.
Ela é lida no passo 2 do fluxo, quando a entrada traz endereço, razão social,
CNPJ, e-mail institucional, telefone ou WhatsApp oficial.

## Função

`.inboundfy/context/enderecos.md` guarda dado factual sensível. Um erro aqui
vai para rodapé, página de contato, termos de uso, política de privacidade e
marcação de organização. Por isso o arquivo só aceita dado confirmado pelo
responsável.

URLs não ficam aqui. Perfis sociais, página de contato e link `wa.me` vivem
em `links.md`.

## Fluxo do domínio

1. Leia `enderecos.md` atual.
2. Exija o dado do responsável ou de documento oficial enviado por ele
   (cartão CNPJ, contrato social, conta do WhatsApp Business).
3. Pergunte o tipo de cada endereço: sede, endereço fiscal, escritório
   comercial, loja, filial.
4. Verifique se o endereço é residencial. MEI e empresa pequena costumam
   registrar o endereço da casa da sócia. Nesse caso, pergunte se ele pode
   aparecer em peça pública. A resposta comum é publicar só cidade e estado.
5. Ao registrar outra unidade, crie um bloco novo. Não sobrescreva o
   principal.
6. Liste peças publicadas que mostram o valor antigo. A correção da peça é
   do usuário ou da skill de canal.

## Roteiro de entrevista

1. "Qual é o endereço completo da sede ou do endereço fiscal?"
2. "Esse endereço pode aparecer em rodapé e página de contato, ou é
   residencial?"
3. "Existe outra unidade? Qual é o tipo de cada uma?"
4. "Qual é a razão social e o CNPJ?"
5. "O regime tributário precisa aparecer em algum texto institucional?"
6. "Qual é o e-mail institucional?"
7. "Qual número é o WhatsApp oficial? É conta Business? Qual o horário de
   atendimento?"
8. "Qual é o canal oficial de suporte e quem atende?"

## Classificação de exibição

| Dado | Rodapé e contato | Termos e privacidade | Peça de conteúdo |
| --- | --- | --- | --- |
| Razão social e CNPJ | sim | sim | raramente |
| Endereço comercial | sim | sim | quando relevante |
| Endereço residencial de sócia | só cidade e UF | conforme orientação jurídica | não |
| E-mail institucional | sim | sim, inclusive para o encarregado de dados | sim |
| WhatsApp oficial | sim | opcional | sim, com horário |
| Telefone pessoal | não | não | não |

O contato do encarregado pelo tratamento de dados pessoais (exigido pela
LGPD) costuma usar o e-mail institucional ou um e-mail próprio. Registre-o em
`Contatos oficiais` quando o usuário informar.

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Endereço principal

- **Endereço completo:** Rua Fictícia, 123, Sala 4, Bairro Exemplo, Belo Horizonte, MG, 30000-000, Brasil
- **Tipo:** sede e endereço fiscal

## Registro legal

- **Razão social:** Estoquely Tecnologia Ltda.
- **Registro/CNPJ ou equivalente local:** 00.000.000/0001-00 (número ilustrativo)
- **Regime tributário, se relevante para copy institucional:** não citar

## Contatos oficiais

- **E-mail institucional:** contato@exemplo-estoquely.com.br
- **Telefone/WhatsApp oficial:** (31) 90000-1111, WhatsApp Business, segunda a sexta das 9h às 18h
- **Canais de suporte:** central de ajuda e WhatsApp; URLs em `links.md`
- **Encarregado de dados (LGPD):** privacidade@exemplo-estoquely.com.br
```

## Checklist de completude

- [ ] Endereço principal completo com tipo.
- [ ] Permissão de exibição confirmada para endereço residencial.
- [ ] Razão social e CNPJ conferidos em documento.
- [ ] E-mail ou WhatsApp oficial presente, com horário quando houver.
- [ ] Cada unidade adicional tem bloco próprio.
- [ ] Nenhuma URL duplicada de `links.md`.

## Erros comuns

- Copiar CNPJ de site de consulta. O dado pode estar desatualizado ou ser de
  outra unidade.
- Publicar endereço residencial porque está no cartão CNPJ.
- Registrar celular pessoal como WhatsApp oficial.
- Sobrescrever a sede ao cadastrar filial.
- Gravar o link `wa.me` aqui. Ele é URL e vai para `links.md`.

## Relações

Mudança de endereço, CNPJ ou telefone afeta rodapé, página de contato,
políticas e marcação de organização. Encaminhe a `inboundfy-dados-estruturados`
quando o site tiver essa marcação e, se a empresa estiver em diretórios
locais, a `inboundfy-growth-diretorios` para manter o mesmo nome, endereço e
telefone em todos eles.
