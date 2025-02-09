const connection = require('../config/database');

const postCreateuser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>>> email: ", email, "name: ", name, "city: ", city);




    connection.query(
        `INSERT INTO Users (email, name, city)
         VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, result) {
            res.send("Success!");
        },

    );
}
module.exports = {
    postCreateuser
}