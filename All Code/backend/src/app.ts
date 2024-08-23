import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes';
import authorRoutes from './routes/authorRoutes';
import { config } from './config';
import cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route to test server
app.get("/api/hi", (req, res) => { res.send("Hello World") });

// Use routes for books and authors
app.use('/api/books', bookRoutes);  // Updated path for books
app.use('/api/authors', authorRoutes);  // Updated path for authors

// Connect to MongoDB
mongoose.connect(config.mongodbUri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
