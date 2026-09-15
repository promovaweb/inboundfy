# Interação, checkpoints e handoff

O Inboundfy trabalha com conversa progressiva. A pessoa escolhe o caminho que
altera a saída; a skill registra a resposta e entrega um pacote claro à etapa
seguinte.

## Checkpoints de direção

Quando tese, recorte, voz, abertura ou CTA ainda estiverem abertos:

1. apresente exatamente três opções realmente diferentes;
2. coloque a sugestão recomendada primeiro;
3. pergunte qual caminho representa melhor a intenção;
4. aceite combinação ou resposta livre;
5. aguarde a resposta antes da etapa dependente;
6. registre escolha, rejeições, ajustes e alcance.

Se a pessoa pedir para o agente escolher sem perguntas na solicitação atual,
registre a dispensa no artefato e aplique-a somente ao alcance indicado.

## Seleção de persona e canal

Para produção, liste os canais ativos em menu numérico. Depois apresente todas
as personas completas em outro menu. Cada opção deve mostrar o número de
seleção, o ID estável, o nome de referência e um resumo do perfil, contexto de
compra, problema, resultado, canais e oferta. Aceite uma ou mais opções,
confirme o vínculo com o objetivo e registre a seleção no brief e no frontmatter.

Use este formato para a listagem:

```text
1. persona-01 | Nome de referência
   Perfil: situação ou cargo.
   Contexto: momento e tarefa de compra.
   Problema: dificuldade concreta.
   Resultado: mudança procurada.
   Canais: onde consome conteúdo.
   Oferta: solução pertinente.
```

O número serve como atalho de seleção. Ele não substitui o nome, o ID nem o
resumo do perfil.

## Pacote de handoff

```yaml
id: {{id}}
de: {{skill de origem}}
para: {{skill seguinte}}
estado: {{pronto | pendente | devolvido}}
arquivos:
  - {{caminho}}
fontes_lidas:
  - {{caminho}}
escolhas:
  - pergunta: {{pergunta}}
    resposta: {{resposta}}
    alcance: {{peça | canal | projeto}}
pendencias:
  - {{pergunta ou “nenhuma”}}
acao_solicitada: {{verbo + objeto}}
```

## Exemplo ilustrativo

```yaml
id: 0042
de: inboundfy-acervo
para: inboundfy-planejamento
estado: pronto
arquivos:
  - acervo/0042-2026-09-14-migracao/estrategia.md
  - acervo/0042-2026-09-14-migracao/base-editorial.md
escolhas:
  - pergunta: Qual saída deve ser criada agora?
    resposta: artigo de blog e post de LinkedIn
    alcance: peça
acao_solicitada: criar briefs para os dois canais
```

## Checklist

- [ ] A pergunta aparece antes da etapa que depende dela.
- [ ] A opção recomendada está em primeiro lugar.
- [ ] A resposta foi registrada com alcance.
- [ ] O handoff contém arquivos, fontes, pendências e próxima ação.
- [ ] A skill seguinte sabe exatamente o que recebeu.

## Erros comuns

- Fazer uma pergunta depois de criar a peça que dependia dela.
- Apresentar três variações quase iguais para simular escolha.
- Levar a preferência de um canal para outro sem nova confirmação.
- Entregar apenas um resumo sem caminho de arquivo ou próximo passo.
