# Referência de escrita simples e útil

Use esta referência ao simplificar texto existente. Ela traduz a regra de
atenção do público em uma revisão prática para copy, emails, pitches,
apresentações, publicações sociais e documentação que explica código ou
sistemas. `ESCRITA.md`, as fontes locais, a voz da marca e as regras do canal
continuam valendo.

## Método de revisão

### 1. Localize a mensagem

Registre em uma frase o que o texto precisa comunicar. Separe fatos
confirmados, condições, instruções e exemplos que ajudam o público a entender
ou usar a informação.

### 2. Leia pelo lado de quem recebe

Em cada frase e parágrafo, pergunte:

- Ainda há motivo para continuar?
- A mensagem está clara na primeira leitura?
- O raciocínio avança de um ponto para o próximo sem exigir adivinhação?
- O trecho serve ao público ou só celebra o esforço e a intenção de quem
  criou?

Considere que o público dispõe de pouco tempo e tem outras prioridades. O
esforço investido na peça, o entusiasmo da autoria ou a importância interna do
assunto não bastam para justificar cada frase. O texto precisa oferecer algo
reconhecível: clareza, explicação útil, uma ação possível, entretenimento ou
perspectiva que ajude a entender o assunto. Se um trecho só valoriza o
trabalho de autoria, repete algo já dito ou exige esforço sem retorno, retire
ou refaça.

Retire o que só repete, enfeita ou atrasa a mensagem. Quando faltar ligação
entre duas ideias, explique a relação em vez de apenas encurtar.

### 3. Preserve o que sustenta a compreensão

Mantenha ressalvas, passos, exemplos, provas, limites e detalhes técnicos
quando eles evitam interpretação errada ou ajudam a executar uma ação. Uma
versão menor não é automaticamente mais simples. Prefira a formulação mais
limpa que continua completa e fiel à fonte.

### 4. Dê força adequada ao formato

Identifique a qualidade que faz o material valer o tempo do público:
utilidade, clareza didática, humor, provocação pertinente ou apresentação
visual funcional. Escolha a qualidade compatível com a mensagem. Não fabrique
conflito, urgência, promessa absoluta ou dramatização para tornar a peça
chamativa.

## Template de registro

```markdown
## Revisão de escrita

- **Entrada:** caminho ou texto recebido
- **Público:** persona ou público confirmado
- **Canal:** formato da peça
- **Objetivo:** mensagem principal preservada
- **Alterações:** cortes, explicações ou reorganizações relevantes
- **Conteúdo preservado:** fatos, condições, exemplos e instruções mantidos
- **Fontes consultadas:** caminhos dos arquivos usados
- **Pendências:** perguntas ou "nenhuma"
- **Próxima ação:** destino ou skill seguinte
```

## Exemplo completo ilustrativo

### Entrada

Texto de um email de uma ferramenta fictícia:

> Estamos muito felizes em anunciar mais uma melhoria importante para a
  experiência de todos. Agora, você pode ativar a confirmação de endereço em
  Configurações > Conta. Com isso, alertas de cobrança são enviados ao email
  cadastrado. Essa opção não altera as notificações de segurança.

### Revisão

> Ative a confirmação de endereço em Configurações > Conta para receber
  alertas de cobrança no email cadastrado. As notificações de segurança
  continuam iguais.

### Registro

- **Retirado:** abertura sobre o entusiasmo da empresa e avaliação vaga da
  melhoria.
- **Mantido:** local da configuração, efeito para os alertas de cobrança e
  limite sobre notificações de segurança.
- **Conferência:** a instrução continua executável e a ressalva permanece
  explícita.
- **Estado:** exemplo ilustrativo, sem fatos sobre produto real.

## Checklist ampliado

- [ ] A mensagem principal e o objetivo cabem em uma frase de trabalho.
- [ ] O texto foi lido inteiro pelo lado do público e do canal.
- [ ] Cada frase informa, explica, orienta, exemplifica ou mantém a voz de
  forma relevante.
- [ ] Cada parágrafo desenvolve uma ideia sem repetição ou lacuna de
  raciocínio.
- [ ] Trechos que só promovem a autoria ou o esforço foram retirados quando
  não ajudam o público.
- [ ] Fatos, limites, ressalvas, instruções e exemplos úteis foram
  preservados.
- [ ] A formulação está limpa sem ficar telegráfica ou vaga.
- [ ] A peça tem uma qualidade forte adequada ao formato, sem exagero
  fabricado.
- [ ] A voz, os termos, as fontes e as regras do projeto foram respeitados.
- [ ] A versão inteira passou por `inboundfy-copy-editor` depois dos ajustes.

## Erros comuns adicionais

- **Tratar menos palavras como meta:** encurta explicações até o texto perder
  sentido ou uso.
- **Apagar ressalvas junto com a repetição:** remove um limite que protege a
  leitura correta.
- **Trocar termo preciso por palavra vaga:** simplifica o vocabulário, mas
  aumenta o trabalho para entender.
- **Forçar provocação ou humor:** cria um tom que não combina com a marca, o
  público ou o assunto.
- **Confundir esforço interno com benefício público:** mantém frases sobre
  processo, equipe ou entusiasmo sem mostrar por que isso interessa a quem
  recebe.
- **Avaliar pelo tempo de produção:** conserva trechos só porque deram
  trabalho para escrever.

## Arquitetura aplicada

Esta referência atende à skill **inboundfy-copy-simplificar**, do grupo
**copy**. Consulte os contratos compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Contrato específico

- **Função:** simplificar texto existente com foco em leitura, compreensão e
  utilidade.
- **Entrada mínima:** texto ou caminho de origem, canal, público e objetivo.
- **Saída mínima:** versão revisada, alterações relevantes, fontes, pendências
  e próxima ação.
- **Relação:** o resultado aponta para a origem e para a próxima skill.
- **Preservação:** o bruto e as versões aprovadas permanecem disponíveis.

## Especificação operacional

### Quando usar

Use **inboundfy-copy-simplificar** para executar esta função: Simplifica textos existentes para reduzir esforço de leitura e retirar excessos, preservando intenção, fatos, voz e formato do projeto.

O grupo **copy** trabalha com estes campos mínimos:

- **objetivo:** preencher com dado ligado ao pedido.
- **mensagem:** preencher com dado ligado ao pedido.
- **persona:** preencher com dado ligado ao pedido.
- **canal:** preencher com dado ligado ao pedido.
- **revisão:** preencher com dado ligado ao pedido.

### Exemplo específico ilustrativo

Entrada:

```yaml
id: 0042
skill: inboundfy-copy-simplificar
grupo: copy
pedido: executar a função desta skill sobre o material selecionado
entrada: acervo/0042-2026-09-14-material/base-editorial.md
```

Saída:

```yaml
id: 0042
skill: inboundfy-copy-simplificar
estado: pronto-para-handoff
resultado: arquivo ou relatório salvo no caminho definido pelo fluxo
fontes:
  - acervo/0042-2026-09-14-material/base-editorial.md
proxima_skill: nome-da-proxima-skill
```

O exemplo é ilustrativo. Troque o ID, o caminho, o estado e as fontes pelos
valores reais, sem apagar o material original.

### Perguntas de conferência

1. A entrada pertence ao grupo **copy** e tem um ID localizável?
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
