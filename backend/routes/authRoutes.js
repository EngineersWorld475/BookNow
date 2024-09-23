const express = require('express');
const {
  signupUser,
  signInUser,
  signOutUser,
  updateUser,
} = require('../controllers/authController');
const { authMiddleWare } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/sign-up', signupUser);
router.post('/sign-in', signInUser);
router.post('/logout', signOutUser);
router.put('/update-user/:id', authMiddleWare, updateUser);

module.exports = router;
