const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000; // Choose a port of your choice

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
  try {
    // Extract data from the request
    const { NAME, M_COUNTRYCODE, MOBILENO } = req.body;

    // Validate data if needed

    // Log the data to the console
    console.log('Received form data:', { NAME, M_COUNTRYCODE, MOBILENO });

    res.status(200).json({ message: 'Data submitted successfully' });
  } catch (error) {
    console.error('Error submitting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
