const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
// Attempt to make a get request from Spotify API server
// const envConfig = require('dotenv').config()

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${PORT}. Go to http://localhost:3000/api`);
});
