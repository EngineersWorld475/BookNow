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
      _id: updatedUser?._id,
      username: updatedUser?.username,
      email: updatedUser?.email,
      address: updatedUser?.address,
      isBlocked: updatedUser?.isBlocked,
      profilePicture: updatedUser?.profilePicture,
      refreshToken: updatedUser?.refreshToken,
      gender: updatedUser?.gender,
      nationality: updatedUser?.nationality,
      phoneNumber: updatedUser?.phoneNumber,
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
  await User.findOneAndUpdate(
    { refreshToken },
    {
      $set: {
        refreshToken: '',
      },
    },
    { new: true }
  );
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
  });
  return res.status(200).json({ message: 'User logout successfully' });
});

// update user
const updateUser = asyncHandler(async (req, res) => {
  const {
    username,
    email,
    phoneNumber,
    gender,
    profilePicture,
    nationality,
    address,
  } = req.body;
  console.log(req.params.id);
  console.log(req.user._id);
  if (req.params.id !== req.user._id.toString()) {
    throw new Error('You are not able to update this user');
  }

  const user = await User.findById(req.params.id);

  if (!user) {
    throw new Error('User not found... please try again later');
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        username,
        email,
        phoneNumber,
        nationality,
        address,
        gender,
        profilePicture,
      },
    },
    { new: true }
  );
  res.status(200).json(updatedUser);
});

module.exports = { signupUser, signInUser, signOutUser, updateUser };
