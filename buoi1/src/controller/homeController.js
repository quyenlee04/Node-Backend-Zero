const connection = require('../config/database');


const getHomepage = (req, res) => {
    let user = [];
    connection.query(
        'SELECT * FROM `Users`',
        function (err, results, fields) {
            user = results;
          console.log(">>>> result",results); // results contains rows returned by server
          res.send(JSON.stringify(user));
        }
      );
    
}

const getQuyenLe = (req, res) => {
    res.render('example.ejs');
}
module.exports = {
    getHomepage, getQuyenLe
}