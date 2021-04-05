const path = require('path');

const express = require('express');

const router = express.Router();

const generateController = require('../controller/QR-connect');

// router.get('/generate', generateController.getGeneratePage);

router.post('/generate', generateController.postGenerateQR);

module.exports = router;