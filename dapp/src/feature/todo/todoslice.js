import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    todoTask:[{id: '1',desc:"playing football" ,isDone:true},{id:'2',desc:"barbing",isDone:false},
{id:'3',desc:"laundry",isDone:false} ]
}
   


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        handleAdd(state,action){state.todoTask.push(action.payload)},
        handleDelete:(state,action) =>{
            const taskid=action.payload;
            state.todoTask=state.todoTask.filter((task)=> task.id!==taskid)

        },
        handleDone:(state,action,id)=>{if (id)
            {
                state.todoTask.isDone?state.todoTask.isDone=false:state.todoTask.isDone=true
            }
        }

    }
})

export const {handleAdd,handleDelete,handleDone}= todoSlice.actions;
export default todoSlice.reducer;