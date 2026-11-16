# Migração e redirecionamentos

Leia no passo 8 do fluxo de `inboundfy-arquitetura-site`, sempre que alguma
URL publicada mudar de endereço, sair do ar ou trocar de domínio.

## Códigos de status

| Situação | Código | Observação |
| --- | --- | --- |
| Página mudou de endereço para sempre | 301 | Aponta para o equivalente mais próximo |
| Mudança temporária (manutenção, campanha) | 302 | Só enquanto durar a mudança |
| Página removida sem substituta | 410 | Diz ao buscador que a remoção é intencional |
| Página que nunca existiu | 404 | Página de erro útil, com busca e links principais |

Redirecionar uma página removida para a Home não equivale a um destino. O
buscador trata como página removida e a pessoa não acha o que procurava.

## Tabela de redirecionamentos

```markdown
| Origem | Destino | Código | Motivo | Tráfego 12 meses | Links externos |
| --- | --- | --- | --- | --- | --- |
| /unidade-boa-viagem | /unidades/boa-viagem/ | 301 | Novo padrão de unidade | 2.300 | 4 |
| /servicos | /lavagem-self-service/ | 301 | Divisão; a maior parte do tráfego buscava lavagem | 640 | 1 |
| /promo-carnaval-2024 | (nenhum) | 410 | Promoção vencida, sem equivalente | 0 | 0 |
```

As colunas de tráfego e links externos ajudam a ordenar a conferência: as
páginas com mais tráfego e mais links são conferidas primeiro.

## Regras

- Um salto só. Se `/a` já redireciona para `/b` e `/b` vai mudar para `/c`,
  atualize `/a` para apontar direto para `/c`.
- Nenhum ciclo (`/a` para `/b` e `/b` para `/a`).
- Atualize os links internos para a URL nova. Redirecionamento é rede de
  segurança, não substituto do link certo.
- Atualize sitemap, canônicas e marcação estruturada com as URLs novas.
- Mantenha os redirecionamentos por pelo menos um ano. Para páginas com links
  externos, mantenha sem prazo.

## Migração de domínio ou de plataforma

Antes:

1. Levante todas as URLs atuais (rastreamento, sitemap, Search Console).
2. Exporte tráfego, posições e links externos por URL como linha de base.
3. Monte a tabela de redirecionamentos completa.
4. Teste o site novo em ambiente de homologação fechado à indexação (noindex e senha).
5. Confira limites da plataforma nova em `.inboundfy/context/integracoes.md`
   (padrão de URL forçado, prefixos obrigatórios, suporte a 301).

No dia:

1. Publique o site novo e libere a indexação.
2. Ative os redirecionamentos.
3. Envie o sitemap novo no Search Console. Em troca de domínio, use a
   ferramenta de mudança de endereço.

Depois (primeiras quatro semanas):

1. Rastreie a lista de URLs antigas e confira se cada uma responde 301 para
   o destino certo, sem cadeia.
2. Acompanhe páginas indexadas, erros 404 e tráfego orgânico contra a linha
   de base.
3. Queda de 10% a 20% nas primeiras semanas é comum. Queda maior, ou que não
   se recupera em dois meses, pede auditoria com `inboundfy-auditoria-seo`.
4. Corrija links externos importantes pedindo a atualização aos sites de
   origem, com `inboundfy-seo-links-externos`.

## Erros desta etapa

- Migrar sem linha de base e não conseguir medir a perda.
- Esquecer URLs de imagens, PDFs e materiais ricos com links externos.
- Deixar o ambiente de homologação indexável e criar conteúdo duplicado.
- Apagar os redirecionamentos depois de alguns meses para limpar a
  configuração.
