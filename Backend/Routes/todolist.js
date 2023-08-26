
let express = require('express')
const router = express.Router();
const bodyparser=require('body-parser')
const cors= require('cors')

const Todo = require("./todoschema");

router.use(bodyparser.json())
router.use(cors())
// post method to create a todo //
router.post("/addtodo",async(req,res) => {
  try {
   let newtodo= new Todo({
      task:req.body.task
   });

    await newtodo.save();
    return res.json("Saved Successfully");
  } 
  catch (error) {
    return res.json({ error: error.message });
  }
});

    // fetching all todos //
router.get("/fetchtodo", async (req, res) => {
  try {
      let fetchtodo = await Todo.find()
      return res.json(fetchtodo);
  } 
  catch (error) {
    return res.json({ error: error.message });
  }
});
// post method to delete todo //

router.post("/deletetodo", async (req, res) => {
  try {
    var id = req.body.id;
    let deletetodo = await Todo.findByIdAndDelete(id);
    res.send("Deleted Successfully");
  } catch (error) {
    return res.json({ error: error.message });
  }
});

// delete All Todos //

router.get("/deleteAlltodo", async (req, res) => {
  try {
    await Todo.deleteMany();
    res.send("Deleted Successfully");
  } catch (error) {
    return res.json({ error: error.message });
  }
});

router.post("/update", async (req, res) => {
  try {
    let update=await Todo.findByIdAndUpdate({_id:req.body.id},{task:req.body.task})
    if(update)
    res.send("Updated");
  } catch (error) {
    return res.json({ error: error.message });
  }
});

module.exports = router;
