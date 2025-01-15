const getHomepage = (req, res) => {
    res.send("Welcome");
}

const getQuyenLe = (req, res) => {
    res.render('example.ejs');
}
module.exports = {
    getHomepage, getQuyenLe
}