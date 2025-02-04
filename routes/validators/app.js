const express = require('express');
const app = express();
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const port =5000;

// Middleware
app.use(express.json());  // To parse JSON request bodies

// Database connection
connectDB();

// Routes
app.use('/api', contactRoutes);

// Start the server
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
