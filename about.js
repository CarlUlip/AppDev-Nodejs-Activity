const express = require('express');
const router = express.Router();
const carl = require('../controller/Carl');
router.get('/', carl.about);


module.exports = router;