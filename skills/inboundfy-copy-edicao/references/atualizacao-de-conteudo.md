# Atualização de conteúdo

Leia no passo 6 do fluxo, no modo atualização. Serve para artigos, páginas e
emails automáticos que já foram publicados e perderam precisão ou
desempenho.

## Sinais de que o texto precisa de atualização

| Sinal | Onde ver | Ação provável |
| --- | --- | --- |
| Queda de cliques orgânicos por três meses seguidos | Search Console | Atualizar e revisar intenção da busca com `inboundfy-seo`. |
| Posição entre 5 e 20 para a consulta principal | Search Console | Atualizar profundidade e exemplos; ganho costuma ser rápido. |
| Preço, plano ou condição mudou | `.inboundfy/context/ofertas.md` | Atualização obrigatória. |
| Tela do produto mudou | Produto ou changelog | Trocar descrições e imagens. |
| Lei, norma ou regra de plataforma mudou | Fonte oficial | Atualização obrigatória com data da consulta. |
| Ano no título ou no texto | Leitura | Atualizar fatos antes de trocar o ano. |
| Comentários ou tickets apontando erro | Suporte, WhatsApp, comentários | Corrigir e registrar a origem do aviso. |

Mudança de preço, condição comercial ou regra legal tem prioridade sobre
qualquer ajuste de estilo.

## Diagnóstico antes de editar

1. **Liste os fatos datados.** Preços, números, telas, nomes de planos,
   prazos, referências a leis e versões de ferramentas.
2. **Confira cada fato na fonte atual.** Registre a fonte e a data.
3. **Compare com a busca atual.** Para conteúdo orgânico, veja o que as
   primeiras páginas respondem hoje e o que este texto não responde.
4. **Identifique o que funciona.** Trechos que recebem links, que aparecem
   como resposta destacada ou que o suporte usa para responder clientes.
5. **Escolha entre atualizar e reescrever** com a tabela abaixo.

## Atualizar ou reescrever

| Situação | Caminho |
| --- | --- |
| Tese e estrutura continuam certas; fatos e exemplos envelheceram | Atualizar (esta skill). |
| A intenção da busca mudou (antes informativa, hoje comparativa) | Reescrever com `inboundfy-copy-redacao` e `inboundfy-seo`. |
| O produto mudou de público ou posicionamento | Reescrever depois de `inboundfy-copy-posicionamento`. |
| Mais da metade das seções precisa trocar | Reescrever. |
| Duas páginas competem pela mesma consulta | Fundir com `inboundfy-seo`; a edição entra depois. |

## O que preservar

- **URL e slug.** Trocar o endereço perde histórico e links. Se a troca for
  inevitável, registre a necessidade de redirect 301 para o time do site.
- **Trechos que recebem links externos** e frases citadas por terceiros.
- **Estrutura de headings que ranqueia**, salvo quando o diagnóstico mostrar
  problema.
- **Depoimentos e casos** ainda autorizados em `depoimentos.json`.

## Registro da atualização

Acrescente ao relatório de edição:

```markdown
## Atualização

- Data de publicação original: {{AAAA-MM-DD}}
- Data desta atualização: {{AAAA-MM-DD}}
- Fatos alterados:
  - {{fato antigo}} → {{fato novo}} (fonte: {{caminho ou URL}}, consulta em {{data}})
- Seções acrescentadas: {{lista ou "nenhuma"}}
- Seções removidas: {{lista e motivo}}
- Preservado: {{URL, trechos com links, headings}}
```

Quando o canal exibir data de atualização, a data só muda se houve alteração
de conteúdo real. Trocar a data sem mudar fatos engana o leitor e os
buscadores.

## Ritmo de revisão sugerido

| Tipo de conteúdo | Frequência |
| --- | --- |
| Páginas de preço e planos | A cada mudança comercial e conferência trimestral |
| Páginas de produto | A cada mudança de tela ou recurso |
| Artigos que trazem tráfego relevante | Semestral |
| Artigos com dados de mercado ou legislação | Anual ou a cada mudança da fonte |
| Emails automáticos de boas-vindas e nutrição | Semestral |

## Falhas prováveis

- Atualizar o ano no título sem trocar nenhum dado.
- Reescrever trechos que traziam links e perder autoridade da página.
- Remover um passo antigo que ainda vale para parte dos clientes (plano
  legado, versão anterior do app) sem avisar no texto.
