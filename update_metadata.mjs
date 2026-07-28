import fs from 'fs';
import path from 'path';
import { imageSize } from 'image-size';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const metadata = {};
const publicDir = path.join(process.cwd(), 'public');

walkDir(publicDir, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
    try {
      const dimensions = imageSize(filePath);
      const relativePath = '/' + path.relative(publicDir, filePath).replace(/\\\\/g, '/');
      const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';
      metadata[relativePath] = {
        width: dimensions.width,
        height: dimensions.height,
        aspectRatio: (dimensions.width / dimensions.height).toFixed(3),
        orientation: orientation
      };
    } catch (e) {
      console.log('Error reading ' + filePath + ': ' + e.message);
    }
  }
});

fs.writeFileSync(path.join(process.cwd(), 'src/data/imageMetadata.json'), JSON.stringify(metadata, null, 2));
console.log('Successfully updated src/data/imageMetadata.json with ' + Object.keys(metadata).length + ' images');
