# Auditoria de texto com correção localizada

O anti-slop identifica prosa intercambiável, promessa sem fonte e repetição de estrutura. Uma palavra isolada não comprova defeito de estilo, salvo quando um veto canônico a proíbe expressamente. A revisão precisa preservar o que a marca disse de forma específica.

## Diagnóstico antes de revisar

Pergunte qual é o marco A0 a A6, se a execução é auditoria ou edição autorizada e qual fonte sustenta o trecho. Leia [ETAPAS.md](ETAPAS.md) para escolher a entrada e o caminho do relatório.

| Sinal observado | Teste no trecho | Ação |
| --- | --- | --- |
| Benefício abstrato | O leitor reconhece o objeto e a operação? | Pedir ou inserir detalhe confirmado |
| Número ou promessa | Existe origem, período e condição? | Localizar fonte ou retirar a alegação |
| Cadência mecânica | Parágrafos repetem a mesma função e tamanho? | Reunir ideias e variar a progressão |
| Primeira pessoa | O autor realmente viveu o caso? | Confirmar autoria ou usar explicação direta |
| Repetição entre peças | Mesma tese, exemplo e ordem reaparecem? | Mudar o recorte conforme o brief |
| Veto expresso | Existe ocorrência literal ou paráfrase equivalente? | Reprovar e corrigir antes do avanço |

## Passes de leitura

1. **Literal:** procure termos, grafias e expressões vetados, inclusive títulos, frontmatter, CTA e texto visual.
2. **Semântico:** compare promessas e alegações com as fontes. Um sinônimo não autoriza repetir um sentido proibido.
3. **Estrutural:** examine abertura, progressão, parágrafos, headings e fechamento. Aponte o padrão observado com dois ou mais locais quando a falha depender de repetição.
4. **Voz e persona:** confronte vocabulário, profundidade e exemplo com a voz e o público escolhidos.
5. **Conjunto:** em A6, leia as peças relacionadas e compare função, ângulo, caso e CTA. A mesma informação pode aparecer quando necessária; a cópia de raciocínio inteiro precisa ser revista.
6. **Releitura:** depois da correção autorizada, repita todos os passes no arquivo inteiro. Registre como superado o ciclo anterior se a entrada mudou.

## Template de relatório anti-slop

```markdown
# Auditoria <A0 a A6>: <arquivo>

- Marco: <código>
- Ciclo: <número>
- Modo: <auditoria ou revisão autorizada>
- Entrada: <caminho e versão>
- Fontes: <voz, persona, proibições, estruturas, glossário e acervo>
- Estado: <aprovado | ajustes-necessarios | pendente>

## Achados
| ID | Passe | Local e trecho | Regra ou fonte | Diagnóstico | Ação |
| --- | --- | --- | --- | --- | --- |
| AS01 | <tipo> | <local e citação> | <arquivo/seção> | <falha demonstrável> | <mudança testável> |

## Releitura
<Passes repetidos, alterações confirmadas e pendências.>

## Próxima ação
<Responsável, arquivo e marco seguinte.>
```

## Exemplo preenchido: Pinhão Bicicletas, empresa fictícia

**Entrada A5:** “A Pinhão Bicicletas oferece soluções inovadoras que transformam sua experiência. Nosso sistema garante mais vendas com mensagens.” A fonte descreve seis avisos, quatro respostas e visitas ainda não conferidas.

**Relatório da primeira rodada:**

```markdown
# Auditoria A5: README.md

- Marco: A5
- Ciclo: 1
- Modo: revisão autorizada
- Entrada: canais/exemplo/0042/README.md, versão candidata 1
- Fontes: context/marca-voz.md, context/publico.md, context/proibicoes.md, context/estruturas-proibidas.md, context/glossario.md, acervo/0042/processado.md
- Estado: ajustes-necessarios

## Achados
| ID | Passe | Local e trecho | Regra ou fonte | Diagnóstico | Ação |
| --- | --- | --- | --- | --- | --- |
| AS01 | estrutural | abertura, soluções inovadoras | ESCRITA.md, objeto e função | Frase não nomeia a operação da oficina | Abrir pelo envio dos avisos |
| AS02 | semântico | parágrafo 1, garante mais vendas | processado.md, ressalva sobre visitas | A fonte confirma respostas, sem confirmar vendas | Retirar a garantia e preservar a lacuna |

## Releitura
A produtora corrigirá a abertura. Todos os passes serão repetidos no texto inteiro.

## Próxima ação
Devolver à produtora e repetir A5 antes da validadora.
```

**Depois, numa correção autorizada:** “A equipe da Pinhão Bicicletas enviou seis avisos de revisão pelo WhatsApp. Quatro destinatários responderam. A oficina ainda precisa conferir na agenda quantas respostas resultaram em visitas.”

O trecho passa a dizer o que aconteceu e o que falta conferir. Isso não cria uma alegação de vendas nem transforma este exemplo em modelo obrigatório de abertura. O ciclo 2 só recebe `aprovado` após conferir também o restante da peça, o CTA e as proibições.

## Checklist numerado

1. Marco e modo de trabalho estão identificados.
2. A0 não altera o bruto.
3. Todos os vetos literais foram confrontados com o arquivo inteiro.
4. Promessas e números possuem origem compatível.
5. Falha estrutural aponta o padrão real, sem censurar frase curta isolada.
6. Correção preserva ressalvas e autoria.
7. Voz e persona continuam reconhecíveis.
8. A6 compara as peças relacionadas quando aplicável.
9. Releitura integral foi registrada após edição.
10. Não existe nota editorial usada para compensar um achado.

## Erros comuns

- Substituir um clichê por outro. Nomeie a operação sustentada pela fonte.
- Apagar detalhe incomum para deixar tudo uniforme. Preserve autoria.
- Reprovar qualquer frase curta. Demonstre a repetição que prejudica a leitura.
- Reescrever durante pedido de auditoria. Entregue achados; edite somente no alcance autorizado.
- Marcar A6 como aprovado com uma peça ainda reprovada em A5. Corrija a dependência primeiro.

## Arquitetura aplicada

Carregue [fontes](../_shared/01-preflight-e-fontes.md) e [contexto](../_shared/05-contexto-editorial.md). Registre o ciclo por [artefato](../_shared/02-contrato-de-artefato.md). Devolva com [handoff](../_shared/03-interacao-e-handoff.md) e invalide ciclos posteriores por [retomada](../_shared/04-validacao-e-retomada.md).

## Guia específico do grupo

A qualidade editorial usa `ESCRITA.md`, os dois arquivos canônicos de proibições e `inboundfy-copy-editor`. A auditoria não escolhe uma voz nova nem substitui a validadora do canal. Leia [ETAPAS.md](ETAPAS.md) no início e na retomada de cada marco.
