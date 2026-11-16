# Reaproveitamento e distribuição

Leia nos passos 5 e 6 do fluxo, quando o plano usar acervo existente ou
quando o calendário precisar distribuir uma peça em mais de um canal.

## Regra central

O acervo é fonte, não fila automática de publicações. Um item do acervo pode
gerar várias peças, mas cada uso precisa de ângulo, formato e CTA próprios.
Copiar o mesmo texto em cinco canais não é reaproveitamento.

## Quando reaproveitar

| Sinal no acervo | Uso possível |
| --- | --- |
| Base editorial com três ou mais teses distintas | Uma peça por tese, em canais diferentes |
| FAQ com perguntas de busca | Artigos de blog ou seção de FAQ |
| Dado próprio ou número original | Post de LinkedIn, infográfico, gancho de email |
| Caso de cliente com autorização | Estudo de caso, email de escolha, material de vendas |
| Peça antiga com tráfego em queda | Atualização do artigo em vez de peça nova |

## Matriz de derivação

A peça principal (artigo, vídeo, webinar) gera derivados. Cada derivado
começa por uma dúvida diferente.

| Peça principal | Derivado | Ângulo do derivado | CTA |
| --- | --- | --- | --- |
| Artigo de blog | Post de LinkedIn | Opinião ou dado mais forte do artigo | Ler o artigo |
| Artigo de blog | Email de nutrição | Problema da persona com um passo prático | Próxima etapa da sequência |
| Artigo de blog | Carrossel de Instagram | Lista visual de sinais ou passos | Salvar e seguir |
| Webinar | Cortes de vídeo curto | Um momento de resposta a pergunta | Assistir à gravação |
| Webinar | Artigo | Perguntas da audiência respondidas | Baixar material |
| Estudo de caso | Post de LinkedIn | Antes e depois em números | Conversar com vendas |

Registre no plano a origem (`acervo/<id>`), o ângulo e o CTA de cada uso.

## Plano de distribuição

Publicar não é distribuir. Para cada peça principal, o plano diz onde ela
será divulgada nas duas semanas seguintes.

```markdown
### Distribuição: {{peça principal}}

| Dia | Canal | Ação | Responsável |
| --- | --- | --- | --- |
| D0 | blog | publicação | {{pessoa}} |
| D0 | email | envio para base com link | {{pessoa}} |
| D1 | LinkedIn | post derivado com dado do artigo | {{pessoa}} |
| D3 | WhatsApp | envio para lista com consentimento | {{pessoa}} |
| D7 | LinkedIn | segundo derivado com outro ângulo | {{pessoa}} |
| D14 | blog | revisão de links internos de artigos antigos | {{pessoa}} |
```

Distribuição em comunidades, parcerias e diretórios segue para
`inboundfy-growth-distribuicao` e `inboundfy-growth-diretorios`.

## Regras do projeto

Confira em `.inboundfy/estrategia.md`:

- se o projeto permite uma adaptação por canal;
- se permite mais de uma peça pelo mesmo acervo e sob qual condição;
- quais canais exigem aprovação manual;
- datas sazonais relevantes.

Essas regras prevalecem sobre a matriz acima.

## Erros comuns

- Derivado que resume a peça principal em vez de abrir por outra dúvida.
- Cinco canais no mesmo dia com o mesmo texto.
- Reaproveitar caso de cliente sem autorização registrada.
- Esquecer a atualização de peças antigas que já têm tráfego.
