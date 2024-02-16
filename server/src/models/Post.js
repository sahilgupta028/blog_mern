const express = require('express');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: { type: String},
    description: { type: String},
    username: { type: String },
    createdAt: { type: Date, default: Date.now },
  });
  
const Post = mongoose.model('Post', postSchema);

module.exports = Post;