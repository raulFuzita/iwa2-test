const express = require('express');
const router = express.Router();

const controller = require('../../controllers/item/itemController');

router.get('/', controller.getWorld);
router.get('/:foo/:bar', controller.getWorldParams);
router.post('/', controller.postWorld);

module.exports = router;