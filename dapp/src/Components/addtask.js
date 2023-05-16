import React from 'react';
import {useDispatch} from 'react-redux';
import {handleAdd} from '../feature/todo/todoslice';
import {useState} from 'react'


const AddTask = () => {
    const dispatch= useDispatch();
    const [desc,setDesc]= useState('')
    const onSubmit= () =>{dispatch(handleAdd({id:Date.now(),desc,isDone:false}))
              setDesc('')
                         }

    return(
        <div className="container">
            <input type ="text"  value={desc} onChange={(e)=>setDesc(e.target.value)} />
            <div><button className="btn-add" onClick={onSubmit} >ADDTASK</button></div>
        </div>
    )
}

export default AddTask;