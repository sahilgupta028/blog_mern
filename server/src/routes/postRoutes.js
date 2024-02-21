const express = require('express');
const router = express.Router();
const multer = require('multer');
const Post = require('../models/Post');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Route for creating a new post
router.post('/', upload.single('image'), async (req, res) => {
  const { title, description, username } = req.body;
  const imagePath = req.file.path;
  
  try {
    const newPost = new Post({
      title,
      image: imagePath,
      description,
      username,
    });

    await newPost.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
