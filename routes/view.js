const path = require('path');

const express = require('express');

const router = express.Router();

const viewController = require('../controller/QR-connect');

router.get('/', viewController.getIndexPage);

router.get('/view', viewController.getViewPage);

module.exports = router; 
