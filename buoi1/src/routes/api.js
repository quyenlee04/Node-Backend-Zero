const express = require('express');
const routerAPI = express.Router();

const {getUserAPI} = require('../controller/apiController');

//router.Methods('/router', handlers)
routerAPI.get('/', (req, res) => {
    res.send('Hello World!');
});
routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'hello world from api'
    })
});

routerAPI.get('/users', getUserAPI);

module.exports = routerAPI;