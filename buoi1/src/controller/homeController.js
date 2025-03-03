const connection = require('../config/database');
const { param } = require('../routes/web');
const User = require('../models/User');
const { getAllUsers, getUserId, updateUser, deleteUser } = require('../service/CRUDService');

const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUser: results });

}

const getUpdateUser = async (req, res) => {
    const userId = req.params.id
    // let user = await getUserId(userId)
    let user = await User.findById(userId).exec();
    res.render('update.ejs', { userEdit: user });
}

const getQuyenLe = (req, res) => {
    res.render('example.ejs');
}

const getCreateUser = (req, res) => {
    res.render('create.ejs');
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    await User.updateOne({ _id: userId }, { name: name, email: email, city: city });
    // await updateUser(email, name, city, userId);

    // res.send('Update success');
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { userEdit: user });
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await User.deleteOne({ _id: id });
    res.redirect('/');
}

module.exports = {
    getHomepage, getQuyenLe, getCreateUser, getUpdateUser, postUpdateUser, postDeleteUser, postHandleRemoveUser
}