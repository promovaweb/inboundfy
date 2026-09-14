#!/usr/bin/env python3
"""Localiza Markdown de contexto, incluindo toda fonte dentro de brand/."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path


DIRETORIOS_IGNORADOS = {
    ".agents",
    ".claude",
    ".codex",
    ".git",
    ".inboundfy",
    ".venv",
    "build",
    "coverage",
    "dist",
    "node_modules",
    "vendor",
}


def nome_em_maiusculas(caminho: Path) -> bool:
    """Aceita nomes Markdown com letras maiúsculas, números e separadores."""
    stem = caminho.stem
    return (
        caminho.suffix.lower() == ".md"
        and any(caractere.isalpha() for caractere in stem)
        and stem == stem.upper()
        and all(
            caractere.isalnum() or caractere in {"-", "_"}
            for caractere in stem
        )
    )


def fonte_descoberta(caminho: Path, raiz: Path) -> bool:
    """Inclui Markdown em maiúsculas e qualquer Markdown dentro de brand/."""
    relativo = caminho.relative_to(raiz)
    dentro_de_brand = bool(relativo.parts) and relativo.parts[0] == "brand"
    return nome_em_maiusculas(caminho) or (
        dentro_de_brand and caminho.suffix.lower() == ".md"
    )


def extrair_metadados(caminho: Path, raiz: Path) -> dict[str, object]:
    """Resume estrutura e identidade do arquivo sem expor seu corpo."""
    conteudo = caminho.read_text(encoding="utf-8", errors="replace")
    headings = [
        linha.lstrip("#").strip()
        for linha in conteudo.splitlines()
        if linha.startswith("#")
    ]
    return {
        "caminho": caminho.relative_to(raiz).as_posix(),
        "titulo": headings[0] if headings else "",
        "headings": headings,
        "sha256": hashlib.sha256(conteudo.encode("utf-8")).hexdigest(),
    }


def inventariar(raiz: Path, exclusoes: set[Path]) -> list[dict[str, object]]:
    """Percorre o projeto sem seguir áreas geradas, dependências ou submódulos."""
    encontrados: list[dict[str, object]] = []
    for diretorio, subdiretorios, arquivos in os.walk(
        raiz, topdown=True, followlinks=False
    ):
        atual = Path(diretorio)
        relativos = atual.relative_to(raiz)
        subdiretorios[:] = [
            nome
            for nome in subdiretorios
            if nome not in DIRETORIOS_IGNORADOS
            and not (atual / nome).is_symlink()
            and relativos / nome not in exclusoes
            and not (atual / nome / ".git").exists()
        ]
        for nome in arquivos:
            caminho = atual / nome
            if fonte_descoberta(caminho, raiz):
                encontrados.append(extrair_metadados(caminho, raiz))
    return sorted(encontrados, key=lambda item: str(item["caminho"]))


def argumentos() -> argparse.Namespace:
    """Define a interface de linha de comando do inventário."""
    parser = argparse.ArgumentParser(
        description=(
            "Inventaria Markdown em maiúsculas e fontes Markdown de brand/ "
            "sem alterar o projeto."
        )
    )
    parser.add_argument("raiz", type=Path, help="Raiz do projeto consumidor.")
    parser.add_argument(
        "--excluir",
        action="append",
        default=[],
        metavar="CAMINHO",
        help="Caminho relativo adicional que não deve ser percorrido.",
    )
    return parser.parse_args()


def main() -> int:
    """Valida a raiz, executa a busca e imprime JSON determinístico."""
    opcoes = argumentos()
    raiz = opcoes.raiz.resolve()
    if not raiz.is_dir():
        raise SystemExit(f"Raiz de projeto inexistente: {raiz}")
    exclusoes = {
        Path(caminho)
        for caminho in opcoes.excluir
        if caminho and not Path(caminho).is_absolute()
    }
    print(
        json.dumps(
            inventariar(raiz, exclusoes),
            ensure_ascii=False,
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
