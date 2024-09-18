const express = require('express');
const {
  signupUser,
  signInUser,
  signOutUser,
} = require('../controllers/authController');
const router = express.Router();

router.post('/sign-up', signupUser);
router.post('/sign-in', signInUser);
router.post('/logout', signOutUser);

module.exports = router;
