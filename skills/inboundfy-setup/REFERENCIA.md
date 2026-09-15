# Referência do setup

## Arquivos do projeto

| Área | Caminho |
| --- | --- |
| Configuração operacional | `.inboundfy/estrategia.md` e `.inboundfy/pipeline.md` |
| Contexto e copy | `.inboundfy/context/*.md`, incluindo `aprendizado.md` |
| Regras do framework | `.inboundfy/framework/` |
| Índices | `.inboundfy/indices/*.json` |
| Acervo | `acervo/<id>-<data>-<slug>/` |
| Saída | `canais/<canal>/<id>-<data>-<slug>/README.md` |
| Calendário | `calendario/AAAA-MM.md` |

## Campos mínimos

`context/empresa.md` precisa de empresa, descrição e site.
`context/marca-voz.md` precisa de adjetivos, pessoa verbal e idioma.
`context/publico.md` precisa de uma persona com contexto, problema e
resultado. `estrategia.md` precisa de canal e objetivo.

## Entrevista de configuração

Faça as perguntas por bloco e registre somente respostas confirmadas:

1. Empresa: nome, descrição, site, país, região, idioma, contatos, endereço
   físico, registro legal, URLs oficiais, pessoas autorizadas e redes sociais.
2. Oferta: produto ou serviço, público, problema, resultado, mecanismo,
   preço, condições, provas, limites e próxima ação.
3. Personas: perfil, cargo ou situação, tarefa, contexto de compra, problema,
   resultado, objeções, vocabulário e canais. Registre pelo menos uma.
4. Voz: adjetivos, pessoa verbal, tempo, formalidade, ritmo, humor, aberturas,
   fechamentos, tamanho de parágrafo e exemplos aprovados e rejeitados.
5. Regras: termos proibidos, promessas vetadas, estruturas a evitar, grafia
   oficial, termos preferidos, correções já aprovadas e o arquivo de
   aprendizado que preservará novas orientações.
6. Estratégia: objetivo, oferta principal, horizonte, cadência, datas,
   formatos e canais escolhidos entre Blog, Email, LinkedIn, Instagram,
   Substack e YouTube.
7. Pipeline: estados usados, responsável por aprovação, campos exigidos para
   agendamento e URL/data exigidas para publicação.

8. Aprendizado: orientações anteriores, alcance de cada registro e regras que
   já foram aplicadas ao projeto.

Quando uma resposta mudar apenas uma peça, registre o alcance como `peça`.
Quando valer para um canal, registre `canal`. Só use `projeto` após confirmação.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-setup**, do grupo
**entrada**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de setup dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-setup
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de setup

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
skill: inboundfy-setup
grupo: entrada
entrada: acervo/0042-2026-09-14-setup/processado.md
pedido: aplicar a etapa de setup e entregar o próximo registro
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
skill: inboundfy-setup
estado: aprovado
entrada: acervo/0042-2026-09-14-setup/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de setup

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
- [ ] Um novo ciclo preserva o histórico e atualiza somente o alcance pedido.

## Erros comuns adicionais

- Executar **inboundfy-setup** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Prepare ou encaminhe a execução. Preserve respostas existentes e não crie conteúdo antes de o contexto mínimo estar pronto.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-setup** para executar esta função: Conduz a entrevista inicial, prepara a configuração do projeto consumidor e confere canais, personas, voz, negócio, pipeline e índices do Inboundfy.

O grupo **entrada** trabalha com estes campos mínimos:

- **respostas:** preencher com dado ligado ao pedido.
- **arquivos existentes:** preencher com dado ligado ao pedido.
- **sentinelas:** preencher com dado ligado ao pedido.
- **contexto:** preencher com dado ligado ao pedido.
- **relatório:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-setup
grupo: entrada
pedido: executar a função desta skill sobre o material selecionado
entrada: .inboundfy/fontes-projeto.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-setup
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - .inboundfy/fontes-projeto.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **entrada** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `INSTALACAO.md`
- `CONTEXTO.md`
- `docs/method/01-setup-e-runtime.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
