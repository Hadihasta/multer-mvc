// definisikan dependency yang dibutuhkan
const express = require("express");
const app = express();
const multer = require("multer");
const movies = require("./models/user");

//untuk menambahkan path
const path = require("path");

app.use("/upload", express.static(path.join(__dirname, "upload")));

// menentukan lokasi pengunggahan
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/upload"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

app.use(express.json());

// movies
app.get("/movies", movies.movies);

// menerapkan middleware multer hanya pada rute berikut
app.put("/movies/upload", multer({ storage: diskStorage }).single("photo"), (req, res) => {
  const file = req.file.path;
  console.log(file);
  if (!file) {
    res.status(400).send({
      status: false,
      data: "No File is selected.",
    });
  }

  // contacts[req.query.index].photo = req.file.path;
  res.send(file);
});

app.listen(3000, function () {
  console.log("server running");
});
