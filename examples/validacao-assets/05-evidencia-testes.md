# Evidência de testes — validação de assets

- **Executado em:** 2026-07-30.
- **Diretório:** raiz do Hub.
- **Resultado:** aprovado.

## Suíte automatizada

```bash
python3 -m unittest discover -s thothfy/tests -v
```

Resultado observado:

```text
Ran 9 tests in 0.1s

OK
```

## Validação estrutural

```bash
python3 thothfy/scripts/validar-framework.py
```

Resultado observado:

```text
Thothfy aprovado: 71 skills e 3 sequências válidas.
```

## Conferências complementares

Também passaram `py_compile`, `markdownlint` e `git diff --check` no escopo
alterado. A suíte comprovou o inventário de Markdown minúsculo em `brand/`,
as violações da primeira rodada, o retorno à produtora e o hard gate zerado
na segunda rodada. Os casos adicionais cobrem preço e CTA de email, estrutura
semântica de blog e dimensão, gradiente e paleta de imagem para Instagram.
