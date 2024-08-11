const express = require('express');
const app = express();

// Define the GET route
app.get('/greet', (req, res) => {
    const name = req.query.name = 'sravan' || 'Guest'; // Default to 'Guest' if no name is provided
    res.send(`Hello, ${name}!`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
