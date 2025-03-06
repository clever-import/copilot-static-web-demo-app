const express = require('express');
const router = express.Router();
const path = require('path');

// Route for the home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// Route for the about page
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/about.html'));
});

// Route for the contact page
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/contact.html'));
});

module.exports = router;