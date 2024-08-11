const express = require('express');
const app = express();

// Define the GET route with URL parameter for user ID
app.get('/user/:id', (req, res) => {
    const userId = req.params.id='2005';
    res.send(`User ID: ${userId}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
