# Domínio links

Referência do domínio `links` da skill `inboundfy-contexto-institucional`.
Ela é lida no passo 2 do fluxo, quando a entrada traz site, página, perfil
social, destino de conversão ou link de campanha.

## Função

`.inboundfy/context/links.md` é a fonte canônica de URLs mantidas pela
empresa. Toda peça com CTA busca o destino aqui. Uma URL errada derruba a
conversão da peça inteira, por isso cada link tem tipo, situação e
conferência.

Endereço físico, CNPJ e telefone ficam em `enderecos.md`. Referências
externas usadas em pesquisa ficam no `pesquisa.md` do acervo.

## Fluxo do domínio

1. Leia `links.md` e localize o destino informado.
2. Classifique o link: página principal, rede social, destino de conversão,
   link por produto ou link de campanha.
3. Confira que a URL começa com `https://` (ou `http://` quando o site não
   tiver certificado, o que vale registrar como pendência).
4. Pergunte se a URL é permanente ou de campanha. Link de campanha tem
   período e situação.
5. Atualize somente o alcance pedido. Ao substituir, registre a URL antiga e
   a data nas observações.
6. Preencha `Registro de conferência` com data, responsável e fonte.
7. Indique peças, campanhas ou calendário afetados.

## Roteiro de entrevista

1. "Qual é o site principal e o endereço do blog?"
2. "Qual página recebe contato, demonstração, cadastro e compra?"
3. "Quais perfis sociais são oficiais? Existe perfil antigo que deve ser
   ignorado?"
4. "O WhatsApp tem link `wa.me` com mensagem pré-preenchida?"
5. "Cada produto ou serviço tem página própria?"
6. "Existe landing de campanha ativa? Até quando?"
7. "Quem confirma os links e quando foi a última conferência?"

## Tipos de link

| Tipo | Seção do arquivo | Permanente? | Cuidado |
| --- | --- | --- | --- |
| Site, blog, contato, preços | Site e páginas principais | sim | conferir após redesenho do site |
| Perfil social | Redes sociais oficiais | sim | confirmar que o perfil é da empresa |
| Agendamento, demonstração, cadastro, suporte | Destinos de conversão | sim | testar o formulário |
| Página por produto | Links por produto e serviço | sim | situação ativa ou inativa |
| Landing com prazo | Links de campanha | não | período e situação |
| `wa.me` | Destinos de conversão (Suporte ou Agendamento) | sim | número igual ao de `enderecos.md` |

UTMs não entram na URL canônica. A URL registrada aqui é limpa. Parâmetros
de rastreamento são montados por peça, conforme
`inboundfy-rastreamento-conversao`.

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Destinos de conversão

- **Agendamento:** https://exemplo-estoquely.com.br/agendar
- **Demonstração:** https://exemplo-estoquely.com.br/demo
- **Cadastro:** https://app.exemplo-estoquely.com.br/criar-conta
- **Suporte:** https://wa.me/5531900001111?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20o%20Estoquely

## Links de campanha

| Campanha | URL | Período | Canal | Situação |
| --- | --- | --- | --- | --- |
| Black Friday 2026 | https://exemplo-estoquely.com.br/black-friday | 2026-11-20 a 2026-11-30 | e-mail, Instagram | ativo |

## Registro de conferência

- **Última conferência:** 2026-11-15
- **Pessoa responsável:** Marina Alves
- **Fonte da confirmação:** mensagem da responsável
- **Observações:** WhatsApp de suporte trocado em 2026-11-15; o link anterior apontava para número pessoal.
```

## Checklist de completude

- [ ] URL recebida de fonte do projeto.
- [ ] Tipo do link claro e seção correta.
- [ ] URL completa, sem UTM.
- [ ] Link de campanha com período e situação.
- [ ] Número do `wa.me` igual ao WhatsApp de `enderecos.md`.
- [ ] Data e responsável da conferência anotados.
- [ ] URL anterior registrada nas observações quando houver troca.

## Erros comuns

- Registrar landing de campanha como página permanente.
- Guardar URL com UTM como canônica.
- Manter perfil social antigo ativo depois da troca de @.
- Apagar URL antiga sem nota de substituição.
- Usar link de pesquisa externa como canal oficial.

## Relações

Skills de canal e `inboundfy-growth-cro` leem os destinos de conversão.
`inboundfy-dados-estruturados` usa site e perfis sociais. Troca de URL de
página indexada pede redirecionamento no site, tema de
`inboundfy-arquitetura-site`.
