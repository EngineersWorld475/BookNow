const asyncHandler = require('express-async-handler');
const User = require('../models/userModal');
const { generateToken } = require('../config/jwtToken');
const { generateRefreshToken } = require('../config/refreshToken');

// register user
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

  if (password.length < 7 || password.length > 15) {
    throw new Error(
      'Password can not be greater than 15 and less than 7 characters'
    );
  }
  if (password !== password.toLowerCase()) {
    throw new Error('Password should be in small letters');
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

// login user
const signInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser && (await existingUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(existingUser._id);
    const updatedUser = await User.findByIdAndUpdate(
      existingUser._id,
      {
        $set: {
          refreshToken: refreshToken,
        },
      },
      { new: true }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    const token = generateToken(existingUser._id);
    return res.status(200).json({
      username: updatedUser?.username,
      email: updatedUser?.email,
      address: updatedUser?.address,
      isBlocked: updatedUser?.isBlocked,
      profilePicture: updatedUser?.profilePicture,
      refreshToken: updatedUser?.refreshToken,
      token: token,
    });
  } else {
    throw new Error('Invalid credentials');
  }
});

//sign out user
const signOutUser = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies.refreshToken) {
    throw new Error('No refresh token in cookies');
  }
  const refreshToken = cookies.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    req.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); //forbidden
  }
  const updatedUser = await User.findOneAndUpdate(
    { refreshToken },
    {
      $set: {
        refreshToken: '',
      },
    },
    { new: true }
  );
  console.log('....updatedUser', updatedUser);
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
  });
  return res.status(200).json({ message: 'User logout successfully' });
});

module.exports = { signupUser, signInUser, signOutUser };
