
import React from 'react';
import { useDispatch } from 'react-redux';
import { Deletetask, IsDonetask } from '../REDUX/Slices/ToDoSlice';
import EditModal from './EditModal';

const ToDoItem = ({item}) => {
       const dispatch = useDispatch();    
       const handelDelete=()=> {

        dispatch(Deletetask({ id:item.id}));
        }

        const handelDone = ()=> {

            dispatch(IsDonetask({ id:item.id}));
 
       }


    return (
        <div className="todo-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.isdone?"done" : "not done"}</p>
            <button className="btn btn-danger" onClick={handelDelete} >Delete</button>
            <EditModal ToDoitem={item} />
            <button className="btn btn-danger" onClick={handelDone} >Done{""} </button>
        </div>
    );
}

export default ToDoItem;
