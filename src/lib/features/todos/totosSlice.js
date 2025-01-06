const { createSlice } = require("@reduxjs/toolkit")

export const todos = createSlice({
    name: "todo",
    initialState: 0,
    reducers: {
        todo: (state) => {
            state++
        }
    }
})

export const { todo } = todos.actions;
export default todos.reducer;
