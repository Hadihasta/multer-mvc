const { Pool } = require("pg");
const client = new Pool({
  host: "127.0.0.1",
  port: 5432,
  database: "hw10",
  user: "postgres",
  password: "postgre",
});

module.exports = client;
