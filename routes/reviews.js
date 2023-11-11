const express = require('express');
const reviews = express.Router();

const db = require('../db/db.js');
const sql = `SELECT movie_name AS Movies,
reviews.review AS Reviews
FROM reviews
LEFT JOIN movies ON reviews.movie_id = movies.id`

reviews.get('/', (req, res) => {
    console.info(`${req.method} request received for movies`);
    // Query database
    db.query(sql, function (err, results) {
        //console.log(results);
        res.json(results);
    });
});

module.exports = reviews;