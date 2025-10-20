// server.js
const express = require('express');
const app = express();

// Get port from environment variable (Clever Cloud sets this automatically)
const PORT = process.env.PORT || 8080;

// Simple route that displays a test message
app.get('/', (req, res) => {
  res.send('<h1>Test</h1><p>TIF you read this, the script is working :) </p>');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Comment random
// random2
//Random 3