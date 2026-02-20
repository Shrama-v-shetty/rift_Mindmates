# MindMates — Pharmacogenomic Risk Prediction System

**Precision Medicine Algorithm**
RIFT 2026 Hackathon — Pharmacogenomics / Explainable AI Track

---

## 1. Overview

MindMates is an AI-powered web application that analyzes patient genetic data (VCF files) to predict personalized drug response risks. It identifies clinically relevant pharmacogenomic variants, generates CPIC-aligned dosing recommendations, and provides explainable clinical insights using a local LLM (Gemini API).

The goal is to reduce adverse drug reactions through precision medicine.

---

## 2. Problem Statement

Adverse Drug Reactions (ADRs) cause significant preventable deaths each year. Many are avoidable through pharmacogenomic testing. MindMates addresses this by automating the analysis of patient genomic data to provide actionable drug risk assessments and explanations for clinicians and patients.

---

## 3. Key Features

* Upload and parse VCF genomic files
* Detect variants in six pharmacogenes: CYP2D6, CYP2C19, CYP2C9, SLCO1B1, TPMT, DPYD
* Predict drug-specific risks for Codeine, Warfarin, Clopidogrel, Simvastatin, Azathioprine, Fluorouracil
* Generate explainable AI clinical insights via Gemini API LLM
* Produce structured JSON output for each patient

---

## 4. System Architecture

1. User uploads VCF file and enters drug names
2. Backend parses genomic variants and maps them to pharmacogenes
3. Risk engine predicts drug response using CPIC guidelines
4. Gemini API LLM generates explanations for each prediction
5. Results returned to frontend as structured JSON and displayed in a dashboard


      +-----------------+
      |     User        |
      | Uploads VCF &   |
      | Enters Drugs    |
      +--------+--------+
               |
               v
      +-----------------+
      |    Backend      |
      | Parses genomic  |
      | variants & maps |
      | to pharmacogenes|
      +--------+--------+
               |
               v
      +-----------------+
      |   Risk Engine   |
      | Predicts drug   |
      | response using  |
      | CPIC guidelines |
      +--------+--------+
               |
               v
      +-----------------+
      | Gemini API LLM  |
      | Generates       |
      | Explanations    |
      +--------+--------+
               |
               v
      +-----------------+
      |   Frontend      |
      | Displays JSON   |
      | Dashboard       |
      +-----------------+

---



## 5. Technology Stack

**Frontend:** HTML, CSS, JavaScript
**Backend:** Node.js, Express.js
**Database:** MongoDB
**AI/LLM:** Gemini API local inference

---

## 6. Installation

```bash
git clone https://github.com/your-username/mindmates.git
cd mindmates
npm install
npm start
```

Server runs at: `http://localhost:5000`
Open frontend: `frontend/welcome.html` in a browser

---

## 7. API Endpoints

**POST /analyze** – Analyze patient VCF and drugs

* **Request Body:**

```json
{
  "patient_id": "PATIENT_XXX",
  "vcf_file": "uploaded_file.vcf",
  "drugs": ["CODEINE", "WARFARIN"]
}
```

* **Response:**

```json
{
  "patient_id": "PATIENT_XXX",
  "drug": "CODEINE",
  "risk_assessment": {...},
  "pharmacogenomic_profile": {...},
  "llm_generated_explanation": {...}
}
```


---

## 8. Usage

1. Open the web application in a browser
2. Upload a patient VCF file
3. Enter one or more drug names
4. Click **Analyze**
5. View pharmacogenomic risk results and LLM explanations
6. Download JSON report if needed

---

## 9. Team Members

* Nikhitha
* Pooja A P
* Sangeetha
* Shrama V Shetty

---

## 10. Live Links

* **Live Demo:** [https://your-live-demo-link.com](https://your-live-demo-link.com)
* **GitHub Repository:** [https://github.com/your-username/mindmates](https://github.com/your-username/mindmates)
* **LinkedIn Demo Video:** [https://linkedin.com/your-demo-video](https://linkedin.com/your-demo-video)

---
