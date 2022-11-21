import Swal from 'sweetalert2';
import store from '../store/store';
import { editTodo } from '../state/todoSlice';

export function editSweetAlert(i, data){
    Swal.fire({
        title: 'Are you sure?',
        input: 'text',
        inputValue: data,
        inputValidator: (value) => {
            if(value){
                store.dispatch(editTodo({index: i, task: value}))
            }
        }
      })
}