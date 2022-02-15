const express = require('express');
const router = express.Router();
const mainControlador = require("../controllers/mainControlador");

router.get('/', mainControlador.home);
router.get('/register', mainControlador.register);
router.get('/login', mainControlador.login);


module.exports = router;