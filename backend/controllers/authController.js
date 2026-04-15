const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { secret } = require('../config');

// 🔥 SIGNUP
async function signup(req, res) {
  try {
    let { email, password } = req.body;

    email = email.trim().toLowerCase(); // important

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Signup successful', user });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// 🔥 LOGIN
async function login(req, res) {
  try {
    let { email, password } = req.body;

    email = email.trim().toLowerCase(); // important
     
    const user = await User.findOne({ email });
    console.log("USER FROM DB:", user);


    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
      console.log("password match", validPassword);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      { userId: user._id },
      secret,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { signup, login };
