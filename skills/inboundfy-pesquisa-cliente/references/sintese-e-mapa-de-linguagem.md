# Síntese e mapa de linguagem

Leia nos passos 4 a 6 do fluxo, depois da coleta.

## Códigos de análise

Cada trecho recebe um ou mais códigos:

| Código | Pergunta que responde | Exemplo de trecho |
| --- | --- | --- |
| Gatilho | O que fez a pessoa procurar agora? | "Levei uma multa e resolvi mudar" |
| Tarefa | O que ela precisa fazer? | "Emitir nota toda semana" |
| Dor | O que incomoda na situação atual? | "Perco a tarde inteira com planilha" |
| Tentativa anterior | O que já usou? | "Usava o contador do meu cunhado" |
| Resultado desejado | Como seria dar certo? | "Fechar o mês sem susto" |
| Objeção | O que quase impediu? | "Achei que ia ter que instalar programa" |
| Motivo da escolha | Por que escolheu esta opção? | "Responderam no WhatsApp em 5 minutos" |
| Palavra-chave | Que termo a pessoa usa? | "nota", "boleto", "fechar o mês" |

## Intensidade

| Nível | Sinal |
| --- | --- |
| 1 | Menção neutra |
| 2 | Incômodo descrito |
| 3 | Emoção forte, custo citado em R$ ou horas, palavrão, letras maiúsculas |

Ordene temas por `ocorrências × intensidade média`. Tema frequente e fraco
pode valer menos que tema raro e intenso; registre os dois números.

## Grau de confiança

| Grau | Regra |
| --- | --- |
| Alto | 3 ou mais fontes independentes, mais de 10 ocorrências |
| Médio | 2 fontes ou 5 a 10 ocorrências |
| Baixo | Uma fonte ou menos de 5 ocorrências; tratar como hipótese |

## Mapa de linguagem

Organize as palavras do cliente lado a lado com as palavras da empresa.
Diferença entre as colunas indica ajuste de copy, glossário ou SEO.

| Conceito | Como o cliente fala | Como a empresa fala hoje | Ocorrências | Sugestão |
| --- | --- | --- | --- | --- |
| {{conceito}} | "{{termo literal}}" | "{{termo do site}}" | {{n}} | {{manter, trocar, testar}} |

## Comparação com a persona

| Campo da persona | Registrado em `publico.md` | O que a pesquisa mostra | Situação |
| --- | --- | --- | --- |
| Dor principal | {{texto}} | {{achado}} | confirma, contradiz, amplia ou lacuna |

Contradição não reescreve a persona. Ela vira pergunta ao usuário no passo 7
e, se aprovada, pacote para `inboundfy-personas`.

## Aplicações por destino

| Destino | O que levar | Skill |
| --- | --- | --- |
| Persona | Gatilhos, dores e motivos de escolha com grau alto | `inboundfy-personas` |
| FAQ | Perguntas repetidas na forma literal | `inboundfy-extrair-faq` |
| Página de oferta | Objeções e respostas, provas pedidas | `inboundfy-copy-oferta` |
| Posicionamento | Alternativas consideradas e motivo da escolha | `inboundfy-copy-posicionamento` |
| Pauta de conteúdo | Dúvidas de quem ainda está aprendendo | `inboundfy-estrategia` |
| Teste | Tema forte que a página não trata | `inboundfy-experimentacao` |

## Persona provisória sem dados

Quando não há cliente nem fonte pública suficiente, descreva a persona como
hipótese: cargo ou situação, gatilho provável, dor provável, alternativa
atual e três perguntas a validar nas cinco primeiras entrevistas. Marque
`estado: hipótese` e não use falas inventadas como ilustração.
