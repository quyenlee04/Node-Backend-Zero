const connection = require('../config/database');
const getUpdateUser = (req, res) => {
    const UsersId = req.params.id;
    console.log(req.params, UsersId)
    res.render('update.ejs');
}

module.exports = { getUpdateUser }