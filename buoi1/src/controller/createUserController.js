const connection = require('../config/database');
const User = require('../models/User');

const postCreateuser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // console.log(">>>> email: ", email, "name: ", name, "city: ", city);


    // let [result, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    // );

    await User.create({ email, name, city });
    res.send('success');
}
module.exports = {
    postCreateuser
}