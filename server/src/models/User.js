// src/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: {type: String, required: true},
  age: {type: Number},
  contact: {type: Number},
  profession: {type: String},
  imagePath: {type: String},
  email: {type: String, required: true},
  password: { type: String, required: true },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    }
  ]
});

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;

