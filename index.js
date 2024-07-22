const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Movie = require('./movie');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/moviesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});


// Routes
// Create
app.post('/movies', async (req, res) => {
  const movie = new Movie(req.body);
  try {
    const savedMovie = await movie.save();
    res.status(201).send(savedMovie);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read all
app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read one
app.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send();
    }
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update
app.put('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!movie) {
      return res.status(404).send();
    }
    res.status(200).send(movie);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete
app.delete('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).send();
    }
    res.status(200).send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
