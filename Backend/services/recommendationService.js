const { getDB } = require("../config/db");

async function getRecommendation(gene, phenotype, drug) {
  const db = getDB();

  const rule = await db.collection("cpic_rules").findOne({
    gene: gene,
    phenotype: phenotype,
    drug: drug
  });

  return rule;
}

module.exports = getRecommendation;
