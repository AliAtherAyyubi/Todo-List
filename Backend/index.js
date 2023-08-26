
const express= require('express');
const app= express();

let connectToMongo=require('./db')
connectToMongo();

        // using api to call todo list //

app.use('/api/todo',require('./Routes/todolist'))

app.use(express.json());



app.get('/',(req,res)=>{
    res.send('This is a TodoList app')
})

const port=5000;

app.listen(port,()=>{
    console.log("Site has been started on port 5000")
})