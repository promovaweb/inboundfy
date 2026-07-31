# Primeiro pacote editorial

Use `thothfy-iniciar` com material bruto, uma peça-base, um brainstorm aprovado
ou um item de calendário que possa originar várias peças.

## Passo a passo

1. A entrada é classificada. Ideia insuficiente passa primeiro pelo
   brainstorm.
2. `00-triagem` preserva o material e abre o pacote.
3. `01-saneamento` corrige somente ruído mecânico, sem introduzir voz ou fato.
4. `02-pesquisa` levanta evidências e extrai ativos reutilizáveis.
5. `03-oportunidades` escolhe recortes e canais compatíveis com o contexto.
6. `04-briefing` cria um brief verificável para cada peça.
7. `05-producao` chama a especialista exata de cada asset.
8. Cada especialista envia o resultado à validadora de mesmo sufixo.
9. Reprovações voltam à especialista até aprovação ou falta de confirmação.
10. `06-auditoria` verifica o conjunto e libera os ativos finais.

## Como acompanhar

Cada diretório do pacote representa um estado. Não edite o original para
simular avanço; preserve a entrada e gere a próxima versão. Um asset só é
pronto quando houver relatório individual aprovado e a auditoria do pacote
estiver consistente.

O detalhamento de diretórios está em
[METODOLOGIA.md](../../METODOLOGIA.md).

## Estrutura completa

```text
content/<pacote>/
├── README.md
├── 00-entrada/
│   └── material-original.md
├── 01-saneamento/
│   ├── base-limpa.md
│   └── relatorio-saneamento.md
├── 02-pesquisa-e-ativos/
│   └── ativos.md
├── 03-planejamento/
│   └── plano-de-oportunidades.md
├── 04-briefs/
│   └── <canal>-<slug>.md
├── 06-auditoria/
│   ├── assets/
│   └── auditoria-final.md
└── 97-ativos-finais/
    └── <canal>/<item>/
```

Não existe uma pasta obrigatória `05-producao/`. O número identifica a fase
que encaminha o brief para a especialista. As versões candidatas e os
relatórios permanecem ligados ao item auditado.

## O que conferir em cada fase

- `00`: o original foi preservado sem edição;
- `01`: cada correção mecânica possui justificativa;
- `02`: fatos, citações, exemplos e hipóteses estão separados;
- `03`: cada oportunidade possui canal, prioridade e motivo;
- `04`: cada peça possui público, objetivo, ângulo, CTA e restrições;
- `05`: a especialista e a validadora têm o mesmo sufixo;
- `06`: todos os relatórios individuais estão aprovados;
- `97`: somente versões aprovadas foram copiadas.

## Retomar um pacote

Informe o caminho do pacote existente. O agente lê o último estado válido e
continua dali. Enviar novamente o material bruto sem indicar o pacote cria uma
nova execução e não deve ser usado como forma de retomar.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | pipeline editorial completo e seus artefatos |
| Autoridade | `METODOLOGIA.md` e skills `thothfy-planejamento-*` |
