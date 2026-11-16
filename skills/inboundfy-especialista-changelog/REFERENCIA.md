# Manual de entrada de changelog

## Diagnóstico da peça

1. Qual versão e data constam na fonte técnica?
2. Quem recebe a mudança agora e quem ainda não recebe?
3. Existe ação necessária ou alteração de comportamento que precisa de instrução?

Se o brief já responder, use a resposta registrada. Se faltar fato obrigatório, devolva a pergunta ao planejamento ou à manutenção de contexto indicada por `CONTEXTO.md`. Não crie uma estratégia nova para completar a peça.

| Situação no brief | Tratamento | Evitar |
| --- | --- | --- |
| Recurso antes inexistente | Novidade: capacidade, acesso e primeira ação | Anunciar antes da liberação |
| Mesmo recurso com uso alterado | Melhoria: antes, agora e alcance | Prometer ganho de tempo sem medição |
| Comportamento incorreto corrigido | Correção: sintoma e comportamento restaurado | Expor dados de cliente ou detalhes internos |

## Formato e parâmetros editoriais

Entrada Markdown com `data` em AAAA-MM-DD e `tipo` entre `novidade`, `melhoria`, `correcao`. Mantenha `brief` em pacote. Acrescente versão, alcance e fonte técnica sem substituir os campos existentes. Use H2 para a área afetada quando a entrada for anexada ao histórico; o arquivo que a recebe mantém seu H1.

Como alvo editorial, use título de até 80 caracteres e 80 a 250 palavras por entrada. Uma migração pode exigir passos extras; registre o motivo de ultrapassar essa faixa. Não invente número de versão. Data de postagem e data de disponibilidade devem ser distinguidas quando forem diferentes.

A saída continua no caminho do canal changelog em `context/canais.md`. Não renomeie arquivo histórico ou categorias já adotadas pelo projeto. Capturas só entram quando mostram a versão descrita e não exibem dados pessoais.

## Método de produção

1. Extraia da nota técnica o comportamento anterior, o atual, a versão, a data e o público afetado. PR aberto não comprova disponibilidade.
2. Relacione cada mudança a uma fonte e descarte refatorações sem efeito público, salvo pedido técnico explícito.
3. Classifique como `novidade`, `melhoria` ou `correcao` conforme o efeito descrito. Caso o release misture tipos, faça entradas separadas ou use o formato já instalado.
4. Escreva primeiro o efeito que a pessoa verá. Depois explique alcance, condição de acesso e ação necessária. Traduza nomes internos usando `context/glossario.md`.
5. Para migração, registre pré-requisito, passos, prazo confirmado e forma de conferir a conclusão. Para mudança automática, diga expressamente que não há ação necessária.
6. Confira texto contra a versão entregue, aplique `inboundfy-copy-editor`, A5 e validadora. Preserve a ordem e o arquivo histórico do canal.

## Template da peça

Combine os campos específicos abaixo com o envelope de `../_shared/02-contrato-de-artefato.md`: ID, skill, tipo, estado, datas, entrada, contexto, fontes e próxima ação. Não substitua o template do consumidor por outro formato. Os campos abaixo complementam o contrato; `brief` é obrigatório em pacote e aponta para a origem efetiva.

```markdown
---
id: "{id}"
skill: inboundfy-especialista-changelog
tipo: changelog
canal: changelog
estado: rascunho
persona: "{persona selecionada}"
data: "{AAAA-MM-DD da disponibilidade}"
tipo: "{novidade|melhoria|correcao}"
versao: "{versão confirmada}"
alcance: "{planos e contas atendidos}"
fonte_tecnica: "{release ou registro entregue}"
brief: "{caminho do brief aprovado}"
fontes:
  - "{fonte da afirmação ou dado}"
---

## {Área ou funcionalidade pelo nome público}

{Comportamento novo e contraste factual com o anterior.}

{Quem recebe, condições e limite conhecido.}

{Ação necessária com passos ou declaração de ausência.}

{Como conferir o resultado e contato já autorizado, se necessário.}
```

## Modelos por situação

### Modelo de migração necessária

A mudança só recebe instrução de migração quando a fonte técnica a exigir. Preencha o prazo e a consequência com dados confirmados, sem criar urgência editorial.

```markdown
## {Integração ou recurso afetado}

A partir de {data confirmada}, {mudança observável}. Ela atende {contas elegíveis} na versão {versão entregue}.

Antes de começar: {permissão, dependência e cópia necessária conforme fonte}.

1. Abra {tela pública}.
2. Execute {ação exigida}.
3. Confira {sinal de conclusão}.

Conclua até {prazo confirmado}. Após essa data, {consequência confirmada da não atualização}.

Se {falha documentada}, use {orientação ou contato autorizado}. {Limite conhecido}.
```

### Modelo de correção sem ação

```markdown
## {Sintoma corrigido}

Corrigimos {comportamento incorreto} que afetava {público e condição}. Agora {comportamento restaurado}.

A correção está disponível em {versão e data}. Nenhuma ação é necessária. Confira {sinal visível se útil}.
```

## Exemplo completo e leitura no fluxo

Na etapa de montagem da peça, leia [o exemplo completo da Fornada Clara](references/exemplo-completo.md). Ele inclui entrada aprovada e saída integral, com todos os blocos do canal. Na conferência final, compare com [o relatório preenchido da validadora](../inboundfy-validador-changelog/REFERENCIA.md#exemplo-de-relatório-preenchido).

## Checklist numerado do par

Os números são os mesmos na produtora e na validadora. A classificação indica o tipo de leitura necessário; uma regra pode exigir mais de um passe. Marque não aplicável somente com justificativa verificável.

1. [ ] **literal**: Data, tipo, versão confirmada, alcance, fonte técnica e `brief` de pacote estão presentes.
2. [ ] **semântica**: A mudança existe na versão entregue; disponibilidade e público correspondem à fonte técnica.
3. [ ] **semântica**: O texto explica efeito visível, comportamento anterior e limite sem promessa não medida.
4. [ ] **estrutural**: Entrada separa mudança, alcance, ação e conferência; migração tem passos completos quando aplicável.
5. [ ] **literal**: Grafia pública e tipo correspondem ao contexto; nomes internos e dados de cliente foram removidos.
6. [ ] **visual**: Hierarquia encaixa no histórico; capturas, se houver, mostram a versão correta sem dados pessoais.
7. [ ] **literal**: ID, estado real, persona, origem e fontes estão ligados à peça; o exemplo fictício não virou contexto do consumidor.
8. [ ] **semântica**: Voz e afirmações conferem com todos os contextos e fontes aplicáveis; lacuna factual permanece fora da copy.
9. [ ] **estrutural**: Proibições foram revistas em passes literal e semântico/estrutural no arquivo inteiro, inclusive metadata, links e CTA.
10. [ ] **visual**: `brand/` foi procurada; ativos existentes e texto visual foram inspecionados ou a ausência foi justificada.
11. [ ] **estrutural**: Revisão de `inboundfy-copy-editor`, marco A5 e retorno da validadora foram registrados; mudança exige nova leitura integral.

## Erros comuns de changelog

- Anunciar PR como recurso disponível. Exija confirmação do release entregue.
- Escrever apenas “melhorias de desempenho”. Descreva o efeito observado sem inventar percentual.
- Omitir que a liberação atende apenas um plano. Informe o alcance perto da mudança.

## Acompanhamento da peça

Após publicação autorizada por outro fluxo, acompanhe acesso à nota, adoção do recurso entre contas elegíveis e contatos sobre migração. Não atribua à nota toda variação de uso.

Medição pertence ao planejamento e às integrações aprovadas. Esta especialista entrega copy e relação com as fontes. Não configura envio, publicação ou coleta por conta própria.

## Guia específico do grupo

O registro do grupo `especialista` identifica canal `changelog`, persona, objetivo do brief, formato e `inboundfy-validador-changelog` como destino de revisão. Entregue arquivo, fontes lidas, pendências e ação solicitada. Se houver reprovação, corrija apenas o alcance solicitado, releia a peça inteira e retorne à mesma validadora. A aprovação precede o retorno a `inboundfy-planejamento`; variantes de imagem mantêm seus fluxos próprios.

## Arquitetura aplicada

- Antes da redação ou auditoria: [preflight e fontes](../_shared/01-preflight-e-fontes.md).
- Ao registrar a peça: [artefato e relações](../_shared/02-contrato-de-artefato.md).
- Nas escolhas e entrega: [checkpoints e handoff](../_shared/03-interacao-e-handoff.md).
- A cada rodada: [validação e retomada](../_shared/04-validacao-e-retomada.md).
- Antes de qualquer texto público: [contexto editorial](../_shared/05-contexto-editorial.md).

Leia também `ESCRITA.md`, `ESTRUTURAS-PERSUASIVAS.md`, `CONTEXTO.md` e `METODOLOGIA.md`. Os caminhos `context/` resolvem para `.inboundfy/context/` no consumidor; preserve a resolução e os diretórios já configurados.
