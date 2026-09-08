// ============================================================================
// NASCON TECHNOLOGIES - PRODUCTION ASSET & HTML PRE-COMPRESSION SCRIPT
// Compresses HTML, JS, CSS, SVG, XML and TXT files with Brotli (lvl 11) and Gzip (lvl 9)
// Compatible with Nginx (gzip_static / brotli_static), Apache, and modern CDNs.
// ============================================================================

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const distDir = path.resolve('dist');

const COMPRESSIBLE_EXTENSIONS = new Set([
  '.html',
  '.js',
  '.css',
  '.svg',
  '.xml',
  '.txt',
  '.json',
]);

const MIN_SIZE_TO_COMPRESS = 128; // Don't compress tiny files < 128 bytes

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of list) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }
  return results;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

async function compressAll() {
  if (!fs.existsSync(distDir)) {
    console.error(`[Compression] Error: dist directory '${distDir}' does not exist. Run 'vite build' first.`);
    process.exit(1);
  }

  console.log('\n========================================================');
  console.log('📦  STARTING BROTLI & GZIP CONTENT COMPRESSION');
  console.log('========================================================\n');

  const files = getFilesRecursively(distDir);
  let totalOriginal = 0;
  let totalGzip = 0;
  let totalBrotli = 0;
  let count = 0;

  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase();

    // Skip already compressed files
    if (filePath.endsWith('.gz') || filePath.endsWith('.br')) {
      continue;
    }

    if (!COMPRESSIBLE_EXTENSIONS.has(ext)) {
      continue;
    }

    const stat = fs.statSync(filePath);
    if (stat.size < MIN_SIZE_TO_COMPRESS) {
      continue;
    }

    const content = fs.readFileSync(filePath);
    const relPath = path.relative(distDir, filePath);

    // 1. Generate Gzip (level 9 = maximum compression)
    const gzipped = zlib.gzipSync(content, {
      level: 9,
    });
    fs.writeFileSync(`${filePath}.gz`, gzipped);

    // 2. Generate Brotli (quality 11 = maximum compression)
    const brotlied = zlib.brotliCompressSync(content, {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      },
    });
    fs.writeFileSync(`${filePath}.br`, brotlied);

    totalOriginal += stat.size;
    totalGzip += gzipped.length;
    totalBrotli += brotlied.length;
    count++;

    const gzSavings = (((stat.size - gzipped.length) / stat.size) * 100).toFixed(1);
    const brSavings = (((stat.size - brotlied.length) / stat.size) * 100).toFixed(1);

    console.log(
      `✓ ${relPath.padEnd(35)} | Orig: ${formatBytes(stat.size).padStart(9)} | Gzip: ${formatBytes(gzipped.length).padStart(8)} (-${gzSavings}%) | Brotli: ${formatBytes(brotlied.length).padStart(8)} (-${brSavings}%)`
    );
  }

  console.log('\n--------------------------------------------------------');
  console.log(`✅ Compressed ${count} files successfully!`);
  console.log(`   Total uncompressed: ${formatBytes(totalOriginal)}`);
  console.log(`   Total Gzip:         ${formatBytes(totalGzip)} (${(((totalOriginal - totalGzip) / totalOriginal) * 100).toFixed(1)}% reduction)`);
  console.log(`   Total Brotli:       ${formatBytes(totalBrotli)} (${(((totalOriginal - totalBrotli) / totalOriginal) * 100).toFixed(1)}% reduction)`);
  console.log('========================================================\n');
}

compressAll();
