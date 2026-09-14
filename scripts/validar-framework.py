#!/usr/bin/env python3
"""Valida o contrato operacional do framework Inboundfy."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"
REQUIRED_SECTIONS = (
    "## Contexto exigido",
    "## Entrada esperada",
    "## Fluxo",
    "## Saída",
    "## Validação",
    "## Idempotência",
)
CORE_SKILLS = {
    "inboundfy",
    "inboundfy-setup",
    "inboundfy-acervo",
    "inboundfy-extrair-faq",
    "inboundfy-processar-acervo",
    "inboundfy-pesquisa-acervo",
    "inboundfy-base-editorial",
    "inboundfy-estrategia-acervo",
    "inboundfy-personas",
    "inboundfy-voz",
    "inboundfy-planejamento",
    "inboundfy-pipeline",
    "inboundfy-catalogo",
    "inboundfy-producao",
    "inboundfy-anti-slop",
    "inboundfy-anti-slop-codigo",
    "inboundfy-copywriting",
    "inboundfy-copy-editing",
    "inboundfy-seo",
    "inboundfy-geo",
    "inboundfy-estrategia",
    "inboundfy-pesquisa-cliente",
    "inboundfy-concorrentes",
    "inboundfy-oferta",
    "inboundfy-psicologia",
    "inboundfy-cro",
    "inboundfy-metricas",
    "inboundfy-atribuicao",
    "inboundfy-experimentacao",
    "inboundfy-lancamento",
    "inboundfy-lead-magnet",
    "inboundfy-produto-marketing",
    "inboundfy-criativos-anuncios",
    "inboundfy-anuncios",
    "inboundfy-aso",
    "inboundfy-retencao",
    "inboundfy-parcerias",
    "inboundfy-comunidade",
    "inboundfy-distribuicao",
    "inboundfy-email-frio",
    "inboundfy-eventos",
    "inboundfy-ferramentas-gratuitas",
    "inboundfy-influenciadores",
    "inboundfy-conselho-marketing",
    "inboundfy-loops",
    "inboundfy-onboarding",
    "inboundfy-paywall",
    "inboundfy-popups",
    "inboundfy-pricing",
    "inboundfy-seo-programatico",
    "inboundfy-prospeccao",
    "inboundfy-relacoes-publicas",
    "inboundfy-referencias",
    "inboundfy-revops",
    "inboundfy-enablement-vendas",
    "inboundfy-dados-estruturados",
    "inboundfy-auditoria-seo",
    "inboundfy-arquitetura-site",
    "inboundfy-sms",
    "inboundfy-signup",
    "inboundfy-social",
}
PROJECT_TEMPLATES = {
    "inbound.md",
    "estrategia.md",
    "voz.md",
    "personas.md",
    "proibicoes.md",
    "dicionario.md",
    "pipeline.md",
    "README.md",
}
_OLD_NAME = "tho" + "thfy"
FORBIDDEN_IDENTITIES = (
    _OLD_NAME,
    "." + _OLD_NAME,
    "@promovaweb/" + _OLD_NAME,
    "tho" + "tify",
)
MASTER_REFERENCES = (
    "inboundfy-processar-acervo",
    "inboundfy-extrair-faq",
    "inboundfy-pesquisa-acervo",
    "inboundfy-base-editorial",
    "inboundfy-estrategia-acervo",
    "inboundfy-planejamento",
    "inboundfy-producao",
    "inboundfy-anti-slop",
    "inboundfy-pipeline",
    "inboundfy-catalogo",
    ".inboundfy/voz.md",
    ".inboundfy/personas.md",
    ".inboundfy/proibicoes.md",
    ".inboundfy/dicionario.md",
)


def frontmatter(text: str) -> tuple[str, str] | None:
    match = re.match(r"^---\n(.*?)\n---\n", text, flags=re.DOTALL)
    if not match:
        return None
    block = match.group(1)
    lines = block.splitlines()
    name_value = next(
        (line.split(":", 1)[1].strip() for line in lines if line.startswith("name:")),
        None,
    )
    description_value: str | None = None
    for index, line in enumerate(lines):
        if not line.startswith("description:"):
            continue
        value = line.split(":", 1)[1].strip()
        if value in {">", "|", ">-", "|-", ">+", "|+"}:
            parts: list[str] = []
            for continuation in lines[index + 1 :]:
                if continuation and not continuation.startswith((" ", "\t")):
                    break
                parts.append(continuation.strip())
            description_value = " ".join(part for part in parts if part)
        else:
            description_value = value.strip('"')
        break
    if name_value is None or description_value is None:
        return None
    return name_value, description_value


def validate_skill(directory: Path) -> list[str]:
    errors: list[str] = []
    skill = directory / "SKILL.md"
    reference = directory / "REFERENCIA.md"
    if not skill.is_file():
        return [f"{directory.name}: SKILL.md ausente"]
    if not reference.is_file():
        errors.append(f"{directory.name}: REFERENCIA.md ausente")
    text = skill.read_text(encoding="utf-8")
    metadata = frontmatter(text)
    if metadata is None:
        errors.append(f"{directory.name}: frontmatter inválido")
    else:
        name, description = metadata
        if name != directory.name:
            errors.append(f"{directory.name}: frontmatter name aponta para {name}")
        if len(description) < 90:
            errors.append(f"{directory.name}: descrição curta demais")
    if reference.is_file() and "REFERENCIA.md" not in text:
        errors.append(f"{directory.name}: fluxo não aponta para REFERENCIA.md")
    for heading in REQUIRED_SECTIONS:
        if heading not in text:
            errors.append(f"{directory.name}: seção ausente: {heading}")
    if directory.name in CORE_SKILLS - {"inboundfy-setup"}:
        for expected in (
            ".inboundfy/inbound.md",
            ".inboundfy/framework/",
            "inboundfy-setup",
        ):
            if expected not in text:
                errors.append(f"{directory.name}: referência ausente: {expected}")
    if directory.name == "inboundfy-acervo":
        for expected in MASTER_REFERENCES:
            if expected not in text:
                errors.append(f"inboundfy-acervo: etapa ausente: {expected}")
    return errors


def validate_skills() -> list[str]:
    errors: list[str] = []
    directories = sorted(item for item in SKILLS.iterdir() if item.is_dir())
    names = {item.name for item in directories}
    errors.extend(
        f"skill essencial ausente: {name}"
        for name in sorted(CORE_SKILLS - names)
    )
    for directory in directories:
        errors.extend(validate_skill(directory))

    producers = {
        item.name.removeprefix("inboundfy-especialista-")
        for item in directories
        if item.name.startswith("inboundfy-especialista-")
    }
    validators = {
        item.name.removeprefix("inboundfy-validador-")
        for item in directories
        if item.name.startswith("inboundfy-validador-")
    }
    for suffix in sorted(producers - validators):
        errors.append(f"validador ausente para o canal: {suffix}")
    for suffix in sorted(validators - producers):
        errors.append(f"produtora ausente para o canal: {suffix}")
    return errors


def validate_project_contract() -> list[str]:
    errors: list[str] = []
    package = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))
    if package.get("name") != "@promovaweb/inboundfy":
        errors.append("package.json: name não é @promovaweb/inboundfy")
    if package.get("bin", {}).get("inboundfy") != "bin/inboundfy.cjs":
        errors.append("package.json: binário inboundfy ausente")
    for name in PROJECT_TEMPLATES:
        if not (ROOT / "templates" / "project" / name).is_file():
            errors.append(f"template ausente: templates/project/{name}")
    for path in (ROOT / "src").glob("*.ts"):
        text = path.read_text(encoding="utf-8")
        if any(identity in text for identity in FORBIDDEN_IDENTITIES[1:3]):
            errors.append(f"identidade antiga em {path.relative_to(ROOT)}")
    return errors


def validate_identity() -> list[str]:
    errors: list[str] = []
    suffixes = {".md", ".json", ".mjs", ".ts", ".cjs", ".py", ".txt", ".yaml", ".yml", ".sh", ".svg", ".lua"}
    for path in ROOT.rglob("*"):
        if not path.is_file() or ".git" in path.parts or path.suffix.lower() not in suffixes:
            continue
        text = path.read_text(encoding="utf-8", errors="ignore").casefold()
        if any(identity in text for identity in FORBIDDEN_IDENTITIES):
            errors.append(f"identidade antiga em {path.relative_to(ROOT)}")
    for path in ROOT.rglob("*"):
        if any(identity in path.name.casefold() for identity in FORBIDDEN_IDENTITIES):
            errors.append(f"nome antigo no caminho: {path.relative_to(ROOT)}")
    return errors


def main() -> int:
    errors = validate_skills() + validate_project_contract() + validate_identity()
    if errors:
        print("\n".join(f"ERRO: {error}" for error in errors), file=sys.stderr)
        return 1
    print("Framework Inboundfy válido: skills, contrato do consumidor e identidade conferidos.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
