const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./models/Todo');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://root:1234@todoapplication.3wtfxoo.mongodb.net/")

    .then(()=> console.log("Connected to DB Successfuly!"))
    .catch(console.error);

app.get('/todos', async (req,res) => {
    const todos = await Todo.find();

    res.json(todos);

});

app.post('/todos/new', (req,res) => {
    const todos = new Todo({
        text: req.body.text
    });

    todos.save();
    res.json(todos);
});

app.delete('/todos/delete/:id', async (req,res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
});

app.put('/todos/complete/:id', async(req,res) =>{
    const todos = await Todo.findById(req.params.id);

    todos.complete = !todos.complete;
    todos.save();
    res.json(todos);

});
    


app.listen(3001, ()=>
     console.log("Server started on Port 3001"));