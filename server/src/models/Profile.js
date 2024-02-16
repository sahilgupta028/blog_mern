const express = require('express');
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    username: String,
    name: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      }
    ]
  });
  
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;