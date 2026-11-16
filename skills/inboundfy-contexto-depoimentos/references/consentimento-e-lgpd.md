# Consentimento e LGPD

Referência para registrar, ampliar ou revogar a autorização de uso de um
depoimento. Lida no passo 2 do fluxo sempre que houver consentimento em jogo.

A skill organiza o registro. Ela não dá parecer jurídico. Quando o usuário
tiver modelo de termo aprovado pelo jurídico, esse modelo prevalece.

## Por que o consentimento é registro obrigatório

Nome, cargo, foto e voz de uma cliente são dados pessoais. Usar esses dados
em peça de marketing exige uma base legal na LGPD, e no caso de depoimento a
base usual é o consentimento: livre, informado, para finalidade determinada,
com possibilidade de revogação a qualquer momento. Foto e voz também são
protegidas pelo direito de imagem do Código Civil. Por isso o registro diz
quem autorizou, quando, por qual meio e para quais canais.

## O que a autorização precisa cobrir

| Item | Por que | Onde fica no registro |
| --- | --- | --- |
| Texto que será usado | a pessoa autoriza a fala, não um resumo | `depoimento` |
| Forma de identificação | nome completo, primeiro nome, iniciais, empresa | `nome`, `empresa`, `cargo` |
| Foto ou vídeo | direito de imagem é separado do texto | `foto` e `fonte` |
| Canais | site não é anúncio pago; e-mail não é proposta comercial | `canaisAutorizados` |
| Data e meio | comprova a autorização | `fonte` e `data` |
| Revogação | a pessoa pode retirar a qualquer momento | `consentimento` |

## Canais e o que cada um implica

| Canal em `canaisAutorizados` | Uso |
| --- | --- |
| `website` | páginas do site, inclusive landing pages |
| `instagram`, `linkedin`, `youtube` | posts orgânicos da marca |
| `email` | newsletter e e-mails de campanha |
| `anuncios` | mídia paga em qualquer plataforma; peça autorização explícita |
| `vendas` | propostas, apresentações e material do time comercial |

Use outros nomes de canal só se o usuário pedir e mantenha a grafia em
minúsculas.

## Mensagem de pedido de autorização

Modelo para WhatsApp ou e-mail. Ajuste à voz de `marca-voz.md`.

```text
Oi, {nome}! Ficamos muito felizes com a sua mensagem sobre {produto}.
Podemos usar o seu depoimento abaixo no nosso {canais}?

"{texto literal}"

Ele apareceria com {forma de identificação} e {com ou sem} a sua foto.
Você pode pedir para retirar quando quiser, é só responder esta mensagem.
Responda "autorizo" se estiver tudo certo, ou diga o que prefere mudar.
```

A resposta "autorizo" fica guardada no histórico do canal. O registro cita
o meio e a data em `fonte`.

Se a pessoa pedir para mudar o texto, a nova versão aprovada por ela passa a
ser o texto literal, e a `fonte` registra "versão revisada pela cliente em
AAAA-MM-DD".

## Ampliação de canais

1. Leia o registro e os canais atuais.
2. Peça autorização só para os canais novos, citando o texto.
3. Acrescente os canais na lista e atualize `fonte` com a nova data.
4. Não remova canais já autorizados.

## Revogação

1. Mude `consentimento` para `"revogado"`.
2. Esvazie `canaisAutorizados`.
3. Acrescente a data e o meio da revogação em `fonte`.
4. Liste as peças publicadas ou agendadas que usam o depoimento e encaminhe
   a retirada às skills dos canais.
5. Mantenha o registro. Ele prova que a autorização existiu até a data.

Se a pessoa pedir a exclusão dos dados, e não só a retirada das peças,
avise o usuário: excluir o registro é pedido explícito e deve ser feito.

## Casos que pedem cuidado extra

- **Depoimento de saúde, finanças ou resultado numérico:** confira
  `proibicoes.md`; muitos setores proíbem ou limitam esse uso.
- **Menor de idade:** autorização do responsável legal.
- **Fala que cita outra pessoa ou outra empresa:** o terceiro não autorizou;
  omita o trecho com `[...]` na peça ou peça autorização.
- **Funcionário da cliente falando em nome da empresa dela:** confirme se a
  empresa autoriza o uso da marca.
- **Depoimento incentivado (desconto, brinde, permuta):** registre em `fonte`;
  a peça precisa sinalizar a relação.

## Erros comuns

- Tratar avaliação pública como autorização para anúncio.
- Pedir autorização sem mostrar o texto que será usado.
- Autorização genérica "para divulgação" sem canais.
- Apagar o registro na revogação sem pedido de exclusão.
