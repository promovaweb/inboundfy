# Metadados das lojas

Leia nos passos 4 e 5 do fluxo de `inboundfy-aso`.

## Limites e campos

Os limites abaixo valiam na data de redação desta referência. As lojas
mudam regras sem aviso: confira a documentação do App Store Connect e da
Play Console antes de publicar e registre a data no `aso.md`.

| Campo | App Store | Google Play |
| --- | --- | --- |
| Nome ou título | 30 caracteres | 30 caracteres |
| Subtítulo | 30 caracteres | Não existe |
| Descrição curta | Não existe | 80 caracteres |
| Campo de palavras-chave | 100 caracteres, oculto | Não existe |
| Texto promocional | 170 caracteres, muda sem nova versão | Não existe |
| Descrição | Até 4.000 caracteres | Até 4.000 caracteres |
| Notas da versão | Até 4.000 caracteres | Até 500 caracteres |
| Nome do desenvolvedor | Conta | Conta |

## O que cada loja indexa para busca

| Elemento | App Store | Google Play |
| --- | --- | --- |
| Nome ou título | Sim, maior peso | Sim, maior peso |
| Subtítulo | Sim | Não existe |
| Campo de palavras-chave | Sim | Não existe |
| Descrição curta | Não existe | Sim |
| Descrição completa | Não para busca | Sim |
| Nome de compras dentro do app | Sim | Parcial |
| Avaliações e instalações | Afetam posição | Afetam posição |

Consequência prática: na Apple, todo termo importante precisa caber em
nome, subtítulo e palavras-chave (160 caracteres no total). Na Play, a
descrição completa carrega boa parte do trabalho de termos.

## Pesquisa de termos da loja

1. **Autocompletar da loja.** Digite o começo do termo na busca da loja,
   com conta brasileira. Anote as sugestões.
2. **Concorrentes.** Leia nome, subtítulo e descrição curta dos dez
   primeiros apps de cada termo.
3. **Consoles.** O App Store Connect mostra termos de busca que geraram
   instalações; a Play Console mostra termos de busca da loja.
4. **Avaliações.** Palavras que clientes usam para descrever o app ("feira",
   "sacolão", "quitanda") revelam o vocabulário real.
5. **Ferramentas de ASO.** Dão popularidade e dificuldade estimadas.
   Registre a ferramenta e a data.

Priorize termos com relevância alta para a função confirmada, concorrência
que um app do tamanho do projeto consegue enfrentar e volume suficiente.

## Regras de redação por campo

**Nome ou título.** Marca mais termo principal, separados por dois-pontos
ou hífen. Se a marca já é conhecida, o termo pode ser menor.

**Subtítulo (Apple).** O benefício em linguagem da persona. Não repita
palavras do nome.

**Campo de palavras-chave (Apple).**

- Vírgula sem espaço entre termos.
- Uma palavra por termo quando possível; a Apple combina palavras dos três
  campos.
- Sem repetir palavras do nome e do subtítulo.
- Sem plural quando o singular já está em outro campo, salvo teste.
- Sem nome de concorrente, de marca de terceiros ou de categoria da loja.

**Descrição curta (Play).** Uma frase com benefício e termo principal. Ela
aparece na página e em parte da busca.

**Descrição completa.**

1. Primeiras três linhas: benefício, para quem, onde funciona. É o que
   aparece antes de "ler mais".
2. Blocos com título curto: como funciona, principais funções, pagamento,
   segurança e privacidade, suporte.
3. Termos da persona de forma natural. Na Play, cada termo principal duas a
   quatro vezes no texto todo.
4. Sem preço que muda com frequência; use o texto promocional ou a própria
   loja.
5. Privacidade: mencione o tratamento de dados conforme a política publicada
   e a LGPD, sem prometer o que a política não garante.

**Notas da versão.** O que mudou para o usuário, em frases curtas. Agradeça
avaliações que geraram correção, sem citar nome de pessoa.

## Localização para o Brasil

- Página pt-BR própria, não a página em inglês com tradução automática.
- Preço em reais e meios de pagamento locais quando o app aceitar (Pix,
  boleto), conforme `produtos.md`.
- Termos do português brasileiro ("celular", não "telemóvel").
- Screenshots com interface em português e exemplos locais (CEP, cidade,
  valores em R$).

## Diretrizes que reprovam a versão

- Nome com termo genérico de categoria só para ranquear ("Melhor app de
  delivery").
- Afirmação de liderança sem fonte ("app nº 1 do Brasil").
- Preço, promoção ou "grátis" no nome ou no ícone.
- Função descrita que o app não tem.
- Marca de terceiros sem autorização.
