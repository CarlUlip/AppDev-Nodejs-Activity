const express = require('express');
const router = express.Router();
const carl = require('../controller/Carl');
router.get('/', carl.service);


module.exports = router;