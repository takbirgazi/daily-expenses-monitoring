import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/totosSlice";
import addUserReducer from './features/addUser/addUserSlice';
import expensesReducer from "./features/expenses/expensesSlice";

const store = configureStore({
    // This is main store in redux 
    reducer: {
        todo: todosReducer,
        users: addUserReducer,
        expenses: expensesReducer,
    }
})

export default store;