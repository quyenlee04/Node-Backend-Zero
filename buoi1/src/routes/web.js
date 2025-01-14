const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome")
})

router.get('/quyenle', (req, res) => {
    res.render('example.ejs');
})

module.exports = router;