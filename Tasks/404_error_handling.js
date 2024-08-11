const express = require('express');
const app = express();

// Define some routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Custom 404 Error Handler Middleware
app.use((req, res, next) => {
  res.status(404).send('Sorry, the page you are looking for does not exist.');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
