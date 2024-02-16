const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile/:username', authController.profile);
router.get('/profile/:username/post', authController.createPost);


module.exports = router;