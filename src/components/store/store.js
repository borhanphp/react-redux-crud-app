import { configureStore } from "@reduxjs/toolkit";
import todoReduce from '../state/todoSlice';


export default configureStore({
    reducer: {
        todo: todoReduce
    }
})