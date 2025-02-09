const connection = require('../config/database');


const getHomepage = (req, res) => {
    res.render('home.ejs');
    
}

const getQuyenLe = (req, res) => {
    res.render('example.ejs');
}


module.exports = {
    getHomepage, getQuyenLe
}