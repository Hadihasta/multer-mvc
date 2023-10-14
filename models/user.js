const db = require("../db/database");
const movies = (req, res) => {
  db.query("SELECT * FROM movies", (err, result) => {
    db.query("POST * FROM movies  "(id, title, genres, year));
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json(result);
  });
};

module.exports = { movies };
