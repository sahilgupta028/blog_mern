const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const upload = require('../controllers/upload');

router.post('/register', upload.single('image'), authController.register);
router.post('/login', authController.login);
router.get('/profile/:username', authController.profile);
router.post('/profile/:username/post', authController.createPost);
router.get('/posts', authController.getAllPosts);
router.get('/posts/:username', authController.getMyPosts);
router.delete('/posts/:postId', authController.deletePost);
router.post('/profile/:username',  upload.single('image'), authController.update);
module.exports = router;