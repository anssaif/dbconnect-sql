const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = process.env.API_KEY; // Store your API key in an environment variable

  if (apiKey && apiKey === validApiKey) {
    next(); // API key is valid, proceed to the next middleware or route handler
  } else {
    res.status(403).json({ message: 'Forbidden: Invalid API key' });
  }
};

module.exports = apiKeyMiddleware;