const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://root:1234@todoapplication.3wtfxoo.mongodb.net/?retryWrites=true&w=majority&appName=ToDoApplication")

    .then(()=> console.log("Connected to DB Successfuly!"))
    .catch(console.error);


    
app.listen(3001, ()=>
     console.log("Server started on Port 3001"));