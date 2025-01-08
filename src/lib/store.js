import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/totosSlice";
import addUserReducer from './features/addUser/addUserSlice';
import expensesReducer from "./features/expenses/postExpensesSlice";
import getExpensesReducer from "./features/expenses/getExpensesSlice";

const store = configureStore({
    // This is main store in redux 
    reducer: {
        todo: todosReducer,
        users: addUserReducer,
        setExpenses: expensesReducer,
        expensesData: getExpensesReducer,
    }
})

export default store;