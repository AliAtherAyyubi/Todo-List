import React,{useContext,useRef,useState} from "react";
import TodoContext from "../context/todoContext";

export default function Todoitem() {

  const [value, setvalue] = useState({id:"",task:""})
  let ref=useRef(null)
  let close=useRef(null)
  let context= useContext(TodoContext)
  let {fetchtask,deleteTodo,update}=context
 
  let deletetodo=(id)=>{
    deleteTodo(id)
  }

  let onchange= (e)=>{
    setvalue({...value,[e.target.name]:e.target.value})
  }
  let updatevalue=(t)=>{
    ref.current.click()
      setvalue({id:t._id,task:t.task})
  }
  let updateTodo= ()=>{
    close.current.click()
    update(value.id,value.task)
  }

  return (
    <>
      <ul className="list-group">
        {
          fetchtask.map((i,index)=>{
            return <li className="list-group-item" key={index}>
              {i.task}
              <span className="iconbox">
                <i className="uil uil-pen editbtn icon mx-2" onClick={()=>{updatevalue(i)}} title="Edit"></i>
                <i className="uil uil-trash-alt delicon icon" title="delete" onClick={()=>{deletetodo(i._id)}}></i>
              </span>
              </li>
          })
        }
        
      </ul>

          {/* modal to edit task */}

          {/* <!-- Button trigger modal --> */}
<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <form action="">
          <input type="text" name="task" value={value.task} onChange={onchange} className="form-control" />
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" ref={close} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary" onClick={updateTodo}>Save changes</button>
        </div>
      
    </div>
  </div>
</div>
    </>
  );
}
