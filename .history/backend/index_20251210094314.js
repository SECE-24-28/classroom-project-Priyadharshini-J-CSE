// A simple Express server that's easy to understand.
// I'll keep comments short and clear so a child can follow along.

const express = require('express');
const cors = require('cors');

// Create the app (this is like starting a tiny web shop)
const app = express();

// Port where the server will listen. You can change it with the PORT environment
// variable or leave it as 21000.
const port = process.env.PORT || 21000;

// Middlewares: things that help the server understand requests
app.use(cors()); // allow other programs (like your React app) to talk to this server
app.use(express.json()); // let the server read JSON sent in the request body

// Root route: open your browser to http://localhost:21000/ and you'll see this message.
app.get('/', (req, res) => {
    res.json({ success: true, message: 'Server is running successfully' });
});

// Example POST route: send JSON to /echo and the server will send it back.
// This helps you test sending data from the frontend.
app.post('/echo', (req, res) => {
    const received = req.body;
    // reply with the same data so you can confirm it arrived
    res.json({ success: true, received });
});

// Catch-all for unknown routes (simple 404 response)
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

// Start the server and print a friendly message to the console.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// That's it — this small server has:
// - a GET '/' route that says the server is alive,
// - a POST '/echo' route to test sending data,
// - and simple 404 handling.
