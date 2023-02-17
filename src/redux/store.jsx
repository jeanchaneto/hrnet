import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeeList-slice";

//Redux Store setup
const store = configureStore({
    reducer:{ employeesReducer}
})

export default store;