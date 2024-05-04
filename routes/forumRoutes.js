// Routes - forumRoutes.js
const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');

router.get('/forum', forumController.getAllPosts);
router.post('/forum/post', forumController.createPost);
router.get('/forum/post/:id', forumController.getPostDetails);

module.exports = router;