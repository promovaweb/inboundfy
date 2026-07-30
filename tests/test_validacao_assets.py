"""Testes executáveis do contrato de validação de assets do Thothfy."""

from __future__ import annotations

import importlib.util
import json
import subprocess
import sys
import unittest
import xml.etree.ElementTree as ET
from pathlib import Path


RAIZ = Path(__file__).resolve().parents[1]
EXEMPLO = RAIZ / "examples" / "validacao-assets"
SCRIPT_INVENTARIO = (
    RAIZ
    / "skills"
    / "thothfy-setup"
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
        self.assertIn("Thothfy aprovado: 71 skills", resultado.stdout)

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
        self.assertIn("thothfy-especialista-linkedin", relatorio)

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
        self.assertIn("Ran 9 tests", evidencia)
        self.assertIn("Thothfy aprovado: 71 skills", evidencia)

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
