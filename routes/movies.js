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


movies.post('/add', (req, res) => {
    console.info(`${req.method} request received for movies`);

    const sql = `INSERT INTO movies (movie_name)
    VALUES (?)`;
    const params = [req.body.movie_name];

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

movies.delete('/', (req, res) => {

    // Query database
    const hasQuery = Object.keys(req.query).length > 0;

    let deletedRow = parseInt(req.query.id);
    console.log(typeof deletedRow);

    if (hasQuery && typeof deletedRow === 'number'){
        db.query(`DELETE FROM movies WHERE id = ?`, deletedRow, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
        res.status(200).json({
            message: 'deleted success',
            data: result.affectedRows
        });
    });
    }


});




module.exports = movies;


