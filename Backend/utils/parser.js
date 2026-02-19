// utils/parser.js
const fs = require('fs');

function parseVCF(filePath) {
  const vcfData = fs.readFileSync(filePath, 'utf-8');
  const variants = [];

  const lines = vcfData.split('\n');
  for (let line of lines) {
    if (line.startsWith('#')) continue; // Skip headers
    const cols = line.split('\t');
    if (cols.length < 8) continue;

    const info = {};
    cols[7].split(';').forEach((tag) => {
      const [key, value] = tag.split('=');
      info[key] = value;
    });

    variants.push({
      chrom: cols[0],
      pos: cols[1],
      id: cols[2],
      ref: cols[3],
      alt: cols[4],
      gene: info.GENE || 'Unknown',
      star: info.STAR || 'Unknown',
      rsid: info.RS || 'Unknown',
    });
  }

  return variants;
}

module.exports = { parseVCF };


