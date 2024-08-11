const express = require('express');
const userRoutes = require('C:/Users/Srava/OneDrive/Desktop/backend/Tasks/my_express_app/routes/userRoutes'); // Import the routes
const app = express();

// Middleware to parse JSON requests

// Use the imported routes
app.get('/api', userRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
