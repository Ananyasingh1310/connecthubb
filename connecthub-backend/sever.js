const express = require('express');
const cors = require('cors'); // To handle CORS errors when fetching from different ports
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for your React app to connect

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
