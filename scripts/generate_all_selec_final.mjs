import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const page27 = '/Users/ibm/.gemini/antigravity-ide/brain/df6fc024-c128-4e5a-ac44-fac684662f47/scratch/page_27.png';
const targetDir = path.resolve('public/images/partners/selec');

console.log('Generating perfected Selec assets into:', targetDir);

// 1. GENERATE HERO IMAGE (16:10 aspect ratio: 1600 x 1000)
// Base crop from page 27: x = 1408, y = 50, width = 3312, height = 2060
const heroRaw = await sharp(page27)
  .extract({ left: 1408, top: 50, width: 3312, height: 2060 })
  .resize(1656, 1030)
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data: heroData, info: heroInfo } = heroRaw;
const { width: hw, height: hh, channels: hc } = heroInfo;
const heroBuffer = Buffer.from(heroData);

function setHeroPixel(x, y, r, g, b, a = 255) {
  if (x < 0 || x >= hw || y < 0 || y >= hh) return;
  const idx = (y * hw + x) * hc;
  heroBuffer[idx] = r;
  heroBuffer[idx+1] = g;
  heroBuffer[idx+2] = b;
  heroBuffer[idx+3] = a;
}

for (let y = 0; y < hh; y++) {
  let stripeX = -1;
  if (y <= 200) {
    stripeX = 600 - y * 0.75;
  } else if (y <= 400) {
    stripeX = 450 - (y - 200) * 0.77;
  } else if (y <= 600) {
    stripeX = 296 + (y - 400) * 0.52;
  } else if (y <= 750) {
    stripeX = 400 - (y - 600) * 0.44;
  }

  let boundX = stripeX > 0 ? Math.round(stripeX + 6) : 305;

  for (let x = 0; x <= boundX; x++) {
    let r, g, b;
    if (y < 746) {
      const t = y / 746;
      r = Math.round(255 - t * (255 - 243));
      g = Math.round(255 - t * (255 - 246));
      b = Math.round(255 - t * (255 - 250));
    } else {
      const t = (y - 746) / (hh - 746);
      r = Math.round(236 - t * (236 - 226));
      g = Math.round(240 - t * (240 - 231));
      b = Math.round(245 - t * (245 - 237));
    }

    const blendWidth = 8;
    if (x > boundX - blendWidth) {
      const alpha = (boundX - x) / blendWidth;
      const idx = (y * hw + x) * hc;
      const origR = heroData[idx];
      const origG = heroData[idx+1];
      const origB = heroData[idx+2];
      
      const isChevronOrText = (origR > 160 && origG < 150) || (origB > 60 && origR < 50) || (origR < 50 && origG < 50 && origB < 50);
      if (isChevronOrText) {
        setHeroPixel(x, y, r, g, b);
      } else {
        const finalR = Math.round(alpha * r + (1 - alpha) * origR);
        const finalG = Math.round(alpha * g + (1 - alpha) * origG);
        const finalB = Math.round(alpha * b + (1 - alpha) * origB);
        setHeroPixel(x, y, finalR, finalG, finalB);
      }
    } else {
      setHeroPixel(x, y, r, g, b);
    }
  }

  // Ensure bottom edge is clean table edge without brochure bar line
  if (y >= hh - 4) {
    for (let x = 0; x < hw; x++) {
      const sampleIdx = ((hh - 6) * hw + x) * hc;
      setHeroPixel(x, y, heroBuffer[sampleIdx], heroBuffer[sampleIdx+1], heroBuffer[sampleIdx+2]);
    }
  }
}

const finalHeroImage = await sharp(heroBuffer, { raw: { width: hw, height: hh, channels: hc } })
  .resize(1600, 1000, { kernel: 'lanczos3' })
  .png({ quality: 95, compressionLevel: 8 })
  .toBuffer();

await sharp(finalHeroImage).toFile(path.join(targetDir, 'hero.png'));
await sharp(finalHeroImage).webp({ quality: 88, effort: 6 }).toFile(path.join(targetDir, 'hero.webp'));
console.log('✓ Perfected hero.png & hero.webp (1600x1000, 16:10)');

// 2. GENERATE ALL 12 PRODUCT CATEGORIES (800 x 600, centered on pure white)
const categories = [
  // Row 1
  { name: 'digital-meters', rect: { left: 240, top: 2630, width: 850, height: 490 } },
  { name: 'timers', rect: { left: 1330, top: 2630, width: 850, height: 490 } },
  { name: 'counters', rect: { left: 2420, top: 2630, width: 880, height: 490 } },
  { name: 'temperature-controllers', rect: { left: 3520, top: 2630, width: 880, height: 490 } },

  // Row 2
  { name: 'protection-relays', rect: { left: 240, top: 3740, width: 850, height: 480 } },
  { name: 'power-monitoring', rect: { left: 1310, top: 3760, width: 880, height: 470 } },
  { name: 'process-indicators', rect: { left: 2420, top: 3740, width: 880, height: 480 } },
  { name: 'automation-instruments', rect: { left: 3520, top: 3740, width: 880, height: 480 } },

  // Row 3
  { name: 'plc', rect: { left: 240, top: 4820, width: 880, height: 390 } },
  { name: 'hmi', rect: { left: 1320, top: 4820, width: 980, height: 390 } },
  { name: 'vfd', rect: { left: 2440, top: 4820, width: 840, height: 390 } },
  { name: 'power-supplies', rect: { left: 3520, top: 4820, width: 880, height: 420 } },
];

const targetW = 800;
const targetH = 600;

for (const cat of categories) {
  const rawCrop = await sharp(page27)
    .extract(cat.rect)
    .toBuffer();

  const meta = await sharp(rawCrop).metadata();

  // Scale with Lanczos3 to comfortably fit inside 720 x 480
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

console.log('ALL SELEC ASSETS COMPLETED SUCCESSFULLY!');
