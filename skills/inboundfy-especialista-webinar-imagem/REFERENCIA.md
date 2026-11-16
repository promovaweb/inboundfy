# Thumbnail de webinar: produção

O par `inboundfy-especialista-webinar-imagem` e `inboundfy-validador-webinar-imagem` usa a mesma numeração de conferência. Esta referência trata exclusivamente webinar-imagem. Dimensões abaixo são exemplos de trabalho já usados pelo framework, não limites universais de plataforma. `context/canais.md` define a dimensão exata do projeto.

## Formato e pacote

| Peça | Proporção | Dimensão de referência |
| --- | --- | --- |
| Evento | 1:1 | 1080×1080 |

- Fonte ou motor: Geração por inboundfy-base-imagem com dados do evento.
- Arquivos: thumbnail.png e README.md com título, data, horário, fuso e dados confirmados do apresentador.
- Destino: `97-ativos-finais/webinar/<item>/`. Não criar caminhos alternativos.
- Exporte em sRGB. Use PNG para texto e ilustração; fotografia pode usar JPEG ou formato aceito pelo canal. Abra a exportação, não apenas o arquivo de edição. Dimensão, extensão e peso reais entram no README.

## Composição e escolha de abordagem

| Situação observada | Ação |
| --- | --- |
| Evento confirmado sem apresentador em destaque | Título e faixa de data; logo conforme marca. |
| Evento com pessoa confirmada e foto autorizada | Adicionar foto subordinada ao título e nome literal. |
| Data ou apresentador não confirmados | Registrar pendência e retornar à fonte responsável antes da versão final. |

1. Leia a peça final de webinar e registre título, data, horário e fuso. Preserve o ano no README para impedir confusão entre edições. Sem data confirmada, registre pendência; não invente calendário.
2. Separe hierarquia: título dominante, data e horário em faixa de apoio, apresentador em terceira posição. Se o título curto ainda não foi aprovado, peça à especialista de texto antes de compor.
3. Quando o canal pedir apresentador, confira nome e cargo em `context/pessoas.md`. Use apenas foto fornecida ou autorizada; não crie retrato sintético para substituir a pessoa.
4. Passe os dados literais e a dimensão quadrada a `inboundfy-base-imagem`. Com foto, reserve área menor que a do título. Sem foto, distribua título e faixa de data sem espaço vazio de retrato.
5. Abra a miniatura a 240 px e leia título, dia e horário. Confira data da arte contra o evento confirmado, não contra uma versão antiga da divulgação.
6. Registre fonte e versão dos dados no README. Mudança de data exige atualizar arte, derivados e relatório, preservando histórico. A thumbnail de gravação futura precisa de novo pedido e não herda convite ao vivo automaticamente.

## Template de brief visual e entrega

Preencha antes de chamar o motor ou buscar a foto. Preserve o envelope do contrato compartilhado no README. O texto entre chaves é campo de preenchimento.

```yaml
id: "{ID da peça}"
skill: inboundfy-especialista-webinar-imagem
estado: revisao
brief: "04-briefs/{arquivo}.md"
entrada: "{texto final e versão}"
persona: "{ID confirmado}"
fontes:
  - "{context/canais.md e identidade visual}"
titulo_evento: "{título final}"
titulo_curto_autorizado: "{texto ou não aplicável}"
data_iso: "{AAAA-MM-DD}"
data_visual: "{dia e mês aprovados}"
horario_e_fuso: "{hora e fuso}"
apresentador: "{nome e cargo ou não aplicável}"
fonte_pessoa: "{context/pessoas.md e seção}"
foto_e_permissao: "{caminho e autorização ou não aplicável}"
alt: "{título, data, horário e pessoa quando presente}"
saidas:
  - "{caminho de cada arquivo exportado}"
preview: "{largura de teste, recorte e resultado observado}"
pendencias: []
proxima_skill: inboundfy-validador-webinar-imagem
```

O README relaciona o brief, o texto final, cada exportação, suas dimensões, peso, alt e origem dos ativos. No pacote, mantenha `brief` no frontmatter. Texto longo em imagem exige transcrição acessível junto ao arquivo; o alt não substitui a transcrição.

## Exemplo completo de produção

A empresa fictícia brasileira **Ateliê Mandacaru**, de Fortaleza, organiza uma aula para artesãs que recebem encomendas pelo WhatsApp. Título aprovado: “Organize suas encomendas de dezembro”. Evento confirmado para 26/11/2026 às 19h, horário de Brasília (UTC−3), com a apresentadora fictícia Bia Flor de Barro, responsável por operações.

Brief 0042 define 1080×1080 em `97-ativos-finais/webinar/encomendas-dezembro/`. `context/pessoas.md` confirma nome e cargo; `brand/pessoas/bia.jpg` é a foto autorizada na simulação. Título no topo, faixa “Ao vivo | 26 de novembro | 19h de Brasília” no centro, foto e nome menores na base. Margem de 72 px; paleta terracota e creme; logo fornecido no canto superior.

Alt: “Aula Organize suas encomendas de dezembro, ao vivo em 26 de novembro de 2026 às 19h de Brasília, com Bia Flor de Barro”. README conserva data ISO 2026-11-26, horário 19:00, fuso UTC−3, caminho da peça do evento e fonte da pessoa. Não anuncia gratuidade ou certificado, pois o brief não contém essas condições.

Modelo sem apresentador: conservar título, faixa de data e horário, ampliar a área de respiro e retirar foto e nome somente quando o brief do canal permitir essa versão. Nenhuma pessoa substituta é inventada.

Entrega: `thumbnail.png` e README, preview a 240 px com título e data legíveis, estado revisao, destino `inboundfy-validador-webinar-imagem`.

## Checklist numerado espelhado

Os números abaixo têm o mesmo significado nas duas skills. Registre `atende`, `não atende` ou `não aplicável` com justificativa; não use notas ou médias para aprovar.

1. **Literal:** Título, data e horário da arte coincidem com o evento confirmado; README conserva ano, fuso e versão da fonte.
2. **Literal:** Nome e cargo, quando presentes, coincidem com context/pessoas.md; alt inclui dados atuais e respeita grafias e vetos.
3. **Semântica:** Peça comunica o evento correto e não acrescenta gratuidade, certificado ou condição comercial ausente do brief.
4. **Semântica:** Foto corresponde à pessoa confirmada e tem autorização; ausência de dado não foi preenchida com retrato ou nome inventado.
5. **Estrutural:** Thumbnail e README estão no diretório do webinar, com vínculo à peça de evento e ao brief.
6. **Estrutural:** Arquivo é quadrado nas dimensões confirmadas; versões com e sem apresentador seguem o formato autorizado.
7. **Visual:** Título, data e horário são legíveis a 240 px; fuso permanece acessível conforme o brief.
8. **Visual:** Foto e nome são subordinados ao título; logo, contraste e margens seguem a marca sem cobrir informações.

## Erros comuns e correções

- Reaproveitar data da edição anterior: comparar com o evento confirmado.
- Destacar a foto e esconder o horário: restaurar hierarquia.
- Inventar cargo ou retrato: usar fonte confirmada e ativo autorizado.

## Medição e limites

Medir cliques para a página do evento e inscrições por visita após publicação autorizada. Registrar origem e período; presença ao vivo também depende da confirmação e dos lembretes. A dimensão de referência não substitui a configuração do canal. Se a plataforma mudar sua exigência, confirme a documentação oficial antes de alterar o projeto.

## Arquitetura aplicada

- [Preflight e fontes](../_shared/01-preflight-e-fontes.md): confirmar sentinelas e fontes antes de abrir o brief visual.
- [Artefato e relações](../_shared/02-contrato-de-artefato.md): manter ID, estado, origem e relação com cada arquivo visual.
- [Interação e handoff](../_shared/03-interacao-e-handoff.md): registrar escolhas já confirmadas e pendências do formato.
- [Validação e retomada](../_shared/04-validacao-e-retomada.md): repetir a inspeção completa após cada correção.
- [Contexto editorial](../_shared/05-contexto-editorial.md): conferir persona, voz, glossário, aprendizado e proibições também nos pixels.

## Guia específico do grupo

A especialista prepara o conjunto completo e encaminha arquivos, fontes, medidas e previews a `inboundfy-validador-webinar-imagem`. Registre a fonte ou motor utilizado, sem expor segredos. Reaproveite a versão existente quando o pedido não exigir refação. Mudança em texto aprovado ou dado factual retorna à fonte responsável; ajuste visual não autoriza mudar a copy.

## Preparação antes da execução

No passo 1 do fluxo, leia [preparação do conjunto visual](references/preparacao.md) para conferir as perguntas do formato e a fonte de imagem permitida. Use as respostas já registradas no brief; pergunte apenas pelo dado ausente que altera a composição.

## Entrega para a validadora

Encaminhe a `inboundfy-validador-webinar-imagem` o conjunto descrito em Formato e pacote, acompanhado de ID, brief, texto final e versão, fontes, medidas reais e previews. Inclua o registro de origem dos ativos e as pendências. Uma devolução mantém o mesmo ID e informa a rodada; ajuste os arquivos apontados e entregue novamente todas as exportações, não apenas o recorte corrigido.
