const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// POST route at /echo
app.post('/echo', (req, res) => {
    const requestData = req.body; // Access the JSON data sent in the request body
    res.json("requestData"); // Echo back the JSON data in the response
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
