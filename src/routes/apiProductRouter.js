const express = require('express');
const router = express.Router();
const path = require('path')
const controller = require('../controllers/apiProductController')

router.get('/', controller.list);
router.get('/:id', controller.show)

module.exports = router;