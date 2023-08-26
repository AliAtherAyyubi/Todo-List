
let mongoose= require('mongoose');

let todoSchema= mongoose.Schema({
    task:{
        type:String
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

//  creating model of todoSchema //

let Todo=mongoose.model('todo',todoSchema);

module.exports=Todo