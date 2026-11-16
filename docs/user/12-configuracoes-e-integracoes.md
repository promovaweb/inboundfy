# Configurações e integrações

O setup do Inboundfy não preenche só o contexto da empresa. Ele também
concentra as configurações gerais do projeto, o registro das integrações por
área e os nomes das variáveis de ambiente que cada ferramenta espera.

## Etapa de configurações gerais

Antes de perguntar sobre ferramentas, o setup registra quatro dados que valem
para todo o trabalho:

| Configuração | O que define | Onde fica |
| --- | --- | --- |
| Agente principal | agente que executa as skills no dia a dia | `.inboundfy/context/integracoes.md` |
| Fuso horário | referência de data em relatórios e calendário | `.inboundfy/context/integracoes.md` |
| Moeda | valores em orçamento, preço e receita | `.inboundfy/context/integracoes.md` |
| Idioma de publicação | idioma do texto final | `.inboundfy/context/integracoes.md` |

O padrão brasileiro é `America/Sao_Paulo` e `BRL`. Valores em real aparecem
sempre com `R$`, como `R$ 1.490,00`.

## Etapa de integrações por área

O setup pergunta área por área quais ferramentas o projeto usa. A ordem segue o
catálogo em `skills/inboundfy-setup/references/integracoes.md`: medição, SEO,
anúncios, email e automação, CRM e vendas, mensageria, redes sociais, pesquisa
web, pagamentos e receita, avaliações, agenda e eventos, links.

"Ainda não usamos" é uma resposta completa. A ferramenta fica registrada como
`não usa` e o setup segue para a área seguinte.

Para cada ferramenta ativa, o registro guarda sete campos:

- nome da ferramenta;
- área a que pertence;
- estado: `ativo`, `sem acesso`, `não usa` ou `em configuração`;
- variáveis de ambiente esperadas;
- escopo do acesso: somente leitura ou leitura e escrita;
- conta ou propriedade usada;
- skills que dependem daquela ferramenta.

## O arquivo `.inboundfy/context/integracoes.md`

Esse arquivo é o registro durável das integrações. Ele fica no projeto
consumidor, entra no Git e não contém nenhum valor de segredo. Um bloco
preenchido se parece com isto:

```markdown
### Google Analytics 4

- **Área:** medição
- **Estado:** ativo
- **Variáveis de ambiente:** GA4_PROPERTY_ID, GOOGLE_APPLICATION_CREDENTIALS
- **Escopo do acesso:** somente leitura
- **Conta ou propriedade:** propriedade 412345678
- **Skills que usam:** inboundfy-metricas, inboundfy-atribuicao
- **Observações:** acesso conferido em 2026-11-12
```

O arquivo também tem uma seção "Pendências de acesso". Toda ferramenta que
aparece como `sem acesso` ou `em configuração` entra ali com o que falta e com
quem pode liberar. Uma skill de dados consulta essa seção antes de prometer um
relatório que depende de acesso que ainda não existe.

## `.env` e `.env.example`

A separação é rígida:

- `.env.example` guarda apenas os nomes das variáveis, sem valor. Ele vai para
  o Git e serve para outra pessoa montar o próprio ambiente.
- `.env` guarda os valores reais. Ele fica fora do Git.

Um `.env.example` gerado pelo setup fica assim:

```dotenv
# Medição
GA4_PROPERTY_ID=
GTM_CONTAINER_ID=
GSC_SITE_URL=
GOOGLE_APPLICATION_CREDENTIALS=

# Anúncios
META_ACCESS_TOKEN=
META_AD_ACCOUNT_ID=
META_PIXEL_ID=

# Email e CRM
RDSTATION_CLIENT_ID=
RDSTATION_CLIENT_SECRET=
RDSTATION_REFRESH_TOKEN=
```

O setup escreve no `.env.example` somente as variáveis das ferramentas marcadas
como ativas ou em configuração. Ferramenta que o projeto não usa não aparece.

## Segurança de segredos

Estas regras valem para toda execução, humana ou por agente:

1. O `.env` precisa estar no `.gitignore`. Se não estiver, o setup propõe a
   linha e espera a confirmação antes de editar.
2. O valor de uma chave nunca é pedido no chat. A pessoa cola o valor no
   `.env` por conta própria.
3. Nenhum valor de token, chave ou senha é gravado em arquivo versionado,
   incluindo `.inboundfy/context/integracoes.md` e relatórios.
4. Um relatório de campanha cita a conta ou propriedade usada, nunca a
   credencial.
5. Quando a integração exigir um arquivo de credencial, como o JSON de conta de
   serviço do Google, o caminho do arquivo vai no `.env` e o arquivo fica fora
   do Git.

## Como conferir acesso

Depois de registrar a ferramenta, o setup faz uma leitura simples quando existe
CLI ou API de leitura. Listar as propriedades do GA4 ou as últimas consultas do
Search Console resolve a conferência. O resultado entra no campo de observações
com a data, por exemplo "acesso conferido em 2026-11-12".

Quando não existe leitura disponível, o estado fica `em configuração` e a
pendência registra o que falta.

Você pode repetir a conferência a qualquer momento pela própria área:

```text
$inboundfy-area-dados confira se o GA4 e o Search Console ainda respondem com
o acesso que está no .env
```

## Quando uma skill precisa de integração ausente

A skill não inventa número. Ela verifica `.inboundfy/context/integracoes.md`,
encontra o estado da ferramenta e responde com o que pode ser feito sem ela,
mais a pendência de acesso. Depois de liberado o acesso, a mesma skill retoma do
ponto registrado.

## O que conferir

- `.env` existe e está listado no `.gitignore`.
- `.env.example` tem só nomes de variáveis.
- `context/integracoes.md` lista cada ferramenta com estado e escopo.
- A seção de pendências diz o que falta e quem libera.
- As configurações gerais registram agente, fuso, moeda e idioma.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | configurações gerais, integrações e variáveis de ambiente |
| Autoridade | `inboundfy-setup` e `skills/inboundfy-setup/references/integracoes.md` |
