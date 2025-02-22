const connection = require('../config/database');
const { getAllUsers } = require('../service/CRUDService');

const getHomepage = async (req, res) => {
    let result = await getAllUsers();
    return res.render('home.ejs', { listUser: result });

}

const getQuyenLe = (req, res) => {
    res.render('example.ejs');
}

const getCreateUser = (req, res) => {
    res.render('create.ejs');
}

module.exports = {
    getHomepage, getQuyenLe, getCreateUser
}