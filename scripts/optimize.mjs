import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.png') && !entry.name.includes('-opt')) {
      const parsed = path.parse(fullPath);
      const originalSize = fs.statSync(fullPath).size;

      // 1. Generate WebP
      const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
      await sharp(fullPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(webpPath);
      const webpSize = fs.statSync(webpPath).size;

      // 2. Overwrite / Optimize PNG
      const tempPng = path.join(parsed.dir, `${parsed.name}-opt.png`);
      await sharp(fullPath)
        .png({ compressionLevel: 9, quality: 85, effort: 7 })
        .toFile(tempPng);
      
      const optPngSize = fs.statSync(tempPng).size;
      fs.renameSync(tempPng, fullPath);

      console.log(`[${entry.name}] Original: ${(originalSize / 1024).toFixed(1)} KB -> WebP: ${(webpSize / 1024).toFixed(1)} KB (-${((1 - webpSize/originalSize)*100).toFixed(0)}%) | Opt PNG: ${(optPngSize / 1024).toFixed(1)} KB (-${((1 - optPngSize/originalSize)*100).toFixed(0)}%)`);
    }
  }
}

console.log('Starting image optimization...');
await processDirectory(imagesDir);
console.log('Finished image optimization!');
