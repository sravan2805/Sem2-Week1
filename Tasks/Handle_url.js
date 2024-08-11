const express = require('express');
const app = express();

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Sample POST route to handle form data
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received the following data: Name - ${name}, Email - ${email}`);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
