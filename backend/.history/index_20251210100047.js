// ========================================
// SIMPLE BACKEND SERVER WITH MONGODB
// Easy to understand code for beginners!
// ========================================

// STEP 1: Bring in the tools we need
const express = require('express');           // Tool for making a web server
const cors = require('cors');                 // Tool for letting React talk to this server
const mongoose = require('mongoose');         // Tool for talking to MongoDB

// STEP 2: Connect to MongoDB
// Think of it like opening a door to a database in your computer
console.log('📡 Trying to connect to MongoDB...');

mongoose.connect('mongodb://localhost:27017/intern-practise-db');

mongoose.connection.on('connected', () => {
    console.log('✅ Connected to MongoDB successfully!');
});

mongoose.connection.on('error', (error) => {
    console.log('❌ MongoDB connection failed:', error.message);
});

// STEP 3: Create a simple User structure
// This is like a template for user data - what fields a user should have
const userSchema = new mongoose.Schema({
    name: String,          // Name of the user (like "John")
    email: String,         // Email of the user (like "john@example.com")
    createdAt: {           // When was this user created
        type: Date,
        default: Date.now
    }
});

// STEP 4: Create a User collection using the schema
// This is like saying "I'm going to store users in MongoDB with this structure"
const User = mongoose.model('user', userSchema);

// STEP 5: Create the web server (like opening a shop)
const app = express();

// STEP 6: Set up the port number
// This is the address where our server will listen
const port = process.env.PORT || 21000;

// STEP 7: Set up helpers for the server
app.use(cors());            // Allow React to talk to this server
app.use(express.json());    // Help the server understand JSON data

// Root route: open your browser to http://localhost:21000/ and you'll see this message.
app.get('/', (req, res) => {
    res.json({ success: true, message: 'Server is running successfully' });
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Create a new user
app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.json({ success: true, data: savedUser });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Update user
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete user
app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
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
