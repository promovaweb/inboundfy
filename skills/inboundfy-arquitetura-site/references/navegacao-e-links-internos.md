# Navegação e links internos

Leia nos passos 6 e 7 do fluxo de `inboundfy-arquitetura-site`.

## Tipos de navegação

| Tipo | Função | Regra |
| --- | --- | --- |
| Menu principal | Levar às tarefas mais comuns | 5 a 7 itens, rótulos que a persona entende |
| Botão de ação no cabeçalho | A conversão principal | Um botão só, com verbo ("Pedir orçamento") |
| Submenu ou megamenu | Agrupar páginas de um hub | Só quando o hub tem mais de quatro filhas |
| Rodapé | Acesso secundário, dados legais e confiança | Grupos curtos, CNPJ, endereço, privacidade |
| Breadcrumb | Mostrar onde a pessoa está | Espelha a URL, último item sem link |
| Navegação contextual | Levar à próxima leitura ou à oferta | Links no corpo e blocos de relacionados |
| Busca interna | Sites com mais de cem páginas | Registre termos buscados como fonte de pauta |

## Rótulos de menu

- Use o nome que a persona usa: "Preços" em vez de "Investimento",
  "Coleta e entrega" em vez de "Lavô Express".
- Uma ou duas palavras por item.
- Ordem: tarefas de escolha primeiro (serviços, preços), conteúdo e empresa
  depois (blog, sobre).
- Teste rápido: mostre só o menu a alguém do público e pergunte onde clicaria
  para a tarefa principal. Se errar, o rótulo muda.

## Rodapé

Conteúdo que costuma entrar:

- links para as páginas de serviço e para as unidades;
- endereço, horário e telefone de cada unidade (negócio local);
- razão social e CNPJ;
- política de privacidade e termos, obrigatórios quando há formulário,
  cadastro ou cookies de rastreamento (LGPD);
- canais oficiais de `.inboundfy/context/links.md`;
- selos e meios de pagamento aceitos (Pix, boleto, cartão), quando ajudam a
  confiança.

## Breadcrumb

- Formato: Home > Hub > Página.
- O último item é a página atual, sem link.
- Cada item intermediário aponta para uma página que existe e tem conteúdo.
- Marcação BreadcrumbList fica com `inboundfy-dados-estruturados`.

## Plano de links internos

Tipos de link que o plano deve cobrir:

1. **Hub para filhas e filhas para o hub.** Sempre nos dois sentidos.
2. **Conteúdo para oferta.** Cada artigo do blog linka para a página de
   serviço ou recurso relacionada, no trecho do texto que trata do problema.
3. **Entre irmãs.** Páginas do mesmo hub que se complementam (unidade de
   Boa Viagem para a do Pina, por proximidade).
4. **Páginas fortes para páginas novas.** Páginas com tráfego e links
   externos passam força para as páginas que precisam ranquear.

Regras:

- âncora descritiva, com o assunto da página de destino;
- variação natural de âncora entre páginas;
- link no corpo antes de link em bloco de relacionados;
- nenhuma página planejada sem link de entrada;
- links quebrados e cadeias de redirecionamento corrigidos na origem.

## Modelo da tabela de links

```markdown
| De | Para | Âncora | Tipo | Posição |
| --- | --- | --- | --- | --- |
| /blog/como-lavar-edredom/ | /lavagem-self-service/ | máquinas para edredom e cobertor | conteúdo para oferta | seção "Onde lavar" |
| /unidades/pina/ | /coleta-e-entrega/ | coleta e entrega no Pina | filha para serviço | abaixo do horário |
| /unidades/ | /unidades/pina/ | lavanderia no Pina | hub para filha | bloco da unidade |
```

## Conferência

- Toda página da árvore aparece ao menos uma vez na coluna "Para".
- Páginas comerciais recebem ao menos três links contextuais.
- O menu e o rodapé não substituem links no corpo: eles se repetem em todas
  as páginas e pesam menos.
