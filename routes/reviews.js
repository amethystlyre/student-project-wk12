const express = require('express');
const reviews = express.Router();

const db = require('../db/db.js');
const sql = `SELECT movie_name AS Movies,
reviews.review AS Reviews
FROM reviews
LEFT JOIN movies ON reviews.movie_id = movies.id`

reviews.get('/', (req, res) => {
    console.info(`${req.method} request received for reviews`);
    // Query database
    db.query(sql, function (err, results) {
        //console.log(results);
        res.json(results);
    });
});


reviews.post('/add', (req, res) => {
    console.info(`${req.method} request received for reviews`);

    const sql = `INSERT INTO reviews (movie_id,review)
    VALUES (?,?)`;
    const params = [req.body.movie_id, req.body.review];

    // Query database
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: req.body
        });
    });
});

reviews.put('/:id', (req, res) => {
    console.info(`${req.method} request received for reviews`);

    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    const params = [req.body.review, req.params.id];

    // Query database
    db.query(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ error: err.message });
          } else if (!result.affectedRows) {
            res.json({
              message: 'Movie not found'
            });
          } else {
            res.json({
              message: 'success',
              data: req.body,
              changes: result.affectedRows
            });
          }
    });
});

module.exports = reviews;