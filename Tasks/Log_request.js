const express = require('express');
const app = express();

// Middleware to log the request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Log the request method and URL
  next(); // Call the next middleware or route handler
});

// Sample routes for testing
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/data', (req, res) => {
  res.send('Data received');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
