import React from 'react';
import {useSelector} from 'react-redux'
import Task from "./Task"


const ListTask = () => {
    const beams = useSelector((state)=> state.todo.todoTask) 
    return(
        <div>{beams.map(beam =>(<Task {...beam}/>) )}</div>
    )
}
export default ListTask;