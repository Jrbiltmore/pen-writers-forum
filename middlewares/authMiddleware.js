// Middlewares - authMiddleware.js
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

const ensureGuest = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/forum');
};

module.exports = { ensureAuthenticated, ensureGuest };