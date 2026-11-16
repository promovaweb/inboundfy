# Referência do setup

## Arquivos do projeto

| Área | Caminho |
| --- | --- |
| Configuração operacional | `.inboundfy/estrategia.md` e `.inboundfy/pipeline.md` |
| Contexto e copy | `.inboundfy/context/*.md`, incluindo `aprendizado.md` |
| Regras do framework | `.inboundfy/framework/` |
| Índices | `.inboundfy/indices/*.json` |
| Acervo | `acervo/<id>-<data>-<slug>/` |
| Saída | `canais/<canal>/<id>-<data>-<slug>/README.md` |
| Calendário | `calendario/AAAA-MM.md` |

## Campos mínimos

`context/empresa.md` precisa de empresa, descrição e site.
`context/marca-voz.md` precisa de adjetivos, pessoa verbal e idioma.
`context/publico.md` precisa de uma persona com contexto, problema e
resultado. `estrategia.md` precisa de canal e objetivo.

## Entrevista de configuração

Faça as perguntas por bloco e registre somente respostas confirmadas:

1. Empresa: nome, descrição, site, país, região, idioma, contatos, endereço
   físico, registro legal, URLs oficiais, pessoas autorizadas e redes sociais.
2. Oferta: produto ou serviço, público, problema, resultado, mecanismo,
   preço, condições, provas, limites e próxima ação.
3. Personas: perfil, cargo ou situação, tarefa, contexto de compra, problema,
   resultado, objeções, vocabulário e canais. Registre pelo menos uma.
4. Voz: adjetivos, pessoa verbal, tempo, formalidade, ritmo, humor, aberturas,
   fechamentos, tamanho de parágrafo e exemplos aprovados e rejeitados.
5. Regras: termos proibidos, promessas vetadas, estruturas a evitar, grafia
   oficial, termos preferidos, correções já aprovadas e o arquivo de
   aprendizado que preservará novas orientações.
6. Estratégia: objetivo, oferta principal, horizonte, cadência, datas,
   formatos e canais escolhidos entre Blog, Email, LinkedIn, Instagram,
   Substack e YouTube.
7. Pipeline: estados usados, responsável por aprovação, campos exigidos para
   agendamento e URL/data exigidas para publicação.

8. Aprendizado: orientações anteriores, alcance de cada registro e regras que
   já foram aplicadas ao projeto.
9. Configurações gerais: agente principal (Codex, Claude Code ou outro),
   fuso horário, moeda, idioma de publicação, pasta de saída e quem aprova
   mudanças de configuração.
10. Integrações: ferramentas usadas em cada área, estado do acesso, variáveis
    de ambiente e escopo. Siga [references/integracoes.md](references/integracoes.md)
    e grave em `context/integracoes.md`.
11. Áreas de trabalho: quais áreas o projeto vai usar agora (conteúdo, SEO,
    copy, growth, vendas, dados, pesquisa). Registre em `estrategia.md` e
    apresente a skill `inboundfy-area-*` de cada uma como porta de entrada.

Quando uma resposta mudar apenas uma peça, registre o alcance como `peça`.
Quando valer para um canal, registre `canal`. Só use `projeto` após confirmação.

## Mapa de configurações

Toda configuração do Inboundfy num projeto mora num destes lugares:

| Configuração | Arquivo | Etapa da entrevista |
| --- | --- | --- |
| Identidade, contatos, endereço | `context/empresa.md`, `context/enderecos.md`, `context/links.md` | 1 |
| Produtos, serviços, ofertas | `context/produtos.md`, `context/servicos.md`, `context/ofertas.md` | 2 |
| Personas | `context/publico.md` | 3 |
| Voz | `context/marca-voz.md` | 4 |
| Proibições, grafia, estruturas vetadas | `context/proibicoes.md`, `context/glossario.md`, `context/estruturas-proibidas.md` | 5 |
| Canais, objetivo, cadência, áreas | `estrategia.md` | 6 e 11 |
| Estados e aprovações | `pipeline.md` | 7 |
| Orientações acumuladas | `context/aprendizado.md` | 8 |
| Agente, fuso, moeda, idioma | `context/integracoes.md`, seção Regras do projeto | 9 |
| Ferramentas e variáveis de ambiente | `context/integracoes.md` e `.env.example` | 10 |
| Segredos | `.env`, fora do Git | 10 |

Nenhuma outra skill cria arquivo de configuração. Quando uma skill precisar de
um dado que não está aqui, ela pede o dado e devolve a pergunta para o setup.

## Arquitetura aplicada

Esta referência usa o contrato comum para a skill **inboundfy-setup**, do grupo
**entrada**. Leia os detalhes compartilhados conforme a etapa atual:

- [preflight e fontes](../_shared/01-preflight-e-fontes.md);
- [artefato e relações](../_shared/02-contrato-de-artefato.md);
- [checkpoints e handoff](../_shared/03-interacao-e-handoff.md);
- [validação e retomada](../_shared/04-validacao-e-retomada.md);
- [contexto editorial](../_shared/05-contexto-editorial.md).

## Guia específico do grupo

Prepare ou encaminhe a execução. Preserve respostas existentes e não crie conteúdo antes de o contexto mínimo estar pronto.

## Template de registro do setup

```markdown
---
skill: inboundfy-setup
estado: {em andamento | pronto}
data: AAAA-MM-DD
---

# Registro de setup

## Etapas concluídas

- [x] 1. Empresa
- [ ] 10. Integrações: faltam Meta Ads e RD Station

## Arquivos alterados

- .inboundfy/context/empresa.md: {o que entrou}

## Pendências

- {pergunta sem resposta ou acesso não liberado}

## Próxima ação

{rodar inboundfy context ready --yes | responder a etapa N}
```

## Exemplo

A Doce Ofício, escola fictícia de confeitaria de Belo Horizonte, instala o
Inboundfy com o Codex.

1. `inboundfy install --yes --agent codex` cria `.inboundfy/`.
2. Empresa, oferta (curso presencial de bolos, R$ 1.290 em até 10x) e duas
   personas (quem quer renda extra e quem já vende e quer padronizar) entram
   nos arquivos de contexto.
3. Na voz, a escola escolhe "acolhedora, prática, sem gourmetização" e
   segunda pessoa.
4. Em estratégia, marca Instagram, Email e YouTube, com meta de 40 matrículas
   por turma.
5. Em configurações, registra fuso `America/Sao_Paulo`, moeda BRL e o Codex
   como agente.
6. Em integrações, marca GA4, Meta Ads e Hotmart como ativos, RD Station
   como "sem acesso" (a agência ainda não liberou) e o restante como "não usa".
   O `.env.example` recebe só as variáveis dessas quatro ferramentas.
7. Em áreas, ativa conteúdo, growth e dados. O setup apresenta
   `inboundfy-area-conteudo`, `inboundfy-area-growth` e
   `inboundfy-area-dados` como portas de entrada.
8. `inboundfy context ready --yes` e `inboundfy doctor --strict` passam. A
   pendência do RD Station fica registrada em `context/integracoes.md`.

## Checklist

- [ ] O doctor passou antes e depois.
- [ ] Nenhum arquivo de `.inboundfy/framework/` foi alterado.
- [ ] Existe ao menos uma persona completa e um canal marcado.
- [ ] Toda resposta registrada tem fonte ou confirmação da pessoa.
- [ ] `context/integracoes.md` lista cada ferramenta com estado.
- [ ] Nenhum valor de segredo aparece em arquivo versionado.
- [ ] O `.env` está no `.gitignore`.
- [ ] As áreas ativas estão em `estrategia.md`.

## Erros comuns

- Pedir o token no chat e colar no arquivo de contexto.
- Marcar todas as integrações como ativas sem conferir o acesso.
- Sobrescrever respostas de um setup anterior em vez de completar o que falta.
- Começar a produzir conteúdo antes do estado `ready`.
- Renomear variáveis de ambiente que o projeto já usava.
