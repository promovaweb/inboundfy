# REFERENCIA.md; inboundfy-base-imagem

Material de apoio para compor peças visuais sintéticas (card, slide,
thumbnail com texto) com identidade de marca consistente.

## Tabela de formatos por canal

| Peça | Proporção | Dimensão comum |
| --- | --- | --- |
| Carrossel Instagram/LinkedIn | 4:5 | 1080×1350 |
| Post de feed | 1:1 | 1080×1080 |
| Thumbnail de vídeo longo | 16:9 | 1280×720 |
| Capa de webinar / evento | 1:1 | 1080×1080 |
| Infográfico | 9:16 | 1080×1920 |
| Story / vídeo curto | 9:16 | 1080×1920 |
| Capa de LinkedIn (artigo) | 1.91:1 | 1200×627 |

Confirme sempre em `context/canais.md`; a tabela acima é o padrão de
mercado mais comum, não uma regra fixa do framework.

## Checklist de composição

- [ ] Um único foco visual por peça; se há mais de um elemento competindo
      por atenção, corte um.
- [ ] Contraste de texto sobre fundo suficiente para leitura em miniatura
      (teste mental: a peça ainda é legível do tamanho de um ícone?).
- [ ] Paleta e tipografia conferem com a identidade visual do usuário, não
      com uma escolha genérica de "design bonito".
- [ ] Logo presente apenas quando o canal exigir, no tamanho e posição
      definidos pela identidade visual do usuário.
- [ ] Nenhum erro de grafia no texto da peça (confira
      `context/glossario.md`).
- [ ] Margem de segurança suficiente para o texto não cortar em diferentes
      proporções de exibição (feed vs. story, por exemplo).

## Estrutura de brief de imagem

Toda skill de canal que chama `inboundfy-base-imagem` deve fornecer:

```text
Formato: <proporção e dimensão>
Texto principal: <título ou dado central, curto>
Texto secundário: <subtítulo, se houver>
Tom visual: <sóbrio, vibrante, técnico, editorial; de context/marca-voz.md>
Elemento de marca obrigatório: <logo, cor de destaque, ícone>
```

## Erros comuns

- Gerar peça com texto longo demais para o formato; se o texto não cabe
  legível, peça para a skill de canal encurtar antes, não reduza a fonte
  até ficar ilegível.
- Inventar paleta ou tipografia quando o usuário ainda não definiu
  identidade visual; pare e sinalize a ausência (ver `SKILL.md`), não
  escolha uma paleta genérica "profissional".
- Reaproveitar a mesma composição para peças de canais diferentes só
  trocando o texto; ajuste proporção e hierarquia ao canal real.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-base-imagem**, do grupo
**base**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de base imagem dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-base-imagem
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de base imagem

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
skill: inboundfy-base-imagem
grupo: base
entrada: acervo/0042-2026-09-14-base-imagem/processado.md
pedido: aplicar a etapa de base imagem e entregar o próximo registro
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
skill: inboundfy-base-imagem
estado: aprovado
entrada: acervo/0042-2026-09-14-base-imagem/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de base imagem

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

- Executar **inboundfy-base-imagem** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um artefato claro e devolva um registro consumível pela skill chamadora.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-base-imagem** para executar esta função: Motor genérico de geração de card, slide ou thumbnail sintético para peças sociais (LinkedIn, Instagram, capa de carrossel, thumbnail de vídeo, webinar). Usa geração de imagem por IA com a identidade visual registrada em context/marca-voz.md. É a base que as skills de imagem por canal (inboundfy-especialista-linkedin-imagem, inboundfy-especialista-instagram-imagem, etc.) reaproveitam.

O grupo **base** trabalha com estes campos mínimos:

- **entrada:** preencher com dado ligado ao pedido.
- **regra:** preencher com dado ligado ao pedido.
- **resultado:** preencher com dado ligado ao pedido.
- **fontes:** preencher com dado ligado ao pedido.
- **retorno:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-base-imagem
grupo: base
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/processado.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-base-imagem
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/processado.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **base** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESCRITA.md`
- `CONTEXTO.md`
- `SKILL-AUTORIA.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
