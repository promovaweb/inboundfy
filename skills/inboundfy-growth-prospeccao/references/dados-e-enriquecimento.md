# Normalização e enriquecimento com orçamento

## Identidade e qualidade por campo

Use ID estável da conta, domínio canônico e unidade ou identificador empresarial disponível. Não exija identificador pessoal para resolver uma empresa. Nomes parecidos exigem conferência humana. Para telefone brasileiro, guarde país, DDD e número normalizados, preservando o original; não converta telefone fixo em celular por suposição.

Cada campo relevante conserva valor, origem, data, estado e responsável pela conferência. Estados úteis: confirmado, parcial, ausente, divergente e erro técnico. Correção recente confirmada não deve ser substituída por retorno vazio de provedor.

| Retorno | Tratamento |
| --- | --- |
| Contato válido e entidade correspondente | Aceitar e encerrar a busca desse campo |
| Endereço com domínio que aceita tudo | Manter incerto; aplicar política explícita antes de contato |
| Endereço inválido | Retirar da lista elegível |
| Pessoa mudou de função | Atualizar com fonte; reavaliar pertinência |
| Empresa homônima | Suspender associação e conferir identidade |
| Falha de autenticação ou quota | Registrar erro, sem marcar pessoa inexistente |

## Consulta progressiva

Antes da consulta, defina campo necessário, entrada mínima, resultado aceitável, validade e teto de custo. Consulte primeiro o CRM e registros recentes. Se faltar dado, use fonte autorizada adequada. Passe a outra fonte somente se a anterior não resolver. Contato precisa de validação distinta da mera descoberta.

A chave de reaproveitamento precisa incluir projeto, provedor, operação, entidade normalizada e campos pedidos. Não reutilize dados de outro cliente por coincidência de domínio. Registre expiração por tipo de dado: função e contato mudam mais que categoria da empresa. Retorno sem correspondência pode ter validade curta; erro técnico não equivale a retorno negativo.

```text
Conta/campo: {{ID/campo}}.
Fontes em ordem e custo máximo: {{fontes/limite}}.
Aceite: {{regra de identidade e qualidade}}.
Dado existente: {{origem/data/validade}}.
Resultado: {{aceito/ausente/divergente/erro}}.
Custo efetivo e consultas evitadas: {{medidos}}.
Próxima ação: {{encerrar/conferir/consultar outra fonte}}.
```

## Tratamento e acesso

Dados públicos continuam sujeitos à finalidade e às regras de proteção de dados. O responsável do projeto define hipótese de tratamento, necessidade, acesso, retenção e atendimento aos titulares. Para avaliação de legítimo interesse, consulte o [guia da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_hipoteses_legais_tratamento_de_dados_pessoais_legitimo_interesse), consultado em 15/11/2026. O registro da lista não substitui essa avaliação.

Consulte `.inboundfy/context/integracoes.md` para saber quais conectores estão disponíveis. Registre apenas nome da integração e variável exigida, nunca valor secreto. Não coloque dados pessoais completos em relatórios públicos nem no framework. O registro mínimo de supressão deve impedir novo contato sem preservar dados excessivos. Prazos e acessos precisam seguir a política do projeto.

## Piloto de enriquecimento

Antes de ampliar a lista, confira uma conta conhecida, uma homônima, uma duplicada, uma sem contato, uma com retorno antigo e uma com erro técnico. Revise resultado e custo de cada caso. Métricas: campos aceitos/consultados, consultas reaproveitadas/solicitadas, custo por contato válido e proporção de identidade errada na amostra. Nenhuma ferramenta garante cobertura completa.
