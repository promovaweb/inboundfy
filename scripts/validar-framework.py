#!/usr/bin/env python3
"""Valida a estrutura, as sequências e as dependências das skills do Thothfy."""

from __future__ import annotations

import re
import sys
from pathlib import Path


RAIZ = Path(__file__).resolve().parents[1]
SKILLS = RAIZ / "skills"
HEADINGS = (
    "## Contexto exigido",
    "## Entrada esperada",
    "## Fluxo",
    "## Saída",
    "## Validação",
    "## Idempotência",
)
SEQUENCIAS = {
    "thothfy-estrategia": range(4),
    "thothfy-brainstorm": range(5),
    "thothfy-planejamento": range(7),
}
NOMES_LEGADOS = {
    "thothfy-estrategia-briefing-cliente",
    "thothfy-estrategia-pesquisa-mercado",
    "thothfy-estrategia-campanha",
    "thothfy-estrategia-calendario",
}
SUFIXOS_DE_ASSET = {
    "blog",
    "blog-imagem",
    "changelog",
    "ebook",
    "ebook-imagem",
    "email",
    "infografico",
    "infografico-imagem",
    "instagram",
    "instagram-imagem",
    "linkedin",
    "linkedin-imagem",
    "newsletter",
    "podcast",
    "video",
    "video-imagem",
    "webinar",
    "webinar-imagem",
}


def frontmatter(texto: str) -> tuple[str, str] | None:
    """Extrai nome e descrição do frontmatter YAML simples de uma skill."""
    match = re.match(r"^---\n(.*?)\n---\n", texto, flags=re.DOTALL)
    if not match:
        return None
    bloco = match.group(1)
    nome = re.search(r"^name:\s*(.+)$", bloco, flags=re.MULTILINE)
    descricao = re.search(
        r"^description:\s*>?\s*\n?(.+?)(?=\n[a-z_-]+:|\Z)",
        bloco,
        flags=re.MULTILINE | re.DOTALL,
    )
    if not nome or not descricao:
        return None
    valor = " ".join(linha.strip() for linha in descricao.group(1).splitlines())
    return nome.group(1).strip(), valor


def validar_skill(diretorio: Path) -> list[str]:
    """Confere o contrato mínimo de uma pasta de skill."""
    erros: list[str] = []
    arquivo = diretorio / "SKILL.md"
    referencia = diretorio / "REFERENCIA.md"
    if not arquivo.is_file():
        return [f"{diretorio.name}: SKILL.md ausente"]
    texto = arquivo.read_text(encoding="utf-8")
    meta = frontmatter(texto)
    if meta is None:
        erros.append(f"{diretorio.name}: frontmatter inválido")
    else:
        nome, descricao = meta
        if nome != diretorio.name:
            erros.append(
                f"{diretorio.name}: frontmatter name aponta para {nome}"
            )
        if len(descricao) < 90:
            erros.append(
                f"{diretorio.name}: description tem menos de 90 caracteres"
            )
    if not referencia.is_file():
        erros.append(f"{diretorio.name}: REFERENCIA.md ausente")
    if "REFERENCIA.md" not in texto:
        erros.append(f"{diretorio.name}: fluxo não cita REFERENCIA.md")
    for heading in HEADINGS:
        if heading not in texto:
            erros.append(f"{diretorio.name}: seção ausente: {heading}")
    if diretorio.name != "thothfy-setup":
        for trecho in (
            "## Verificação do setup",
            ".thothfy/VERSAO.md",
            ".thothfy/FONTES-PROJETO.md",
            "O setup do Thothfy ainda não foi concluído",
            "`thothfy-setup`",
            "sem criar ou alterar artefatos",
            "Markdown relevantes para a tarefa",
        ):
            if trecho not in texto:
                erros.append(
                    f"{diretorio.name}: alerta de setup ausente: {trecho}"
                )
    for caminho in re.findall(r"`context/([^`]+\.md)`", texto):
        if not (RAIZ / "context" / caminho).is_file():
            erros.append(
                f"{diretorio.name}: context/{caminho} não existe"
            )
    skill_de_texto = (
        "especialista-" in diretorio.name
        and not diretorio.name.endswith("-imagem")
    )
    if skill_de_texto or any(
        termo in diretorio.name for termo in ("base-editor", "06-auditoria")
    ):
        for esperado in (
            "ESCRITA.md",
            "context/proibicoes.md",
            "context/estruturas-proibidas.md",
        ):
            if esperado not in texto:
                erros.append(
                    f"{diretorio.name}: redação sem referência a {esperado}"
                )
        if skill_de_texto and "thothfy-base-editor" not in texto:
            erros.append(
                f"{diretorio.name}: redação não aciona thothfy-base-editor"
            )
    return erros


def validar_sequencias() -> list[str]:
    """Confere presença contínua e unicidade dos números de cada fluxo."""
    erros: list[str] = []
    nomes = [item.name for item in SKILLS.iterdir() if item.is_dir()]
    legados = sorted(set(nomes) & NOMES_LEGADOS)
    if legados:
        erros.append(f"skills estratégicas sem número: {legados}")
    for prefixo, esperados in SEQUENCIAS.items():
        encontrados: list[int] = []
        padrao = re.compile(rf"^{re.escape(prefixo)}-(\d{{2}})-")
        for nome in nomes:
            match = padrao.match(nome)
            if match:
                encontrados.append(int(match.group(1)))
        if sorted(encontrados) != list(esperados):
            erros.append(
                f"{prefixo}: sequência esperada {list(esperados)}, "
                f"encontrada {sorted(encontrados)}"
            )
    return erros


def validar_pares_de_asset() -> list[str]:
    """Confere o pareamento entre produtoras e validadoras de cada asset."""
    erros: list[str] = []
    esperadas_produtoras = {
        f"thothfy-especialista-{sufixo}" for sufixo in SUFIXOS_DE_ASSET
    }
    esperadas_validadoras = {
        f"thothfy-validador-{sufixo}" for sufixo in SUFIXOS_DE_ASSET
    }
    encontradas_produtoras = {
        item.name
        for item in SKILLS.glob("thothfy-especialista-*")
        if item.is_dir()
    }
    encontradas_validadoras = {
        item.name
        for item in SKILLS.glob("thothfy-validador-*")
        if item.is_dir()
    }
    if encontradas_produtoras != esperadas_produtoras:
        erros.append(
            "produtoras de asset divergentes; esperado "
            f"{sorted(esperadas_produtoras)}, encontrado "
            f"{sorted(encontradas_produtoras)}"
        )
    if encontradas_validadoras != esperadas_validadoras:
        erros.append(
            "validadoras de asset divergentes; esperado "
            f"{sorted(esperadas_validadoras)}, encontrado "
            f"{sorted(encontradas_validadoras)}"
        )
    base = SKILLS / "thothfy-base-validador" / "SKILL.md"
    if not base.is_file():
        erros.append("thothfy-base-validador: SKILL.md ausente")
    else:
        texto_base = base.read_text(encoding="utf-8")
        for trecho in (
            "Todos os arquivos Markdown de `.thothfy/context/`",
            ".thothfy/FONTES-PROJETO.md",
            "`brand/`, quando existir",
            "context/proibicoes.md",
            "context/estruturas-proibidas.md",
            "hard gate",
            "passe literal",
            "leitura semântica",
            "reprovação automática",
            "nunca compensam uma proibição",
            "repita os dois passes",
            "skill produtora",
            "Reprovação volta à skill produtora",
        ):
            if trecho not in texto_base:
                erros.append(
                    f"thothfy-base-validador: contrato ausente: {trecho}"
                )
    for sufixo in sorted(SUFIXOS_DE_ASSET):
        nome_produtora = f"thothfy-especialista-{sufixo}"
        nome_validadora = f"thothfy-validador-{sufixo}"
        caminho_produtora = SKILLS / nome_produtora / "SKILL.md"
        caminho_validadora = SKILLS / nome_validadora / "SKILL.md"
        if caminho_produtora.is_file():
            texto_produtora = caminho_produtora.read_text(encoding="utf-8")
            if nome_validadora not in texto_produtora:
                erros.append(
                    f"{nome_produtora}: não aciona {nome_validadora}"
                )
        if caminho_validadora.is_file():
            texto_validadora = caminho_validadora.read_text(encoding="utf-8")
            for trecho in (
                nome_produtora,
                "thothfy-base-validador",
                "Todos os Markdown de `context/`",
            ):
                if trecho not in texto_validadora:
                    erros.append(
                        f"{nome_validadora}: contrato ausente: {trecho}"
                    )
            texto_normalizado = texto_validadora.casefold()
            for conceito in ("reprov", "aprov"):
                if conceito not in texto_normalizado:
                    erros.append(
                        f"{nome_validadora}: ciclo ausente: {conceito}"
                    )
    return erros


def validar_metodologia() -> list[str]:
    """Confere arquivos e chamadas essenciais das wrappers."""
    erros: list[str] = []
    exigidos = (
        "BRAINSTORM.md",
        "CONTEXTO.md",
        "ESCRITA.md",
        "ESTRATEGIA.md",
        "METODOLOGIA.md",
        "SKILL-AUTORIA.md",
        "SKILLS.md",
        "templates/brainstorm.md",
        "templates/fontes-projeto.md",
        "skills/thothfy-setup/scripts/inventariar-fontes-projeto.py",
    )
    for relativo in exigidos:
        if not (RAIZ / relativo).is_file():
            erros.append(f"arquivo metodológico ausente: {relativo}")
    if not (RAIZ / "brainstorms").is_dir():
        erros.append("diretório de saída ausente: brainstorms/")
    esperados_contexto = {
        "campanhas.md",
        "canais.md",
        "concorrentes.md",
        "empresa.md",
        "enderecos.md",
        "estruturas-proibidas.md",
        "ferramentas.md",
        "glossario.md",
        "marca-voz.md",
        "ofertas.md",
        "pessoas.md",
        "produtos.md",
        "proibicoes.md",
        "publico.md",
        "servicos.md",
    }
    encontrados_contexto = {
        item.name
        for item in (RAIZ / "context").glob("*.md")
        if item.name != "README.md"
    }
    if encontrados_contexto != esperados_contexto:
        erros.append(
            "context/: catálogo divergente; esperado "
            f"{sorted(esperados_contexto)}, encontrado "
            f"{sorted(encontrados_contexto)}"
        )
    for arquivo_contexto in (RAIZ / "context").glob("*.md"):
        texto_contexto = arquivo_contexto.read_text(encoding="utf-8")
        if re.search(r"<[A-Za-zÀ-ÿ0-9]", texto_contexto):
            erros.append(
                f"context/{arquivo_contexto.name}: placeholder usa <...>"
            )
    modelo = (RAIZ / "templates" / "brainstorm.md").read_text(
        encoding="utf-8"
    )
    for secao in (
        "## Ideia original",
        "## Perguntas e respostas",
        "## Suposições de trabalho",
        "## Pesquisa",
        "## Tese e recorte",
        "## Oportunidades por canal",
        "## Restrições carregadas",
        "## Validação",
    ):
        if secao not in modelo:
            erros.append(f"templates/brainstorm.md: seção ausente: {secao}")
    modelo_fontes = (RAIZ / "templates" / "fontes-projeto.md").read_text(
        encoding="utf-8"
    )
    for trecho in (
        "## Regra de descoberta",
        "## Fontes encontradas",
        "## Conflitos",
        "## Precedência",
        ".thothfy/",
        ".codex/",
        "submódulos Git",
    ):
        if trecho not in modelo_fontes:
            erros.append(
                f"templates/fontes-projeto.md: contrato ausente: {trecho}"
            )
    utilitario_fontes = (
        RAIZ
        / "skills"
        / "thothfy-setup"
        / "scripts"
        / "inventariar-fontes-projeto.py"
    ).read_text(encoding="utf-8")
    for trecho in (
        "followlinks=False",
        "stem == stem.upper()",
        "DIRETORIOS_IGNORADOS",
        "sha256",
        "--excluir",
        "fonte_descoberta",
        'relativo.parts[0] == "brand"',
    ):
        if trecho not in utilitario_fontes:
            erros.append(
                "inventariar-fontes-projeto.py: "
                f"proteção ausente: {trecho}"
            )
    wrapper = (SKILLS / "thothfy-brainstorm" / "SKILL.md").read_text(
        encoding="utf-8"
    )
    for numero in range(5):
        if f"thothfy-brainstorm-{numero:02d}-" not in wrapper:
            erros.append(
                f"thothfy-brainstorm: fase {numero:02d} não acionada"
            )
    for nome in ("thothfy-brainstorm-03-sintese", "thothfy-brainstorm-04-validacao"):
        texto = (SKILLS / nome / "SKILL.md").read_text(encoding="utf-8")
        for esperado in (
            "ESCRITA.md",
            "context/proibicoes.md",
            "context/estruturas-proibidas.md",
        ):
            if esperado not in texto:
                erros.append(f"{nome}: não carrega {esperado}")
    iniciar = (SKILLS / "thothfy-iniciar" / "SKILL.md").read_text(
        encoding="utf-8"
    )
    if "thothfy-brainstorm" not in iniciar:
        erros.append("thothfy-iniciar: não encaminha ideia para brainstorm")
    setup = (SKILLS / "thothfy-setup" / "SKILL.md").read_text(
        encoding="utf-8"
    )
    for trecho in (
        "Reparo e reconciliação",
        ".thothfy/templates/",
        ".thothfy/context/",
        "brainstorms/",
        "content/",
        "AGENTS.md",
        "VERSAO.md",
        "FONTES-PROJETO.md",
        "Descoberta de contexto do projeto",
        "templates/fontes-projeto.md",
        "inventariar-fontes-projeto.py",
        "submódulos Git",
        "nunca sobrescreve",
        "`brand/` existir",
        "todos os Markdown do diretório",
    ):
        if trecho not in setup:
            erros.append(f"thothfy-setup: responsabilidade ausente: {trecho}")
    autoria = (RAIZ / "SKILL-AUTORIA.md").read_text(encoding="utf-8")
    if "Somente `thothfy-setup`" not in autoria:
        erros.append(
            "SKILL-AUTORIA.md: propriedade exclusiva do setup não declarada"
        )
    if ".thothfy/FONTES-PROJETO.md" not in autoria:
        erros.append(
            "SKILL-AUTORIA.md: consumo das fontes locais não declarado"
        )
    return erros


def validar_links() -> list[str]:
    """Confere destinos locais declarados em links Markdown."""
    erros: list[str] = []
    padrao = re.compile(r"\]\(([^)]+)\)")
    for arquivo in RAIZ.rglob("*.md"):
        for destino in padrao.findall(arquivo.read_text(encoding="utf-8")):
            caminho = destino.split("#", 1)[0].strip()
            if (
                not caminho
                or "://" in caminho
                or caminho.startswith(("mailto:", "<"))
                or caminho in {"URL", "{URL}", "caminho"}
            ):
                continue
            resolvido = (arquivo.parent / caminho).resolve()
            if not resolvido.exists():
                erros.append(
                    f"{arquivo.relative_to(RAIZ)}: link ausente: {caminho}"
                )
    return erros


def main() -> int:
    """Executa todas as verificações e retorna código adequado ao terminal."""
    erros: list[str] = []
    for diretorio in sorted(SKILLS.iterdir()):
        if diretorio.is_dir():
            erros.extend(validar_skill(diretorio))
    erros.extend(validar_sequencias())
    erros.extend(validar_pares_de_asset())
    erros.extend(validar_metodologia())
    erros.extend(validar_links())
    if erros:
        print("Thothfy reprovado:")
        for erro in erros:
            print(f"- {erro}")
        return 1
    total = sum(1 for item in SKILLS.iterdir() if item.is_dir())
    print(f"Thothfy aprovado: {total} skills e 3 sequências válidas.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
