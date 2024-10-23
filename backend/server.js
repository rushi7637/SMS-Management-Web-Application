const express = require('express');
const cors = require('cors'); // Make sure to install this package

const app = express();
const PORT = 5000; // Ensure this port matches your fetch call

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Example login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Replace this logic with your actual authentication logic
  if (username === 'user' && password === 'pass') { // Example check
    res.json({ token: 'sample-jwt-token' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
