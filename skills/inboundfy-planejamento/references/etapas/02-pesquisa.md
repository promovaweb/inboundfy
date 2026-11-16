# Etapa 02: pesquisa e extração de ativos

Fase 2 de `METODOLOGIA.md`. Lê a base limpa e o `context/` para produzir um
repertório de ativos que as etapas 03 e 04 usam. Não escolhe peças e não
escreve brief.

A verificação de setup, o contrato de artefato e o handoff seguem o
`SKILL.md` da skill e as referências de `../../../_shared/`.

## Contexto exigido

- `context/produtos.md` e `context/servicos.md`: reconhecer menção à oferta.
- `context/publico.md`: ligar dor e objeção a uma persona.
- `context/ferramentas.md` e `context/pessoas.md`: confirmar entidades
  citadas.

## Entrada esperada

`01-saneamento/base-limpa.md` do pacote.

## Fluxo

1. Leia a base limpa inteira.
2. Extraia teses defendidas, com o trecho exato que as sustenta.
3. Extraia exemplos, dados e números, com o bloco de origem.
4. Extraia dores e objeções e ligue cada uma a uma persona quando possível.
5. Extraia perguntas frequentes explícitas ou implícitas.
6. Extraia entidades (produtos, serviços, pessoas, ferramentas) e confira
   cada uma no `context/`. Entidade não cadastrada é sinalizada, nunca
   descrita como confirmada.
7. Identifique afirmações externas que precisam de pesquisa. Use fonte
   atual e primária. Registre título, URL, responsável, publicação e data de
   acesso. Separe o que a fonte confirma da interpretação.
8. Salve `02-pesquisa-e-ativos/ativos.md` no modelo abaixo.
9. Execute `inboundfy-anti-slop` no marco A2 e registre
   `06-auditoria/anti-slop-02-base-editorial.md`.

## Saída

`02-pesquisa-e-ativos/ativos.md`.

## Validação

- Todo ativo tem referência ao trecho de origem.
- Todo ativo de pesquisa externa tem fonte e data de acesso.
- Toda entidade foi checada contra `context/`.
- Nenhum ativo foi escrito como copy.
- O A2 foi registrado antes da etapa 03.

## Idempotência

Rodar de novo acrescenta ativos sem descartar os já extraídos.

## Tipos de ativo

| Tipo | Serve para | Exemplo |
| --- | --- | --- |
| Tese | Ângulo de peça de opinião ou artigo | "O cancelamento vem da migração, não do produto." |
| Dado | Prova e gancho | "6 em cada 10 tickets citam importação." |
| Exemplo | Cena concreta para a especialista | Cliente que desistiu na terceira tentativa de importar |
| Dor | Abertura e agitação | Medo de perder histórico |
| Objeção | Seção de resposta ou FAQ | "Meu estoque é bagunçado demais" |
| Pergunta frequente | Artigo de busca, FAQ, email | "Como importo minha planilha?" |
| Citação | Post de autoridade | Fala do gestor de produto |
| Entidade | Conferência de fato | Funcionalidade, ferramenta, pessoa |

## Modelo de `ativos.md`

```markdown
# Ativos editoriais: {{slug-do-pacote}}

## Teses
- {{tese}}; origem: "{{citação exata}}" (bloco {{n}})

## Exemplos e dados
- {{exemplo ou número}}; origem: bloco {{n}}

## Dores
- {{dor}}; persona: {{persona-id ou "não identificada"}}

## Objeções
- {{objeção}}; persona: {{persona-id}}

## Perguntas frequentes
- {{pergunta}}

## Entidades citadas
- {{nome}}; tipo: {{produto | serviço | pessoa | ferramenta}}; status: {{confirmada em context/ | não cadastrada}}

## Pesquisa externa
| Fonte | Responsável | Publicação | Acesso | Afirmação apoiada |
```

## Exemplo

Caso fictício.

```markdown
# Ativos editoriais: cancelamento-primeiro-mes-estoque

## Teses
- O cliente cancela no primeiro mês por não conseguir migrar o estoque
  antigo, não por insatisfação com o produto; origem: "a maioria liga
  achando que o sistema é ruim, mas o motivo real é sempre a migração"
  (bloco 2).

## Exemplos e dados
- 6 em cada 10 tickets de cancelamento no primeiro mês citam "migração" ou
  "importar planilha"; origem: bloco 3.

## Dores
- Medo de perder o histórico de estoque ao trocar de sistema; persona:
  persona-01.

## Objeções
- "Meu estoque é muito bagunçado para migrar"; persona: persona-01.

## Perguntas frequentes
- Como importo minha planilha de estoque atual?

## Entidades citadas
- Importador de planilha; tipo: produto; status: não cadastrada em
  context/produtos.md. Confirmar antes de qualquer peça citar.
```

## Checklist

- [ ] Todo ativo aponta o bloco de origem.
- [ ] Entidades não cadastradas estão sinalizadas.
- [ ] Nenhum item está escrito como copy.
- [ ] Dores e objeções estão ligadas a persona quando possível.

## Erros comuns

- Escrever ativos como parágrafo pronto de peça.
- Inventar dado plausível que não está no material.
- Dar entidade como confirmada sem abrir o arquivo de contexto.
