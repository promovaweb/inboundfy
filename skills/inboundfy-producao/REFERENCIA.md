# Referência de produção

O frontmatter mínimo possui `id`, `canal`, `titulo`, `estado`, `criado_em`,
`personas`, `acervo` e `bases_editoriais`. O README deve conter conteúdo e
checklist de revisão. Peça de pacote acrescenta `brief`.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-producao**, do grupo
**capacidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Material de apoio por passo

| Passo do fluxo | Arquivo | Uso |
| --- | --- | --- |
| 2 | [references/roteamento-por-canal.md](references/roteamento-por-canal.md) | Canais do CLI, especialista, validadora, imagem pareada e capacidades transversais. |
| 1 e 10 | [references/adaptacao-entre-canais.md](references/adaptacao-entre-canais.md) | Quando separar peças, matriz de ângulos, ordem de produção e teste de repetição. |

## Sequência de produção e quem age

| Etapa | Responsável | Registro |
| --- | --- | --- |
| Confirmar canal, personas, objetivo e CTA | esta skill | README da peça, seção de escolhas |
| Criar pasta e frontmatter | `inboundfy content create` | `canais/<canal>/<id>-<data>-<slug>/README.md` |
| Montar pacote de insumos | esta skill | seção `## Insumos` do README |
| Outline, abertura e primeira unidade | especialista do canal | rascunho no README |
| Marco A4 | `inboundfy-anti-slop` | `auditorias/anti-slop/04-rascunho.md` do acervo |
| Texto completo | especialista do canal | seção `## Conteúdo` do README |
| Marco A5 | `inboundfy-anti-slop` | `auditorias/anti-slop/05-peca.md` do acervo |
| Passagem para `revisao` | `inboundfy-pipeline` | frontmatter e índice |
| Validação | validadora pareada | `README.auditoria.md` ou relatório do pacote |
| Aprovação | `inboundfy-pipeline` | `relatorio_validacao` e `sha256_aprovado` |

## Template do README da peça

O CLI cria o frontmatter e as seções `## Conteúdo` e `## Revisão`. A produção
acrescenta as demais seções sem apagar as do CLI.

```markdown
---
id: {{0000}}
canal: {{canal}}
titulo: "{{Título}}"
estado: rascunho
criado_em: {{ISO 8601}}
personas:
  - {{persona-01}}
acervo:
  - {{0000}}
bases_editoriais:
  - acervo/{{0000-AAAA-MM-DD-slug}}/base-editorial.md
brief: {{caminho do brief ou "pedido avulso de AAAA-MM-DD"}}
---

# {{Título}}

## Escolhas

- **Objetivo:** {{ação mensurável}}
- **CTA único:** {{texto e destino}}
- **Ângulo:** {{ângulo escolhido}}
- **Direções rejeitadas:** {{as outras duas e o motivo}}
- **Aprendizados aplicados:** {{AP-0000, AP-0000 ou "nenhum"}}

## Insumos

- Processado: `acervo/{{pasta}}/processado.md`
- Base editorial: `acervo/{{pasta}}/base-editorial.md`
- FAQ: `acervo/{{pasta}}/faq.md`
- Pesquisa: `acervo/{{pasta}}/pesquisa.md`
- Links internos: {{URLs de peças publicadas, vindas do catálogo}}
- Ofertas e preços citados: `.inboundfy/context/ofertas.md`, seção {{nome}}

## Conteúdo

{{Texto da especialista.}}

## Referências

- {{fonte, com data de consulta}}

## Revisão

{{checklist criado pelo CLI, mantido sem remoção}}
```

## Exemplo

Exemplo fictício. A Bicho Bom Clínica Veterinária, de Belo Horizonte, atende
cães e gatos, agenda consultas pelo WhatsApp e aceita Pix. O acervo `0012`
guarda a transcrição de uma live da veterinária responsável sobre vacinação de
filhotes. Canais marcados: blog, Instagram e e-mail.

### Escolhas confirmadas

- Canal: blog. Persona: persona-01 (tutor de primeiro filhote, 25 a 35 anos).
- Objetivo: agendamentos de primeira consulta pelo WhatsApp.
- Recorte aberto. Três direções apresentadas:
  1. **Recomendada:** "Calendário de vacinas do filhote mês a mês", passo a
     passo com a tabela usada pela clínica.
  2. "Os 5 erros de quem atrasa a vacina", ângulo de erro comum.
  3. "Quanto custa vacinar um filhote em BH", ângulo de preço.
- Escolha do usuário: direção 1. Direção 3 rejeitada porque os valores de
  `ofertas.md` mudam em janeiro.

### Comandos

```bash
inboundfy content create blog "Calendário de vacinas do filhote mês a mês" --persona persona-01 --acervo 0012
# Peça 0021 criada em canais/blog/0021-2026-11-15-calendario-de-vacinas-do-filhote-mes-a-mes.
```

### Pacote entregue à especialista

- Processado, FAQ e base editorial do acervo `0012`; pesquisa com a
  orientação do conselho profissional citada com data.
- CTA único: "Agende a primeira consulta pelo WhatsApp", com o link de
  `.inboundfy/context/links.md`.
- Aprendizado AP-0004 aplicado: a clínica escreve "tutor", nunca "dono".
- Proibição de `proibicoes.md`: não prometer proteção total com a vacina.

### A4 e A5

O A4 apontou que a abertura repetia a de outro post da clínica ("Você acabou
de adotar um filhote?"). A especialista trocou por uma situação concreta da
FAQ: o filhote de 45 dias que chegou sem carteira de vacinação. O A5 apontou
um "quase 100% de proteção" sem fonte; a frase saiu.

### Validação e handoff

A `inboundfy-validador-blog` aprovou na rodada 2. A peça seguiu para
`inboundfy-pipeline`. Adaptações planejadas com novo ID: carrossel de
Instagram "Erro comum: dar banho logo depois da vacina" (peça `0022`) e
e-mail para a base de tutores com consentimento LGPD registrado, apontando
para o post (peça `0023`).

## Checklist

- [ ] Canal marcado em `.inboundfy/estrategia.md` ou rota de pacote
  explicada ao usuário.
- [ ] Personas escolhidas pelo usuário e existentes em `publico.md`.
- [ ] Objetivo mensurável e CTA único registrados na seção `## Escolhas`.
- [ ] Recorte escolhido entre três direções, ou escolhido antes pelo brief.
- [ ] Pasta criada pelo CLI, com ID novo para adaptação e ID antigo para
  revisão.
- [ ] Insumos vêm de processado, base editorial, FAQ e pesquisa, nunca do bruto.
- [ ] Aprendizados confirmados do canal, da persona e do projeto aplicados.
- [ ] Registro A4 em peça longa antes da expansão.
- [ ] Registro A5 depois do texto completo.
- [ ] Todo número, preço, depoimento e link tem fonte localizável.
- [ ] Validadora pareada executada e relatório salvo.
- [ ] Estado alterado somente pelo pipeline.

## Erros comuns

- **Criar a pasta à mão.** A peça fica fora de `conteudos.json`, sem ID na
  sequência e sem portão de aprovação. Use o CLI.
- **Uma peça para duas personas com dores diferentes.** O texto fica morno
  para as duas. Separe quando o exemplo ou o CTA mudar.
- **Redigir pelo bruto.** O bruto tem ruído, repetições e frases que o
  processamento já removeu. Use `processado.md` e a base editorial.
- **Dois CTAs na mesma peça.** "Baixe o guia e agende uma consulta" divide o
  clique. Escolha um; o outro vai para outra peça.
- **Pular o A4 em peça longa.** O molde repetido aparece só no texto pronto e
  a correção custa a peça inteira.
- **Copiar preço para o texto sem olhar `ofertas.md`.** Preço desatualizado
  em post publicado gera reclamação e Procon. Cite a fonte e a data.
- **Abrir peça nova quando o usuário pediu correção.** O ID antigo perde o
  histórico e o calendário aponta para a versão errada.

## Guia específico do grupo

Aplique a capacidade ao objetivo informado, relacionando fontes, persona, canal, estado e próxima ação sem assumir dados ausentes.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.
Na produção, o objetivo é a ação mensurável da peça, a entrada é o brief com
canal, personas e acervo, o contexto são os arquivos de voz, público,
proibições, glossário e aprendizado, o resultado é a peça validada e a
próxima ação é a passagem de estado no pipeline.
