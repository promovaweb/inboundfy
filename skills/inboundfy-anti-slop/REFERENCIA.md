# Referência do anti-slop editorial

## Passes de leitura

| Passe | Pergunta |
| --- | --- |
| Literal | Algum termo, formato ou promessa está em `proibicoes.md`? |
| Semântico | O texto afirma mais do que o acervo e a pesquisa comprovam? |
| Voz | A escolha de palavras, pessoa verbal e ritmo combinam com `voz.md`? |
| Persona | A pessoa leitora reconhece o problema, contexto e vocabulário? |
| Canal | O tamanho, a abertura, o desenvolvimento e o CTA servem ao canal? |
| Humano | Há detalhe, posição, experiência ou consequência concreta? |

## Cadência do fluxo

Leia [ETAPAS.md](ETAPAS.md) quando a execução fizer parte do ciclo completo.
O código do marco precisa aparecer no relatório. Use estes marcos:

- A0 para a entrada preservada, sem editar o bruto;
- A1 para o processado, depois da limpeza;
- A2 para FAQ, pesquisa, ativos e base editorial;
- A3 para estratégia, oportunidades e brief;
- A4 para outline, abertura e primeira unidade de peça longa;
- A5 para a peça completa, antes da validadora;
- A6 para o pacote aprovado, antes do pipeline e do catálogo.

Um ciclo trata somente o material do seu marco. Se houver alteração depois do
ciclo, marque os ciclos posteriores como superados e repita-os após a nova
leitura.

## Sinais para remover

- introdução que poderia servir para qualquer empresa;
- enumeração de benefícios sem situação, mecanismo ou exemplo;
- promessa absoluta, prova social inventada ou número sem fonte;
- adjetivo que ocupa o lugar de uma explicação;
- sequência de frases com o mesmo comprimento e a mesma cadência;
- CTA que não informa a próxima ação nem o motivo para realizá-la;
- texto que fala sobre transformação sem mostrar o antes, o depois e o caminho.

## Registro de auditoria

```md
## Auditoria anti-slop

- Estado: aprovado | ajustes necessários
- Persona: persona-XX
- Canal: canal
- Fontes lidas: caminho/arquivo.md

### Achados

1. Trecho: “...”
   - Regra: detalhe ausente | promessa sem base | voz | proibição
   - Ação: ...
```

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-anti-slop**, do grupo
**qualidade**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** executar a capacidade de anti slop dentro do fluxo do Inboundfy.
- **Entrada mínima:** ID ou pedido, arquivos relacionados, fontes locais e
  escolhas já confirmadas.
- **Saída mínima:** registro com ID, estado, fontes, pendências e próxima ação.
- **Relação:** o resultado aponta para a entrada e para a skill seguinte.
- **Preservação:** o original e as versões aprovadas permanecem disponíveis.

## Template de operação

```markdown
---
id: {id}
skill: inboundfy-anti-slop
etapa: A0 | A1 | A2 | A3 | A4 | A5 | A6
ciclo: 1
estado: rascunho
entrada: {caminho ou ID}
fontes:
  - {caminho}
proxima_skill: {nome ou "pendente de confirmação"}
---

# Registro de anti slop

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
skill: inboundfy-anti-slop
grupo: qualidade
entrada: acervo/0042-2026-09-14-anti-slop/processado.md
pedido: aplicar a etapa de anti slop e entregar o próximo registro
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
skill: inboundfy-anti-slop
estado: aprovado
entrada: acervo/0042-2026-09-14-anti-slop/processado.md
fontes:
  - .inboundfy/context/empresa.md
proxima_skill: {skill seguinte ou "pendente de confirmação"}
---

# Registro de anti slop

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

- Executar **inboundfy-anti-slop** sem o arquivo de entrada ligado ao ID.
- Declarar a etapa concluída sem preencher o campo de próxima ação.
- Misturar dado confirmado, hipótese e preferência no mesmo parágrafo.
- Reescrever um arquivo aprovado sem registrar a nova solicitação.

## Guia específico do grupo

Faça uma revisão específica de qualidade. Separe achado literal, semântico e estrutural e só libere após nova leitura integral.

Use o campo **grupo** no registro para facilitar busca, relação e manutenção.

## Especificação operacional

### Quando usar

Use **inboundfy-anti-slop** para executar esta função: Audita textos de marketing para remover generalidades, sinais sintéticos e promessas sem base, respeitando voz, persona e canal.

O grupo **qualidade** trabalha com estes campos mínimos:

- **texto:** preencher com dado ligado ao pedido.
- **voz:** preencher com dado ligado ao pedido.
- **dicionário:** preencher com dado ligado ao pedido.
- **proibições:** preencher com dado ligado ao pedido.
- **retorno:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-anti-slop
grupo: qualidade
pedido: executar a função desta skill sobre o material selecionado
entrada: canais/blog/0042-2026-09-14-peca/artigo.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-anti-slop
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - canais/blog/0042-2026-09-14-peca/artigo.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **qualidade** e tem um ID localizável?
2. O resultado registra todos os campos mínimos desta skill?
3. O contexto aplicável foi lido antes da transformação?
4. A saída aponta para a fonte, para o estado e para a próxima ação?
5. Uma nova rodada preserva a versão anterior e registra o novo pedido?

### Referências de execução

Leia, na ordem necessária:

- `ESCRITA.md`
- `LIMPEZA-MATERIAL-BRUTO.md`
- `docs/method/07-validacao-e-testes.md`

Depois consulte as referências compartilhadas e o arquivo específico desta
pasta. Se houver conflito entre fontes, registre a origem de cada informação e
encaminhe a pergunta para a skill responsável pelo domínio.
