const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Sample POST route with validation
app.post('/register', [
  // Validate and sanitize fields
  body('username')
    .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long')
    .trim().escape(),
  body('email')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/\d/).withMessage('Password must contain a number')
], (req, res) => {
  // Handle validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If no errors, process the request
  res.send('User registration successful');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
