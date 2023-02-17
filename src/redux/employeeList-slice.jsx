import { createSlice } from "@reduxjs/toolkit";

// Set initial state to an empty list
const initialState = {
    employees : []
}

const employeesSlice = createSlice({
    name: "employeesList",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload) //add employee to list
        }
    }
})

export const employeesAction = employeesSlice.actions;

export default employeesSlice.reducer;