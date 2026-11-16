# Exemplo completo de entrada de changelog

A empresa Fornada Clara e todas as pessoas, fontes, arquivos, quantidades e endereços desta demonstração são fictícios. Os caminhos mostram o contrato de relação; não afirmam que esses arquivos existem no projeto consumidor. O domínio `.example` não é destino para envio ou publicação real. O estado permanece `rascunho` até a validação efetiva.

O brief didático em `conteudo/fornada/04-briefs/changelog-fornada.md` aprova persona-01, responsável pelo balcão de uma padaria de Campinas, SP, voz direta e CTA de preencher a ficha. O caso registra 300 pães produzidos, 260 vendidos, dez consumidos pela equipe e 30 restantes. Extensão breve foi solicitada para mostrar uma peça inteira neste manual. Não há oferta paga nem resultado de cliente.

```markdown
---
id: "0042"
skill: inboundfy-especialista-changelog
tipo: changelog
criado_em: 2026-09-14
atualizado_em: 2026-09-14
entrada:
  - conteudo/fornada/04-briefs/changelog-fornada.md
contexto:
  personas: [persona-01]
  voz: .inboundfy/context/marca-voz.md
  dicionario: .inboundfy/context/glossario.md
  proibicoes: .inboundfy/context/proibicoes.md
proxima_acao: revisar a candidata com inboundfy-validador-changelog
canal: changelog
persona: persona-01
estado: rascunho
data: 2026-09-14
tipo: melhoria
versao: "2.4.0"
alcance: todas as contas do plano Balcão
fonte_tecnica: acervo/0042-2026-09-14-fornada/release.md
brief: conteudo/fornada/04-briefs/changelog-fornada.md
fontes:
  - acervo/0042-2026-09-14-fornada/base-editorial.md
  - acervo/0042-2026-09-14-fornada/processado.md
---

## Filtro de turno no fechamento

O fechamento da Fornada Clara agora permite filtrar os registros por turno antes de exportar o arquivo CSV. Antes, o arquivo reunia manhã e tarde na mesma lista. A mudança atende às contas do plano Balcão desde 14 de setembro, na versão 2.4.0.

O filtro usa o turno informado no registro de cada fornada. Registros antigos sem turno continuam na opção “Sem turno”; eles não recebem uma classificação automática. Assim, a pessoa responsável pelo balcão consegue conferir uma produção específica sem alterar o histórico.

Nenhuma ação é necessária para receber o filtro. Para usá-lo, abra Fechamento, escolha Manhã ou Tarde no campo Turno e selecione Exportar CSV. Confira se o cabeçalho do arquivo mostra o turno escolhido. Para consultar registros antigos sem classificação, selecione “Sem turno” no mesmo campo.
```

## Conferência antes de usar no consumidor

Substitua origem, ID, persona e destino pelos dados confirmados. Leia o checklist numerado da referência. Preserve a estrutura própria do canal, sem copiar o caso fictício como experiência da marca. A validadora apresenta um relatório preenchido para uma versão defeituosa deste mesmo caso.
