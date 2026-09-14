# Arquitetura

O Inboundfy é um framework de arquivos, não um runtime. O agente interpreta
`SKILL.md`, consulta contratos Markdown e grava artefatos no projeto
consumidor.

## Componentes

| Componente | Responsabilidade |
| --- | --- |
| `inboundfy-setup` | Instala e reconcilia o ambiente |
| Wrappers | Classificam a entrada e orquestram fases |
| Fases numeradas | Transformam estado em ordem cronológica |
| Skills base | Fornecem capacidades transversais |
| Skills de contexto | Mantêm dados do negócio |
| Especialistas | Produzem um tipo de asset |
| Validadoras | Aplicam contrato e devolvem reprovações |
| Auditoria | Consolida o pacote aprovado |

## Separação de decisão

Estratégia decide o que, por que e quando. Planejamento transforma material em
briefs. Especialistas executam os briefs. Validadoras aprovam ou devolvem.
Essa separação impede que uma produtora invente estratégia ou que uma
validadora corrija o próprio objeto auditado.

## Instalação no projeto consumidor

O código das skills fica no diretório de skills já adotado pelo agente. Os
contratos e dados instalados ficam em `.inboundfy/`. Saídas ficam fora desse
diretório, em `acervo/`, `canais/` e `calendario/`; `brainstorms/` continua
disponível para ideias que ainda não viraram material do acervo.
