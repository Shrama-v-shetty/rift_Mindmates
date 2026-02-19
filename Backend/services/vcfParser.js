const fs = require("fs");

function parseVCF(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");

  const variants = [];

  for (const line of lines) {
    if (line.startsWith("#")) continue;

    const cols = line.split("\t");

    variants.push({
      chromosome: cols[0],
      position: cols[1],
      rsid: cols[2],
      info: cols[7],
      genotype: cols[9]
    });
  }

  return variants;
}

module.exports = parseVCF;
