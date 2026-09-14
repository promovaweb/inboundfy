"""Testes executáveis do contrato de validação de assets do Inboundfy."""

from __future__ import annotations

import importlib.util
import json
import re
import subprocess
import sys
import unittest
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path


RAIZ = Path(__file__).resolve().parents[1]
EXEMPLO = RAIZ / "examples" / "validacao-assets"
SCRIPT_INVENTARIO = (
    RAIZ
    / "skills"
    / "inboundfy-setup"
    / "scripts"
    / "inventariar-fontes-projeto.py"
)
PROIBICOES_FIXTURE = (
    "No cenário atual",
    "É importante ressaltar",
    "robusta e inovadora",
    "Não é apenas",
    "Em suma",
)
SEQUENCIAS_ESPERADAS = {
    "brainstorm": (
        "inboundfy-brainstorm-00-triagem",
        "inboundfy-brainstorm-01-entrevista",
        "inboundfy-brainstorm-02-pesquisa",
        "inboundfy-brainstorm-03-sintese",
        "inboundfy-brainstorm-04-validacao",
    ),
    "estrategia": (
        "inboundfy-estrategia-00-briefing-cliente",
        "inboundfy-estrategia-01-pesquisa-mercado",
        "inboundfy-estrategia-02-campanha",
        "inboundfy-estrategia-03-calendario",
    ),
    "planejamento": (
        "inboundfy-planejamento-00-triagem",
        "inboundfy-planejamento-01-saneamento",
        "inboundfy-planejamento-02-pesquisa",
        "inboundfy-planejamento-03-oportunidades",
        "inboundfy-planejamento-04-briefing",
        "inboundfy-planejamento-05-producao",
        "inboundfy-planejamento-06-auditoria",
    ),
}


def carregar_inventario():
    """Carrega o utilitário do setup sem depender de pacote instalável."""
    spec = importlib.util.spec_from_file_location(
        "inventariar_fontes_projeto", SCRIPT_INVENTARIO
    )
    if spec is None or spec.loader is None:
        raise RuntimeError("Não foi possível carregar o inventário")
    modulo = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(modulo)
    return modulo


class ValidacaoAssetsTest(unittest.TestCase):
    """Confere pareamento, hard gates, brand e o exemplo documentado."""

    def test_framework_completo_e_pareado(self) -> None:
        """Executa o validador estrutural como usuário do repositório."""
        resultado = subprocess.run(
            [sys.executable, str(RAIZ / "scripts" / "validar-framework.py")],
            cwd=RAIZ,
            check=False,
            capture_output=True,
            text=True,
        )
        self.assertEqual(resultado.returncode, 0, resultado.stdout)
        self.assertIn("Framework Inboundfy válido", resultado.stdout)

    def test_acervo_e_a_skill_mestre_do_fluxo(self) -> None:
        """Confere as etapas que a skill mestre precisa coordenar."""
        skill = (RAIZ / "skills" / "inboundfy-acervo" / "SKILL.md").read_text(
            encoding="utf-8"
        )
        for etapa in (
            "inboundfy-processar-acervo",
            "inboundfy-extrair-faq",
            "inboundfy-pesquisa-acervo",
            "inboundfy-base-editorial",
            "inboundfy-estrategia-acervo",
            "inboundfy-producao",
            "inboundfy-anti-slop",
            "inboundfy-pipeline",
            "inboundfy-catalogo",
            ".inboundfy/voz.md",
            ".inboundfy/personas.md",
            ".inboundfy/proibicoes.md",
            ".inboundfy/dicionario.md",
        ):
            self.assertIn(etapa, skill)

    def test_brand_minuscula_entra_no_inventario(self) -> None:
        """Inclui Markdown minúsculo de brand/ e exclui equivalente externo."""
        modulo = carregar_inventario()
        encontrados = modulo.inventariar(EXEMPLO, set())
        caminhos = {item["caminho"] for item in encontrados}
        self.assertIn("brand/manual-da-marca.md", caminhos)
        self.assertNotIn("brief.md", caminhos)

    def test_cli_do_inventario_registra_brand(self) -> None:
        """Valida a saída JSON pública do comando usado pelo setup."""
        resultado = subprocess.run(
            [sys.executable, str(SCRIPT_INVENTARIO), str(EXEMPLO)],
            check=True,
            capture_output=True,
            text=True,
        )
        caminhos = {item["caminho"] for item in json.loads(resultado.stdout)}
        self.assertIn("brand/manual-da-marca.md", caminhos)

    def test_candidato_exercita_proibicoes_reais(self) -> None:
        """Mantém a fixture reprovada capaz de testar cada achado registrado."""
        candidato = (EXEMPLO / "01-candidato-reprovado.md").read_text(
            encoding="utf-8"
        )
        relatorio = (EXEMPLO / "02-relatorio-reprovacao.md").read_text(
            encoding="utf-8"
        )
        for trecho in PROIBICOES_FIXTURE:
            self.assertIn(trecho, candidato)
            self.assertIn(f"`{trecho}`", relatorio)
        self.assertIn("**Veredito:** reprovado", relatorio)
        self.assertIn("inboundfy-especialista-linkedin", relatorio)

    def test_correcao_remove_ocorrencias_e_aprova_hard_gate(self) -> None:
        """Comprova que a segunda rodada remove os vetos e registra zero."""
        corrigido = (EXEMPLO / "03-asset-corrigido.md").read_text(
            encoding="utf-8"
        )
        aprovacao = (EXEMPLO / "04-relatorio-aprovacao.md").read_text(
            encoding="utf-8"
        )
        for trecho in PROIBICOES_FIXTURE:
            self.assertNotIn(trecho, corrigido)
        self.assertIn("**Veredito:** aprovado", aprovacao)
        self.assertIn("**Ocorrências remanescentes:** zero", aprovacao)
        self.assertIn("brand/manual-da-marca.md", aprovacao)

    def test_evidencia_da_execucao_esta_registrada(self) -> None:
        """Mantém comando, data e resultado da suíte visíveis no exemplo."""
        evidencia = (EXEMPLO / "05-evidencia-testes.md").read_text(
            encoding="utf-8"
        )
        self.assertIn("2026-07-30", evidencia)
        self.assertIn("Ran 15 tests", evidencia)
        self.assertIn("Framework Inboundfy válido: 135 skills", evidencia)

    def test_sequencias_possuem_nomes_exatos(self) -> None:
        """Impede lacunas, sufixos trocados e numeração em outro grupo."""
        nomes = {
            item.name
            for item in (RAIZ / "skills").iterdir()
            if item.is_dir()
        }
        esperados = {
            nome
            for sequencia in SEQUENCIAS_ESPERADAS.values()
            for nome in sequencia
        }
        numerados = {
            nome
            for nome in nomes
            if any(f"-{numero:02d}-" in nome for numero in range(100))
        }
        self.assertEqual(numerados, esperados)

    def test_documentacao_completa_e_instalada_pelo_setup(self) -> None:
        """Confere percursos numerados e propriedade documental do setup."""
        user = sorted(
            item.name
            for item in (RAIZ / "docs" / "user").glob("[0-9][0-9]-*.md")
        )
        method = sorted(
            item.name
            for item in (RAIZ / "docs" / "method").glob("[0-9][0-9]-*.md")
        )
        self.assertEqual(len(user), 11)
        self.assertEqual(len(method), 9)
        self.assertTrue(user[0].startswith("00-"))
        self.assertTrue(user[-1].startswith("10-"))
        self.assertTrue(method[0].startswith("00-"))
        self.assertTrue(method[-1].startswith("08-"))
        setup = (
            RAIZ / "skills" / "inboundfy-setup" / "SKILL.md"
        ).read_text(encoding="utf-8")
        instalacao = (RAIZ / "INSTALACAO.md").read_text(encoding="utf-8")
        self.assertIn(".inboundfy/framework/docs/", setup)
        self.assertIn(".inboundfy/framework/ebook/", setup)
        self.assertIn(".inboundfy/framework/docs/", instalacao)
        self.assertIn(".inboundfy/framework/ebook/", instalacao)
        exemplo = RAIZ / "examples" / "primeiro-projeto"
        self.assertEqual(
            {
                item.name
                for item in exemplo.glob("*.md")
            },
            {
                "README.md",
                "01-entrada.md",
                "02-relatorio-setup.md",
                "03-pedido.md",
                "04-resultado.md",
            },
        )

    def test_ebook_ordena_todos_os_capitulos(self) -> None:
        """Impede capítulo ausente, repetido ou fora da ordem canônica."""
        ordem = [
            linha.strip()
            for linha in (
                RAIZ / "docs" / "user" / "reading-order.txt"
            ).read_text(encoding="utf-8").splitlines()
            if linha.strip()
        ]
        encontrados = {
            str(item.relative_to(RAIZ))
            for item in (RAIZ / "docs" / "user").glob("*.md")
        }
        self.assertEqual(len(ordem), len(set(ordem)))
        self.assertEqual(set(ordem), encontrados)
        self.assertEqual(ordem[0], "docs/user/README.md")
        self.assertEqual(ordem[-1], "docs/user/10-solucao-de-problemas.md")

    def test_ebook_publicado_esta_sincronizado(self) -> None:
        """Executa a mesma verificação sem escrita oferecida ao mantenedor."""
        resultado = subprocess.run(
            ["bash", ".ebook/build-ebook.sh", "--check"],
            cwd=RAIZ,
            check=False,
            capture_output=True,
            text=True,
        )
        self.assertEqual(
            resultado.returncode,
            0,
            resultado.stdout + resultado.stderr,
        )
        self.assertIn(
            "edição v1.1.0 sincronizada com docs/user/",
            resultado.stdout,
        )
        manifesto = json.loads(
            (RAIZ / "ebook" / "build.json").read_text(encoding="utf-8")
        )
        self.assertEqual(manifesto["version"], "1.1.0")
        self.assertEqual(len(manifesto["document_metadata"]), 12)

    def test_ebook_remove_classificacao_interna(self) -> None:
        """Mantém metadados no manifesto, sem exibi-los ao leitor."""
        versao_match = re.search(
            r"^\d+\.\d+\.\d+$",
            (RAIZ / "ebook" / "VERSION").read_text(encoding="utf-8"),
            flags=re.MULTILINE,
        )
        self.assertIsNotNone(versao_match)
        versao = versao_match.group(0)
        stem = f"Inboundfy-Guia-do-Usuario-v{versao}"
        pdf = RAIZ / "ebook" / f"{stem}.pdf"
        epub = RAIZ / "ebook" / f"{stem}.epub"
        texto_pdf = subprocess.run(
            ["pdftotext", str(pdf), "-"],
            check=True,
            capture_output=True,
            text=True,
        ).stdout
        self.assertNotIn("Classificação", texto_pdf)
        with zipfile.ZipFile(epub) as pacote:
            texto_epub = "\n".join(
                pacote.read(nome).decode("utf-8")
                for nome in pacote.namelist()
                if nome.endswith((".xhtml", ".html"))
            )
        self.assertNotIn("Classificação", texto_epub)

    def test_email_reprova_preco_e_cta_concorrente(self) -> None:
        """Confere correção factual e de CTA no exemplo de email."""
        caso = EXEMPLO / "casos" / "email-oferta"
        candidato = (caso / "01-candidato-reprovado.md").read_text(
            encoding="utf-8"
        )
        relatorio = (caso / "02-relatorio-reprovacao.md").read_text(
            encoding="utf-8"
        )
        corrigido = (caso / "03-asset-corrigido.md").read_text(
            encoding="utf-8"
        )
        aprovacao = (caso / "04-relatorio-aprovacao.md").read_text(
            encoding="utf-8"
        )
        self.assertIn("R$ 99", candidato)
        self.assertIn("R$ 79", relatorio)
        self.assertEqual(candidato.count("https://example.test/"), 2)
        self.assertIn("R$ 79", corrigido)
        self.assertNotIn("R$ 99", corrigido)
        self.assertEqual(corrigido.count("https://example.test/"), 1)
        self.assertIn("**Veredito:** aprovado", aprovacao)

    def test_blog_reprova_molde_semantico_repetido(self) -> None:
        """Confere o passe estrutural mesmo sem vocabulário vetado literal."""
        caso = EXEMPLO / "casos" / "blog-estrutura-semantica"
        candidato = (caso / "01-candidato-reprovado.md").read_text(
            encoding="utf-8"
        )
        relatorio = (caso / "02-relatorio-reprovacao.md").read_text(
            encoding="utf-8"
        )
        corrigido = (caso / "03-asset-corrigido.md").read_text(
            encoding="utf-8"
        )
        self.assertEqual(candidato.count("## O que é"), 3)
        self.assertEqual(candidato.count("Por exemplo"), 3)
        self.assertIn("Molde definição-exemplo-benefício", relatorio)
        self.assertNotIn("## O que é", corrigido)
        self.assertNotIn("Por exemplo", corrigido)

    def test_imagem_reprova_dimensao_gradiente_e_paleta(self) -> None:
        """Confere regras visuais do brief e do manual em SVG executável."""
        caso = EXEMPLO / "casos" / "instagram-imagem-brand"
        candidato_path = caso / "01-candidato-reprovado.svg"
        corrigido_path = caso / "03-asset-corrigido.svg"
        candidato = candidato_path.read_text(encoding="utf-8")
        corrigido = corrigido_path.read_text(encoding="utf-8")
        raiz_candidato = ET.parse(candidato_path).getroot()
        raiz_corrigido = ET.parse(corrigido_path).getroot()
        self.assertEqual(raiz_candidato.attrib["height"], "1080")
        self.assertIn("linearGradient", candidato)
        self.assertIn("#FF00FF", candidato)
        self.assertEqual(raiz_corrigido.attrib["height"], "1350")
        self.assertNotIn("linearGradient", corrigido)
        self.assertNotIn("#FF00FF", corrigido)
        self.assertIn("#173F35", corrigido)
        self.assertIn("#E7EFE9", corrigido)


if __name__ == "__main__":
    unittest.main()
