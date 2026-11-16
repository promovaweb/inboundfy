# Infográfico vertical: produção

O par `inboundfy-especialista-infografico-imagem` e `inboundfy-validador-infografico-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente infografico-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Infográfico | 9:16 | 1080×1920 |

- Fonte ou motor: Geração por inboundfy-base-imagem a partir de copy aprovada.
- Arquivos: infografico.png e README.md com transcrição integral, fontes e alt text.
- Destino: `97-ativos-finais/infografico/<item>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Composição e escolha de abordagem

| Situação observada | Ação |
| --- | --- |
| Etapas de um procedimento | Usar blocos numerados em sequência vertical. |
| Categorias somam o total informado | Usar gráfico proporcional com rótulos e unidade. |
| Copy excede o espaço legível | Solicitar redução editorial; conservar todos os dados até nova aprovação. |

1. Numere os blocos da copy final e associe cada número à sua fonte. Preserve unidade, período, sinal e casa decimal; a arte não arredonda valores.
2. Faça um mapa vertical com título, blocos, fonte e logo. Reserve primeiro o espaço das fontes, pois o rodapé também precisa ser lido.
3. Escolha o recurso visual pelo significado: sequência usa numeração; comparação usa barras com mesma escala; composição usa partes de um total confirmado. Não transforme medidas independentes numa pizza.
4. Envie a `inboundfy-base-imagem` o texto literal de todos os blocos, a sequência e a dimensão. Proíba texto adicional, ícones ambíguos e números decorativos que pareçam dados.
5. Compare a transcrição da arte com a copy linha a linha. OCR ajuda a localizar diferenças, mas a leitura humana confirma símbolos, unidades e sinais.
6. Abra a imagem a 360 px de largura. Se texto ou fonte ficarem ilegíveis, reorganize espaço ou devolva a copy à especialista. Não apague bloco nem resuma fonte por iniciativa visual.

## Template de brief visual e entrega

Preencha antes de chamar o motor ou buscar a foto. Preserve o envelope do contrato compartilhado no README. O texto entre chaves é campo de preenchimento.

```yaml
id: "{ID da peça}"
skill: inboundfy-especialista-infografico-imagem
estado: revisao
brief: "04-briefs/{arquivo}.md"
entrada: "{texto final e versão}"
persona: "{ID confirmado}"
fontes:
  - "{context/canais.md e identidade visual}"
titulo_literal: "{título aprovado}"
blocos:
  - ordem: 1
    texto_literal: "{frase, valor e unidade}"
    fonte: "{arquivo, seção, período e amostra}"
recurso_visual: "{sequência, barras ou composição justificada}"
escala: "{origem, unidade e intervalo ou não aplicável}"
rodape_literal: "{fonte aprovada}"
alt: "{resumo acessível; transcrição integral acompanha o arquivo}"
saidas:
  - "{caminho de cada arquivo exportado}"
preview: "{largura de teste, recorte e resultado observado}"
pendencias: []
proxima_skill: inboundfy-validador-infografico-imagem
```

O README relaciona o brief, o texto final, cada exportação, suas dimensões, peso, alt e origem dos ativos. No pacote, mantenha `brief` no frontmatter. Texto longo em imagem exige transcrição acessível junto ao arquivo; o alt não substitui a transcrição.

## Exemplo completo de produção

A empresa fictícia brasileira **Sertão Entregas**, de Petrolina, prepara um infográfico para pequenos lojistas. A copy aprovada é um exercício didático sobre 100 pedidos simulados de outubro de 2026. Os valores não são estatística de mercado.

Título literal: “Como foram pagos 100 pedidos simulados”. Bloco 1: “Pix: 60 pedidos”. Bloco 2: “Cartão: 30 pedidos”. Bloco 3: “Dinheiro: 10 pedidos”. Rodapé: “Exercício fictício da Sertão Entregas. Outubro de 2026. Total: 100 pedidos simulados.” Fonte interna didática: `02-pesquisa-e-ativos/ativos.md`, seção “Cenário de pagamentos”.

Brief 0042 define 1080×1920, três blocos na ordem Pix, cartão, dinheiro e saída `97-ativos-finais/infografico/pagamentos-simulados/`. Margens laterais de 72 px, título no topo, três barras horizontais sobre escala comum de 0 a 100 pedidos e rodapé reservado. Barras proporcionais de 60, 30 e 10 unidades, com rótulos por extenso; cor não é o único identificador.

Prompt de composição: manter as três frases literalmente, desenhar barras com mesma origem e escala, usar fundo creme e texto verde escuro, aplicar o logo fornecido no rodapé. Não inserir percentuais, pois a copy usa pedidos.

Alt: “Exercício fictício com 100 pedidos: 60 pagos por Pix, 30 por cartão e 10 em dinheiro, em outubro de 2026”. README repete título, três blocos, fonte e alt. `infografico.png` mostra os três rótulos e a fonte legíveis a 360 px. Estado revisao; destino `inboundfy-validador-infografico-imagem`.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Cada valor, unidade, sinal e casa decimal coincide com a copy; verificar arte, transcrição e alt.
2. **Literal:** Título, rótulos e rodapé preservam a grafia aprovada; fontes e vetos são lidos também na imagem.
3. **Semântica:** Gráfico representa a relação real entre valores; partes de um total não são confundidas com medidas independentes.
4. **Semântica:** Amostra, período e caráter fictício permanecem explícitos; composição não transforma exemplo em resultado comercial.
5. **Estrutural:** Quantidade e ordem dos blocos coincidem com o brief; nenhuma fonte foi cortada para ganhar espaço.
6. **Estrutural:** Arquivo tem dimensão exata e README contém transcrição integral, fontes e alt no diretório contratado.
7. **Visual:** A leitura vertical é inequívoca a 360 px; rótulos e fontes podem ser lidos sem ampliar.
8. **Visual:** Escala, origem e proporção dos gráficos conferem; cor é acompanhada por rótulo e não oculta diferença.

## Erros comuns e correções

- Arredondar dados na arte: copiar exatamente a copy aprovada.
- Usar ícones com áreas que exageram diferenças: preferir barras em escala comum.
- Diminuir fonte até caber: pedir ajuste editorial antes de retirar conteúdo.

## Medição e limites

Registrar leitura a 360 px e diferença entre cada valor da copy e da arte, que deve ser zero. Compartilhamentos não comprovam precisão dos números. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A especialista prepara o conjunto completo e encaminha arquivos, fontes, medidas e previews a `inboundfy-validador-infografico-imagem`. Registre a fonte ou motor utilizado, sem expor segredos. Reaproveite a versão existente quando o pedido não exigir refação. Mudança em texto aprovado ou dado factual retorna à fonte responsável; ajuste visual não autoriza mudar a copy.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato e a fonte de imagem permitida. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Entrega para a validadora

Encaminhe a `inboundfy-validador-infografico-imagem` o conjunto descrito em Formato e pacote, acompanhado de ID, brief, texto final e versão, fontes, medidas reais e previews. Inclua o registro de origem dos ativos e as pendências. Uma devolução mantém o mesmo ID e informa a rodada; ajuste os arquivos apontados e entregue novamente todas as exportações, não apenas o recorte corrigido.
