import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ToDoList: [
        {
            id: Math.random(),
            title: 'ToDo Item 1',
            description: 'Description ToDo Item 1',
            isdone: false,
        },
        {
            id: Math.random(),
            title: 'ToDo Item 2',
            description: 'Description ToDo Item 2',
            isdone: false,
        },
        {
            id: Math.random(),
            title: 'ToDo Item 3',
            description: 'Description ToDo Item 3',
            isdone: true,
        },
    ],
}

export const ToDoSlice = createSlice({
  name: 'ToDoList',
  initialState,
  reducers: {
 
    Addtask: (state, action) => {
        state.ToDoList.push(action.payload); 
    },
    Deletetask: (state, action) => {
      state.ToDoList =  state.ToDoList.filter((el)=>el.id!==action.payload.id);
    },
    IsDonetask: (state, action) => {
        let i=state.ToDoList.findIndex((el)=>(el.id === action.payload.id))
        state.ToDoList[i] = {...state.ToDoList[i],isdone: !state.ToDoList[i].isdone}
       
    },
    Edittask: (state, action) => {
        let i=state.ToDoList.findIndex((el)=>(el.id === action.payload.id))
        state.ToDoList[i]={
            ...state.ToDoList[i],title:action.payload.title,description:action.payload.description,
        }
      console.log(action.payload.id) 
    },
  },
  
    
})

// Action creators are generated for each case reducer function
export const { Addtask,Deletetask,IsDonetask,Edittask } = ToDoSlice.actions

export default ToDoSlice.reducer