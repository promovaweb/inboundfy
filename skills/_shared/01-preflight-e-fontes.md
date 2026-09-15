# Preflight e fontes do projeto

Este contrato vale para toda skill que roda em um projeto consumidor. A skill
de setup é a exceção: ela prepara os arquivos que as demais consultam.

## Ordem de leitura

1. Confirme `.inboundfy/framework/VERSAO.md` e
   `.inboundfy/fontes-projeto.md`.
2. Leia `.inboundfy/context/empresa.md` para localizar os arquivos vivos do projeto.
3. Carregue somente os contextos ligados à tarefa: empresa, oferta, produto,
   serviço, pessoas, personas, voz, canais, dicionário e proibições.
4. Leia o `REFERENCIA.md` da skill e os documentos do canal ou da fase.
5. Registre a origem de cada afirmação usada no artefato.

Quando uma sentinela estiver ausente, apresente a mensagem canônica, acione
`inboundfy-setup` e aguarde a preparação antes de escrever. Não copie fontes
para `.inboundfy/framework/` e não trate a presença de uma skill como prova de
setup concluído.

## Mapa de fontes

| Classe | Fonte | Uso |
| --- | --- | --- |
| Regra do agente | `AGENTS.md` e módulos | Conduta da execução. |
| Regra editorial | `PROHIBITED.md`, `COPY.md`, `WRITING.md`, `MARKDOWN.md` | Forma, voz e revisão. |
| Fato do projeto | `.inboundfy/context/` | Empresa, oferta, pessoas e canais. |
| Marca viva | `brand/` quando existir | Identidade visual e verbal. |
| Referência externa | `pesquisa.md` e links registrados | Apoio, contraponto e atualização. |

## Registro de proveniência

```yaml
id_execucao: exec-{{AAAA-MM-DD}}-{{sequencia}}
skill: inboundfy-{{nome}}
entrada: {{caminho ou descrição}}
fontes:
  - caminho: {{arquivo}}
    uso: {{fato, regra, voz, exemplo ou referência}}
    estado: {{confirmado, parcial ou pendente}}
perguntas_abertas:
  - {{pergunta que altera a saída}}
```

## Exemplo ilustrativo

Uma skill de oferta recebe `acervo/0042-2026-09-14-migracao/`. Ela lê a base
editorial, `context/ofertas.md`, a persona escolhida e a voz. Uma frase sobre
preço recebe a fonte da oferta; uma promessa sem fonte vira pergunta aberta e
não entra na copy final.

## Checklist

- [ ] As duas sentinelas foram confirmadas.
- [ ] As fontes relevantes foram lidas nesta execução.
- [ ] Cada afirmação usada tem caminho de origem.
- [ ] Perguntas abertas estão separadas do texto confirmado.
- [ ] Nenhum dado do projeto foi gravado dentro do framework.

## Erros comuns

- Ler apenas `.inboundfy/context/empresa.md` e ignorar o arquivo de contexto que
  contém o dado completo.
- Usar uma referência externa para atribuir experiência ao autor do projeto.
- Preencher uma lacuna para deixar o template visualmente completo.
- Tratar uma resposta antiga como regra geral sem confirmar o alcance.
