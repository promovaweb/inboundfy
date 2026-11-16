# Exibição, foco e acompanhamento de convites

## Regra de exibição para preencher

```yaml
campanha: "{{id}}"
versao: "{{versao}}"
paginas: ["{{caminhos elegiveis}}"]
publico: "{{segmento conhecido ou contexto da pagina}}"
formato: "{{cta, barra, lateral ou modal}}"
gatilho: "{{clique ou sinal composto}}"
exclusoes: ["{{tarefa em andamento}}", "{{captura concluida}}"]
prioridade: "{{ordem frente a consentimento, aviso e outros convites}}"
frequencia: "{{maximo por sessao e por periodo}}"
supressao_recusa: "{{prazo}}"
supressao_captura: "{{estado}}"
memoria: "{{mecanismo autorizado e limite quando indisponivel}}"
encerramento: "{{data ou retirada da oferta}}"
responsavel: "{{quem altera e acompanha}}"
```

Elegibilidade responde quem poderia ver. Gatilho responde o acontecimento que
pede abertura. Frequência limita repetições, enquanto supressão conserva uma
escolha anterior. Não misture esses quatro campos em “mostrar uma vez” sem
especificar sessão, pessoa ou campanha.

Se o usuário pede novamente o recurso por clique explícito, a recusa de um
convite automático não precisa impedir esse pedido. O brief deve separar
acesso solicitado de promoção espontânea. Mudar título ou cor não reinicia
permissão para interromper.

## Foco e formatos

| Objeto | Comportamento de aceite |
| --- | --- |
| Modal | Nome acessível, controles alcançáveis e foco contido enquanto aberto |
| Fechamento do modal | Escape e botão visível; devolver foco ao acionador válido |
| Convite lateral não modal | Não roubar foco nem impedir leitura e navegação |
| Barra | Não cobrir conteúdo ou controle necessário da página |
| Erro | Texto associado ao campo, informação além de cor e valor preservado |
| Sucesso | Aviso percebido e acesso ao recurso disponível |
| Mobile com teclado aberto | Botão de envio e fechamento continuam alcançáveis |
| Navegação entre rotas | Fechar ou atualizar convite sem perder supressão |
| Preferência de movimento | Evitar animação que dificulte leitura ou operação |

O fechamento por clique fora pode ser complementar. Nunca deve ser a única
forma de sair. Se o foco anterior não existir depois de uma troca de rota,
defina destino seguro na página em vez de devolver a um elemento removido.

## Casos de teste

```markdown
| Cenário | Resultado esperado |
| --- | --- |
| Visitante novo abre artigo | Nenhuma abertura antes da regra |
| Clique explícito no recurso | Abrir o formulário correspondente |
| Escape durante preenchimento | Fechar sem navegar; devolver foco |
| Erro no email | Mostrar correção sem limpar o campo |
| Receptor indisponível | Informar falha e permitir nova tentativa |
| Duplo clique no envio | Uma solicitação, sem duplicar contato |
| Pessoa já cadastrada | Entregar recurso e preservar preferências |
| Recusa e nova rota | Respeitar supressão |
| Captura confirmada | Retirar promoção daquele recurso |
| Banner prioritário aberto | Adiar convite automático |
| Armazenamento indisponível | Respeitar limite de sessão viável e registrar limitação |
| Tela pequena e zoom | Ler, enviar e fechar sem cobrir controles |
```

## Medição além da taxa do formulário

| Medida | Numerador / denominador | Uso |
| --- | --- | --- |
| Exposição | Pessoas expostas / pessoas elegíveis | Compreender cobertura do gatilho |
| Captura por exposto | Envios únicos confirmados / expostos | Avaliar interação na tela |
| Captura por elegível | Envios únicos confirmados / elegíveis | Comparar política de exibição |
| Fechamento | Pessoas que fecharam / expostos | Identificar rejeição da interrupção |
| Qualificação | Contatos aderentes / capturas únicas | Conferir relação com a oferta |
| Ação principal | Pessoas com ação comercial / elegíveis | Ver consequência na página |
| Reclamação | Pessoas com reclamação / expostos | Acompanhar experiência |

Use uma unidade estável durante a comparação. Clique acionado pela própria
pessoa seleciona público com interesse diferente de abertura automática;
comparar apenas captura por exposto favorece conclusões enganosas.
Um grupo sem convite, quando viável, permite avaliar contribuição adicional.

Peça a `inboundfy-rastreamento-conversao` eventos com ID de campanha,
versão, regra e forma de fechamento. Não envie email ou conteúdo livre
para analytics. Consulte `.inboundfy/context/integracoes.md` para ferramenta
e destino autorizados. Registre falha de medição como pendência, não como
conversão zero.

Benchmarks publicados exigem fonte primária, data, formato, contexto da página
e denominador. Não transfira taxa de desconto no carrinho para recurso
educacional. Metas sem histórico permanecem hipóteses internas identificadas.

## Referência pública de método

O padrão documenta foco dentro do modal, navegação por Tab, fechamento por Escape e retorno ao acionador quando apropriado. Aplique esses aceites apenas ao formato modal; barras e convites laterais têm interação diferente. [W3C APG: diálogo modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

Consulta: 15/11/2026. Esta fonte sustenta o comportamento descrito, sem
fornecer uma meta universal para o funil do projeto.
