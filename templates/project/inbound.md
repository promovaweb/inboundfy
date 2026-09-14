# Inboundfy: configuração do projeto

Este arquivo é o índice da configuração do projeto consumidor. Ele não faz
parte do framework: contém links para as informações reais da empresa e para
os registros que o agente deve consultar antes de criar uma peça.

## Arquivos canônicos

| Arquivo | Conteúdo |
| --- | --- |
| [estrategia.md](estrategia.md) | Canais ativos, objetivos, cadência e distribuição. |
| [voz.md](voz.md) | Voz, tom, ritmo, vocabulário e exemplos aprovados. |
| [personas.md](personas.md) | Personas disponíveis e seus contextos de compra. |
| [proibicoes.md](proibicoes.md) | Palavras, promessas, abordagens e formas vetadas. |
| [dicionario.md](dicionario.md) | Grafia oficial, termos preferidos e correções aprendidas. |
| [pipeline.md](pipeline.md) | Estados permitidos entre rascunho e publicação. |

## Dados do negócio

Registre nos campos abaixo somente informações confirmadas. Para detalhes
longos, use arquivos em `.inboundfy/context/` e vincule cada fonte aqui.

- **Nome da empresa:** PREENCHER
- **Descrição curta:** PREENCHER
- **Site principal:** PREENCHER
- **Idioma de produção:** pt-BR
- **País e região:** PREENCHER
- **Pessoas autorizadas a aprovar:** PREENCHER
- **Redes sociais oficiais:** PREENCHER
- **Produtos e serviços:** PREENCHER
- **Endereços e contatos:** PREENCHER
- **Fonte complementar:** `.inboundfy/context/`

## Regra de separação

O diretório `inboundfy/` é o framework versionado. A pasta `.inboundfy/` é a
configuração deste projeto. O acervo, os canais e o calendário ficam fora das
duas pastas para que os dados de produção possam ser revisados e versionados
separadamente.
