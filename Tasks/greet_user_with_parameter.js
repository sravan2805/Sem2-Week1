const express = require('express');
const app = express();

// Define the GET route with URL parameter
app.get('/greet/:name', (req, res) => {
    const name = req.params.name="Sravan";
    res.send(`Hello, ${name}!`);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
