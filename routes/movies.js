const express = require('express');
const movies = express.Router();
const db = require('../db/db.js');

movies.get('/', (req, res) => {
    console.info(`${req.method} request received for movies`);
    // Query database
    db.query('SELECT * FROM movies', function (err, results) {
        //console.table(results);
        res.json(results);
    });
});

// Query database

// let deletedRow = 2;

// db.query(`DELETE FROM favorite_books WHERE id = ?`,deletedRow, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

  module.exports = movies;

