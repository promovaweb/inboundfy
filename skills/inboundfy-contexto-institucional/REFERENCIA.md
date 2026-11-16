# REFERENCIA.md; inboundfy-contexto-institucional

Material de apoio para manter os cinco arquivos institucionais. O
`SKILL.md` define o contrato. Este arquivo traz o mapa dos domínios, a régua
de confirmação, o modelo de relato, um exemplo completo e as armadilhas
recorrentes. Os detalhes de cada domínio ficam em `references/`.

## Arquitetura aplicada

Leia os contratos compartilhados conforme a etapa:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md), antes do passo 1;
- [artefato e relações](../_shared/02-contrato-de-artefato.md), ao gravar;
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md), ao confirmar
  candidatos e entregar o resultado;
- [validação e retomada](../_shared/04-validacao-e-retomada.md), no passo 7;
- [contexto editorial](../_shared/05-contexto-editorial.md), quando a
  missão, a biografia ou a descrição curta forem texto público.

Referências internas, lidas no passo 2 do fluxo, uma por vez:

| Arquivo | Leia quando |
| --- | --- |
| [references/empresa.md](references/empresa.md) | identidade, missão, modelo de negócio, diferenciais, marcos ou restrições |
| [references/pessoas.md](references/pessoas.md) | fundadoras, autoras, porta-vozes ou especialistas citáveis |
| [references/enderecos.md](references/enderecos.md) | endereço, CNPJ, razão social, e-mail, telefone ou WhatsApp oficial |
| [references/links.md](references/links.md) | site, redes, destinos de conversão e links de campanha |
| [references/glossario.md](references/glossario.md) | grafia de marca, produto, recurso, sigla ou termo técnico |

## Mapa dos domínios

| Domínio | Arquivo do usuário | Responde a | Quem mais lê |
| --- | --- | --- | --- |
| empresa | `.inboundfy/context/empresa.md` | quem é a empresa e o que ela não faz | copy, estratégia, página Sobre |
| pessoas | `.inboundfy/context/pessoas.md` | quem pode assinar e sobre quais temas | blog, LinkedIn, podcast, webinar |
| enderecos | `.inboundfy/context/enderecos.md` | onde fica, qual CNPJ, como contatar | rodapé, contato, dados estruturados |
| links | `.inboundfy/context/links.md` | qual URL é oficial e para onde a ação leva | toda peça com CTA |
| glossario | `.inboundfy/context/glossario.md` | como cada nome se escreve | copy-editor e validadores |

Regra de fronteira: endereço físico, registro legal e contato vivem em
`enderecos.md`. URL vive em `links.md`. O texto de "Canais de suporte" em
`enderecos.md` descreve o canal e aponta para a URL registrada em
`links.md`, sem repetir o endereço web.

## Campos lidos pelo `inboundfy doctor`

O CLI libera as skills de produção somente quando `empresa.md` tem estes três
campos preenchidos, sem chaves `{}` e sem as palavras TODO, PENDENTE ou
PREENCHER no valor:

```markdown
- **Nome da empresa:** {nome usado em conteúdo}
- **Descrição curta:** {uma frase sobre o que a empresa faz e para quem}
- **Site principal:** {https://...}
```

Projetos instalados antes da versão 0.8.0 podem ter só `Nome oficial`,
`Nome de marca / como é chamada no dia a dia` e `Site`. Nesses casos, grave o
nome de marca em `Nome da empresa`, troque `Site` por `Site principal` sem
perder o valor, acrescente `Descrição curta` e avise o usuário.

## Régua de confirmação

| Origem do dado | Pode gravar? | Observação |
| --- | --- | --- |
| Resposta direta do usuário responsável | sim | registre a data |
| Documento oficial enviado pelo usuário (cartão CNPJ, contrato social) | sim | cite o documento |
| Página do próprio site da empresa | só após confirmação | a página pode estar desatualizada |
| Perfil social da própria empresa | só após confirmação | confirme que o perfil é oficial |
| Diretório, buscador, Google Business de terceiro, matéria de imprensa | não | vira pergunta aberta |
| Inferência da skill ("deve ser fundadora porque assina o blog") | nunca | pergunte |

## Template de relato da alteração

Use este bloco na resposta ao usuário. Ele não substitui o arquivo de
contexto, que continua sendo o registro canônico.

```markdown
---
skill: inboundfy-contexto-institucional
dominio: {empresa | pessoas | enderecos | links | glossario}
arquivo: .inboundfy/context/{arquivo}.md
estado: {gravado | pendente de confirmação}
fonte: {resposta do usuário em AAAA-MM-DD, documento ou URL}
---

# Atualização institucional

## Campos alterados

| Campo | Valor anterior | Valor novo |
| --- | --- | --- |
| {campo} | {valor ou "vazio"} | {valor} |

## Glossário

- {linha nova ou "sem grafia nova"}

## Divergências com peças publicadas

- {caminho da peça e trecho divergente, ou "nenhuma encontrada"}

## Perguntas abertas

- {pergunta ou "nenhuma"}

## Próxima ação

{skill seguinte e o que ela deve fazer com o dado}
```

## Exemplo completo (fictício)

Empresa ilustrativa: Estoquely, aplicativo de controle de estoque para lojas
pequenas, com sede em Belo Horizonte. Nenhum dado abaixo é real.

**Entrada.** A cofundadora Marina Alves envia uma mensagem: "Mudamos o
WhatsApp de atendimento para (31) 90000-1111, o antigo era só meu. Também
passamos a aceitar Pix no plano anual. E o nome certo agora é Estoquely Pro,
não Estoquely PRO."

**Passo 1, domínios.** A mensagem toca três assuntos. O WhatsApp é
`enderecos`. O nome do plano é `glossario`. O Pix é condição comercial e
pertence a `inboundfy-contexto-oferta`. A skill responde:

> Vou registrar o WhatsApp em `enderecos.md` e a grafia "Estoquely Pro" no
> glossário. O Pix no plano anual é condição de oferta: depois desta
> atualização, encaminho para `inboundfy-contexto-oferta`. Pode seguir assim?

**Passo 3, dado pessoal.** O número antigo era o celular pessoal de Marina.
A skill pergunta se ele aparece em alguma peça publicada. Marina confirma que
está no rodapé do blog. A skill não guarda o número pessoal como contato
oficial e registra a substituição.

**Passo 4, gravação em `enderecos.md`.**

```markdown
## Contatos oficiais

- **E-mail institucional:** contato@exemplo-estoquely.com.br
- **Telefone/WhatsApp oficial:** (31) 90000-1111 (WhatsApp Business, atendimento de segunda a sexta, 9h às 18h)
- **Canais de suporte:** central de ajuda e WhatsApp; URLs em `links.md`
<!-- 2026-11-15: WhatsApp anterior substituído a pedido de Marina Alves; o número antigo era pessoal e não deve circular. -->
```

**Passo 6, glossário.**

```markdown
| Estoquely Pro | Estoquely Pro | Estoquely PRO, EstoquelyPro, estoquely pro | Plano; "Pro" com inicial maiúscula. Confirmado por Marina Alves em 2026-11-15. |
```

**Passo 7, divergências.** A skill procura o número antigo nas peças
listadas pelo usuário e encontra o rodapé do blog e a página de contato.

**Passo 8, relato.**

```markdown
---
skill: inboundfy-contexto-institucional
dominio: enderecos, glossario
arquivo: .inboundfy/context/enderecos.md, .inboundfy/context/glossario.md
estado: gravado
fonte: mensagem de Marina Alves em 2026-11-15
---

# Atualização institucional

## Campos alterados

| Campo | Valor anterior | Valor novo |
| --- | --- | --- |
| Telefone/WhatsApp oficial | número pessoal da cofundadora | (31) 90000-1111 |
| Glossário: Estoquely Pro | sem linha | linha nova |

## Divergências com peças publicadas

- Rodapé do blog e página de contato ainda exibem o número antigo.

## Perguntas abertas

- O link `wa.me` em `links.md` deve apontar para o número novo? Confirme
  a mensagem pré-preenchida.

## Próxima ação

Atualizar o Pix do plano anual com `inboundfy-contexto-oferta` e corrigir o
destino de WhatsApp em `links.md` após confirmação.
```

## Checklist

- [ ] O domínio escolhido corresponde à entrada.
- [ ] O arquivo canônico atual foi lido antes da gravação.
- [ ] Cada campo gravado tem fonte da régua de confirmação.
- [ ] `Nome da empresa`, `Descrição curta` e `Site principal` estão
      preenchidos quando o domínio for empresa.
- [ ] Nenhuma seção do template foi removida.
- [ ] Dado pessoal não foi gravado como contato público sem autorização.
- [ ] Grafias novas foram encaminhadas ao glossário.
- [ ] Valores substituídos ficaram registrados com data.
- [ ] Divergências com peças publicadas foram listadas.
- [ ] A próxima skill foi indicada.

## Erros comuns

- Gravar em `empresa.md` o que é produto. A empresa é a entidade; o que ela
  vende vai para `inboundfy-contexto-oferta`.
- Copiar CNPJ ou endereço de um site de consulta de empresas. Use o dado
  que o responsável confirmou.
- Registrar o celular pessoal de uma sócia como WhatsApp oficial. Quando a
  empresa é pequena isso acontece muito; pergunte se o número pode circular.
- Atualizar empresa, pessoas e oferta numa execução só, sem confirmar a
  ordem. Cada domínio tem seu próprio arquivo e seu próprio relato.
- Apagar o valor antigo sem nota. A nota com data explica a peça antiga que
  ainda mostra o valor anterior.
- Escrever a missão como slogan. O campo explica o que a empresa resolve,
  para quem e por quê.

## Guia específico do grupo

Mantenha somente o domínio indicado no arquivo canônico. Grave fatos
confirmados, preserve seções e pergunte antes de expandir o alcance. Quando
a entrada trouxer dado de outro grupo de contexto, termine o domínio atual e
encaminhe o restante à skill responsável, citando o trecho recebido.

Leituras de apoio do framework: `CONTEXTO.md` (precedência e formato dos
arquivos) e `docs/method/02-contexto-fontes-e-precedencia.md`.
