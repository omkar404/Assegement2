const mongoose = require('mongoose');
const Movie = require('./movie'); 

mongoose.connect('mongodb://localhost:27017/moviesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  seedDB();
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});


