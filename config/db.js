// Config - db.js
const mongoose = require('mongoose');

const dbConnect = () => {
    const dbUri = process.env.MONGO_URI;
    try {
        mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = dbConnect;