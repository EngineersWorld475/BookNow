const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModal');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleWare = asyncHandler(async (req, res, next) => {
  if (req.headers.authorization.startsWith('Bearer')) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findById(decode?.id);
      req.user = user;
      next();
    } catch (error) {
      throw new Error('Token expired...Please login again');
    }
  } else {
    throw new Error('There is no token attached to header');
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const user = await User.findOne({ email });
  if (user.role !== 'admin') {
    throw new Error('You are not an admin');
  }
  next();
});

module.exports = { authMiddleWare, isAdmin };
