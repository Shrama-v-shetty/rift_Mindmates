const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function generateExplanation({ drug, gene, severity }) {

  const prompt = `
You are a clinical pharmacogenomics AI.

Explain in simple clinical terms:

Drug: ${drug}
Gene: ${gene}
Severity: ${severity}

Explain:
1. Why this gene affects the drug
2. What the severity level means
3. What dosing adjustment or action is needed
Keep it brief and professional.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a clinical AI." },
      { role: "user", content: prompt }
    ]
  });

  return completion.choices[0].message.content;
}

module.exports = generateExplanation;
