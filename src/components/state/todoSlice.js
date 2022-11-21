import { createSlice } from "@reduxjs/toolkit";


export const createTodo = createSlice({

    name: 'Todo',
    initialState: {
        value: []
    },

    reducers: {

        addTodo: (state, action) => {
            state.value.push(action.payload)
        },

        removeTodo: (state, action) => {
            state.value.splice(action.payload, 1)
        },

        editTodo: (state, action) => {
            state.value.splice(action.payload['index'], 1, action.payload['task'])
        }
    }



});


export const {addTodo, removeTodo, editTodo } = createTodo.actions;
export default createTodo.reducer;
