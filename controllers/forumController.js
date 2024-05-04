// Controllers - forumController.js
const Post = require('../models/post');
const Comment = require('../models/comment');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('comments');
        res.render('forum/index', { posts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Error fetching posts');
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({ title, content, author: req.user._id });
        await newPost.save();
        res.redirect('/forum');
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send('Error creating post');
    }
};

module.exports = { getAllPosts, createPost };