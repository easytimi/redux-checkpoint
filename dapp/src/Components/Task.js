import React from 'react';
import {useDispatch} from 'react-redux';
import {handleDelete,} from "../feature/todo/todoslice"
import                './todo.css';
import {useState} from 'react';


const Task =({id,desc,isDone}) => {
    const dispatch= useDispatch();
    const [done,setDone]= useState(false)

    
    return(
        <div className="card"> 
            <h2 className={done?"kut":"kab"}>{desc}</h2>
           <div> 
            <img src= {require("../photos/delete-icon.png")} onClick={()=>dispatch(handleDelete(id))}  alt="delete"/>
           </div> 
           <div><button className="btn"onClick={()=>setDone(!done)}>{done?<h4>taskDone</h4>:<h4>notDone</h4>}</button></div>

             
        </div>
    )
}

export default Task;