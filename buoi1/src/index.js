const express = require('express');
require('dotenv').config();

const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');
const connection = require('./config/database');
const configViewEngine = require('./config/viewEngine');

const webRouter = require('./routes/web');
const apiRoutes = require('./routes/api');

const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', webRouter);
app.use('/v1/api/', apiRoutes);
//config
//config view engine
configViewEngine(app);


(async() => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on http://${hostname}:${port}`);
    });
  } catch (error) {
    console.log('Error connecting to database:', error);
  }

})()


