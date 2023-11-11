SELECT movie_name AS Movies,
reviews.review AS Reviews
FROM reviews
LEFT JOIN movies ON reviews.movie_id = movies.id;