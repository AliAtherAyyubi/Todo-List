import React, { useEffect,useState } from 'react'
import TodoContext from './todoContext'
import axios from 'axios';

export default function TodoState(props) {

    // const host="http://localhost:5000";
    // creating a function to add todo into DB //
    const [fetchtask, setfetchtask] = useState([])
    let AddTodo = async(task)=>{
        await axios.post("http://localhost:5000/api/todo/addtodo",{task})
        FetchTodo()
    }
    let FetchTodo = async()=>{
        let fetchtodo= await axios.get("http://localhost:5000/api/todo/fetchtodo")
        setfetchtask(fetchtodo.data)
    }

    let deleteTodo = async(id)=>{
        await axios.post("http://localhost:5000/api/todo/deletetodo",{id})
        FetchTodo()
    }
    let deleteAll= async()=>{
        await axios.get("http://localhost:5000/api/todo/deleteAlltodo");
        FetchTodo()
    }
    let update= async(id,task)=>{
        await axios.post("http://localhost:5000/api/todo/update",{id,task});
        FetchTodo()
    }

    useEffect(()=>{
        FetchTodo()
    },[])

  return (
    <TodoContext.Provider value={{AddTodo,fetchtask,deleteTodo,deleteAll,update}}>
        {props.children}
    </TodoContext.Provider>
  )
}
