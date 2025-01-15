const express = require('express');
const router = express.Router();
const {getHomepage, getQuyenLe} = require('../controller/homeController');

//router.Methods('/router', handlers)
router.get('/', getHomepage);
router.get('/quyenle', getQuyenLe);

module.exports = router;