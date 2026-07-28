const fs = require('fs');
const path = require('path');

const contentPath = path.join(process.cwd(), 'src/data/categoryContent.ts');
let content = fs.readFileSync(contentPath, 'utf8');

const files = fs.readdirSync(path.join(process.cwd(), 'public/Baby'));
const albums = files
    .filter(f => f.toLowerCase().endsWith('.jpg'))
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((f, i) => '            { id: ' + (i + 1) + ', title: \"\", image: \"/Baby/' + f + '\" }')
    .join(',\n');

const newAlbumsString = '        albums: [\n' + albums + '\n        ]';

const regex = /        albums: \[\s*(?:\{\s*id:\s*\d+,\s*title:\s*\"\",\s*image:\s*\"\/Baby\/[^\"]+\"\s*\},?\s*)*\]/m;
content = content.replace(regex, newAlbumsString);

fs.writeFileSync(contentPath, content);
console.log('Done replacing baby albums!');
