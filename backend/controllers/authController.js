const asyncHandler = require('express-async-handler');
const User = require('../models/userModal');

const signupUser = asyncHandler(async (req, res) => {
  let { username, email, password, confirmPassword, address } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !address ||
    username.trim() === '' ||
    email.trim() === '' ||
    password.trim() === '' ||
    address.trim() === '' ||
    confirmPassword.trim() === ''
  ) {
    throw new Error('All fields required');
  }

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  const newUser = new User({
    username,
    email,
    address,
    password,
  });

  await newUser.save();

  res.status(201).json(newUser);
});

module.exports = { signupUser };
