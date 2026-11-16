# Ativos visuais, avaliações e testes

Leia no passo 6 do fluxo de `inboundfy-aso`.

## Screenshots

Os primeiros screenshots aparecem nos resultados de busca. Para a maioria das
pessoas, são a página inteira.

| Regra | Aplicação |
| --- | --- |
| Benefício antes de função | "Chega em 24h" vence "Tela de pedidos" |
| Uma ideia por imagem | Legenda de até seis palavras, fonte grande |
| Tela real do app | Moldura e fundo podem ser da marca; a interface precisa ser verdadeira |
| Ordem por importância | 1: benefício principal; 2: como funciona; 3: diferencial; depois funções e prova |
| Orientação coerente | Retrato para apps de uso no celular; paisagem para jogos e vídeo |
| Localização | Interface e legendas em português, valores em R$ |

Quantidades e tamanhos mudam por dispositivo e por loja. Confira as
especificações vigentes no App Store Connect e na Play Console e registre a
data. A Play também pede uma imagem de destaque (feature graphic) em
proporção horizontal.

Roteiro de screenshots:

```markdown
| Ordem | Tela do app | Legenda | Benefício | Função em produtos.md |
| --- | --- | --- | --- | --- |
| 1 | {{}} | {{até 6 palavras}} | {{}} | {{linha}} |
| 2 | {{}} | {{}} | {{}} | {{}} |
```

A arte final vai para `inboundfy-base-imagem` ou para o time de design, com
este roteiro e a identidade de `.inboundfy/context/marca-voz.md`.

## Ícone

- Uma forma simples, legível em 48 px.
- Sem texto, ou no máximo uma letra.
- Cor que se diferencie dos três concorrentes que aparecem ao lado na busca.
- Teste com o recurso nativo antes de trocar de vez; o ícone é reconhecimento
  de quem já usa o app.

## Vídeo

| Loja | Formato |
| --- | --- |
| App Store | Vídeo de prévia gravado no app, curto, roda sem som na página |
| Google Play | Link de vídeo do YouTube, exibido acima dos screenshots |

Mostre o app em uso nos primeiros três segundos. Legendas em português,
porque a maioria assiste sem som. Sem cenas que o app não tem.

## Avaliações

**Diagnóstico.** Leia as avaliações das últimas oito semanas e agrupe por
tema: bug, atraso, preço, atendimento, função pedida, elogio. O tema mais
frequente das notas 1 e 2 vira pauta para produto e para a resposta modelo.

**Resposta pública.**

1. Agradeça ou reconheça o problema com palavras do cliente.
2. Diga o que foi feito ou o prazo, se houver fonte.
3. Ofereça canal oficial (WhatsApp, e-mail de suporte de `links.md`).
4. Não peça CPF, endereço, telefone ou número de pedido na resposta pública.
5. Assine com o nome do time, não com nome de pessoa real.

Modelo:

```text
Olá, {{primeiro nome como aparece na avaliação}}. Sentimos muito pelo
{{problema}}. {{O que foi feito ou o prazo, com fonte}}. Para resolver seu
caso, fale com a gente pelo {{canal oficial}}. Equipe {{marca}}.
```

**Pedido de avaliação.**

- Use o recurso nativo de cada loja (as lojas proíbem pedir avaliação com
  recompensa ou só para quem gostou).
- Peça depois de um momento de sucesso: pedido entregue, tarefa concluída,
  terceira sessão.
- As lojas limitam quantas vezes o pedido aparece por usuário; o app não
  controla isso.

## Testes nativos

| Recurso | Loja | O que testa | Observação |
| --- | --- | --- | --- |
| Product Page Optimization | App Store | Ícone, screenshots e vídeo, até três variações contra a original | Variações de ícone exigem o ícone dentro do binário |
| Páginas de produto personalizadas | App Store | Páginas diferentes para públicos ou anúncios | Úteis com campanhas segmentadas |
| Experimentos da página | Google Play | Ícone, imagens, vídeo, descrição curta e completa | Pode limitar por idioma |
| Páginas personalizadas | Google Play | Página por país, campanha ou público | Útil para pt-BR com mensagem regional |

Quantidade máxima de variações e páginas muda com o tempo. Confira na
documentação da loja.

Plano de teste:

```markdown
- **Hipótese:** se {{mudança}}, então {{métrica}} sobe porque {{motivo ligado ao diagnóstico}}.
- **Recurso:** {{}}
- **Original:** {{descrição}}
- **Variação:** {{descrição}}
- **Métrica principal:** conversão da página
- **Duração mínima:** {{7 a 28 dias}}
- **Regra de encerramento:** a console indica resultado com confiança ou o prazo máximo termina
- **Resultado:** {{preencher depois}}
```

Teste uma mudança por vez quando o volume for baixo. Apps com menos de mil
visitas por semana à página levam semanas para um resultado confiável. A
leitura estatística fica com `inboundfy-experimentacao`.

## Ordem de trabalho para página fraca

1. Responder avaliações negativas recentes.
2. Corrigir nome, subtítulo ou descrição curta.
3. Refazer os dois primeiros screenshots.
4. Testar ícone e vídeo.
5. Só então investir em anúncios de instalação.
