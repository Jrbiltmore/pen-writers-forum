// Utilities - helpers.js
const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
};

module.exports = { formatDate };