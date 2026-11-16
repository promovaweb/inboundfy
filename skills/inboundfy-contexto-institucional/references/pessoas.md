# Domínio pessoas

Referência do domínio `pessoas` da skill `inboundfy-contexto-institucional`.
Ela é lida no passo 2 do fluxo, quando a entrada fala de alguém que assina
conteúdo, dá entrevista ou aparece como voz da marca.

## Função

`.inboundfy/context/pessoas.md` diz quem pode falar pela empresa, com que
autoridade e sobre quais temas. Ele evita dois problemas: atribuir uma
opinião técnica a quem não tem competência no assunto e publicar uma
biografia que a pessoa não aprovou.

Clientes que elogiam a empresa ficam em `context/depoimentos.json`. A
cliente ideal fica em `context/publico.md`.

## Fluxo do domínio

1. Leia `pessoas.md` para não duplicar alguém já cadastrado.
2. Se a entrada for material bruto (perfil profissional, minibio de evento),
   extraia papel, autoridade, voz e biografia. Confirme com a própria pessoa
   ou com quem responde por ela.
3. Registre temas que a pessoa pode assinar e temas que não deve assinar.
4. Confirme a autorização para publicar nome, foto, cargo e perfis. É dado
   pessoal tratado pela empresa e segue a LGPD.
5. Grave um bloco `## {Nome}` por pessoa. Atualize o bloco existente em vez
   de criar outro.
6. Pessoa que saiu da empresa não é apagada sem pedido. Acrescente
   `**Situação:** desligada em AAAA-MM-DD; não usar em peças novas`.

## Roteiro de entrevista

1. "Quem pode assinar conteúdo, dar entrevista ou aparecer como voz da
   marca?"
2. "O que essa pessoa faz de fato no dia a dia, além do cargo?"
3. "Que experiência sustenta a opinião dela nesse assunto?"
4. "Quando ela escreve em primeira pessoa, o tom é formal, direto, técnico
   ou opinativo?"
5. "O que não pode faltar numa biografia de rodapé de duas ou três frases?"
6. "Quais perfis oficiais dela podem ser linkados?"
7. "Em quais temas ela fala com autoridade e em quais não deve ser citada?"
8. "Ela autorizou o uso de nome, foto e biografia em peças públicas?"

## Tabela de papéis

| Papel no conteúdo | O que precisa estar registrado | Exemplo de uso |
| --- | --- | --- |
| Autora | temas, voz, biografia, perfil | assinatura de artigo de blog |
| Porta-voz | temas, limites, autorização de imagem | entrevista, webinar, podcast |
| Especialista citável | autoridade e temas | citação dentro de artigo |
| Contato comercial | papel e canal oficial | e-mail de vendas |

## Exemplo preenchido (fictício; "Estoquely")

```markdown
## Marina Alves

- **Papel:** cofundadora; define prioridades do produto e conduz entrevistas com lojistas
- **Autoridade no tema:** trabalhou seis anos na loja de roupas da família antes de fundar a empresa
- **Voz quando fala em primeira pessoa:** direta, técnica, sem jargão de vendas
- **Biografia curta (para rodapé ou "sobre o autor"):** Marina cofundou a Estoquely depois de ver o custo de controlar estoque em planilha na loja da família. Hoje lidera o time de produto.
- **Redes e perfis oficiais:** https://linkedin.com/in/exemplo-marina-alves
- **Temas que pode assinar:** controle de estoque, rotina de loja pequena, escolhas de produto da Estoquely
- **Temas que não deve assinar:** tributação, questões jurídicas, mídia paga
- **Autorização de imagem e biografia:** autorizada por escrito em 2026-02-10
```

## Checklist de completude

- [ ] Papel descreve o trabalho real.
- [ ] Autoridade sustentada por experiência concreta.
- [ ] Ao menos um tema permitido e um tema vedado.
- [ ] Biografia pronta para uso, sem edição.
- [ ] Autorização de nome, foto e biografia registrada.
- [ ] Perfis com URL completa e confirmada.

## Erros comuns

- Cargo de organograma ("Head de Growth") sem o trabalho real.
- Inferir competência ("é fundador, então entende de marketing").
- Usar foto de colaboradora tirada em evento interno sem autorização.
- Apagar pessoa desligada. Peças antigas continuam assinadas por ela.
- Misturar porta-voz com persona de público.

## Relações

Skills de canal leem `pessoas.md` para assinatura e biografia.
`inboundfy-dados-estruturados` usa o bloco para marcação de autor. Grafia de
nome com acento ou partícula ("Ana de Souza") entra no glossário quando
houver variação recorrente.
