// Controllers - authController.js
const User = require('../models/user');
const passport = require('passport');

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({ email });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            res.redirect('/forum');
        });
    } catch (error) {
        console.log('Registration failed:', error);
        res.redirect('/register');
    }
};

const loginUser = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/forum',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
};

module.exports = { registerUser, loginUser };