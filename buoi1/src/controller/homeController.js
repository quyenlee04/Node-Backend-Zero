const connection = require('../config/database');


const getHomepage = (req, res) => {
    res.render('home.ejs');

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