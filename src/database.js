const { Client } = require("pg");

const connectionData = {
  host: "containers-us-west-43.railway.app",
  user: "postgres",
  database: "railway",
  password: "u5Y8DqEHXOtVR6hXzSeF",
  port: 7257,
};

const Pool = new Client(connectionData);

module.exports = Pool;
