# Contrato de artefato

Todo resultado persistente precisa permitir localização, retomada e leitura
sem depender da conversa que o criou.

## Envelope mínimo

```yaml
id: {{id único}}
skill: {{skill responsável}}
tipo: {{tipo do artefato}}
estado: {{rascunho | revisao | aprovado | agendado | publicado | arquivado}}
criado_em: {{AAAA-MM-DD}}
atualizado_em: {{AAAA-MM-DD}}
entrada:
  - {{caminho do arquivo ou ID de origem}}
contexto:
  personas: [{{persona-01}}]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
fontes:
  - {{caminho ou URL com data de consulta}}
proxima_acao: {{ação concreta}}
```

## Template de registro

```markdown
---
id: {{id}}
skill: {{skill}}
tipo: {{tipo}}
estado: rascunho
entrada:
  - {{origem}}
personas:
  - {{persona}}
fontes:
  - {{fonte}}
---

# {{Título do artefato}}

## Propósito

{{O que este arquivo precisa permitir para a próxima etapa.}}

## Resultado

{{Conteúdo ou plano produzido.}}

## Perguntas abertas

- {{pergunta ou “nenhuma”}}

## Próxima ação

{{Quem faz o quê e qual arquivo será atualizado.}}
```

## Relações obrigatórias

Um artefato de acervo aponta para o bruto. Uma peça aponta para acervo, base
editorial, persona, voz e fontes. Uma linha do calendário aponta para o
`README.md` da peça. Um relatório de revisão aponta para a versão analisada.

## Checklist

- [ ] O ID aparece no nome, no frontmatter e nas relações.
- [ ] O estado representa o momento real do trabalho.
- [ ] A entrada e as fontes estão ligadas por caminhos.
- [ ] Personas e voz aparecem quando existe texto público.
- [ ] A próxima ação está escrita com sujeito e verbo.

## Erros comuns

- Criar um Markdown solto sem vínculo com o acervo ou com o brief.
- Atualizar o estado sem atualizar o índice correspondente.
- Usar o mesmo arquivo para duas peças com personas diferentes.
- Trocar a versão aprovada sem registrar o pedido que a alterou.
