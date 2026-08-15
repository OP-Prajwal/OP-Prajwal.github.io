import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    if (file === 'me.avif' || file === 'me.png' || file === 'ib.png') {
      console.log(`Optimizing ${file}...`);
      const inputPath = path.join(publicDir, file);
      const parsed = path.parse(file);
      const ext = parsed.ext.toLowerCase();
      
      const outputPath = path.join(publicDir, `${parsed.name}_optimized.webp`);
      
      await sharp(inputPath)
        .resize(400, 400, { fit: 'cover', position: 'top' }) // Resize large avatars to 400x400
        .webp({ quality: 75 })
        .toFile(outputPath);
      
      console.log(`Saved ${outputPath}`);
      // Replace original file with the optimized webp, wait we'll keep original and just rename
    }
  }
}

optimizeImages().catch(console.error);
