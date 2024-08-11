const express = require('express');
const app = express();

// Sample GET route that responds with JSON
app.get('/api/user', (req, res) => {
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
  };

  res.json(user);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});