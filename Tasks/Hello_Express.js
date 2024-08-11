const express = require('express');
const app = express();

// Create a GET route at /hello
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
