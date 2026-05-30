#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEX_FILE="${1:-"$ROOT_DIR/latex/rfe_response_template.tex"}"
OUT_DIR="${2:-"$ROOT_DIR/build"}"

if [[ ! -f "$TEX_FILE" ]]; then
  echo "TeX file not found: $TEX_FILE" >&2
  echo "Usage: ./compile_rfe.sh [path/to/file.tex] [output_dir]" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"

if command -v latexmk >/dev/null 2>&1; then
  latexmk \
    -pdf \
    -interaction=nonstopmode \
    -halt-on-error \
    -file-line-error \
    -outdir="$OUT_DIR" \
    "$TEX_FILE"
else
  for _ in 1 2; do
    pdflatex \
      -interaction=nonstopmode \
      -halt-on-error \
      -file-line-error \
      -output-directory="$OUT_DIR" \
      "$TEX_FILE"
  done
fi

PDF_FILE="$OUT_DIR/$(basename "${TEX_FILE%.tex}").pdf"
echo "Wrote $PDF_FILE"
