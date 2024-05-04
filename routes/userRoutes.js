// Routes - userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user/profile', userController.getUserProfile);
router.post('/user/update', userController.updateUserProfile);

module.exports = router;