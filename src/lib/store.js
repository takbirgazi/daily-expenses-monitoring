import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/totosSlice";
import addUserReducer from './features/addUser/addUserSlice';
import expensesReducer from "./features/expenses/postExpensesSlice";
import getExpensesReducer from "./features/expenses/getExpensesSlice";
import getExpensesLimitReducer from "./features/expensesLimit/getExpensesLimitSlice";
import postExpensesLimitReducer from "./features/expensesLimit/postExpensesLimitSlice";

const store = configureStore({
    // This is main store in redux 
    reducer: {
        todo: todosReducer,
        users: addUserReducer,
        setExpenses: expensesReducer,
        expensesData: getExpensesReducer,
        setExpensesLimit: postExpensesLimitReducer,
        ExpensesLimitData: getExpensesLimitReducer,
    }
})

export default store;