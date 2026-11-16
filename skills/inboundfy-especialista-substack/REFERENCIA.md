# Manual de artigo ou newsletter Substack

## Diagnóstico da peça

1. O objetivo aprovado pede ensaio público, edição enviada ou trecho com acesso pago?
2. Qual tese e qual caso do acervo sustentam a peça?
3. O template de canais/substack/ já define subtítulo, separador de acesso e assinatura?

Se o brief já responder, use a resposta registrada. Se faltar fato obrigatório, devolva a pergunta ao planejamento ou à manutenção de contexto indicada por `CONTEXTO.md`. Não crie uma estratégia nova para completar a peça.

| Situação no brief | Tratamento | Evitar |
| --- | --- | --- |
| Tese autoral sustentada pelo acervo | Ensaio com argumento, caso e contraponto | Transcrição apenas repartida por subtítulos |
| Atualização analítica | Edição com contexto, leitura dos fatos e limite | Resumo sem interpretação |
| Acesso pago já aprovado | Trecho público útil e separador do template | Prometer conteúdo que a continuação não entrega |

## Formato e parâmetros editoriais

README Markdown dentro de `canais/substack/` na pasta da peça existente. Preserve frontmatter com `canal`, `persona`, `acervo`, título, fontes e relação com a base editorial. Use `brief` se houver pacote. Título tem alvo editorial até 80 caracteres, subtítulo opcional até 160; ensaio costuma ser planejado em 800 a 1.600 palavras. A extensão vem do brief, não de suposto limite da plataforma. O exemplo abaixo é uma edição breve completa.

Um H1, subtítulos que conduzem o argumento e links perto das afirmações. Referências finais identificam a origem sem duplicar blocos inteiros do acervo. Metadata de envio só entra quando houver envio previsto; se presente, confira assunto e pré-header com o template. Conteúdo pago, botões e recomendações seguem o template instalado e `context/integracoes.md`, sem gravar credenciais.

A revisão integra o pacote entregue, mas não deve virar seção pública da edição. Em publicação somente textual, a categoria visual confere hierarquia e legibilidade. Havendo imagem ou prévia, inspecione marca, legenda e alt text; não declare inspeção de tela que não ocorreu.

## Método de produção

1. Leia acervo aprovado, base editorial, persona, `.inboundfy/estrategia.md` e template de `canais/substack/`. Registre a tese e os fatos que realmente a sustentam.
2. Defina, conforme brief, ensaio, análise ou curadoria comentada. Uma transcrição vira argumento com seleção e interpretação, não mera troca de cabeçalhos.
3. Monte abertura, desenvolvimento, caso, contraponto e fechamento. Faça A4 antes de expandir a peça longa. Preserve a autoria: primeira pessoa só para experiência documentada ou opinião autorizada.
4. Se houver parte paga prevista, entregue um trecho público com utilidade própria e indicação clara do que continua. Use a marcação do template do projeto; não invente sintaxe de plataforma ou condição comercial.
5. Confira título, subtítulo opcional, fontes, links e CTA. Uma chamada para assinatura só entra quando for a ação aprovada. Não acrescente pedidos concorrentes para comentar, compartilhar e comprar.
6. Rode `inboundfy-copy-editor`, A5 e validadora. Salve README e revisão no canal. Publicar, cobrar ou enviar exige fluxo específico do projeto, fora da redação desta skill.

## Template da peça

Combine os campos específicos abaixo com o envelope de `../_shared/02-contrato-de-artefato.md`: ID, skill, tipo, estado, datas, entrada, contexto, fontes e próxima ação. Não substitua o template do consumidor por outro formato. Os campos abaixo complementam o contrato; `brief` é obrigatório em pacote e aponta para a origem efetiva.

```markdown
---
id: "{id}"
skill: inboundfy-especialista-substack
tipo: substack
canal: substack
estado: rascunho
persona: "{persona selecionada}"
titulo: "{promessa editorial}"
subtitulo: "{opcional, acrescenta contexto}"
acervo: "acervo/{id}-{data}-{slug}/"
base_editorial: "acervo/{id}-{data}-{slug}/base-editorial.md"
formato: "{ensaio|analise|curadoria}"
acesso: "{publico|pago conforme brief}"
revisao: "{caminho do relatório}"
brief: "{caminho do brief aprovado}"
fontes:
  - "{fonte da afirmação ou dado}"
---

# {Título}

{Subtítulo opcional conforme template.}

{Abertura com fato ou situação do acervo.}

## {Mecanismo que sustenta a tese}

{Explicação, fonte e interpretação.}

## {Caso e contraponto}

{Demonstração e limite. Se houver continuação paga, aplicar apenas separador já definido.}

{Fechamento e CTA único.}

## Fontes

{Links e referências que sustentam a tese.}
```

## Modelos por situação

### Modelo de reconstrução do argumento

```markdown
Tese da peça: {afirmação que será sustentada}.
Origem no acervo: {arquivo e seção}.
Pergunta da persona: {o que ela precisa compreender}.

| Bloco | Material escolhido | Interpretação própria | Limite ou contraponto |
| --- | --- | --- | --- |
| Abertura | {fato situado} | {por que abre a peça} | {alcance do fato} |
| Desenvolvimento | {mecanismo da fonte} | {relação causal explicada} | {condição necessária} |
| Caso | {dados e exemplo} | {o que a comparação mostra} | {o que ela não mede} |
| Fechamento | {consequência sustentada} | {ação coerente} | {promessa limitada ao entregue} |
```

### Modelo de entrega com acesso pago já autorizado

```markdown
Título: {promessa editorial}.
Subtítulo: {contexto adicional}.
Acesso: {condição registrada no brief}.

Trecho público:
{Argumento útil com começo, desenvolvimento e uma entrega própria.}

Ponto de separação para o editor:
{Indicação interna do local do separador, usando o template instalado.}

Continuação:
{Conteúdo que cumpre exatamente a promessa feita antes da separação.}

Fechamento:
{CTA único aprovado, sem inventar preço ou condição.}
```

A indicação interna do separador não é sintaxe para colar como texto público. O editor usa o mecanismo confirmado em `context/integracoes.md`. Se não houver mecanismo registrado, entregue o ponto indicado como pendência operacional; não simule implementação.

## Exemplo completo e leitura no fluxo

Na etapa de montagem da peça, leia [o exemplo completo da Fornada Clara](references/exemplo-completo.md). Ele inclui entrada aprovada e saída integral, com todos os blocos do canal. Na conferência final, compare com [o relatório preenchido da validadora](../inboundfy-validador-substack/REFERENCIA.md#exemplo-de-relatório-preenchido).

## Checklist numerado do par

Os números são os mesmos na produtora e na validadora. A classificação indica o tipo de leitura necessário; uma regra pode exigir mais de um passe. Marque não aplicável somente com justificativa verificável.

1. [ ] **literal**: Frontmatter contém canal, persona, acervo, base editorial, título, fontes, revisão e `brief` de pacote.
2. [ ] **semântica**: A tese deriva do acervo aprovado; autoria e primeira pessoa não atribuem vivência inexistente.
3. [ ] **estrutural**: Abertura, desenvolvimento, caso e contraponto formam argumento; adaptação ultrapassa o resumo da fonte.
4. [ ] **semântica**: Links e referências sustentam as afirmações; condição de acesso e promessa de continuação conferem com brief.
5. [ ] **estrutural**: CTA é único; separador de acesso, se aplicável, segue template; revisão fica fora do texto público.
6. [ ] **visual**: Título, subtítulo, hierarquia e prévia disponível preservam leitura; imagens existentes têm alt text e marca conferidos.
7. [ ] **literal**: ID, estado real, persona, origem e fontes estão ligados à peça; o exemplo fictício não virou contexto do consumidor.
8. [ ] **semântica**: Voz e afirmações conferem com todos os contextos e fontes aplicáveis; lacuna factual permanece fora da copy.
9. [ ] **estrutural**: Proibições foram revistas em passes literal e semântico/estrutural no arquivo inteiro, inclusive metadata, links e CTA.
10. [ ] **visual**: `brand/` foi procurada; ativos existentes e texto visual foram inspecionados ou a ausência foi justificada.
11. [ ] **estrutural**: Revisão de `inboundfy-copy-editor`, marco A5 e retorno da validadora foram registrados; mudança exige nova leitura integral.

## Erros comuns de substack

- Colar transcrição sem reconstruir argumento. Comece pela tese e selecione apenas trechos que a sustentam.
- Criar paywall por sugestão própria. Use somente acesso previsto no brief e template.
- Colocar relatório de revisão dentro do corpo a publicar. Mantenha caminho na metadata e documento separado.

## Acompanhamento da peça

Separe assinaturas, leitura e ação principal segundo o acesso e a distribuição registrados. Clique numa fonte não equivale a assinatura. Compare edições com formato e janela semelhantes, sem prometer conversão.

Medição pertence ao planejamento e às integrações aprovadas. Esta especialista entrega copy e relação com as fontes. Não configura envio, publicação ou coleta por conta própria.

## Guia específico do grupo

O registro do grupo `especialista` identifica canal `substack`, persona, objetivo do brief, formato e `inboundfy-validador-substack` como destino de revisão. Entregue arquivo, fontes lidas, pendências e ação solicitada. Se houver reprovação, corrija apenas o alcance solicitado, releia a peça inteira e retorne à mesma validadora. A aprovação precede o retorno a `inboundfy-planejamento`; variantes de imagem mantêm seus fluxos próprios.

## Arquitetura aplicada

- Antes da redação ou auditoria: [preflight e fontes](../_shared/01-preflight-e-fontes.md).
- Ao registrar a peça: [artefato e relações](../_shared/02-contrato-de-artefato.md).
- Nas escolhas e entrega: [checkpoints e handoff](../_shared/03-interacao-e-handoff.md).
- A cada rodada: [validação e retomada](../_shared/04-validacao-e-retomada.md).
- Antes de qualquer texto público: [contexto editorial](../_shared/05-contexto-editorial.md).

Leia também `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, `CONTEXTO.md` e `METODOLOGIA.md`. Os caminhos `context/` resolvem para `.inboundfy/context/` no consumidor; preserve a resolução e os diretórios já configurados.
