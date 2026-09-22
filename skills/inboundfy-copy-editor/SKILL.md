---
name: inboundfy-copy-editor
description: >
  Audita e corrige prosa por achados verificáveis, com referência aos
  contextos e às regras editoriais do Inboundfy. Registra trecho, origem,
  diagnóstico e ação, e repete a leitura integral após as correções.
---

# Inboundfy Editor

Skill de apoio usada por especialistas de canal antes da entrega e por
`inboundfy-planejamento` na auditoria final. Encontre ocorrências concretas,
explique a regra aplicável e corrija a prosa sem atribuir notas ou percentuais.

Consulte `.inboundfy/context/empresa.md` e `.inboundfy/framework/` antes da
auditoria, além de `inboundfy-setup` para confirmar a preparação do projeto.

## Escopo

Audita e corrige prosa por parágrafo. Não define se a peça deve existir nem
substitui a auditoria do pacote completo de `inboundfy-planejamento`, que
também confere brief, canal e formato.

## Verificação do setup

Confirme `.inboundfy/framework/VERSAO.md` e `.inboundfy/fontes-projeto.md` no
início. Se algum estiver ausente, informe: "O setup do Inboundfy ainda não foi
concluído ou precisa de reparo neste projeto. Execute `inboundfy-setup` para
preparar os arquivos de apoio." Encerre sem criar ou alterar artefatos. Após
essa conferência, leia o catálogo e os Markdown relevantes para a tarefa.

## Arquitetura de execução

Confirme os arquivos de instalação antes de criar ou alterar artefatos. Siga o
contrato compartilhado e use a referência desta pasta.

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): carregue o contexto e registre as origens.
- [Contrato de artefato](../_shared/02-contrato-de-artefato.md): mantenha ID, estado, fontes e relações.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): conduza escolhas e entregue o pacote seguinte.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): revise, devolva e retome sem perder versões.
- [Contexto editorial](../_shared/05-contexto-editorial.md): aplique voz, personas, dicionário e proibições quando houver texto.

Consulte [REFERENCIA.md](REFERENCIA.md) na etapa que monta o artefato. O grupo
desta skill é **copy**.

## Contexto exigido

- `.inboundfy/context/marca-voz.md`, `.inboundfy/context/publico.md`,
  `.inboundfy/context/proibicoes.md` e `.inboundfy/context/glossario.md`.
- `inboundfy-anti-slop` para a leitura de naturalidade e especificidade.
- `ESCRITA.md`: padrão de escrita humana e anti-slop.
- `context/proibicoes.md`: vetos de negócio.
- `context/estruturas-proibidas.md`: padrões genéricos de palavra, frase e
  estrutura de parágrafo com aparência de texto automático.
- `context/marca-voz.md`: tom e vocabulário preferido ou evitado.

## Entrada esperada

Texto em Markdown ou texto puro, geralmente um rascunho produzido por uma
skill de canal.

## Fluxo

1. Leia `ESCRITA.md`, os dois arquivos de proibições, `context/marca-voz.md` e
   o checklist de `REFERENCIA.md`.
2. Leia o texto inteiro. Considere frontmatter, headings, listas, CTA, alt
   text e conteúdo inserido em imagem.
3. Faça uma busca literal e outra semântica e estrutural. Registre cada
   ocorrência com localização, trecho observado, regra ou fonte, diagnóstico
   e ação necessária. Não use notas, médias ou percentuais.
4. Reescreva os trechos apontados, preservando fatos, objeto e intenção, e
   aplicando `ESCRITA.md`, a voz do projeto e a calibração da referência.
5. Leia novamente o texto inteiro depois das correções. Uma ocorrência de
   veto mantém o resultado reprovado até sua remoção ou até confirmação de
   uma exceção na fonte canônica.
6. Devolva o texto corrigido e o relatório conforme o modelo de
   `REFERENCIA.md`. Separe pendências de contexto das correções já aplicadas.

## Saída

Relatório de achados e texto corrigido, devolvidos à skill que chamou
`inboundfy-copy-editor` (especialista de canal ou
`inboundfy-planejamento`). Não salva arquivo próprio; a skill solicitante
define onde persistir o resultado.

## Validação

- Cada achado aponta para trecho e localização identificáveis.
- Cada achado informa a regra ou fonte aplicável, o diagnóstico e a ação.
- Toda ocorrência de proibição mantém o texto reprovado até ser tratada.
- A leitura literal e a semântica/estrutural foram refeitas após a correção.
- O resultado descreve o estado observado, sem nota ou percentual editorial.

## Responsabilidade do grupo

Entregue uma função reutilizável, sem assumir canal ou negócio. Receba um
artefato claro e devolva um registro consumível pela skill chamadora.

Antes do handoff, confirme os campos próprios deste grupo:

- **grupo:** copy
- **entrada:** caminho ou ID ligado ao pedido;
- **transformação:** ação principal descrita no fluxo;
- **saída:** arquivo, resposta ou relatório com formato definido;
- **handoff:** próxima skill, estado e pendências.

## Idempotência

Uma nova execução reavalia o texto atual do início; não herda achados antigos
sem ler a versão presente.
