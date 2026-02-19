// utils/llm.js
const { exec } = require('child_process');

function generateExplanation(gene, phenotype, drug) {
  const prompt = `Explain how ${gene} with phenotype ${phenotype} affects ${drug} metabolism.`;

  return new Promise((resolve, reject) => {
    exec(`ollama generate llama2 "${prompt}"`, (err, stdout, stderr) => {
      if (err) return reject(err);
      resolve({ summary: stdout.trim() });
    });
  });
}

module.exports = { generateExplanation };

