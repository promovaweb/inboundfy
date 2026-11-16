# Uso das personas na produção

Leia este arquivo no passo 9 do fluxo. A persona só vale se mudar a peça. Esta
referência mostra o menu de seleção e o que cada campo da ficha altera no
briefing.

## Menu de seleção

Antes de qualquer peça, apresente todas as personas ativas no formato do
contrato compartilhado de interação:

```text
1. persona-01 | Dono de hamburgueria no pico do delivery
   Perfil: dono que trabalha na chapa, de 2 a 8 funcionários.
   Contexto: sábado à noite, WhatsApp lotado.
   Problema: pedido esquecido ou errado no pico.
   Resultado: fim de semana sem pedido furado.
   Canais: Instagram, grupos de WhatsApp, vídeo curto.
   Oferta: plano Essencial.
2. persona-02 | Gerente que fecha o caixa
   ...
```

Personas `arquivada` não aparecem. Personas `hipotese` aparecem com a
marcação ao lado do nome. A pessoa escolhe uma ou mais. A escolha vai para o
brief e para o frontmatter:

```yaml
persona_principal: persona-01
personas_secundarias: [persona-02]
```

## O que cada campo muda

| Campo da ficha | O que muda no briefing |
| --- | --- |
| Situação e gatilho | Cena de abertura, exemplo principal, momento de publicação |
| Estágio de consciência | Formato da peça e profundidade da explicação |
| Forças: empurra | Gancho e primeira frase |
| Forças: ansiedade | Prova, FAQ, garantia, posição do suporte na peça |
| Forças: hábito | Comparação com o jeito atual, passo de migração |
| Objeção | Seção ou frase que responde antes de a pessoa perguntar |
| Jargão e frases literais | Título, palavra-chave de busca, legenda |
| Onde consome conteúdo | Canal e formato |
| Papel na compra | Tipo de prova (número para quem decide, demonstração para quem usa) |
| Oferta pertinente | CTA e página de destino |

## Uma peça, mais de uma persona

Quando a peça atende duas personas, a principal define abertura, exemplo e
CTA. A secundária ganha um trecho próprio, nunca uma média das duas. Se as
duas pedem aberturas opostas, faça duas versões e registre a adaptação no
brief, como prevê `05-contexto-editorial.md`.

## Sinais de que a persona não foi usada

- A peça poderia ser enviada para qualquer persona sem mudar uma frase.
- O título usa palavras da empresa, não do jargão da ficha.
- A objeção principal da persona não aparece.
- O CTA aponta para uma oferta que não está na ficha.

Quando `inboundfy-copy-editor` ou a validadora do canal encontrar esses
sinais, o achado cita o campo da ficha que foi ignorado.
