const express = require('express');
const router = express.Router();

const controller = require('../../controllers/user/userController');

router.post('/', controller.createUser);
router.get('/', controller.getUsers);

module.exports = router;