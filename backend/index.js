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

//get all songs
app.get("/", (req, res) => {
  pool.getConnection((error, connection) => {
    connection.query("SELECT * FROM songs", (error, result) => {
      if (error) throw error;
      console.log(result);
      res.send(result);
    });
  });
});

//get individual song based on id
app.get("/:id", (req, res) => {
  pool.getConnection((error, connection) => {
    connection.query(
      "SELECT * FROM songs WHERE id = ?",
      [req.params.id],
      (error, result) => {
        if (error) throw error;
        console.log(result);
        res.send(result);
      }
    );
  });
});

//add a song
app.post("/addSong", (req, res) => {
  const parameters = req.body;

  pool.getConnection((err, connection) => {
    connection.query("INSERT INTO songs SET ?", parameters, (err, rows) => {
      if (err) throw err;

      // console.log(rows.length);
      res.send(`${parameters.name} has been added.`);
    });
  });
});

//update
app.put("/", (req, res) => {
  const { id, name, artist, album } = req.body;

  pool.getConnection((err, connection) => {
    connection.query(
      "UPDATE songs SET name=?, WHERE id=?",
      [name, artist, album, id],
      (err, rows) => {
        if (err) throw err;

        // console.log(rows.length);
        res.send(`song has been updated.`);
      }
    );
  });
});

app.listen(port, console.log(`Server running on port: ${port}`));
