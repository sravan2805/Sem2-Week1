const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Handle POST request
app.post('/data', (req, res) => {
  const data = req.body; // Get the JSON data from the request body
  console.log(data); // Log the data to the console

  res.send('JSON data received'); // Send a simple response
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
