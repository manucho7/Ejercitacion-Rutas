const express = require('express');
const router = express.Router();
const rutaController = require('../controllers/mainControllers');

router.get('/', rutaController.home);

router.get('/creditos', rutaController.creditos);

router.get('*', rutaController.default);

module.exports = router;