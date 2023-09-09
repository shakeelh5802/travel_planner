const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Use port 3000, or set the PORT environment variable

// Middleware
app.use(express.json()); // Enable JSON parsing for incoming requests

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, Travel Planner!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
