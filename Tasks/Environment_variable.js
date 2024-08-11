const express = require('express');
const app = express();

// Use environment variable for port, or default to 3000 if not set
const port = process.env.PORT || 3000;

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});