const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// PUT route to handle data updates
app.put('/update', (req, res) => {
  const updatedData = req.body; // Get the JSON data from the request body
  console.log('Updated data:', updatedData); // Log the data to the console

  res.send('Data updated'); // Send a response to the client
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});