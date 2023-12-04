const express = require('express');
const router = express.Router();
const usercontroller = require('../Controller/UserController');

router.post('/register',usercontroller.register);

module.exports = router;