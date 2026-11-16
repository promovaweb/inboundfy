# Páginas comparativas e de alternativas

Leia no passo 7 do fluxo de `inboundfy-concorrentes`, quando o caminho
escolhido incluir páginas públicas que citam rivais. Este arquivo define o
formato de cada página, as seções do brief, a palavra-chave, os limites legais
e a manutenção.

## Formatos de página

| Formato | Busca que atende | Momento da persona | Exige citação nominal | Exemplo de título |
| --- | --- | --- | --- | --- |
| Alternativa a X | "alternativa ao X", "substituto do X" | Insatisfeita com X, procura troca | Sim | Alternativa à MarcaJá para salões com clientela fixa |
| Alternativas a X (lista) | "alternativas ao X", "concorrentes do X" | Pesquisando opções, ainda sem favorito | Sim | 5 alternativas à MarcaJá em 2026 |
| Projeto vs X | "projeto vs X", "X ou projeto" | Comparando dois finalistas | Sim | Agendaí vs MarcaJá: qual agenda serve para o seu salão |
| X vs Y (sem o projeto no título) | "X vs Y" | Comparando dois rivais | Sim, para os dois | MarcaJá vs BelaAgenda: diferenças de preço e recursos |
| Categoria sem nomes | "melhor agenda para salão", "como escolher sistema de agendamento" | Ainda definindo o que procura | Não | Como escolher uma agenda online para salão pequeno |
| Projeto vs improviso | "planilha ou sistema", "agenda de papel vale a pena" | Ainda usa a substituta | Não | Caderno, planilha ou agenda online: quanto custa cada uma |

Quando a citação nominal estiver "não" ou "sem registro" em
`context/concorrentes.md`, use apenas os formatos de categoria ou improviso.

## Seções do brief

Todo brief de página comparativa enviado à especialista traz:

1. **Resumo para quem tem pressa:** duas ou três frases dizendo para quem cada
   alternativa serve. Inclua o perfil para quem o rival é a melhor escolha.
2. **Comparação em parágrafos:** uma seção por tarefa da persona, explicando
   como cada alternativa resolve, antes de qualquer tabela.
3. **Tabela de comparação:** o mesmo recorte da síntese, com data de consulta
   no rodapé.
4. **Preço:** unidade de cobrança, simulação para o porte da persona, taxas e
   fidelidade, com fonte e data.
5. **Para quem é cada opção:** dois blocos, um para o rival e um para o
   projeto.
6. **Troca de fornecedor:** o que se transfere (cadastro de clientes,
   histórico), o que precisa refazer, quanto tempo leva e quem ajuda.
7. **Prova:** depoimento de cliente que trocou, com consentimento registrado em
   `context/depoimentos.json`.
8. **CTA:** próximo passo para quem escolheu o projeto e saída honesta para
   quem não escolheu (exemplo: "veja a lista completa de alternativas").

Na página de lista (alternativas a X), cada alternativa recebe o mesmo bloco:
para quem serve, ponto forte, limite, preço inicial e fonte. O projeto entra
na lista com o mesmo tratamento, não como item destacado com outro formato.

## Palavra-chave e intenção

| Formato | Palavra-chave principal | Termos de apoio |
| --- | --- | --- |
| Alternativa a X | "alternativa ao X" | "substituto do X", "parecido com X", "X é bom" |
| Lista | "alternativas ao X" | "concorrentes do X", "melhores opções de X" |
| Projeto vs X | "projeto vs X" | "X ou projeto", "diferença entre X e projeto" |
| X vs Y | "X vs Y" | "X ou Y", "comparativo X Y" |

Passe a palavra-chave e os termos para `inboundfy-base-seo` definir title,
description e slug. O conjunto de páginas, o índice de comparativos e os links
internos ficam com `inboundfy-arquitetura-site`. Dados estruturados ficam com
`inboundfy-dados-estruturados`.

## Limites legais e éticos no Brasil

Publicidade comparativa é permitida no Brasil quando segue algumas regras. O
Código Brasileiro de Autorregulamentação Publicitária do CONAR trata do tema
no artigo 32. O Código de Defesa do Consumidor proíbe publicidade enganosa
(artigo 37). A Lei de Propriedade Industrial trata de concorrência desleal.
Esta skill não dá parecer jurídico. Ela aplica estas regras práticas e
recomenda revisão jurídica quando a página citar marca registrada de rival:

| Regra prática | Como aplicar no brief |
| --- | --- |
| Comparar dado objetivo e verificável | Cada linha da tabela tem fonte pública e data |
| Comparar itens equivalentes | Mesmo plano, mesma periodicidade, mesmo porte |
| Não denegrir a imagem do rival | Sem adjetivos sobre o rival; descreva o que ele faz |
| Não confundir o leitor sobre quem é quem | Logo e nome do rival só para identificação, sem sugerir parceria |
| Não usar marca do rival para enganar | Nada de anúncio ou página que pareça ser do rival |
| Manter a prova disponível | Guarde a fonte e a data no relatório do acervo |

Some-se a isso a regra do projeto: `context/proibicoes.md` pode vetar
comparação com nomes, mesmo quando a lei permitir.

## Prova de troca de fornecedor

Depoimento de quem trocou do rival para o projeto é a prova mais forte da
página. Ele só entra quando:

- está registrado em `context/depoimentos.json` com consentimento de uso;
- o texto literal não foi editado para parecer mais forte;
- o cliente autorizou citar o nome do rival no depoimento.

Sem depoimento, use dado de teste interno com método descrito (quantos
clientes, quanto tempo, como mediu).

## Manutenção

| Ação | Frequência |
| --- | --- |
| Conferir preço e planos citados | A cada 90 dias e antes de qualquer campanha que leve tráfego à página |
| Conferir recursos citados | A cada 180 dias |
| Atualizar a data de consulta no rodapé da tabela | A cada conferência |
| Revisar a página quando o rival muda de posicionamento | Quando o monitoramento detectar mudança |

Registre a data da última conferência no frontmatter da peça e no relatório do
acervo. Página comparativa com dado vencido passa a ser publicidade enganosa
mesmo que estivesse correta na publicação.

## Modelo de brief

```markdown
---
id: {NNNN}
skill: inboundfy-concorrentes
tipo: brief-pagina-comparativa
formato: {alternativa-a | lista | nos-vs | x-vs-y | categoria | improviso}
estado: rascunho
persona: {persona}
palavra_chave: {termo}
rivais: [{nomes com citação permitida}]
dados_validos_ate: {AAAA-MM-DD}
fontes:
  - acervo/{NNNN}-{data}-concorrentes-{recorte}/concorrentes.md
---

# Brief: {título provisório}

## Para quem é a página

{persona, momento, busca}

## Resumo que a página precisa entregar

{para quem cada alternativa serve}

## Seções e conteúdo obrigatório

{as oito seções, com o dado e a fonte de cada uma}

## Provas disponíveis

{depoimentos com consentimento, testes internos com método}

## Proibições

{vetos de context/proibicoes.md e alegações que não podem aparecer}

## Próxima skill

{inboundfy-especialista-blog ou skill de página definida pela arquitetura}
```
