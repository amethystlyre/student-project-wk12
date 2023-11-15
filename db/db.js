const mysql = require('mysql2');
//var settings = require('./settings.json');
var db;

function connectDatabase() {
    if (!db) {
        // Connect to database
        db = mysql.createConnection(
            {
            host: 'localhost',
            // MySQL username,
            user: 'root',
            // TODO: Add MySQL password
            password: '123456',
            database: 'movie_db'
            },
            console.log(`Connected to the movie_db database.`)
        );
    }
    return db;
}

  module.exports = connectDatabase();  