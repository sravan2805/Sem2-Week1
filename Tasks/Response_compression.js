const express = require('express');
const compression = require('compression');
const app = express();

// Use compression middleware
app.use(compression());

// Sample route
app.get('/', (req, res) => {
  res.send('This response is compressed if the client supports it.');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
