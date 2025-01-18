const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');

const connection = require('./config/database');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');

const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

app.use('/', webRouter);
//config view engine
configViewEngine(app);




connection.query(
  'SELECT * FROM `Users`',
  function (err, results, fields) {
    console.log(">>>> result",results); // results contains rows returned by server
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});

