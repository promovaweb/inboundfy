# context/ — Dados do Usuário

Esta pasta concentra a informação de negócio real do usuário. A única
exceção é `estruturas-proibidas.md`: vive aqui por conveniência operacional
(a mesma auditoria de `thothfy-base-editor` lê os arquivos desta pasta em
sequência), mas seu conteúdo é genérico e pré-preenchido pelo framework, não
dado específico de negócio — ver `../ESCRITA.md`. Veja `../CONTEXTO.md` para
o que cada arquivo resolve, a precedência entre eles e o formato esperado.

Todos os arquivos abaixo chegam como template com placeholders entre `{ }` e
comentários `<!-- -->` explicando o que preencher. Preencha sob demanda: o
mínimo para começar é `empresa.md`, `marca-voz.md`, um item em `produtos.md`
(ou `servicos.md`) e um canal em `canais.md` — `thothfy-setup` conduz esse
preenchimento inicial.

| Arquivo | Conteúdo |
| --- | --- |
| `empresa.md` | Identidade institucional. |
| `pessoas.md` | Fundadores, time, autores, porta-vozes. |
| `produtos.md` | Produtos e funcionalidades. |
| `servicos.md` | Serviços prestados. |
| `ofertas.md` | Planos, preços, condições comerciais. |
| `marca-voz.md` | Tom, voz, vocabulário, exemplos. |
| `publico.md` | Personas, dores, objeções, jornada. |
| `concorrentes.md` | Concorrentes e posicionamento relativo. |
| `enderecos.md` | Endereços, registro legal, contatos oficiais. |
| `canais.md` | Canais ativos, cadência, diretório de trabalho. |
| `ferramentas.md` | Stack e ferramentas mencionáveis. |
| `campanhas.md` | Campanhas, objetivos, período e estado. |
| `glossario.md` | Grafia oficial de marcas e termos. |
| `proibicoes.md` | Vetos editoriais específicos do usuário. |
| `estruturas-proibidas.md` | Catálogo genérico (pré-preenchido) de palavras, frases e estruturas de parágrafo com cara de IA. |

Nunca apague uma seção inteira de um desses arquivos ao atualizar — edite o
conteúdo da seção e preserve a estrutura, para que qualquer skill que leia o
arquivo continue encontrando os mesmos cabeçalhos.
