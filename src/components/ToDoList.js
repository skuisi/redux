import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewItem from './NewItem';
import ToDoItem from './ToDoItem';


const ToDoList = () => {

     const todos = useSelector(state => state.todo.ToDoList)
     console.log(todos);
     const [isdone, setisdone] = useState(false);
     const handledone= () => {
         setisdone(!isdone);
    }

    return (
        <div className="todo-list">

            <NewItem />
            <button onClick={handledone}  >  {isdone ? "show undone" : "show done" }   </button>
            {todos
            .filter((item) => item.isdone === isdone)
            .map((item)=>(
            <ToDoItem item={item} />
            ))}
        </div>
    );
}

export default ToDoList;