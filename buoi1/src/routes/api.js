const express = require('express');
const routerAPI = express.Router();

const { getUserAPI, postUserAPI, putUserAPI, deleteUserAPI, uploadFileAPI, handleFileUploads } = require('../controller/apiController');

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
routerAPI.post('/users', postUserAPI);
routerAPI.put('/users/:id', putUserAPI);
routerAPI.delete('/users/:id', deleteUserAPI);

routerAPI.post('/customers/file', uploadFileAPI);
routerAPI.post('/customers/files', handleFileUploads);
module.exports = routerAPI;