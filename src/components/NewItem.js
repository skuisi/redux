import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Addtask } from '../REDUX/Slices/ToDoSlice';

const NewItem = () => {

       const [newToDO,setnewTODO]=useState({
           id: Math.random(),
           title:"",
           description:"",
           isdone:false,    
       })
            const dispatch=useDispatch()
           const handleAdd=()=>{

                 dispatch(Addtask(newToDO))

           }

    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setnewTODO({...newToDO, title: e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setnewTODO({...newToDO, description: e.target.value})} />
  </Form.Group>
  <Button style={{ width: '100%' }} variant="primary" onClick={handleAdd} >
    
    Add ToDo{" "}
  </Button>
</Form>
        </div>
    );
}

export default NewItem;
