const express = require('express');
const app = express();

// Redirect Route
app.get('/old-route', (req, res) => {
  res.redirect('/new-route');
});

// Target Route
app.get('/new-route', (req, res) => {
  res.send('You have been redirected to the new route!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
