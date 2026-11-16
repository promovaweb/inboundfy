# Manual de ebook

## Diagnóstico da peça

1. Qual tarefa completa o leitor conseguirá executar ao terminar?
2. Qual conhecimento ele já tem e qual entrega depende do capítulo anterior?
3. A entrega é arquivo único, capítulos separados ou texto para diagramação?

Se o brief já responder, use a resposta registrada. Se faltar fato obrigatório, devolva a pergunta ao planejamento ou à manutenção de contexto indicada por `CONTEXTO.md`. Não crie uma estratégia nova para completar a peça.

| Situação no brief | Tratamento | Evitar |
| --- | --- | --- |
| Aprender procedimento completo | Capítulos por dependência: preparar, executar, conferir | Capítulos intercambiáveis |
| Consultar conceitos | Unidades autônomas com índice e remissões | Repetir introdução a cada capítulo |
| Material comercial educativo | Desenvolvimento útil e oferta apenas no ponto autorizado | Usar cada capítulo para repetir o anúncio |

## Formato e parâmetros editoriais

Preserve `titulo`, `promessa`, sumário de capítulos e `brief` em pacote. Declare `publico`, modo de entrega, extensão combinada e relação dos arquivos. Um arquivo único tem um H1 para o livro e H2 por capítulo; capítulos separados respeitam a hierarquia do template instalado.

Negocie a extensão pelo conteúdo: guia breve de 3 a 5 capítulos pode ter 3.000 a 6.000 palavras; manual extenso exige outra faixa registrada. Não existe equivalência fixa entre palavras e páginas. O exemplo é um microebook completo de três capítulos solicitado no brief, sem representar o tamanho de todo projeto.

Salve arquivo único ou capítulos no caminho de ebook em `context/canais.md`. Para diagramação, entregue títulos, tabelas simples, legendas, remissões e sugestões de quebra claramente separadas do texto. Não simule números de página antes da paginação. Texto alternativo e ordem de leitura pertencem à conferência do arquivo exportado quando ele existir.

## Método de produção

No passo de redação, consulte [estrutura editorial e menções comerciais](references/estrutura-editorial.md).

1. Escreva a promessa como tarefa verificável. Separe entradas necessárias, resultado final e assuntos fora do livro.
2. Monte uma tabela por capítulo: entrada, aprendizado, exercício ou demonstração e entrega. Se dois capítulos entregarem a mesma coisa, una-os ou mude a função de um deles.
3. Valide o sumário e execute A4 sobre abertura e primeira unidade antes de expandir. Um capítulo técnico precisa de desenvolvimento, demonstração e limite, não de frases para preencher páginas.
4. Redija em ordem de dependência. Reutilize o mesmo caso para mostrar evolução, mas acrescente uma operação nova em cada capítulo. Confira consistência de nomes e números entre todas as unidades.
5. Use PAS na abertura comercial e AIDA compacto no fechamento comercial somente conforme brief. Produto autorizado recebe FAB. O restante segue prosa informativa.
6. Faça revisão por capítulo com `inboundfy-copy-editor`, leitura integral entre capítulos, A5 e validadora. Depois encaminhe a `inboundfy-especialista-ebook-imagem`; paginação e exportação seguem o projeto.

## Template da peça

Combine os campos específicos abaixo com o envelope de `../_shared/02-contrato-de-artefato.md`: ID, skill, tipo, estado, datas, entrada, contexto, fontes e próxima ação. Não substitua o template do consumidor por outro formato. Os campos abaixo complementam o contrato; `brief` é obrigatório em pacote e aponta para a origem efetiva.

```markdown
---
id: "{id}"
skill: inboundfy-especialista-ebook
tipo: ebook
canal: ebook
estado: rascunho
persona: "{persona selecionada}"
titulo: "{nome do livro}"
promessa: "{tarefa verificável}"
publico: "{persona}"
capitulos: ["{preparação}", "{execução}", "{conferência}"]
modo_entrega: "{unico|capitulos}"
extensao: "{faixa aprovada pelo brief}"
brief: "{caminho do brief aprovado}"
fontes:
  - "{fonte da afirmação ou dado}"
---

# {Título}

{Abertura: problema situado, alcance e resultado do livro.}

## Sumário

1. {Preparação e entrega}
2. {Execução e entrega}
3. {Conferência e entrega}

## 1. {Preparação}

{Entradas, contexto e exemplo. Termine com o material necessário ao capítulo 2.}

## 2. {Execução}

{Procedimento desenvolvido com caso interpretado. Termine com resultado a conferir.}

## 3. {Conferência}

{Teste, exceção e limite.}

{CTA único autorizado.}

## Fontes

{Origens ligadas às afirmações e dados.}
```

## Modelos por situação

### Modelo de arquitetura antes dos capítulos

```markdown
Promessa: {tarefa final}.
Conhecimento inicial: {o que a persona já sabe}.
Entradas: {materiais ou dados necessários}.
Fora do alcance: {assuntos que este livro não resolve}.
Formato e extensão: {arquivo único ou capítulos e faixa aprovada}.

| Capítulo | Entrada recebida | Operação ensinada | Entrega ao próximo capítulo | Fonte |
| --- | --- | --- | --- | --- |
| 1. {preparar} | {situação inicial} | {ação} | {material preparado} | {origem} |
| 2. {executar} | {material do capítulo 1} | {ação nova} | {resultado observável} | {origem} |
| 3. {conferir} | {resultado do capítulo 2} | {teste e exceção} | {tarefa final realizada} | {origem} |
```

### Modelo de entrega à diagramação

```markdown
Arquivos: {relação dos capítulos em ordem}.
Sumário: {títulos idênticos aos capítulos}.
Capa: encaminhar à inboundfy-especialista-ebook-imagem após aprovação textual.
Tabelas: {seção, largura pretendida e legenda}.
Remissões: {origem e destino por título, sem páginas inventadas}.
Acessibilidade: {ordem de leitura, alt text e cabeçalhos a conferir no exportado}.
Pendências: {arquivo ou confirmação que ainda falta}.
```

A diagramação pode alterar a paginação, mas não deve mudar o sentido de fórmulas, ressalvas ou CTA. Alteração de texto no exportado exige nova revisão da versão correspondente.

## Exemplo completo e leitura no fluxo

Na etapa de montagem da peça, leia [o exemplo completo da Fornada Clara](references/exemplo-completo.md). Ele inclui entrada aprovada e saída integral, com todos os blocos do canal. Na conferência final, compare com [o relatório preenchido da validadora](../inboundfy-validador-ebook/REFERENCIA.md#exemplo-de-relatório-preenchido).

## Checklist numerado do par

Os números são os mesmos na produtora e na validadora. A classificação indica o tipo de leitura necessário; uma regra pode exigir mais de um passe. Marque não aplicável somente com justificativa verificável.

1. [ ] **literal**: Título, promessa, público, sumário, extensão combinada, modo de entrega e `brief` de pacote estão presentes.
2. [ ] **semântica**: A promessa corresponde à tarefa realizada e ao conhecimento inicial da persona.
3. [ ] **estrutural**: Cada capítulo recebe uma entrada e entrega algo novo; remissões e sequência permitem seguir a tarefa.
4. [ ] **semântica**: Casos, contas e termos são consistentes entre capítulos; limites e fontes acompanham as afirmações.
5. [ ] **estrutural**: PAS/AIDA só aparecem nas partes comerciais autorizadas; FAB tem fonte e o fechamento tem CTA único.
6. [ ] **visual**: Sumário e hierarquia permitem diagramação; tabelas e legendas são legíveis; exportação só é atestada após inspeção.
7. [ ] **literal**: ID, estado real, persona, origem e fontes estão ligados à peça; o exemplo fictício não virou contexto do consumidor.
8. [ ] **semântica**: Voz e afirmações conferem com todos os contextos e fontes aplicáveis; lacuna factual permanece fora da copy.
9. [ ] **estrutural**: Proibições foram revistas em passes literal e semântico/estrutural no arquivo inteiro, inclusive metadata, links e CTA.
10. [ ] **visual**: `brand/` foi procurada; ativos existentes e texto visual foram inspecionados ou a ausência foi justificada.
11. [ ] **estrutural**: Revisão de `inboundfy-copy-editor`, marco A5 e retorno da validadora foram registrados; mudança exige nova leitura integral.

## Erros comuns de ebook

- Dividir um artigo em capítulos sem acrescentar entregas. Refaça a tabela de dependências.
- Inserir páginas fictícias no sumário Markdown. Aguarde o arquivo diagramado.
- Revisar capítulos separados sem reler a sequência. Faça uma passagem só de números, nomes e remissões.

## Acompanhamento da peça

Acompanhe acesso ao arquivo e ação final quando o projeto tiver medição autorizada. Download não comprova leitura; use respostas ou exercício concluído para avaliar utilidade sem prometer taxa de conclusão.

Medição pertence ao planejamento e às integrações aprovadas. Esta especialista entrega copy e relação com as fontes. Não configura envio, publicação ou coleta por conta própria.

## Guia específico do grupo

O registro do grupo `especialista` identifica canal `ebook`, persona, objetivo do brief, formato e `inboundfy-validador-ebook` como destino de revisão. Entregue arquivo, fontes lidas, pendências e ação solicitada. Se houver reprovação, corrija apenas o alcance solicitado, releia a peça inteira e retorne à mesma validadora. A aprovação precede o retorno a `inboundfy-planejamento`; variantes de imagem mantêm seus fluxos próprios.

## Arquitetura aplicada

- Antes da redação ou auditoria: [preflight e fontes](../_shared/01-preflight-e-fontes.md).
- Ao registrar a peça: [artefato e relações](../_shared/02-contrato-de-artefato.md).
- Nas escolhas e entrega: [checkpoints e handoff](../_shared/03-interacao-e-handoff.md).
- A cada rodada: [validação e retomada](../_shared/04-validacao-e-retomada.md).
- Antes de qualquer texto público: [contexto editorial](../_shared/05-contexto-editorial.md).

Leia também `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, `CONTEXTO.md` e `METODOLOGIA.md`. Os caminhos `context/` resolvem para `.inboundfy/context/` no consumidor; preserve a resolução e os diretórios já configurados.
