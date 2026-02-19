const express = require("express");
const multer = require("multer");
const { handleVCFUpload } = require("../controllers/vcfController");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("vcf"), handleVCFUpload);

module.exports = router;
