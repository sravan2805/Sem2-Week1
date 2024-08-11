const express = require('express');
const app = express();

// DELETE route to handle item deletion by ID
app.delete('/delete/:id', (req, res) => {
  const itemId = req.params.id='2020'; // Get the ID from the request parameters
  console.log(`Deleting item with ID: ${itemId}`); // Log the ID to the console

  res.send(`Deleted item with ID: ${itemId}`); // Respond with a message including the ID
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
