const connection = require('../config/database');

const postCreateuser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>>> email: ", email, "name: ", name, "city: ", city);


    let [result, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );

    console.log(">>>>", result);
    res.send('success');
}
module.exports = {
    postCreateuser
}