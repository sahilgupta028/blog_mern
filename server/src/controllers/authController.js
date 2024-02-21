// src/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Post = require('../models/Post');
const cloudinary = require('../utils/cloudinary');

const SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

exports.register = async (req, res) => {
  try {
    const { name, username, email, age, contact, profession, password  } = req.body;
    const imagePath = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = imagePath.secure_url;
    console.log(imagePath);
    const user = new User({ name, username, email, age, contact, profession, password, imagePath: imageUrl });
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

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, SECRET);
    res.status(200).json({ token });
    console.log("login done");
  } catch (error) {
    console.log('Error during login:', error);
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
    const { title, description, username} = req.body;
    const user = await User.findOne({username: username});
    console.log(title);
    console.log(description);
    const newPost = new Post({ title, description, username }); 
    await newPost.save();
    user.posts.push(newPost._id);
    await user.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}, 'title description username');

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({username: req.params.username}, 'title description username');

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, age, email, contact, profession } = req.body;
    let profileImage = '';

    if (req.file) {
      profileImage = req.file.filename;
    }

    // Update the user's profile in the database
    const updatedProfile = await User.findOneAndUpdate(
      { username: req.params.username }, 
      { name, age, email, contact, profession, profileImage }, 
      { new: true } 
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }

    // Log the updated profile data
    console.log('Updated Profile:', updatedProfile);

    // Send a success response
    res.status(200).json({ message: 'Profile updated successfully', updatedProfile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

