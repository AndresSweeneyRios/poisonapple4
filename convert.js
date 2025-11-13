const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = './src/assets/screenshots';

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (path.extname(file) === '.png') {
      const input = path.join(dir, file);
      const output = path.join(dir, path.basename(file, '.png') + '.webp');
      sharp(input)
        .resize(1920, null, { withoutEnlargement: true })
        .webp({ quality: 90, alphaQuality: 0 })
        .toFile(output)
        .then(() => console.log(`Converted ${file}`))
        .catch(err => console.error(err));
    }
  });
});
