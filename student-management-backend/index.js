import express from 'express';
import mongoose from 'mongoose';
import Student from './studentModel.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(express.json());

//embed cors 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const mongoUrl = "mongodb+srv://user:*%23p2i5y1u4mi@cluster0.3zc3a.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0";

console.log('Attempting to connect to MongoDB...');

mongoose.connect(mongoUrl)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/students', (req, res) => {
    const studentData = req.body;
    const student = new Student(studentData);
    student.save()
        .then(() => {
            res.send("Student added");
        })
        .catch((error) => {
            console.error('Error saving student:', error);
            res.status(500).send(error);
        });
});

app.get("/students", (req, res) => {
    Student.find().then((students) => {
        res.send(students);
    })
})
