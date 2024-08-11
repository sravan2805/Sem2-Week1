const express = require('express');
const app = express();

// Define a route that responds with a JSON object
app.get('/sendjson', (req, res) => {
    res.json({ message: "Hello, world!" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
