const express = require('express');
let router = express.Router();
const heroesControllers = require('../controllers/heroesControllers.js');

router.get('/', heroesControllers.listado);
router.get('/:id', heroesControllers.detalleId);
router.get('/bio/:id/:ok?', heroesControllers.detalleBio);
module.exports = router;