const express = require('express');
const router = express.Router();
const {getHomepage, getQuyenLe} = require('../controller/homeController');
const {postCreateuser } = require('../controller/createUserController');

//router.Methods('/router', handlers)
router.get('/', getHomepage);
router.get('/quyenle', getQuyenLe);
router.post('/create-user', postCreateuser);

module.exports = router;