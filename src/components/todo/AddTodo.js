import React, { useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, removeTodo, editTodo  } from '../state/todoSlice';
import { editSweetAlert } from './editAlert';

const AddTodo = () => {

    const dispatch = useDispatch();
    const todoInput = useRef();

    const todolist = useSelector((state) => state.todo.value);
  return (
   <>
   
   <div className='container mt-5'>
    <div className='row'>
        <div className='col-10'>
            <input ref={todoInput} type='text' className="form-control"/>
        </div>
        <div className='col-2'>
            <button type="submit" className="btn btn-danger" onClick={() => {dispatch(addTodo(todoInput.current.value))}}>Add Todo</button>
        </div>
    </div>

    <div className='col-12'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {todolist?.map((data, i) => {
                        return(
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{data}</td>
                                <td>
                                    <button className='btn btn-success btn-sm' onClick={() => editSweetAlert(i, data)}>Edit</button>
                                    <button className='btn btn-danger btn-sm' onClick={() => {dispatch(removeTodo(i))}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
   </div>
    
    
   </>
  )
}

export default AddTodo