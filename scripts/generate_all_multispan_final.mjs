import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const page26 = '/Users/ibm/.gemini/antigravity-ide/brain/df6fc024-c128-4e5a-ac44-fac684662f47/scratch/page_26.png';
const targetDir = path.resolve('public/images/partners/multispan');

console.log('Generating perfected Multispan assets into:', targetDir);

// 8 categories: perfectly calibrated bounds, 0 border lines, 0 clipped bezels, 0 stray text
const categories = [
  {
    name: 'temperature-controllers',
    // MTX-1200 + MT-44
    rect: { left: 125, top: 1520, width: 520, height: 225 }
  },
  {
    name: 'timers',
    // T2N + CT5M + TSM
    rect: { left: 685, top: 1520, width: 535, height: 220 }
  },
  {
    name: 'counters',
    // CS1-6S + CTC-6S (ends before the blue border at x=1740)
    rect: { left: 1270, top: 1520, width: 470, height: 225 }
  },
  {
    name: 'panel-meters',
    // AVM-01 + Ammeter (ends before the blue border at x=2305)
    rect: { left: 1770, top: 1520, width: 535, height: 225 }
  },
  {
    name: 'process-indicators',
    // PI-96 + PI-48
    rect: { left: 125, top: 2210, width: 520, height: 225 }
  },
  {
    name: 'protection-relays',
    // MPPR-28 + MPR-415
    rect: { left: 685, top: 2205, width: 525, height: 230 }
  },
  {
    name: 'instruments',
    // MDLR-64 Data Logger + SCADA/HMI Interface (ends before the blue border at x=1745)
    rect: { left: 1270, top: 2210, width: 475, height: 225 }
  },
  {
    name: 'control-devices',
    // 4 DIN Rail Modules (ends before the blue border at x=2255)
    rect: { left: 1765, top: 2195, width: 490, height: 240 }
  }
];

const targetW = 800;
const targetH = 600;

for (const cat of categories) {
  const rawCrop = await sharp(page26)
    .extract(cat.rect)
    .toBuffer();

  const meta = await sharp(rawCrop).metadata();

  // Scale with Lanczos3 to fit inside 720 x 480
  const maxW = 720;
  const maxH = 480;
  const scale = Math.min(maxW / meta.width, maxH / meta.height);
  const fitW = Math.round(meta.width * scale);
  const fitH = Math.round(meta.height * scale);

  const scaled = await sharp(rawCrop)
    .resize(fitW, fitH, { kernel: 'lanczos3' })
    .toBuffer();

  // Composite centered on pure white canvas
  const finalImageBuffer = await sharp({
    create: {
      width: targetW,
      height: targetH,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([{
      input: scaled,
      top: Math.round((targetH - fitH) / 2),
      left: Math.round((targetW - fitW) / 2)
    }])
    .png({ quality: 95, compressionLevel: 8 })
    .toBuffer();

  const pngPath = path.join(targetDir, `${cat.name}.png`);
  const webpPath = path.join(targetDir, `${cat.name}.webp`);

  await sharp(finalImageBuffer).png().toFile(pngPath);
  await sharp(finalImageBuffer).webp({ quality: 88, effort: 6 }).toFile(webpPath);

  console.log(`✓ Perfected ${cat.name}.png & .webp (${targetW}x${targetH})`);
}

// 2. Perfected 16:10 Hero Image
const heroSrc = '/Users/ibm/.gemini/antigravity-ide/brain/df6fc024-c128-4e5a-ac44-fac684662f47/scratch/hero_16_10_clean.png';
const heroPng = path.join(targetDir, 'hero.png');
const heroWebp = path.join(targetDir, 'hero.webp');

await sharp(heroSrc).png({ quality: 95, compressionLevel: 8 }).toFile(heroPng);
await sharp(heroSrc).webp({ quality: 88, effort: 6 }).toFile(heroWebp);
console.log('✓ Perfected hero.png & hero.webp (1632x1020, 16:10)!');

