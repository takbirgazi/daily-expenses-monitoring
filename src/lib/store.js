import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/totosSlice";

const store = configureStore({
    // This is main store in redux 
    reducer: {
        todo: todosReducer,
    }
})

export default store;