const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to Pug
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views')); // Specify the views directory

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {
  res.render('index'); // Adjusted to render index.pug
});

// Register Route
app.get('/register', (req, res) => {
  res.render('register'); // Render the register.pug file
});

// Login Route
app.get('/login', (req, res) => {
  res.render('login'); // Render the login.pug file
});

// Centers Route
app.get('/centers', (req, res) => {
  res.render('centers'); // Render the centers.pug file
});

// Add this to your app.js file
app.get('/reviews', (req, res) => {
  res.render('reviews'); // Render the reviews.pug file
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
