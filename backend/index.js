const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 6000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//sql
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "password",
  database: "musicDB",
});

app.get("/", (req, res) => {
  pool.getConnection((error, connection) => {
    connection.query("SELECT * FROM songs", (error, result) => {
      if (error) throw error;
      console.log(result);
      res.send(result);
    });
  });
});

app.listen(port, console.log(`Server running on port: ${port}`));
