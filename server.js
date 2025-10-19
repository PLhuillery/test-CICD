// server.js
const express = require('express');
const app = express();

// Get port from environment variable (Clever Cloud sets this automatically)
const PORT = process.env.PORT || 8080;

// Simple route that displays "test"
app.get('/', (req, res) => {
  res.send('<h1>Test</h1><p>This is a simple Node.js app</p>');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});