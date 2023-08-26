import "../todolist.css";
import Addtodo from "./Addtodo";
import Todoitem from "./Todoitem";
import Button from "@mui/material/Button";

import TodoContext from "../context/todoContext";
import { useContext } from "react";

export default function Todolist(props) {

  let context= useContext(TodoContext)
  let {deleteAll}=context

  let clearTask= ()=>{
    deleteAll()
  }

  return (
    <>
      <h1 className="text-center my-4">Welcome to TodoList</h1>
      <div className="container todobox">
        <Addtodo />

        <h2 className="my-3">Your Task</h2>
        
        <div className="container taskbox">
          <Todoitem />
          <Button
            variant="contained"
            color="error" onClick={clearTask}
            sx={{ marginTop: "20px" }}>
            Clear All
          </Button>
        </div>
      </div>
    </>
  );
}
