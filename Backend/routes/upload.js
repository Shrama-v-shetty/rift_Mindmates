// routes/upload.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { handleVCFUpload } = require('../controllers/vcfController');

const upload = multer({ dest: 'uploads/' });

router.post('/vcf', upload.single('vcf'), handleVCFUpload);

module.exports = router;


