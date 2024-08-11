const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Sample movie data
let movies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 },
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
];

// GET/movies - Get all movies
app.get('/movies', (req, res) => {
    res.json(movies);
});

// GET/movies/:id - Get a single movie by ID
app.get('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');
    res.json(movie);
});

// POST/movies - Add a new movie
app.post('/movies', (req, res) => {
    const newMovie = {
        id: movies.length + 1,
        title: req.body.title,
        director: req.body.director,
        year: req.body.year,
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// PUT/movies/:id - Update a movie by ID
app.put('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');

    movie.title = req.body.title;
    movie.director = req.body.director;
    movie.year = req.body.year;

    res.json(movie);
});

// DELETE/movies/:id - Delete a movie by ID
app.delete('/movies/:id', (req, res) => {
    const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (movieIndex === -1) return res.status(404).send('Movie not found');

    const deletedMovie = movies.splice(movieIndex, 1);
    res.json(deletedMovie);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
