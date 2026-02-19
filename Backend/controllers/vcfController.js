const parseVCF = require("../services/vcfParser");
const determinePhenotype = require("../services/phenotypeService");
const getRecommendation = require("../services/recommendationService");

exports.handleVCFUpload = async (req, res) => {
  try {
    const filePath = req.file.path;
    const drug = req.body.drug;

    const variants = parseVCF(filePath);

    const phenotypes = await determinePhenotype(variants);

    const results = [];

    for (const item of phenotypes) {
      const rec = await getRecommendation(
        item.gene,
        item.phenotype,
        drug
      );

      if (rec) {
        results.push({
          gene: item.gene,
          phenotype: item.phenotype,
          drug: drug,
          risk: rec.risk,
          recommendation: rec.recommendation,
          evidence: rec.evidence
        });
      }
    }

    res.json({
      status: "success",
      drug: drug,
      detected_variants: variants.length,
      pharmacogenomic_profile: phenotypes,
      results: results
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
