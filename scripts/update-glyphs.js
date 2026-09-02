#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GLYPHS_DIR = path.join(__dirname, '..', 'svg', 'glyphs');
const OUTPUT_FILE = path.join(__dirname, '..', 'svg', 'glyphs.json');

function toFriendlyName(filename) {
  return filename
    .replace('.svg', '')
    .replace(/^ps-/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function scanGlyphs() {
  if (!fs.existsSync(GLYPHS_DIR)) {
    console.error(`Directory not found: ${GLYPHS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(GLYPHS_DIR)
    .filter((file) => file.endsWith('.svg'))
    .sort();

  const glyphs = files.map((filename) => ({
    filename,
    friendlyName: toFriendlyName(filename),
  }));

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(glyphs, null, 2));
  console.log(`Updated ${OUTPUT_FILE} with ${glyphs.length} glyphs`);
}

scanGlyphs();