const express = require('express');
const app = express();

// Sample Route to Send a Specific Status Code and Response Message
app.get('/success', (req, res) => {
  res.status(200).send('Request was successful!');
});

app.get('/not-found', (req, res) => {
  res.status(404).send('The resource you are looking for was not found.');
});

app.get('/server-error', (req, res) => {
  res.status(500).send('Internal Server Error. Please try again later.');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
