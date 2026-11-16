# Fontes e coleta

Leia nos passos 2 e 3 do fluxo, ao montar o plano de fontes e durante a
coleta.

## Material interno (prioridade quando existe)

| Fonte | O que extrair | Cuidado |
| --- | --- | --- |
| Gravações e anotações de venda | Objeções, comparações, gatilho do contato | Falas do vendedor não são do cliente |
| Conversas de WhatsApp comercial e suporte | Perguntas repetidas, termos, hora e contexto da dúvida | Anonimizar telefone e nome antes de salvar |
| Chamados de suporte | Onde o produto confunde, expectativa frustrada | Volume reflete uso, não só problema |
| Motivos de cancelamento | Expectativa não atendida, alternativa escolhida | Motivo marcado em lista costuma ser genérico; leia o texto livre |
| NPS e pesquisas antigas | Comentário aberto de promotores e detratores | Nota sem comentário quase não serve para linguagem |
| Formulários de cadastro | Campo "como nos conheceu" e "o que procura" | Respostas curtas, use como contagem |

## Fontes públicas no Brasil

| Fonte | Bom para | Busca sugerida |
| --- | --- | --- |
| Reclame Aqui | Dor real, expectativa quebrada, linguagem emocional | Página da própria empresa e de concorrentes, filtro por problema |
| Avaliações do Google (Perfil da Empresa) | Negócio local, atendimento, motivo da escolha | Concorrentes da mesma cidade com mais de 50 avaliações |
| Google Play e App Store | Aplicativo, função ausente, comparação | Avaliações de 2 e 3 estrelas (equilíbrio entre elogio e crítica) |
| Mercado Livre e marketplaces | Produto físico, dúvida pré-compra | Seção de perguntas e avaliações com fotos |
| Grupos de Facebook e comunidades no Telegram | Pedido de indicação, comparação entre opções | "alguém indica", "vale a pena", "alguém usa" |
| Comentários de YouTube | Dúvida de quem está aprendendo, objeção | Vídeos de tutorial e comparação do nicho com muitos comentários |
| LinkedIn | Dor profissional, cargo, linguagem de B2B | Posts com muitos comentários sobre o problema; vagas que descrevem a tarefa |
| Fóruns e Reddit em português | Discussão técnica longa, alternativas | `site:` com termos do problema |
| Vagas de emprego | Tarefas e ferramentas que o cargo exige | Título do cargo da persona |

## Buscas úteis

```text
"[categoria]" "alguém indica"
"[concorrente]" "vale a pena"
"[problema]" "não consigo"
"trocar de [ferramenta]" OR "migrar de [ferramenta]"
site:reclameaqui.com.br "[concorrente]"
```

## Volume mínimo

| Modo | Mínimo para falar em padrão |
| --- | --- |
| Avaliações e comentários | 50 a 100 trechos relevantes, de pelo menos 3 fontes |
| Entrevistas | 5 a 8 por segmento; padrões costumam se repetir a partir da quinta |
| Questionário | 40 respostas para a pesquisa de encaixe de produto; 100 ou mais para comparar segmentos |
| Conversas de atendimento | 3 meses de histórico ou 200 conversas, o que vier primeiro |

Abaixo disso, entregue como exploratório e diga a quantidade.

## Registro de cada trecho

```yaml
id: tr-{{numero}}
fonte: {{Reclame Aqui | WhatsApp comercial | entrevista-03}}
url_ou_caminho: {{URL ou arquivo}}
data_da_fala: {{AAAA-MM-DD ou "não informada"}}
data_consulta: {{AAAA-MM-DD}}
perfil: {{cargo, segmento, cidade se pública}}
trecho_literal: "{{texto exato, sem correção}}"
```

## LGPD e ética

- Fala pública pode ser analisada. Para usar como citação em peça, prefira
  paráfrase sem identificação ou peça autorização.
- Conversa privada (WhatsApp, email, chamado) só entra anonimizada e nunca
  vira citação pública sem consentimento registrado em
  `context/depoimentos.json` por `inboundfy-contexto-depoimentos`.
- Gravação de entrevista exige consentimento no início da chamada, com
  finalidade explicada.
- Não guarde CPF, telefone, email ou endereço no relatório.

## Sinais de fonte fraca

- Avaliação que só elogia sem detalhe ("ótimo, recomendo").
- Conteúdo patrocinado ou de afiliado.
- Fala antiga sobre versão do produto que mudou.
- Comentário de concorrente ou funcionário.
