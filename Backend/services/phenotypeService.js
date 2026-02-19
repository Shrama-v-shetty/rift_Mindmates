const { getDB } = require("../config/db");

async function determinePhenotype(variants) {
  const db = getDB();

  const results = [];

  for (const variant of variants) {
    const record = await db.collection("variant_rules").findOne({
      rsid: variant.rsid,
      genotype: variant.genotype
    });

    if (record) {
      results.push({
        gene: record.gene,
        phenotype: record.phenotype
      });
    }
  }

  return results;
}

module.exports = determinePhenotype;
