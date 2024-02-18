const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile/:username', authController.profile);
router.post('/profile/:username/post', authController.createPost);
router.get('/posts', authController.getAllPosts);
router.get('/posts/:username', authController.getMyPosts);
router.delete('/posts/:postId', authController.deletePost);
module.exports = router;