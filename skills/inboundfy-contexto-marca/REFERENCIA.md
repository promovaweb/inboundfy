# REFERENCIA.md; inboundfy-contexto-marca

Material de apoio para manter voz, proibições de negócio e estruturas
proibidas. O detalhe de cada arquivo está em `references/`. Este arquivo
traz o mapa, os rótulos exigidos pelo CLI, o modelo de relato, um exemplo
completo e as armadilhas.

## Arquitetura aplicada

Leia os contratos compartilhados conforme a etapa:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md), antes do passo 1;
- [artefato e relações](../_shared/02-contrato-de-artefato.md), ao gravar;
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md), no teste de
  calibração e no relato;
- [validação e retomada](../_shared/04-validacao-e-retomada.md), antes de
  declarar a alteração pronta;
- [contexto editorial](../_shared/05-contexto-editorial.md), sempre, porque
  esta skill altera o próprio contexto editorial.

Referências internas, lidas no passo 2 do fluxo:

| Arquivo | Leia quando |
| --- | --- |
| [references/voz-e-tom.md](references/voz-e-tom.md) | tom, pessoa verbal, vocabulário, exemplos, assinatura, variação por canal; também no passo 7 |
| [references/proibicoes-de-negocio.md](references/proibicoes-de-negocio.md) | veto de termo, promessa, comparação, afirmação sensível ou regra por canal |
| [references/estruturas-proibidas.md](references/estruturas-proibidas.md) | padrão de escrita observado, exceção da marca ou ajuste de rigor |

## Mapa dos arquivos

| Arquivo | Natureza | Efeito na peça | Quem aplica |
| --- | --- | --- | --- |
| `marca-voz.md` | preferência e calibração | orienta a redação | especialistas e `inboundfy-copy-redacao` |
| `proibicoes.md` | veto de negócio | reprova a peça | `inboundfy-copy-editor` e validadoras |
| `estruturas-proibidas.md` | veto de padrão genérico | reprova a peça | `inboundfy-copy-editor`, `inboundfy-anti-slop` e validadoras |

Regra de fronteira: se descumprir o item torna a peça ruim, mas publicável,
ele é preferência. Se descumprir torna a peça impublicável, ele é veto.

## Rótulos lidos pelo `inboundfy doctor`

O CLI considera a voz pronta quando `marca-voz.md` tem estes campos com
valor e o arquivo inteiro não tem chaves `{}` nem TODO, PENDENTE ou
PREENCHER:

```markdown
- **Três a cinco adjetivos:** {adjetivos}
- **Pessoa verbal:** {primeira do plural, segunda pessoa "você", mista por canal}
- **Idioma e variante:** {pt-BR}
```

Projetos instalados antes da versão 0.8.0 podem ter `Em três adjetivos`,
`Pessoa gramatical preferida` e `Idioma padrão de produção`. Nesses casos,
troque os rótulos pelos três acima mantendo o valor e avise o usuário.

## Template de relato da alteração

```markdown
---
skill: inboundfy-contexto-marca
arquivo: .inboundfy/context/{marca-voz | proibicoes | estruturas-proibidas}.md
alcance: {toda a comunicação | canal | persona}
estado: {gravado | aguardando calibração | pendente}
fonte: {resposta do usuário em AAAA-MM-DD, trecho enviado, norma citada}
---

# Atualização de marca

## O que mudou

| Seção | Antes | Depois |
| --- | --- | --- |
| {seção} | {valor ou "vazio"} | {valor} |

## Teste de calibração

- Trecho original: {trecho}
- Trecho reescrito: {trecho}
- Resposta do usuário: {aprovado | ajuste pedido}

## Pendências

- {pergunta ou "nenhuma"}

## Próxima ação

{skills que devem reler o arquivo e por quê}
```

## Exemplo completo (fictício)

Empresa ilustrativa: Estoquely, aplicativo de estoque para lojas pequenas.

**Entrada.** A responsável de marketing escreve: "Nosso tom tem que ser de
quem já trabalhou em loja. Nada de 'revolucionar sua gestão'. E o jurídico
pediu que nenhum texto diga que o app evita multa da Receita."

**Passo 1, classificação.** "Tom de quem já trabalhou em loja" é voz.
"Nada de revolucionar sua gestão" já está nas proibições genéricas
(`revolucionário`, jargão vazio); a skill confirma e não duplica. "Não dizer
que evita multa da Receita" é veto de negócio com origem jurídica.

**Passo 3, voz gravada.**

```markdown
## Tom

- **Três a cinco adjetivos:** prático (não teórico), próximo (não íntimo), direto (não seco)
- **Idioma e variante:** pt-BR
- **Pessoa verbal:** segunda pessoa ("você") em tutorial e redes; primeira do plural no institucional
- **Nível técnico do vocabulário:** iniciante; a persona nunca usou sistema de gestão
- **Humor é permitido?** sim, leve, no Instagram; não em e-mail de cobrança nem em suporte

## Exemplos de bom texto

> Você cadastra o produto tirando uma foto. Se a categoria vier errada, corrige uma vez e o app lembra na próxima.

## Exemplos de texto a evitar

> Nossa plataforma revoluciona a gestão do seu negócio com tecnologia de ponta.; motivo: não diz o que o app faz nem para quem.
```

**Passo 5, veto gravado.**

```markdown
## Termos e promessas proibidas

- "evita multa", "evita autuação da Receita", "deixa você em dia com o fisco"; motivo: o app não emite nota fiscal nem faz obrigação acessória. Origem: orientação jurídica, 2026-11-15.

## Afirmações que exigem confirmação antes de publicar

- Qualquer menção a tributo, nota fiscal ou Receita Federal; quem confirma: assessoria jurídica.
```

**Passo 7, calibração.** A skill reescreve uma frase do site com a nova
regra:

- Original: "Gerencie seu estoque de forma inteligente e eficiente."
- Reescrito: "Você vê no celular quais peças estão acabando antes da cliente
  pedir."

A responsável aprova. O relato lista `inboundfy-copy-editor` e as
validadoras como consumidoras do veto novo.

## Checklist

- [ ] O pedido foi classificado como preferência, veto ou padrão.
- [ ] Os três arquivos foram lidos antes de gravar.
- [ ] Os rótulos do `inboundfy doctor` estão presentes em `marca-voz.md`.
- [ ] `marca-voz.md` não tem chaves `{}` nem TODO, PENDENTE ou PREENCHER.
- [ ] Cada adjetivo de tom diz o que exclui.
- [ ] Há ao menos um exemplo real de bom texto.
- [ ] Todo veto tem motivo e origem.
- [ ] Nenhum item duplicado entre preferência e veto.
- [ ] Nenhuma seção do catálogo genérico foi apagada.
- [ ] O teste de calibração foi aprovado quando a voz mudou.

## Erros comuns

- Gravar preferência como veto ("prefiro sem emoji" em `proibicoes.md`).
  Isso reprova peças boas sem motivo de negócio.
- Adjetivos que servem para qualquer empresa ("profissional", "moderno",
  "inovador"). Peça o oposto que a marca rejeita.
- Exemplo de bom texto criado pela skill e gravado como real.
- Veto vago ("nada que pareça amador"). A `inboundfy-copy-editor` não
  consegue verificar.
- Apagar o catálogo genérico para "simplificar". Ele é a rede de segurança
  enquanto a voz ainda está incompleta.
- Deixar `{trecho de exemplo}` no arquivo. O `inboundfy doctor` reprova a voz
  inteira por causa de um placeholder esquecido.

## Guia específico do grupo

Mantenha somente o arquivo indicado. Grave preferências e vetos confirmados,
preserve seções e pergunte antes de estender uma regra de um canal para
outro. Correções que nascem da revisão de uma peça passam primeiro por
`inboundfy-aprendizado`, que confirma o alcance antes de virar regra aqui.

Leituras de apoio do framework: `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`,
`CONTEXTO.md` e `docs/method/02-contexto-fontes-e-precedencia.md`.
