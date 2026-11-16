# Diagnóstico e aferição de páginas

## Verificação por campo

Registre primeiro o que a operação usa. Um orçamento de obra pode precisar
de cidade e dimensão, mas não de dados fiscais. Remover uma pergunta útil pode
aumentar envio e aumentar também o retrabalho do atendimento.

| Campo | Conservar no primeiro envio quando | Adiar quando | Conferência |
| --- | --- | --- | --- |
| Email | Entrega ou resposta depende dele | A pessoa escolheu somente telefone | Teclado email, mensagem perto do campo |
| Telefone | Canal selecionado ou agendamento exige chamada | Serve apenas para completar CRM | DDD, números nacionais e retorno de erro |
| Empresa | Define atendimento empresarial | Não altera resposta ou oferta | Aceitar entrada sem enriquecimento automático |
| Cargo | Altera encaminhamento real | É só segmentação futura | Explicar finalidade ao solicitar |
| CPF/CNPJ | Operação imediata exige validação documentada | Uso acontece apenas na contratação | Confirmar necessidade com responsável |
| Mensagem livre | Explica pedido fora das opções | Página já identifica a tarefa | Não enviar conteúdo para eventos |
| Preferência de contato | Equipe oferece canais diferentes | Há um único canal já explicado | Escolha sem pré-seleção enganosa |

Valide após interação ou envio, sem interromper cada caractere. Preserve os
valores em falha, mostre resumo com foco no primeiro campo e ofereça nova
tentativa. O envio repetido precisa ter tratamento próprio para não duplicar
o contato. Se o CRM demorar, use confirmação pendente fiel ao estado real.

## Priorização com lastro

Use primeiro defeitos reproduzidos que impedem a ação. Para hipóteses, preencha
alcance, gravidade observada, confiança na explicação e esforço. Se usar ICE,
declare a escala de cada componente e o cálculo; notas servem para ordenar
trabalho, não estimam conversão. Falta de dados reduz a confiança, não vira
uma nota inventada.

| Nível | Condição | Entrega |
| --- | --- | --- |
| Restaurar função | Falha reproduzida no CTA, campo ou retorno | Passos de reprodução e aceite |
| Corrigir informação | Página contradiz oferta confirmada | Trecho antigo e texto correto |
| Investigar comportamento | Abandono sem explicação confirmada | Hipótese e observação necessária |
| Testar abordagem | Duas opções cumprem a mesma oferta | Controle, variante e métrica |

## Contagem e leitura

- Taxa de início = pessoas ou sessões que iniciaram / população elegível exposta.
- Conclusão = envios únicos confirmados / inícios únicos.
- Taxa de oportunidade = oportunidades aceitas / população elegível exposta.
- Erro por campo = sessões com aquele erro / sessões que interagiram com o campo.
- Tempo de conclusão: p50 e p90 entre início e sucesso; declare pausas e limites.

Mantenha a mesma unidade ao dividir. Uma pessoa pode abrir três sessões e
enviar uma vez; não misture usuários no numerador com sessões deduplicadas
por outra regra. Separe dispositivo, origem, novo visitante e retorno. Não
compare duas origens com intenções diferentes como se fossem variantes.

Benchmarks só entram com fonte primária, data, segmento, definição de evento
e denominador. Sem essa correspondência, use a linha de base do projeto.
Não transfira percentuais de formulários de newsletter para orçamento de obra.

## Cartão de experimento

```yaml
hipotese: adiar CPF deve aumentar pedidos atendiveis por sessao
unidade: visitante elegivel
controle: formulario atual com defeitos funcionais ja corrigidos
variante: mesmo formulario sem CPF inicial
principal: pedidos atendiveis / visitantes elegiveis
acompanhamento: [erro de envio, contatos duplicados, tempo do atendimento]
janela_comercial: igual para ambos os grupos
encerramento: definido com inboundfy-experimentacao antes da exposicao
reversao: restaurar formulario se houver perda funcional
```

O responsável pela medição testa os disparos antes da exposição. Se a
amostra não permitir comparação, registre inconclusivo e use pesquisa
qualitativa para orientar a próxima hipótese. Um antes/depois pode mostrar
mudança, mas também refletir campanha, sazonalidade ou capacidade comercial.

## Referência pública de método

A orientação detalha preservação dos valores, resumo de erros e mensagem junto ao campo. Use esses comportamentos como aceites de recuperação; não como promessa de aumento de conversão. [GOV.UK Design System: recuperação de erros](https://design-system.service.gov.uk/patterns/validation/).

Consulta: 15/11/2026. Esta fonte sustenta o comportamento descrito, sem
fornecer uma meta universal para o funil do projeto.
