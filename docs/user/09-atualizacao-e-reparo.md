# Atualização e reparo

Peça ao agente para executar `thothfy-setup` sempre que:

- a versão-fonte do Thothfy mudar;
- uma skill ou arquivo de apoio desaparecer;
- o inventário de fontes ficar desatualizado;
- um diretório de saída gerenciado estiver ausente;
- nomes legados aparecerem no diretório ativo.

## Passo a passo

1. Preserve alterações locais.
2. Simule a atualização:

   ```bash
   npx @promovaweb/thothfy@latest update --dry-run
   ```

3. Aplique a atualização:

   ```bash
   npx @promovaweb/thothfy@latest update --yes
   ```

4. Peça à skill `thothfy-setup` para revisar as fontes e o contexto.
5. Confirme que `.thothfy/context/` permaneceu intacto.
6. Confira os conflitos atualizados em `.thothfy/FONTES-PROJETO.md`.
7. Execute `npx @promovaweb/thothfy@latest doctor --strict`.
8. Preencha qualquer template restaurado com a skill de contexto indicada.

Metodologia, templates, documentação e skills gerenciadas acompanham a versão.
Dados vivos, instruções externas e fontes descobertas permanecem no lugar.

## O que muda e o que permanece

| O setup pode atualizar | O setup preserva |
| --- | --- |
| skills gerenciadas | dados existentes em `.thothfy/context/` |
| metodologia instalada | instruções fora do bloco do Thothfy |
| documentação instalada | fontes Markdown descobertas |
| templates read-only | customizações antes da migração |
| inventário de fontes | assets originais em `brand/` |

## Nomes legados

Uma atualização não deixa dois gatilhos para a mesma fase. Os antigos nomes
estratégicos sem número são movidos para
`.thothfy/migracoes/skills-legadas/<data>/`, e os nomes `00–03` permanecem no
diretório ativo.

## Como conferir o reparo

Primeiro simule e depois aplique:

```bash
npx @promovaweb/thothfy@latest repair --dry-run
npx @promovaweb/thothfy@latest repair --yes
npx @promovaweb/thothfy@latest doctor --strict
```

O reparo termina quando o diagnóstico não encontra erro ou aviso, o contexto
vivo foi preservado e o inventário reflete as fontes atuais.

## Uma versão para tudo

O número mostrado por `thothfy --version` é o mesmo do framework instalado,
do pacote npm, da tag Git `vX.Y.Z`, da GitHub Release e da edição do ebook.
Não existe versão independente para o CLI.

## Classificação

| Campo | Valor |
| --- | --- |
| Natureza | normativo |
| Escopo | atualização, reparo, preservação e migração |
| Autoridade | modos de reconciliação de `thothfy-setup` |
