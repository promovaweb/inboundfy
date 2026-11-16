# Tutorial: SEO de um site parado

Este tutorial mostra uma auditoria de SEO, a reorganização da arquitetura, a
otimização de páginas, os dados estruturados e a conquista de links externos.
O escritório do exemplo é fictício.

A empresa do exemplo é a **Contabilidade Prisma**, escritório com 900 clientes
em Belo Horizonte. O site tem 62 páginas. O blog publica dois artigos por mês
e o tráfego orgânico está em 4.100 visitas mensais desde fevereiro.

## Passo 1: diagnóstico

```text
$inboundfy-area-seo o blog parou de crescer em fevereiro. Publicamos dois
posts por mês e nada muda. As páginas de serviço quase não aparecem.
```

Perguntas da área:

1. O Search Console está com acesso liberado no projeto?
2. Qual página trazia mais cliques no ano passado?
3. O site tem página de serviço para cada cidade atendida?
4. Houve troca de domínio, mudança de CMS ou migração de URL neste ano?

Respostas:

```text
Sim, o Search Console está ativo. A página de abertura de empresa trazia 1.200
cliques por mês. Não temos página por cidade. Não houve migração.
```

A área escolhe a rota:

```text
Diagnóstico: existe base de cliques concentrada em poucas páginas e nenhuma
página por cidade. O volume de publicação não compensa a falta de arquitetura.

Rota recomendada: inboundfy-auditoria-seo
Próxima depois dela: inboundfy-arquitetura-site
```

## Passo 2: auditoria

O agente registra o trabalho como item do acervo e salva o relatório:

```text
acervo/0011-2026-11-03-auditoria-seo-site-prisma/
├── bruto.md
└── auditoria-seo.md
```

Trecho de `auditoria-seo.md`:

```markdown
## Resumo executivo

1. Trinta e uma páginas têm o mesmo title, herdado do template.
2. Nenhuma página de serviço cita a cidade no conteúdo, só no rodapé.
3. Vinte e duas páginas são acessíveis apenas por link no rodapé.
4. Quatro artigos de blog têm conteúdo quase idêntico sobre o mesmo tema.
5. O tempo de resposta do servidor passa de 1,8 s na home.
```

```markdown
## Base de comparação

| Métrica | Valor em 2026-11-03 |
| --- | --- |
| Cliques nos últimos 28 dias | 3.980 |
| Impressões nos últimos 28 dias | 96.400 |
| Páginas indexadas | 58 |
```

## Passo 3: arquitetura

```text
$inboundfy-area-seo com a auditoria pronta, reorganize a estrutura do site para
serviços por cidade e ligue as páginas órfãs
```

A skill de arquitetura grava o mapa:

```text
acervo/0011-2026-11-03-auditoria-seo-site-prisma/arquitetura-site.md
```

Trecho do arquivo:

```markdown
## Árvore proposta

- /
  - /servicos/
    - /servicos/abertura-de-empresa/
    - /servicos/contabilidade-mensal/
      - /servicos/contabilidade-mensal/belo-horizonte/
- /blog/
  - /blog/impostos/
  - /blog/abertura-de-empresa/

## Redirecionamentos

| URL antiga | URL nova | Motivo |
| --- | --- | --- |
| /abrir-empresa | /servicos/abertura-de-empresa/ | URL sem hierarquia |
```

O arquivo também lista quais páginas precisam de link interno novo e quais
artigos quase idênticos devem ser fundidos em um texto mais completo.

## Passo 4: otimização das páginas prioritárias

```text
$inboundfy-area-seo otimize a página de abertura de empresa para o termo
"abrir empresa em Belo Horizonte"
```

A área encaminha para `inboundfy-base-seo`, que devolve o pacote de metadata
para a skill de canal:

```markdown
- intenção: transacional com dúvida de processo
- title: Abrir empresa em Belo Horizonte: passo a passo e custos
- description: Veja o que é preciso para abrir empresa em BH, prazos por tipo
  de atividade e a faixa de custo mensal com contabilidade.
- slug: /servicos/abertura-de-empresa/
- H1: Abrir empresa em Belo Horizonte
- headings: documentos, prazos por atividade, custo mensal, erros comuns
```

```text
$inboundfy-area-conteudo escreva a página de abertura de empresa com este
pacote de metadata e a persona persona-01
```

## Passo 5: dados estruturados

```text
$inboundfy-area-seo monte o JSON-LD da página de serviço e da página de
perguntas frequentes
```

```text
acervo/0011-2026-11-03-auditoria-seo-site-prisma/dados-estruturados.md
```

Trecho do arquivo:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Abertura de empresa",
  "provider": {
    "@type": "AccountingService",
    "name": "Contabilidade Prisma",
    "areaServed": "Belo Horizonte"
  }
}
```

O arquivo lista cada campo com a página onde o dado aparece. Campo sem
correspondência visível fica marcado como pendência.

## Passo 6: links externos

```text
$inboundfy-area-seo precisamos de links de associações contábeis e de
portais de pequenas empresas
```

```text
acervo/0011-2026-11-03-auditoria-seo-site-prisma/links-externos-0011.md
```

Trecho do arquivo:

```markdown
## Oportunidades priorizadas

| Destino | Tipo | Ativo que sustenta | Contato | Estado |
| --- | --- | --- | --- | --- |
| portal de empreendedorismo regional | menção editorial | guia de abertura de empresa | redacao@portal.test | mensagem enviada em 2026-11-10 |
| associação contábil de MG | diretório de associados | página institucional | cadastro anual | kit preparado |
| podcast de pequenos negócios | participação | caso de cliente | produtor | aguardando resposta |
```

## Resultado do ciclo

```text
acervo/0011-2026-11-03-auditoria-seo-site-prisma/
├── auditoria-seo.md
├── arquitetura-site.md
├── dados-estruturados.md
└── links-externos-0011.md
```

## O que conferir

- A auditoria tem base de comparação com data.
- A árvore proposta deixa cada página a no máximo dois cliques da home.
- Cada URL antiga com troca tem redirecionamento 301 registrado.
- O pacote de metadata tem title, description e H1 alinhados à intenção.
- O JSON-LD cita apenas dado que aparece na página.
- A lista de links externos registra estado e data de cada tentativa.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | instrutório |
| Escopo | auditoria, arquitetura, otimização, dados estruturados e links externos |
| Autoridade | `inboundfy-auditoria-seo`, `inboundfy-arquitetura-site`, `inboundfy-base-seo`, `inboundfy-dados-estruturados`, `inboundfy-seo-links-externos` |
