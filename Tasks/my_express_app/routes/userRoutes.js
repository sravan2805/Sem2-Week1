const express = require('express');
const router = express.Router();

// Define a sample GET route
router.get('/users', (req, res) => {
  res.send('List of users');
});

// Define a sample POST route
router.post('/users', (req, res) => {
  const { username, email } = req.body;
  res.send(`User created: ${username}, ${email}`);
});

// Export the router
module.exports = router;
