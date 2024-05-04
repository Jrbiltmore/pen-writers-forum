// Controllers - userController.js
const User = require('../models/user');

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.render('profile', { user });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).send('Error fetching user profile');
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const { username, email } = req.body;
        await User.findByIdAndUpdate(req.user._id, { username, email });
        res.redirect('/profile');
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).send('Error updating profile');
    }
};

module.exports = { getUserProfile, updateUserProfile };