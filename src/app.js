const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connectDB } = require('./db/connection');
const apiKeyMiddleware = require('./middleware/apiKeyMiddleware');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Custom token to log the IP address
morgan.token('remote-addr', function (req, res) {
  return req.ip || req.connection.remoteAddress;
});

// Use morgan middleware with custom format including IP address
app.use(morgan(':remote-addr - :method :url :status :response-time ms'));

// Middleware
app.use(express.json());
//app.use(morgan('dev')); // Add morgan middleware for logging
app.use(apiKeyMiddleware); // Add API key middleware

// Routes
app.use('/api/items', require('./routes/crudRoutes'));

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});