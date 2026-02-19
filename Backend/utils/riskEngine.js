const genePhenotypeMap = {
  CYP2C19: {
    '*1/*1': 'NM',
    '*1/*2': 'IM',
    '*2/*2': 'PM',
    '*1/*17': 'RM',
    '*17/*17': 'URM'
  },
  CYP2D6: {
    '*1/*1': 'NM',
    '*1/*4': 'IM',
    '*4/*4': 'PM',
    '*1/*2': 'RM',
    '*2/*2': 'URM'
  },
  CYP2C9: { '*1/*1': 'NM', '*2/*2': 'PM', '*3/*3': 'PM' },
  SLCO1B1: { '*1/*1': 'NM', '*5/*5': 'PM' },
  TPMT: { '*1/*1': 'NM', '*3A/*3A': 'PM' },
  DPYD: { '*1/*1': 'NM', '*2A/*2A': 'PM' }
};

const drugGeneMap = {
  CLOPIDOGREL: 'CYP2C19',
  CODEINE: 'CYP2D6',
  WARFARIN: 'CYP2C9',
  SIMVASTATIN: 'SLCO1B1',
  AZATHIOPRINE: 'TPMT',
  FLUOROURACIL: 'DPYD'
};

const phenotypeRiskMap = {
  CYP2C19: {
    NM: { risk_label: 'Safe', severity: 'none' },
    IM: { risk_label: 'Adjust Dosage', severity: 'moderate' },
    PM: { risk_label: 'Ineffective', severity: 'high' },
    RM: { risk_label: 'Adjust Dosage', severity: 'moderate' },
    URM: { risk_label: 'Toxic', severity: 'high' }
  },
  CYP2D6: {
    NM: { risk_label: 'Safe', severity: 'none' },
    IM: { risk_label: 'Adjust Dosage', severity: 'moderate' },
    PM: { risk_label: 'Ineffective', severity: 'high' },
    RM: { risk_label: 'Adjust Dosage', severity: 'moderate' },
    URM: { risk_label: 'Toxic', severity: 'high' }
  }
  // Add others similarly
};

function determinePhenotype(variants, gene) {
  const stars = variants.filter(v => v.gene === gene).map(v => v.star);
  if (stars.length === 2) {
    const diplotype = stars.join('/');
    const phenotype = genePhenotypeMap[gene][diplotype] || 'Unknown';
    return { diplotype, phenotype };
  }
  return { diplotype: 'Unknown', phenotype: 'Unknown' };
}

function determineRisk(drug, phenotype) {
  const gene = drugGeneMap[drug];
  return phenotypeRiskMap[gene][phenotype] || { risk_label: 'Unknown', severity: 'unknown' };
}

module.exports = { determinePhenotype, determineRisk, drugGeneMap };
