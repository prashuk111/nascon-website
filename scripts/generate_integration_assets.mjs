import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const scratch = '/Users/ibm/.gemini/antigravity-ide/brain/150d97b3-e700-45aa-86c0-ac79f1ad8914/scratch';

// Columns inside the brochure card boxes at 8x scale:
const standardCols = [
  { left: 245, width: 980 },
  { left: 1335, width: 950 },
  { left: 2400, width: 950 },
  { left: 3470, width: 950 }
];

const targets = [
  {
    slug: 'plc-hmi-scada',
    pageFile: `${scratch}/page_29_8x.png`,
    heroCrop: { left: 1750, top: 180, width: 2900, height: 2180 },
    cards: [
      { id: 'plc-programming', col: 0, row: 0, rect: { left: 245, top: 3040, width: 980, height: 630 } },
      { id: 'hmi-screen-development', col: 1, row: 0, rect: { left: 1335, top: 3040, width: 950, height: 630 } },
      { id: 'scada-visualization', col: 2, row: 0, rect: { left: 2400, top: 3040, width: 950, height: 630 } },
      { id: 'alarm-trend-monitoring', col: 3, row: 0, rect: { left: 3470, top: 3040, width: 950, height: 630 } },
      { id: 'data-logging', col: 0, row: 1, rect: { left: 245, top: 4330, width: 980, height: 640 } },
      { id: 'recipe-management', col: 1, row: 1, rect: { left: 1335, top: 4330, width: 950, height: 640 } },
      { id: 'remote-access-support', col: 2, row: 1, rect: { left: 2400, top: 4330, width: 950, height: 640 } },
      { id: 'commissioning-assistance', col: 3, row: 1, rect: { left: 3470, top: 4330, width: 950, height: 640 } },
    ]
  },
  {
    slug: 'vfd-drives-motor-control',
    pageFile: `${scratch}/page_30_8x.png`,
    heroCrop: { left: 2100, top: 180, width: 2550, height: 2180 },
    cards: [
      { id: 'vfd-selection', col: 0, row: 0, rect: { left: 245, top: 2980, width: 980, height: 690 } },
      { id: 'motor-control-panels', col: 1, row: 0, rect: { left: 1335, top: 2980, width: 950, height: 690 } },
      { id: 'soft-starters', col: 2, row: 0, rect: { left: 2400, top: 2980, width: 950, height: 690 } },
      { id: 'servo-drives', col: 3, row: 0, rect: { left: 3470, top: 2980, width: 950, height: 690 } },
      { id: 'energy-saving-applications', col: 0, row: 1, rect: { left: 245, top: 4370, width: 980, height: 600 } },
      { id: 'speed-control-systems', col: 1, row: 1, rect: { left: 1335, top: 4380, width: 950, height: 600 } },
      { id: 'pump-fan-conveyor-control', col: 2, row: 1, rect: { left: 2400, top: 4380, width: 950, height: 600 } },
      { id: 'drive-commissioning-support', col: 3, row: 1, rect: { left: 3470, top: 4380, width: 950, height: 600 } },
    ]
  },
  {
    slug: 'mcc-pcc-apfc-rtu',
    pageFile: `${scratch}/page_31_8x.png`,
    heroCrop: { left: 2050, top: 180, width: 2600, height: 2180 },
    cards: [
      { id: 'mcc-panels', col: 0, row: 0, rect: { left: 245, top: 2940, width: 980, height: 730 } },
      { id: 'pcc-panels', col: 1, row: 0, rect: { left: 1335, top: 2940, width: 950, height: 730 } },
      { id: 'apfc-ipfc-panels', col: 2, row: 0, rect: { left: 2400, top: 2940, width: 950, height: 730 } },
      { id: 'rtu-panels', col: 3, row: 0, rect: { left: 3470, top: 2940, width: 950, height: 730 } },
      { id: 'power-distribution-panels', col: 0, row: 1, rect: { left: 245, top: 4370, width: 980, height: 600 } },
      { id: 'motor-feeder-sections', col: 1, row: 1, rect: { left: 1335, top: 4380, width: 950, height: 600 } },
      { id: 'capacitor-bank-systems', col: 2, row: 1, rect: { left: 2400, top: 4380, width: 950, height: 600 } },
      { id: 'remote-monitoring-panel-support', col: 3, row: 1, rect: { left: 3470, top: 4380, width: 950, height: 600 } },
    ]
  }
];

const targetCardW = 800;
const targetCardH = 600;

for (const t of targets) {
  const destDir = path.resolve(`public/images/integrations/${t.slug}`);
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`\nProcessing ${t.slug} -> ${destDir}`);

  // 1. PERFECTED FULL-BLEED HERO IMAGE (1600 x 1000, 16:10)
  const heroBuffer = await sharp(t.pageFile)
    .extract(t.heroCrop)
    .resize(1600, 1000, { fit: 'cover', position: 'center' })
    .png({ quality: 95, compressionLevel: 8 })
    .toBuffer();

  await sharp(heroBuffer).toFile(path.join(destDir, 'hero.png'));
  await sharp(heroBuffer).webp({ quality: 92, effort: 6 }).toFile(path.join(destDir, 'hero.webp'));
  console.log(`  ✓ Perfected hero.png & hero.webp (1600x1000 full cover)`);

  // 2. PERFECTED 8 CAPABILITY CARD IMAGES (800 x 600)
  for (const card of t.cards) {
    const rawCard = await sharp(t.pageFile)
      .extract(card.rect)
      .resize(targetCardW, targetCardH, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 },
        kernel: 'lanczos3'
      })
      .png({ quality: 95, compressionLevel: 8 })
      .toBuffer();

    const pngPath = path.join(destDir, `${card.id}.png`);
    const webpPath = path.join(destDir, `${card.id}.webp`);

    await sharp(rawCard).toFile(pngPath);
    await sharp(rawCard).webp({ quality: 90, effort: 6 }).toFile(webpPath);
    console.log(`  ✓ Perfected ${card.id}.png & .webp (800x600)`);
  }
}

console.log('\nALL 3 INTEGRATION ASSETS REGENERATED WITH ULTRA HIGH QUALITY & ZERO CROPPING!');
