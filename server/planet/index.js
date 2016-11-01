var express = require('express');
var controller = require('./planet.controller.js')();
var router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.detail);
module.exports = router;
