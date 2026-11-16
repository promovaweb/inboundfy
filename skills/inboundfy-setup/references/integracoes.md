# Catálogo de integrações por área

Use este catálogo na etapa de configurações do setup. Para cada área, pergunte
quais ferramentas o projeto usa, registre o estado em
`.inboundfy/context/integracoes.md` e escreva os nomes das variáveis no
`.env.example` do projeto. Os valores reais vão só para o `.env`, que não entra
no Git.

Os nomes de variáveis abaixo são o padrão do Inboundfy. Quando o projeto já
usa outro nome, registre o nome existente e não renomeie.

## Como conduzir a etapa

1. Confirme que existe `.env` e que ele está no `.gitignore`. Se não estiver,
   proponha a linha e espere a confirmação antes de editar.
2. Pergunte área por área, na ordem desta página, com uma única mensagem por
   área. Aceite "não usamos" como resposta completa.
3. Para cada ferramenta ativa, registre estado, variáveis, escopo, conta e as
   skills que dependem dela.
4. Peça à pessoa que cole os valores no `.env` por conta própria. Não peça o
   valor no chat e não grave segredo em arquivo versionado.
5. Quando houver CLI ou API de leitura disponível, rode uma consulta simples
   (por exemplo, listar propriedades do GA4) e registre o resultado como
   "acesso conferido em AAAA-MM-DD".
6. Liste o que ficou sem acesso em "Pendências de acesso".

## Medição

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Google Analytics 4 | `GA4_PROPERTY_ID`, `GOOGLE_APPLICATION_CREDENTIALS` | tráfego, conversões, origem das visitas | `inboundfy-metricas`, `inboundfy-atribuicao` |
| Google Tag Manager | `GTM_CONTAINER_ID` | eventos, pixels e consentimento | `inboundfy-rastreamento-conversao` |
| Google Search Console | `GSC_SITE_URL`, `GOOGLE_APPLICATION_CREDENTIALS` | consultas, páginas, indexação | `inboundfy-auditoria-seo`, `inboundfy-seo` |
| Microsoft Clarity | `CLARITY_PROJECT_ID`, `CLARITY_API_TOKEN` | mapas de calor e gravações | `inboundfy-growth-cro` |
| Hotjar | `HOTJAR_SITE_ID` | mapas de calor e pesquisas na página | `inboundfy-growth-cro`, `inboundfy-pesquisa-cliente` |
| PostHog | `POSTHOG_API_KEY`, `POSTHOG_HOST` | eventos de produto, funis, testes | `inboundfy-experimentacao`, `inboundfy-growth-onboarding` |
| Mixpanel | `MIXPANEL_PROJECT_ID`, `MIXPANEL_SERVICE_ACCOUNT`, `MIXPANEL_SECRET` | eventos de produto e retenção | `inboundfy-metricas`, `inboundfy-growth-retencao` |
| Amplitude | `AMPLITUDE_API_KEY`, `AMPLITUDE_SECRET_KEY` | eventos de produto e coortes | `inboundfy-metricas` |
| Plausible | `PLAUSIBLE_SITE_ID`, `PLAUSIBLE_API_KEY` | tráfego sem cookies | `inboundfy-metricas` |

## SEO

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Ahrefs | `AHREFS_API_KEY` | palavras-chave, links, concorrentes orgânicos | `inboundfy-seo`, `inboundfy-seo-links-externos` |
| Semrush | `SEMRUSH_API_KEY` | palavras-chave e auditoria | `inboundfy-seo`, `inboundfy-auditoria-seo` |
| DataForSEO | `DATAFORSEO_LOGIN`, `DATAFORSEO_PASSWORD` | SERP, volumes e dados de links | `inboundfy-seo`, `inboundfy-seo-programatico` |
| PageSpeed Insights | `PAGESPEED_API_KEY` | desempenho e Core Web Vitals | `inboundfy-auditoria-seo` |
| Bing Webmaster Tools | `BING_WEBMASTER_API_KEY` | indexação no Bing e no Copilot | `inboundfy-geo` |

## Anúncios

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Meta Ads | `META_ACCESS_TOKEN`, `META_AD_ACCOUNT_ID`, `META_PIXEL_ID` | campanhas, públicos, pixel e API de conversões | `inboundfy-growth-anuncios`, `inboundfy-rastreamento-conversao` |
| Google Ads | `GOOGLE_ADS_DEVELOPER_TOKEN`, `GOOGLE_ADS_CUSTOMER_ID`, `GOOGLE_ADS_LOGIN_CUSTOMER_ID`, `GOOGLE_ADS_REFRESH_TOKEN`, `GOOGLE_ADS_CLIENT_ID`, `GOOGLE_ADS_CLIENT_SECRET` | campanhas, palavras-chave, conversões | `inboundfy-growth-anuncios` |
| LinkedIn Ads | `LINKEDIN_ADS_ACCESS_TOKEN`, `LINKEDIN_AD_ACCOUNT_ID`, `LINKEDIN_PARTNER_ID` | campanhas B2B e Insight Tag | `inboundfy-growth-anuncios` |
| TikTok Ads | `TIKTOK_ACCESS_TOKEN`, `TIKTOK_ADVERTISER_ID`, `TIKTOK_PIXEL_ID` | campanhas e pixel | `inboundfy-growth-anuncios`, `inboundfy-growth-criativos-anuncios` |

## Email e automação

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| RD Station Marketing | `RDSTATION_CLIENT_ID`, `RDSTATION_CLIENT_SECRET`, `RDSTATION_REFRESH_TOKEN` | leads, segmentos, fluxos e emails | `inboundfy-especialista-email`, `inboundfy-growth-lead-magnet` |
| Brevo | `BREVO_API_KEY` | listas, campanhas, SMS e WhatsApp | `inboundfy-especialista-email`, `inboundfy-growth-sms` |
| Mailchimp | `MAILCHIMP_API_KEY`, `MAILCHIMP_SERVER_PREFIX` | listas e campanhas | `inboundfy-especialista-newsletter` |
| ActiveCampaign | `ACTIVECAMPAIGN_API_URL`, `ACTIVECAMPAIGN_API_KEY` | automações e CRM leve | `inboundfy-especialista-email`, `inboundfy-growth-onboarding` |
| Kit | `KIT_API_KEY` | newsletter e sequências | `inboundfy-especialista-newsletter` |
| Klaviyo | `KLAVIYO_API_KEY` | email e SMS para lojas | `inboundfy-especialista-email`, `inboundfy-growth-retencao` |
| Customer.io | `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` | mensagens por evento de produto | `inboundfy-growth-onboarding` |
| Beehiiv | `BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID` | newsletter e indicações | `inboundfy-especialista-newsletter`, `inboundfy-growth-referencias` |

## CRM e vendas

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| RD Station CRM | `RDSTATION_CRM_TOKEN` | negócios, etapas e tarefas | `inboundfy-growth-revops` |
| HubSpot | `HUBSPOT_ACCESS_TOKEN` | contatos, negócios, emails e formulários | `inboundfy-growth-revops`, `inboundfy-atribuicao` |
| Pipedrive | `PIPEDRIVE_API_TOKEN`, `PIPEDRIVE_DOMAIN` | funil de vendas | `inboundfy-growth-revops` |
| Apollo | `APOLLO_API_KEY` | busca de contas e contatos | `inboundfy-growth-prospeccao` |
| Hunter | `HUNTER_API_KEY` | descoberta e verificação de emails | `inboundfy-growth-prospeccao`, `inboundfy-growth-email-frio` |
| Instantly | `INSTANTLY_API_KEY` | envio de cadências frias | `inboundfy-growth-email-frio` |

## Mensageria

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| WhatsApp Cloud API | `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_BUSINESS_ACCOUNT_ID` | modelos aprovados e conversas | `inboundfy-growth-sms` |
| Twilio | `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER` | SMS e WhatsApp | `inboundfy-growth-sms` |
| Zenvia | `ZENVIA_API_TOKEN` | SMS e WhatsApp no Brasil | `inboundfy-growth-sms` |

## Redes sociais

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Meta Graph (Instagram e Facebook) | `META_ACCESS_TOKEN`, `INSTAGRAM_BUSINESS_ACCOUNT_ID`, `FACEBOOK_PAGE_ID` | publicações e métricas | `inboundfy-growth-social`, `inboundfy-especialista-instagram` |
| LinkedIn | `LINKEDIN_ACCESS_TOKEN`, `LINKEDIN_ORGANIZATION_ID` | publicações da página | `inboundfy-especialista-linkedin` |
| YouTube Data API | `YOUTUBE_API_KEY`, `YOUTUBE_CHANNEL_ID` | vídeos, playlists e métricas | `inboundfy-especialista-youtube` |
| Buffer | `BUFFER_ACCESS_TOKEN` | agenda de publicações | `inboundfy-growth-distribuicao` |

## Pesquisa web

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Firecrawl | `FIRECRAWL_API_KEY` | leitura de páginas e sites inteiros | `inboundfy-engenharia-reversa`, `inboundfy-concorrentes` |
| Exa | `EXA_API_KEY` | busca semântica de páginas e empresas | `inboundfy-pesquisa-acervo`, `inboundfy-growth-prospeccao` |
| SerpApi | `SERPAPI_API_KEY` | resultados de busca e anúncios exibidos | `inboundfy-seo`, `inboundfy-engenharia-reversa` |
| Biblioteca de Anúncios da Meta | `META_ACCESS_TOKEN` | anúncios ativos de concorrentes | `inboundfy-engenharia-reversa`, `inboundfy-growth-criativos-anuncios` |

## Pagamentos e receita

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Stripe | `STRIPE_SECRET_KEY` | assinaturas, churn e receita | `inboundfy-growth-pricing`, `inboundfy-growth-retencao` |
| Hotmart | `HOTMART_CLIENT_ID`, `HOTMART_CLIENT_SECRET`, `HOTMART_BASIC_TOKEN` | vendas de infoprodutos e afiliados | `inboundfy-growth-lancamento`, `inboundfy-growth-referencias` |
| Kiwify | `KIWIFY_CLIENT_ID`, `KIWIFY_CLIENT_SECRET`, `KIWIFY_ACCOUNT_ID` | vendas de infoprodutos | `inboundfy-growth-lancamento` |
| Asaas | `ASAAS_API_KEY` | cobranças, Pix e assinaturas | `inboundfy-growth-pricing` |
| Mercado Pago | `MERCADOPAGO_ACCESS_TOKEN` | pagamentos e assinaturas | `inboundfy-growth-pricing` |

## Avaliações e reputação

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Perfil da Empresa no Google | `GOOGLE_BUSINESS_ACCOUNT_ID`, `GOOGLE_APPLICATION_CREDENTIALS` | avaliações e presença local | `inboundfy-contexto-depoimentos`, `inboundfy-seo` |
| Reclame Aqui | sem API pública; registre a URL da empresa | reputação e objeções | `inboundfy-pesquisa-cliente` |
| G2 e Capterra | sem API de leitura aberta; registre as URLs | avaliações de software | `inboundfy-contexto-depoimentos`, `inboundfy-growth-diretorios` |

## Agenda e eventos

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Calendly | `CALENDLY_ACCESS_TOKEN` | reuniões agendadas como conversão | `inboundfy-growth-revops` |
| Cal.com | `CALCOM_API_KEY` | reuniões agendadas como conversão | `inboundfy-growth-revops` |
| Sympla | `SYMPLA_TOKEN` | inscrições em eventos | `inboundfy-growth-eventos` |
| Luma | `LUMA_API_KEY` | inscrições em eventos e webinars | `inboundfy-growth-eventos`, `inboundfy-especialista-webinar` |

## Links

| Ferramenta | Variáveis | Para que o Inboundfy usa | Skills |
| --- | --- | --- | --- |
| Dub | `DUB_API_KEY` | links curtos com UTM e cliques | `inboundfy-rastreamento-conversao`, `inboundfy-growth-referencias` |
| Bitly | `BITLY_ACCESS_TOKEN` | links curtos e cliques | `inboundfy-rastreamento-conversao` |

## Modelo de `.env.example`

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

Inclua no `.env.example` só as variáveis das ferramentas marcadas como ativas
ou em configuração.
