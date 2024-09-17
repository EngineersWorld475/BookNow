const express = require('express');
const { signupUser } = require('../controllers/authController');
const router = express.Router();

router.post('/sign-up', signupUser);

module.exports = router;
