module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  PORT: 3307,
  DB: "testdocker",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
