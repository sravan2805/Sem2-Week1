const express = require('express');
const app = express();

// Sample route that might cause an error
app.get('/error', (req, res, next) => {
  const error = new Error('Something went wrong!');
  error.status = 500; // Set the HTTP status code
  next(error); // Pass the error to the error handling middleware
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace to the console

  // Send an error response
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
