# Contexto editorial integrado

Toda peça pública combina quatro camadas do projeto. A adaptação para uma
persona muda o foco, o vocabulário e o exemplo; não troca a identidade central
da marca.

## Ordem de aplicação

| Camada | Pergunta operacional | Arquivo |
| --- | --- | --- |
| Persona | Para qual persona esta versão foi feita? | `.inboundfy/context/publico.md` |
| Voz | Como a marca fala? | `.inboundfy/context/marca-voz.md` |
| Dicionário | Qual grafia deve permanecer? | `.inboundfy/context/glossario.md` |
| Proibições | O que não pode aparecer? | `.inboundfy/context/proibicoes.md` |
| Aprendizado | O que o usuário já confirmou para este alcance? | `.inboundfy/context/aprendizado.md` |
| Canal | Qual forma a plataforma exige? | `.inboundfy/estrategia.md` e contexto do canal |

## Registro por peça

```yaml
persona_principal: {{id da persona}}
personas_secundarias: [{{ids opcionais}}]
voz_aplicada:
  arquivo: .inboundfy/context/marca-voz.md
  alcance: {{peça | canal | projeto}}
dicionario_consultado: sim
proibicoes_consultadas: sim
canal: {{canal}}
formato: {{formato}}
```

## Exemplo ilustrativo

Para uma persona técnica, a peça mantém a voz direta da empresa, usa o termo
registrado no dicionário, explica o mecanismo antes da promessa e escolhe o
formato do canal ativo. Uma segunda persona pode receber a mesma tese com
outro exemplo, desde que o brief registre essa adaptação.

## Checklist

- [ ] Persona principal foi selecionada.
- [ ] Voz central e ajustes da persona estão separados.
- [ ] Grafias foram conferidas no dicionário.
- [ ] Proibições da marca e do framework foram lidas.
- [ ] Aprendizados confirmados para a peça foram lidos.
- [ ] Canal e formato correspondem à estratégia ativa.

## Erros comuns

- Escrever para um público amplo e declarar uma persona só no frontmatter.
- Usar uma adaptação de voz sem registrar seu alcance.
- Corrigir uma grafia no texto sem decidir se o dicionário deve aprender.
- Ignorar uma orientação confirmada no arquivo de aprendizado.
- Tratar o canal como camada posterior depois de escrever a peça inteira.
