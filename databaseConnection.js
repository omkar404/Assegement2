const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  seedDB();
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});


