#!/usr/bin/env python3
"""Valida a estrutura, as sequências e as dependências das skills do Thothfy."""

from __future__ import annotations

import hashlib
import json
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
    "thothfy-brainstorm": (
        "thothfy-brainstorm-00-triagem",
        "thothfy-brainstorm-01-entrevista",
        "thothfy-brainstorm-02-pesquisa",
        "thothfy-brainstorm-03-sintese",
        "thothfy-brainstorm-04-validacao",
    ),
    "thothfy-estrategia": (
        "thothfy-estrategia-00-briefing-cliente",
        "thothfy-estrategia-01-pesquisa-mercado",
        "thothfy-estrategia-02-campanha",
        "thothfy-estrategia-03-calendario",
    ),
    "thothfy-planejamento": (
        "thothfy-planejamento-00-triagem",
        "thothfy-planejamento-01-saneamento",
        "thothfy-planejamento-02-pesquisa",
        "thothfy-planejamento-03-oportunidades",
        "thothfy-planejamento-04-briefing",
        "thothfy-planejamento-05-producao",
        "thothfy-planejamento-06-auditoria",
    ),
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
    """Confere nomes exatos e limita a numeração aos fluxos cronológicos."""
    erros: list[str] = []
    nomes = {item.name for item in SKILLS.iterdir() if item.is_dir()}
    legados = sorted(set(nomes) & NOMES_LEGADOS)
    if legados:
        erros.append(f"skills estratégicas sem número: {legados}")
    sequenciadas = {
        nome
        for prefixo in SEQUENCIAS
        for nome in nomes
        if nome.startswith(f"{prefixo}-")
        and re.match(rf"^{re.escape(prefixo)}-\d{{2}}-", nome)
    }
    esperadas = {
        nome for sequencia in SEQUENCIAS.values() for nome in sequencia
    }
    if sequenciadas != esperadas:
        erros.append(
            "skills sequenciadas divergentes; esperado "
            f"{sorted(esperadas)}, encontrado {sorted(sequenciadas)}"
        )
    numeradas_fora_dos_fluxos = sorted(
        nome
        for nome in nomes
        if re.search(r"-\d{2}-", nome) and nome not in esperadas
    )
    if numeradas_fora_dos_fluxos:
        erros.append(
            "numeração fora dos três fluxos cronológicos: "
            f"{numeradas_fora_dos_fluxos}"
        )
    for prefixo, sequencia in SEQUENCIAS.items():
        numeros = [
            int(re.search(r"-(\d{2})-", nome).group(1))
            for nome in sequencia
        ]
        if numeros != list(range(len(sequencia))):
            erros.append(
                f"{prefixo}: sequência interna inválida: {numeros}"
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
        "brand/README.md",
        "brand/manifest.json",
        "brand/logo/icon.svg",
        "brand/logo/icon.png",
        "docs/README.md",
        "docs/user/README.md",
        "docs/user/00-visao-geral.md",
        "docs/user/01-pre-requisitos.md",
        "docs/user/02-instalacao.md",
        "docs/user/03-contexto-e-marca.md",
        "docs/user/04-primeiro-brainstorm.md",
        "docs/user/05-primeira-campanha.md",
        "docs/user/06-primeiro-pacote.md",
        "docs/user/07-peca-avulsa.md",
        "docs/user/08-validacao-e-correcoes.md",
        "docs/user/09-atualizacao-e-reparo.md",
        "docs/user/10-solucao-de-problemas.md",
        "docs/user/reading-order.txt",
        "docs/method/README.md",
        "docs/method/00-arquitetura.md",
        "docs/method/01-setup-e-runtime.md",
        "docs/method/02-contexto-fontes-e-precedencia.md",
        "docs/method/03-catalogo-e-pareamento.md",
        "docs/method/04-sequencias-e-numeracao.md",
        "docs/method/05-artefatos-e-estados.md",
        "docs/method/06-contrato-de-skill.md",
        "docs/method/07-validacao-e-testes.md",
        "docs/method/08-evolucao-do-framework.md",
        "templates/brainstorm.md",
        "templates/fontes-projeto.md",
        ".ebook/build-ebook.sh",
        ".ebook/metadata.yaml",
        ".ebook/pdf.css",
        ".ebook/epub.css",
        ".ebook/template.html",
        "ebook/README.md",
        "ebook/VERSION",
        "ebook/build.json",
        "package.json",
        "RELEASING.md",
        "examples/cli/README.md",
        "src/cli.ts",
        "tests/cli.test.ts",
        ".github/workflows/ci.yml",
        ".github/workflows/release.yml",
        "release-please-config.json",
        ".release-please-manifest.json",
        "skills/thothfy-setup/scripts/inventariar-fontes-projeto.py",
    )
    for relativo in exigidos:
        if not (RAIZ / relativo).is_file():
            erros.append(f"arquivo metodológico ausente: {relativo}")
    documento_sequencias = (
        RAIZ / "docs" / "method" / "04-sequencias-e-numeracao.md"
    )
    if documento_sequencias.is_file():
        texto_sequencias = documento_sequencias.read_text(encoding="utf-8")
        for sequencia in SEQUENCIAS.values():
            for nome in sequencia:
                if nome not in texto_sequencias:
                    erros.append(
                        "documentação de sequência sem skill: "
                        f"{nome}"
                    )
    indice_usuario = RAIZ / "docs" / "user" / "README.md"
    if indice_usuario.is_file():
        texto_indice_usuario = indice_usuario.read_text(encoding="utf-8")
        for numero in range(11):
            if f"]({numero:02d}-" not in texto_indice_usuario:
                erros.append(
                    "índice do usuário sem capítulo: "
                    f"{numero:02d}"
                )
    indice_metodo = RAIZ / "docs" / "method" / "README.md"
    if indice_metodo.is_file():
        texto_indice_metodo = indice_metodo.read_text(encoding="utf-8")
        for numero in range(9):
            if f"]({numero:02d}-" not in texto_indice_metodo:
                erros.append(
                    "índice do método sem capítulo: "
                    f"{numero:02d}"
                )
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
        "thothfy doctor --json",
        "thothfy init --dry-run",
        "thothfy context scan",
        "thothfy doctor --strict",
        ".thothfy/templates/",
        ".thothfy/context/",
        "brainstorms/",
        "content/",
        "AGENTS.md",
        "VERSAO.md",
        "FONTES-PROJETO.md",
        "Descoberta de contexto do projeto",
        "templates/fontes-projeto.md",
        "submódulos Git",
        "nunca sobrescreve",
        "`brand/` existir",
        "todos os Markdown do diretório",
        ".thothfy/docs/",
        ".thothfy/ebook/",
        ".thothfy/brand/",
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


def validar_cli_e_release() -> list[str]:
    """Confere o pacote público e a versão única de todos os artefatos."""
    erros: list[str] = []
    pacote = json.loads((RAIZ / "package.json").read_text(encoding="utf-8"))
    lock = json.loads((RAIZ / "package-lock.json").read_text(encoding="utf-8"))
    manifesto_release = json.loads(
        (RAIZ / ".release-please-manifest.json").read_text(encoding="utf-8")
    )
    versao_match = re.search(
        r"^\d+\.\d+\.\d+$",
        (RAIZ / "ebook" / "VERSION").read_text(encoding="utf-8"),
        flags=re.MULTILINE,
    )
    versao_ebook = versao_match.group(0) if versao_match else ""
    versao = pacote.get("version")
    if not re.fullmatch(r"\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?", versao or ""):
        erros.append(f"package.json: SemVer inválido: {versao}")
    fontes_versao = {
        "package-lock.json": lock.get("version"),
        "package-lock.json#packages": lock.get("packages", {})
        .get("", {})
        .get("version"),
        ".release-please-manifest.json": manifesto_release.get("."),
        "ebook/VERSION": versao_ebook,
    }
    for fonte, valor in fontes_versao.items():
        if valor != versao:
            erros.append(
                f"versão única divergente em {fonte}: {valor}; esperado {versao}"
            )
    if pacote.get("name") != "@promovaweb/thothfy":
        erros.append("package.json: nome público precisa ser @promovaweb/thothfy")
    if pacote.get("private") is not None:
        erros.append("package.json: pacote público não pode declarar private")
    if pacote.get("bin", {}).get("thothfy") != "bin/thothfy.cjs":
        erros.append("package.json: bin thothfy divergente")
    scripts = pacote.get("scripts", {})
    for nome in (
        "build",
        "test",
        "release:sync",
        "release:check",
        "npm:validate-package",
        "publish:npm",
        "prepack",
        "validar",
    ):
        if nome not in scripts:
            erros.append(f"package.json: script ausente: {nome}")
    arquivos_publicos = set(pacote.get("files", []))
    for caminho in (
        "bin",
        "dist",
        "skills",
        "docs",
        "ebook",
        "brand",
        "examples",
    ):
        if caminho not in arquivos_publicos:
            erros.append(f"package.json: payload público ausente: {caminho}")
    teste_cli = (RAIZ / "tests" / "cli.test.ts").read_text(encoding="utf-8")
    for trecho in (
        "dry-run apresenta o plano",
        "init instala o framework",
        "preserva arquivos do usuário",
        "doctor não altera nenhum arquivo",
        "context ready exige empresa",
        "instalação recusa .thothfy",
        "sem alterar FONTES-PROJETO.md",
    ):
        if trecho not in teste_cli:
            erros.append(f"tests/cli.test.ts: cenário ausente: {trecho}")
    workflow = (
        RAIZ / ".github" / "workflows" / "release.yml"
    ).read_text(encoding="utf-8")
    for trecho in (
        "googleapis/release-please-action@v5",
        "npm run release:sync",
        "npm run npm:validate-package",
        "npm run publish:npm",
        "id-token: write",
    ):
        if trecho not in workflow:
            erros.append(f"workflow de release sem contrato: {trecho}")
    return erros


def sha256(arquivo: Path) -> str:
    """Calcula o digest usado pelo manifesto público do ebook."""
    digest = hashlib.sha256()
    with arquivo.open("rb") as entrada:
        for bloco in iter(lambda: entrada.read(1024 * 1024), b""):
            digest.update(bloco)
    return digest.hexdigest()


def validar_ebook() -> list[str]:
    """Confere ordem, edição, artefatos e manifesto do guia do usuário."""
    erros: list[str] = []
    ordem_path = RAIZ / "docs" / "user" / "reading-order.txt"
    if not ordem_path.is_file():
        return ["ebook: reading-order.txt ausente"]
    ordem = [
        linha.strip()
        for linha in ordem_path.read_text(encoding="utf-8").splitlines()
        if linha.strip() and not linha.lstrip().startswith("#")
    ]
    encontrados = {
        str(item.relative_to(RAIZ))
        for item in (RAIZ / "docs" / "user").glob("*.md")
    }
    if len(ordem) != len(set(ordem)):
        erros.append("ebook: reading-order.txt contém caminhos repetidos")
    if set(ordem) != encontrados:
        erros.append(
            "ebook: ordem de leitura diverge dos Markdown de docs/user/"
        )
    if ordem and ordem[0] != "docs/user/README.md":
        erros.append("ebook: primeiro documento deve ser docs/user/README.md")

    versao_path = RAIZ / "ebook" / "VERSION"
    if not versao_path.is_file():
        return erros + ["ebook: VERSION ausente"]
    versao_match = re.search(
        r"^\d+\.\d+\.\d+$",
        versao_path.read_text(encoding="utf-8"),
        flags=re.MULTILINE,
    )
    versao = versao_match.group(0) if versao_match else ""
    if not re.fullmatch(r"\d+\.\d+\.\d+", versao):
        erros.append(f"ebook: versão inválida: {versao}")
    stem = f"Thothfy-Guia-do-Usuario-v{versao}"
    artefatos = {
        "pdf": RAIZ / "ebook" / f"{stem}.pdf",
        "epub": RAIZ / "ebook" / f"{stem}.epub",
    }
    for formato, arquivo in artefatos.items():
        if not arquivo.is_file():
            erros.append(f"ebook: artefato {formato.upper()} ausente")

    pacote_path = RAIZ / "package.json"
    if pacote_path.is_file():
        pacote = json.loads(pacote_path.read_text(encoding="utf-8"))
        scripts = pacote.get("scripts", {})
        if scripts.get("ebook") != "bash .ebook/build-ebook.sh":
            erros.append("ebook: script npm ebook divergente")
        if scripts.get("ebook:verify") != "bash .ebook/build-ebook.sh --check":
            erros.append("ebook: script npm ebook:verify divergente")

    css_path = RAIZ / ".ebook" / "pdf.css"
    if css_path.is_file():
        css = css_path.read_text(encoding="utf-8")
        for trecho in (
            "pdf-design-system: 1.0.0",
            "font-family: var(--sans)",
            "background: var(--brand-white)",
        ):
            if trecho not in css:
                erros.append(f"ebook: contrato visual ausente: {trecho}")

    manifesto_path = RAIZ / "ebook" / "build.json"
    if not manifesto_path.is_file():
        return erros + ["ebook: build.json ausente"]
    manifesto = json.loads(manifesto_path.read_text(encoding="utf-8"))
    if manifesto.get("version") != versao:
        erros.append("ebook: versão do manifesto diverge de VERSION")
    metadados = set(manifesto.get("document_metadata", {}))
    if metadados != encontrados:
        erros.append("ebook: classificação documental incompleta")
    for formato, arquivo in artefatos.items():
        if not arquivo.is_file():
            continue
        registrado = (
            manifesto.get("artifacts", {})
            .get(formato, {})
            .get("sha256")
        )
        if registrado != sha256(arquivo):
            erros.append(f"ebook: hash {formato.upper()} divergente")
    return erros


def validar_testes_e_exemplos() -> list[str]:
    """Confere a evidência executável do ciclo de validação de assets."""
    erros: list[str] = []
    teste = RAIZ / "tests" / "test_validacao_assets.py"
    if not teste.is_file():
        erros.append("tests/test_validacao_assets.py: teste ausente")
    else:
        texto_teste = teste.read_text(encoding="utf-8")
        for trecho in (
            "test_framework_completo_e_pareado",
            "test_brand_minuscula_entra_no_inventario",
            "test_candidato_exercita_proibicoes_reais",
            "test_correcao_remove_ocorrencias_e_aprova_hard_gate",
            "test_email_reprova_preco_e_cta_concorrente",
            "test_blog_reprova_molde_semantico_repetido",
            "test_imagem_reprova_dimensao_gradiente_e_paleta",
            "test_sequencias_possuem_nomes_exatos",
            "test_documentacao_completa_e_instalada_pelo_setup",
            "test_ebook_ordena_todos_os_capitulos",
            "test_ebook_publicado_esta_sincronizado",
            "test_ebook_remove_classificacao_interna",
        ):
            if trecho not in texto_teste:
                erros.append(f"teste de validação ausente: {trecho}")
    exemplo = RAIZ / "examples" / "validacao-assets"
    arquivos_exemplo = {
        "README.md",
        "brand/manual-da-marca.md",
        "brief.md",
        "01-candidato-reprovado.md",
        "02-relatorio-reprovacao.md",
        "03-asset-corrigido.md",
        "04-relatorio-aprovacao.md",
        "05-evidencia-testes.md",
        "casos/email-oferta/README.md",
        "casos/email-oferta/brief.md",
        "casos/email-oferta/fonte-oferta.md",
        "casos/email-oferta/01-candidato-reprovado.md",
        "casos/email-oferta/02-relatorio-reprovacao.md",
        "casos/email-oferta/03-asset-corrigido.md",
        "casos/email-oferta/04-relatorio-aprovacao.md",
        "casos/blog-estrutura-semantica/README.md",
        "casos/blog-estrutura-semantica/brief.md",
        "casos/blog-estrutura-semantica/01-candidato-reprovado.md",
        "casos/blog-estrutura-semantica/02-relatorio-reprovacao.md",
        "casos/blog-estrutura-semantica/03-asset-corrigido.md",
        "casos/blog-estrutura-semantica/04-relatorio-aprovacao.md",
        "casos/instagram-imagem-brand/README.md",
        "casos/instagram-imagem-brand/brief.md",
        "casos/instagram-imagem-brand/01-candidato-reprovado.svg",
        "casos/instagram-imagem-brand/02-relatorio-reprovacao.md",
        "casos/instagram-imagem-brand/03-asset-corrigido.svg",
        "casos/instagram-imagem-brand/04-relatorio-aprovacao.md",
    }
    for relativo in sorted(arquivos_exemplo):
            if not (exemplo / relativo).is_file():
                erros.append(f"exemplo de validação ausente: {relativo}")
    exemplo_inicial = RAIZ / "examples" / "primeiro-projeto"
    for relativo in (
        "README.md",
        "01-entrada.md",
        "02-relatorio-setup.md",
        "03-pedido.md",
        "04-resultado.md",
    ):
        if not (exemplo_inicial / relativo).is_file():
            erros.append(f"exemplo inicial ausente: {relativo}")
    if (exemplo / "02-relatorio-reprovacao.md").is_file():
        reprovacao = (
            exemplo / "02-relatorio-reprovacao.md"
        ).read_text(encoding="utf-8")
        for trecho in (
            "**Veredito:** reprovado",
            "## Hard gate de proibições",
            "`thothfy-especialista-linkedin`",
        ):
            if trecho not in reprovacao:
                erros.append(f"relatório reprovado sem evidência: {trecho}")
    if (exemplo / "04-relatorio-aprovacao.md").is_file():
        aprovacao = (
            exemplo / "04-relatorio-aprovacao.md"
        ).read_text(encoding="utf-8")
        for trecho in (
            "**Veredito:** aprovado",
            "**Ocorrências remanescentes:** zero",
            "brand/manual-da-marca.md",
        ):
            if trecho not in aprovacao:
                erros.append(f"relatório aprovado sem evidência: {trecho}")
    if (exemplo / "05-evidencia-testes.md").is_file():
        evidencia = (
            exemplo / "05-evidencia-testes.md"
        ).read_text(encoding="utf-8")
        for trecho in (
            "2026-07-30",
            "Ran 14 tests",
            "Thothfy aprovado: 71 skills",
        ):
            if trecho not in evidencia:
                erros.append(f"execução de testes sem registro: {trecho}")
    return erros


def validar_links() -> list[str]:
    """Confere destinos locais declarados em links Markdown."""
    erros: list[str] = []
    padrao = re.compile(r"\]\(([^)]+)\)")
    for arquivo in RAIZ.rglob("*.md"):
        relativo_arquivo = arquivo.relative_to(RAIZ)
        if set(relativo_arquivo.parts) & {
            ".git",
            "node_modules",
            "dist",
            "artifacts",
            "release-assets",
        }:
            continue
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
    erros.extend(validar_cli_e_release())
    erros.extend(validar_ebook())
    erros.extend(validar_testes_e_exemplos())
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
