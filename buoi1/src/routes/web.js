const express = require('express');
const router = express.Router();
const { getHomepage, getQuyenLe, getCreateUser, getUpdateUser, postUpdateUser, postDeleteUser, postHandleRemoveUser} = require('../controller/homeController');
const { postCreateuser } = require('../controller/createUserController');


//router.Methods('/router', handlers)
router.get('/', getHomepage);
router.get('/quyenle', getQuyenLe);
router.get('/create', getCreateUser);
router.get('/update/:id', getUpdateUser);


router.post('/create-user', postCreateuser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);
module.exports = router;