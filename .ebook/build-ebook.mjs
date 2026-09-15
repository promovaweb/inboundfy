/**
 * Gera e confere o ebook do Inboundfy.
 *
 * A orquestração é Node.js. Pandoc, WeasyPrint, ImageMagick e as ferramentas
 * de inspeção de PDF/XML continuam sendo executáveis externos do ambiente.
 */

import { createHash } from "node:crypto";
import { constants, readFileSync } from "node:fs";
import { access, copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, posix, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { classificationFrom } from "./extract-document-metadata.mjs";
import { pruneEditions } from "./prune-editions.mjs";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, "..");
const DOCS_ROOT = join(ROOT, "docs", "user");
const EBOOK_ROOT = join(ROOT, "ebook");
const BUILD_ROOT = join(SCRIPT_DIR, "build");
const VERSION_FILE = join(EBOOK_ROOT, "VERSION");
const ORDER_FILE = join(DOCS_ROOT, "reading-order.txt");
const MANIFEST = join(EBOOK_ROOT, "build.json");
const PDF_STYLE = join(SCRIPT_DIR, "pdf.css");
const EPUB_STYLE = join(SCRIPT_DIR, "epub.css");
const TEMPLATE = join(SCRIPT_DIR, "template.html");
const METADATA = join(SCRIPT_DIR, "metadata.yaml");
const METADATA_EXTRACTOR = join(SCRIPT_DIR, "extract-document-metadata.mjs");
const RETENTION_SCRIPT = join(SCRIPT_DIR, "prune-editions.mjs");
const BUILD_SCRIPT = join(SCRIPT_DIR, "build-ebook.mjs");
const LOGO_SVG = join(ROOT, "brand", "logo", "icon.svg");
const LOGO_PNG = join(ROOT, "brand", "logo", "icon.png");
const FONT_STYLE = join(ROOT, "brand", "fonts", "fonts.css");
const REQUIRED_BINARIES = ["pandoc", "weasyprint", "unzip", "xmllint", "magick", "fc-match", "pdftohtml"];

function fail(message) {
  throw new Error(message);
}

function relativePath(path) {
  return relative(ROOT, path).split("\\").join("/");
}

/** Executa uma ferramenta externa e preserva stdout para as validações. */
function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd,
    encoding: "utf8",
    input: options.input,
    maxBuffer: 32 * 1024 * 1024,
  });
  if (result.error) throw new Error(`'${command}' não encontrado ou não pôde ser executado: ${result.error.message}`);
  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout || "").trim();
    throw new Error(`${command} falhou${detail ? `: ${detail}` : "."}`);
  }
  return result.stdout || "";
}

async function commandExists(command) {
  const pathEntries = (process.env.PATH ?? "").split(":");
  for (const directory of pathEntries) {
    try {
      await access(join(directory || ".", command), constants.X_OK);
      return true;
    } catch {
      // Continua a busca nas demais entradas do PATH.
    }
  }
  return false;
}

async function sha256(path) {
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

async function allFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await allFiles(path));
    else if (entry.isFile()) files.push(path);
  }
  return files.sort();
}

function versionFromFile() {
  const text = readFileSync(VERSION_FILE, "utf8");
  const match = text.match(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/m);
  if (!match) fail("ebook/VERSION deve conter SemVer estável, por exemplo 1.0.0.");
  return match[0];
}

async function requiredSources() {
  const sources = [
    VERSION_FILE, ORDER_FILE, PDF_STYLE, EPUB_STYLE, TEMPLATE, METADATA,
    METADATA_EXTRACTOR, RETENTION_SCRIPT,
    BUILD_SCRIPT, LOGO_SVG, LOGO_PNG, FONT_STYLE,
    join(ROOT, "brand", "fonts", "inter-latin.woff2"),
    join(ROOT, "brand", "fonts", "manrope-latin.woff2"),
  ];
  for (const source of sources) {
    try { await readFile(source); } catch { fail(`fonte obrigatória ausente: ${relativePath(source)}`); }
  }
  return sources;
}

async function pageInputs() {
  const order = (await readFile(ORDER_FILE, "utf8")).split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
  if (!order.length) fail("docs/user/reading-order.txt está vazio.");
  const paths = [];
  const inputs = [];
  const seen = new Set();
  for (const value of order) {
    if (!/^docs\/user\/.*\.md$/.test(value)) fail(`página fora de docs/user/reading-order.txt: ${value}`);
    if (seen.has(value)) fail(`página duplicada: ${value}`);
    const path = join(ROOT, value);
    try { await readFile(path); } catch { fail(`página ausente: ${value}`); }
    seen.add(value);
    paths.push(path);
    inputs.push(value.slice("docs/user/".length));
  }
  const markdownPages = (await allFiles(DOCS_ROOT)).filter((path) => path.endsWith(".md")).map(relativePath);
  for (const page of markdownPages) if (!seen.has(page)) fail(`página não ordenada em docs/user/reading-order.txt: ${page}`);
  return { paths, inputs };
}

async function sourceFiles(sources) {
  return [...(await allFiles(DOCS_ROOT)), ...sources].sort();
}

async function sourceSha(files) {
  const pieces = [];
  for (const path of files) pieces.push(`${relativePath(path)}\0${await sha256(path)}\n`);
  return createHash("sha256").update(pieces.join(""), "utf8").digest("hex");
}

function versionedPaths(version) {
  const stem = `Inboundfy-Guia-do-Usuario-v${version}`;
  return {
    stem,
    pdf: join(EBOOK_ROOT, `${stem}.pdf`),
    epub: join(EBOOK_ROOT, `${stem}.epub`),
    pdfAlias: join(EBOOK_ROOT, "ebook-inboundfy.pdf"),
    epubAlias: join(EBOOK_ROOT, "ebook-inboundfy.epub"),
  };
}

async function ensureFile(path, message) {
  try { await readFile(path); } catch { fail(message); }
}

function isExternal(target) {
  return /^[a-z][a-z\d+.-]*:/i.test(target) || target.startsWith("//");
}

function decodeTarget(target) {
  try { return decodeURIComponent(target); } catch { return target; }
}

function validatePdfLinks(pdf) {
  const xml = run("pdftohtml", ["-xml", "-hidden", "-i", pdf, "-stdout"]);
  const pages = new Set([...xml.matchAll(/<page\b[^>]*\bnumber=["']([^"']+)["']/gi)].map((match) => match[1]));
  const failures = [];
  for (const match of xml.matchAll(/\bhref=["']([^"']+)["']/gi)) {
    const target = decodeTarget(match[1]);
    const hash = target.indexOf("#");
    const fragment = hash < 0 ? "" : target.slice(hash + 1);
    if (isExternal(target)) failures.push(`PDF -> link externo: ${target}`);
    else if (fragment && !pages.has(fragment)) failures.push(`PDF -> página interna ausente: ${target}`);
  }
  return failures;
}

function zipEntries(epub) {
  return run("unzip", ["-Z1", epub]).split(/\r?\n/).filter(Boolean);
}

function validateEpubLinks(epub) {
  const names = new Set(zipEntries(epub));
  const documents = new Map();
  for (const name of [...names].filter((entry) => entry.endsWith(".xhtml") || entry.endsWith(".html")).sort()) {
    const text = run("unzip", ["-p", epub, name]);
    const ids = new Set([...text.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]));
    documents.set(name, { text, ids });
  }
  const failures = [];
  for (const [name, document] of documents) {
    const tags = [...document.text.matchAll(/<([a-z][\w:-]*)\b[^>]*>/gi)];
    for (const tagMatch of tags) {
      const tag = tagMatch[0];
      const tagName = tagMatch[1].toLowerCase();
      const attribute = tag.match(/\b(href|src)\s*=\s*["']([^"']+)["']/i);
      if (!attribute) continue;
      const target = decodeTarget(attribute[2]);
      const clickable = tagName === "a" && attribute[1].toLowerCase() === "href";
      if (clickable && isExternal(target)) {
        failures.push(`${name} -> link externo: ${target}`);
        continue;
      }
      if (isExternal(target)) continue;
      const hash = target.indexOf("#");
      const pathPart = hash < 0 ? target : target.slice(0, hash);
      const fragment = hash < 0 ? "" : target.slice(hash + 1);
      let resolved = name;
      if (pathPart) {
        resolved = posix.normalize(posix.join(posix.dirname(name), pathPart));
        if (!names.has(resolved)) {
          const projectReference = pathPart.startsWith("../..") || /\.(md|pdf|epub)$/i.test(pathPart);
          if (!projectReference) failures.push(`${name} -> ${target}`);
          continue;
        }
      }
      const ids = documents.get(resolved)?.ids ?? new Set();
      const sourceHeading = [...ids].some((id) => id.startsWith(`${fragment}__`));
      const sourcePageReference = fragment.endsWith(".md");
      if (clickable && fragment && !ids.has(fragment) && !sourceHeading && !sourcePageReference) failures.push(`${name} -> âncora ausente: ${target}`);
    }
  }
  return failures;
}

/** Confere manifesto, aliases, XML, navegação e hashes dos artefatos. */
async function checkManifest(version, files, sourceHash) {
  const paths = versionedPaths(version);
  await ensureFile(MANIFEST, "ebook/build.json ausente; execute npm run ebook.");
  await ensureFile(paths.pdf, `${paths.stem}.pdf ausente; execute npm run ebook.`);
  await ensureFile(paths.epub, `${paths.stem}.epub ausente; execute npm run ebook.`);
  await ensureFile(paths.pdfAlias, "ebook-inboundfy.pdf ausente; execute npm run ebook.");
  await ensureFile(paths.epubAlias, "ebook-inboundfy.epub ausente; execute npm run ebook.");
  const [pdf, pdfAlias, epub, epubAlias] = await Promise.all([readFile(paths.pdf), readFile(paths.pdfAlias), readFile(paths.epub), readFile(paths.epubAlias)]);
  if (!pdf.equals(pdfAlias)) fail("ebook-inboundfy.pdf não corresponde à edição vigente.");
  if (!epub.equals(epubAlias)) fail("ebook-inboundfy.epub não corresponde à edição vigente.");
  const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));
  for (const [key, value] of [["version", version], ["edition", `v${version}`], ["source_sha256", sourceHash]]) if (manifest[key] !== value) fail(`${key} desatualizado; execute npm run ebook.`);
  for (const [kind, path] of [["pdf", paths.pdf], ["epub", paths.epub]]) {
    const record = manifest.artifacts?.[kind] ?? {};
    const digest = await sha256(path);
    if (record.file !== join("", path).split(/[\\/]/).pop() || record.sha256 !== digest) fail(`hash de ${path.split(/[\\/]/).pop()} desatualizado; execute npm run ebook.`);
  }
  run("unzip", ["-tqq", paths.epub]);
  for (const entry of zipEntries(paths.epub).filter((name) => /\.(xhtml|opf|ncx|xml)$/.test(name))) {
    const xml = run("unzip", ["-p", paths.epub, entry]);
    const parserArgs = entry.endsWith(".xhtml") ? ["--html", "--noout", "-"] : ["--noout", "-"];
    run("xmllint", parserArgs, { input: xml });
  }
  const failures = [...validatePdfLinks(paths.pdf), ...validateEpubLinks(paths.epub)];
  if (failures.length) fail(`navegação inválida nos artefatos:\n${failures.join("\n")}`);
  console.log(`OK: edição v${version} sincronizada com docs/user/.`);
}

function dateInPortuguese() {
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(new Date());
}

function dateForMetadata() {
  return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

async function documentMetadata(paths) {
  const metadata = {};
  for (const path of paths) {
    const values = await classificationFrom(path);
    if (Object.keys(values).length) metadata[relativePath(path)] = values;
  }
  return metadata;
}

/** Prepara páginas temporárias para que o Pandoc não dependa de filtros Lua. */
async function preparePages(paths) {
  const preparedRoot = join(BUILD_ROOT, "docs", "user");
  await mkdir(preparedRoot, { recursive: true });
  for (const path of paths) {
    const lines = (await readFile(path, "utf8")).split(/\r?\n/);
    const output = [];
    let skippingClassification = false;
    for (const line of lines) {
      if (/^## Classificação\s*$/i.test(line)) {
        skippingClassification = true;
        continue;
      }
      if (skippingClassification && /^#{1,2}\s/.test(line)) skippingClassification = false;
      if (!skippingClassification) output.push(line);
    }
    let text = output.join("\n");
    text = text.replace(/<p align="center">\s*<picture>[\s\S]*?<\/picture>\s*<\/p>/i, "![Logo do Inboundfy](brand/logo/icon.png){width=128}");
    text = text.replaceAll("../../brand/logo/", "brand/logo/");
    text = text.replace(/(?<!!)\[([^\]]+)\]\(([^)\s]+)(?:\s+[^)]*)?\)/g, (match, label, target) => {
      if (/^(https?:|mailto:|tel:)/i.test(target)) return match;
      return label;
    });
    await writeFile(join(preparedRoot, path.split(/[\\/]/).pop()), text);
  }
  return { cwd: preparedRoot, inputs: paths.map((path) => path.split(/[\\/]/).pop()) };
}

async function build(version, sources, pages) {
  for (const binary of REQUIRED_BINARIES) if (!(await commandExists(binary))) fail(`'${binary}' não encontrado no PATH.`);
  const histogram = run("magick", [LOGO_PNG, "-depth", "8", "-format", "%c", "histogram:info:"]);
  for (const color of ["#00161EFF", "#2AD5BEFF", "#FA7F4BFF"]) if (!histogram.includes(color)) fail(`brand/logo/icon.png precisa conter a cor oficial ${color}.`);
  await mkdir(BUILD_ROOT, { recursive: true });
  const metadata = await documentMetadata(pages.paths);
  const preparedPages = await preparePages(pages.paths);
  await writeFile(join(BUILD_ROOT, "document-metadata.json"), `${JSON.stringify(metadata, null, 2)}\n`);
  const fontStyle = await readFile(FONT_STYLE, "utf8");
  const rootStart = fontStyle.search(/^:root\s*\{/m);
  const fontFaces = fontStyle.slice(0, rootStart < 0 ? fontStyle.length : rootStart).replaceAll('url("./', 'url("../../brand/fonts/');
  if (!fontFaces.trim()) fail("fontes Inter e Manrope ausentes em brand/fonts/fonts.css.");
  const template = await readFile(TEMPLATE, "utf8");
  const filledTemplate = template.replace("$fontfaces$", fontFaces.trimEnd());
  const filledTemplatePath = join(BUILD_ROOT, "template.filled.html");
  await writeFile(filledTemplatePath, filledTemplate);
  const paths = versionedPaths(version);
  const cover = join(BUILD_ROOT, `${paths.stem}-cover.png`);
  const sansFont = run("fc-match", ["-f", "%{file}\\n", "Manrope:style=SemiBold"]).trim().split(/\r?\n/)[0];
  const bodyFont = run("fc-match", ["-f", "%{file}\\n", "Inter:style=Regular"]).trim().split(/\r?\n/)[0];
  if (!sansFont) fail("Manrope não encontrada.");
  if (!bodyFont) fail("Inter não encontrada.");
  run("magick", [
    "-size", "1600x2560", "xc:#FFFFFF", "(", LOGO_PNG, "-resize", "300x300", ")",
    "-geometry", "+150+170", "-composite", "-font", bodyFont, "-fill", "#171717", "-pointsize", "34",
    "-annotate", "+150+850", "INBOUNDFY", "-font", sansFont, "-fill", "#000000", "-pointsize", "116",
    "-annotate", "+150+1050", "Guia completo", "-annotate", "+150+1190", "do usuário",
    "-font", bodyFont, "-fill", "#171717", "-pointsize", "42", "-annotate", "+150+1400", "Contexto. Método. Validação.",
    "-font", sansFont, "-fill", "#737373", "-pointsize", "38", "-annotate", "+150+1540", "Da primeira ideia ao conteúdo aprovado,",
    "-annotate", "+150+1600", "em um percurso guiado e verificável.", "-stroke", "#D4D4D4", "-strokewidth", "2",
    "-draw", "line 150,2260 1450,2260", "-stroke", "none", "-font", bodyFont, "-fill", "#737373", "-pointsize", "30",
    "-annotate", "+150+2340", `EDIÇÃO V${version}`, cover,
  ]);
  const commonPandoc = ["--from=markdown", "--standalone", "--file-scope"];
  const resourcePath = `${SCRIPT_DIR}:${ROOT}:${DOCS_ROOT}:${preparedPages.cwd}`;
  run("pandoc", [...preparedPages.inputs, "--to=html5", ...commonPandoc, `--template=${filledTemplatePath}`, "--toc", "--toc-depth=2", `--resource-path=${resourcePath}`, `--metadata-file=${METADATA}`, `--metadata`, `title=Inboundfy — Guia completo do usuário · v${version}`, "--metadata", `version=${version}`, "--metadata", `date=${dateInPortuguese()}`, "--output", join(BUILD_ROOT, `${paths.stem}.html`)], { cwd: preparedPages.cwd });
  run("weasyprint", [join(BUILD_ROOT, `${paths.stem}.html`), paths.pdf, "--base-url", ROOT, "--stylesheet", PDF_STYLE]);
  run("pandoc", [...preparedPages.inputs, "--to=epub3", ...commonPandoc, "--toc", "--toc-depth=2", "--epub-title-page=true", `--epub-cover-image=${cover}`, `--css=${EPUB_STYLE}`, `--resource-path=${resourcePath}`, `--metadata-file=${METADATA}`, "--metadata", `title=Inboundfy — Guia completo do usuário · v${version}`, "--metadata", `version=${version}`, "--metadata", `date=${dateForMetadata()}`, "--output", paths.epub], { cwd: preparedPages.cwd });
  const manifest = {
    schema_version: 1,
    version,
    edition: `v${version}`,
    generated_at: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"),
    source_sha256: await sourceSha(sources),
    sources: [...new Set(sources.map(relativePath))].sort(),
    document_metadata: metadata,
    artifacts: {
      pdf: { file: `${paths.stem}.pdf`, sha256: await sha256(paths.pdf) },
      epub: { file: `${paths.stem}.epub`, sha256: await sha256(paths.epub) },
    },
  };
  await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  await copyFile(paths.pdf, paths.pdfAlias);
  await copyFile(paths.epub, paths.epubAlias);
  await checkManifest(version, sources, manifest.source_sha256);
  await pruneEditions({ ebookRoot: EBOOK_ROOT, keep: 5, protectVersion: version });
  console.log(`PDF:  ${paths.pdf}`);
  console.log(`EPUB: ${paths.epub}`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length > 1 || (args.length === 1 && args[0] !== "--check")) fail("uso: node .ebook/build-ebook.mjs [--check]");
  const version = versionFromFile();
  const sources = await requiredSources();
  const pages = await pageInputs();
  const files = await sourceFiles(sources);
  const sourceHash = await sourceSha(files);
  await ensureFile(METADATA, ".ebook/metadata.yaml ausente.");
  if (!(await readFile(METADATA, "utf8")).includes('lang: "pt-BR"')) fail('.ebook/metadata.yaml deve declarar lang: "pt-BR".');
  if (!(await readFile(TEMPLATE, "utf8")).includes('<html lang="pt-BR">')) fail('.ebook/template.html deve declarar lang="pt-BR".');
  if (args[0] === "--check") await checkManifest(version, files, sourceHash);
  else await build(version, files, pages);
}

try {
  await main();
} catch (error) {
  console.error(`Erro: ${error.message}`);
  process.exitCode = 1;
}
