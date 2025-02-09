const express = require('express');
const router = express.Router();
const {getHomepage, getQuyenLe, getCreateUser} = require('../controller/homeController');
const {postCreateuser } = require('../controller/createUserController');

//router.Methods('/router', handlers)
router.get('/', getHomepage);
router.get('/quyenle', getQuyenLe);
router.get('/create', getCreateUser);


router.post('/create-user', postCreateuser);

module.exports = router;