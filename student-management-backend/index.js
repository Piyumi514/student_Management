import express from 'express';
import mongoose from 'mongoose';
const app = express();

// Your MongoDB connection string
const mongoUrl = "mongodb+srv://user:*%23p2i5y1u4mi@cluster0.3zc3a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
