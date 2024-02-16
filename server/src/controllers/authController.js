// src/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Post = require('../models/Post');

const SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

exports.register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const user = new User({ name, username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    console.log("ok");

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, SECRET);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.profile = async (req, res) => {
  try {
    const profile = await User.findOne({ username: req.params.username });
    console.log(profile);
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { username } = req.params; 
    const user = await User.findOne({username: username});
    const { title, description} = req.body;
    console.log(req.body);
    console.log(username);
    console.log(title);
    console.log(description);
    const newPost = new Post({ title, description, username }); // Corrected to username
    await newPost.save();
    user.posts.push(newPost._id);
    await user.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

