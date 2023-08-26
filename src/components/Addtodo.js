import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TodoContext from "../context/todoContext";

export default function Addtodo(props) {
  const [task, settask] = useState("");
  // getting function from context ./..//
  let context = useContext(TodoContext);
  let { AddTodo } = context;

  // functioin to call api to add todo //
  let handleChange = (e) => {
    e.preventDefault();
    AddTodo(task);
    settask("");
    // console.log(task)
  };

  return (
    <>
      <div className="addtodo mt-4">
        <form action="" method="post" onSubmit={handleChange}>
          <input
            type="text"
            value={task}
            className="form-control todoinput"
            onChange={(e) => {
              settask(e.target.value);
            }}
            placeholder="Write here"
          />

          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={task.length < 5}
            className="addbtn"
            sx={{ marginTop: "20px" }}
          >
            Add
          </Button>
        </form>
      </div>
    </>
  );
}
