const mongoose=require('mongoose');

let dbconn= ()=>{
    mongoose.connect('mongodb://localhost:27017/TodoList').then(()=>{
        console.log("Connected to MongoDB")
    });
}

module.exports= dbconn
