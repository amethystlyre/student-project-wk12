const express = require('express');
// Import and require mysql2
const movieRouter = require('./routes/movies.js');
const reviewRouter = require('./routes/reviews.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/movies', movieRouter);
app.use('/api/reviews', reviewRouter);





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


