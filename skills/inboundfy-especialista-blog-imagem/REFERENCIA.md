# REFERENCIA.md; inboundfy-especialista-blog-imagem

Material de apoio para busca de foto real. Esta skill nunca gera imagem por
IA; ver `SKILL.md`. Este documento cobre apenas estratégia de busca e
seleção; para dimensão exata, confirme sempre em `context/canais.md`.

## Formato

| Peça | Proporção comum | Dimensão comum |
| --- | --- | --- |
| Cover | 3:2 | 1200×800 |
| Thumbnail | 12:5 | 1200×500 |

Confirme em `context/canais.md`; cada projeto pode definir dimensão
própria.

## Estratégia de busca de foto

1. Extraia do artigo o **objeto concreto** central (não o tema abstrato).
   Um artigo sobre "gestão de tempo para times remotos" não deve buscar
   "produtividade" (abstrato demais, resulta em clichê de escritório
   genérico); busque o objeto real: "pessoa trabalhando em home office",
   "calendário em mesa de trabalho", "videochamada em notebook".
2. Prefira query com 2 a 3 palavras concretas e visuais, não a frase
   completa do título do artigo.
3. Evite metáfora abstrata na busca ("crescimento", "sucesso", "conexão");    essas queries retornam clichê de banco de imagens (aperto de mão,
   gráfico subindo, luz no fim do túnel) que não tem relação real com o
   conteúdo.
4. Priorize foto com espaço negativo suficiente para o título sobrepor sem
   cobrir o elemento principal da imagem, quando o layout do blog exigir
   texto sobre a capa.

### Exemplo de query

| Tema do artigo | Query ruim (abstrata/clichê) | Query boa (concreta) |
| --- | --- | --- |
| Migração de agendamento manual para software | "eficiência", "tecnologia" | "calendário digital em tablet", "recepção de clínica" |
| Erro comum em contratação de freelancer | "sucesso profissional" | "reunião de contrato entre duas pessoas" |
| Guia de configuração de servidor | "inovação" | "rack de servidor", "tela de terminal" |

## Checklist de seleção

- [ ] A foto mostra o objeto real do artigo, não uma metáfora genérica.
- [ ] Nenhum texto, marca d'água ou logo de terceiro visível na foto.
- [ ] Licença permite uso comercial e edição (corte/redimensionamento).
- [ ] Cover e thumbnail usam a mesma foto ou fotos da mesma sessão, para
      consistência visual do post.
- [ ] Crédito registrado (autor, link, banco de origem) antes de considerar
      a peça pronta.

## Erros comuns

- Buscar pela emoção que o artigo quer transmitir em vez do objeto real que
  ele descreve; resulta em foto de banco genérica e reconhecível como
  clichê (aperto de mão, seta subindo, lightbulb).
- Reutilizar a mesma foto para artigos de temas diferentes só porque ela é
  "bonita"; quebra a relação real entre capa e conteúdo.
- Esquecer de registrar o crédito antes de publicar, gerando pendência de
  compliance de licença depois.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-especialista-blog-imagem**, do grupo
**especialista**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de especialista blog imagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-especialista-blog-imagem
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de especialista blog imagem

## Resultado

{Conteúdo específico da etapa.}

## Pendências

- {pergunta ou "nenhuma"}

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Exemplo operacional completo

### Entrada ilustrativa

```yaml
id: 0042
skill: inboundfy-especialista-blog-imagem
grupo: especialista
entrada: acervo/0042-2026-09-14-especialista-blog-imagem/processado.md
pedido: aplicar a etapa de especialista blog imagem e entregar o próximo registro
contexto:
  persona: persona-01
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
```

### Saída ilustrativa

```markdown
---
id: 0042
skill: inboundfy-especialista-blog-imagem
estado: aprovado
entrada: acervo/0042-2026-09-14-especialista-blog-imagem/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de especialista blog imagem

## Resultado

A etapa foi executada com a fonte indicada, mantendo as perguntas abertas
separadas do material confirmado.

## Próxima ação

{verbo + objeto + caminho do arquivo seguinte}
```

## Checklist ampliado

- [ ] O ID, o grupo e o objetivo aparecem no registro.
- [ ] A entrada foi lida sem substituir o original.
- [ ] Voz, personas, dicionário e proibições foram conferidos quando aplicáveis.
- [ ] Fontes, perguntas abertas e relações estão registradas.
- [ ] O resultado segue para a skill correta ou pede a informação que falta.
- [ ] Uma nova rodada preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy-especialista-blog-imagem** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Produza somente o asset do canal indicado pelo brief. Respeite voz, persona, fontes, formato, template e validadora do mesmo sufixo.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-especialista-blog-imagem** para executar esta função: Busca capa e thumbnail de post via banco de fotos real, nas dimensões exigidas pelo canal. Capas de blog NÃO são geradas por IA; esta skill usa exclusivamente foto real de banco de imagens, respeitando licença e crédito.

O grupo **especialista** trabalha com estes campos mínimos:

- **canal:** preencher com dado ligado ao pedido.
- **persona:** preencher com dado ligado ao pedido.
- **objetivo:** preencher com dado ligado ao pedido.
- **formato:** preencher com dado ligado ao pedido.
- **validadora:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-especialista-blog-imagem
grupo: especialista
pedido: executar a função desta skill sobre o material selecionado
entrada: briefs/0042-2026-09-14-blog-imagem/brief.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-especialista-blog-imagem
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - briefs/0042-2026-09-14-blog-imagem/brief.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **especialista** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESCRITA.md`
- `ESTRUTURAS-PERSUASIVAS.md`
- `CONTEXTO.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
