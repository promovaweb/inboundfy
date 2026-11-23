# Atualização e reparo

Mande o agente executar `inboundfy-setup` nestas situações:

- a versão-fonte do Inboundfy mudar;
- uma skill ou arquivo de apoio desaparecer;
- a lista de fontes ficar desatualizada;
- um diretório de saída gerenciado estiver ausente;
- nomes legados aparecerem no diretório ativo.

## Passo a passo

1. Preserve alterações locais.
2. Simule a atualização:

   ```bash
   inboundfy update --dry-run
   ```

3. Aplique a atualização:

   ```bash
   inboundfy update --yes
   ```

4. Mande a skill `inboundfy-setup` revisar as fontes e os arquivos do negócio.
5. Confirme que `.inboundfy/context/` permaneceu intacto.
6. Confira os conflitos atualizados em `.inboundfy/fontes-projeto.md`.
7. Execute `inboundfy doctor --strict`.
8. Preencha qualquer template restaurado com a skill `inboundfy-contexto-*`
   indicada.

Metodologia, templates, documentação e skills gerenciadas acompanham a versão,
enquanto as informações do negócio, as instruções externas e as fontes
descobertas permanecem no lugar.

## O que muda e o que permanece

| O setup pode atualizar | O setup preserva |
| --- | --- |
| skills gerenciadas | informações existentes em `.inboundfy/context/` |
| metodologia instalada | instruções fora do bloco do Inboundfy |
| documentação instalada | fontes Markdown descobertas |
| templates read-only | customizações antes da migração |
| lista de fontes | assets originais em `brand/` |

## Nomes legados

Uma atualização não deixa dois gatilhos para a mesma fase. Os antigos nomes
estratégicos sem número são movidos para
`.inboundfy/migracoes/skills-legadas/<data>/`. Os nomes `00–03` permanecem no
diretório ativo.

## Como conferir o reparo

Primeiro simule e depois aplique:

```bash
inboundfy repair --dry-run
inboundfy repair --yes
inboundfy doctor --strict
```

O reparo termina quando o diagnóstico não encontra erro ou aviso, quando
`.inboundfy/context/` foi preservado e quando a lista de fontes reflete os
arquivos atuais.

## Uma versão para tudo

O número mostrado por `inboundfy --version` é o mesmo do framework instalado,
do pacote npm, da tag Git `vX.Y.Z`, da GitHub Release e da edição do ebook.
Não existe versão independente para o binário: atualizar o `inboundfy`
(`npm install -g @promovaweb/inboundfy@latest` ou o executável da release) e
rodar `inboundfy update` leva o projeto à mesma versão.

## Projetos instalados pela 0.x

Projetos instalados pelo CLI em Node (até a 0.8.3) continuam válidos: o
formato de `.inboundfy/install.json`, do manifesto e dos índices não mudou.
Rode `inboundfy update` com o binário novo. Scripts que chamavam
`inboundfy acervo` ou `inboundfy calendario` passam a usar `inboundfy archive`
e `inboundfy calendar`; `content create --acervo` virou `--archive`.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | atualização, reparo, preservação e migração |
| Autoridade | modos de reconciliação de `inboundfy-setup` |
